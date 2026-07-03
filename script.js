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

// REFERENCES
const references = [
  { designer: 'Paul Rand', role: 'Графический дизайнер', project: 'Логотип IBM', year: 1956, tags: ['Айдентика', 'Корпоративный стиль'], colors: ['#003366', '#666'] },
  { designer: 'Saul Bass', role: 'Дизайнер / режиссёр', project: 'Постер «Vertigo»', year: 1958, tags: ['Плакат', 'Кинография'], colors: ['#2D1B0E', '#B85C3A'] },
  { designer: 'Massimo Vignelli', role: 'Дизайнер', project: 'Схема метро Нью-Йорка', year: 1972, tags: ['Инфографика', 'Минимализм'], colors: ['#1A5276', '#85C1E9'] },
  { designer: 'Paula Scher', role: 'Партнёр Pentagram', project: 'Логотип Citibank', year: 1998, tags: ['Айдентика', 'Типографика'], colors: ['#1A5276', '#E74C3C'] },
  { designer: 'Stefan Sagmeister', role: 'Дизайнер', project: 'Постер AIGA', year: 1999, tags: ['Типографика', 'Эксперимент'], colors: ['#4A0E0E', '#C0392B'] },
  { designer: 'Milton Glaser', role: 'Иллюстратор / дизайнер', project: 'Логотип I ♥ NY', year: 1977, tags: ['Айдентика', 'Городской брендинг'], colors: ['#E74C3C', '#2C3E50'] },
  { designer: 'David Carson', role: 'Графический дизайнер', project: 'Ray Gun Magazine', year: 1993, tags: ['Эксперимент', 'Типографика'], colors: ['#1A1A2E', '#E94560'] },
  { designer: 'Chip Kidd', role: 'Дизайнер обложек', project: 'Обложка Jurassic Park', year: 1990, tags: ['Издание', 'Книжный дизайн'], colors: ['#2C3E50', '#E67E22'] },
  { designer: 'Herb Lubalin', role: 'Типограф', project: 'Гарнитура Avant Garde', year: 1968, tags: ['Типографика', 'Шрифт'], colors: ['#2C3E50', '#3498DB'] },
  { designer: 'Jessica Walsh', role: 'Арт-директор', project: '40 Days of Dating', year: 2013, tags: ['Брендинг', 'Цифра'], colors: ['#E91E63', '#FFC107'] }
]

function buildReferences() {
  const grid = document.getElementById('references-grid')
  references.forEach((r, i) => {
    const card = document.createElement('div')
    card.className = 'ref-card'

    const svgData = generateAbstractSVG(i + 20, r.colors)
    const visualHTML = `<div class="wv" style="background-image:url('data:image/svg+xml,${svgData}');background-size:cover;background-position:center"></div>`

    const tagsHTML = r.tags.map(t => `<span class="ref-card__tag">${t}</span>`).join('')

    card.innerHTML = `
      <div class="ref-card__visual">${visualHTML}</div>
      <div class="ref-card__info">
        <div class="ref-card__name">${r.designer}</div>
        <div class="ref-card__role">${r.role}</div>
        <div class="ref-card__project">${r.project}</div>
        <div class="ref-card__year">${r.year}</div>
        <div class="ref-card__tags">${tagsHTML}</div>
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
