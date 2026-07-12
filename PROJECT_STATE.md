# Project State: KSU Portfolio

> Generated 2026-07-12. Full analysis of index.html, style.css, script.js and related files.

---

## 1. File Structure

### Root

| Path | Type | Purpose |
|------|------|---------|
| `index.html` | SPA entry | Nav, hero, about, works, references, contact, footer, lightbox, overlay |
| `style.css` | Styles | 1246 lines: theme, layout, responsive, dropdown, lightbox, share |
| `script.js` | JS | 882 lines: i18n, theme, projects, overlay, lightbox, nav dropdown, scroll reveal, share |
| `manifest.json` | PWA manifest | name: "Ксения", standalone, icons (relative paths) |
| `robots.txt` | SEO | Allows all, points to sitemap.xml |
| `sitemap.xml` | SEO | Root + 11 project-N/ pages |
| `og-image.png` | OG default | 1200×630 |
| `og-0.jpg…og-10.jpg` | OG per-project | Generated previews |
| `Dockerfile` | Infra | nginx:alpine, serves static on port 80 |
| `docker-compose.yml` | Infra | Port 8765→80, OrbStack domain `portfolio.ksu.orb.local` |
| `test_runner.py` | Tests | Playwright e2e, 99 checks |
| `rename.sh` | Tool | One-time Cyrillic→Latin filename migration |
| `.nojekyll` | GH Pages | Disables Jekyll |
| `.gitignore` | Git | Ignores `.DS_Store` |
| `CONTENT_MAP.md` | Doc | Original→current filename mapping (113 lines) |
| `CONTENT_PLAN.md` | Doc | Content planning |
| `DESIGN_RULES.md` | Doc | Design rules |
| `DESIGN_SYSTEM.md` | Doc | Design system spec |
| `IMPLEMENTATION_PLAN.md` | Doc | Implementation plan |
| `TEST_PLAN.md` | Doc | Test plan summary |
| `portfolio/INVENTORY.md` | Doc | Portfolio media inventory (143 lines) |

### Subdirectories

| Path | Contents |
|------|----------|
| `icons/` | 9 files: 16×16…512×512, apple-touch-icons, favicon |
| `portfolio/` | digital-drawing, game, moodboards, packaging, photobook, poster-cat-day, retouch, stickers |
| `flipbook/` | Standalone interactive flipbook (index.html + pdflipbook.js) |
| `project-0/…project-10/` | Standalone SEO/deep-link pages for each project |
| `проект фотокниги "3:00"/` | Original Cyrillic source files (kept alongside) |
| `.github/workflows/` | deploy.yml — GH Actions: build + deploy to Pages on push to main |

---

## 2. HTML Nav Structure

### Full nav markup (index.html lines 88–118)

```html
<nav class="nav">
  <div class="nav__inner">
    <a href="#" class="nav__logo" data-i18n="nav.logo">Ksenia</a>
    <input type="checkbox" id="menu-toggle" class="menu-toggle" hidden />
    <label for="menu-toggle" class="menu-btn" aria-label="Menu">
      <span></span><span></span><span></span>
    </label>
    <div class="nav__links">
      <a href="#about" class="nav__link" data-i18n="nav.about"
         onclick="document.getElementById('menu-toggle').checked=false">About</a>

      <div class="nav__item nav__item--dropdown">
        <a href="#works" class="nav__link nav__link--works" data-i18n="nav.works">Works</a>
        <button class="nav__dropdown-toggle" aria-label="Toggle projects" aria-expanded="false">
          <svg class="nav__dropdown-arrow" width="10" height="6" viewBox="0 0 10 6"
               fill="none" stroke="currentColor" stroke-width="1.5"
               stroke-linecap="round" stroke-linejoin="round">
            <polyline points="1,1 5,5 9,1"/>
          </svg>
        </button>
        <div class="nav__dropdown" id="nav-dropdown">
          <div class="nav__dropdown-list" id="nav-dropdown-list"></div>
          <a href="#" class="nav__dropdown-item nav__dropdown-item--cta" id="nav-dropdown-cta">
            <span class="nav__dropdown-cta-icon">+</span>
            <span class="nav__dropdown-cta-text" data-i18n="nav.startProject">Start Your Project</span>
          </a>
        </div>
      </div>

      <a href="#references" class="nav__link" data-i18n="nav.inspiration"
         onclick="document.getElementById('menu-toggle').checked=false">Inspiration</a>
      <a href="#contact" class="nav__link" data-i18n="nav.contact"
         onclick="document.getElementById('menu-toggle').checked=false">Contact</a>
      <button class="lang-toggle" id="lang-toggle" data-i18n="nav.langBtn">RU</button>
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
        <svg class="theme-toggle__icon theme-toggle__sun" .../>
        <svg class="theme-toggle__icon theme-toggle__moon" .../>
      </button>
    </div>
  </div>
</nav>
```

### Inline onclick handlers

| Element | Handler | Purpose |
|---------|---------|---------|
| `a[href="#about"]` | `menu-toggle.checked=false` | Close burger menu on link click |
| `a[href="#references"]` | `menu-toggle.checked=false` | Close burger menu |
| `a[href="#contact"]` | `menu-toggle.checked=false` | Close burger menu |
| `a[href="#works"]` | **None** | Handled by JS listener |

---

## 3. CSS Nav & Dropdown Selectors

### Global nav selectors

| Selector | Key properties |
|----------|----------------|
| `.menu-toggle` | `display:none` |
| `.menu-btn` | `display:none; z-index:1001` (shown on mobile) |
| `.menu-btn span` (×3) | Hamburger lines |
| `.menu-toggle:checked ~ .menu-btn span:nth-child(*)` | Transform to X |
| `.nav` | `position:fixed; top:0; z-index:1000; backdrop-filter:blur(20px)` |
| `.nav__inner` | `max-width:1440px; display:flex; justify-content:space-between` |
| `.nav__logo` | `font-family:Unbounded; font-size:18px` |
| `.nav__links` | `display:flex; gap:20px; align-items:center` |
| `.nav__link` | `font-size:13px; letter-spacing:.1em; text-transform:uppercase; position:relative` |
| `.nav__link::after` | `width:0→100%` on hover (accent underline) |

### Dropdown selectors

| Selector | Key properties | @media |
|----------|----------------|--------|
| `.nav__item--dropdown` | `position:relative; display:flex; align-items:center; gap:4px` | global |
| `.nav__item--dropdown::after` | `position:absolute; top:100%; left:-30px; right:-30px; height:28px; z-index:1001` — hover bridge | global |
| `.nav__dropdown-toggle` | `width:20px; height:20px; display:flex; color:var(--text-muted)` | global |
| `.nav__dropdown-toggle:hover` | `color:var(--text)` | global |
| `.nav__dropdown-toggle[aria-expanded="true"] .nav__dropdown-arrow` | `transform:rotate(180deg)` | global |
| `.nav__dropdown` | `position:absolute; top:calc(100% + 16px); left:50%; transform:translateX(-50%) translateY(-8px); min-width:360px; opacity:0; pointer-events:none; border-radius:16px; backdrop-filter:blur(24px); z-index:1002` | global |
| `.nav__dropdown-toggle` | `display:none` | `min-width:769px` |
| `.nav__item--dropdown:hover .nav__dropdown` | `opacity:1; pointer-events:auto; transform:translateX(-50%) translateY(0)` | `min-width:769px` |
| `.nav__dropdown-toggle[aria-expanded="true"] + .nav__dropdown` | same as above | `min-width:769px` |
| `.nav__dropdown-list` | `display:flex; flex-direction:column; gap:2px` | global |
| `.nav__dropdown-item` | `display:flex; align-items:center; gap:12px; padding:10px 14px; border-radius:8px` | global |
| `.nav__dropdown-item:hover` | `background:var(--tag-hover-bg)` | global |
| `.nav__dropdown-item + .nav__dropdown-item` | `border-top:1px solid var(--border)` | global |
| `.nav__dropdown-num` | `font-family:Unbounded; font-size:10px; color:var(--text-muted); min-width:24px` | global |
| `.nav__dropdown-title` | `font-size:13px; font-weight:500; color:var(--text)` | global |
| `.nav__dropdown-item:hover .nav__dropdown-title` | `color:var(--accent)` | global |
| `.nav__dropdown-item--cta` | `margin-top:8px; border:1px solid var(--accent) !important; justify-content:center; font-family:Unbounded; font-size:12px` | global |
| `.nav__dropdown-item--cta:hover` | `background:var(--accent); color:#fff` | global |
| `.nav__dropdown-cta-icon` | `font-size:16px; font-weight:400; line-height:1` | global |

### Mobile accordion (`@media max-width:768px`)

| Selector | Key properties |
|----------|----------------|
| `.nav__item--dropdown` | `display:block; text-align:center` |
| `.nav__item--dropdown::after` | `display:none` |
| `.nav__dropdown-toggle` | `display:none` |
| `.nav__dropdown` | `position:static; max-height:0; overflow:hidden; transition:max-height .4s` |
| `.nav__item--dropdown.open .nav__dropdown` | `max-height:600px; padding:4px 0` |
| `.nav__dropdown-toggle[aria-expanded="true"] + .nav__dropdown` | same (redundant fallback) |
| `.nav__dropdown-item` | `justify-content:center; padding:8px 0; border-bottom:1px solid var(--border)` |
| `.nav__dropdown-item:last-child` | `border-bottom:none` |
| `.nav__dropdown-item--cta` | `border:1px solid var(--accent) !important; border-radius:8px; margin:8px auto 0` |
| `.nav__dropdown-list` | `gap:0` |
| `.nav__dropdown-num` | `display:none` |

### Mobile nav drawer (`@media max-width:768px`, second block)

| Selector | Key properties |
|----------|----------------|
| `.nav` | `padding:12px 20px` |
| `.menu-btn` | `display:flex` |
| `.nav__links` | `position:fixed; top:0; right:-100%; width:280px; height:100vh; flex-direction:column; justify-content:center; align-items:center; gap:28px; padding:80px 40px; backdrop-filter:blur(30px)` |
| `.menu-toggle:checked ~ .nav__links` | `right:0` |
| `.nav__link` | `font-size:15px; letter-spacing:.15em` |

---

## 4. JS Functions

| # | Function | Lines | What it does | Calls | Called by |
|---|----------|-------|-------------|-------|-----------|
| 1 | `applyLanguage()` | 254–263 | Sets `<html lang>`, updates all `[data-i18n]` innerHTML | — | lang click, module init, rebuildLangContent |
| 2 | `rebuildLangContent()` | 272–287 | Rebuilds refs, resources, works, nav projects | buildReferences, buildResourceSection, buildWorks, **buildNavProjects** | lang click |
| 3 | `generateAbstractSVG(index, colors)` | 316–329 | Returns encoded SVG string | — | **NEVER CALLED (dead)** |
| 4 | `buildWorks()` | 331–367 | Creates 11 work cards + 1 CTA card with click→openProject | — | module init, rebuildLangContent |
| 5 | `buildReferences()` | 373–392 | Creates ref category cards with platform links | — | module init, rebuildLangContent |
| 6 | `buildResourceSection(id, items)` | 396–409 | Creates resource link cards | — | module init ×2, rebuildLangContent ×2 |
| 7 | `updateOG(index)` | 424–442 | Sets OG/Twitter meta tags for project | — | openProject |
| 8 | `resetOG()` | 446–457 | Resets OG meta to defaults | — | closeProject |
| 9 | `shareProject(index)` | 459–475 | Web Share / clipboard copy | — | inline onclick in getProjectHTML, share-btn-fixed click |
| 10 | `openProject(index)` | 477–489 | Opens overlay, locks scroll, updates URL hash + OG | getProjectHTML, updateOG | work-card click, nav dropdown click, handleHash |
| 11 | `closeProject()` | 491–499 | Closes overlay, restores scroll, resets OG | resetOG | overlayClose click, overlay backdrop click, Escape keydown |
| 12 | `handleHash()` | 511–518 | Parses `#project-N` hash, opens project (300ms delay) | openProject | DOMContentLoaded, hashchange |
| 13 | `openNewProject()` | 522–565 | Opens CTA overlay | — | CTA card click, nav-dropdown-cta click |
| 14 | `getProjectHTML(index)` | 567–701 | Generates project detail HTML string | i18n, projects, gall(), section() | openProject |
| 15 | `openLightbox(src, projectIdx)` | 713–722 | Opens lightbox with all images from overlay | showLightboxImage | inline onclick in gall() |
| 16 | `showLightboxImage()` | 724–731 | Updates lightbox image, counter, nav buttons | — | openLightbox, lbNav |
| 17 | `closeLightbox()` | 733–736 | Closes lightbox, restores scroll | — | lbClose click, lb backdrop click, Escape keydown |
| 18 | `lbNav(dir)` | 738–741 | Cycles lightbox index | showLightboxImage | lbPrev/lbNext click, arrow keys |
| 19 | `buildNavProjects()` | 755–786 | Builds dropdown list (All Projects + 11 projects) | closeNavDropdown, openProject | module init, rebuildLangContent |
| 20 | `closeNavDropdown()` | 788–791 | Resets aria-expanded + .open on all dropdowns | — | project clicks, outside click, Escape, CTA click |
| 21 | `shareMain()` | 864–878 | Shares/copies main URL | — | share-btn-fixed click (when currentProject < 0) |

### Locally defined helpers (inside functions)

| Function | Defined in | Purpose |
|----------|------------|---------|
| `_(key)` | `getProjectHTML` (line 568) | Shorthand for `i18n[lang][key]` |
| `section(title, html)` | `getProjectHTML` (line 571) | Wraps content in `.proj-section` |
| `gall(srcs, cols=2)` | `getProjectHTML` (line 572) | Generates gallery grid with lightbox onclick |

---

## 5. Event Handlers

| Element | Event | Handler | Attached | Frequency |
|---------|-------|---------|----------|-----------|
| `#lang-toggle` | click | λ `lang=…; rebuildLangContent()` | module level | once |
| `#theme-toggle` | click | λ toggle theme attr + storage | module level | once |
| `.work-card` (×11) | click | λ `openProject(i)` | in `buildWorks()` | every rebuild |
| `.work-card--cta` | click | `openNewProject` | in `buildWorks()` | every rebuild |
| `#overlay-close` | click | `closeProject` | module level | once |
| `#project-overlay` | click | λ backdrop check | module level | once |
| `document` | keydown | λ Escape→closeProject | module level | once |
| `document` | DOMContentLoaded | `handleHash` | module level | once |
| `window` | hashchange | `handleHash` | module level | once |
| `#lightbox-close` | click | `closeLightbox` | module level | once |
| `#lightbox` | click | λ backdrop check | module level | once |
| `#lightbox-prev` | click | `()=>lbNav(-1)` | module level | once |
| `#lightbox-next` | click | `()=>lbNav(1)` | module level | once |
| `document` | keydown | λ Escape/arrows for lightbox | module level | once |
| `document` | click | λ outside→closeNavDropdown | module level | once |
| `.nav__dropdown-toggle` | click | λ toggle aria-expanded + .open | module level | once |
| `.nav__link--works` | click | λ mobile→toggle / desktop→close menu | module level | once |
| `document` | keydown | λ Escape→closeNavDropdown | module level | once |
| `#nav-dropdown-cta` | click | λ openNewProject + close | module level | once |
| `#share-btn-fixed` | click | λ shareProject or shareMain | module level | once |
| `#nav-dropdown-list a` (×12) | click | λ openProject / close + menu-toggle.checked=false | in `buildNavProjects()` | every rebuild |

**Note:** Three separate `document` `keydown` listeners exist (overlay, lightbox, dropdown). Each checks its own guard. If two are active simultaneously, Escape fires all three.

---

## 6. Global Variables

| Variable | Type | Init value | Modified | Purpose |
|----------|------|-----------|----------|---------|
| `SITE_URL` | const | `'https://bestdeejay-design.github.io/ksu'` | never | Base URL for OG, sharing, canonicals |
| `i18n` | const | `{en: …, ru: …}` | never | Translation dictionary |
| `refsData` | const | `{en: […], ru: […]}` | never | Reference categories |
| `specialResources` | const | `[…]` | never | Resource links |
| `boardResources` | const | `[…]` | never | Board links |
| `lang` | let | `localStorage.getItem('lang')⎮⎮'en'` | line 266 | Current language |
| `langBtn` | const | DOM ref | never | Language toggle |
| `html` | const | `document.documentElement` | never | Root for theme attribute |
| `toggle` | const | DOM ref | never | Theme toggle |
| `saved` | const | `localStorage.getItem('theme')⎮⎮'dark'` | never | Initial theme |
| `projects` | const | 11 project objects | never | Portfolio data |
| `overlay` | const | DOM ref | never | Project overlay |
| `overlayContent` | const | DOM ref | never | Overlay inner |
| `overlayClose` | const | DOM ref | never | Close button |
| `scrollPosition` | let | `0` | `openProject`, `openNewProject`, `closeProject` | Remember scroll |
| `currentProject` | let | `-1` | `openProject`→index, `closeProject`→-1, `openNewProject`→-1 | Track open project |
| `DEFAULT_DESC` | const | string | never | Fallback OG desc |
| `lbImages` | let | `[]` | `openLightbox` | Lightbox image URLs |
| `lbIndex` | let | `0` | `openLightbox`, `lbNav` | Current image index |
| `lb` | const | DOM ref | never | Lightbox container |
| `lbImg` | const | DOM ref | never | Lightbox image |
| `lbCounter` | const | DOM ref | never | Counter |
| `lbClose` | const | DOM ref | never | Close button |
| `lbPrev` | const | DOM ref | never | Prev button |
| `lbNext` | const | DOM ref | never | Next button |

---

## 7. Dead Code / Suspicious

| Item | Location | Why dead |
|------|----------|----------|
| `generateAbstractSVG()` | script.js:316–329 | Defined but **never called**. Vestigial — `buildWorks()` uses real cover images |
| `.work-card[data-interactive]` CSS | style.css:372–383 | Styles exist for `[data-interactive]` but no JS ever sets this attribute |
| `.wc-12` class | style.css:442 | 11 projects → `wc-1`…`wc-11`. `wc-12` never used |
| `.nav__dropdown-toggle` click handler | script.js:797–809 | Button is `display:none` on ALL viewports. The actual toggle is via `.nav__link--works` click |
| `.open` class on desktop | script.js:808 | JS adds `.open` on desktop too, but no CSS rules match `.nav__item--dropdown.open .nav__dropdown` at ≥769px |
| `.proj-chars`, `.proj-char`, `.proj-weights` etc. | style.css:941–998 | Styles for unused project layout types — only gallery layouts exist |
| `.wc-*` hover transforms | style.css:427–442 | 12 `.wc-*` classes with subtly different hover effects. All 12 defined but only 11 used |
| `flipbook/` directory | — | Standalone flipbook, not linked from main SPA (only from project-9's standalone page) |

---

## 8. Bugs & Oddities

### Fragile / Potentially Broken

1. **Three separate `keydown` listeners** — scripts.js:506, 747, 827. Each handles Escape independently. If overlay + dropdown are both open, pressing Escape fires all three. Order depends on attachment order. Not a crash but fragile.

2. **Lightbox image matching** — script.js:717. `findIndex(u => u.includes(src.replace(/^.*\//,'')))` matches by filename only. Two images named `mockup.jpg` in different directories could cause wrong index.

3. **Inline onclick in `gall()`** — script.js:572. Image URL `s` is interpolated directly into `onclick="openLightbox('${s}')"`. If any URL contained a single quote, the handler would break. Currently safe (hardcoded paths).

4. **Work card `onerror`** — script.js:341. Uses CSS var string `var(--card-bg)` inline. Works in modern browsers but unconventional.

5. **`works-count` hardcoded to `11`** — index.html:192. Not computed from `projects.length`. Would be wrong if array changed.

### Styling / Behavior

6. **`.nav__dropdown-toggle` invisible everywhere** — `display:none` on both desktop and mobile. Its click handler is dead code. The toggle works via `hover` (desktop) and `.nav__link--works` click (mobile).

7. **`.open` class useless on desktop** — JS adds `.open` on desktop, but the desktop CSS only uses `:hover` and `[aria-expanded="true"] +`. `.nav__item--dropdown.open .nav__dropdown` only matches in the mobile media query.

8. **`menu-toggle.checked = false` scattered in 4+ places** — inline onclicks (lines 96, 112, 113) and JS (lines 765, 782, 823, 835). High coupling to checkbox pattern.

9. **Dockerfile serves entire source tree** — includes `.gitignore`, `rename.sh`, `*.md` docs, and Cyrillic source folder in production image.

---

## 9. Dropdown Behavior — Step by Step

### Desktop (≥769px)

| Trigger | What happens |
|---------|-------------|
| **Hover over "Works"** | `.nav__item--dropdown:hover .nav__dropdown` → opacity:1, pointer-events:auto, translateY(0). 300ms transition. |
| **Move cursor down to dropdown** | `::after` pseudo-element (28px height, -30px left/right) bridges the 16px gap, keeping parent `:hover` active. |
| **Mouse leave dropdown area** | Reverse transition: opacity→0, pointer-events→none, translateY(-8px). |
| **Click "Works" link** | Desktop branch: `menu-toggle.checked = false` (no-op). Dropdown does NOT toggle on click — only hover. |
| **Click toggle button** | Button is `display:none` — impossible to click. |
| **Escape** | `closeNavDropdown()` → removes aria-expanded + .open class. Desktop CSS ignores .open, aria-expanded rule still works but button is invisible (state changes, no visible effect). |
| **Click outside** | `closeNavDropdown()` called. No visible effect. |
| **Resize to ≤768px** | Media query changes `.nav__dropdown` to static/accordion layout. |

### Mobile (≤768px)

| Trigger | What happens |
|---------|-------------|
| **Open burger menu** | `menu-toggle:checked` → `.nav__links` slides in from right. |
| **Tap "Works"** | JS handler: `e.preventDefault()`, toggle `aria-expanded` on hidden button, toggle `.open` on parent. CSS: `max-height: 0→600px` (400ms), padding expands. |
| **Tap "Works" again** | Same handler closes accordion (reverse transition). |
| **Tap a project** | `openProject(i)` → overlay opens. `closeNavDropdown()` + `menu-toggle.checked=false` → accordion collapses + burger menu slides out. |
| **Tap "All Projects"** | `closeNavDropdown()` + `menu-toggle.checked=false`. Scrolls to `#works` via `href="#works"`. |
| **Tap "Start Your Project"** | `openNewProject()` → CTA overlay. `closeNavDropdown()` + `menu-toggle.checked=false`. |
| **Tap outside burger menu** | Document click handler → `closeNavDropdown()`. Menu stays open (controlled by checkbox, not JS). |
| **Escape** | `closeNavDropdown()`. Menu stays open (controlled by checkbox). |
| **Switch language** | `rebuildLangContent()` → `buildNavProjects()` → list rebuilt. Dropdown stays open if it was open. |
