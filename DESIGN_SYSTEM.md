# Дизайн-система — Ksenia Portfolio

## 1. ДИЗАЙН-ТОКЕНЫ

### 1.1 Цвета

| Токен | Тёмная тема (#0A0A0A) | Светлая тема (#F5F0EB) | Назначение |
|-------|----------------------|------------------------|------------|
| `--accent` | `#FF2D55` (розовый) | `#FF2D55` | Акцентный — кнопки, ховеры, выделение, секционные лейблы |
| `--accent2` | `#FFD633` (жёлтый) | `#FFD633` | Второстепенный акцент — карточки, градиенты |
| `--accent3` | `#00E5FF` (циан) | `#00E5FF` | Третичный акцент — карточки, градиенты |
| `--bg` | `#0A0A0A` | `#F5F0EB` | Фон страницы |
| `--text` | `#F5F5F5` | `#1A1A1A` | Основной текст, заголовки |
| `--text-secondary` | `rgba(255,255,255,.7)` → `#B3B3B3` | `rgba(0,0,0,.78)` → `#383838` | Вторичный текст, описания |
| `--text-muted` | `rgba(255,255,255,.3)` → `#4D4D4D` | `rgba(0,0,0,.5)` → `#808080` | Приглушённый текст, лейблы, номера, футер |
| `--border` | `rgba(255,255,255,.04)` | `rgba(0,0,0,.1)` | Тонкие границы (фоновые) |
| `--border-visible` | `rgba(255,255,255,.15)` | `rgba(0,0,0,.18)` | Видимые границы (теги, социальные иконки) |
| `--card-bg` | `rgba(255,255,255,.03)` | `rgba(0,0,0,.04)` | Фон карточек, секций |
| `--nav-bg` | `rgba(10,10,10,.8)` | `rgba(245,240,235,.9)` | Фон навбара (с blur) |
| `--hero-name-from` | `#fff` | `#1A1A1A` | Начальный цвет градиента в hero-name |
| `--hero-name-to` | `--accent` | `--accent` | Конечный цвет градиента в hero-name |
| `--logo-color` | `#fff` | `#1A1A1A` | Цвет логотипа в навбаре |
| `--scroll-bg` | `rgba(255,255,255,.3)` | `rgba(0,0,0,.4)` | Цвет скролл-индикатора |
| `--tag-hover-bg` | `rgba(255,45,85,.1)` | `rgba(255,45,85,.1)` | Фон тегов при ховере |

**Правило:** Все цвета переключаются через атрибут `[data-theme="light"]` на `<html>`. Тёмная тема — дефолтная (`data-theme="dark"` или отсутствие).

### 1.2 Типографика

| Стиль | Шрифт | Начертание | Размер | Межбуквенный интервал | Применение |
|-------|-------|-----------|--------|----------------------|------------|
| **Hero name** | `Unbounded` | 900 (Black) | `clamp(64px, 12vw, 160px)` | `-.04em` | Главный заголовок на hero |
| **Hero subtitle** | `Unbounded` | 300 (Light) | `clamp(20px, 3vw, 44px)` | `.15em` UP | Подзаголовок под именем |
| **Section label** | `Unbounded` | 700 (Bold) | `14px` | `.15em` UP | Заголовки секций (About, Works, Inspiration, Contact) |
| **Work card title** | `Unbounded` | 600 (Semibold) | `18px` | — | Название проекта на карточке |
| **Work card number** | `Unbounded` | 900 (Black) | `clamp(32px, 5vw, 64px)` | — | Номер проекта (01–12) |
| **Ref card title** | `Unbounded` | 700 (Bold) | `20px` | `-.02em` | Категория в карточке референса |
| **Nav logo** | `Unbounded` | 700 (Bold) | `18px` | `-.02em` | Логотип "Ksenia" в навбаре |
| **Nav links** | `Inter` | 500 (Medium) | `13px` | `.1em` UP | Ссылки навигации |
| **Ref mini title** | `Unbounded` | 600 (Semibold) | `14px` | `-.01em` | Названия Specialized Resources |
| **Contact email** | `Unbounded` | 700 (Bold) | `clamp(24px, 3.5vw, 48px)` | `-.03em` | Email в контактах |
| **Contact phone** | `Inter` | 400 (Regular) | `clamp(16px, 2vw, 24px)` | `.02em` | Телефон в контактах |
| **Proj detail title** | `Unbounded` | 900 (Black) | `clamp(72px, 15vw, 200px)` | `-.05em` | Заголовок в детальном просмотре проекта |
| **Proj section title** | `Unbounded` | 600 (Semibold) | `20px` | `-.01em` | Заголовки секций внутри детального просмотра |
| **Body text** | `Inter` | 400 (Regular) | `18px` | — | Основной текст (about, contact description) |
| **Body small** | `Inter` | 400 (Regular) | `14px` или `16px` | — | Вторичный текст (ref card desc, counters) |
| **Marquee** | `Unbounded` | 200 (Thin) | `14px` | `.25em` UP | Бегущая строка "PORTFOLIO" |
| **Misc labels** | `Inter` | 500 (Medium) | `10–13px` | `.05–.2em` UP | Категории, лейблы, футер |

**Подключение:** Google Fonts — Unbounded (200–900) + Inter (300–700).

### 1.3 Отступы и расстояния

| Токен | Значение | Применение |
|-------|---------|------------|
| `--gap` | `24px` | Базовый гэп в сетках (works, references) |
| Секционный паддинг | `160px 40px` | About, Contact |
| Works паддинг | `0 40px 160px` | Works section (без верхнего паддинга) |
| References паддинг | `0 40px 160px` | References section |
| Hero паддинг | `140px 40px 80px` | Hero секция |
| Nav паддинг | `16px 40px` | Навбар |
| Footer паддинг | `32px 40px` | Футер |
| Work card inner | `28px` | Внутренний паддинг карточек проектов |
| Ref card inner | `32px 36px` | Внутренний паддинг карточек референсов |
| Overlay content | `80px 40px 120px` | Паддинг контента в оверлее |

### 1.4 Скругления

| Элемент | Радиус |
|---------|--------|
| Work card | `12px` |
| Ref card | `12px` |
| Proj-weight | `10px` |
| Proj-specimen | `12px` |
| Proj-char | `6px` |
| Ref-mini | `10px` |
| Tag | `100px` (pill) |
| Social icon | `50%` (круг) |
| Theme toggle | `50%` (круг) |

### 1.5 Тени и границы

| Элемент | Тёмная тема | Светлая тема |
|---------|------------|--------------|
| Card border | `1px solid var(--border)` | `1px solid var(--border)` |
| Tag border | `1px solid var(--border-visible)` | `1px solid var(--border-visible)` |
| Social icon border | `1px solid var(--border-visible)` | `1px solid var(--border-visible)` |
| Nav background | `rgba(10,10,10,.8)` + `backdrop-filter: blur(20px)` | `rgba(245,240,235,.9)` + blur |
| Overlay close bg | `var(--nav-bg)` + blur | `var(--nav-bg)` + blur |
| Light theme ref-card | — | `outline: 1px solid var(--border)` |

---

## 2. КОМПОНЕНТЫ

### 2.1 Nav (навбар)

```
.nav (fixed, top 0, z-index 1000, pointer-events: none)
  └── .nav__inner (max-width 1440px, flex, space-between)
        ├── .nav__logo (Unbounded 700, 18px, ссылка #)
        ├── input#menu-toggle (checkbox, hidden)
        ├── label.menu-btn (display:none по умолч., flex на <768px)
        │     └── span × 3 (гамбургер-иконка)
        └── .nav__links (flex, gap 20px)
              ├── a.nav__link × 4 (Inter 500, 13px, .1em UP)
              ├── button.lang-toggle (переключатель языка)
              └── button.theme-toggle
                    ├── svg.theme-toggle__icon.theme-toggle__sun (18×18)
                    └── svg.theme-toggle__icon.theme-toggle__moon (18×18)
```

**Логика:**
- **Бургер** активируется на `≤768px`: меню выезжает справа (`right: -100%` → `right: 0`)
- **Checkbox hack**: `#menu-toggle:checked ~ .nav__links` — без JS
- Полоски гамбургера анимируются: 1-я → rotate(45°), 2-я → opacity 0, 3-я → rotate(-45°)
- `pointer-events:none` на nav, `pointer-events:auto` на inner (чтобы клик сквозь шапку не работал)

### 2.2 Hero

```
.hero (min-height: 100vh, flex, justify-content: flex-end, relative)
  ├── .hero__shapes (absolute, inset 0, z-index 1)
  │     ├── .shape.shape--1 (circle, 400×400, accent border)
  │     ├── .shape.shape--2 (diamond, 250×250, accent bg)
  │     ├── .shape.shape--3 (circle, 180×180, accent2 border)
  │     └── .shape.shape--4 (square, 120×120, accent3 bg, rotate 45°)
  ├── .hero__marquee (бегущая строка, mask-image gradient)
  │     └── .hero__marquee-track (Unbounded 200, 14px, .25em, animation 30s linear infinite)
  ├── .hero__inner (max-width 1440px, z-index 2)
  │     └── h1.hero__title (flex, column, gap 8px)
  │           ├── span.hero__name (Unbounded 900, clamp, gradient text)
  │           └── span.hero__subtitle (Unbounded 300, clamp, .15em UP)
  └── .hero__scroll (absolute, bottom 40px, right 40px)
        ├── span "Scroll"
        └── .hero__scroll-line (1px, gradient accent→transparent, pulse 2s)
```

**Анимации:**
- `shapeFloat` — все 4 фигуры плавают с разной задержкой (20s, -5s, -10s, -15s)
- `marquee` — бегущая строка (30s linear infinite, translateX 0 → -50%)
- `scrollPulse` — линия скролла пульсирует (2s)
- Медиа `≤900px`: hero центрируется, scroll indicator убирается
- Медиа `≤768px`: отступы уменьшаются, размер шрифта clamp подстраивается

### 2.3 About

```
.about (padding 160px 40px)
  └── .about__inner (max-width 1440px, grid 2col, gap 80px)
        ├── .about__content
        │     ├── h2.section-label (Unbounded 700, 14px, .15em UP, accent)
        │     ├── p.about__text × 2 (Inter 18px, 1.7, text-secondary, max-width 540px)
        │     └── .about__tags (flex, wrap, gap 8px)
        │           └── span.tag × 6 (pill, 6px 16px, border-visible, text-muted)
        └── .about__visual (position relative, height 400px)
              ├── .about__shape--1 (square 280×280, accent border, rotate, shapePulse 8s)
              ├── .about__shape--2 (diamond 180×180, accent bg, shapeFloat 15s)
              └── .about__shape--3 (circle 100×100, accent2 border, shapeFloat 12s reverse)
```

**Медиа:** `≤1024px` → 1 колонка, height visual 300px

### 2.4 Works (сетка проектов)

```
.works (padding: 0 40px 160px)
  └── .works__header (max-width 1440px, flex, space-between, align-end, margin-bottom 60px)
        ├── h2.section-label
        └── .works__count (13px, UP, text-muted: "11 projects", accent number)
        └── .works__grid (max-width 1440px, grid 3col, gap var(--gap))
              └── .work-card (aspect-ratio 4/5, cursor pointer, overflow hidden, radius 12px)
                    ├── .work-card__visual (absolute, inset 0 — зона для изображения/SVG)
                    │     └── .wv (background-image: svg/data-uri)
                    └── .work-card__inner (absolute, inset 0, flex column, justify-end, padding 28px)
                          ├── .work-card__num (Unbounded 900, clamp, text-muted, align-self flex-end, margin-bottom auto)
                          ├── .work-card__category (11px, .12em UP, text-muted)
                          ├── .work-card__title (Unbounded 600, 18px)
                          └── .work-card__line (height 1px, accent, width 0 → 60px on hover)
```

**Ховер:** Transform scale(.97) + visual scale(1.08) + линия расширяется.
**Фоны:** Каждая карточка имеет уникальный градиент (`.wc-1`…`.wc-12`).
**Светлая тема:** Все `.wc-*` получают `background: #e0dcd5; border: 1px solid var(--border)`.
**Спец-карточка (KSA):** `[data-interactive]` — белый текст с text-shadow, ховер с accent оверлеем.
**Медиа:** `≤768px` → 2 колонки; `≤480px` → 1 колонка.

### 2.5 Overlay (детальный просмотр проекта)

```
.overlay (fixed, inset 0, z-index 2000, bg var(--bg), overflow-y auto)
  ├── .overlay__close (fixed, top 20px, right 24px, 44×44, круг, blur-bg, font-size 28px)
  └── .overlay__content (max-width 1200px, padding 80px 40px 120px)
```

**Логика:** Открывается через `openProject(index)`, закрывается по кнопке, клику вне контента, Escape.
**Анимация:** opacity 0 → 1 (`.overlay--open`).

### 2.6 Project Detail (контент внутри оверлея)

Структура оверлея для всех 11 проектов:

```
.proj-hero (text-align center, padding 80px 0 60px)
  ├── .proj-hero__label (12px, .2em UP, accent)
  ├── .proj-hero__title (Unbounded 900, clamp, gradient text)
  └── .proj-hero__sub (18px, text-muted) — опционально

.proj-section (margin-top 80px)
  ├── .proj-section__title (Unbounded 600, 20px, -.01em)
  └── .proj-gallery.proj-gallery--N (CSS Grid, gap 16px)
        └── .proj-gallery__item → img (border-radius 8px, overflow hidden)

.proj-share (text-align center, margin-top 60px, padding-bottom 40px)
  └── .proj-share__btn (border, radius 8px, hover → accent fill)
```

**Галерея:**
| Класс | Колонок |
|-------|---------|
| `.proj-gallery--1` | 1 (full) |
| `.proj-gallery--2` | 2 |
| `.proj-gallery--3` | 3 |
| `.proj-gallery--4` | 4 |

**Медиа:** `≤768px` → все галереи в 1 колонку.

### 2.7 References

```
.references (padding 0 40px 160px)
  ├── .references__header (max-width 1440px, margin-bottom 60px)
  │     ├── h2.section-label
  │     └── p.references__subtitle (16px, text-secondary, max-width 540px)
  ├── .references__grid (max-width 1440px, grid 2col, gap 24px)
  │     └── .ref-card × 18 (radius 12px, overflow hidden, hover: scale .98)
  │           └── .ref-card__inner (padding 32px 36px, flex column, min-height 160px)
  │                 ├── .ref-card__cat (Unbounded 700, 20px)
  │                 ├── .ref-card__desc (14px, text-secondary, margin-bottom auto)
  │                 └── .ref-card__links (flex wrap, gap 6px, border-top)
  │                       └── a.ref-card__link × 4 (flex column, align center, bg dark, radius 6px)
  │                             ├── span (13px, 800 — иконка Be/Dr/Fg/Pt)
  │                             └── span (8px — "explore"/"искать")
  ├── .ref-section (max-width 1440px, margin-top 60px)
  │     ├── h3.ref-section__title (Unbounded 700, 16px)
  │     ├── p.ref-section__desc (13px, text-muted)
  │     └── .ref-section__grid
  │           ├── .ref-section__grid--special (grid 5col)
  │           └── .ref-section__grid--boards (grid 3col)
  │                 └── a.ref-mini (display block)
  │                       └── .ref-mini__inner (padding 20px 24px, radius 10px, border 1px)
  │                             ├── .ref-mini__name (Unbounded 600, 14px)
  │                             └── .ref-mini__desc (12px, text-secondary)
```

**Ховер ссылок:** Каждая платформа имеет свой цвет при ховере (Be → #1769FF, Dr → #EA4C89, Fg → #1E1E1E, Pt → #E60023).
**Медиа:** `≤1024px` → refs-grid 1col; `≤768px` → special 2col, boards 2col; `≤480px` → всё 1col.

### 2.8 Contact

```
.contact (padding 160px 40px, border-top 1px var(--border))
  └── .contact__inner (max-width 1440px, grid 2col, gap 80px)
        ├── .contact__left
        │     ├── h2.section-label
        │     ├── p.contact__text (Inter 18px, text-secondary, max-width 480px)
        │     ├── a.contact__email (Unbounded 700, clamp, hover → accent)
        │     ├── a.contact__phone (Inter 400, clamp, text-secondary, hover → accent)
        │     └── .contact__socials (flex, gap 12px)
        │           └── a.contact__social × 5 (44×44, круг, 12px, border, hover → accent bg)
        └── .contact__right (position relative, height 400px)
              ├── .contact__shape--1 (circle 200×200, accent border, shapeFloat 18s)
              ├── .contact__shape--2 (square 140×140, accent bg, shapeFloat 14s reverse)
              └── .contact__shape--3 (diamond 80×80, accent3 border, shapeFloat 10s)
```

### 2.9 Footer

```
.footer (padding 32px 40px, border-top 1px var(--border))
  └── .footer__inner (max-width 1440px, flex, space-between, 12px, text-muted)
        ├── span.footer__copy "© 2026 Ksenia"
        └── span.footer__tagline "Graphic Design"
```

### 2.10 Tags

```
.tag (display inline-block, padding 6px 16px, border 1px border-visible, radius 100px,
      font 12px .05em, text-muted, transition all .3s)
  hover → border-color accent, color text, bg tag-hover-bg
```

---

## 3. АНИМАЦИИ

| Имя | Свойства | Длительность | Применение |
|-----|----------|-------------|------------|
| `shapeFloat` | translate + rotate | 20s ease-in-out infinite | Все декоративные фигуры |
| `shapePulse` | rotate + scale + opacity | 8s ease-in-out infinite | About shape 1 |
| `marquee` | translateX 0 → -50% | 30s linear infinite | Hero marquee |
| `scrollPulse` | opacity + scaleY | 2s ease-in-out infinite | Scroll line |
| Reveal | translateY(40→0) + opacity(0→1) | .8s ease | Scroll-triggered entry |
| Work card hover | transform scale | .6s cubic-bezier | .97 карточка, 1.08 visual |
| Work card line | width 0→60px | .6s cubic-bezier | Линия под заголовком |
| Theme toggle | opacity + rotate | .3s | Солнце/луна |
| Overlay open | opacity 0→1 | .4s | Оверлей проекта |
| Nav link underline | width 0→100% | .4s | Подчёркивание ссылок |

**Scroll Reveal:** IntersectionObserver на всех секционных элементах. Классы `.reveal` + `.reveal-delay-1`…`6` (step .1s). Visible при пересечении (threshold 0.1, rootMargin -40px bottom).

---

## 4. СЕТКИ И РАЗМЕТКА

| Секция | Десктоп | 1024px | 900px | 768px | 480px |
|--------|---------|--------|-------|-------|-------|
| **About inner** | 2 col | 1 col | 1 col | 1 col | 1 col |
| **Works grid** | 3 col | 3 col | 3 col | 2 col | 1 col |
| **Refs grid** | 2 col | 1 col | 1 col | 1 col | 1 col |
| **Ref special** | 5 col | 5 col | 5 col | 2 col | 1 col |
| **Ref boards** | 3 col | 3 col | 3 col | 2 col | 1 col |
| **Contact inner** | 2 col | 1 col | 1 col | 1 col | 1 col |

**Максимальная ширина контента:** `1440px` (центрирование через `margin: 0 auto`).
**Базовый контейнер:** секции используют `padding` вместо margin для полной ширины с контент-ограничением.

---

## 5. БРЕЙКПОИНТЫ

| Брейкпоинт | Изменения |
|-----------|-----------|
| `≤1024px` | About и Contact в 1 колонку; 300px/250px высота визуала; refs grid 1col |
| `≤900px` | Hero: justify-content center, padding 80px 24px 40px; scroll indicator hidden |
| `≤768px` | **Бургер-меню** активируется; nav padding 12px 20px; works grid 2col; ref special/boards 2col; overlay padding меньше; proj-chars 7col; proj-weights 1col |
| `≤480px` | Works grid 1col; всё 1col; padding минимальный |

---

## 6. ОСОБЕННОСТИ

| Особенность | Описание |
|-------------|----------|
| **Перевод (i18n)** | Через `data-i18n` атрибуты + объект `i18n {en, ru}` в script.js. Без перезагрузки страницы. |
| **Темы** | `data-theme` на `<html>`. Сохранение в `localStorage`. |
| **Язык** | `localStorage.getItem('lang')`. Дефолт — 'en'. |
| **Overlay** | Единый оверлей для всех проектов. Switch/case в getProjectHTML(). |
| **Галереи** | CSS Grid с классами `.proj-gallery--N` (1–4 колонки). |
| **Share** | Кнопка «Поделиться» + hash-routing (`#project-N`). |
| **SEO** | JSON-LD, sitemap.xml, robots.txt, динамические OG-теги. |
| **PWA** | `manifest.json`, apple-touch-icons, mask-icon. |

---

## 7. ПАТТЕРНЫ КОНТЕНТА

### Карточка проекта (Work card)
```
01                    ← номер (Unbounded 900)
BRANDING              ← категория (11px, .12em UP)
Branding NOVA         ← название (Unbounded 600, 18px)
────────────────────  ← линия (accent, появляется на ховере)
[изображение/SVG]     ← фон (cover, центрирован)
```

### Детальный просмотр проекта (Overlay)
```
[лейбл категории]
[крупный заголовок]
[описание / секции]
```

### Карточка референса (Ref card)
```
[название категории]  ← Unbounded 700, 20px
[описание]            ← 14px, text-secondary
────────────────────
Be │ Dr │ Fg │ Pt     ← кнопки-ссылки на платформы
```

### Мини-ресурс (Ref-mini)
```
[название]            ← Unbounded 600, 14px
[описание]            ← 12px, text-secondary
[цветная border]      ← accent color .2 opacity
```
