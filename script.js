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
  { cat: 'Айдентика и брендинг', desc: 'Логотипы, визуальные идентичности, ребрендинг', url: 'https://www.behance.net/galleries/graphic-design/logo-branding', color: '#FF2D55', count: '247K+ проектов' },
  { cat: 'Типографика', desc: 'Шрифтовые работы, леттеринг, типографические постеры', url: 'https://www.behance.net/galleries/graphic-design/typography', color: '#FFD633', count: '83K+ проектов' },
  { cat: 'Упаковка', desc: 'Дизайн упаковки, этикетки, коробки, мерч', url: 'https://www.behance.net/galleries/graphic-design/packaging', color: '#00E5FF', count: '125K+ проектов' },
  { cat: 'Плакаты', desc: 'Постеры, афиши, рекламные плакаты', url: 'https://www.behance.net/galleries/graphic-design/poster', color: '#9B59B6', count: '180K+ проектов' },
  { cat: 'Логотипы', desc: 'Тысячи логотипов от дизайнеров со всего мира', url: 'https://www.behance.net/galleries/graphic-design/logo', color: '#2ECC71', count: '310K+ проектов' },
  { cat: 'Издательский дизайн', desc: 'Вёрстка книг, журналов, брошюр, каталогов', url: 'https://www.behance.net/galleries/graphic-design/editorial', color: '#E67E22', count: '65K+ проектов' },
  { cat: 'Инфографика', desc: 'Визуализация данных, схемы, карты', url: 'https://www.behance.net/galleries/graphic-design/infographic', color: '#1ABC9C', count: '42K+ проектов' },
  { cat: 'Выставки и навигация', desc: 'Экспозиционный дизайн, вывески, указатели', url: 'https://www.behance.net/galleries/graphic-design/exhibition-signage', color: '#E74C3C', count: '28K+ проектов' },
  { cat: 'Музыкальная упаковка', desc: 'Обложки альбомов, мерч, дизайн для музыкантов', url: 'https://www.behance.net/galleries/graphic-design/music-packaging', color: '#8E44AD', count: '37K+ проектов' },
  { cat: 'Реклама', desc: 'Креативные рекламные кампании, баннеры, OOH', url: 'https://www.behance.net/galleries/advertising', color: '#F1C40F', count: '110K+ проектов' },
  { cat: 'Гейм-дизайн', desc: 'Концепт-арт, интерфейсы, персонажи, окружение', url: 'https://www.behance.net/galleries/game-design', color: '#E74C3C', count: '73K+ проектов' },
  { cat: 'Иллюстрация', desc: 'Рисунки, векторная графика, комиксы, арты', url: 'https://www.behance.net/galleries/illustrator', color: '#FF6B9D', count: '200K+ проектов' },
  { cat: 'Product Design', desc: 'Промышленный дизайн, предметы, гаджеты, мебель', url: 'https://www.behance.net/galleries/product-design', color: '#3498DB', count: '95K+ проектов' },
  { cat: 'UI/UX', desc: 'Дизайн интерфейсов, сайтов, приложений, прототипы', url: 'https://www.behance.net/galleries/ui-ux', color: '#9B59B6', count: '280K+ проектов' },
  { cat: 'Motion', desc: 'Анимация, моушн-дизайн, титры, рекламные ролики', url: 'https://www.behance.net/galleries/motion', color: '#E67E22', count: '95K+ проектов' },
  { cat: '3D Art', desc: 'Трёхмерная графика, рендеры, CGI, AR', url: 'https://www.behance.net/galleries/3d-art', color: '#2ECC71', count: '120K+ проектов' },
  { cat: 'Фотография', desc: 'Фотосъёмка, обработка, ретушь, стилизация', url: 'https://www.behance.net/galleries/photography', color: '#1ABC9C', count: '170K+ проектов' },
  { cat: 'Fashion', desc: 'Мода, стиль, тренды, визуальные концепции', url: 'https://www.behance.net/galleries/fashion', color: '#FF2D55', count: '65K+ проектов' },
  { cat: 'Dribbble', desc: 'Сообщество дизайнеров — ищите по стилю', url: 'https://dribbble.com/search/graphic-design', color: '#EA4C89', count: 'миллионы работ' }
]

function buildReferences() {
  const grid = document.getElementById('references-grid')
  references.forEach((r) => {
    const card = document.createElement('a')
    card.className = 'ref-card'
    card.href = r.url
    card.target = '_blank'
    card.rel = 'noopener'

    card.innerHTML = `
      <div class="ref-card__inner" style="background:linear-gradient(135deg,${r.color}22,${r.color}08)">
        <div class="ref-card__cat">${r.cat}</div>
        <div class="ref-card__desc">${r.desc}</div>
        <div class="ref-card__meta">
          <span class="ref-card__count">${r.count}</span>
          <span class="ref-card__arrow">→</span>
        </div>
      </div>
    `
    grid.appendChild(card)
  })
}

buildReferences()

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
