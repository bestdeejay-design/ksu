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

// REFERENCES — первые 5 с реальными скачанными изображениями, остальные с SVG
const refImages = [
  'images/references/01-ibm-logo.svg',
  'images/references/02-vertigo-poster.jpg',
  'images/references/03-nyc-subway-map.jpg',
  'images/references/04-citibank-logo.svg',
  'images/references/06-jurassic-park-cover.jpg'
]

const references = [
  { designer: 'Paul Rand', role: 'Графический дизайнер', project: 'Логотип IBM', year: 1956, tags: ['Айдентика', 'Корпоративный стиль'], useImage: true },
  { designer: 'Saul Bass', role: 'Дизайнер / режиссёр', project: 'Постер «Vertigo»', year: 1958, tags: ['Плакат', 'Кинография'], useImage: true },
  { designer: 'Massimo Vignelli', role: 'Дизайнер', project: 'Схема метро Нью-Йорка', year: 1972, tags: ['Инфографика', 'Минимализм'], useImage: true },
  { designer: 'Paula Scher', role: 'Партнёр Pentagram', project: 'Логотип Citibank', year: 1998, tags: ['Айдентика', 'Типографика'], useImage: true },
  { designer: 'Chip Kidd', role: 'Дизайнер обложек', project: 'Обложка Jurassic Park', year: 1990, tags: ['Издание', 'Книжный дизайн'], useImage: true },
  { designer: 'Jessica Walsh', role: 'Арт-директор &Walsh', project: 'Брендинг, типографика', year: 2013, tags: ['Брендинг', 'Типографика'], useImage: false, bg: '#1A0A1A', fg: '#FF2D55' },
  { designer: 'Malika Favre', role: 'Иллюстратор', project: 'Pop Art / Op Art', year: 2012, tags: ['Иллюстрация', 'Минимализм'], useImage: false, bg: '#0A1A14', fg: '#2ECC71' },
  { designer: 'Peter Tarka', role: '3D-дизайнер', project: 'Сюрреалистические композиции', year: 2016, tags: ['3D', 'Сюрреализм'], useImage: false, bg: '#0A0A1A', fg: '#9B59B6' },
  { designer: 'Morag Myerscough', role: 'Художник / дизайнер', project: 'Суперграфика', year: 2017, tags: ['Инсталляция', 'Геометрия'], useImage: false, bg: '#1A140A', fg: '#F39C12' },
  { designer: 'Studio Feixen', role: 'Экспериментальный дизайн', project: 'Постеры', year: 2015, tags: ['Типографика', 'Эксперимент'], useImage: false, bg: '#0A0A0A', fg: '#E74C3C' }
]

function generateRefSVG(index, bg, fg) {
  const visuals = [
    // Jessica Walsh — bold, colorful, typographic
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="${bg}"/>
      <circle cx="200" cy="200" r="160" fill="none" stroke="${fg}" stroke-width="1" opacity=".1"/>
      <text x="40" y="140" font-family="sans-serif" font-size="100" fill="${fg}" font-weight="900" opacity=".8">W</text>
      <text x="40" y="250" font-family="sans-serif" font-size="60" fill="${fg}" font-weight="300" letter-spacing="8">ALSH</text>
      <rect x="40" y="280" width="120" height="6" rx="3" fill="${fg}" opacity=".6"/>
      <circle cx="300" cy="100" r="40" fill="${fg}" opacity=".12"/>
      <rect x="280" y="300" width="60" height="60" rx="8" fill="${fg}" opacity=".08" transform="rotate(25,310,330)"/>
      <text x="40" y="360" font-family="sans-serif" font-size="9" fill="${fg}" opacity=".3" letter-spacing="5">&WALSH</text>
    </svg>`,
    // Malika Favre — pop art, minimal, negative space
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="${bg}"/>
      <circle cx="200" cy="180" r="120" fill="${fg}" opacity=".12"/>
      <path d="M160 120 Q200 80 240 120 Q260 140 240 160 L200 200 L160 160 Q140 140 160 120Z" fill="${fg}" opacity=".8"/>
      <circle cx="200" cy="130" r="8" fill="${bg}" opacity=".6"/>
      <circle cx="200" cy="155" r="4" fill="${bg}" opacity=".4"/>
      <path d="M160 240 Q200 280 240 240" fill="none" stroke="${fg}" stroke-width="4" stroke-linecap="round" opacity=".5"/>
      <rect x="100" y="300" width="200" height="3" rx="1.5" fill="${fg}" opacity=".15"/>
      <text x="200" y="350" font-family="sans-serif" font-size="9" fill="${fg}" text-anchor="middle" letter-spacing="6" opacity=".4">MALIKA FAVRE</text>
    </svg>`,
    // Peter Tarka — 3D surreal geometric
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="${bg}"/>
      <ellipse cx="200" cy="200" rx="130" ry="80" fill="none" stroke="${fg}" stroke-width="2" opacity=".15" transform="rotate(-15,200,200)"/>
      <ellipse cx="200" cy="200" rx="100" ry="60" fill="none" stroke="${fg}" stroke-width="1.5" opacity=".25" transform="rotate(-15,200,200)"/>
      <path d="M200 100 L260 150 L260 220 L200 260 L140 220 L140 150Z" fill="none" stroke="${fg}" stroke-width="2" opacity=".6"/>
      <path d="M200 100 L200 260 M140 150 L260 150" fill="none" stroke="${fg}" stroke-width="1" opacity=".3"/>
      <circle cx="200" cy="180" r="20" fill="${fg}" opacity=".15"/>
      <circle cx="200" cy="180" r="8" fill="${fg}" opacity=".4"/>
      <text x="200" y="360" font-family="sans-serif" font-size="9" fill="${fg}" text-anchor="middle" letter-spacing="5" opacity=".3">PETER TARKA</text>
    </svg>`,
    // Morag Myerscough — supergraphics, bold color blocks
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="${bg}"/>
      <rect x="20" y="20" width="160" height="160" rx="4" fill="${fg}" opacity=".7"/>
      <rect x="200" y="40" width="180" height="80" rx="2" fill="${fg}" opacity=".4"/>
      <rect x="40" y="220" width="120" height="160" rx="2" fill="${fg}" opacity=".2"/>
      <rect x="220" y="180" width="160" height="100" rx="2" fill="${fg}" opacity=".55"/>
      <rect x="240" y="300" width="100" height="80" rx="2" fill="${fg}" opacity=".35"/>
      <text x="200" y="380" font-family="sans-serif" font-size="9" fill="${fg}" text-anchor="middle" letter-spacing="5" opacity=".35">MORAG MYERSCOUGH</text>
    </svg>`,
    // Studio Feixen — experimental typography
    `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="${bg}"/>
      <text x="200" y="160" font-family="sans-serif" font-size="140" fill="${fg}" text-anchor="middle" font-weight="900" opacity=".8">F</text>
      <text x="200" y="260" font-family="sans-serif" font-size="40" fill="${fg}" text-anchor="middle" font-weight="300" letter-spacing="15">EIXEN</text>
      <line x1="60" y1="290" x2="340" y2="290" stroke="${fg}" stroke-width="2" opacity=".3"/>
      <circle cx="100" cy="100" r="30" fill="none" stroke="${fg}" stroke-width="2" opacity=".15"/>
      <rect x="300" y="300" width="50" height="50" fill="${fg}" opacity=".08" transform="rotate(45,325,325)"/>
      <text x="200" y="360" font-family="sans-serif" font-size="9" fill="${fg}" text-anchor="middle" letter-spacing="4" opacity=".3">STUDIO FEIXEN</text>
    </svg>`
  ]
  return encodeURIComponent(visuals[index - 5] || visuals[0])
}

function buildReferences() {
  const grid = document.getElementById('references-grid')
  references.forEach((r, i) => {
    const card = document.createElement('div')
    card.className = 'ref-card'

    let visualHTML
    if (r.useImage && refImages[i]) {
      visualHTML = `<img src="${refImages[i]}" alt="${r.designer} — ${r.project}" style="width:100%;height:100%;object-fit:cover;object-position:center" />`
    } else {
      const svgData = generateRefSVG(i, r.bg || '#0A0A0A', r.fg || '#FF2D55')
      visualHTML = `<div class="wv" style="background-image:url('data:image/svg+xml,${svgData}');background-size:cover;background-position:center"></div>`
    }

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
