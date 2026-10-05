#!/usr/bin/env node
/**
 * KSU BUILD — сборка статики из js/config.js.
 *
 *   node tools/build.mjs
 *
 * Делает четыре вещи:
 *   1. вставляет prerender-блоки в index.html (услуги, FAQ, этапы, чипсы
 *      формы, JSON-LD) — чтобы текст и цены были в HTML до запуска JS
 *      и виделись поисковикам, RSS, Discord/Telegram-превью;
 *   2. генерирует SEO-лендинги услуг в order/<slug>/ и hub order/index.html;
 *   3. перегенерирует sitemap.xml;
 *   4. чинит битые JSON-LD-картинки в project-N/ и ставит ?v=<hash> на CSS/JS.
 *
 * Идемпотентен: можно запускать на каждый commit.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { createHash } from 'node:crypto'

const require = createRequire(import.meta.url)
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const CFG = require(join(ROOT, 'js/config.js'))
const R = require(join(ROOT, 'js/render.js'))

const LANG = 'ru'
const URL_ = CFG.siteUrl.replace(/\/$/, '')
let changed = 0

function writeIfChanged(file, content) {
  if (existsSync(file) && readFileSync(file, 'utf8') === content) return
  writeFileSync(file, content)
  changed++
  console.log('  •', file.replace(ROOT + '/', ''))
}

/* ============ 1. PRERENDER В index.html ============ */
function injectMarkers(html, blocks) {
  return html.replace(/<!-- @gen:([a-z-]+):start -->[\s\S]*?<!-- @gen:\1:end -->/g,
    (m, key) => `<!-- @gen:${key}:start -->${blocks[key] ?? ''}<!-- @gen:${key}:end -->`)
}

/** вставляет переводы строк перед повторяющимися элементами — только для читаемости */
function pretty(html, marker) {
  if (!html.trim()) return ''
  return '\n      ' + html.split(marker).join('\n      ' + marker).trim() + '\n    '
}

function missingMarkers(html, keys) {
  return keys.filter(k => !html.includes(`<!-- @gen:${k}:start -->`))
}

function buildIndex() {
  const file = join(ROOT, 'index.html')
  let html = readFileSync(file, 'utf8')
  const keys = ['trust', 'packages', 'services', 'process', 'faq', 'options', 'budget', 'deadline', 'jsonld']
  const miss = missingMarkers(html, keys)
  if (miss.length) {
    console.error('  ! в index.html нет маркеров:', miss.join(', '))
    process.exit(1)
  }
  const blocks = {
    trust: pretty(R.promises(LANG, CFG), '<li class="trust__item">'),
    services: pretty(R.servicesGrid(LANG, CFG), '<article class="svc"'),
    packages: pretty(R.packagesGrid(LANG, CFG), '<article class="pkg"'),
    process: pretty(R.processList(LANG, CFG), '<div class="proc__item">'),
    faq: pretty(R.faqList(LANG, CFG), '<details class="faq__item">'),
    options: '\n            ' + CFG.services.map(s =>
      `<option value="${s.slug}">${R.esc(R.L(LANG, s.titleRu, s.titleEn))} · ${R.esc(R.priceLabel(s, LANG, CFG))}</option>`).join('\n            ') + '\n          ',
    budget: R.chips(CFG.budgets, LANG, 'budget'),
    deadline: R.chips(CFG.deadlines, LANG, 'deadline'),
    jsonld: `\n  <script type="application/ld+json">${R.servicesJsonLd(LANG, CFG)}</script>\n  <script type="application/ld+json">${R.faqJsonLd(LANG, CFG)}</script>\n  `
  }
  html = injectMarkers(html, blocks)

  // версии ресурсов — по хэшу файлов, чтобы Pages/CDN не держали старый кэш
  const hash = (f) => createHash('sha1').update(readFileSync(join(ROOT, f))).digest('hex').slice(0, 8)
  html = html.replace(/(style\.css\?v=)[\w-]+/, '$1' + hash('style.css'))
  html = html.replace(/(tokens\.css\?v=)[\w-]+/, '$1' + hash('css/tokens.css'))
  html = html.replace(/(script\.js\?v=)[\w-]+/, '$1' + hash('script.js'))
  html = html.replace(/(js\/config\.js\?v=)[\w-]+/, '$1' + hash('js/config.js'))
  html = html.replace(/(js\/render\.js\?v=)[\w-]+/, '$1' + hash('js/render.js'))
  html = html.replace(/(js\/track\.js\?v=)[\w-]+/, '$1' + hash('js/track.js'))

  writeIfChanged(file, html)
}

/* ============ 2. ЛЕНДИНГИ УСЛУГ ============ */
function tpl(str, map) {
  return str.replace(/\{(\w+)\}/g, (_, k) => (map[k] != null ? map[k] : ''))
}

function waText(svc) {
  return `Здравствуйте! Хочу обсудить заказ: ${svc.titleRu}.\nСайт: ${URL_}/order/${svc.slug}/`
}

function landing(svc) {
  const price = R.priceLabel(svc, LANG, CFG)
  const range = R.priceRange(svc, CFG, 1)
  const inc = svc.includesRu.map(x => `<li>${R.esc(x)}</li>`).join('\n        ')
  const faqIds = svc.faq || []
  const faqItems = R.faqList(LANG, CFG, faqIds)
  const procRaw = R.processList(LANG, CFG)
  const proc = procRaw.split('<div class="proc__item">').slice(1).map(x => '<div class="proc__item">' + x)
  const og = svc.project != null ? `${URL_}/og-${svc.project}.jpg` : `${URL_}/og-dajet.jpg`
  const title = tpl(CFG.seo.landingTitleRu, { title: svc.titleRu, price: R.num(svc.priceFrom) })
  const desc = tpl(CFG.seo.landingDescriptionRu, {
    title: svc.titleRu, price: R.num(svc.priceFrom), short: svc.shortRu,
    duration: svc.durationRu, includes: svc.includesRu.slice(0, 2).join(' · ')
  })
  const jsonLd = JSON.stringify([{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.titleRu,
    description: svc.shortRu,
    serviceType: svc.category,
    provider: { '@type': 'Person', name: CFG.brand.nameRu, url: `${URL_}/` },
    areaServed: 'RU',
    url: `${URL_}/order/${svc.slug}/`,
    offers: {
      '@type': 'Offer', priceCurrency: 'RUB', price: svc.priceFrom,
      availability: 'https://schema.org/InStock', url: `${URL_}/order/${svc.slug}/`
    }
  }, JSON.parse(R.faqJsonLd(LANG, CFG, faqIds))])

  return `<!DOCTYPE html>
<!-- Сгенерировано tools/build.mjs из js/config.js. Не правьте руками — правьте конфиг и пересоберите. -->
<html lang="ru">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${R.esc(title)}</title>
<meta name="description" content="${R.esc(desc)}"/>
<meta name="robots" content="index, follow, max-image-preview:large"/>
<link rel="canonical" href="${URL_}/order/${svc.slug}/"/>
<link rel="prev" href="${URL_}/order/"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="${URL_}/order/${svc.slug}/"/>
<meta property="og:site_name" content="${CFG.brand.nameRu} — графический дизайнер"/>
<meta property="og:title" content="${R.esc(svc.titleRu)} — от ${R.num(svc.priceFrom)} ₽, срок ${R.esc(svc.durationRu)}"/>
<meta property="og:description" content="${R.esc(svc.shortRu)}"/>
<meta property="og:image" content="${og}"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:locale" content="ru_RU"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${R.esc(svc.titleRu)} — от ${R.num(svc.priceFrom)} ₽"/>
<meta name="twitter:description" content="${R.esc(svc.shortRu)}"/>
<meta name="twitter:image" content="${og}"/>
<link rel="icon" type="image/jpeg" sizes="32x32" href="../../icons/icon-32.png"/>
<script type="application/ld+json">${jsonLd}</script>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&family=Inter:wght@300..700&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="../../css/tokens.css"/>
<link rel="stylesheet" href="../../style.css"/>
<script>try{document.documentElement.setAttribute('data-theme',localStorage.getItem('theme')||'dark')}catch(e){}</script>
</head>
<body>
<div class="lp">
  <a class="lp__back" href="../../">← ${CFG.brand.nameRu} — все работы и контакты</a>
  <div class="lp__cat">${R.esc(svc.category)} · услуга №${CFG.services.indexOf(svc) + 1}</div>
  <h1 class="lp__h1">${R.esc(svc.titleRu)}</h1>
  <p class="lp__lead">${R.esc(svc.shortRu)}</p>

  <div class="lp__bar">
    <div><span>цена</span><br/><b>${R.esc(price)}</b></div>
    <div><span>обычно выходит</span><br/><b>${R.esc(range)}</b></div>
    <div><span>срок</span><br/><b>${R.esc(svc.durationRu)}</b></div>
    <div><span>правки</span><br/><b>2 круга включены</b></div>
    <div class="lp__actions">
      <a class="btn btn--accent" href="${R.waHref(CFG, waText(svc))}" target="_blank" rel="noopener">Обсудить в WhatsApp</a>
      <a class="btn btn--ghost" href="../../?svc=${svc.slug}#order">Заполнить бриф</a>
    </div>
  </div>

  <p class="services__note">${R.esc(CFG.promises.responseRu)}. ${R.esc(CFG.pricing.prepaymentRu)}. ${R.esc(CFG.promises.editRu)}. ${R.esc(CFG.promises.fileRu)}.</p>

  <h2 class="lp__h2">Что входит в работу</h2>
  <ul class="lp__inc">
        ${inc}
  </ul>
  <p class="lp__note"><b>Кому подходит:</b> ${R.esc(svc.bestForRu)}. ${R.esc(CFG.pricing.noteRu)}</p>

  ${svc.project != null ? `<h2 class="lp__h2">Как это выглядит на практике</h2>
  <a class="lp__work" href="../../#project-${svc.project}">
    <img src="../../${svc.cover}" alt="${R.esc(svc.titleRu)} — пример работы Ксении" loading="lazy" width="1200" height="800"/>
  </a>
  <p class="services__note"><a class="section-head__cta" href="../../#project-${svc.project}">Смотреть проект целиком →</a></p>` : ''}

  <h2 class="lp__h2">Как строится работа</h2>
  <div class="proc" style="grid-template-columns:repeat(2,1fr)">
    ${proc.join('\n    ')}
  </div>

  ${faqItems ? `<h2 class="lp__h2">Вопросы про «${R.esc(svc.titleRu)}»</h2>
  <div class="faq__list">${faqItems}</div>` : ''}

  <div class="lp__cta">
    <h2>Напишите пару строк — остальное соберу я</h2>
    <p>Опишите задачу в брифе на сайте: я вернусь с уточняющими вопросами и точной сметой. Отвечаю в течение дня.</p>
    <div class="lp__actions">
      <a class="btn btn--accent btn--lg" href="${R.waHref(CFG, waText(svc))}" target="_blank" rel="noopener">Заказать: ${R.esc(svc.titleRu)}</a>
      <a class="btn btn--ghost btn--lg" href="../../?svc=${svc.slug}#order">Бриф на 3 минуты</a>
    </div>
  </div>
</div>
<div class="lp__foot">
  <span>© ${new Date().getFullYear()} ${CFG.brand.nameRu} · ${CFG.brand.roleRu}</span>
  <span><a href="../../">Портфолио</a> · <a href="../../#services">Все услуги</a> · <a href="mailto:${CFG.contacts.email}">${CFG.contacts.email}</a> · <a href="../../privacy/">Политика конфиденциальности</a></span>
</div>
<div class="sticky-cta sticky-cta--on" style="display:none">
  <div class="sticky-cta__price"><span>от</span><b>${R.esc(R.price(svc.priceFrom, CFG))}</b></div>
  <a href="${R.waHref(CFG, waText(svc))}" class="btn btn--accent" target="_blank" rel="noopener">Обсудить заказ</a>
</div>
<script>
  // мобильная плашка с ценой — как на главной
  try {
    if (matchMedia('(max-width:768px)').matches) {
      var b = document.querySelector('.sticky-cta');
      b.style.display = 'flex';
      var io = new IntersectionObserver(function (e) {
        b.classList.toggle('sticky-cta--on', !e[0].isIntersecting);
      }, { threshold: 0 });
      io.observe(document.querySelector('.lp__cta'));
    }
  } catch (e) {}
</script>
</body>
</html>
`
}

function buildLandings() {
  for (const svc of CFG.services) {
    const dir = join(ROOT, 'order', svc.slug)
    mkdirSync(dir, { recursive: true })
    writeIfChanged(join(dir, 'index.html'), landing(svc))
  }
  // hub — страница со всеми услугами и ценами
  const grid = R.servicesGrid(LANG, CFG, '').split('</article>').filter(Boolean)
    .map(x => x + '</article>').join('\n      ')
  const hub = `<!DOCTYPE html>
<!-- Сгенерировано tools/build.mjs из js/config.js. -->
<html lang="ru">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Услуги и цены графического дизайнера — логотип, упаковка, иллюстрация | ${CFG.brand.nameRu}</title>
<meta name="description" content="Прайс: ${CFG.services.map(s => `${s.titleRu} от ${R.num(s.priceFrom)} ₽`).join(', ')}. Сроки, что входит в работу и бриф онлайн."/>
<meta name="robots" content="index, follow, max-image-preview:large"/>
<link rel="canonical" href="${URL_}/order/"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Услуги и цены — ${CFG.brand.nameRu}, графический дизайнер"/>
<meta property="og:description" content="${CFG.services.length} услуг с ценами «от» и сроками. Бриф на сайте — 3 минуты."/>
<meta property="og:image" content="${URL_}/og-dajet.jpg"/>
<meta property="og:locale" content="ru_RU"/>
<link rel="icon" type="image/jpeg" sizes="32x32" href="../icons/icon-32.png"/>
<script type="application/ld+json">${R.servicesJsonLd(LANG, CFG)}</script>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&family=Inter:wght@300..700&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="../css/tokens.css"/>
<link rel="stylesheet" href="../style.css"/>
</head>
<body>
<div class="lp">
  <a class="lp__back" href="../">← Портфолио ${CFG.brand.nameRu}</a>
  <h1 class="lp__h1">Услуги и цены</h1>
  <p class="lp__lead">Направления, в которых я работаю. Возле каждой цены — что входит в работу и реальный срок. Итог считаю после брифа, обычно в тот же день.</p>
  <div class="services__grid" style="grid-template-columns:repeat(2,1fr)">
      ${grid}
  </div>
  <p class="services__note">${R.esc(CFG.pricing.noteRu)}</p>
  <div class="lp__cta">
    <h2>Нет вашей задачи в списке?</h2>
    <p>Напишите, что нужно сделать — посчитаю отдельно. Если задачу не потяну, честно скажу и, если смогу, подскажу коллегу.</p>
    <div class="lp__actions">
      <a class="btn btn--accent btn--lg" href="../#order" >Заполнить бриф</a>
      <a class="btn btn--ghost btn--lg" href="${R.waHref(CFG, 'Здравствуйте! Хочу уточнить по поводу услуги.')}" target="_blank" rel="noopener">Спросить в WhatsApp</a>
    </div>
  </div>
</div>
<div class="lp__foot">
  <span>© ${new Date().getFullYear()} ${CFG.brand.nameRu} · ${CFG.brand.roleRu}</span>
  <span><a href="../">Портфолио</a> · <a href="../#faq">Вопросы</a> · <a href="mailto:${CFG.contacts.email}">${CFG.contacts.email}</a> · <a href="../privacy/">Политика конфиденциальности</a></span>
</div>
</body>
</html>
`
  mkdirSync(join(ROOT, 'order'), { recursive: true })
  writeIfChanged(join(ROOT, 'order/index.html'), hub)
}

/* ============ 3. SITEMAP ============ */
function buildSitemap() {
  const urls = [
    { loc: `${URL_}/`, pri: '1.0', freq: 'weekly' },
    { loc: `${URL_}/order/`, pri: '0.9', freq: 'monthly' },
    ...CFG.services.map(s => ({ loc: `${URL_}/order/${s.slug}/`, pri: '0.8', freq: 'monthly' }))
  ]
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- сгенерировано tools/build.mjs — правки вносите в js/config.js -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pri}</priority>
  </url>`).join('\n')}
</urlset>
`
  writeIfChanged(join(ROOT, 'sitemap.xml'), xml)
}

/* ============ 4. ПОДЧИСТКА ============ */
function fixProjectStubs() {
  // в project-*/ был склеен image в JSON-LD: "og-0.jpg" + "cover.jpg"
  for (let i = 0; i < 11; i++) {
    const f = join(ROOT, `project-${i}/index.html`)
    if (!existsSync(f)) continue
    let html = readFileSync(f, 'utf8')
    const before = html
    html = html.replace(/("image":"https:\/\/[^"]+\/og-\d+\.jpg)[^"]*"/g, '$1"')
    // язык и alt по-русски + корректный og:image для сниппета
    html = html.replace('<html lang="en">', '<html lang="ru">')
    if (before !== html) writeIfChanged(f, html)
  }
}

function updateWaLinks() {
  // убираем битый t.me/+… (это формат приглашения в чат, а не контакт)
  const f = join(ROOT, 'index.html')
  let html = readFileSync(f, 'utf8')
  const before = html
  html = html.replace(/,\s*"https:\/\/t\.me\/\+?\d+"/g, '')
  html = html.replace(/<a href="https:\/\/t\.me\/\+?\d+"[^>]*>.*?<\/a>\s*/g, '')
  if (before !== html) writeIfChanged(f, html)
}

console.log('KSU build:')
buildIndex()
buildLandings()
buildSitemap()
fixProjectStubs()
updateWaLinks()
console.log(`Готово. Обновлено файлов: ${changed}`)
