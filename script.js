function closeMobileMenu() {
  document.getElementById('menu-toggle').checked = false
}

const SITE_URL = 'https://bestdeejay-design.github.io/ksu'

// I18N
const i18n = {
  en: {
    'nav.logo': 'Ksenia',
    'nav.about': 'About',
    'nav.works': 'Works',
    'nav.inspiration': 'Inspiration',
    'nav.contact': 'Contact',
    'nav.langBtn': 'RU',
    'nav.startProject': 'Start Your Project',
    'nav.allProjects': 'All Projects',
    'hero.marquee': 'PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO • PORTFOLIO •',
    'hero.name': 'Ksenia',
    'hero.subtitle': 'graphic<br/>designer',
    'hero.scroll': 'Scroll',
    'about.label': 'About',
    'about.p1': "Hi! I'm Ksenia, an illustrator and artist. I'm in love with the living line, texture, and the mood that comes alive in every drawing. I create illustrations for books, merch, packaging, and any medium that needs an author's touch.",
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
    'refs.label': 'Inspiration',
    'refs.subtitle': 'Explore thousands of projects across all design disciplines',
    'refs.specialTitle': 'Specialized Resources',
    'refs.specialDesc': 'Editorial picks, awards, and focused inspiration',
    'refs.boardsTitle': 'Moodboards & References',
    'refs.boardsDesc': 'Services for collecting ideas and visual search',
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
    'cta.telegram': 'Write on Telegram',
    'cta.whatsapp': 'Write on WhatsApp',
    'cta.brief': 'Brief Template',
    'cta.briefText': 'What type of project? (branding, poster, illustration, packaging, etc.)\nWhat are the deadlines?\nReference links or examples\nBudget range\nShort description of the task'
  },
  ru: {
    'nav.logo': 'Ксения',
    'nav.about': 'Обо мне',
    'nav.works': 'Работы',
    'nav.inspiration': 'Референсы',
    'nav.contact': 'Контакты',
    'nav.langBtn': 'EN',
    'nav.startProject': 'Начать проект',
    'nav.allProjects': 'Все проекты',
    'hero.marquee': 'ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО • ПОРТФОЛИО •',
    'hero.name': 'Ксения',
    'hero.subtitle': 'графический<br/>дизайнер',
    'hero.scroll': 'Скролл',
    'about.label': 'Обо мне',
    'about.p1': 'Привет! Я Ксения — иллюстратор и художник. Я влюблена в живую линию, фактуру и настроение, которое оживает в каждом рисунке. Создаю иллюстрации для книг, мерча, упаковки и любых носителей, где нужен авторский почерк.',
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
    'refs.label': 'Референсы',
    'refs.subtitle': 'Тысячи проектов по всем направлениям дизайна',
    'refs.specialTitle': 'Специализированные ресурсы',
    'refs.specialDesc': 'Редакционные подборки, премии и вдохновение',
    'refs.boardsTitle': 'Референсы и мудборды',
    'refs.boardsDesc': 'Сервисы для сбора идей и визуального поиска',
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
    'cta.telegram': 'Написать в Telegram',
    'cta.whatsapp': 'Написать в WhatsApp',
    'cta.brief': 'Шаблон брифа',
    'cta.briefText': 'Тип проекта? (брендинг, плакат, иллюстрация, упаковка и т.д.)\nКакие сроки?\nСсылки на референсы\nБюджет\nКраткое описание задачи'
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
  const refGrid = document.getElementById('references-grid')
  refGrid.innerHTML = ''
  buildReferences()

  document.getElementById('ref-special').innerHTML = ''
  document.getElementById('ref-boards').innerHTML = ''
  buildResourceSection('ref-special', specialResources)
  buildResourceSection('ref-boards', boardResources)

  const worksGrid = document.getElementById('works-grid')
  worksGrid.innerHTML = ''
  buildWorks()

  buildNavProjects()
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
    el.innerHTML = `<div class="ref-mini__inner" style="border-color:${r.color}55"><div class="ref-mini__name">${name}</div><div class="ref-mini__desc">${desc}</div></div>`
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
let scrollPosition = 0
let currentProject = -1

function updateOG(index) {
  const p = projects[index]
  if (!p) return
  const title = lang === 'ru' ? p.titleRu : p.titleEn
  const cat = lang === 'ru' ? p.categoryRu : p.categoryEn
  const desc = i18n[lang][`proj.${index}.desc`] || `${cat} — ${title}`
  const img = `${SITE_URL}/og-${index}.jpg`

  document.querySelector('meta[property="og:title"]')?.setAttribute('content', `Ksenia — ${title}`)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', desc)
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${SITE_URL}/project-${index}/`)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}/project-${index}/`)
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', img)
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', `Ksenia — ${title}`)
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', desc)
  document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', img)
  document.querySelector('title').textContent = `Ksenia — ${title}`
  document.querySelector('meta[name="description"]')?.setAttribute('content', desc)
}

const DEFAULT_DESC = 'Portfolio of Ksenia — graphic designer. Identity, branding, typography, UI/UX, illustration, posters.'

function resetOG() {
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Ksenia — graphic designer')
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', DEFAULT_DESC)
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${SITE_URL}/`)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}/`)
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', `${SITE_URL}/og-image.png`)
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', 'Ksenia — graphic designer')
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', DEFAULT_DESC)
  document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', `${SITE_URL}/og-image.png`)
  document.querySelector('title').textContent = 'Ksenia — graphic designer'
  document.querySelector('meta[name="description"]')?.setAttribute('content', DEFAULT_DESC)
}

function shareProject(index) {
  const p = projects[index]
  const title = lang === 'ru' ? p.titleRu : p.titleEn
  const url = `${SITE_URL}/project-${index}/`
  if (navigator.share) {
    navigator.share({ title: `Ksenia — ${title}`, url }).catch(() => {})
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
        <a href="mailto:ksu@ya.ru?subject=Project%20Brief" class="cta-contact__btn" target="_blank">${_('cta.email')}</a>
        <a href="https://t.me/+79811281636" class="cta-contact__btn" target="_blank" rel="noopener">${_('cta.telegram')}</a>
        <a href="https://wa.me/79811281636" class="cta-contact__btn" target="_blank" rel="noopener">${_('cta.whatsapp')}</a>
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
        `<div class="proj-section" style="text-align:center"><a class="proj-pdf-link" href="portfolio/photobook/photobook-final.pdf" download target="_blank" rel="noopener">${lang === 'ru' ? 'Скачать фотокнигу (PDF)' : 'Download photobook (PDF)'}</a></div>` +
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
  return c + `<div class="proj-section proj-section--share"><div class="proj-section__title">${shareTitle}</div><button class="proj-share-btn" onclick="shareProject(${index})">${shareLabel}</button></div>`
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
  lbImg.src = lbImages[lbIndex]
  lbImg.alt = ''
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
