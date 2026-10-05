function closeMobileMenu() {
  document.getElementById('menu-toggle').checked = false
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileMenu()
})

let SITE_URL = 'https://bestdeejay-design.github.io/ksu'   // переопределяется из js/config.js

// I18N
const i18n = {
  en: {
    'nav.logo': 'Ksenia',
    'nav.services': 'Services',
    'nav.faq': 'FAQ',
    'nav.orderBtn': 'Start a project',
    'hero.offer': 'Design that sells your idea: logo, illustration, poster, packaging. From 3,500 ₽, first concepts in 3 days.',
    'hero.cta1': 'Start a project',
    'hero.cta2': 'Prices & services',
    'services.label': 'Services & prices',
    'services.lead': 'Pick the task — I show what’s included, the turnaround and the starting price. Not sure what you need? Write and I’ll quote it.',
    'services.cta': 'Not sure what I need',
    'services.note': 'Starting prices: the final quote depends on scope and deadline, usually the same day.',
    'process.label': 'How we work',
    'process.lead': 'Five steps with no surprises: you always know what is happening and what is next.',
    'reviews.label': 'Reviews',
    'order.label': 'Request a quote',
    'order.lead': 'Fill in 7 fields — I’ll turn them into a brief and send an exact quote. I reply within a day, usually in 1–2 hours.',
    'order.fact1n': '3–4 minutes',
    'order.fact1': 'to fill in, works fine on a phone',
    'order.fact2n': 'Free',
    'order.fact2': 'the quote and my questions commit you to nothing',
    'order.fact3n': 'Nothing is lost',
    'order.fact3': 'your draft is saved in this browser if you get distracted',
    'order.alt': 'Rather not fill a form?',
    'order.altLink': 'Write me on WhatsApp',
    'form.name': 'Your name',
    'form.namePh': 'For example, Anna',
    'form.nameErr': 'Please add a name — easier to start with one',
    'form.contact': 'Where to reply',
    'form.contactPh': '@telegram, WhatsApp number or email',
    'form.contactErr': 'I need a contact to reply to you',
    'form.service': 'What you need',
    'form.servicePh': 'Choose a service',
    'form.budget': 'Budget ballpark',
    'form.deadline': 'When you need it',
    'form.message': 'The task in your own words',
    'form.messagePh': 'Who it is for, where it will live, what must be taken into account',
    'form.messageErr': 'A couple of sentences is enough — at least 15 characters',
    'form.refs': 'References or brief',
    'form.optional': 'optional',
    'form.refsPh': 'Link to a folder, examples, document',
    'form.estimate': 'Preliminary estimate',
    'form.estimateNote': 'This is the price range from my rate card. I’ll confirm the exact figure after a couple of questions — usually the same day.',
    'form.consent': 'I agree that Ksenia may use this data to reply to my request.',
    'form.consentErr': 'Without consent I’m not allowed to reply',
    'form.send': 'Send the brief on WhatsApp',
    'form.copy': 'Copy the text',
    'form.privacy': 'Your data never reaches third parties: the form works without middlemen.',
    'form.contactInstead': 'Or write directly',
    'form.doneTitle': 'Your brief is ready and WhatsApp is open',
    'form.doneText': 'If the window didn’t open — press “Copy the text” and paste it into the chat. I reply within a day, usually faster.',
    'form.doneEdit': 'Edit the brief',
    'form.doneWorks': 'Show me the work first',
    'faq.label': 'Common questions',
    'faq.lead': 'What people ask before writing to me.',
    'faq.cta': 'Ask on WhatsApp',
    'form.fixErrors': 'Check the highlighted fields',
    'form.ready': 'Ready to send',
    'form.rushNote': '+50% for a rush deadline',
    'form.pickService': 'Choose a service to see the range',
    'form.filled': 'of 7 filled',
    'toast.copied': 'Brief copied',
    'toast.copyFail': 'Select the text and copy it manually',
    'draft.restored': 'Draft restored',
    'draft.clear': 'clear',
    'contact.wa': 'WhatsApp — fastest way to reach me',
    'contact.avail': 'Taking projects for this month',
    'footer.order': 'Request',
    'sticky.from': 'from',
    'sticky.btn': 'Start a project',
    'nav.works': 'Works',
    'nav.contact': 'Contact',
    'nav.langBtn': 'RU',
    'nav.startProject': 'Start Your Project',
    'nav.allProjects': 'All Projects',
    'hero.marquee': 'PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO •',
    'hero.name': 'Ksenia',
    'hero.subtitle': 'graphic<br/>designer',
    'hero.scroll': 'Scroll',
    'about.label': 'About',
    'about.p1': "Hi! I'm Ksenia — a graphic designer and illustrator. I'm in love with the living line, texture, and the mood that comes alive in every drawing. I craft visual solutions across identity, branding, illustration, and print.",
    'about.p2': 'In my work, I combine expressive aesthetics with a love for details. For me, every project is a story told through images, not words.',
    'about.tag1': 'Illustration',
    'about.tag2': 'Graphic Design',
    'about.tag3': 'Poster',
    'about.tag4': 'Identity',
    'about.tag5': 'Branding',
    'about.tag6': 'Photography',
    'about.tag7': 'Graphics',
    'works.label': 'Featured Projects',
    'works.count': 'projects',
    'contact.label': 'Contact',
    'contact.text': 'Open to collaboration and new projects.<br/>Feel free to write, I\'d love to discuss your task.',
    'footer.copy': '© 2026 Ksenia',
    'footer.tagline': 'Graphic Design',
    'proj.1.desc': 'Complete packaging design for a cosmetics brand including logo variations, product mockups, storefront visualization, and concept development.',
    'proj.1.mockup': 'Product Mockup',
    'proj.1.logos': 'Logo Variations',
    'proj.1.poster': 'Promo Poster',
    'proj.1.net': 'Packaging Net',
    'proj.1.storefront': 'Storefront',
    'proj.1.concept': 'Concept Development',
    'proj.2.desc': 'Poster, invitation card, and identity set for a themed cat-themed celebration event.',
    'proj.2.poster': 'Poster',
    'proj.2.ticket': 'Ticket',
    'proj.2.logo': 'Logo',
    'proj.2.mockups': 'Mockups',
    'proj.3.desc': 'A 2D platformer game design featuring custom level backgrounds, character concepts, and UI screens for a vibrant retro-style adventure game.',
    'proj.3.screens': 'Screens',
    'proj.3.backgrounds': 'Backgrounds',
    'proj.3.character': 'Character Concept',
    'proj.3.storyboard': 'Storyboard',
    'proj.4.desc': 'Digital portrait illustrations created in Procreate.',
    'proj.4.gallery': 'Portrait Gallery',
    'proj.4.more': 'More Procreate Works',
    'proj.5.desc': 'Illustration series "Popular Blondes" — postcard artwork featuring celebrity portraits in a bold contemporary style.',
    'proj.5.postcards': 'Postcard Set',
    'proj.6.desc': 'Character design and comic strip development featuring original characters and sequential narrative art.',
    'proj.6.comic': 'Comic Strips',
    'proj.6.character': 'Character Design',
    'proj.7.desc': 'Character design for a sticker pack featuring a cute kiwi-cat hybrid with multiple expressions and poses.',
    'proj.7.final': 'Final Character',
    'proj.7.variations': 'Variations',
    'proj.8.desc': 'Decorative wall art illustrations — two fantasy-themed digital paintings for interior spaces.',
    'proj.8.works': 'Wall Art Works',
    'proj.9.desc': 'An atmospheric photobook capturing the quiet beauty of the night — the world between 3:00 and 4:00 AM.',
    'proj.9.spreads': 'Spreads',
    'proj.9.photos': 'Photos',
    'proj.10.desc': 'Before/after retouching timeline showing professional color grading and skin retouching workflow.',
    'proj.10.timeline': 'Retouching Timeline',
    'proj.0.desc': 'Curated moodboard collection spanning interior design concepts including offices, cafes, kitchens, cosmetics, and more.',
    'proj.0.concepts': 'Concepts',
    'proj.0.offices': 'Offices',
    'proj.0.cafes': 'Cafes',
    'proj.0.kitchens': 'Kitchens',
    'proj.0.cosmetics': 'Cosmetics',
    'cta.title': 'Start Your Project',
    'cta.subtitle': 'Let\'s create something amazing together',
    'cta.desc': 'Have a project in mind? I\'d love to hear about it. Fill out a brief, and let\'s bring your vision to life.',
    'cta.steps': 'How It Works',
    'cta.step1': 'Brief — describe your project, goals, and references',
    'cta.step2': 'Discussion — we refine the brief and agree on terms',
    'cta.step3': 'Concepts — I prepare 2–3 visual directions',
    'cta.step4': 'Feedback — you choose the direction, I refine',
    'cta.step5': 'Delivery — final files in all needed formats',
    'cta.step6': 'Publication — your project joins the portfolio',
    'cta.contact': 'Get in Touch',
    'cta.email': 'Send brief via email',
    'cta.whatsapp': 'Write on WhatsApp',
    'cta.brief': 'Brief Template',
    'cta.briefText': 'What type of project? (branding, poster, illustration, packaging, etc.)\nWhat are the deadlines?\nReference links or examples\nBudget range\nShort description of the task'
  },
  ru: {
    'nav.logo': 'Ксения',
    'nav.services': 'Услуги',
    'nav.faq': 'Вопросы',
    'nav.orderBtn': 'Обсудить заказ',
    'hero.offer': 'Дизайн, который продаёт вашу идею: логотип, иллюстрация, плакат, упаковка. От 3 500 ₽, первые концепты — через 3 дня.',
    'hero.cta1': 'Обсудить заказ',
    'hero.cta2': 'Цены и услуги',
    'services.label': 'Услуги и цены',
    'services.lead': 'Выберите задачу — я покажу, что входит в работу, срок и стартовую цену. Не нашли своё? Напишите: сделаю смету отдельно.',
    'services.cta': 'Не знаю, что мне нужно',
    'services.note': 'Цены стартовые: итог зависит от объёма и сроков, назову его после брифа — обычно в тот же день.',
    'process.label': 'Как мы работаем',
    'process.lead': 'Пять шагов без сюрпризов: вы всегда знаете, что происходит и что будет дальше.',
    'reviews.label': 'Отзывы',
    'order.label': 'Оставить заявку',
    'order.lead': 'Заполните 7 полей — я соберу из них бриф и пришлю точную смету. Отвечу в течение дня, обычно за 1–2 часа.',
    'order.fact1n': '3–4 минуты',
    'order.fact1': 'на заполнение, можно с телефона',
    'order.fact2n': 'Бесплатно',
    'order.fact2': 'смета и уточняющие вопросы ни к чему не обязывают',
    'order.fact3n': 'Ничего не теряется',
    'order.fact3': 'черновик сохраняется в браузере, если отвлечься',
    'order.alt': 'Не хочется заполнять форму?',
    'order.altLink': 'Написать в WhatsApp',
    'form.name': 'Как вас зовут',
    'form.namePh': 'Например, Анна',
    'form.nameErr': 'Напишите имя — так удобнее начать',
    'form.contact': 'Куда ответить',
    'form.contactPh': '@telegram, номер WhatsApp или почта',
    'form.contactErr': 'Нужен контакт, иначе я не смогу ответить',
    'form.service': 'Что нужно',
    'form.servicePh': 'Выберите услугу',
    'form.budget': 'Ориентир по бюджету',
    'form.deadline': 'Когда нужно',
    'form.message': 'Задача своими словами',
    'form.messagePh': 'Для кого и для чего дизайн, где будет жить, что обязательно учесть',
    'form.messageErr': 'Пара предложений достаточно — минимум 15 символов',
    'form.refs': 'Референсы или ТЗ',
    'form.optional': 'необязательно',
    'form.refsPh': 'Ссылка на папку, примеры, документ',
    'form.estimate': 'Предварительная смета',
    'form.estimateNote': 'Это вилка «от» по прайсу. Точную цену назову после уточнений — обычно в тот же день.',
    'form.consent': 'Согласен(на), что Ксения использует эти данные, чтобы ответить на заявку.',
    'form.consentErr': 'Без согласия я не имею права ответить',
    'form.send': 'Отправить бриф в WhatsApp',
    'form.copy': 'Скопировать текст',
    'form.privacy': 'Данные не уходят третьим лицам: форма работает без посредников.',
    'form.contactInstead': 'Или написать напрямую',
    'form.doneTitle': 'Бриф собран и открыт в WhatsApp',
    'form.doneText': 'Если окно не открылось — нажмите «Скопировать текст» и вставьте в переписку. Я отвечу в течение дня, обычно быстрее.',
    'form.doneEdit': 'Поправить бриф',
    'form.doneWorks': 'Пока посмотрю работы',
    'faq.label': 'Частые вопросы',
    'faq.lead': 'То, о чём спрашивают перед первым сообщением.',
    'faq.cta': 'Спросить в WhatsApp',
    'form.fixErrors': 'Проверьте подсвеченные поля',
    'form.ready': 'Можно отправлять',
    'form.rushNote': '+50% за срочность',
    'form.pickService': 'Выберите услугу — покажу вилку цены',
    'form.filled': 'из 7 заполнено',
    'toast.copied': 'Бриф скопирован',
    'toast.copyFail': 'Выделите текст и скопируйте вручную',
    'draft.restored': 'Черновик восстановлен',
    'draft.clear': 'очистить',
    'contact.wa': 'WhatsApp — самый быстрый способ',
    'contact.avail': 'Беру проекты в этом месяце',
    'footer.order': 'Заявка',
    'sticky.from': 'от',
    'sticky.btn': 'Обсудить заказ',
    'nav.works': 'Работы',
    'nav.contact': 'Контакты',
    'nav.langBtn': 'EN',
    'nav.startProject': 'Начать проект',
    'nav.allProjects': 'Все проекты',
    'hero.marquee': 'ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО •',
    'hero.name': 'Ксения',
    'hero.subtitle': 'графический<br/>дизайнер',
    'hero.scroll': 'Скролл',
    'about.label': 'Обо мне',
    'about.p1': 'Привет! Я Ксения — графический дизайнер и иллюстратор. Я влюблена в живую линию, фактуру и настроение, которое оживает в каждом рисунке. Создаю визуальные решения для айдентики, брендинга, иллюстрации и печати.',
    'about.p2': 'В своей работе я соединяю выразительную эстетику с любовью к деталям. Для меня каждый проект — это история, рассказанная образами, а не словами.',
    'about.tag1': 'Иллюстрация',
    'about.tag2': 'Графический дизайн',
    'about.tag3': 'Плакат',
    'about.tag4': 'Айдентика',
    'about.tag5': 'Брендинг',
    'about.tag6': 'Фотография',
    'about.tag7': 'Графика',
    'works.label': 'Избранные проекты',
    'works.count': 'работ',
    'contact.label': 'Контакты',
    'contact.text': 'Открыта к сотрудничеству и новым проектам.<br/>Пишите, буду рада обсудить вашу задачу.',
    'footer.copy': '© 2026 Ксения',
    'footer.tagline': 'Графический дизайн',
    'proj.1.desc': 'Полный дизайн упаковки для косметического бренда: варианты логотипов, мокапы продукта, визуализация витрины и разработка концепции.',
    'proj.1.mockup': 'Мокап продукта',
    'proj.1.logos': 'Варианты логотипа',
    'proj.1.poster': 'Промо-постер',
    'proj.1.net': 'Сетка упаковки',
    'proj.1.storefront': 'Витрина',
    'proj.1.concept': 'Разработка концепции',
    'proj.2.desc': 'Плакат, приглашение и айдентика для тематического кошачьего праздника.',
    'proj.2.poster': 'Плакат',
    'proj.2.ticket': 'Билет',
    'proj.2.logo': 'Логотип',
    'proj.2.mockups': 'Мокапы',
    'proj.3.desc': 'Дизайн 2D-платформера с кастомными фонами уровней, концептами персонажей и интерфейсами для яркой ретро-приключенческой игры.',
    'proj.3.screens': 'Экраны',
    'proj.3.backgrounds': 'Фоны',
    'proj.3.character': 'Концепт персонажа',
    'proj.3.storyboard': 'Раскадровка',
    'proj.4.desc': 'Цифровые портретные иллюстрации, созданные в Procreate.',
    'proj.4.gallery': 'Галерея портретов',
    'proj.4.more': 'Другие работы Procreate',
    'proj.5.desc': 'Серия иллюстраций «Popular Blondes» — постерные портреты знаменитостей в смелом современном стиле.',
    'proj.5.postcards': 'Набор открыток',
    'proj.6.desc': 'Дизайн персонажей и разработка комиксов с оригинальными героями и последовательным нарративом.',
    'proj.6.comic': 'Комиксы',
    'proj.6.character': 'Дизайн персонажа',
    'proj.7.desc': 'Дизайн персонажа для набора стикеров — милый гибрид киви и кота в разных выражениях и позах.',
    'proj.7.final': 'Финальный персонаж',
    'proj.7.variations': 'Вариации',
    'proj.8.desc': 'Декоративные иллюстрации для интерьера — две фэнтезийные цифровые картины.',
    'proj.8.works': 'Работы',
    'proj.9.desc': 'Атмосферный фотобук, запечатлевший тихую красоту ночи — мир между 3:00 и 4:00 утра.',
    'proj.9.spreads': 'Развороты',
    'proj.9.photos': 'Фото',
    'proj.10.desc': 'Таймлайн ретуши «до/после» с профессиональной цветокоррекцией и обработкой кожи.',
    'proj.10.timeline': 'Таймлайн ретуши',
    'proj.0.desc': 'Подборка мудбордов: концепты интерьеров, офисы, кафе, кухни, косметика и другое.',
    'proj.0.concepts': 'Концепты',
    'proj.0.offices': 'Офисы',
    'proj.0.cafes': 'Кафе',
    'proj.0.kitchens': 'Кухни',
    'proj.0.cosmetics': 'Косметика',
    'cta.title': 'Начните свой проект',
    'cta.subtitle': 'Давайте создадим что-то удивительное вместе',
    'cta.desc': 'У вас есть проект? Буду рада услышать о нём. Заполните бриф, и вместе воплотим вашу идею в жизнь.',
    'cta.steps': 'Как это работает',
    'cta.step1': 'Бриф — опишите проект, цели и референсы',
    'cta.step2': 'Обсуждение — уточняем детали и согласовываем условия',
    'cta.step3': 'Концепции — я готовлю 2–3 визуальных направления',
    'cta.step4': 'Правки — вы выбираете направление, я дорабатываю',
    'cta.step5': 'Сдача — финальные файлы во всех нужных форматах',
    'cta.step6': 'Публикация — проект в портфолио',
    'cta.contact': 'Связаться',
    'cta.email': 'Отправить бриф на почту',
    'cta.whatsapp': 'Написать в WhatsApp',
    'cta.brief': 'Шаблон брифа',
    'cta.briefText': 'Тип проекта? (брендинг, плакат, иллюстрация, упаковка и т.д.)\nКакие сроки?\nСсылки на референсы\nБюджет\nКраткое описание задачи'
  }
}



// LANGUAGE
const CFG = window.KSU_CONFIG || null
if (CFG && CFG.siteUrl) SITE_URL = CFG.siteUrl
const R = window.KSU_RENDER
const initialLang = document.documentElement.getAttribute('data-lang') || 'ru'
let lang = initialLang
const langBtn = document.getElementById('lang-toggle')

function setMeta() {
  if (!CFG) return
  const s = lang === 'en' ? CFG.seo.en : CFG.seo.ru
  document.title = s.homeTitle
  const set = (sel, attr, val) => {
    const el = document.querySelector(sel)
    if (el) el.setAttribute(attr, val)
  }
  set('meta[name="description"]', 'content', s.homeDescription)
  set('meta[property="og:title"]', 'content', s.ogTitle)
  set('meta[property="og:description"]', 'content', s.ogDescription)
  set('meta[property="og:locale"]', 'content', s.locale)
  set('meta[name="twitter:title"]', 'content', s.ogTitle)
  set('meta[name="twitter:description"]', 'content', s.ogDescription)
}

function applyLanguage() {
  document.documentElement.lang = lang === 'en' ? 'en' : 'ru'
  document.documentElement.setAttribute('data-lang', lang)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n
    const text = i18n[lang] && i18n[lang][key]
    if (text !== undefined) {
      el.innerHTML = text
    }
  })
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh
    const text = i18n[lang] && i18n[lang][key]
    if (text !== undefined) el.setAttribute('placeholder', text)
  })
  if (langBtn) langBtn.textContent = lang === 'ru' ? 'EN' : 'RU'
  setMeta()
}

langBtn.addEventListener('click', () => {
  lang = lang === 'en' ? 'ru' : 'en'
  localStorage.setItem('lang', lang)
  applyLanguage()
  rebuildLangContent()
  if (window.ksuTrack) window.ksuTrack('lang_switch', { lang })
})

function rebuildLangContent() {
  const worksGrid = document.getElementById('works-grid')
  worksGrid.innerHTML = ''
  buildWorks()

  buildNavProjects()
  renderConfigSections()
  if (window.orderForm) window.orderForm.refresh()
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
  { titleEn: 'Moodboards Collection', titleRu: 'Коллекция мудбордов', categoryEn: 'Moodboards', categoryRu: 'Мудборды', cover: 'portfolio/moodboards/concept-2.jpg', colors: ['#3498DB', '#9B59B6'] },
  { titleEn: 'Packaging Development', titleRu: 'Разработка упаковки', categoryEn: 'Packaging', categoryRu: 'Упаковка', cover: 'portfolio/packaging/mockup.jpg', colors: ['#FF2D55', '#1A1A1A'], pdfs: ['portfolio/packaging/booklet-final.pdf', 'portfolio/packaging/concept-development.pdf'] },
  { titleEn: 'Cat Day Poster', titleRu: 'Постер «День кошек»', categoryEn: 'Poster', categoryRu: 'Плакат', cover: 'portfolio/poster-cat-day/poster-final.jpg', colors: ['#00E5FF', '#FF2D55'] },
  { titleEn: 'Platformer Game Design', titleRu: 'Дизайн игры платформер', categoryEn: 'Game Design', categoryRu: 'Гейм-дизайн', cover: 'portfolio/game/menu.jpg', colors: ['#FFD633', '#FF2D55'] },
  { titleEn: 'Procreate Portraits', titleRu: 'Портреты Procreate', categoryEn: 'Illustration', categoryRu: 'Иллюстрация', cover: 'portfolio/digital-drawing/procreate/portraits/portrait-mia-goth.jpg', colors: ['#9B59B6', '#FF6B9D'] },
  { titleEn: 'Popular Blondes', titleRu: 'Популярные блондинки', categoryEn: 'Illustration', categoryRu: 'Иллюстрация', cover: 'portfolio/digital-drawing/popular-blondes/postcard-margot.jpg', colors: ['#FFD633', '#FF2D55'] },
  { titleEn: 'Character & Comic', titleRu: 'Персонаж и комикс', categoryEn: 'Illustration', categoryRu: 'Иллюстрация', cover: 'portfolio/digital-drawing/character-comic/comic-var-1.jpg', colors: ['#E74C3C', '#FF6B9D'] },
  { titleEn: 'Sticker Character', titleRu: 'Персонаж для стикеров', categoryEn: 'Illustration', categoryRu: 'Иллюстрация', cover: 'portfolio/stickers/kiwi-cat.jpg', colors: ['#FF6B9D', '#FF2D55'] },
  { titleEn: 'Wall Art', titleRu: 'Арт под роспись стены', categoryEn: 'Illustration', categoryRu: 'Иллюстрация', cover: 'portfolio/digital-drawing/wall-art-1.jpg', colors: ['#2ECC71', '#00E5FF'] },
  { titleEn: 'Photobook "3:00"', titleRu: 'Фотокнига «3:00»', categoryEn: 'Editorial', categoryRu: 'Издание', cover: 'portfolio/photobook/preview.jpg', colors: ['#E67E22', '#FFD633'] },
  { titleEn: 'Photo Retouching', titleRu: 'Ретушь фото', categoryEn: 'Photography', categoryRu: 'Фотография', cover: 'portfolio/retouch/retouch-timeline.jpg', colors: ['#1ABC9C', '#00E5FF'] },
]

function buildWorks() {
  const grid = document.getElementById('works-grid')
  projects.forEach((p, i) => {
    const card = document.createElement('div')
    card.className = `work-card wc-${i + 1}`
    const cat = lang === 'ru' ? p.categoryRu : p.categoryEn
    const title = lang === 'ru' ? (p.titleRu || p.titleEn) : p.titleEn
    const num = String(i + 1).padStart(2, '0')
    let visual = ''
    if (p.cover) {
      visual = `<div class="wv"><img src="${p.cover}" alt="${title}" loading="lazy" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.style.background='var(--card-bg)'"/></div>`
    }
    card.innerHTML = `
      <div class="work-card__visual">${visual}</div>
      <div class="work-card__inner">
        <div class="work-card__num">${num}</div>
        <div class="work-card__category">${cat}</div>
        <div class="work-card__title">${title}</div>
        <div class="work-card__line"></div>
      </div>`
    card.addEventListener('click', () => openProject(i))
    grid.appendChild(card)
  })
  // CTA card — always last
  const cta = document.createElement('div')
  cta.className = 'work-card work-card--cta'
  cta.innerHTML = `
    <div class="work-card__visual"><div class="wv wv--cta"><svg viewBox="0 0 80 80" fill="none"><path d="M40 16v48M16 40h48" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg></div></div>
    <div class="work-card__inner">
      <div class="work-card__num">+</div>
      <div class="work-card__category">${i18n[lang]['cta.subtitle']}</div>
      <div class="work-card__title">${i18n[lang]['cta.title']}</div>
      <div class="work-card__line"></div>
    </div>`
  cta.addEventListener('click', openNewProject)
  grid.appendChild(cta)

  document.getElementById('works-count').textContent = projects.length
}

buildWorks()

applyLanguage()

const overlay = document.getElementById('project-overlay')
const overlayContent = document.getElementById('overlay-content')
const overlayClose = document.getElementById('overlay-close')
let scrollPosition = 0
let currentProject = -1

function updateOG(index) {
  const p = projects[index]
  if (!p) return
  const who = CFG ? R.L(lang, CFG.brand.nameRu, CFG.brand.nameEn) : 'Ksenia'
  const title = lang === 'ru' ? p.titleRu : p.titleEn
  const cat = lang === 'ru' ? p.categoryRu : p.categoryEn
  const desc = i18n[lang][`proj.${index}.desc`] || `${cat} — ${title}`
  const img = `${SITE_URL}/og-${index}.jpg`

  document.querySelector('meta[property="og:title"]')?.setAttribute('content', `${who} — ${title}`)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', desc)
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${SITE_URL}/project-${index}/`)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}/project-${index}/`)
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', img)
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', `${who} — ${title}`)
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', desc)
  document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', img)
  document.querySelector('title').textContent = `${who} — ${title}`
  document.querySelector('meta[name="description"]')?.setAttribute('content', desc)
}

const DEFAULT_DESC = 'Portfolio of Ksenia — graphic designer. Identity, branding, typography, UI/UX, illustration, posters.'

function resetOG() {
  if (CFG && R) {
    setMeta()
  } else {
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Ksenia — graphic designer')
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', DEFAULT_DESC)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', 'Ksenia — graphic designer')
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', DEFAULT_DESC)
    document.querySelector('title').textContent = 'Ksenia — graphic designer'
    document.querySelector('meta[name="description"]')?.setAttribute('content', DEFAULT_DESC)
  }
  document.querySelector('meta[property="og:description"]')?.setAttribute('content',
    CFG ? (lang === 'en' ? CFG.seo.en.homeDescription : CFG.seo.ru.homeDescription) : DEFAULT_DESC)
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content',
    CFG ? (lang === 'en' ? CFG.seo.en.homeDescription : CFG.seo.ru.homeDescription) : DEFAULT_DESC)
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${SITE_URL}/`)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}/`)
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', `${SITE_URL}/og-2026-08-10.png`)
  document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', `${SITE_URL}/og-2026-08-10.png`)
}

function shareProject(index) {
  const p = projects[index]
  const title = lang === 'ru' ? p.titleRu : p.titleEn
  const url = `${SITE_URL}/project-${index}/`
  if (navigator.share) {
    navigator.share({ title: `${who} — ${title}`, url }).catch(() => {})
  } else {
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.getElementById('share-btn-fixed')
      if (btn) {
        const orig = btn.innerHTML
        btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
        setTimeout(() => { btn.innerHTML = orig }, 2000)
      }
    }).catch(() => {})
  }
}

function openProject(index) {
  const html = getProjectHTML(index)
  if (!html) return
  currentProject = index
  scrollPosition = window.scrollY
  overlayContent.innerHTML = html
  overlay.classList.add('overlay--open')
  document.body.style.overflow = 'hidden'
  document.body.classList.add('overlay-active')
  window.scrollTo({ top: 0 })
  updateOG(index)
  history.replaceState(null, '', `#project-${index}`)
}

function closeProject() {
  overlay.classList.remove('overlay--open')
  document.body.style.overflow = ''
  document.body.classList.remove('overlay-active')
  window.scrollTo({ top: scrollPosition })
  resetOG()
  history.replaceState(null, '', window.location.pathname + window.location.search)
  currentProject = -1
}

overlayClose.addEventListener('click', closeProject)
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeProject()
})

// Hash routing on load
function handleHash() {
  const match = window.location.hash.match(/^#project-(\d+)$/)
  if (match) {
    const i = parseInt(match[1], 10)
    if (i >= 0 && i < projects.length) {
      const worksSection = document.getElementById('works')
      scrollPosition = worksSection ? worksSection.offsetTop - 100 : 0
      setTimeout(() => openProject(i), 300)
    }
  }
}
document.addEventListener('DOMContentLoaded', handleHash)
window.addEventListener('hashchange', handleHash)

// CTA — new project overlay
function openNewProject() {
  const _ = key => i18n[lang][key]
  currentProject = -1
  scrollPosition = window.scrollY
  overlayContent.innerHTML = `
    <div class="proj-hero">
      <div class="proj-hero__label">+</div>
      <div class="proj-hero__title" style="font-size:clamp(28px,5vw,64px);margin-top:12px">${_('cta.title')}</div>
    </div>

    <div class="proj-section">
      <div class="proj-section__title">${_('cta.desc')}</div>
    </div>

    <div class="proj-section">
      <div class="proj-section__title">${_('cta.steps')}</div>
      <div class="cta-steps">
        <div class="cta-step"><span class="cta-step__num">01</span><span>${_('cta.step1')}</span></div>
        <div class="cta-step"><span class="cta-step__num">02</span><span>${_('cta.step2')}</span></div>
        <div class="cta-step"><span class="cta-step__num">03</span><span>${_('cta.step3')}</span></div>
        <div class="cta-step"><span class="cta-step__num">04</span><span>${_('cta.step4')}</span></div>
        <div class="cta-step"><span class="cta-step__num">05</span><span>${_('cta.step5')}</span></div>
        <div class="cta-step"><span class="cta-step__num">06</span><span>${_('cta.step6')}</span></div>
      </div>
    </div>

    <div class="proj-section">
      <div class="proj-section__title">${_('cta.brief')}</div>
      <div class="cta-brief">${_('cta.briefText')}</div>
    </div>

    <div class="proj-section">
      <div class="proj-section__title">${_('cta.contact')}</div>
      <div class="cta-contacts">
        <a href="#order" class="cta-contact__btn" onclick="closeProject()">${lang === 'ru' ? 'Заполнить бриф на сайте' : 'Fill the brief on the site'}</a>
        <a href="${waLink(CFG ? CFG.brand.nameRu : '')}" class="cta-contact__btn" target="_blank" rel="noopener">${_('cta.whatsapp')}</a>
        <a href="mailto:ksu@ya.ru?subject=Project%20Brief" class="cta-contact__btn">${_('cta.email')}</a>
      </div>
    </div>`
  overlay.classList.add('overlay--open')
  document.body.style.overflow = 'hidden'
  document.body.classList.add('overlay-active')
  window.scrollTo({ top: 0 })
}

function getProjectHTML(index) {
  const _ = key => i18n[lang][key]
  const p = projects[index]
  const pTitle = lang === 'ru' ? p.titleRu : p.titleEn

  const section = (title, html) => `<div class="proj-section"><div class="proj-section__title">${title}</div>${html}</div>`
  const gall = (srcs, cols = 2) => `<div class="proj-gallery proj-gallery--${cols}">${srcs.map(s => `<div class="proj-gallery__item" onclick="openLightbox('${s}',${index})"><img src="${s}" alt="${pTitle}" loading="lazy"/></div>`).join('')}</div>`
  const hero = `<div class="proj-hero"><div class="proj-hero__label">${lang === 'ru' ? p.categoryRu : p.categoryEn}</div><div style="font-size:clamp(24px,4vw,48px);font-weight:900;font-family:'Unbounded',sans-serif;margin:12px 0">${lang === 'ru' ? p.titleRu : p.titleEn}</div></div>`
  const desc = index !== 0 ? `<div class="proj-desc">${_(`proj.${index}.desc`)}</div>` : ''

  let c
  switch (index) {
    // 1: Packaging Development
    case 1:
      c = hero + desc +
        section(_('proj.1.mockup'), gall(['portfolio/packaging/mockup.jpg'], 1)) +
        section(_('proj.1.logos'), gall(['portfolio/packaging/logo-1-color.jpg', 'portfolio/packaging/logo-1.png', 'portfolio/packaging/logo-2.png'], 3)) +
        section(_('proj.1.poster'), gall(['portfolio/packaging/poster.png'], 1)) +
        section(_('proj.1.net'), gall(['portfolio/packaging/packaging-net.jpg'], 1)) +
        section(_('proj.1.storefront'), gall(['portfolio/packaging/storefront.jpg'], 1)) +
        section(_('proj.1.concept'), gall(['portfolio/packaging/concept.png'], 1)) +
        `<div class="proj-section"><div style="display:flex;gap:12px;flex-wrap:wrap">
          <a class="proj-pdf-link" href="portfolio/packaging/booklet-final.pdf" download target="_blank" rel="noopener">${lang === 'ru' ? 'Скачать буклет (PDF)' : 'Download booklet (PDF)'}</a>
          <a class="proj-pdf-link" href="portfolio/packaging/concept-development.pdf" download target="_blank" rel="noopener">${lang === 'ru' ? 'Скачать концепцию (PDF)' : 'Download concept (PDF)'}</a>
        </div></div>`
      break

    // 2: Cat Day Poster
    case 2:
      c = hero + desc +
        section(_('proj.2.poster'), gall(['portfolio/poster-cat-day/poster-final.jpg'], 1)) +
        section(_('proj.2.ticket'), gall(['portfolio/poster-cat-day/ticket.jpg'], 1)) +
        section(_('proj.2.logo'), gall(['portfolio/poster-cat-day/logo.jpg'], 1)) +
        section(_('proj.2.mockups'), gall(['portfolio/poster-cat-day/mockup-1.jpg', 'portfolio/poster-cat-day/mockup-2.jpg']))
      break

    // 3: Platformer Game Design
    case 3:
      c = hero + desc +
        section(_('proj.3.screens'), gall(['portfolio/game/menu.jpg', 'portfolio/game/win-screen.jpg', 'portfolio/game/lose-screen.jpg'], 2)) +
        section(_('proj.3.backgrounds'), gall(['portfolio/game/bg-1.jpg', 'portfolio/game/bg-2.jpg', 'portfolio/game/bg-3.jpg', 'portfolio/game/bg-4.jpg'], 2)) +
        section(_('proj.3.character'), gall(['portfolio/game/character-concept.jpg'], 1)) +
        section(_('proj.3.storyboard'), gall(['portfolio/game/storyboard.jpg'], 1))
      break

    // 4: Procreate Portraits (+ root Procreate files)
    case 4:
      c = hero + desc +
        section(_('proj.4.gallery'), gall([
          'portfolio/digital-drawing/procreate/portraits/portrait-mia-goth.jpg',
          'portfolio/digital-drawing/procreate/portraits/portrait-ldr.jpg',
          'portfolio/digital-drawing/procreate/portraits/portrait-ldr-1.jpg',
          'portfolio/digital-drawing/procreate/portraits/curls.jpg',
          'portfolio/digital-drawing/procreate/portraits/gift-cover-1.jpg',
          'portfolio/digital-drawing/procreate/portraits/gift-cover-2.jpg'
        ], 3)) +
        section(_('proj.4.more'), gall([
          'portfolio/digital-drawing/procreate/accent-makeup.jpg',
          'portfolio/digital-drawing/procreate/girl-headphones.jpg',
          'portfolio/digital-drawing/procreate/padme-pink.jpg',
          'portfolio/digital-drawing/procreate/portrait-ldr-2.jpg',
          'portfolio/digital-drawing/procreate/princess.jpg',
          'portfolio/digital-drawing/procreate/stingray-abstract.jpg'
        ], 3))
      break

    // 5: Popular Blondes
    case 5:
      c = hero + desc +
        section(_('proj.5.postcards'), gall([
          'portfolio/digital-drawing/popular-blondes/postcard-margot.jpg',
          'portfolio/digital-drawing/popular-blondes/page-regina.jpg',
          'portfolio/digital-drawing/popular-blondes/project-link.png'
        ], 3))
      break

    // 6: Character & Comic
    case 6:
      c = hero + desc +
        section(_('proj.6.comic'), gall(['portfolio/digital-drawing/character-comic/comic-var-1.jpg', 'portfolio/digital-drawing/character-comic/comic-var-2.jpg'])) +
        section(_('proj.6.character'), gall(['portfolio/digital-drawing/character-comic/stingray-character.jpg'], 1))
      break

    // 7: Sticker Character (+ sticker-sketches)
    case 7:
      c = hero + desc +
        section(_('proj.7.final'), gall(['portfolio/stickers/kiwi-cat.jpg'], 1)) +
        section(_('proj.7.variations'), gall([
          'portfolio/stickers/character-var-1.jpg',
          'portfolio/stickers/character-var-2.jpg',
          'portfolio/stickers/character-var-2-1.jpg',
          'portfolio/digital-drawing/sticker-sketches/sticker-variant-bw.jpg'
        ], 4))
      break

    // 8: Wall Art
    case 8:
      c = hero + desc +
        section(_('proj.8.works'), gall(['portfolio/digital-drawing/wall-art-1.jpg', 'portfolio/digital-drawing/wall-art-2.jpg']))
      break

    // 9: Photobook "3:00"
    case 9:
      c = hero + desc +
        `<div class="proj-section" style="text-align:center">
          <a class="proj-pdf-link" href="flipbook/" target="_blank" rel="noopener" style="gap:8px">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            ${lang === 'ru' ? 'Листать фотокнигу' : 'Flip through'}
          </a>
          <div style="margin-top:12px;font-size:13px;color:var(--text-secondary)">
            <a href="portfolio/photobook/photobook-final.pdf" download target="_blank" rel="noopener" style="color:inherit">${lang === 'ru' ? 'Скачать PDF' : 'Download PDF'}</a>
          </div>
        </div>` +
        section(_('proj.9.spreads'), gall(Array.from({length:11},(_,i)=>'portfolio/photobook/spread-'+(i+1).toString().padStart(2,'0')+'.jpg'), 2)) +
        section(_('proj.9.photos'), gall(Array.from({length:14},(_,i)=>'portfolio/photobook/photo-'+(i+1).toString().padStart(2,'0')+'.png'), 3))
      break

    // 10: Photo Retouching
    case 10:
      c = hero + desc +
        section(_('proj.10.timeline'), gall(['portfolio/retouch/retouch-timeline.jpg'], 1))
      break

    // 11: Moodboards Collection
    case 0:
      c = hero + desc +
        section(_('proj.0.concepts'), gall(['portfolio/moodboards/concept-1.jpg', 'portfolio/moodboards/concept-2.jpg'])) +
        section(_('proj.0.offices'), gall(['portfolio/moodboards/office-cd-project.jpg', 'portfolio/moodboards/office-mundfish.jpg', 'portfolio/moodboards/office-sony.jpg'], 3)) +
        section(_('proj.0.cafes'), gall(['portfolio/moodboards/cafe-hello-kitty.jpg', 'portfolio/moodboards/cafe-cyberpunk.jpg', 'portfolio/moodboards/cafe-retro.jpg'], 3)) +
        section(_('proj.0.kitchens'), gall(['portfolio/moodboards/kitchen-1.jpg', 'portfolio/moodboards/kitchen-2.jpg', 'portfolio/moodboards/kitchen-3.jpg'], 3)) +
        section(_('proj.0.cosmetics'), gall(['portfolio/moodboards/cosmetics-shop.jpg'], 1))
      break

    default:
      return null
  }

  const shareTitle = lang === 'ru' ? 'Понравился проект?' : 'Like this project?'
  const shareLabel = lang === 'ru' ? 'Поделиться проектом' : 'Share this project'
  const ordTitle = lang === 'ru' ? 'Хочу такое же' : 'I want something like this'
  const svc = serviceForProject(index)
  const ordBtn = svc
    ? `<a class="proj-share-btn proj-share-btn--order" href="#order" onclick="closeProject();preselectService('${svc.slug}')">${lang === 'ru' ? `Заказать: ${R.esc(svc.titleRu)} — ${R.priceLabel(svc, lang, CFG)}` : `Order: ${R.esc(svc.titleEn)} — ${R.priceLabel(svc, lang, CFG)}`}</a>`
    : ''
  return c + `<div class="proj-section proj-section--share"><div class="proj-section__title">${shareTitle}</div>${ordBtn}<button class="proj-share-btn" onclick="shareProject(${index})">${shareLabel}</button></div>`
}

// LIGHTBOX
let lbImages = []
let lbIndex = 0
const lb = document.getElementById('lightbox')
const lbImg = document.getElementById('lightbox-image')
const lbCounter = document.getElementById('lightbox-counter')
const lbClose = document.getElementById('lightbox-close')
const lbPrev = document.getElementById('lightbox-prev')
const lbNext = document.getElementById('lightbox-next')

function openLightbox(src, projectIdx) {
  const content = document.getElementById('overlay-content')
  const imgs = content ? [...content.querySelectorAll('.proj-gallery__item img')].map(i => i.src) : [src]
  lbImages = imgs.length ? imgs : [src]
  lbIndex = lbImages.findIndex(u => u.includes(src))
  if (lbIndex === -1) lbIndex = 0
  showLightboxImage()
  lb.classList.add('lightbox--open')
  document.body.style.overflow = 'hidden'
}

function showLightboxImage() {
  if (!lbImages.length) return
  const proj = currentProject >= 0 ? projects[currentProject] : null
  lbImg.src = lbImages[lbIndex]
  lbImg.alt = proj ? (lang === 'ru' ? proj.titleRu : proj.titleEn) : 'Portfolio image'
  lbCounter.textContent = `${lbIndex + 1} / ${lbImages.length}`
  lbPrev.style.display = lbImages.length > 1 ? '' : 'none'
  lbNext.style.display = lbImages.length > 1 ? '' : 'none'
}

function closeLightbox() {
  lb.classList.remove('lightbox--open')
  document.body.style.overflow = ''
}

function lbNav(dir) {
  lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length
  showLightboxImage()
}

lbClose.addEventListener('click', closeLightbox)
lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox() })
lbPrev.addEventListener('click', () => lbNav(-1))
lbNext.addEventListener('click', () => lbNav(1))

// DROPDOWN NAV
function buildNavProjects() {
  const list = document.getElementById('nav-dropdown-list')
  if (!list) return
  list.innerHTML = ''

  const allItem = document.createElement('a')
  allItem.className = 'nav__dropdown-item'
  allItem.href = '#works'
  allItem.innerHTML = `<span class="nav__dropdown-title">${i18n[lang]['nav.allProjects']}</span>`
  allItem.addEventListener('click', (e) => {
    closeNavDropdown()
    closeMobileMenu()
  })
  list.appendChild(allItem)

  projects.forEach((p, i) => {
    const item = document.createElement('a')
    item.className = 'nav__dropdown-item'
    item.href = `#project-${i}`
    item.innerHTML = `
      <span class="nav__dropdown-num">${String(i + 1).padStart(2, '0')}</span>
      <span class="nav__dropdown-title">${lang === 'ru' ? (p.titleRu || p.titleEn) : p.titleEn}</span>
    `
    item.addEventListener('click', (e) => {
      e.preventDefault()
      openProject(i)
      closeNavDropdown()
      closeMobileMenu()
    })
    list.appendChild(item)
  })
}

function closeNavDropdown() {
  document.querySelectorAll('.nav__dropdown-toggle').forEach(b => b.setAttribute('aria-expanded', 'false'))
  document.querySelectorAll('.nav__item--dropdown').forEach(el => el.classList.remove('open'))
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav__item--dropdown')) closeNavDropdown()
})

document.querySelector('.nav__link--works')?.addEventListener('click', function(e) {
  if (window.innerWidth <= 768) {
    e.preventDefault()
    const item = this.closest('.nav__item--dropdown')
    if (item) {
      item.classList.toggle('open')
      const toggle = item.querySelector('.nav__dropdown-toggle')
      if (toggle) toggle.setAttribute('aria-expanded', item.classList.contains('open'))
    }
  } else {
    closeMobileMenu()
  }
})

document.getElementById('nav-dropdown-cta')?.addEventListener('click', (e) => {
  e.preventDefault()
  openNewProject()
  closeNavDropdown()
  closeMobileMenu()
})

buildNavProjects()

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (lb.classList.contains('lightbox--open')) { closeLightbox(); return }
    if (overlay.classList.contains('overlay--open')) { closeProject(); return }
    closeNavDropdown()
  }
  if (lb.classList.contains('lightbox--open')) {
    if (e.key === 'ArrowLeft') lbNav(-1)
    if (e.key === 'ArrowRight') lbNav(1)
  }
})

// SCROLL REVEAL
const revealEls = document.querySelectorAll(
  '.about__content > *, .about__visual > *, .works__header, .work-card, .contact__left > *, .contact__right > *'
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

// Fixed share button — always visible
function shareMain() {
  const url = `${SITE_URL}/`
  if (navigator.share) {
    navigator.share({ title: 'Ksenia — graphic designer', url }).catch(() => {})
  } else {
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.getElementById('share-btn-fixed')
      if (btn) {
        const orig = btn.innerHTML
        btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
        setTimeout(() => { btn.innerHTML = orig }, 2000)
      }
    }).catch(() => {})
  }
}
document.getElementById('share-btn-fixed').addEventListener('click', () => {
  if (currentProject >= 0) shareProject(currentProject)
  else shareMain()
})

/* =======================================================================
   ПРОДАЮЩИЕ СЕКЦИИ + ФОРМА ЗАЯВКИ
   Всё содержимое берётся из js/config.js — править нужно только его.
   ======================================================================= */

function waLink(text) {
  const num = CFG && CFG.contacts.whatsapp ? CFG.contacts.whatsapp : '79811281636'
  return 'https://wa.me/' + num + (text ? '?text=' + encodeURIComponent(text) : '')
}

function serviceForProject(index) {
  if (!CFG || !R) return null
  return CFG.services.filter(s => String(s.project) === String(index))[0] || null
}

/* ---------- prerender-совместимая отрисовка секций ---------- */
function renderConfigSections() {
  if (!CFG || !R) return
  const put = (id, html) => {
    const el = document.getElementById(id)
    if (el) el.innerHTML = html
  }

  put('services-grid', R.servicesGrid(lang, CFG))
  put('process-list', R.processList(lang, CFG))
  put('trust-list', R.promises(lang, CFG))
  put('faq-list', R.faqList(lang, CFG))

  // опции и чипсы формы
  const sel = document.getElementById('f-service')
  if (sel) {
    const cur = sel.value
    sel.innerHTML = '<option value="">' + (i18n[lang]['form.servicePh']) + '</option>' +
      CFG.services.map(s => `<option value="${s.slug}">${R.esc(R.L(lang, s.titleRu, s.titleEn))} · ${R.esc(R.priceLabel(s, lang, CFG))}</option>`).join('')
    if (cur) sel.value = cur
  }
  put('f-budget', R.chips(CFG.budgets, lang, 'budget'))
  put('f-deadline', R.chips(CFG.deadlines, lang, 'deadline'))

  // цена «от» в мобильной плашке
  const min = Math.min.apply(null, CFG.services.map(s => s.priceFrom))
  const from = document.getElementById('sticky-from')
  if (from) from.textContent = R.price(min, CFG)

  const avail = document.getElementById('contact-avail')
  if (avail) avail.textContent = CFG.promises.responseRu && lang === 'ru'
    ? '✦ ' + CFG.promises.responseRu
    : '✦ ' + CFG.promises.responseEn

  document.querySelectorAll('[data-wa]').forEach(a => {
    if (!a.dataset.waBound) {
      a.dataset.waBound = '1'
      a.dataset.baseHref = a.href
    }
    if (a.id !== 'order-send' && !a.closest('#order-form')) {
      a.setAttribute('href', waLink(lang === 'ru'
        ? 'Здравствуйте! Смотрю ваше портфолио, хочу обсудить заказ.'
        : 'Hello! I found your portfolio and would like to discuss a project.'))
    }
  })

  bindServiceCtas()
  renderReviews()
}

function bindServiceCtas() {
  document.querySelectorAll('[data-order-service]').forEach(btn => {
    if (btn.dataset.bound) return
    btn.dataset.bound = '1'
    btn.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      preselectService(btn.dataset.orderService)
      if (window.ksuTrack) window.ksuTrack('service_click', { service: btn.dataset.orderService })
    })
  })
}

function renderReviews() {
  const box = document.getElementById('reviews-grid')
  const sec = document.getElementById('reviews')
  if (!box || !sec || !CFG) return
  const list = CFG.reviews || []
  if (!list.length) { sec.hidden = true; return }
  sec.hidden = false
  box.innerHTML = list.map(rv =>
    `<figure class="review"><blockquote class="review__text">${R.esc(lang === 'ru' ? rv.textRu : rv.textEn)}</blockquote>` +
    `<figcaption class="review__who">${R.esc(lang === 'ru' ? rv.name : (rv.nameEn || rv.name))}` +
    (rv.project != null ? ` <button type="button" class="review__link" onclick="openProject(${rv.project})">${lang === 'ru' ? 'работа' : 'project'}</button>` : '') +
    (rv.url ? ` <a href="${R.esc(rv.url)}" target="_blank" rel="noopener" class="review__src">${lang === 'ru' ? 'источник' : 'source'}</a>` : '') +
    `</figcaption></figure>`).join('')
}

/* ---------- выбор услуги из карточки ---------- */
function preselectService(slug) {
  const sel = document.getElementById('f-service')
  if (sel) { sel.value = slug; sel.dispatchEvent(new Event('change', { bubbles: true })) }
  const order = document.getElementById('order')
  if (order && order.scrollIntoView) order.scrollIntoView({ behavior: 'smooth', block: 'start' })
  setTimeout(() => {
    const n = document.getElementById('f-name')
    if (n && n.focus) { try { n.focus({ preventScroll: true }) } catch (e) { n.focus() } }
  }, 600)
  if (order) {
    order.classList.add('order--flash')
    setTimeout(() => order.classList.remove('order--flash'), 1400)
  }
}
window.preselectService = preselectService

/* ---------- плашка «обсудить заказ» на мобильном ---------- */
function initStickyCta() {
  const bar = document.getElementById('sticky-cta')
  if (!bar) return
  const order = document.getElementById('order')
  let orderVisible = false
  if (order && 'IntersectionObserver' in window) {
    new IntersectionObserver(es => {
      orderVisible = es.some(e => e.isIntersecting)
      toggle()
    }, { threshold: 0.08 }).observe(order)
  }
  const hero = document.getElementById('hero')
  let past = false
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(es => { past = !es[0].isIntersecting; toggle() }, { threshold: 0.15 }).observe(hero)
  }
  function toggle() {
    const on = past && !orderVisible
    bar.classList.toggle('sticky-cta--on', on)
  }
  const btn = document.getElementById('sticky-cta-btn')
  if (btn) btn.addEventListener('click', () => window.ksuTrack && window.ksuTrack('sticky_cta_click'))
}

/* ================= ФОРМА ЗАЯВКИ ================= */
const orderForm = (function () {
  const form = document.getElementById('order-form')
  if (!form) return { refresh() {}, state() { return {} } }

  const F = {
    name: document.getElementById('f-name'),
    contact: document.getElementById('f-contact'),
    service: document.getElementById('f-service'),
    message: document.getElementById('f-message'),
    refs: document.getElementById('f-refs'),
    consent: document.getElementById('f-consent')
  }
  const send = document.getElementById('order-send')
  const copy = document.getElementById('order-copy')
  const done = document.getElementById('order-done')
  const edit = document.getElementById('order-edit')
  const est = document.getElementById('estimate')
  const estVal = document.getElementById('estimate-value')
  const hint = document.getElementById('f-service-hint')

  const DRAFT = (CFG && CFG.form.draftKey) || 'ksu.order.draft'
  const LOG = (CFG && CFG.form.leadsLogKey) || 'ksu.leads.log'

  function val(k) { return F[k] ? (F[k].type === 'checkbox' ? F[k].checked : F[k].value.trim()) : '' }
  function radio(name) {
    const el = form.querySelector(`input[name="${name}"]:checked`)
    return el ? el.value : ''
  }

  function data() {
    const svc = CFG ? CFG.services.filter(s => s.slug === val('service'))[0] : null
    const dl = CFG ? CFG.deadlines.filter(d => d.id === radio('deadline'))[0] : null
    return {
      name: val('name'),
      contact: val('contact'),
      service: val('service'),
      serviceName: svc ? R.L(lang, svc.titleRu, svc.titleEn) : '',
      budget: radio('budget'),
      deadline: radio('deadline'),
      rush: !!(dl && dl.rush),
      message: val('message'),
      refs: val('refs'),
      consent: F.consent ? !!F.consent.checked : false,
      utm: window.ksuUtm ? window.ksuUtm() : '',
      ts: new Date().toISOString()
    }
  }

  const REQUIRED = [
    ['name', v => v.length >= 2],
    ['contact', v => v.length >= 3],
    ['service', v => !!v],
    ['message', v => v.length >= 15],
    ['consent', (v, all) => all.consent === true]
  ]

  function errors() {
    const d = data()
    return REQUIRED.filter(([k, test]) => !test(String(d[k] || ''), d)).map(([k]) => k)
  }

  function paintErrors(show) {
    REQUIRED.forEach(([k, test]) => {
      const d = data()
      const ok = test(String(d[k] || ''), d)
      const wrap = F[k] ? F[k].closest('.field, .consent') : null
      if (wrap) wrap.classList.toggle('field--invalid', show && !ok)
    })
  }

  function briefText() {
    const d = data()
    d.sourceLabel = ''
    return R.briefMessage(d, lang, CFG)
  }

  function refresh() {
    if (!CFG) return
    const svc = CFG.services.filter(s => s.slug === val('service'))[0]
    const dl = CFG.deadlines.filter(d => d.id === radio('deadline'))[0]
    const rush = !!(dl && dl.rush)

    // смета
    if (est) {
      if (svc) {
        est.hidden = false
        estVal.textContent = R.priceRange(svc, CFG, rush ? CFG.pricing.rushMultiplier : 1) +
          (rush ? ' · ' + i18n[lang]['form.rushNote'] : '')
      } else {
        est.hidden = true
      }
    }
    // подсказка под списком услуг
    if (hint) {
      hint.textContent = svc
        ? (lang === 'ru' ? 'Срок ' + svc.durationRu + '. ' : 'Turnaround ' + svc.durationEn + '. ') +
          svc.includesRu.length + (lang === 'ru' ? ' пунктов входит в работу' : ' items included')
        : i18n[lang]['form.pickService']
    }
    // ссылка на отправку — всегда живая, даже без валидации
    if (send) send.setAttribute('href', waLink(briefText()))

    // прогресс
    const errs = errors()
    const d = data()
    const filled = ['name', 'contact', 'service', 'budget', 'deadline', 'message', 'refs']
      .filter(k => String(d[k] || '').length > 0).length
    const bar = document.getElementById('order-progress')
    if (bar) {
      bar.querySelector('.op__num').textContent = String(filled)
      bar.querySelector('.op__total').textContent = String(7)
      bar.querySelector('.op__label').textContent = i18n[lang]['form.filled']
      bar.querySelector('.op__track > i').style.width = Math.round((filled / 7) * 100) + '%'
      bar.classList.toggle('op--ready', errs.length === 0)
    }
    paintErrors(form.dataset.checked === '1')
    if (done && !done.hidden) done.dataset.text = briefText()
  }

  function saveDraft() {
    try {
      const d = data()
      d._lang = lang
      localStorage.setItem(DRAFT, JSON.stringify(d))
    } catch (e) {}
  }

  function restoreDraft() {
    let raw
    try { raw = localStorage.getItem(DRAFT) } catch (e) { return }
    if (!raw) return
    let d
    try { d = JSON.parse(raw) } catch (e) { return }
    if (!d || (d.name === '' && d.message === '')) return
    Object.keys(F).forEach(k => {
      if (F[k] && d[k] != null) {
        if (F[k].type === 'checkbox') F[k].checked = !!d[k]
        else F[k].value = d[k]
      }
    })
    if (d.budget) { const el = form.querySelector(`input[name="budget"][value="${d.budget}"]`); if (el) el.checked = true }
    if (d.deadline) { const el = form.querySelector(`input[name="deadline"][value="${d.deadline}"]`); if (el) el.checked = true }
    const note = document.getElementById('draft-note')
    if (note) {
      note.hidden = false
      note.querySelector('span').textContent = i18n[lang]['draft.restored']
      note.querySelector('button').textContent = i18n[lang]['draft.clear']
    }
  }

  function logLead() {
    try {
      const d = data()
      const raw = localStorage.getItem(LOG)
      const arr = raw ? JSON.parse(raw) : []
      arr.unshift(d)
      localStorage.setItem(LOG, JSON.stringify(arr.slice(0, (CFG && CFG.form.maxLeadsStored) || 20)))
    } catch (e) {}
  }

  async function sendEndpoint() {
    const ep = CFG && CFG.form.endpoint
    if (!ep) return 'skip'
    try {
      const res = await fetch(ep, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.assign({ message: briefText() }, data()))
      })
      return res.ok ? 'ok' : 'fail'
    } catch (e) { return 'fail' }
  }

  function submit(e) {
    if (e) e.preventDefault()
    form.dataset.checked = '1'
    const errs = errors()
    paintErrors(true)
    if (errs.length) {
      const first = F[errs[0]]
      if (first) first.focus()
      toast(i18n[lang]['form.fixErrors'])
      refresh()
      return
    }
    // honeypot
    if (form.hp && form.hp.value) return
    window.ksuTrack && window.ksuTrack('order_submit', { service: val('service'), budget: radio('budget') })
    logLead()
    saveDraft()
    sendEndpoint()
    if (send) {
      send.setAttribute('href', waLink(briefText()))
      send.removeAttribute('target')
      window.open(send.getAttribute('href'), '_blank', 'noopener')
    }
    if (done) {
      done.hidden = false
      form.classList.add('order__form--sent')
      if (done.scrollIntoView) done.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    window.ksuTrack && window.ksuTrack('order_sent', { service: val('service') })
  }

  async function copyBrief() {
    const text = briefText()
    try {
      await navigator.clipboard.writeText(text)
      toast(i18n[lang]['toast.copied'])
    } catch (err) {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy'); toast(i18n[lang]['toast.copied']) }
      catch (e2) { toast(i18n[lang]['toast.copyFail']) }
      document.body.removeChild(ta)
    }
    window.ksuTrack && window.ksuTrack('copy_brief')
  }

  let toastTimer
  function toast(msg) {
    let t = document.getElementById('ksu-toast')
    if (!t) {
      t = document.createElement('div')
      t.id = 'ksu-toast'
      t.className = 'toast'
      document.body.appendChild(t)
    }
    t.textContent = msg
    t.classList.add('toast--on')
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => t.classList.remove('toast--on'), 2600)
  }

  form.addEventListener('submit', submit)

  // Клик по главной кнопке: ссылка живая и обновляется на каждом вводе,
  // поэтому при валидных данных не мешаем браузеру открыть WhatsApp сам.
  if (send) send.addEventListener('click', (e) => {
    form.dataset.checked = '1'
    const errs = errors()
    paintErrors(true)
    if (errs.length) {
      e.preventDefault()
      const first = F[errs[0]]
      if (first) first.focus()
      toast(i18n[lang]['form.fixErrors'])
      refresh()
      return
    }
    if (form.hp && form.hp.value) { e.preventDefault(); return }
    logLead()
    saveDraft()
    sendEndpoint()
    window.ksuTrack && window.ksuTrack('order_submit', { service: val('service'), budget: radio('budget'), via: 'link' })
    setTimeout(() => {
      if (done) { done.hidden = false; form.classList.add('order__form--sent') }
      window.ksuTrack && window.ksuTrack('order_sent', { service: val('service') })
    }, 120)
  })
  if (copy) copy.addEventListener('click', copyBrief)
  if (edit) edit.addEventListener('click', () => {
    if (done) done.hidden = true
    form.classList.remove('order__form--sent')
    if (F.name) F.name.focus()
  })

  form.addEventListener('input', () => { saveDraft(); refresh() })
  form.addEventListener('change', () => { saveDraft(); refresh() })
  form.addEventListener('focusout', () => paintErrors(true))

  const clear = document.querySelector('#draft-note button')
  if (clear) clear.addEventListener('click', () => {
    try { localStorage.removeItem(DRAFT) } catch (e) {}
    form.reset()
    document.getElementById('draft-note').hidden = true
    refresh()
  })

  restoreDraft()
  refresh()

  // автозаполнение из карточки услуги через ?svc=slug
  try {
    const q = new URLSearchParams(location.search).get('svc')
    if (q && CFG && CFG.services.some(s => s.slug === q)) {
      F.service.value = q
      refresh()
    }
  } catch (e) {}

  return { refresh, data, briefText, submit, toast, state: () => ({ errors: errors().length }) }
})()
window.orderForm = orderForm

/* ---------- инициализация ---------- */
renderConfigSections()
orderForm.refresh()
initStickyCta()
