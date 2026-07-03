// I18N
const i18n = {
  en: {
    'nav.logo': 'Ksenia',
    'nav.about': 'About',
    'nav.works': 'Works',
    'nav.inspiration': 'Inspiration',
    'nav.contact': 'Contact',
    'nav.langBtn': 'RU',
    'hero.marquee': 'PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO •',
    'hero.name': 'Ksenia',
    'hero.subtitle': 'graphic<br/>designer',
    'hero.scroll': 'Scroll',
    'about.label': 'About',
    'about.p1': "Hi! My name is Ksenia. I'm a graphic designer with a sharp sense of form, color, and composition. I create visual solutions that speak louder than words — from identity and branding to digital interfaces and print graphics.",
    'about.p2': 'In my work, I combine bold aesthetics with modern minimalist approaches. Every project is a dialogue between meaning and form.',
    'about.tag1': 'Identity',
    'about.tag2': 'Branding',
    'about.tag3': 'Typography',
    'about.tag4': 'UI/UX',
    'about.tag5': 'Illustration',
    'about.tag6': 'Poster',
    'works.label': 'Featured Projects',
    'works.count': 'projects',
    'refs.label': 'Inspiration',
    'refs.subtitle': 'Explore thousands of projects across all design disciplines',
    'refs.specialTitle': 'Specialized Resources',
    'refs.specialDesc': 'Editorial picks, awards, and focused inspiration',
    'refs.boardsTitle': 'Moodboards & References',
    'refs.boardsDesc': 'Services for collecting ideas and visual search',
    'contact.label': 'Contact',
    'contact.text': 'Open to collaboration and new projects.<br/>Feel free to write, I\'d love to discuss your task.',
    'footer.copy': '© 2026 Ksenia',
    'footer.tagline': 'Graphic Design'
  },
  ru: {
    'nav.logo': 'Ксения',
    'nav.about': 'Обо мне',
    'nav.works': 'Работы',
    'nav.inspiration': 'Референсы',
    'nav.contact': 'Контакты',
    'nav.langBtn': 'EN',
    'hero.marquee': 'ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО •',
    'hero.name': 'Ксения',
    'hero.subtitle': 'графический<br/>дизайнер',
    'hero.scroll': 'Скролл',
    'about.label': 'Обо мне',
    'about.p1': 'Привет! Меня зовут Ксения. Я графический дизайнер с острым чувством формы, цвета и композиции. Создаю визуальные решения, которые говорят громче слов — от айдентики и брендинга до цифровых интерфейсов и печатной графики.',
    'about.p2': 'В своей работе я соединяю смелую эстетику с современными минималистичными подходами. Каждый проект для меня — это диалог между смыслом и формой.',
    'about.tag1': 'Айдентика',
    'about.tag2': 'Брендинг',
    'about.tag3': 'Типографика',
    'about.tag4': 'UI/UX',
    'about.tag5': 'Иллюстрация',
    'about.tag6': 'Плакат',
    'works.label': 'Избранные проекты',
    'works.count': 'работ',
    'refs.label': 'Референсы',
    'refs.subtitle': 'Тысячи проектов по всем направлениям дизайна',
    'refs.specialTitle': 'Специализированные ресурсы',
    'refs.specialDesc': 'Редакционные подборки, премии и вдохновение',
    'refs.boardsTitle': 'Референсы и мудборды',
    'refs.boardsDesc': 'Сервисы для сбора идей и визуального поиска',
    'contact.label': 'Контакты',
    'contact.text': 'Открыта к сотрудничеству и новым проектам.<br/>Пишите, буду рада обсудить вашу задачу.',
    'footer.copy': '© 2026 Ксения',
    'footer.tagline': 'Графический дизайн'
  }
}

const refsData = {
  en: [
    { cat: 'Branding & Identity', desc: 'Logos, visual identities, rebranding', behance: 'https://www.behance.net/galleries/graphic-design/logo-branding', dribbble: 'https://dribbble.com/search/branding', figma: 'https://www.figma.com/community/search?query=branding', pinterest: 'https://www.pinterest.com/search/pins/?q=branding+design', color: '#FF2D55' },
    { cat: 'Typography', desc: 'Typefaces, lettering, typographic posters', behance: 'https://www.behance.net/galleries/graphic-design/typography', dribbble: 'https://dribbble.com/search/typography', figma: 'https://www.figma.com/community/search?query=typography', pinterest: 'https://www.pinterest.com/search/pins/?q=typography+design', color: '#FFD633' },
    { cat: 'Packaging', desc: 'Package design, labels, boxes, merch', behance: 'https://www.behance.net/galleries/graphic-design/packaging', dribbble: 'https://dribbble.com/search/packaging', figma: 'https://www.figma.com/community/search?query=packaging', pinterest: 'https://www.pinterest.com/search/pins/?q=packaging+design', color: '#00E5FF' },
    { cat: 'Posters', desc: 'Posters, billboards, event flyers', behance: 'https://www.behance.net/galleries/graphic-design/poster', dribbble: 'https://dribbble.com/search/poster', figma: 'https://www.figma.com/community/search?query=poster+design', pinterest: 'https://www.pinterest.com/search/pins/?q=poster+design', color: '#9B59B6' },
    { cat: 'Logos', desc: 'Thousands of logos from designers worldwide', behance: 'https://www.behance.net/galleries/graphic-design/logo', dribbble: 'https://dribbble.com/search/logo', figma: 'https://www.figma.com/community/search?query=logo', pinterest: 'https://www.pinterest.com/search/pins/?q=logo+design', color: '#2ECC71' },
    { cat: 'Editorial', desc: 'Books, magazines, brochures, catalogues layout', behance: 'https://www.behance.net/galleries/graphic-design/editorial', dribbble: 'https://dribbble.com/search/editorial', figma: 'https://www.figma.com/community/search?query=editorial+design', pinterest: 'https://www.pinterest.com/search/pins/?q=editorial+design', color: '#E67E22' },
    { cat: 'Infographics', desc: 'Data visualization, charts, maps', behance: 'https://www.behance.net/galleries/graphic-design/infographic', dribbble: 'https://dribbble.com/search/infographic', figma: 'https://www.figma.com/community/search?query=infographic', pinterest: 'https://www.pinterest.com/search/pins/?q=infographic', color: '#1ABC9C' },
    { cat: 'Exhibition & Signage', desc: 'Expo design, wayfinding, signage', behance: 'https://www.behance.net/galleries/graphic-design/exhibition-signage', dribbble: 'https://dribbble.com/search/signage', figma: 'https://www.figma.com/community/search?query=signage', pinterest: 'https://www.pinterest.com/search/pins/?q=signage+design', color: '#E74C3C' },
    { cat: 'Music Packaging', desc: 'Album covers, merch, visual identity for musicians', behance: 'https://www.behance.net/galleries/graphic-design/music-packaging', dribbble: 'https://dribbble.com/search/music-packaging', figma: 'https://www.figma.com/community/search?query=music+packaging', pinterest: 'https://www.pinterest.com/search/pins/?q=album+cover+design', color: '#8E44AD' },
    { cat: 'Advertising', desc: 'Creative campaigns, banners, outdoor ads', behance: 'https://www.behance.net/galleries/advertising', dribbble: 'https://dribbble.com/search/advertising', figma: 'https://www.figma.com/community/search?query=advertising', pinterest: 'https://www.pinterest.com/search/pins/?q=advertising+design', color: '#F1C40F' },
    { cat: 'Game Design', desc: 'Concept art, UI, characters, environments', behance: 'https://www.behance.net/galleries/game-design', dribbble: 'https://dribbble.com/search/game-design', figma: 'https://www.figma.com/community/search?query=game+ui', pinterest: 'https://www.pinterest.com/search/pins/?q=game+design+art', color: '#E74C3C' },
    { cat: 'Illustration', desc: 'Vector art, drawing, comics, digital painting', behance: 'https://www.behance.net/galleries/illustrator', dribbble: 'https://dribbble.com/search/illustration', figma: 'https://www.figma.com/community/search?query=illustration', pinterest: 'https://www.pinterest.com/search/pins/?q=illustration+art', color: '#FF6B9D' },
    { cat: 'Product Design', desc: 'Industrial design, gadgets, furniture', behance: 'https://www.behance.net/galleries/product-design', dribbble: 'https://dribbble.com/search/product-design', figma: 'https://www.figma.com/community/search?query=product+design', pinterest: 'https://www.pinterest.com/search/pins/?q=product+design', color: '#3498DB' },
    { cat: 'UI/UX', desc: 'Interfaces, websites, apps, prototypes', behance: 'https://www.behance.net/galleries/ui-ux', dribbble: 'https://dribbble.com/search/ui-ux', figma: 'https://www.figma.com/community/search?query=ui+design', pinterest: 'https://www.pinterest.com/search/pins/?q=ui+ux+design', color: '#9B59B6' },
    { cat: 'Motion', desc: 'Animation, motion design, titles, ads', behance: 'https://www.behance.net/galleries/motion', dribbble: 'https://dribbble.com/search/motion', figma: 'https://www.figma.com/community/search?query=motion+design', pinterest: 'https://www.pinterest.com/search/pins/?q=motion+design', color: '#E67E22' },
    { cat: '3D Art', desc: '3D graphics, renders, CGI, AR', behance: 'https://www.behance.net/galleries/3d-art', dribbble: 'https://dribbble.com/search/3d', figma: 'https://www.figma.com/community/search?query=3d', pinterest: 'https://www.pinterest.com/search/pins/?q=3d+art+design', color: '#2ECC71' },
    { cat: 'Photography', desc: 'Photo shoots, retouching, styling', behance: 'https://www.behance.net/galleries/photography', dribbble: 'https://dribbble.com/search/photography', figma: 'https://www.figma.com/community/search?query=photography', pinterest: 'https://www.pinterest.com/search/pins/?q=photography', color: '#1ABC9C' },
    { cat: 'Fashion', desc: 'Style trends, visual concepts, editorials', behance: 'https://www.behance.net/galleries/fashion', dribbble: 'https://dribbble.com/search/fashion', figma: 'https://www.figma.com/community/search?query=fashion', pinterest: 'https://www.pinterest.com/search/pins/?q=fashion+design', color: '#FF2D55' }
  ],
  ru: [
    { cat: 'Айдентика и брендинг', desc: 'Логотипы, визуальные идентичности, ребрендинг', behance: 'https://www.behance.net/galleries/graphic-design/logo-branding', dribbble: 'https://dribbble.com/search/branding', figma: 'https://www.figma.com/community/search?query=branding', pinterest: 'https://www.pinterest.com/search/pins/?q=branding+design', color: '#FF2D55' },
    { cat: 'Типографика', desc: 'Шрифтовые работы, леттеринг, постеры', behance: 'https://www.behance.net/galleries/graphic-design/typography', dribbble: 'https://dribbble.com/search/typography', figma: 'https://www.figma.com/community/search?query=typography', pinterest: 'https://www.pinterest.com/search/pins/?q=typography+design', color: '#FFD633' },
    { cat: 'Упаковка', desc: 'Дизайн упаковки, этикетки, коробки, мерч', behance: 'https://www.behance.net/galleries/graphic-design/packaging', dribbble: 'https://dribbble.com/search/packaging', figma: 'https://www.figma.com/community/search?query=packaging', pinterest: 'https://www.pinterest.com/search/pins/?q=packaging+design', color: '#00E5FF' },
    { cat: 'Плакаты', desc: 'Постеры, афиши, рекламные плакаты', behance: 'https://www.behance.net/galleries/graphic-design/poster', dribbble: 'https://dribbble.com/search/poster', figma: 'https://www.figma.com/community/search?query=poster+design', pinterest: 'https://www.pinterest.com/search/pins/?q=poster+design', color: '#9B59B6' },
    { cat: 'Логотипы', desc: 'Тысячи логотипов от дизайнеров со всего мира', behance: 'https://www.behance.net/galleries/graphic-design/logo', dribbble: 'https://dribbble.com/search/logo', figma: 'https://www.figma.com/community/search?query=logo', pinterest: 'https://www.pinterest.com/search/pins/?q=logo+design', color: '#2ECC71' },
    { cat: 'Издательский дизайн', desc: 'Вёрстка книг, журналов, брошюр, каталогов', behance: 'https://www.behance.net/galleries/graphic-design/editorial', dribbble: 'https://dribbble.com/search/editorial', figma: 'https://www.figma.com/community/search?query=editorial+design', pinterest: 'https://www.pinterest.com/search/pins/?q=editorial+design', color: '#E67E22' },
    { cat: 'Инфографика', desc: 'Визуализация данных, схемы, карты', behance: 'https://www.behance.net/galleries/graphic-design/infographic', dribbble: 'https://dribbble.com/search/infographic', figma: 'https://www.figma.com/community/search?query=infographic', pinterest: 'https://www.pinterest.com/search/pins/?q=infographic', color: '#1ABC9C' },
    { cat: 'Выставки и навигация', desc: 'Экспозиционный дизайн, вывески, указатели', behance: 'https://www.behance.net/galleries/graphic-design/exhibition-signage', dribbble: 'https://dribbble.com/search/signage', figma: 'https://www.figma.com/community/search?query=signage', pinterest: 'https://www.pinterest.com/search/pins/?q=signage+design', color: '#E74C3C' },
    { cat: 'Музыкальная упаковка', desc: 'Обложки альбомов, мерч, дизайн для музыкантов', behance: 'https://www.behance.net/galleries/graphic-design/music-packaging', dribbble: 'https://dribbble.com/search/music-packaging', figma: 'https://www.figma.com/community/search?query=music+packaging', pinterest: 'https://www.pinterest.com/search/pins/?q=album+cover+design', color: '#8E44AD' },
    { cat: 'Реклама', desc: 'Креативные рекламные кампании, баннеры, OOH', behance: 'https://www.behance.net/galleries/advertising', dribbble: 'https://dribbble.com/search/advertising', figma: 'https://www.figma.com/community/search?query=advertising', pinterest: 'https://www.pinterest.com/search/pins/?q=advertising+design', color: '#F1C40F' },
    { cat: 'Гейм-дизайн', desc: 'Концепт-арт, интерфейсы, персонажи, окружение', behance: 'https://www.behance.net/galleries/game-design', dribbble: 'https://dribbble.com/search/game-design', figma: 'https://www.figma.com/community/search?query=game+ui', pinterest: 'https://www.pinterest.com/search/pins/?q=game+design+art', color: '#E74C3C' },
    { cat: 'Иллюстрация', desc: 'Рисунки, векторная графика, комиксы, арты', behance: 'https://www.behance.net/galleries/illustrator', dribbble: 'https://dribbble.com/search/illustration', figma: 'https://www.figma.com/community/search?query=illustration', pinterest: 'https://www.pinterest.com/search/pins/?q=illustration+art', color: '#FF6B9D' },
    { cat: 'Product Design', desc: 'Промышленный дизайн, предметы, гаджеты, мебель', behance: 'https://www.behance.net/galleries/product-design', dribbble: 'https://dribbble.com/search/product-design', figma: 'https://www.figma.com/community/search?query=product+design', pinterest: 'https://www.pinterest.com/search/pins/?q=product+design', color: '#3498DB' },
    { cat: 'UI/UX', desc: 'Дизайн интерфейсов, сайтов, приложений, прототипы', behance: 'https://www.behance.net/galleries/ui-ux', dribbble: 'https://dribbble.com/search/ui-ux', figma: 'https://www.figma.com/community/search?query=ui+design', pinterest: 'https://www.pinterest.com/search/pins/?q=ui+ux+design', color: '#9B59B6' },
    { cat: 'Motion', desc: 'Анимация, моушн-дизайн, титры, рекламные ролики', behance: 'https://www.behance.net/galleries/motion', dribbble: 'https://dribbble.com/search/motion', figma: 'https://www.figma.com/community/search?query=motion+design', pinterest: 'https://www.pinterest.com/search/pins/?q=motion+design', color: '#E67E22' },
    { cat: '3D Art', desc: 'Трёхмерная графика, рендеры, CGI, AR', behance: 'https://www.behance.net/galleries/3d-art', dribbble: 'https://dribbble.com/search/3d', figma: 'https://www.figma.com/community/search?query=3d', pinterest: 'https://www.pinterest.com/search/pins/?q=3d+art+design', color: '#2ECC71' },
    { cat: 'Фотография', desc: 'Фотосъёмка, обработка, ретушь, стилизация', behance: 'https://www.behance.net/galleries/photography', dribbble: 'https://dribbble.com/search/photography', figma: 'https://www.figma.com/community/search?query=photography', pinterest: 'https://www.pinterest.com/search/pins/?q=photography', color: '#1ABC9C' },
    { cat: 'Fashion', desc: 'Мода, стиль, тренды, визуальные концепции', behance: 'https://www.behance.net/galleries/fashion', dribbble: 'https://dribbble.com/search/fashion', figma: 'https://www.figma.com/community/search?query=fashion', pinterest: 'https://www.pinterest.com/search/pins/?q=fashion+design', color: '#FF2D55' }
  ]
}

const specialResources = [
  { nameEn: "It's Nice That", nameRu: 'It\'s Nice That', descEn: 'Editorial picks of the best design', descRu: 'Редакционные подборки лучшего дизайна', url: 'https://www.itsnicethat.com', color: '#333' },
  { nameEn: 'Design Week', nameRu: 'Design Week', descEn: 'Design news and case studies', descRu: 'Новости и кейсы дизайна', url: 'https://www.designweek.co.uk', color: '#FF2D55' },
  { nameEn: 'Awwwards', nameRu: 'Awwwards', descEn: 'Best web design', descRu: 'Лучший веб-дизайн', url: 'https://www.awwwards.com', color: '#00E5FF' },
  { nameEn: 'SiteInspire', nameRu: 'SiteInspire', descEn: 'Website inspiration', descRu: 'Вдохновение сайтами', url: 'https://www.siteinspire.com', color: '#9B59B6' },
  { nameEn: 'Typewolf', nameRu: 'Typewolf', descEn: 'Typography and font pairings', descRu: 'Типографика, шрифтовые пары', url: 'https://www.typewolf.com', color: '#F39C12' }
]

const boardResources = [
  { nameEn: 'Are.na', nameRu: 'Are.na', descEn: 'Visual channels for ideas', descRu: 'Визуальные каналы для идей', url: 'https://www.are.na', color: '#FF2D55' },
  { nameEn: 'Muzli', nameRu: 'Muzli', descEn: 'Design insights and collections', descRu: 'Дизайн-инсайты и подборки', url: 'https://muz.li', color: '#2ECC71' },
  { nameEn: 'Designspiration', nameRu: 'Designspiration', descEn: 'Search by color and style', descRu: 'Поиск по цвету и стилю', url: 'https://www.designspiration.net', color: '#3498DB' }
]

// LANGUAGE
let lang = localStorage.getItem('lang') || 'en'
const langBtn = document.getElementById('lang-toggle')

function applyLanguage() {
  document.documentElement.lang = lang === 'en' ? 'en' : 'ru'
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n
    const text = i18n[lang] && i18n[lang][key]
    if (text !== undefined) {
      el.innerHTML = text
    }
  })
}

langBtn.addEventListener('click', () => {
  lang = lang === 'en' ? 'ru' : 'en'
  localStorage.setItem('lang', lang)
  applyLanguage()
  rebuildLangContent()
})

function rebuildLangContent() {
  const grid = document.getElementById('references-grid')
  grid.innerHTML = ''
  buildReferences()

  document.getElementById('ref-special').innerHTML = ''
  document.getElementById('ref-boards').innerHTML = ''
  buildResourceSection('ref-special', specialResources)
  buildResourceSection('ref-boards', boardResources)
}

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

// PROJECTS
const projects = [
  { title: 'Branding NOVA', categoryEn: 'Branding', categoryRu: 'Брендинг', colors: ['var(--accent)', 'var(--accent2)'] },
  { title: 'Poster «Form»', categoryEn: 'Poster', categoryRu: 'Плакат', colors: ['var(--accent3)', 'var(--accent)'] },
  { title: 'UI for Gallery', categoryEn: 'UI/UX', categoryRu: 'UX/UI', colors: ['var(--accent2)', 'var(--accent3)'] },
  { title: 'Packaging LINO', categoryEn: 'Packaging', categoryRu: 'Упаковка', colors: ['var(--accent)', '#fff'] },
  { title: 'Typeface KSA', categoryEn: 'Typography', categoryRu: 'Типографика', colors: ['var(--accent2)', 'var(--accent)'] },
  { title: 'Brochure V/A', categoryEn: 'Editorial', categoryRu: 'Вёрстка', colors: ['var(--accent3)', 'var(--accent2)'] },
  { title: 'Merch DESNA', categoryEn: 'Merch', categoryRu: 'Мерч', colors: ['#fff', 'var(--accent)'] },
  { title: 'Illustration «Rhythm»', categoryEn: 'Illustration', categoryRu: 'Иллюстрация', colors: ['var(--accent3)', 'var(--accent2)'] },
  { title: 'Studio Website', categoryEn: 'UI/UX', categoryRu: 'UX/UI', colors: ['var(--accent)', 'var(--accent3)'] },
  { title: 'Expo «Shift»', categoryEn: 'Exhibition', categoryRu: 'Экспозиция', colors: ['var(--accent2)', '#fff'] },
  { title: 'Identity ZERO', categoryEn: 'Branding', categoryRu: 'Брендинг', colors: ['var(--accent3)', 'var(--accent)'] },
  { title: 'Book «Color»', categoryEn: 'Editorial', categoryRu: 'Издание', colors: ['var(--accent)', 'var(--accent2)'] }
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
  for (let i = 0; i < 4; i++) selected.push(shapes[(index + i * 2) % shapes.length])
  return encodeURIComponent(`<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">${selected.join('')}</svg>`)
}

function generateKSAPromo() {
  // Geometric sans-serif vector paths for K, S, A
  const glyphs = {
    K: 'M30,0 L30,400 M30,200 L170,20 M30,230 L160,390',
    S: 'M160,20 Q60,20 60,100 Q60,180 170,200 Q70,220 70,300 Q70,380 160,380',
    A: 'M20,380 L100,20 L180,380 M50,240 L150,240'
  }

  return encodeURIComponent(`<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        @keyframes kUp{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}
        @keyframes sDown{0%{opacity:0;transform:translateY(-40px)}100%{opacity:1;transform:translateY(0)}}
        @keyframes aZoom{0%{opacity:0;transform:scale(.6)}100%{opacity:1;transform:scale(1)}}
        @keyframes drawL{0%{stroke-dashoffset:140}100%{stroke-dashoffset:0}}
        @keyframes subIn{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:translateY(0)}}
        @keyframes orbP{0%,100%{opacity:.04}50%{opacity:.12}}
        .k{animation:kUp .7s cubic-bezier(.25,.1,.25,1) both}
        .s{animation:sDown .7s cubic-bezier(.25,.1,.25,1) .12s both}
        .a{animation:aZoom .7s cubic-bezier(.25,.1,.25,1) .24s both}
        .line{stroke-dasharray:140;animation:drawL .8s ease-out .45s both}
        .sub{animation:subIn .5s ease-out .8s both}
        .o1{animation:orbP 4s ease-in-out infinite}
      </style>
    </defs>
    <rect width="400" height="500" fill="#0A0A0A"/>
    <circle cx="340" cy="420" r="50" fill="none" stroke="#FF2D55" stroke-width=".5" class="o1" style="opacity:.04"/>
    <g class="k" transform="translate(20,55) scale(1.3,1.3)">
      <path d="${glyphs.K}" fill="none" stroke="#fff" stroke-width="70" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g class="s" transform="translate(140,5) scale(1.15,1.15)">
      <path d="${glyphs.S}" fill="none" stroke="#fff" stroke-width="70" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g class="a" transform="translate(140,80) scale(1.6,1.6)">
      <path d="${glyphs.A}" fill="none" stroke="#FF2D55" stroke-width="65" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <line x1="80" y1="380" x2="320" y2="380" stroke="#FF2D55" stroke-width="3" stroke-linecap="round" class="line"/>
    <text x="200" y="420" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,.35)" text-anchor="middle" letter-spacing="8" class="sub">TYPE SPECIMEN</text>
  </svg>`)
}

function buildWorks() {
  const grid = document.getElementById('works-grid')
  projects.forEach((p, i) => {
    const card = document.createElement('div')
    const isKSA = i === 4
    card.className = `work-card wc-${i + 1}`
    if (isKSA) card.setAttribute('data-interactive', '')
    const svg = isKSA ? generateKSAPromo() : generateAbstractSVG(i, p.colors)
    const cat = lang === 'ru' ? p.categoryRu : p.categoryEn
    const num = String(i + 1).padStart(2, '0')
    card.innerHTML = `
      <div class="work-card__visual"><div class="wv" style="background-image:url('data:image/svg+xml,${svg}');background-size:cover;background-position:center"></div></div>
      <div class="work-card__inner">
        <div class="work-card__num">${num}</div>
        <div class="work-card__category">${cat}</div>
        <div class="work-card__title">${p.title}</div>
        <div class="work-card__line"></div>
      </div>`
    grid.appendChild(card)
  })
}

buildWorks()

// REFERENCES
function buildReferences() {
  const grid = document.getElementById('references-grid')
  const data = refsData[lang] || refsData.en
  data.forEach((r) => {
    const card = document.createElement('div')
    card.className = 'ref-card'
    card.innerHTML = `
      <div class="ref-card__inner" style="background:linear-gradient(135deg,${r.color}22,${r.color}08)">
        <div class="ref-card__cat">${r.cat}</div>
        <div class="ref-card__desc">${r.desc}</div>
        <div class="ref-card__links">
          <a href="${r.behance}" target="_blank" rel="noopener" class="ref-card__link ref-card__link--be"><span>Be</span><span>${lang === 'ru' ? 'искать' : 'explore'}</span></a>
          <a href="${r.dribbble}" target="_blank" rel="noopener" class="ref-card__link ref-card__link--dr"><span>Dr</span><span>${lang === 'ru' ? 'искать' : 'explore'}</span></a>
          <a href="${r.figma}" target="_blank" rel="noopener" class="ref-card__link ref-card__link--fg"><span>Fg</span><span>${lang === 'ru' ? 'искать' : 'explore'}</span></a>
          <a href="${r.pinterest}" target="_blank" rel="noopener" class="ref-card__link ref-card__link--pt"><span>Pt</span><span>${lang === 'ru' ? 'искать' : 'explore'}</span></a>
        </div>
      </div>`
    grid.appendChild(card)
  })
}

buildReferences()

function buildResourceSection(id, items) {
  const grid = document.getElementById(id)
  items.forEach((r) => {
    const el = document.createElement('a')
    el.className = 'ref-mini'
    el.href = r.url
    el.target = '_blank'
    el.rel = 'noopener'
    const name = lang === 'ru' ? r.nameRu : r.nameEn
    const desc = lang === 'ru' ? r.descRu : r.descEn
    el.innerHTML = `<div class="ref-mini__inner" style="border-color:${r.color}33"><div class="ref-mini__name">${name}</div><div class="ref-mini__desc">${desc}</div></div>`
    grid.appendChild(el)
  })
}

buildResourceSection('ref-special', specialResources)
buildResourceSection('ref-boards', boardResources)

// Apply language on load
applyLanguage()

// PROJECT OVERLAY
const overlay = document.getElementById('project-overlay')
const overlayContent = document.getElementById('overlay-content')
const overlayClose = document.getElementById('overlay-close')

function openProject(index) {
  const html = getProjectHTML(index)
  if (!html) return
  overlayContent.innerHTML = html
  overlay.classList.add('overlay--open')
  document.body.style.overflow = 'hidden'
  window.scrollTo({ top: 0 })
}

function closeProject() {
  overlay.classList.remove('overlay--open')
  document.body.style.overflow = ''
}

overlayClose.addEventListener('click', closeProject)
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeProject()
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProject()
})

// add click to work cards
document.querySelectorAll('.work-card').forEach((card, i) => {
  if (i === 4) {
    card.addEventListener('click', () => openProject(i))
  }
})

// Vector glyph paths for KSA typeface (geometric sans-serif)
const glyphPaths = {
  K: 'M30,0 L30,400 M30,200 L170,20 M30,230 L160,390',
  S: 'M160,20 Q60,20 60,100 Q60,180 170,200 Q70,220 70,300 Q70,380 160,380',
  A: 'M20,380 L100,20 L180,380 M50,240 L150,240',
  B: 'M30,0 L30,400 M30,0 L140,0 Q220,0 220,100 Q220,160 140,200 L30,200 M30,200 L140,200 Q220,200 220,300 Q220,400 30,400',
  C: 'M220,80 Q140,20 80,80 Q20,140 20,220 Q20,300 80,360 Q140,420 220,380',
  D: 'M30,0 L30,400 M30,0 L160,0 Q260,0 260,200 Q260,400 160,400 L30,400',
  E: 'M220,20 L30,20 L30,400 L220,400 M30,200 L180,200',
  F: 'M220,20 L30,20 L30,400 M30,200 L180,200',
  G: 'M230,80 Q140,20 80,80 Q20,140 20,220 Q20,300 80,360 Q140,420 220,380 L220,240 L140,240',
  H: 'M30,0 L30,400 M230,0 L230,400 M30,200 L230,200',
  I: 'M90,20 L90,400 M60,20 L120,20 M60,400 L120,400',
  J: 'M230,80 Q220,20 160,20 Q100,20 80,80 L80,140 M230,0 L230,400',
  L: 'M30,20 L30,400 L220,400',
  M: 'M30,400 L30,20 L130,200 L230,20 L230,400',
  N: 'M30,400 L30,20 L230,400 L230,20',
  O: 'M130,20 Q30,20 30,220 Q30,420 130,420 Q230,420 230,220 Q230,20 130,20',
  P: 'M30,0 L30,400 M30,0 L150,0 Q230,0 230,120 Q230,240 150,240 L30,240',
  Q: 'M130,20 Q30,20 30,220 Q30,420 130,420 Q230,420 230,220 Q230,20 130,20 M180,300 L240,380',
  R: 'M30,0 L30,400 M30,0 L150,0 Q230,0 230,120 Q230,240 150,240 L30,240 M150,240 L230,400',
  T: 'M20,20 L220,20 M120,20 L120,400',
  U: 'M30,20 L30,320 Q30,420 130,420 Q230,420 230,320 L230,20',
  V: 'M20,20 L130,400 L240,20',
  W: 'M20,20 L70,400 L130,200 L190,400 L240,20',
  X: 'M30,20 L230,400 M230,20 L30,400',
  Y: 'M20,20 L130,200 L240,20 M130,200 L130,400',
  Z: 'M30,20 L230,20 L30,400 L230,400'
}

function glyphSVG(char, size, color) {
  const path = glyphPaths[char]
  if (!path) return `<span class="proj-char" style="font-weight:700">${char}</span>`
  const s = Math.round(size * 0.035)
  const sw = Math.max(6, Math.round(size * 0.12))
  return `<svg width="${size}" height="${size}" viewBox="0 0 260 420" style="display:block"><path d="${path}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

function getProjectHTML(index) {
  if (index !== 4) return null

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const charHTML = letters.map(c => `<span class="proj-char">${glyphSVG(c, 40, 'var(--text)')}</span>`).join('')

  const weights = [
    { name: 'Thin', sw: 20, size: 22 },
    { name: 'Light', sw: 30, size: 22 },
    { name: 'Regular', sw: 45, size: 22 },
    { name: 'Medium', sw: 60, size: 20 },
    { name: 'Bold', sw: 80, size: 18 },
    { name: 'Black', sw: 100, size: 16 }
  ]

  const weightsHTML = weights.map(w => `
    <div class="proj-weight">
      <div class="proj-weight__name">${w.name}</div>
      <svg viewBox="0 0 260 60" style="width:100%;height:${w.size * 3}px">
        <path d="${glyphPaths.K}" fill="none" stroke="var(--text)" stroke-width="${w.sw}" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="${glyphPaths.S}" fill="none" stroke="var(--text)" stroke-width="${w.sw}" stroke-linecap="round" stroke-linejoin="round" transform="translate(90,0)"/>
        <path d="${glyphPaths.A}" fill="none" stroke="var(--accent)" stroke-width="${w.sw * 0.9}" stroke-linecap="round" stroke-linejoin="round" transform="translate(180,0)"/>
      </svg>
    </div>
  `).join('')

  const langText = lang === 'ru' ? `
    <p>Гарнитура KSA — это геометрический гротеск, вдохновлённый эстетикой русского авангарда и швейцарской школы типографики. Все глифы отрисованы вручную как векторные SVG-пути с контролируемыми кривыми и пропорциями.</p>
    <p style="margin-top:12px">Характеризуется строгими вертикалями, циркулярными дугами и выраженными диагоналями. Включает 6 начертаний — от Thin до Black. Подходит для айдентики, заголовков, плакатов и editorial-дизайна.</p>
  ` : `
    <p>KSA is a geometric sans-serif typeface inspired by Russian avant-garde aesthetics and Swiss typography. All glyphs are hand-crafted as vector SVG paths with controlled curves and proportions.</p>
    <p style="margin-top:12px">Features strict verticals, circular arcs, and distinctive diagonals. Includes 6 weights — from Thin to Black. Suitable for branding, headlines, posters, and editorial design.</p>
  `

  return `
    <div class="proj-hero">
      <div class="proj-hero__label">${lang === 'ru' ? 'Типографика' : 'Typography'}</div>
      <div style="display:flex;justify-content:center;gap:clamp(8px,2vw,24px);padding:20px 0">
        <svg height="clamp(60px,12vw,160px)" viewBox="0 0 260 420"><path d="${glyphPaths.K}" fill="none" stroke="var(--text)" stroke-width="70" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <svg height="clamp(60px,12vw,160px)" viewBox="0 0 260 420"><path d="${glyphPaths.S}" fill="none" stroke="var(--text)" stroke-width="70" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <svg height="clamp(70px,14vw,180px)" viewBox="0 0 260 420"><path d="${glyphPaths.A}" fill="none" stroke="var(--accent)" stroke-width="65" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="proj-hero__sub">${lang === 'ru' ? 'Геометрический гротеск' : 'Geometric Sans-Serif'} · 6 ${lang === 'ru' ? 'начертаний' : 'weights'} · 26 ${lang === 'ru' ? 'векторных глифов' : 'vector glyphs'}</div>
    </div>

    <div class="proj-section">
      <div class="proj-section__title">${lang === 'ru' ? 'Глифы (A–Z)' : 'Glyphs (A–Z)'}</div>
      <div class="proj-chars">${charHTML}</div>
    </div>

    <div class="proj-section">
      <div class="proj-section__title">${lang === 'ru' ? 'Начертания' : 'Weights'}</div>
      <div class="proj-weights">${weightsHTML}</div>
    </div>

    <div class="proj-section">
      <div class="proj-section__title">${lang === 'ru' ? 'Специмен' : 'Specimen'}</div>
      <div class="proj-specimen">
        <div class="proj-specimen__line" style="font-size:clamp(28px,5vw,52px);font-weight:900;font-family:'Unbounded',sans-serif;letter-spacing:-.03em">KSA Typeface</div>
        <div class="proj-specimen__line" style="font-size:clamp(16px,2.5vw,30px);font-weight:600;font-family:'Unbounded',sans-serif;letter-spacing:-.01em">${lang === 'ru' ? 'Шрифт — геометрический гротеск' : 'Geometric sans-serif typeface'}</div>
        <div class="proj-specimen__line" style="font-size:clamp(12px,1.8vw,20px);font-weight:400;color:var(--text-secondary)">The quick brown fox jumps over the lazy dog. 1234567890</div>
        <div class="proj-specimen__line" style="font-size:clamp(10px,1vw,14px);font-weight:300;color:var(--text-muted);letter-spacing:.05em;text-transform:uppercase">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
      </div>
    </div>

    <div class="proj-section">
      <div class="proj-section__title">${lang === 'ru' ? 'О шрифте' : 'About'}</div>
      <div class="proj-specimen" style="font-size:15px;line-height:1.8;color:var(--text-secondary)">${langText}</div>
    </div>
  `
}

// SCROLL REVEAL
const revealEls = document.querySelectorAll(
  '.about__content > *, .about__visual > *, .works__header, .work-card, .references__header, .ref-card, .ref-section, .ref-mini, .contact__left > *, .contact__right > *'
)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
)

revealEls.forEach((el, i) => {
  el.classList.add('reveal')
  if (i < 12) el.classList.add(`reveal-delay-${(i % 6) + 1}`)
  observer.observe(el)
})

document.querySelectorAll('.work-card').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 6) * 0.06}s`
})
