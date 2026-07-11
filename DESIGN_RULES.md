# Design Rules — KSU Portfolio

## 1. Изображения в оверлеях
- Одиночные изображения (1 колонка): `max-height: 85vh; object-fit: contain` — чтобы работа была видна целиком без скролла.
- Многоколоночные галереи (2/3/4 колонки): CSS Grid с `gap: 16px`, без ограничения высоты, естественный поток.
- Все изображения — JPEG q85, ≤300KB для детальных, ≤200KB для обложек.

## 2. Сетка галерей
- `.proj-gallery` — `display: grid; gap: 16px`.
- `.proj-gallery--N` — `grid-template-columns: repeat(N, 1fr)` для N = 1..4.
- `.proj-gallery__item` — `border-radius: 8px; overflow: hidden`.
- На ≤768px все многоколоночные галереи → 1 колонка.
- Одиночные изображения: `max-height: 85vh; object-fit: contain`.

## 3. Поделиться
- Каждый проект оверлея содержит кнопку «Поделиться» (`proj-share__btn`).
- Клик: `navigator.share()` на мобильных, `navigator.clipboard.writeText()` на десктопе.
- URL проекта: `{SITE_URL}/#project-{index}`.
- Hash-маршрутизация: при загрузке страницы с `#project-N` автоматически открывать проект N.
- `history.replaceState` при открытии/закрытии оверлея.

## 4. OG-теги (динамические)
- При открытии оверлея обновлять:
  - `og:title` → "Ksenia — {Project Title}"
  - `og:description` → описание проекта
  - `og:url` → `{SITE_URL}/#project-{index}`
  - `og:image` → изображение-обложка проекта
  - `twitter:*` и `meta[name="description"]` — аналогично
- При закрытии оверлея восстанавливать глобальные OG-теги.
- `SITE_URL = 'https://bestdeejay-design.github.io/ksu'` в script.js.

## 5. SEO — лучшие практики

### 5.1 Базовая структура
- `canonical` ссылка на `https://bestdeejay-design.github.io/ksu/`.
- `meta name="robots" content="index, follow"` — индексация разрешена.
- `sitemap.xml` — перечислены все URL проектов (11 шт.) с приоритетами (1.0 для главной, 0.9-0.6 для проектов).
- `robots.txt` — Allow: /, Sitemap: production URL.

### 5.2 Иерархия заголовков
- `<h1>` — только "Ksenia" на hero (один на страницу).
- `<h2>` — секции: About, Works, References, Contact.
- `<h3>` — подсекции (Specialized Resources, Moodboards & References).
- Названия проектов — в карточках (не h3, т.к. генерируются JS).

### 5.3 Мета-теги
- `title` — "Ksenia — graphic designer" (по умолчанию), динамически меняется на "Ksenia — {Project Title}" при открытии оверлея.
- `meta description` — уникальное описание для каждого проекта (динамическое через `updateOG`).
- `meta author` — "Ksenia".

### 5.4 JSON-LD Structured Data
- Статический `<script type="application/ld+json">` в `<head>`:
  - `@type: Person` — имя, профессия, URL, навыки (knowsAbout), соцсети (sameAs).
  - При открытии оверлея можно добавить `CreativeWork` для конкретного проекта.

### 5.5 Open Graph / Twitter Card
- `og:type: website`, `og:locale: en_US`, `og:site_name`.
- `og:image` — 1200×630 PNG, обязателен для соцсетей.
- `twitter:card: summary_large_image`.
- Все URL OG-тегов указывают на production-домен.

### 5.6 Изображения
- Все `<img>` имеют осмысленный `alt` с описанием работы (например, "Moodboard collection — office concept for CD Project").
- `loading="lazy"` на всех изображениях, кроме критических.
- Формат: JPEG q85, размеры ≤1920px по широкой стороне.

### 5.7 PWA
- `manifest.json` — name, short_name, start_url `/ksu/`, иконки 192/512.
- `apple-touch-icon` — 180×180, 152×152, 120×120.
- `theme-color` — `#0A0A0A`, `mask-icon`.

### 5.8 Ссылочная структура
- `rel="canonical"` на главную.
- `rel="noopener"` на все внешние ссылки.
- Все социальные ссылки открываются в новой вкладке (`target="_blank"`).

### 5.9 Доступность
- `aria-label` на кнопках и иконках (burger, theme toggle, social links, overlay close).
- `hidden` атрибут для burger checkbox.
- Контраст текста: светлая тема `#1A1A1A` на `#F5F0EB` (ratio ~11:1), тёмная `#F5F5F5` на `#0A0A0A`.

### 5.10 Производительность (Core Web Vitals)
- Google Fonts через preconnect.
- CSS в одном файле (`style.css`), JS в одном файле (`script.js`).
- Изображения ≤300KB, ленивая загрузка.
- Анимации только через transform/opacity (no Layout/reflow trashing).

## 6. Адаптивность
- Оверлей на мобильных: padding 60px 16px 80px.
- Галереи на ≤768px: все колонки → 1 колонка.
- Изображения в одиночных секциях: max-height на мобильных 70vh.
- Карточки работ: 1 колонка на ≤480px, 2 колонки на 481–768px, 3 колонки на >768px.

## 7. Эстетика
- Все секции оверлея разделены отступом 32px (margin-top).
- Заголовки секций — Unbounded 600, 20px, letter-spacing -.01em.
- Описания — через `i18n[lang]['proj.{index}.desc']`.
- Галереи: CSS Grid с `gap: 16px`, скругление 8px.
- Никаких переполнений по высоте — изображения не должны вылезать за экран.
- Единый стиль кнопок (PDF ссылки, поделиться): border, radius 8px, hover → accent fill.

## 8. i18n
- Все тексты, включая описания проектов и названия секций, через объект `i18n`.
- Новый проект → новые ключи `proj.{index}.{section}` в обоих языках.
- Ключи переиндексируются при изменении порядка проектов.

## 9. Тестирование
- После любых изменений: `python3 test_runner.py`.
- Цель: 100% прохождение (97/97).
- Если тест падает — либо баг, либо нужно обновить тест под новое поведение.
