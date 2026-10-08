<p align="center">
  <a href="https://github.com/bestdeejay-design" target="_blank">
    <img src="assets/header.svg" alt="header" />
  </a>
</p>

# Ksenia
## Graphic Designer Portfolio

[![Pages](https://img.shields.io/badge/GitHub%20Pages-live-2ea44f)](https://dajet.ru/)
[![PWA](https://img.shields.io/badge/PWA-ready-9b59b6)](manifest.json)

Portfolio of **Ksenia**, a graphic designer: identity, branding, typography,
UI/UX, illustration, posters, packaging, and photo retouching.

**Live:** https://dajet.ru/

## Contents

- [What's inside](#whats-inside)
- [Local development](#local-development)
- [Deployment](#deployment)
- [Projects](#projects)
- [Structure](#structure)
- [Testing](#testing)
- [License](#license)

## What's inside

- **Static SPA** — plain HTML/CSS/JS, no build step, no framework
- **PWA** — installable, standalone, offline-capable (`manifest.json`, icons)
- **i18n** — EN/RU with language persistency
- **Dark/light themes** — CSS custom properties in `css/tokens.css` (single source of truth)
- **17 project pages** + flipbook + designer references sub-project
- **SEO** — Open Graph, Twitter Card, JSON-LD (Person + ItemList), sitemap.xml, canonical
- **17 generated OG images** (`og-0.jpg` … `og-16.jpg`) + default `og-2026-08-10.png`

## Local development

```bash
# serve the repo root (any static server works)
python3 -m http.server 8000
# open http://localhost:8000
```

Or with Docker:

```bash
docker compose up -d
# http://localhost:8765  (or portfolio.ksu.orb.local on OrbStack)
```

## Deployment

GitHub Pages: push to `main`, Pages builds from the repository root.
Served at `https://dajet.ru/`.

## Projects

| # | Project | Key skills |
|---|---------|------------|
| 1 | Moodboards Collection | Interior concepts, offices, cafes, kitchens, cosmetics |
| 2 | Packaging Development | Logo variations, mockups, storefront, concept |
| 3 | Cat Day Poster | Poster, ticket, logo, mockups |
| 4 | Platformer Game Design | Level backgrounds, character, UI screens, storyboard |
| 5 | Procreate Portraits | Digital portrait illustrations |
| 6 | Popular Blondes | Postcard portrait series |
| 7 | Character & Comic | Character design, comic strips |
| 8 | Sticker Character | Expressions & poses for a sticker pack |
| 9 | Wall Art | Fantasy digital paintings for interiors |
| 10 | Photobook «3:00» | Night atmosphere photobook (+ flipbook viewer) |
| 11 | Photo Retouching | Before/after grading timeline |
| 12 | SS-BMW — BMW service | Landing page, logo, UI/UX, responsive |
| 13 | Runskaya farm | Website, logo, brand identity, content |
| 14 | LOVII — local economy platform | Logo, brand identity, website, fintech |
| 15 | PAFFO — coat atelier | Website, design system, logo, dual themes |
| 16 | Dajet Browser | Product design, UI/UX, macOS app interface |
| 17 | Kot-Arbuz — the watermelon cat | Character design, layered sprite pack, app states |

## Structure

```
.
├── index.html            # single page: nav, hero, about, works, contact
├── script.js             # i18n, theme, projects, overlay, lightbox, share
├── style.css             # layout, responsive (tokens in css/tokens.css)
├── css/tokens.css        # design tokens, themes (dark/light)
├── manifest.json         # PWA manifest
├── project-0/..project-16/  # static sub-pages per project
├── portfolio/            # source images per project
├── flipbook/             # photobook flipbook viewer
├── references/           # designer references sub-project
├── icons/                # favicon, apple-touch, PWA icons
├── og-2026-08-10.png, og-0..16.jpg  # social previews
├── sitemap.xml, robots.txt
├── Dockerfile, docker-compose.yml
└── test_runner.py        # Playwright e2e, 97 checks
```

## Testing

```bash
pip install playwright && playwright install chromium
python3 test_runner.py
```

97 automated checks: cards, overlays, i18n, theme, responsiveness, navigation,
SEO/PWA, console errors, content files. Full suite must pass before publishing.

## License

[MIT](LICENSE) © 2026 Ksenia

<p align="center">
  <a href="https://github.com/bestdeejay-design" target="_blank">
    <img src="assets/footer.svg" alt="footer" />
  </a>
</p>
