commit-lint report
==================
repo: .
generated: 2026-08-10T15:59:34
commits_analyzed: 50
clean: 8
with_violations: 42

[FAIL] 2e656f7 refactor: вынести референсы в references/ и удалить мёртвый код
         type: refactor | scope: (none) | breaking: no
         subject: refactor: вынести референсы в references/ и удалить мёртвый код
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 79e4189 fix: единый источник токенов, доступность и уборка проекта
         type: fix | scope: (none) | breaking: no
         subject: fix: единый источник токенов, доступность и уборка проекта
         violations:
           - subject-too-long: subject is longer than the configured maximum
           - body-line-too-long: body line is longer than the configured maximum
[FAIL] a51d7c8 fix: flipbook принудительно светлая тема, адаптив nav, --fb-paper:#fff
         type: fix | scope: (none) | breaking: no
         subject: fix: flipbook принудительно светлая тема, адаптив nav, --fb-paper:#fff
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 10561a4 fix: читать --fb-paper из this.book (в DOM всегда), а не из канваса (offscreen = пусто → #fff)
         type: fix | scope: (none) | breaking: no
         subject: fix: читать --fb-paper из this.book (в DOM всегда), а не из канваса (offscreen = пусто → #fff)
         violations:
           - subject-too-long: subject is longer than the configured maximum
[OK]   80fb302 fix: канвас флипбука читает --fb-paper вместо #fff
[OK]   0795870 fix: фон book-wrap тоже под тему
[FAIL] 036fcba fix: ровная сетка галерей — aspect-ratio + object-fit:cover
         type: fix | scope: (none) | breaking: no
         subject: fix: ровная сетка галерей — aspect-ratio + object-fit:cover
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] a8a4685 fix: фон страниц книги (#fb-paper) = var(--bg) на тёмной теме
         type: fix | scope: (none) | breaking: no
         subject: fix: фон страниц книги (#fb-paper) = var(--bg) на тёмной теме
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 7bec506 fix: возвращены превью разворотов в проект Фотокнига
         type: fix | scope: (none) | breaking: no
         subject: fix: возвращены превью разворотов в проект Фотокнига
         violations:
           - subject-too-long: subject is longer than the configured maximum
[OK]   eba36af fix: фон книги (#fb-paper) адаптируется под тему
[FAIL] 0ace40a fix: кнопка Листать через .proj-pdf-link (дизайн-система)
         type: fix | scope: (none) | breaking: no
         subject: fix: кнопка Листать через .proj-pdf-link (дизайн-система)
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 32b5933 feat: флипбук как отдельная страница с дизайном портфолио + кнопка Листать
         type: feat | scope: (none) | breaking: no
         subject: feat: флипбук как отдельная страница с дизайном портфолио + кнопка Листать
         violations:
           - subject-too-long: subject is longer than the configured maximum
           - body-line-too-long: body line is longer than the configured maximum
[FAIL] 09f350a feat: PDFlipbook для фотокниги; references скрыты
         type: feat | scope: (none) | breaking: no
         subject: feat: PDFlipbook для фотокниги; references скрыты
         violations:
           - subject-case: subject must start with a lowercase letter or digit
[FAIL] 1d9d1a7 fix: lightbox — галерея открывается с выбранной картинки (findIndex вместо indexOf)
         type: fix | scope: (none) | breaking: no
         subject: fix: lightbox — галерея открывается с выбранной картинки (findIndex вместо indexOf)
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 0ddc6b7 shapes: новый розовый #F64A8A, лимонный #FFFACD, тиффани #0ABAB5; blend-mode + glow balance
         type: shapes | scope: (none) | breaking: no
         subject: shapes: новый розовый #F64A8A, лимонный #FFFACD, тиффани #0ABAB5; blend-mode + glow balance
         violations:
           - invalid-type: type not in allowed set: feat, fix, docs, style, refactor, test, perf, ci, chore, build, revert
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 1a76614 audit: зафиксированы все исправления этапа 2 + дизайн-токены + контраст
         type: audit | scope: (none) | breaking: no
         subject: audit: зафиксированы все исправления этапа 2 + дизайн-токены + контраст
         violations:
           - invalid-type: type not in allowed set: feat, fix, docs, style, refactor, test, perf, ci, chore, build, revert
           - subject-too-long: subject is longer than the configured maximum
           - body-line-too-long: body line is longer than the configured maximum
[FAIL] bec468e fix: manifest.json пути относительные; P1: скрыта стрелка на десктопе; P2: добавлен 'Все проекты' в аккордеон; P3: убран border-bottom у последнего пункта; hover-мостик для dropdown
         type: fix | scope: (none) | breaking: no
         subject: fix: manifest.json пути относительные; P1: скрыта стрелка на десктопе; P2: добавлен 'Все проекты' в аккордеон; P3: убран border-bottom у последнего пункта; hover-мостик для dropdown
         violations:
           - subject-too-long: subject is longer than the configured maximum
           - header-too-long: full header is longer than the configured maximum
[FAIL] 37da09c fix: mobile nav dropdown — центрирование, клик по Works открывает список, бургер остаётся открытым
         type: fix | scope: (none) | breaking: no
         subject: fix: mobile nav dropdown — центрирование, клик по Works открывает список, бургер остаётся открытым
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] bf61e54 fix: mobile nav dropdown — центрирование, убран номер, чистая вёрстка
         type: fix | scope: (none) | breaking: no
         subject: fix: mobile nav dropdown — центрирование, убран номер, чистая вёрстка
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] ee01ba4 feat: dropdown nav — Works открывает список проектов (десктоп ховер, мобилка аккордеон)
         type: feat | scope: (none) | breaking: no
         subject: feat: dropdown nav — Works открывает список проектов (десктоп ховер, мобилка аккордеон)
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 7e50d9c fix: lightbox collects all project images, not just one section
         type: fix | scope: (none) | breaking: no
         subject: fix: lightbox collects all project images, not just one section
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 2e2dedf feat: photobook case 9 — 11 spreads, 14 photos + PDF; lightbox; share section; About rewrite; 7 tags; menu.jpg; scroll-margin
         type: feat | scope: (none) | breaking: no
         subject: feat: photobook case 9 — 11 spreads, 14 photos + PDF; lightbox; share section; About rewrite; 7 tags; menu.jpg; scroll-margin
         violations:
           - subject-too-long: subject is longer than the configured maximum
           - header-too-long: full header is longer than the configured maximum
[FAIL] 0f52a5d fix: og-0.jpg source changed to kitchen-1.jpg (landscape, better OG preview)
         type: fix | scope: (none) | breaking: no
         subject: fix: og-0.jpg source changed to kitchen-1.jpg (landscape, better OG preview)
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 2dc0b13 fix: og-1.jpg source changed to logo-1-color.jpg (more readable as OG preview)
         type: fix | scope: (none) | breaking: no
         subject: fix: og-1.jpg source changed to logo-1-color.jpg (more readable as OG preview)
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 6dabd2c fix: OG preview — dark bg #0A0A0A, subtle card #141414 at golden ratio, accent #FF2D55 line, image bursts out 7%
         type: fix | scope: (none) | breaking: no
         subject: fix: OG preview — dark bg #0A0A0A, subtle card #141414 at golden ratio, accent #FF2D55 line, image bursts out 7%
         violations:
           - subject-too-long: subject is longer than the configured maximum
           - header-too-long: full header is longer than the configured maximum
           - subject-case: subject must start with a lowercase letter or digit
[FAIL] 1699149 fix: OG preview — full-width gradient backdrop (accent→dark) with right-aligned image + accent border
         type: fix | scope: (none) | breaking: no
         subject: fix: OG preview — full-width gradient backdrop (accent→dark) with right-aligned image + accent border
         violations:
           - subject-too-long: subject is longer than the configured maximum
           - header-too-long: full header is longer than the configured maximum
           - subject-case: subject must start with a lowercase letter or digit
[FAIL] 5bd200b fix: OG preview — golden ratio gradient backdrop (right 38%), image bursts out 7% top/bottom
         type: fix | scope: (none) | breaking: no
         subject: fix: OG preview — golden ratio gradient backdrop (right 38%), image bursts out 7% top/bottom
         violations:
           - subject-too-long: subject is longer than the configured maximum
           - subject-case: subject must start with a lowercase letter or digit
[FAIL] 40a1c43 fix: OG preview images — blurred bg + full image centered (avoids crop on portrait/square covers)
         type: fix | scope: (none) | breaking: no
         subject: fix: OG preview images — blurred bg + full image centered (avoids crop on portrait/square covers)
         violations:
           - subject-too-long: subject is longer than the configured maximum
           - subject-case: subject must start with a lowercase letter or digit
[FAIL] 637f7b7 feat: auto-generate 1200×630 OG preview images (og-N.jpg) for all 11 projects
         type: feat | scope: (none) | breaking: no
         subject: feat: auto-generate 1200×630 OG preview images (og-N.jpg) for all 11 projects
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] f5b1625 fix: share button always visible, z-index 2500 (above overlay), shares project URL when overlay open, main URL otherwise
         type: fix | scope: (none) | breaking: no
         subject: fix: share button always visible, z-index 2500 (above overlay), shares project URL when overlay open, main URL otherwise
         violations:
           - subject-too-long: subject is longer than the configured maximum
           - header-too-long: full header is longer than the configured maximum
[FAIL] dbdd608 feat: fixed floating share button with SVG icon (glassmorphism, bottom-right, appears on overlay open)
         type: feat | scope: (none) | breaking: no
         subject: feat: fixed floating share button with SVG icon (glassmorphism, bottom-right, appears on overlay open)
         violations:
           - subject-too-long: subject is longer than the configured maximum
           - header-too-long: full header is longer than the configured maximum
[FAIL] 39f5200 fix: share /project-N/ instead of /#project-N for proper OG preview in messengers/socials
         type: fix | scope: (none) | breaking: no
         subject: fix: share /project-N/ instead of /#project-N for proper OG preview in messengers/socials
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 7cf1b96 fix: remove guard in closeProject() so CTA overlay closes on X/Escape/backdrop click
         type: fix | scope: (none) | breaking: no
         subject: fix: remove guard in closeProject() so CTA overlay closes on X/Escape/backdrop click
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 16f616c feat: new project CTA card (always last), overlay with brief template & contacts
         type: feat | scope: (none) | breaking: no
         subject: feat: new project CTA card (always last), overlay with brief template & contacts
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 34393f3 feat: static OG pages for each project (project-N/) for crawler snippets
         type: feat | scope: (none) | breaking: no
         subject: feat: static OG pages for each project (project-N/) for crawler snippets
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 6ce4826 fix: poster max-height 85vh, JSON-LD ItemList for all projects
         type: fix | scope: (none) | breaking: no
         subject: fix: poster max-height 85vh, JSON-LD ItemList for all projects
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 1444c1a v2: 11 projects, KSA removed, Moodboards at front, SEO, gallery gap, share btn styles
         type: (none) | scope: (none) | breaking: no
         subject: v2: 11 projects, KSA removed, Moodboards at front, SEO, gallery gap, share btn styles
         violations:
           - missing-type: no conventional-commit prefix '<type>(<scope>)?(!)?: <subject>'
[OK]   ec70a67 chore: trigger pages rebuild
[FAIL] fa10522 chore: GitHub Actions workflow для Pages
         type: chore | scope: (none) | breaking: no
         subject: chore: GitHub Actions workflow для Pages
         violations:
           - subject-case: subject must start with a lowercase letter or digit
[OK]   781e649 fix: перевод названий 12 проектов (EN/RU)
[FAIL] d6f9487 feat: векторные SVG-глифы KSA (26 букв), реальный шрифт
         type: feat | scope: (none) | breaking: no
         subject: feat: векторные SVG-глифы KSA (26 букв), реальный шрифт
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] db1a6fa fix: светлая тема — контраст текста на KSA карточке
         type: fix | scope: (none) | breaking: no
         subject: fix: светлая тема — контраст текста на KSA карточке
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 1ba2fb4 feat: анимированное SVG-промо для Typeface KSA (K↑ S↓ A zoom)
         type: feat | scope: (none) | breaking: no
         subject: feat: анимированное SVG-промо для Typeface KSA (K↑ S↓ A zoom)
         violations:
           - subject-too-long: subject is longer than the configured maximum
[FAIL] 87a4c36 feat: детальный проект Typography — шрифты, начертания, глифы, overlay
         type: feat | scope: (none) | breaking: no
         subject: feat: детальный проект Typography — шрифты, начертания, глифы, overlay
         violations:
           - subject-too-long: subject is longer than the configured maximum
[OK]   cd00d7b fix: иконки в стиле Adobe — Ks на розовом фоне
[OK]   41f1add feat: смена языка EN/RU без перезагрузки
[FAIL] a57cd0a feat: PWA — manifest, иконки, apple-touch-icon, установка на экран
         type: feat | scope: (none) | breaking: no
         subject: feat: PWA — manifest, иконки, apple-touch-icon, установка на экран
         violations:
           - subject-too-long: subject is longer than the configured maximum
           - subject-case: subject must start with a lowercase letter or digit
[FAIL] 6b06ae0 fix: OG-картинка PNG вместо SVG, добавил og:image:type, og:site_name, twitter:image:alt
         type: fix | scope: (none) | breaking: no
         subject: fix: OG-картинка PNG вместо SVG, добавил og:image:type, og:site_name, twitter:image:alt
         violations:
           - subject-too-long: subject is longer than the configured maximum
           - subject-case: subject must start with a lowercase letter or digit
[FAIL] 1df9183 fix: адаптив — герой по центру, компактные отступы на мобильных
         type: fix | scope: (none) | breaking: no
         subject: fix: адаптив — герой по центру, компактные отступы на мобильных
         violations:
           - subject-too-long: subject is longer than the configured maximum
[OK]   141c25a fix: убрал Instagram, добавил бургер-меню

=== Violations by type ===
subject-too-long: 39
subject-case: 8
header-too-long: 6
body-line-too-long: 3
invalid-type: 2
missing-type: 1

exit: 1
