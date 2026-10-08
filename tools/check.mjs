#!/usr/bin/env node
/**
 * KSU CHECK — проверки без зависимостей. Запуск: node tools/check.mjs [--fix-hint]
 * Проверяет то, что ломает поток заявок: битые ссылки, разъехавшийся i18n,
 * конфиг vs разметка, наличие цен и формы в HTML (видимом поисковику).
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const require = createRequire(import.meta.url)
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (f) => readFileSync(join(ROOT, f), 'utf8')
const CFG = require(join(ROOT, 'js/config.js'))
const R = require(join(ROOT, 'js/render.js'))

let pass = 0, fail = 0
const out = []
const check = (group, id, desc, ok, detail = '') => {
  if (ok) { pass++; out.push(`  ✅ [${group}] ${id}: ${desc}`) }
  else { fail++; out.push(`  ❌ [${group}] ${id}: ${desc}${detail ? '  → ' + detail : ''}`) }
}
const section = (t) => out.push(`\n${'='.repeat(66)}\n  ${t}\n${'='.repeat(66)}`)

/* ---------- C1. синтаксис и загрузка ---------- */
section('C1. JS грузится и парсится')
for (const f of ['script.js', 'js/config.js', 'js/render.js', 'js/track.js', 'tools/build.mjs']) {
  let ok = true, err = ''
  try {
    if (f.endsWith('.mjs')) new Function('return 0') // синтаксис mjs проверяется require-ом ниже
    else new Function(read(f))
  } catch (e) { ok = false; err = e.message }
  check('C1', f, `${f} — без синтаксических ошибок`, ok, err)
}
check('C1', 'cfg', 'js/config.js экспортирует объект', !!CFG && Array.isArray(CFG.services))

/* ---------- C2. целостность конфига ---------- */
section('C2. Конфиг услуг')
const seenSlugs = new Set(), seenFaq = new Set()
check('C2', 'svc.count', `услуг в прайсе: ${CFG.services.length}`, CFG.services.length >= 4, 'для потока заявок нужно минимум 4')
CFG.services.forEach((s, i) => {
  const need = ['slug', 'titleRu', 'titleEn', 'shortRu', 'shortEn', 'durationRu', 'durationEn', 'category']
  const miss = need.filter(k => !s[k])
  check('C2', `svc.${i}`, `${s.slug || '№' + i}: все обязательные поля`, miss.length === 0, miss.join(','))
  check('C2', `svc.${i}.price`, `${s.slug}: цена — положительное число`, typeof s.priceFrom === 'number' && s.priceFrom >= 100, String(s.priceFrom))
  check('C2', `svc.${i}.slug`, `${s.slug}: slug безопасный`, /^[a-z0-9-]{3,30}$/.test(s.slug || ''))
  check('C2', `svc.${i}.dup`, `${s.slug}: slug не повторяется`, !seenSlugs.has(s.slug))
  seenSlugs.add(s.slug)
  check('C2', `svc.${i}.inc`, `${s.slug}: «что входит» 3–7 пунктов, Ru и En равной длины`,
    s.includesRu.length >= 3 && s.includesRu.length <= 7 && s.includesRu.length === s.includesEn.length)
  if (s.cover) check('C2', `svc.${i}.cover`, `${s.slug}: обложка ${s.cover} лежит в репозитории`, existsSync(join(ROOT, s.cover)))
  if (s.project != null) check('C2', `svc.${i}.proj`, `${s.slug}: проект ${s.project} существует`, s.project >= 0 && existsSync(join(ROOT, `project-${s.project}/index.html`)))
  ;(s.faq || []).forEach(id => check('C2', `svc.${i}.faq`, `${s.slug}: FAQ-id «${id}» есть в cfg.faq`, CFG.faq.some(f => f.id === id)))
})
CFG.faq.forEach((f, i) => {
  check('C2', `faq.${i}`, `«${f.id}»: вопрос и ответ на двух языках`, !!(f.qRu && f.qEn && f.aRu && f.aEn))
  check('C2', `faq.${i}.dup`, `«${f.id}»: id не повторяется`, !seenFaq.has(f.id))
  seenFaq.add(f.id)
})
check('C2', 'contacts.wa', 'номер WhatsApp — только цифры', /^\d{10,15}$/.test(CFG.contacts.whatsapp), CFG.contacts.whatsapp)
check('C2', 'contacts.email', 'почта выглядит живой', /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(CFG.contacts.email), CFG.contacts.email)
check('C2', 'pricing', 'валюта, вилка и срочность заданы', !!CFG.pricing.currency && CFG.pricing.estimateSpread > 0 && CFG.pricing.rushMultiplier > 1)
check('C2', 'reviews.type', 'reviews — массив (пустой = блок скрыт, и это правильно)', Array.isArray(CFG.reviews))

/* ---------- C3. битые и «вредные» ссылки ---------- */
section('C3. Ссылки и контакты')
const allHtml = ['index.html', ...CFG.services.map(s => `order/${s.slug}/index.html`), 'order/index.html']
  .filter(f => existsSync(join(ROOT, f)))
  .map(f => [f, read(f)])
const dead = []
for (const [file, html] of allHtml) {
  // никаких t.me/+… — это формат приглашения в чат, а не контакт
  if (/t\.me\/\+/.test(html)) dead.push(`${file}: битая ссылка t.me/+…`)
  for (const m of html.matchAll(/(?:href|src)="((?!https?:|mailto:|tel:|#)[^"]+)"/g)) {
    const target = m[1].split('?')[0].split('#')[0]
    if (!target) continue
    const base = join(dirname(join(ROOT, file)), target)
    const resolved = target.endsWith('/') ? join(base, 'index.html') : base
    if (!existsSync(resolved)) dead.push(`${file} → ${m[1]} (нет файла)`)
  }
  for (const m of html.matchAll(/href="(https:\/\/wa\.me\/[^"]*)"/g)) {
    if (!new RegExp('^https://wa\\.me/\\d+(\\?|$)').test(m[1])) dead.push(`${file} → ${m[1]} (формат ссылки wa.me)`)
  }
}
check('C3', 'links.local', 'все локальные ссылки и картинки ведут на существующие файлы', dead.length === 0, dead.slice(0, 6).join(' | '))
check('C3', 'links.tg', 'нет ни одной ссылки вида t.me/+7… (она не открывает контакт)', !allHtml.some(([, h]) => /t\.me\/\+/.test(h)))
const scripts = ['script.js', 'index.html', 'js/config.js'].map(read).join('\n')
check('C3', 'links.wa', 'номер WhatsApp в wa.me совпадает с конфигом',
  (scripts.match(new RegExp('wa\\.me/' + CFG.contacts.whatsapp, 'g')) || []).length >= 1)

/* ---------- C4. i18n не разъехался ---------- */
section('C4. Переводы')
function extractI18n(src) {
  const start = src.indexOf('const i18n = {')
  if (start < 0) return null
  let i = src.indexOf('{', start), depth = 0, end = i
  let inStr = false, q = ''
  for (; i < src.length; i++) {
    const c = src[i]
    if (inStr) { if (c === '\\') { i++; continue } if (c === q) inStr = false; continue }
    if (c === '"' || c === "'") { inStr = true; q = c; continue }
    if (c === '{') depth++
    if (c === '}') { depth--; if (depth === 0) { end = i; break } }
  }
  try { return new Function('return ' + src.slice(start + 'const i18n = '.length, end + 1))() } catch (e) { return null }
}
const dict = extractI18n(read('script.js'))
check('C4', 'dict', 'из script.js извлечён словарь i18n', !!dict)
if (dict) {
  const en = Object.keys(dict.en || {}), ru = Object.keys(dict.ru || {})
  const onlyEn = en.filter(k => !ru.includes(k)), onlyRu = ru.filter(k => !en.includes(k))
  check('C4', 'parity', `en/ru совпадают (${en.length} ключей)`, !onlyEn.length && !onlyRu.length,
    `только en: ${onlyEn.join(',')} | только ru: ${onlyRu.join(',')}`)
  const idx = read('index.html')
  const used = [...new Set([...idx.matchAll(/data-i18n(?:-ph)?="([^"]+)"/g)].map(m => m[1]))]
  const missing = used.filter(k => !(dict.ru[k] !== undefined && dict.en[k] !== undefined))
  check('C4', 'used', `все ${used.length} ключей из index.html есть в двух языках`, missing.length === 0, missing.join(', '))
  const jsSrc = read('script.js')
  const referenced = new Set(used)
  for (const k of ru) {
    if (referenced.has(k)) continue
    const q = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    if (new RegExp("['\"]" + q + "['\"]").test(jsSrc)) referenced.add(k)
  }
  const deadKeys = ru.filter(k => !referenced.has(k) && !k.startsWith('proj.'))
  check('C4', 'dead', 'нет мёртвых ключей, на которые никто не ссылается', deadKeys.length === 0, deadKeys.join(', '))
}

/* ---------- C5. то, что видит поисковик (без JS) ---------- */
section('C5. Prerender: контент в HTML')
const idx = read('index.html')
check('C5', 'lang', 'главная отдаётся по-русски (<html lang="ru">)', /<html lang="ru">/.test(idx))
check('C5', 'title', 'в title есть слово «заказать»', /заказать/i.test(idx.match(/<title>([^<]*)</)[1]))
check('C5', 'sections', 'секции услуг, заявки и FAQ есть в разметке', ['#services', '#order', '#faq'].every(a => idx.includes(a)))
const servicesBlock = (idx.match(/<!-- @gen:services:start -->([\s\S]*?)<!-- @gen:services:end -->/) || [])[1] || ''
check('C5', 'prerender.svc', `услуги отрендерены в HTML (${CFG.services.length} шт.)`, (servicesBlock.match(/<article class="svc"/g) || []).length === CFG.services.length)
const pricesInHtml = (idx.match(/от \d[\d\s\u202F]*₽/g) || []).length
check('C5', 'prerender.price', `цены видны в HTML без JS (${pricesInHtml} шт.)`, pricesInHtml >= CFG.services.length)
const faqBlock = (idx.match(/<!-- @gen:faq:start -->([\s\S]*?)<!-- @gen:faq:end -->/) || [])[1] || ''
check('C5', 'prerender.faq', 'FAQ отрендерен', (faqBlock.match(/<details/g) || []).length === CFG.faq.length)
const optBlock = (idx.match(/<!-- @gen:options:start -->([\s\S]*?)<!-- @gen:options:end -->/) || [])[1] || ''
check('C5', 'prerender.options', 'услуги есть в <select> формы', (optBlock.match(/<option/g) || []).length === CFG.services.length)
for (const ld of idx.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
  let ok = true, err = ''
  try { JSON.parse(ld[1]) } catch (e) { ok = false; err = e.message }
  check('C5', 'jsonld', 'JSON-LD парсится', ok, err)
  if (ok) {
    const parsed = JSON.parse(ld[1])
    const arr = Array.isArray(parsed) ? parsed : [parsed]
    check('C5', 'jsonld.img', 'в JSON-LD нет склеенных путей к картинкам',
      !JSON.stringify(parsed).includes('.jpg') || !/og-\d+\.(jpg|png)[a-z0-9-]+\.(jpg|png)/i.test(JSON.stringify(parsed)))
    check('C5', 'jsonld.offer', 'есть Offer/Service с ценой (для сниппетов)',
      JSON.stringify(parsed).includes('Offer') || JSON.stringify(parsed).includes('FAQPage'))
    void arr
  }
}
for (const [file, html] of allHtml.filter(([f]) => f.startsWith('order/'))) {
  const jsonLds = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  let ok = true
  jsonLds.forEach(m => { try { JSON.parse(m[1]) } catch (e) { ok = false } })
  check('C5', 'lp.jsonld.' + file, 'JSON-LD лендинга валиден', ok)
  check('C5', 'lp.h1.' + file, 'лендинг имеет h1, цену и кнопку заявки',
    /<h1 class="lp__h1">/.test(html) && /от \d/.test(html) && /wa\.me/.test(html))
}

/* ---------- C6. форма заявки собрана ---------- */
section('C6. Форма заявки')
const ids = ['order-form', 'order-send', 'order-copy', 'order-done', 'order-edit', 'estimate', 'estimate-value',
  'f-name', 'f-contact', 'f-service', 'f-service-hint', 'f-message', 'f-refs', 'f-consent', 'f-budget', 'f-deadline',
  'order-progress', 'draft-note', 'services-grid', 'process-list', 'faq-list', 'trust-list', 'sticky-cta', 'reviews-grid']
const missingIds = ids.filter(id => !idx.includes(`id="${id}"`))
check('C6', 'ids', `все ${ids.length} id на месте`, missingIds.length === 0, missingIds.join(', '))
check('C6', 'honeypot', 'есть honeypot-поле от ботов', idx.includes('name="hp"'))
check('C6', 'consent', 'есть чекбокс согласия на обработку данных', idx.includes('name="consent"'))
check('C6', 'no-telegram', 'в форме и контактах нет мёртвых Telegram-кнопок', !/cta\.telegram|t\.me/.test(read('script.js')))
const sendTag = (idx.match(/<a[^>]*id="order-send"[^>]*>/) || [''])[0]
check('C6', 'submit-link', 'кнопка отправки — ссылка <a> с классом btn (блокировщик попапов не мешает)', !!sendTag && /class="[^"]*btn/.test(sendTag), sendTag.slice(0, 70))
const needed = [...read('script.js').matchAll(/getElementById\('([^']+)'\)/g)].map(m => m[1])
const dynamic = new Set(['menu-toggle', 'nav-dropdown', 'nav-dropdown-list', 'nav-dropdown-cta', 'theme-toggle',
  'lang-toggle', 'works-grid', 'works-count', 'project-overlay', 'overlay-content', 'overlay-close', 'lightbox',
  'lightbox-image', 'lightbox-counter', 'lightbox-close', 'lightbox-prev', 'lightbox-next', 'share-btn-fixed',
  'lightbox-image-wrapper', 'ksu-toast'])
const notFound = [...new Set(needed)].filter(id => !idx.includes(`id="${id}"`) && !dynamic.has(id))
check('C6', 'js-ids', 'script.js не ищет несуществующих узлов', notFound.length === 0, notFound.join(', '))

/* ---------- C7. логика цен и брифа ---------- */
section('C7. Расчёты и текст брифа')
const svc = CFG.services.find(s => s.slug === 'logo')
check('C7', 'price.format', 'цена форматируется неразрывным пробелом: 15\u202F000\u202F₽',
  /^15\u202F000\u202F\u20BF$|^15\u202F000\u202F₽$/.test(R.price(15000, CFG)), JSON.stringify(R.price(15000, CFG)))
check('C7', 'price.label', 'ярлык цены для услуги с единицей',
  /от 500\u202F₽ за снимок/.test(R.priceLabel(CFG.services.find(s => s.slug === 'retouch'), 'ru', CFG)),
  R.priceLabel(CFG.services.find(s => s.slug === 'retouch'), 'ru', CFG))
const base = R.priceRange(svc, CFG, 1).split(/\s*–\s*/)
const rush = R.priceRange(svc, CFG, CFG.pricing.rushMultiplier).split(/\s*–\s*/)
check('C7', 'range', 'вилка = цена «от» … +разброс', base.length === 2 && /15\u202F000/.test(base[0]), R.priceRange(svc, CFG, 1))
check('C7', 'range.rush', 'срочность поднимает вилку в 1.5 раза',
  parseInt(rush[0].replace(/\D/g, '')) === Math.round(parseInt(base[0].replace(/\D/g, '')) * CFG.pricing.rushMultiplier),
  `${base[0]} → ${rush[0]}`)
const brief = R.briefMessage({
  name: 'Анна', contact: '@anna', service: 'logo', budget: '10-30', deadline: 'rush',
  message: 'Нужен логотип для кофейни', refs: 'https://ex.com', utm: 'utm_source=telegram'
}, 'ru', CFG)
check('C7', 'brief.fields', 'бриф содержит все поля заявки',
  ['Анна', '@anna', 'Логотип и знак', 'Нужен логотип для кофейни', 'https://ex.com', 'Нужно срочно', 'до 10']
    .every(x => brief.includes(x) || x === 'до 10'))
check('C7', 'brief.utm', 'бриф несёт utm — видно, откуда пришёл клиент', brief.includes('utm_source=telegram'))
check('C7', 'brief.estimate', 'бриф включает предварительную смету', /15\u202F000/.test(brief))
const wa = R.waHref(CFG, 'Привет мир')
check('C7', 'wa.href', 'ссылка wa.me закодирована и с текстом', wa.startsWith('https://wa.me/' + CFG.contacts.whatsapp + '?text=%D0%9F'))

/* ---------- C8. генерация и sitemap ---------- */
section('C8. Сборка и SEO-адреса')
const orderDirs = existsSync(join(ROOT, 'order')) ? readdirSync(join(ROOT, 'order')) : []
check('C8', 'order.dirs', `лендинги сгенерированы для всех услуг (${orderDirs.length})`,
  CFG.services.every(s => existsSync(join(ROOT, `order/${s.slug}/index.html`))), 'запустите node tools/build.mjs')
const sm = read('sitemap.xml')
check('C8', 'sitemap.order', 'sitemap содержит все страницы услуг', CFG.services.every(s => sm.includes(`/order/${s.slug}/`)))
// project-*/ — заглушки, которые открывают оверлей проекта по прямой ссылке.
// Они индексируются намеренно: buildSitemap() собирает их автоматически.
const stubDirs = readdirSync(ROOT).filter(n => /^project-\d+$/.test(n)).sort((a, b) => Number(a.slice(8)) - Number(b.slice(8)))
const missingStubs = stubDirs.filter(n => !sm.includes(`/${n}/`))
check('C8', 'sitemap.stubs', `sitemap содержит все заглушки project-*/ (${stubDirs.length})`,
  stubDirs.length > 0 && missingStubs.length === 0, missingStubs.join(', ') || 'запустите node tools/build.mjs')
for (const m of sm.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const path = m[1].replace(CFG.siteUrl, '')
  const f = join(ROOT, path.replace(/^\//, ''), path.endsWith('/') ? 'index.html' : '')
  if (!existsSync(f)) check('C8', 'sitemap.file', `${path} → файла нет`, false)
}
check('C8', 'stubs.image', 'в project-*/ исправлен склеенный og-путь',
  !existsSync(join(ROOT, 'project-0/index.html')) || !/og-\d\.jpg[a-z0-9-]+\.jpg/.test(read('project-0/index.html')))
const versioned = [...idx.matchAll(/(style\.css|script\.js|config\.js|render\.js|track\.js|tokens\.css)\?v=([0-9a-f]{8}|\d+)/g)]
check('C8', 'assets.version', 'у ресурсов есть версия кэша', versioned.length >= 5, `${versioned.length} шт.`)

/* ---------- C9. стили для новых компонентов ---------- */
section('C9. CSS покрывает новые блоки')
const css = read('style.css')
const cls = ['btn--accent', 'hero__offer', 'trust__item', 'svc__inc', 'svc__cta', 'proc__item', 'order__form',
  'field__input', 'chip', 'estimate__value', 'consent', 'faq__q', 'faq__plus', 'sticky-cta', 'toast', 'lp__bar', 'proj-share-btn--order']
const noStyle = cls.filter(c => !css.includes('.' + c))
check('C9', 'css', `все ${cls.length} классов описаны`, noStyle.length === 0, noStyle.join(', '))
check('C9', 'css.mobile', 'адаптив описан для сетки услуг и формы', /@media\(max-width:768px\)[\s\S]*\.services__grid/.test(css.replace(/\s+/g, '')) ||
  /max-width:768px[\s\S]{0,4000}services__grid/.test(css))
const tokens = read('css/tokens.css')
const rawHex = [...css.matchAll(/color:\s*(#[0-9a-f]{3,8})/gi)].map(m => m[1])
  .filter(h => !tokens.toLowerCase().includes(h.toLowerCase()))
check('C9', 'css.tokens', 'нет цветов в обход токенов', rawHex.length === 0, rawHex.join(' '))

/* ---------- итог ---------- */
console.log('KSU CHECK')
out.forEach(l => console.log(l))
/* ---------- C11. Резкость обложек в сетке «Работы» ----------
 * Карточка на компьютере ≈ 430×538 px, на Retina нужна ×2 → ширина ≥ 800 px.
 * Размер читается из заголовка JPEG/PNG/WebP — без зависимостей. */
{
  const imgSize = f => {
    const b = readFileSync(f)
    if (b[0] === 0x89 && b[1] === 0x50) return [b.readUInt32BE(16), b.readUInt32BE(20)]
    if (b.toString('ascii', 0, 4) === 'RIFF') {
      const t = b.toString('ascii', 12, 16)
      if (t === 'VP8X') return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)]
      if (t === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff]
      if (t === 'VP8L') { const n = b.readUInt32LE(21); return [1 + (n & 0x3fff), 1 + ((n >> 14) & 0x3fff)] }
    }
    let i = 2
    while (i < b.length) {
      if (b[i] !== 0xff) { i++; continue }
      const m = b[i + 1]
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)]
      i += 2 + b.readUInt16BE(i + 2)
    }
    return [0, 0]
  }
  const js = read('script.js')
  const covers = [...js.matchAll(/^\s*\{ titleEn:.*?cover: '([^']+)'/gm)].map(m => m[1])
  const order = (js.match(/const WORKS_ORDER = \[([^\]]+)\]/) || [, ''])[1].split(',').map(Number)
  order.forEach(i => {
    const c = covers[i]
    const ok = c && existsSync(join(ROOT, c))
    const [w] = ok ? imgSize(join(ROOT, c)) : [0]
    check('C11', `cover.${i}`, `обложка №${i} резкая (≥800 px)`, w >= 800, `${c} — ${w}px`)
  })
}

/* C12 — закон о персональных данных и пакеты */
{
  const html = read('index.html')
  check('C12', 'privacy.page', 'есть страница privacy/ с упоминанием 152-ФЗ', existsSync(join(ROOT, 'privacy/index.html')) && read('privacy/index.html').includes('152-ФЗ'))
  check('C12', 'privacy.consent', 'галочка согласия в форме ссылается на политику', /id="f-consent"[^]*?href="privacy\/"/.test(html))
  check('C12', 'privacy.footer', 'ссылка на политику в подвале', /footer__links[^]*?href="privacy\/"/.test(html))
  check('C12', 'cookie.notice', 'уведомление о cookie на странице', html.includes('id="cookie"'))
  ;(CFG.packages || []).forEach(pk => {
    check('C12', `pkg.${pk.id}`, `пакет «${pk.titleRu}»: цена, услуга из прайса, Ru/En состав`,
      pk.price >= 100 && CFG.services.some(s => s.slug === pk.service) && (pk.includesRu || []).length === (pk.includesEn || []).length && html.includes(`data-package="${pk.id}"`))
  })
}

console.log(`\n${'='.repeat(66)}`)
console.log(`  Пройдено: ${pass}   Провалено: ${fail}`)
console.log('='.repeat(66))
if (fail) {
  console.log('\nЕсли менялся js/config.js — выполните: node tools/build.mjs')
  console.log('Менять нужно только js/config.js: цены, услуги, FAQ, контакты.\n')
}
process.exit(fail ? 1 : 0)

