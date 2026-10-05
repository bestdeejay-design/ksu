/**
 * KSU — ЕДИНЫЙ ИСТОЧНИК ПРАВДЫ ДЛЯ САЙТА
 * ---------------------------------------------------------------
 * Здесь живут: контакты, услуги, цены, сроки, FAQ, отзывы.
 * Менять можно этот файл — и обновится всё: главная страница,
 * секции «Услуги / Цены / FAQ», форма заявки и SEO-лендинги
 * в папке order/.
 *
 * После правки выполните:  node tools/build.mjs
 * (он пересоберёт index.html, order/* и sitemap.xml)
 *
 * Числа ниже — РЫНОЧНЫЕ ОРИЕНТИРЫ. Ксения, обязательно пройдитесь
 * по списку и поставьте свои цены, сроки и условия.
 */
(function (root, factory) {
  var cfg = factory();
  root.KSU_CONFIG = cfg;
  if (typeof module !== 'undefined' && module.exports) module.exports = cfg;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  return {
    /* === АДРЕСА ================================================= */
    // Базовый адрес сайта. Нужен для canonical, OG-тегов и ссылок в мессенджерах.
    siteUrl: 'https://dajet.ru',

    brand: {
      nameRu: 'Ксения',
      nameEn: 'Ksenia',
      roleRu: 'графический дизайнер и иллюстратор',
      roleEn: 'graphic designer & illustrator'
    },

    /* === КУДА ПРИХОДЯТ ЗАЯВКИ ================================== */
    contacts: {
      // Только цифры, с кодом страны. На этот номер уходит бриф через wa.me.
      whatsapp: '79811281636',
      email: 'ksu@ya.ru',
      phone: '+7 981 128-16-36',
      phoneHref: '+79811281636',
      // Telegram: впишите юзернейм без @, когда он появится —
      // кнопка появится на сайте сама. Пустая строка = кнопки нет.
      telegram: ''
    },

    /* === ОБЯЗАТЕЛЬСТВА (то, что снимает страх «написать первым») === */
    promises: {
      responseRu: 'Отвечаю в течение дня, обычно за 1–2 часа',
      responseEn: 'I reply within a day, usually in 1–2 hours',
      startRu: 'Начать можем уже на этой неделе',
      startEn: 'We can start this week',
      editRu: '2 круга правок уже включены в цену',
      editEn: '2 rounds of revisions included',
      fileRu: 'Исходники и все форматы — ваши',
      fileEn: 'Source files in every format, yours to keep'
    },

    /* === ЦЕНЫ: ПРАВИЛА ========================================= */
    pricing: {
      currency: '₽',
      // Наценка за срочность, если клиент выбрал срок «нужно срочно».
      rushMultiplier: 1.5,
      // Диапазон «вилки»: к цене «от» прибавляется разброс сверху.
      estimateSpread: 0.6,
      prepaymentRu: 'Предоплата 50%',
      prepaymentEn: '50% prepayment',
      // Честная сноски под прайсом — цены стартовые, финал после брифа.
      noteRu: 'Цены стартовые: итог зависит от объёма и сроков, назову его после брифа — обычно в тот же день.',
      noteEn: 'Starting prices — the final quote depends on scope and deadline, usually the same day.',
      // Кнопка «рассчитать»: вилка показывается ещё до отправки брифа.
      calculatorLabelRu: 'Предварительная смета',
      calculatorLabelEn: 'Preliminary estimate'
    },

    /* === БЮДЖЕТЫ В ФОРМЕ ======================================= */
    budgets: [
      { id: 'until-10', ru: 'до 10 000 ₽', en: 'under 10 000 ₽' },
      { id: '10-30', ru: '10 000 – 30 000 ₽', en: '10 000 – 30 000 ₽' },
      { id: '30-70', ru: '30 000 – 70 000 ₽', en: '30 000 – 70 000 ₽' },
      { id: '70+', ru: 'от 70 000 ₽', en: '70 000 ₽ +' },
      { id: 'unknown', ru: 'пока не знаю', en: 'not sure yet' }
    ],

    /* === СРОКИ В ФОРМЕ ========================================= */
    deadlines: [
      { id: 'rush', ru: 'Нужно срочно', en: 'As soon as possible', rush: true },
      { id: 'week', ru: 'До недели', en: 'Within a week', rush: false },
      { id: 'month', ru: '1–3 недели', en: '1–3 weeks', rush: false },
      { id: 'flex', ru: 'Сроки гибкие', en: 'Flexible', rush: false }
    ],

    /* === УСЛУГИ ================================================
     * slug       — адрес лендинга: /order/<slug>/
     * priceFrom  — число в рублях, «от»
     * unit       — если цена за единицу (например, за снимок)
     * project    — номер проекта в портфолио (data index в script.js)
     *           → карточка услуги ссылается на живой пример работы
     * includes  — что человек получает (продаёт лучше, чем «виды работ»)
     * bestFor   — кому подходит, помогает клиенту узнать себя
     * faq        — id вопросов из faq[], показываются на лендинге услуги
     */
    services: [
      {
        slug: 'logo',
        titleRu: 'Логотип и знак',
        titleEn: 'Logo & mark',
        priceFrom: 15000,
        unitRu: '',
        unitEn: '',
        durationRu: '7–10 дней',
        durationEn: '7–10 days',
        category: 'Айдентика',
        cover: 'portfolio/packaging/logo-1.png',
        project: 1,
        shortRu: 'Логотип, который не стыдно поставить на визитку, упаковку и аватарку в Telegram. Не «картинка», а система.',
        shortEn: 'A logo that works on a business card, packaging and a Telegram avatar — a system, not just an image.',
        includesRu: ['2–3 концепта на выбор', 'Полный пакет форматов: SVG, PDF, PNG, с прозрачным фоном', 'Ч/б и инверсная версии', 'Мини-гайд: как пользоваться', 'Исходник'],
        includesEn: ['2–3 concepts to choose from', 'Full file pack: SVG, PDF, PNG with transparency', 'Black & white and inverted versions', 'Mini usage guide', 'Source file'],
        bestForRu: 'Новый бренд, переупаковка, локальный бизнес, ручной бренд',
        bestForEn: 'New brand, rebrand, local business, handmade brand',
        faq: ['rights', 'how-start', 'revisions']
      },
      {
        slug: 'identity',
        titleRu: 'Фирменный стиль',
        titleEn: 'Brand identity',
        priceFrom: 40000,
        unitRu: '',
        unitEn: '',
        durationRu: '2–4 недели',
        durationEn: '2–4 weeks',
        category: 'Айдентика',
        cover: 'portfolio/moodboards/concept-2.jpg',
        project: 0,
        shortRu: 'Логотип + цвета + шрифты + носители. Бренд, который узнаваем даже без логотипа.',
        shortEn: 'Logo, palette, type and real mockups — a brand recognised even without the logo.',
        includesRu: ['Логотип и знак', 'Цветовая палитра и типографика', 'Паттерн / графический элемент', 'Носители: визитки, упаковка, соцсети, вывеска', 'Гайд по использованию (PDF)', 'Макеты в Figma / AI'],
        includesEn: ['Logo and mark', 'Colour palette and typography', 'Pattern / graphic device', 'Mockups: cards, packaging, social, signage', 'Usage guide (PDF)', 'Figma / AI source files'],
        bestForRu: 'Заведение, косметика, магазин, сервис, всё, что растёт',
        bestForEn: 'Café, cosmetics, shop, service — anything that plans to grow',
        faq: ['how-start', 'source', 'timeline']
      },
      {
        slug: 'illustration',
        titleRu: 'Иллюстрация и портрет на заказ',
        titleEn: 'Custom illustration & portrait',
        priceFrom: 3500,
        unitRu: '',
        unitEn: '',
        durationRu: '3–5 дней',
        durationEn: '3–5 days',
        category: 'Иллюстрация',
        cover: 'portfolio/digital-drawing/procreate/portraits/portrait-ldr-1.jpg',
        project: 4,
        shortRu: 'Портрет, обложка, открытка, картинка на стену или на подарок. Рисую от руки на iPad, печатаю как есть.',
        shortEn: 'Portrait, cover, postcard or wall art — drawn by hand on iPad, print-ready.',
        includesRu: ['Скетч и композиция на согласование', 'Финальная иллюстрация в нужном размере', 'Версия под печать (300 dpi) и под экран', 'Правки по цвету и деталям'],
        includesEn: ['Sketch and composition for approval', 'Final artwork in the size you need', 'Print (300 dpi) and screen versions', 'Colour and detail revisions'],
        bestForRu: 'Подарок, семейный портрет, обложка, мерч, интерьер',
        bestForEn: 'Gift, family portrait, cover, merch, interior',
        faq: ['style', 'revisions', 'how-fast']
      },
      {
        slug: 'poster',
        titleRu: 'Плакат и пост для соцсетей',
        titleEn: 'Poster & social artwork',
        priceFrom: 5000,
        unitRu: '',
        unitEn: '',
        durationRu: '2–5 дней',
        durationEn: '2–5 days',
        category: 'Графика',
        cover: 'portfolio/poster-cat-day/poster-final.jpg',
        project: 2,
        shortRu: 'Афиша мероприятия, пост, сторис, обложка. Один кадр — и мысль понятна без текста.',
        shortEn: 'Event poster, feed post, story, cover. One frame that reads without a caption.',
        includesRu: ['1–2 варианта композиции', 'Адаптации под форматы (пост / сторис / A2-печать)', 'Текст в кривых и редактируемый макет', 'Файлы для печати и для соцсетей'],
        includesEn: ['1–2 layout options', 'Adaptations (post / story / A2 print)', 'Outlined text plus editable layout', 'Print and social file packs'],
        bestForRu: 'Мероприятие, концерт, распродажа, анонс, фестиваль',
        bestForEn: 'Event, gig, sale, announcement, festival',
        faq: ['how-fast', 'formats', 'revisions']
      },
      {
        slug: 'packaging',
        titleRu: 'Дизайн упаковки',
        titleEn: 'Packaging design',
        priceFrom: 25000,
        unitRu: '',
        unitEn: '',
        durationRu: '2–3 недели',
        durationEn: '2–3 weeks',
        category: 'Графика',
        cover: 'portfolio/packaging/mockup.jpg',
        project: 1,
        shortRu: 'Этикетка, коробка, крафт-пакет — от развёртки под требования типографии до мокапа для маркетплейса.',
        shortEn: 'Label, box, kraft bag — from print-ready dieline to a marketplace mockup.',
        includesRu: ['Развёртка по требованиям типографии / наряду', 'Дизайн этикетки и упаковки', 'Подбор материалов и печати', 'Мокапы для карточки товара', 'Сопровождение до печати'],
        includesEn: ['Dieline to the printer’s spec', 'Label and packaging design', 'Material and finish suggestions', 'Marketplace-ready mockups', 'Support through print'],
        bestForRu: 'Косметика, еда, свечи, крафт, Wildberries / Ozon',
        bestForEn: 'Cosmetics, food, candles, craft goods, marketplaces',
        faq: ['print', 'how-start', 'timeline']
      },
      {
        slug: 'stickers',
        titleRu: 'Стики и эмодзи-пак',
        titleEn: 'Sticker & emoji pack',
        priceFrom: 8000,
        unitRu: '',
        unitEn: '',
        durationRu: '5–7 дней',
        durationEn: '5–7 days',
        category: 'Иллюстрация',
        cover: 'portfolio/stickers/kiwi-cat.jpg',
        project: 7,
        shortRu: 'Персонаж бренда в 12–24 эмоциях: для Telegram, WhatsApp, iMessage или печати на наклейках.',
        shortEn: 'Your character in 12–24 expressions — for Telegram, WhatsApp, iMessage or print stickers.',
        includesRu: ['Отработка персонажа (позы, мимика)', '12 стикеров в паке (дальше — поштучно)', 'Форматы под Telegram (.TGS/WebP) и PNG', 'Обложка пака и превью'],
        includesEn: ['Character development (poses, expressions)', '12 stickers in the pack, extra ones per piece', 'Telegram (.TGS/WebP) and PNG formats', 'Pack cover and preview'],
        bestForRu: 'Блогер, сообщество, бренд с маскотом, подарок',
        bestForEn: 'Blogger, community, mascot brand, gift',
        faq: ['style', 'how-fast', 'source']
      },
      {
        slug: 'retouch',
        titleRu: 'Ретушь и обработка фото',
        titleEn: 'Photo retouching',
        priceFrom: 500,
        unitRu: 'за снимок',
        unitEn: 'per photo',
        durationRu: '1–2 дня',
        durationEn: '1–2 days',
        category: 'Фотография',
        cover: 'portfolio/retouch/retouch-timeline.jpg',
        project: 10,
        shortRu: 'Цвет, кожа, фон, удаление лишних объектов. Для каталога, портфолио, карточек товара.',
        shortEn: 'Colour, skin, background, object removal — for catalogues, portfolios and product cards.',
        includesRu: ['Цветокоррекция и свет', 'Чистка кожи без «пластика»', 'Удаление лишних объектов и фона', 'Пакетная обработка от 10 снимков', 'Готовность под печать и web'],
        includesEn: ['Colour and light correction', 'Natural skin retouch', 'Object and background cleanup', 'Batch processing from 10 photos', 'Print and web export'],
        bestForRu: 'Фотосессии, каталоги, маркетплейсы, архив',
        bestForEn: 'Shoots, catalogues, marketplaces, family archive',
        faq: ['how-fast', 'formats', 'prices']
      },
      {
        slug: 'book',
        titleRu: 'Фотокнига и вёрстка макета',
        titleEn: 'Photobook & layout',
        priceFrom: 12000,
        unitRu: '',
        unitEn: '',
        durationRu: '1–2 недели',
        durationEn: '1–2 weeks',
        category: 'Вёрстка',
        cover: 'portfolio/photobook/preview.jpg',
        project: 9,
        shortRu: 'Свадебная, детская, travel или корпоративная книга — от отбора кадров до файла, который примет типография.',
        shortEn: 'Wedding, kids, travel or corporate book — from photo selection to a file the print house accepts.',
        includesRu: ['Отбор и последовательность кадров', 'Вёрстка разворотов', 'Подготовка файла под требования типографии', 'PDF-превью и интерактивная версия', 'Сопровождение печати'],
        includesEn: ['Photo selection and sequence', 'Spread layout', 'Print-ready file to the lab’s spec', 'PDF preview plus interactive version', 'Print support'],
        bestForRu: 'Свадьба, ребёнок, путешествие, книга о компании',
        bestForEn: 'Wedding, child, trip, company book',
        faq: ['print', 'timeline', 'how-start']
      },
      {
        slug: 'website',
        titleRu: 'Сайт под ключ',
        titleEn: 'Website, turnkey',
        priceFrom: 45000,
        unitRu: '',
        unitEn: '',
        durationRu: '2–4 недели',
        durationEn: '2–4 weeks',
        category: 'Веб-дизайн',
        cover: 'portfolio/sites/ss-bmw/ss-bmw-d0.jpg',
        project: 11,
        shortRu: 'Лендинг или сайт-визитка: дизайн, логотип при необходимости и запуск — сайт работает на вашем адресе и приводит заявки.',
        shortEn: 'Landing page or small business site: design, a logo if needed, and launch — the site runs on your domain and brings leads.',
        includesRu: ['Структура и тексты блоков вместе с вами', 'Дизайн компьютерной и мобильной версии', 'Логотип и цвета, если их ещё нет', 'Вёрстка, форма заявки, подключение домена', 'Базовое SEO и аналитика'],
        includesEn: ['Structure and block copy together with you', 'Desktop and mobile design', 'Logo and colours if you don’t have them yet', 'Build, lead form, domain setup', 'Basic SEO and analytics'],
        bestForRu: 'Сервис, ферма, студия, мастер, локальный бизнес',
        bestForEn: 'Service business, farm, studio, craftsperson, local business',
        faq: ['how-start', 'timeline', 'rights']
      }
    ],

    /* === FAQ ===================================================
     * id — используется в services[].faq
     */
    faq: [
      {
        id: 'prices',
        qRu: 'Сколько стоит и почему «от»?',
        qEn: 'How much does it cost, and why “from”?',
        aRu: 'Цена «от» — это минимальный объём: один вариант, простой носитель, короткие сроки. Точную стоимость я называю после брифа, обычно в тот же день: она зависит от количества носителей, правок и срока. Сумму сверху не «догоняю» — фиксируем её в переписке до старта.',
        aEn: 'The “from” price covers a minimal scope: one concept, simple deliverables, standard deadline. I quote the exact figure after the brief, usually the same day — it depends on the number of assets, revisions and timing. I never inflate the number mid-project: we fix it in chat before we start.'
      },
      {
        id: 'how-start',
        qRu: 'Как начать работу и что нужно от меня?',
        qEn: 'How do we start, and what do you need from me?',
        aRu: 'Заполните форму на сайте — 3–4 минуты. Дальше я задаю пару уточняющих вопросов в WhatsApp, мы фиксируем объём, цену и срок, и я беру проект в работу. Нужно только описать задачу словами и прислать то, что уже есть: логотип, фото, ссылки, примеры, которые нравятся.',
        aEn: 'Fill in the form on the site — 3–4 minutes. I’ll ask a couple of clarifying questions in WhatsApp, we fix scope, price and deadline, and I start. All I need is your task in your own words plus whatever you already have: logo, photos, links, examples you like.'
      },
      {
        id: 'rights',
        qRu: 'Кому достаются права на результат?',
        qEn: 'Who owns the rights to the final work?',
        aRu: 'Вы получаете исключительные права на финальный вариант после полной оплаты — я передаю их по простому акту в переписке, без бумажек и доплат. Ограничение одно: работу я могу показать в своём портфолио и соцсетях (если вы против — скажите, уберу). Черновики и отклонённые варианты остаются у меня, но использовать их для других заказов я не буду.',
        aEn: 'You get the exclusive rights to the chosen final after full payment — I transfer them with a simple statement in chat, no paperwork, no extra fee. One limitation: I may show the work in my portfolio and social media (say the word if you would rather not, and I won’t). Drafts and rejected options stay with me, but I never reuse them for another client.'
      },
      {
        id: 'how-fast',
        qRu: 'Как быстро вы работаете?',
        qEn: 'How fast do you work?',
        aRu: 'Иллюстрация, постер, ретушь — 1–5 дней. Логотип — неделя-полторы. Фирменный стиль и упаковка — от двух недель. Если нужно к конкретной дате, напишите: иногда можно взять срочно, тогда срок короче, а работа дороже на 50%.',
        aEn: 'Illustration, poster, retouching: 1–5 days. Logo: one to one and a half weeks. Identity and packaging: two weeks and up. If you have a hard date, say so — sometimes I can rush it, which means a shorter deadline and a 50% surcharge.'
      },
      {
        id: 'revisions',
        qRu: 'Сколько раз можно править?',
        qEn: 'How many revisions do I get?',
        aRu: 'Два круга правок входят в цену — это нормально, никто с первого раза не угадывает. Правки внутри уже выбранного направления (цвет, детали, надписи) не считаются отдельным кругом. Если после согласования захотите совсем другое направление — это отдельный этап, я предупрежу о цене заранее.',
        aEn: 'Two rounds of revisions are included — that’s normal, nobody nails it on the first try. Small tweaks inside an approved direction (colour, details, wording) don’t count as a new round. A completely new direction after approval is a separate stage, and I’ll flag the cost before doing it.'
      },
      {
        id: 'source',
        qRu: 'Отдадите ли исходники?',
        qEn: 'Do I get the source files?',
        aRu: 'Да, все исходники и финальные файлы ваши, без доплат: Figma или Illustrator, PDF, PNG, SVG, версия для печати и для соцсетей. Отдаю в архиве ссылкой сразу после финальной оплаты. В портфолио работу публикую только с вашего разрешения.',
        aEn: 'Yes — every source and final file is yours, no extra charge: Figma or Illustrator, PDF, PNG, SVG, print and social versions. I send an archive link right after final payment. I only publish the work in my portfolio with your permission.'
      },
      {
        id: 'print',
        qRu: 'Сможете напечатать / сделать макет под типографию?',
        qEn: 'Can you prepare files for a print house?',
        aRu: 'Да. Заберу требования типографии (развёртка, вылеты, CMYK, шрифты в кривых), сделаю макет под них и проверю цветокоррекцию перед сдачей. Печатаю через партнёров, если нужно — или отдаю файл вашему подрядчику, это бесплатно.',
        aEn: 'Yes. I take the print house’s requirements (dieline, bleeds, CMYK, outlined fonts), build the layout to spec and check colours before handoff. I can print via partners if you need it, or hand the file to your contractor — no extra fee.'
      },
      {
        id: 'formats',
        qRu: 'В каких форматах отдаёте файлы?',
        qEn: 'Which file formats do you deliver?',
        aRu: 'Для веба — PNG и JPG в нужных размерах, SVG для иконок и логотипа, WebP по запросу. Для печати — PDF с вылетами и CMYK, TIFF по требованию. Всё это входит в стоимость; если у вашей типографии или сервиса особый список — пришлите его, подгоню.',
        aEn: 'For web: PNG and JPG at the sizes you need, SVG for logo and icons, WebP on request. For print: PDF with bleeds in CMYK, TIFF if required. All included; send me your print house’s or platform’s spec and I’ll match it.'
      },
      {
        id: 'style',
        qRu: 'А вы нарисуете в стиле, как у меня на референсе?',
        qEn: 'Will you draw in the style of my reference?',
        aRu: 'Сделаю похоже по настроению, но не копирую работы других авторов — это видно и клиентам, и авторам. Обычно я предлагаю 2–3 своих направления на основе ваших референсов, и мы вместе выбираем то, что ближе: так работа остаётся вашей, а не чужой.',
        aEn: 'I can match the mood, but I don’t copy other artists’ work — it shows, to clients and to the authors. Usually I offer 2–3 directions built from your references, and we pick the one that fits: the work stays yours rather than borrowed.'
      },
      {
        id: 'timeline',
        qRu: 'Что влияет на сроки?',
        qEn: 'What moves the deadline?',
        aRu: 'Скорость ответа с вашей стороны — чаще всего. Я держу за вами слот и начинаю в согласованный день, но правки, задержанные на неделю, сдвигают финал на неделю. Второй фактор — исходники: чистые тексты, логотип в векторе и качественные фото экономят 2–3 дня.',
        aEn: 'Most often: how quickly you can reply. I hold your slot and start on the agreed day, but revisions that arrive a week late push the finish by a week. Second factor is material — clean copy, a vector logo and good photos save 2–3 days.'
      }
    ],

    /* === ЭТАПЫ РАБОТЫ ========================================== */
    process: [
      { titleRu: 'Бриф', titleEn: 'Brief', textRu: 'Вы описываете задачу в форме — 3–4 минуты. Отвечаю и задаю уточняющие вопросы.', textEn: 'You describe the task in the form — 3–4 minutes. I reply with clarifying questions.' },
      { titleRu: 'Смета', titleEn: 'Quote', textRu: 'Фиксируем объём, цену и срок в переписке. Ничего не начинаю, пока мы не согласны с обеих сторон.', textEn: 'We fix scope, price and deadline in chat. Nothing starts until both agree.' },
      { titleRu: 'Концепты', titleEn: 'Concepts', textRu: 'Присылаю 2–3 направления. Выбираете одно — дальше развиваем только его.', textEn: 'I send 2–3 directions. You pick one and we develop it.' },
      { titleRu: 'Правки', titleEn: 'Revisions', textRu: 'Два круга правок включены. Комментируете прямо в макете или голосовым — как удобнее.', textEn: 'Two revision rounds included. Comment on the mockup or send a voice note.' },
      { titleRu: 'Файлы', titleEn: 'Handoff', textRu: 'Отдаю архив: все форматы, исходники, версии для печати и веба. Это финал, ничего не докупается.', textEn: 'You get an archive: all formats, sources, print and web versions. Nothing extra to buy.' }
    ],

    /* === ОТЗЫВЫ ================================================
     * Специально пусто. Выдуманные отзывы — это риск: их видно
     * и они убивают доверие быстрее, чем их отсутствие.
     * Впишите реальные: block ниже появится сам, с инициалами,
     * городом и ссылкой на переписку/отзыв на карте Яндекса.
     */
    reviews: [
      // {
      //   name: 'Мария, основатель кофейни «Градус»',
      //   nameEn: 'Maria, founder of Gradus café',
      //   textRu: 'Ксения сделала нам логотип и упаковку за две недели...',
      //   textEn: 'Ksenia delivered our logo and packaging in two weeks...',
      //   project: 1,           // ссылка на работу из портфолио
      //   url: 'https://yandex.ru/maps/...'  // ссылка на отзыв, если есть
      // }
    ],

    /* === ФОРМА ЗАЯВКИ ===========================================
     * По умолчанию заявка уходит в WhatsApp: форма собирает бриф
     * текстом и открывает переписку с готовым сообщением. Ничего
     * регистрировать не нужно.
     *
     * Если позже захотите падение заявок на почту — впишите
     * endpoint (Formspree / Web3Forms / Google Apps Script) и
     * форма начнёт слать туда автоматически, а WhatsApp останется
     * как второй путь.
     */
    form: {
      endpoint: '',                 // напр. 'https://formspree.io/f/xxxxxxx'
      endpointFieldRu: 'message',   // имя поля, если сервис ждёт одно
      showEmailFallback: true,      // мелкая ссылка «или на почту» в успехе
      draftKey: 'ksu.order.draft',
      leadsLogKey: 'ksu.leads.log',
      maxLeadsStored: 20
    },

    /* === АНАЛИТИКА =============================================
     * Вставьте номер счётчика Яндекс.Метрики — и сайт сам
     * подключит счётчик, а форма будет слать цели:
     * order_view, order_submit, order_sent, whatsapp_click,
     * service_click, price_expand, sticky_cta_click.
     * Без id всё работает вхолостую, ошибок не будет.
     */
    analytics: {
      metrikaId: '',
      goals: {
        order_submit: 'order_submit',
        order_sent: 'order_sent',
        whatsapp_click: 'whatsapp_click',
        service_click: 'service_click',
        sticky_cta_click: 'sticky_cta_click',
        copy_brief: 'copy_brief'
      }
    },

    /* === ЛЕНДИНГИ / SEO ========================================
     * Заголовки страниц в order/<slug>/. Слово «заказать» даёт
     * трафик из поиска — именно по нему ищут исполнителя.
     */
    seo: {
      ru: {
        homeTitle: 'Ксения — графический дизайнер и иллюстратор | Заказать логотип, плакат, иллюстрацию',
        homeDescription: 'Портфолио и заказы: логотип, фирменный стиль, иллюстрация на заказ, плакат, упаковка, стики, ретушь, фотокнига. Цены от 3 500 ₽, отвечаю в течение дня, 2 круга правок включены. Бриф на сайте — 3 минуты.',
        ogTitle: 'Ксения — графический дизайнер. Заказать дизайн',
        ogDescription: 'Логотип, фирменный стиль, иллюстрация, плакат, упаковка, ретушь. Цены, сроки и бриф онлайн.',
        locale: 'ru_RU'
      },
      en: {
        homeTitle: 'Ksenia — graphic designer & illustrator | Hire for logos, posters, illustration',
        homeDescription: 'Portfolio and commissions: logo, brand identity, custom illustration, posters, packaging, stickers, retouching, photobooks. Prices from 3,500 ₽, reply within a day, two revision rounds included.',
        ogTitle: 'Ksenia — graphic designer. Available for projects',
        ogDescription: 'Logo, identity, illustration, posters, packaging, retouching. Prices, timelines and a 3-minute brief.',
        locale: 'en_US'
      },
      // Шаблон заголовка лендинга услуги
      landingTitleRu: '{title} — заказать у Ксении, цена от {price} ₽',
      landingDescriptionRu: '{short} Цена от {price} ₽, срок {duration}. {includes} — уже в работе. Отвечаю в течение дня.',
      landingTitleEn: '{title} — commission Ksenia, from {price} ₽',
      landingDescriptionEn: '{short} From {price} ₽, {duration} turnaround. Two revision rounds included.'
    }
  };
});
