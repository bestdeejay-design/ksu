function closeMobileMenu() {
  document.getElementById('menu-toggle').checked = false
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileMenu()
})

let SITE_URL = 'https://dajet.ru'   // переопределяется из js/config.js

// I18N
const i18n = {
  en: {
    'nav.logo': 'Ksenia',
    'nav.services': 'Services',
    'nav.faq': 'FAQ',
    'nav.orderBtn': 'Start a project',
    'hero.offer': 'Logo, packaging, posters and websites for small businesses — with hand-drawn illustration, not stock. From 3,500 ₽, first concepts in 3 days.',
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
    'hero.marquee': 'LOGO • PACKAGING • POSTER • WEBSITE • ILLUSTRATION • CHARACTER • LOGO • PACKAGING • POSTER • WEBSITE • ILLUSTRATION • CHARACTER • LOGO • PACKAGING • POSTER • WEBSITE • ILLUSTRATION • CHARACTER • LOGO • PACKAGING • POSTER • WEBSITE • ILLUSTRATION • CHARACTER •',
    'hero.name': 'Ksenia',
    'hero.subtitle': 'graphic<br/>designer',
    'hero.scroll': 'Scroll',
    'about.label': 'About',
    'about.p1': 'Hi! I’m Ksenia, a graphic designer and illustrator from Saint Petersburg. I design logos, packaging, posters and websites for small brands — and I draw: portraits, characters, stickers.',
    'about.p2': 'My strength is hand-drawn graphics inside a brand: it makes packaging and posters recognisable at first glance. I work from a brief, show 2–3 directions and deliver files ready for print or development.',
    'about.tag1': 'Illustration',
    'about.tag2': 'Graphic Design',
    'about.tag3': 'Poster',
    'about.tag4': 'Identity',
    'about.tag5': 'Branding',
    'about.tag6': 'Photography',
    'about.tag7': 'Graphics',
    'works.label': 'Work',
    'why.label': 'Why me',
    'why.lead': 'Not just “a picture” but design that helps you sell — all in one pair of hands.',
    'why.1.t': 'Hand-drawn, never stock',
    'why.1.d': 'Characters, portraits and packaging illustrations are drawn by hand. Your brand won’t look like everyone else’s.',
    'why.2.t': 'From logo to website',
    'why.2.d': 'Mark, packaging, poster, social media and website — one style, one person. No need to assemble a team and repeat the brief five times.',
    'why.3.t': 'Briefs from real clients',
    'why.3.d': 'Websites for the PAFFO atelier, the SS-BMW car service and the Runskaya farm are live right now, and the “Waffle Symphony” brand was designed to a real client’s brief.',
    'why.4.t': 'Price and timing upfront',
    'why.4.d': '“From” prices on the site, an exact quote on brief day, 2 revision rounds and source files included. No surprises at the end.',

    'works.count': 'projects',
    'contact.label': 'Contact',
    'contact.text': 'Taking commissions and collaborations.<br/>Write to me — I’ll name the price and the deadline.',
    'footer.copy': '© 2026 Ksenia',
    'footer.tagline': 'Graphic design & illustration',
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
    'hero.offer': 'Логотип, упаковка, афиша и сайт для малого бизнеса — с собственной иллюстрацией, а не стоком. От 3 500 ₽, первые концепты — через 3 дня.',
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
    'hero.marquee': 'ЛОГОТИП • УПАКОВКА • АФИША • САЙТ • ИЛЛЮСТРАЦИЯ • ПЕРСОНАЖ • ЛОГОТИП • УПАКОВКА • АФИША • САЙТ • ИЛЛЮСТРАЦИЯ • ПЕРСОНАЖ • ЛОГОТИП • УПАКОВКА • АФИША • САЙТ • ИЛЛЮСТРАЦИЯ • ПЕРСОНАЖ • ЛОГОТИП • УПАКОВКА • АФИША • САЙТ • ИЛЛЮСТРАЦИЯ • ПЕРСОНАЖ •',
    'hero.name': 'Ксения',
    'hero.subtitle': 'графический<br/>дизайнер',
    'hero.scroll': 'Скролл',
    'about.label': 'Обо мне',
    'about.p1': 'Привет! Я Ксения — графический дизайнер и иллюстратор из Санкт-Петербурга. Делаю логотипы, упаковку, афиши и сайты для небольших брендов, а ещё рисую — портреты, персонажей, стикеры.',
    'about.p2': 'Моя сильная сторона — живая рисованная графика внутри бренда: она делает упаковку и афишу узнаваемыми с первого взгляда. Работаю по брифу, показываю 2–3 направления и довожу до файлов, которые примет типография или разработчик.',
    'about.tag1': 'Иллюстрация',
    'about.tag2': 'Графический дизайн',
    'about.tag3': 'Плакат',
    'about.tag4': 'Айдентика',
    'about.tag5': 'Брендинг',
    'about.tag6': 'Фотография',
    'about.tag7': 'Графика',
    'works.label': 'Работы',
    'why.label': 'Почему ко мне',
    'why.lead': 'Вы получаете не «картинку», а оформление, которое работает на продажи — и всё в одних руках.',
    'why.1.t': 'Рисую сама — без стоков',
    'why.1.d': 'Персонажи, портреты, иллюстрации для упаковки — нарисованы вручную. У вашего бренда не будет «картинки как у всех».',
    'why.2.t': 'От логотипа до сайта',
    'why.2.d': 'Знак, упаковка, афиша, соцсети и сайт — в одном стиле и у одного человека. Не нужно собирать команду и объяснять задачу пять раз.',
    'why.3.t': 'Задачи реальных заказчиков',
    'why.3.d': 'Сайты ателье PAFFO, автосервиса SS-BMW и фермы «Рунская» работают прямо сейчас, а бренд «Вафельная симфония» сделан по брифу настоящего заказчика.',
    'why.4.t': 'Цена и сроки — заранее',
    'why.4.d': 'Цены «от» на сайте, точная смета в день брифа, 2 круга правок и исходники уже включены. Без сюрпризов в конце.',

    'works.count': 'работ',
    'contact.label': 'Контакты',
    'contact.text': 'Открыта к заказам и сотрудничеству.<br/>Напишите — обсудим задачу, я скажу цену и срок.',
    'footer.copy': '© 2026 Ксения',
    'footer.tagline': 'Графический дизайн и иллюстрация',
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
  if (window.ksuReveal) window.ksuReveal()
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
  { titleEn: '“Waffle Symphony” — brand & packaging', titleRu: '«Вафельная симфония» — бренд и упаковка', categoryEn: 'Brand & packaging', categoryRu: 'Бренд и упаковка', cover: 'portfolio/packaging/mockup.jpg', colors: ['#FF2D55', '#1A1A1A'], pdfs: ['portfolio/packaging/booklet-final.pdf', 'portfolio/packaging/concept-development.pdf'] },
  { titleEn: '“Cat Day” festival — poster & identity', titleRu: 'Фестиваль «День котов и кошек» — афиша и знак', categoryEn: 'Event identity', categoryRu: 'Афиша и айдентика', cover: 'portfolio/poster-cat-day/poster-final.jpg', colors: ['#00E5FF', '#FF2D55'] },
  { titleEn: '“Sweet Cat” — game art', titleRu: 'Игра «Sweet Cat» — графика и персонаж', categoryEn: 'Game art', categoryRu: 'Графика для игры', cover: 'portfolio/game/menu.jpg', colors: ['#FFD633', '#FF2D55'] },
  { titleEn: 'Portraits to order', titleRu: 'Портреты на заказ', categoryEn: 'Illustration', categoryRu: 'Иллюстрация', cover: 'portfolio/digital-drawing/procreate/portraits/portrait-mia-goth.jpg', colors: ['#9B59B6', '#FF6B9D'] },
  { titleEn: 'Popular Blondes', titleRu: 'Популярные блондинки', categoryEn: 'Illustration', categoryRu: 'Иллюстрация', cover: 'portfolio/digital-drawing/popular-blondes/postcard-margot.jpg', colors: ['#FFD633', '#FF2D55'] },
  { titleEn: 'Characters & comics', titleRu: 'Персонажи и комикс', categoryEn: 'Character', categoryRu: 'Персонаж', cover: 'portfolio/digital-drawing/character-comic/comic-var-1.jpg', colors: ['#E74C3C', '#FF6B9D'] },
  { titleEn: 'Kiwi-cat — sticker character', titleRu: 'Котик Киви — персонаж для стикеров', categoryEn: 'Character', categoryRu: 'Персонаж', cover: 'portfolio/stickers/kiwi-cat.jpg', colors: ['#FF6B9D', '#FF2D55'] },
  { titleEn: 'Wall Art', titleRu: 'Арт под роспись стены', categoryEn: 'Illustration', categoryRu: 'Иллюстрация', cover: 'portfolio/digital-drawing/wall-art-1.jpg', colors: ['#2ECC71', '#00E5FF'] },
  { titleEn: 'Photobook "3:00"', titleRu: 'Фотокнига «3:00»', categoryEn: 'Editorial', categoryRu: 'Издание', cover: 'portfolio/photobook/preview.jpg', colors: ['#E67E22', '#FFD633'] },
  { titleEn: 'Photo Retouching', titleRu: 'Ретушь фото', categoryEn: 'Photography', categoryRu: 'Фотография', cover: 'portfolio/retouch/retouch-timeline.jpg', colors: ['#1ABC9C', '#00E5FF'] },
  /* ---- Сайты: кейс собирается автоматически из поля site (см. renderSiteCase) ----
   * Чтобы добавить новый сайт — скопируйте блок ниже, положите скриншоты в portfolio/sites/<папка>/
   * и создайте превью og-<номер>.jpg (1200×630). Порядок в списке = номер проекта, не меняйте старые. */
  { titleEn: 'SS-BMW — BMW service', titleRu: 'SS-BMW — сервис BMW', categoryEn: 'Website & identity', categoryRu: 'Сайт и айдентика', cover: 'portfolio/sites/ss-bmw/cover.jpg', colors: ['#1E6BFF', '#0A0A0A'],
    descRu: 'Сайт специализированного сервиса BMW в Санкт-Петербурге. Задача — показать, что здесь работают только с BMW, и довести человека до записи: тёмная «гаражная» эстетика, фирменный синий BMW, крупные фото реальных работ, понятный путь «заявка → диагностика → согласование → выдача» и форма записи на каждом экране.',
    descEn: 'Website for a BMW-only service in Saint Petersburg. Goal: make the specialisation obvious and drive bookings — dark garage aesthetic, signature BMW blue, real workshop photos, a clear “request → diagnostics → approval → handover” path and a booking form always within reach.',
    site: { url: 'https://bestdeejay-design.github.io/SS-BMW-site/', dir: 'portfolio/sites/ss-bmw/', shots: ['ss-bmw-d0.jpg', 'ss-bmw-d1.jpg', 'ss-bmw-d3.jpg', 'ss-bmw-d4.jpg', 'ss-bmw-d5.jpg'], mobile: 'ss-bmw-m0.jpg', logos: ['logo.png'], logoBg: '#0b0d12',
      tagsRu: ['Лендинг', 'Логотип', 'UI/UX', 'Адаптив'], tagsEn: ['Landing page', 'Logo', 'UI/UX', 'Responsive'] } },
  { titleEn: 'Runskaya farm', titleRu: 'Ферма «Рунская»', categoryEn: 'Website & identity', categoryRu: 'Сайт и айдентика', cover: 'portfolio/sites/fermaruna/cover.jpg', colors: ['#1A3726', '#E8B04A'],
    descRu: 'Сайт натурального хозяйства в верховьях Волги: картофель, мёд, яйцо и птица. Знак — колос и волна Волги, тёплая «деревенская» палитра, классическая антиква в заголовках. Кроме витрины продукции — хроника фермы и журнал полезных статей, которые приводят покупателей из поиска.',
    descEn: 'Website for a natural farm at the source of the Volga: potatoes, honey, eggs and poultry. The mark combines an ear of grain and a Volga wave; warm rustic palette and classic serif headings. Besides the product showcase — a farm chronicle and an article journal that bring buyers from search.',
    site: { url: 'https://fermaruna.ru', mirror: 'https://bestdeejay-design.github.io/fermaruna/', dir: 'portfolio/sites/fermaruna/', shots: ['fermaruna-d0.jpg', 'fermaruna-d1.jpg', 'fermaruna-d3.jpg', 'fermaruna-d4.jpg', 'fermaruna-d5.jpg'], mobile: 'fermaruna-m0.jpg', logos: ['logo.png|#1a3726', 'logo-mark.svg'], logoBg: '#f6f1e3',
      tagsRu: ['Сайт', 'Логотип', 'Фирменный стиль', 'Контент'], tagsEn: ['Website', 'Logo', 'Brand identity', 'Content'] } },
  { titleEn: 'LOVII — local economy platform', titleRu: 'LOVII — платформа района', categoryEn: 'Logo & website', categoryRu: 'Логотип и сайт', cover: 'portfolio/sites/lovii/cover.jpg', colors: ['#E6337A', '#FFFFFF'],
    descRu: 'Логотип и сайт финтех-платформы, которая объединяет жителей района и местный бизнес. Знак и шрифтовой логотип «ЛОВИ», розовая фирменная палитра, карта лояльности LOVII PAY и отдельные страницы для каждой роли: покупатели, бизнес, партнёры, инвесторы.',
    descEn: 'Logo and website for a fintech platform connecting residents with local businesses. Mark and wordmark, signature pink palette, the LOVII PAY loyalty card and dedicated pages for each role: customers, businesses, partners, investors.',
    site: { url: 'https://lovii.ru', dir: 'portfolio/sites/lovii/', shots: ['lovii-d0.jpg', 'lovii-d1.jpg', 'lovii-d2.jpg', 'lovii-d3.jpg', 'lovii-d5.jpg'], mobile: 'lovii-m0.jpg', logos: ['logo-light.svg', 'logo-dark.svg|#16161a'], logoBg: '#ffffff',
      tagsRu: ['Логотип', 'Фирменный стиль', 'Сайт', 'Финтех'], tagsEn: ['Logo', 'Brand identity', 'Website', 'Fintech'] } },
  { titleEn: 'PAFFO — coat atelier', titleRu: 'PAFFO — ателье пальто', categoryEn: 'Website & design system', categoryRu: 'Сайт и дизайн-система', cover: 'portfolio/sites/paffo/cover.jpg', colors: ['#141311', '#B4863F'],
    descRu: 'Сайт ателье, которое шьёт пальто по меркам из итальянской шерсти, кашемира и кожи. Задача — передать ощущение дорогой вещи и привести клиента на примерку: тёмная «чернильная» палитра с латунью, классическая антиква Cormorant Garamond, коллекции, лукбук, процесс «от заявки до пальто за 21 день» и запись на примерку. Под сайт собрана дизайн-система: цвета, шрифты, отступы, компоненты и две темы — тёмная и светлая.',
    descEn: 'Website for an atelier that tailors made-to-measure coats from Italian wool, cashmere and leather. Goal: convey the feel of a premium garment and bring the client to a fitting — ink palette with brass, classic Cormorant Garamond serif, collections, lookbook, the “request to coat in 21 days” process and fitting booking. Built on a design system: colours, type, spacing, components and two themes, dark and light.',
    site: { url: 'https://paffo.ru/', dir: 'portfolio/sites/paffo/', shots: ['paffo-d-top.jpg', 'paffo-d-light.jpg', 'paffo-d-collections.jpg', 'paffo-d-lookbook.jpg', 'paffo-d-atelier.jpg', 'paffo-d-reviews.jpg'], mobile: 'paffo-m0.jpg', logos: ['logo-dark.jpg', 'logo-light.jpg'], logoFull: true, system: 'design-system.jpg',
      roleRu: 'Дизайн сайта, логотип и дизайн-система', roleEn: 'Website design, logo and design system',
      tagsRu: ['Сайт', 'Дизайн-система', 'Логотип', 'Тёмная и светлая темы'], tagsEn: ['Website', 'Design system', 'Logo', 'Dark & light themes'] } },
]

/* ПОРЯДОК В СЕТКЕ «РАБОТЫ» — номера из массива projects (0 = первый объект).
 * Сначала — коммерческие кейсы с реальным заказчиком, затем иллюстрация.
 * Проекты, которых нет в списке, скрыты из сетки, но открываются по прямой ссылке #project-N.
 * Скрыты сейчас: 0 мудборды (коллажи из чужих фото), 5 «Popular Blondes» (фан-арт со знаменитостями),
 * 10 ретушь (одна картинка — слабее остальных). Вернуть — просто добавить номер в список. */
const WORKS_ORDER = [14, 1, 11, 2, 12, 4, 13, 7, 6, 8, 3, 9]

function buildWorks() {
  const grid = document.getElementById('works-grid')
  WORKS_ORDER.forEach((i, pos) => {
    const p = projects[i]
    const card = document.createElement('div')
    card.className = `work-card wc-${i + 1}`
    const cat = lang === 'ru' ? p.categoryRu : p.categoryEn
    const title = lang === 'ru' ? (p.titleRu || p.titleEn) : p.titleEn
    const num = String(pos + 1).padStart(2, '0')
    let visual = ''
    if (p.cover) {
      visual = `<div class="wv"><img src="${p.cover}" alt="${title}" loading="lazy" style="width:100%;height:100%;object-fit:cover${p.site ? ';object-position:top' : ''}" onerror="this.parentElement.style.background='var(--card-bg)'"/></div>`
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
  cta.addEventListener('click', () => { const a = document.createElement('a'); a.href = '#order'; document.body.appendChild(a); a.click(); a.remove() })
  grid.appendChild(cta)

  document.getElementById('works-count').textContent = WORKS_ORDER.length
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
  const desc = i18n[lang][`proj.${index}.desc`] || (lang === 'ru' ? p.descRu : p.descEn) || `${cat} — ${title}`
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
  overlay.scrollTop = 0
  pauseBackground(true)
  updateOG(index)
  history.replaceState(null, '', `#project-${index}`)
}

function closeProject() {
  overlay.classList.remove('overlay--open')
  document.body.style.overflow = ''
  document.body.classList.remove('overlay-active')
  pauseBackground(false)
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
  overlay.scrollTop = 0
  pauseBackground(true)
}

// Кейс сайта: данные из projects[i].site — ничего верстать руками не нужно
function renderSiteCase(p, index) {
  const ru = lang === 'ru'
  const S = p.site
  const t = ru ? p.titleRu : p.titleEn
  const src = f => S.dir + f
  const host = u => u.replace(/^https?:\/\//, '').replace(/\/$/, '')
  const sec = (title, html) => `<div class="proj-section"><div class="proj-section__title">${title}</div>${html}</div>`
  const tags = (ru ? S.tagsRu : S.tagsEn) || []
  const shots = S.shots.map(f => `<figure class="site-shot" onclick="openLightbox('${src(f)}',${index})"><div class="site-shot__bar"><i></i><i></i><i></i><span>${host(S.url)}</span></div><img src="${src(f)}" alt="${t}" loading="lazy"/></figure>`).join('')
  // формат: 'файл' или 'файл|#фон'
  const logos = (S.logos || []).map(x => x.split('|')).map(([f, bg]) => `<div class="site-logo${S.logoFull ? ' site-logo--full' : ''}" style="background:${bg || S.logoBg || '#fff'}"><img src="${src(f)}" alt="${t} — логотип" loading="lazy"/></div>`).join('')
  const links = `<div class="site-links">
      <a class="btn btn--accent" href="${S.url}" target="_blank" rel="noopener">${ru ? 'Открыть сайт' : 'Open website'} ↗</a>
      ${S.mirror ? `<a class="btn btn--ghost" href="${S.mirror}" target="_blank" rel="noopener">${ru ? 'Зеркало' : 'Mirror'} ↗</a>` : ''}
    </div>`
  return `
    <div class="proj-hero"><div class="proj-hero__label">${ru ? p.categoryRu : p.categoryEn}</div>
      <div style="font-size:clamp(24px,4vw,48px);font-weight:900;font-family:'Unbounded',sans-serif;margin:12px 0">${t}</div></div>
    <div class="proj-desc">${ru ? p.descRu : p.descEn}</div>
    <div class="site-meta">
      <div><span>${ru ? 'Роль Ксении' : 'Ksenia’s role'}</span>${ru ? (S.roleRu || 'Дизайн сайта, логотип и фирменный стиль') : (S.roleEn || 'Website design, logo and identity')}</div>
      <div><span>${ru ? 'Разработка' : 'Development'}</span>${ru ? 'В паре с разработчиком' : 'With a developer partner'}</div>
      <div><span>${ru ? 'Что сделано' : 'Scope'}</span>${tags.join(' · ')}</div>
    </div>
    ${links}
    ${logos ? sec(ru ? 'Логотип' : 'Logo', `<div class="site-logos">${logos}</div>`) : ''}
    ${S.system ? sec(ru ? 'Дизайн-система' : 'Design system', `<figure class="site-system" onclick="openLightbox('${src(S.system)}',${index})"><img src="${src(S.system)}" alt="${t} — дизайн-система" loading="lazy"/></figure>`) : ''}
    ${sec(ru ? 'Экраны сайта' : 'Website screens', `<div class="site-shots">${shots}</div>`)}
    ${S.mobile ? sec(ru ? 'Мобильная версия' : 'Mobile version', `<div class="site-mobile" onclick="openLightbox('${src(S.mobile)}',${index})"><img src="${src(S.mobile)}" alt="${t} — мобильная версия" loading="lazy"/></div>`) : ''}
    ${links}`
}

function getProjectHTML(index) {
  const _ = key => i18n[lang][key]
  const p = projects[index]
  const pTitle = lang === 'ru' ? p.titleRu : p.titleEn

  const section = (title, html) => `<div class="proj-section"><div class="proj-section__title">${title}</div>${html}</div>`
  const gall = (srcs, cols = 2) => `<div class="proj-gallery proj-gallery--${cols}">${srcs.map(s => `<div class="proj-gallery__item" onclick="openLightbox('${s}',${index})"><img src="${s}" alt="${pTitle}" loading="lazy"/></div>`).join('')}</div>`
  const hero = `<div class="proj-hero"><div class="proj-hero__label">${lang === 'ru' ? p.categoryRu : p.categoryEn}</div><div style="font-size:clamp(24px,4vw,48px);font-weight:900;font-family:'Unbounded',sans-serif;margin:12px 0">${lang === 'ru' ? p.titleRu : p.titleEn}</div></div>`
  const desc = index !== 0 ? `<div class="proj-desc">${_(`proj.${index}.desc`)}</div>` : ''

  if (p.site) return renderSiteCase(p, index)
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
  const imgs = content ? [...content.querySelectorAll('.proj-gallery__item img, .site-system img, .site-shot img, .site-mobile img')].map(i => i.src) : [src]
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
  lbImg.classList.add('lightbox__image--swap')
  const next = new Image()
  next.onload = next.onerror = () => {
    lbImg.src = next.src
    requestAnimationFrame(() => lbImg.classList.remove('lightbox__image--swap'))
  }
  next.src = lbImages[lbIndex]
  // соседние кадры грузим заранее — листание без пауз
  ;[1, -1].forEach(d => { const n = lbImages[(lbIndex + d + lbImages.length) % lbImages.length]; if (n) new Image().src = n })
  lbImg.alt = proj ? (lang === 'ru' ? proj.titleRu : proj.titleEn) : 'Portfolio image'
  lbCounter.textContent = `${lbIndex + 1} / ${lbImages.length}`
  lbPrev.style.display = lbImages.length > 1 ? '' : 'none'
  lbNext.style.display = lbImages.length > 1 ? '' : 'none'
}

function closeLightbox() {
  lb.classList.remove('lightbox--open')
  if (!overlay.classList.contains('overlay--open')) document.body.style.overflow = ''
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

document.getElementById('nav-dropdown-cta')?.addEventListener('click', () => {
  closeNavDropdown()   // переход к форме делает общий обработчик якорей
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
// Элемент проявляется один раз, затем класс снимается — у карточек снова
// работает их собственный быстрый hover без задержек и тяжёлой .8s-анимации.
const reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches
const revealIO = ('IntersectionObserver' in window && !reduceMotion)
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target
        revealIO.unobserve(el)
        el.classList.add('visible')
        const done = () => {
          el.classList.remove('reveal', 'visible')
          el.style.transitionDelay = ''
          el.removeEventListener('transitionend', done)
        }
        el.addEventListener('transitionend', done)
        setTimeout(done, 1400)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
  : null

function revealAll(selector) {
  if (!revealIO) return
  const groups = new Map()
  document.querySelectorAll(selector).forEach((el) => {
    if (el.dataset.revealed) return
    el.dataset.revealed = '1'
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0) return // уже на экране — не прячем
    const parent = el.parentElement
    const i = groups.get(parent) || 0
    groups.set(parent, i + 1)
    el.classList.add('reveal')
    el.style.transitionDelay = `${(i % 4) * 0.07}s`
    revealIO.observe(el)
  })
}
const REVEAL_SEL = '.about__content > *, .works__header, .work-card, .contact__left > *, .section__head, .svc, .proc__item, .faq__item, .order__intro, .order__form'
revealAll(REVEAL_SEL)
window.ksuReveal = () => revealAll(REVEAL_SEL)

// Декоративные анимации ставим на паузу, когда их не видно:
// за пределами экрана, во вкладке в фоне и под открытым проектом.
function pauseBackground(on) { document.documentElement.classList.toggle('anim-paused', !!on) }
if ('IntersectionObserver' in window) {
  const animIO = new IntersectionObserver((entries) => {
    entries.forEach(e => e.target.classList.toggle('is-offscreen', !e.isIntersecting))
  }, { rootMargin: '100px' })
  document.querySelectorAll('.hero, .about__visual, .contact__right').forEach(el => animIO.observe(el))
}
document.addEventListener('visibilitychange', () => {
  document.documentElement.classList.toggle('tab-hidden', document.hidden)
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
  const min = Math.min.apply(null, CFG.services.filter(s => !s.unitRu).map(s => s.priceFrom))
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
    document.body.classList.toggle('sticky-on', on && matchMedia('(max-width:768px)').matches)
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
    if (!d || !(d.name || d.contact || d.message || d.refs)) return
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
if (window.ksuReveal) window.ksuReveal()

/* свайп в лайтбоксе на телефоне */
;(function () {
  let x0 = null, y0 = null
  lb.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY }, { passive: true })
  lb.addEventListener('touchend', e => {
    if (x0 === null) return
    const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) lbNav(dx < 0 ? 1 : -1)
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) closeLightbox()
    x0 = y0 = null
  }, { passive: true })
})()

/* подсветка текущей секции в меню */
;(function () {
  if (!('IntersectionObserver' in window)) return
  const links = [...document.querySelectorAll('.nav__links a.nav__link[href^="#"]')]
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]))
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return
      links.forEach(a => a.classList.remove('is-active'))
      const a = map.get(e.target.id)
      if (a) a.classList.add('is-active')
    })
  }, { rootMargin: '-45% 0px -50% 0px' })
  map.forEach((a, id) => { const s = document.getElementById(id); if (s) io.observe(s) })
})()

/* Якоря: своя плавная прокрутка с доводкой.
   Если во время прокрутки что-то догрузилось и вёрстка сдвинулась,
   в конце позиция пересчитывается — заголовок всегда встаёт под меню. */
;(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  function targetY(el) {
    const m = parseFloat(getComputedStyle(el).scrollMarginTop) || 0
    return Math.max(0, Math.round(el.getBoundingClientRect().top + window.scrollY - m))
  }
  function go(el, smooth) {
    window.scrollTo({ top: targetY(el), behavior: smooth && !reduce ? 'smooth' : 'auto' })
    let done = false
    const fix = () => {
      if (done) return
      done = true
      const y = targetY(el)
      if (Math.abs(window.scrollY - y) > 2) window.scrollTo({ top: y, behavior: 'auto' })
    }
    if ('onscrollend' in window) window.addEventListener('scrollend', fix, { once: true })
    setTimeout(fix, 1400)
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]')
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return
    const id = a.getAttribute('href').slice(1)
    if (!id || id.startsWith('project-')) return
    const el = document.getElementById(id)
    if (!el || el.closest('.overlay')) return
    e.preventDefault()
    if (typeof closeMobileMenu === 'function') closeMobileMenu()
    go(el, true)
    history.replaceState(null, '', '#' + id)
  })
  // прямой заход по ссылке вида /#order
  window.addEventListener('load', () => {
    const id = location.hash.slice(1)
    const el = id && !id.startsWith('project-') && document.getElementById(id)
    if (el) setTimeout(() => go(el, false), 50)
  })
})()
