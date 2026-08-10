# Architecture — Ksenia Portfolio (ksu)

> Lightweight description of how the site is structured and how data flows.
> Companion to `docs/DECISIONS.md` (why) and `TEST_PLAN.md` (how it is proven).

## Overview

Single-page static app: `index.html` + `script.js` render everything client-side.
Server-side there is no logic — GitHub Pages (or nginx in Docker) serves files.

```
┌────────────────────────────────────────────────────────┐
│  index.html                                            │
│  ├─ head: SEO (meta/OG/Twitter/JSON-LD), PWA manifest  │
│  ├─ sections: nav, hero, about, works, contact, footer │
│  └─ shell: lightbox, project overlay, share button     │
│                                                        │
│  script.js ── data: projects[], i18n.en/ru             │
│  │            renders: cards, overlays, nav dropdown   │
│  │            state: lang, theme, currentProject       │
│  │            routes: #project-N hash                   │
│  └── style.css ── layout, responsive                   │
│       └── css/tokens.css ── design tokens (dark/light) │
└────────────────────────────────────────────────────────┘
```

## Components

| Component | Responsibility |
|-----------|----------------|
| `index.html` | Static shell, SEO meta, JSON-LD (Person + ItemList 11 projects) |
| `script.js` | i18n, theme toggle, project cards, project overlay, lightbox, share, nav dropdown, scroll reveal, hash routing |
| `style.css` | Layout, responsive (9 media queries), themes via tokens |
| `css/tokens.css` | Single source of truth: colors, spacing, fonts; dark (`:root`) + light (`[data-theme="light"]`) |
| `manifest.json` | PWA: name, icons 192/512/maskable, standalone, theme/background colors |
| `project-N/` | Static sub-pages per project (11) |
| `portfolio/` | Source images per project |
| `flipbook/` | Photobook flipbook viewer (`pdflipbook.js`) |
| `references/` | Standalone designer-references sub-project |

## Data flow

1. **Boot** — `buildWorks()` renders project cards from `projects[]`; `applyLanguage()` fills `[data-i18n]` texts.
2. **Open project** — `openProject(i)` → `getProjectHTML(i)` (switch/case per project: sections + galleries) → `overlayContent.innerHTML`, updates OG/canonical, sets `#project-N` hash.
3. **Lightbox** — collects images from the overlay's `.proj-gallery`, navigates prev/next.
4. **Language/theme** — toggles persist in `localStorage` (`lang`, `theme`); language re-renders cards + nav.
5. **Deep link** — on load/hashchange `#project-N` opens the overlay directly.

## Deployment

- **GitHub Pages:** `.github/workflows/deploy.yml`; content from repo root; domain `https://bestdeejay-design.github.io/ksu/`.
- **Local Docker:** `nginx:alpine` on 80; compose maps `8765:80` (OrbStack domain `portfolio.ksu.orb.local`).

## Quality gates

- `test_runner.py` — 97 Playwright checks (cards, overlays, i18n, theme, responsive, nav, SEO/PWA, console, content files).
- `artifacts/` — periodic skill-run reports (SEO, Lighthouse, code review, repo hygiene, contract checks) documenting known issues and fixes.