# Meta Audit Report — ksu (frontend-perfection)

**Date:** 2026-08-10  **Tool:** meta_audit.py

**Result: 15/18 checks passed**

| # | Check | Status | Detail |
|---|-------|--------|--------|
| 1 | meta:title | OK | title tag: 'Ksenia — graphic designer' |
| 2 | meta:title-length | OK | title length 25 (limit 60) |
| 3 | meta:description | OK | meta description: 'Portfolio of Ksenia — graphic designer. Identity, branding, typography, UI/UX, i' |
| 4 | meta:description-length | OK | description length 101 (limit 160) |
| 5 | meta:canonical | OK | canonical: https://bestdeejay-design.github.io/ksu/ |
| 6 | meta:og:title | OK | og:title OK |
| 7 | meta:og:image | OK | og:image OK |
| 8 | meta:og:size | OK | og:image 1200x630 (standard 1200x630; crop-safe ~640px content zone) |
| 9 | meta:twitter:card | OK | twitter:card OK |
| 10 | meta:json-ld | OK | JSON-LD structured data found |
| 11 | meta:robots | OK | robots: index, follow |
| 12 | meta:sitemap-link | FAIL | sitemap link not referenced |
| 13 | headings:single-h1 | OK | 1 h1 tag(s) |
| 14 | headings:order | OK | h1 → h2 → h2 → h2 |
| 15 | tokens:raw-hex | FAIL | 6 raw hex outside token block: #FF2D55@22100, #FF2D55@22466, #F5F0EB@33685, #1A1A1A@33704, #1A1A1A@3 |
| 16 | contrast:wcag-aa | OK | no explicit fg/bg color pairs found (cannot verify) |
| 17 | adaptive:scroll-padding | FAIL | position:fixed found — MISSING scroll-padding-top (anchors hide under header) |
| 18 | adaptive:media-queries | OK | 9 media queries |
