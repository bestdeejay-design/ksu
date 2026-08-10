# Architecture Decisions — Ksenia Portfolio (ksu)

> Record of significant technical decisions (lightweight ADR, L1 style).
> Format: Status (adopted/superseded) · Context · Decision · Consequences.

---

## ADR-001: Static SPA without a build step

**Status:** adopted (2025)

**Context:** The portfolio is content-driven (11 projects, images), has no
backend, no auth, no dynamic per-user data. The author edits content directly.

**Decision:** A single `index.html` + `script.js` + `style.css`, no framework,
no bundler, no npm. Content is data in JS (`projects[]`, `i18n`), rendered on
the client.

**Consequences:**
- Zero build/deploy friction; GH Pages serves the repo root as-is.
- Content edits happen in `.js` data structures, not markup.
- No SSR — client-only rendering (acceptable: static content, indexable
  pages exist per-project and JS-render is lightweight).

---

## ADR-002: Design tokens in `css/tokens.css` as single source of truth

**Status:** adopted (2025)

**Context:** Theme switching (dark/light) and consistent colors across 1000+
lines of CSS require a single place to define values.

**Decision:** All colors/spacing/typography live as CSS custom properties in
`:root` (dark) and `[data-theme="light"]`; component styles only reference
`var(--token)`.

**Consequences:**
- Theme toggle is a one-attribute switch (`data-theme` on `<html>`).
- No raw hex colors in component CSS (enforced by audit).

---

## ADR-003: i18n via client-side dictionary

**Status:** adopted (2025)

**Context:** The site is EN/RU; the author wants to keep both languages in
sync without a translation service.

**Decision:** Every user-visible string lives in `i18n.en` / `i18n.ru` in
`script.js`; the DOM uses `[data-i18n]` keys; `lang` persists in
`localStorage`.

**Consequences:**
- Language switch is instant, no reload.
- New strings require edits in two dictionaries (manual sync; acceptable at
  this scale).

---

## ADR-004: PWA manifest + icons, no service worker

**Status:** adopted (2025)

**Context:** The site stands alone; the goal is installability on mobile.

**Decision:** Provide `manifest.json`, full icon set (192/512, maskable,
apple-touch). A service worker is intentionally not registered (static GH
Pages + small size; caching handled by the browser/CDN).

**Consequences:**
- Installable, standalone, theme-colored status bar.
- No offline-first guarantee beyond the browser cache.

---

## ADR-005: Static Docker image (nginx:alpine) for local preview

**Status:** adopted (2025)

**Context:** Local preview must match production (GH Pages) as closely as
possible; some users run OrbStack.

**Decision:** `Dockerfile` = `nginx:alpine` serving static files on port 80;
`docker-compose.yml` maps `8765:80` and tags the OrbStack domain
`portfolio.ksu.orb.local`.

**Consequences:**
- `docker compose up -d` → production-like preview.
- No app server logic to maintain.

---

## ADR-006: e2e coverage with Playwright (`test_runner.py`)

**Status:** adopted (2026)

**Context:** A static site with JS-rendered content needs regression protection
(cards, overlays, i18n, themes, responsiveness).

**Decision:** A single Python script drives Playwright and runs 97 checks
against the served site.

**Consequences:**
- Strong regression net; full suite must pass before publishing.
- Dev environment requires `playwright` + browsers (documented in README).