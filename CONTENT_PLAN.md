# Content Plan — Ksenia Portfolio

## Общая структура сайта

```
NAV (Ksenia | About, Works, Inspiration, Contact | [RU] [🌙])
├── HERO
│     ├── Ksenia / графический дизайнер
│     └── бегущая строка "PORTFOLIO"
├── ABOUT
│     └── текст + теги (Identity, Branding, Typography, UI/UX, Illustration, Poster)
├── WORKS — 11 карточек проектов
│     └── каждая → OVERLAY с детальным просмотром
├── REFERENCES — 18 карточек категорий (Behance/Dribbble/Figma/Pinterest)
│     ├── Specialized Resources (5 сайтов)
│     └── Moodboards & References (3 сервиса)
├── CONTACT
└── FOOTER
```

---

## 1. Проекты (Works) — 11 карточек

| # | EN Title | RU Title | Category EN | Category RU | Папка контента | Cover (обложка) |
|---|----------|----------|-------------|-------------|----------------|-----------------|
| 0 | Moodboards Collection | Коллекция мудбордов | Moodboards | Мудборды | `portfolio/moodboards/` | `concept-2.jpg` |
| 1 | Packaging Development | Разработка упаковки | Packaging | Упаковка | `portfolio/packaging/` | `mockup.jpg` |
| 2 | Cat Day Poster | Постер «День кошек» | Poster | Плакат | `portfolio/poster-cat-day/` | `poster-final.jpg` |
| 3 | Platformer Game Design | Дизайн игры платформер | Game Design | Гейм-дизайн | `portfolio/game/` | `menu.jpg` |
| 4 | Procreate Portraits | Портреты Procreate | Illustration | Иллюстрация | `portfolio/digital-drawing/procreate/portraits/` | `portrait-mia-goth.jpg` |
| 5 | Popular Blondes | Популярные блондинки | Illustration | Иллюстрация | `portfolio/digital-drawing/popular-blondes/` | `postcard-margot.jpg` |
| 6 | Character & Comic | Персонаж и комикс | Illustration | Иллюстрация | `portfolio/digital-drawing/character-comic/` | `comic-var-1.jpg` |
| 7 | Sticker Character | Персонаж для стикеров | Illustration | Иллюстрация | `portfolio/stickers/` | `kiwi-cat.jpg` |
| 8 | Wall Art | Арт под роспись стены | Illustration | Иллюстрация | `portfolio/digital-drawing/` | `wall-art-1.jpg` |
| 9 | Photobook "3:00" | Фотокнига «3:00» | Editorial | Издание | `portfolio/photobook/` | `preview.jpg` |
| 10 | Photo Retouching | Ретушь фото | Photography | Фотография | `portfolio/retouch/` | `retouch-timeline.jpg` |

### Примечания к проектам

- **KSA Typeface удалён** — шрифт не прошёл проверку.
- **Moodboards** перемещены на первую позицию (index 0) — как самый сильный визуальный проект.
- **Digital Drawing** разбит на 5 подпроектов (слоты 4–8).
- Все файлы переименованы в латиницу.

---

## 2. Детальные оверлеи (Project Overlay)

Каждый проект получает свой HTML-шаблон внутри `getProjectHTML()` через `switch(index)`. Структура оверлея:

```
.proj-hero
  ├── .proj-hero__label  (категория, 12px UP, accent)
  ├── .proj-hero__title  (название, Unbounded 900, clamp, gradient)
  └── [изображение-обложка] (full-width, aspect-ratio по размеру)

.proj-section × N
  ├── .proj-section__title (секция: "Mockup", "Logos", "Gallery", etc.)
  └── .proj-gallery.proj-gallery--N (CSS Grid: 1..4 колонки, gap 16px)
        └── .proj-gallery__item → img
```

### Детализация по проектам:

#### 0. Moodboards Collection
- **Hero:** concept-2.jpg
- **Sections:**
  - "Concept Boards": concept-1, concept-2 (2 col)
  - "Office Moodboards": CD Project, Mundfish, Sony (3 col)
  - "Cafe Moodboards": hello kitty, cyberpunk, retro (3 col)
  - "Kitchen Moodboards": kitchen-1–3 (3 col)
  - "Cosmetic Shop": cosmetics-shop (full)

#### 1. Packaging Development
- **Hero:** mockup.jpg
- **Sections:**
  - "Mockup": mockup.jpg (full)
  - "Logos": logo-1, logo-2, logo-1-color (3 col)
  - "Poster": poster.png (full)
  - "Packaging Net": packaging-net.jpg
  - "Storefront": storefront.jpg
  - "Concept": concept.png
  - **PDFs:** booklet-final.pdf, concept-development.pdf

#### 2. Cat Day Poster
- **Hero:** poster-final.jpg
- **Sections:**
  - "Poster": poster-final (full-width, portrait)
  - "Ticket": ticket.jpg
  - "Logo": logo.jpg
  - "Mockups": mockup-1 + mockup-2 (2 col)

#### 3. Platformer Game Design
- **Hero:** menu.jpg
- **Sections:**
  - "Screens": win-screen, lose-screen (2 col)
  - "Backgrounds": bg-1–4 (2×2 grid)
  - "Character Concept": character-concept (full)
  - "Storyboard": storyboard (full)

#### 4. Procreate Portraits
- **Hero:** portrait-mia-goth.jpg
- **Sections:**
  - "Portrait Gallery": 6 portraits (2×3 grid)

#### 5. Popular Blondes
- **Hero:** postcard-margot.jpg
- **Sections:**
  - "Postcards": postcard-margot + page-regina (2 col)
  - "Project Link": project-link.png

#### 6. Character & Comic
- **Hero:** comic-var-1.jpg
- **Sections:**
  - "Character": stingray-character (full)
  - "Comic Variations": comic-var-1, comic-var-2 (2 col)

#### 7. Sticker Character
- **Hero:** kiwi-cat.jpg
- **Sections:**
  - "Final Character": kiwi-cat (full)
  - "Variations": character-var-1, character-var-2, character-var-2-1 (3 col)

#### 8. Wall Art
- **Hero:** wall-art-1.jpg
- **Sections:**
  - "Wall Art": wall-art-1, wall-art-2 (2 col)

#### 9. Photobook "3:00"
- **Hero:** preview.jpg
- **Sections:**
  - "Preview": preview (full)
  - **PDF:** photobook-final.pdf

---

## 3. Мудборды в Inspiration — разграничение

Мудборды представлены:
1. Как **проект (index 0)** в Works — как полноценная работа дизайнера
2. **Раздел Inspiration** — внешние ссылки на Behance/Dribbble/Figma/Pinterest

---

## 4. Ассеты — итоговая структура

Все файлы в латинице, без пробелов, без кириллицы. Структура:

```
portfolio/
  game/ (9)
  poster-cat-day/ (5)
  moodboards/ (12)
  stickers/ (4)
  photobook/ (2)
  packaging/ (10)
  retouch/ (1)
  digital-drawing/ (21 файлов всего)
    procreate/portraits/ (6)
    popular-blondes/ (3)
    character-comic/ (3)
    wall-art-1.jpg, wall-art-2.jpg
```

### Оптимизация
- Обложки карточек: ≤200KB
- Детальные изображения: ≤300KB, ≤1920px по широкой стороне
- PDF: photobook-final.pdf, booklet-final.pdf, concept-development.pdf

---

## 5. i18n — ключи

Формат ключей: `proj.{index}.{key}` для описаний и названий секций.
Индексы соответствуют порядку в `projects[]` (0–10).
