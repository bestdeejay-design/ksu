// THEME TOGGLE
const html = document.documentElement
const toggle = document.getElementById('theme-toggle')
const saved = localStorage.getItem('theme') || 'dark'
html.setAttribute('data-theme', saved)

toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
  html.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
})

const projects = [
  { title: 'Айдентика NOVA', category: 'Брендинг', colors: ['var(--accent)', 'var(--accent2)'] },
  { title: 'Плакат «Форма»', category: 'Плакат', colors: ['var(--accent3)', 'var(--accent)'] },
  { title: 'UI для галереи', category: 'UX/UI', colors: ['var(--accent2)', 'var(--accent3)'] },
  { title: 'Упаковка LINO', category: 'Упаковка', colors: ['var(--accent)', '#fff'] },
  { title: 'Шрифт KSA', category: 'Типографика', colors: ['var(--accent2)', 'var(--accent)'] },
  { title: 'Брошюра V/A', category: 'Вёрстка', colors: ['var(--accent3)', 'var(--accent2)'] },
  { title: 'Мерч DESNA', category: 'Мерчандайз', colors: ['#fff', 'var(--accent)'] },
  { title: 'Иллюстрация «Ритм»', category: 'Иллюстрация', colors: ['var(--accent3)', 'var(--accent2)'] },
  { title: 'Сайт студии', category: 'UX/UI', colors: ['var(--accent)', 'var(--accent3)'] },
  { title: 'Выставка «Сдвиг»', category: 'Экспозиция', colors: ['var(--accent2)', '#fff'] },
  { title: 'Айдентика ZERO', category: 'Брендинг', colors: ['var(--accent3)', 'var(--accent)'] },
  { title: 'Книга «Цвет»', category: 'Издание', colors: ['var(--accent)', 'var(--accent2)'] }
]

function generateAbstractSVG(index, colors) {
  const shapes = [
    `<circle r="35%" cx="50%" cy="50%" fill="none" stroke="${colors[0]}" stroke-width="1" opacity=".3"/>`,
    `<rect width="30%" height="30%" x="60%" y="10%" fill="none" stroke="${colors[1]}" stroke-width="1" opacity=".25" transform="rotate(${index * 7},${100 + index * 3},${10 + index * 2})"/>`,
    `<circle r="15%" cx="25%" cy="75%" fill="${colors[0]}" opacity=".1"/>`,
    `<polygon points="${8 + index},${60 + index * 2} ${25 + index * 2},${80 + index} ${5},${85}" fill="none" stroke="${colors[1]}" stroke-width="1" opacity=".2"/>`,
    `<line x1="0" y1="50%" x2="100%" y2="50%" stroke="${colors[0]}" stroke-width="1" opacity=".08" stroke-dasharray="${4 + index},${6 + index}"/>`,
    `<rect width="${12 + index * 3}%" height="${12 + index * 3}%" x="${20 + index * 2}%" y="${20 + index * 4}%" fill="${colors[0]}" opacity=".04" transform="rotate(${index * 15},${20 + index * 2 + (12 + index * 3) / 2}%,${20 + index * 4 + (12 + index * 3) / 2}%)"/>`,
    `<circle r="${8 + index * 0.5}%" cx="${70 + (index % 3) * 5}%" cy="${30 + (index % 2) * 10}%" fill="${colors[1]}" opacity=".06"/>`
  ]

  const selected = []
  for (let i = 0; i < 4; i++) {
    selected.push(shapes[(index + i * 2) % shapes.length])
  }

  const svg = `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">${selected.join('')}</svg>`
  return encodeURIComponent(svg)
}

function buildWorks() {
  const grid = document.getElementById('works-grid')
  projects.forEach((p, i) => {
    const card = document.createElement('div')
    card.className = `work-card wc-${i + 1}`
    card.style.setProperty('--card-index', i)

    const svgData = generateAbstractSVG(i, p.colors)
    const visualHTML = `<div class="wv" style="background-image:url('data:image/svg+xml,${svgData}');background-size:cover;background-position:center"></div>`

    const num = String(i + 1).padStart(2, '0')
    card.innerHTML = `
      <div class="work-card__visual">${visualHTML}</div>
      <div class="work-card__inner">
        <div class="work-card__num">${num}</div>
        <div class="work-card__category">${p.category}</div>
        <div class="work-card__title">${p.title}</div>
        <div class="work-card__line"></div>
      </div>
    `
    grid.appendChild(card)
  })
}

buildWorks()

// REFERENCES — вдохновение со ссылками
const references = [
  { cat: 'Айдентика и брендинг', desc: 'Логотипы, визуальные идентичности, ребрендинг', color: '#FF2D55', count: '247K+ проектов', behance: 'https://www.behance.net/galleries/graphic-design/logo-branding', dribbble: 'https://dribbble.com/search/branding', figma: 'https://www.figma.com/community/search?query=branding', pinterest: 'https://www.pinterest.com/search/pins/?q=branding+design', instagram: 'https://www.instagram.com/explore/tags/branding/' },
  { cat: 'Типографика', desc: 'Шрифтовые работы, леттеринг, типографические постеры', color: '#FFD633', count: '83K+ проектов', behance: 'https://www.behance.net/galleries/graphic-design/typography', dribbble: 'https://dribbble.com/search/typography', figma: 'https://www.figma.com/community/search?query=typography', pinterest: 'https://www.pinterest.com/search/pins/?q=typography+design', instagram: 'https://www.instagram.com/explore/tags/typography/' },
  { cat: 'Упаковка', desc: 'Дизайн упаковки, этикетки, коробки, мерч', color: '#00E5FF', count: '125K+ проектов', behance: 'https://www.behance.net/galleries/graphic-design/packaging', dribbble: 'https://dribbble.com/search/packaging', figma: 'https://www.figma.com/community/search?query=packaging', pinterest: 'https://www.pinterest.com/search/pins/?q=packaging+design', instagram: 'https://www.instagram.com/explore/tags/packaging/' },
  { cat: 'Плакаты', desc: 'Постеры, афиши, рекламные плакаты', color: '#9B59B6', count: '180K+ проектов', behance: 'https://www.behance.net/galleries/graphic-design/poster', dribbble: 'https://dribbble.com/search/poster', figma: 'https://www.figma.com/community/search?query=poster+design', pinterest: 'https://www.pinterest.com/search/pins/?q=poster+design', instagram: 'https://www.instagram.com/explore/tags/posterdesign/' },
  { cat: 'Логотипы', desc: 'Тысячи логотипов от дизайнеров со всего мира', color: '#2ECC71', count: '310K+ проектов', behance: 'https://www.behance.net/galleries/graphic-design/logo', dribbble: 'https://dribbble.com/search/logo', figma: 'https://www.figma.com/community/search?query=logo', pinterest: 'https://www.pinterest.com/search/pins/?q=logo+design', instagram: 'https://www.instagram.com/explore/tags/logodesign/' },
  { cat: 'Издательский дизайн', desc: 'Вёрстка книг, журналов, брошюр, каталогов', color: '#E67E22', count: '65K+ проектов', behance: 'https://www.behance.net/galleries/graphic-design/editorial', dribbble: 'https://dribbble.com/search/editorial', figma: 'https://www.figma.com/community/search?query=editorial+design', pinterest: 'https://www.pinterest.com/search/pins/?q=editorial+design', instagram: 'https://www.instagram.com/explore/tags/editorialdesign/' },
  { cat: 'Инфографика', desc: 'Визуализация данных, схемы, карты', color: '#1ABC9C', count: '42K+ проектов', behance: 'https://www.behance.net/galleries/graphic-design/infographic', dribbble: 'https://dribbble.com/search/infographic', figma: 'https://www.figma.com/community/search?query=infographic', pinterest: 'https://www.pinterest.com/search/pins/?q=infographic', instagram: 'https://www.instagram.com/explore/tags/infographic/' },
  { cat: 'Выставки и навигация', desc: 'Экспозиционный дизайн, вывески, указатели', color: '#E74C3C', count: '28K+ проектов', behance: 'https://www.behance.net/galleries/graphic-design/exhibition-signage', dribbble: 'https://dribbble.com/search/signage', figma: 'https://www.figma.com/community/search?query=signage', pinterest: 'https://www.pinterest.com/search/pins/?q=signage+design', instagram: 'https://www.instagram.com/explore/tags/signage/' },
  { cat: 'Музыкальная упаковка', desc: 'Обложки альбомов, мерч, дизайн для музыкантов', color: '#8E44AD', count: '37K+ проектов', behance: 'https://www.behance.net/galleries/graphic-design/music-packaging', dribbble: 'https://dribbble.com/search/music-packaging', figma: 'https://www.figma.com/community/search?query=music+packaging', pinterest: 'https://www.pinterest.com/search/pins/?q=album+cover+design', instagram: 'https://www.instagram.com/explore/tags/albumartwork/' },
  { cat: 'Реклама', desc: 'Креативные рекламные кампании, баннеры, OOH', color: '#F1C40F', count: '110K+ проектов', behance: 'https://www.behance.net/galleries/advertising', dribbble: 'https://dribbble.com/search/advertising', figma: 'https://www.figma.com/community/search?query=advertising', pinterest: 'https://www.pinterest.com/search/pins/?q=advertising+design', instagram: 'https://www.instagram.com/explore/tags/advertising/' },
  { cat: 'Гейм-дизайн', desc: 'Концепт-арт, интерфейсы, персонажи, окружение', color: '#E74C3C', count: '73K+ проектов', behance: 'https://www.behance.net/galleries/game-design', dribbble: 'https://dribbble.com/search/game-design', figma: 'https://www.figma.com/community/search?query=game+ui', pinterest: 'https://www.pinterest.com/search/pins/?q=game+design+art', instagram: 'https://www.instagram.com/explore/tags/gamedesign/' },
  { cat: 'Иллюстрация', desc: 'Рисунки, векторная графика, комиксы, арты', color: '#FF6B9D', count: '200K+ проектов', behance: 'https://www.behance.net/galleries/illustrator', dribbble: 'https://dribbble.com/search/illustration', figma: 'https://www.figma.com/community/search?query=illustration', pinterest: 'https://www.pinterest.com/search/pins/?q=illustration+art', instagram: 'https://www.instagram.com/explore/tags/illustration/' },
  { cat: 'Product Design', desc: 'Промышленный дизайн, предметы, гаджеты, мебель', color: '#3498DB', count: '95K+ проектов', behance: 'https://www.behance.net/galleries/product-design', dribbble: 'https://dribbble.com/search/product-design', figma: 'https://www.figma.com/community/search?query=product+design', pinterest: 'https://www.pinterest.com/search/pins/?q=product+design', instagram: 'https://www.instagram.com/explore/tags/industrialdesign/' },
  { cat: 'UI/UX', desc: 'Дизайн интерфейсов, сайтов, приложений, прототипы', color: '#9B59B6', count: '280K+ проектов', behance: 'https://www.behance.net/galleries/ui-ux', dribbble: 'https://dribbble.com/search/ui-ux', figma: 'https://www.figma.com/community/search?query=ui+design', pinterest: 'https://www.pinterest.com/search/pins/?q=ui+ux+design', instagram: 'https://www.instagram.com/explore/tags/uiux/' },
  { cat: 'Motion', desc: 'Анимация, моушн-дизайн, титры, рекламные ролики', color: '#E67E22', count: '95K+ проектов', behance: 'https://www.behance.net/galleries/motion', dribbble: 'https://dribbble.com/search/motion', figma: 'https://www.figma.com/community/search?query=motion+design', pinterest: 'https://www.pinterest.com/search/pins/?q=motion+design', instagram: 'https://www.instagram.com/explore/tags/motiondesign/' },
  { cat: '3D Art', desc: 'Трёхмерная графика, рендеры, CGI, AR', color: '#2ECC71', count: '120K+ проектов', behance: 'https://www.behance.net/galleries/3d-art', dribbble: 'https://dribbble.com/search/3d', figma: 'https://www.figma.com/community/search?query=3d', pinterest: 'https://www.pinterest.com/search/pins/?q=3d+art+design', instagram: 'https://www.instagram.com/explore/tags/3dart/' },
  { cat: 'Фотография', desc: 'Фотосъёмка, обработка, ретушь, стилизация', color: '#1ABC9C', count: '170K+ проектов', behance: 'https://www.behance.net/galleries/photography', dribbble: 'https://dribbble.com/search/photography', figma: 'https://www.figma.com/community/search?query=photography', pinterest: 'https://www.pinterest.com/search/pins/?q=photography', instagram: 'https://www.instagram.com/explore/tags/photography/' },
  { cat: 'Fashion', desc: 'Мода, стиль, тренды, визуальные концепции', color: '#FF2D55', count: '65K+ проектов', behance: 'https://www.behance.net/galleries/fashion', dribbble: 'https://dribbble.com/search/fashion', figma: 'https://www.figma.com/community/search?query=fashion', pinterest: 'https://www.pinterest.com/search/pins/?q=fashion+design', instagram: 'https://www.instagram.com/explore/tags/fashiondesign/' }
]

function buildReferences() {
  const grid = document.getElementById('references-grid')
  references.forEach((r) => {
    const card = document.createElement('div')
    card.className = 'ref-card'

    card.innerHTML = `
      <div class="ref-card__inner" style="background:linear-gradient(135deg,${r.color}22,${r.color}08)">
        <div class="ref-card__cat">${r.cat}</div>
        <div class="ref-card__desc">${r.desc}</div>
        <div class="ref-card__links">
          <a href="${r.behance}" target="_blank" rel="noopener" class="ref-card__link ref-card__link--be">
            <span>Be</span>
            <span>${r.count}</span>
          </a>
          <a href="${r.dribbble}" target="_blank" rel="noopener" class="ref-card__link ref-card__link--dr">
            <span>Dr</span>
            <span>искать</span>
          </a>
          <a href="${r.figma}" target="_blank" rel="noopener" class="ref-card__link ref-card__link--fg">
            <span>Fg</span>
            <span>искать</span>
          </a>
          <a href="${r.pinterest}" target="_blank" rel="noopener" class="ref-card__link ref-card__link--pt">
            <span>Pt</span>
            <span>искать</span>
          </a>
          <a href="${r.instagram}" target="_blank" rel="noopener" class="ref-card__link ref-card__link--ig">
            <span>#</span>
            <span>тег</span>
          </a>
        </div>
      </div>
    `
    grid.appendChild(card)
  })
}

buildReferences()

// Специализированные ресурсы
const specialResources = [
  { name: 'It\'s Nice That', desc: 'Редакционные подборки лучшего дизайна', url: 'https://www.itsnicethat.com', color: '#333' },
  { name: 'Design Week', desc: 'Новости и кейсы дизайна', url: 'https://www.designweek.co.uk', color: '#FF2D55' },
  { name: 'Awwwards', desc: 'Лучший веб-дизайн', url: 'https://www.awwwards.com', color: '#00E5FF' },
  { name: 'SiteInspire', desc: 'Вдохновение сайтами', url: 'https://www.siteinspire.com', color: '#9B59B6' },
  { name: 'Typewolf', desc: 'Типографика, шрифтовые пары', url: 'https://www.typewolf.com', color: '#F39C12' }
]

const boardResources = [
  { name: 'Are.na', desc: 'Визуальные каналы для идей', url: 'https://www.are.na', color: '#FF2D55' },
  { name: 'Muzli', desc: 'Дизайн-инсайты и подборки', url: 'https://muz.li', color: '#2ECC71' },
  { name: 'Designspiration', desc: 'Поиск по цвету и стилю', url: 'https://www.designspiration.net', color: '#3498DB' }
]

function buildResourceSection(id, items) {
  const grid = document.getElementById(id)
  items.forEach((r) => {
    const el = document.createElement('a')
    el.className = 'ref-mini'
    el.href = r.url
    el.target = '_blank'
    el.rel = 'noopener'
    el.innerHTML = `
      <div class="ref-mini__inner" style="border-color:${r.color}33">
        <div class="ref-mini__name">${r.name}</div>
        <div class="ref-mini__desc">${r.desc}</div>
      </div>
    `
    grid.appendChild(el)
  })
}

buildResourceSection('ref-special', specialResources)
buildResourceSection('ref-boards', boardResources)

// scroll reveal
const revealEls = document.querySelectorAll(
  '.about__content > *, .about__visual > *, .works__header, .work-card, .references__header, .ref-card, .contact__left > *, .contact__right > *'
)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
)

revealEls.forEach((el, i) => {
  el.classList.add('reveal')
  if (i < 12) el.classList.add(`reveal-delay-${(i % 6) + 1}`)
  observer.observe(el)
})

// smooth stagger for work cards
document.querySelectorAll('.work-card').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 6) * 0.06}s`
})
