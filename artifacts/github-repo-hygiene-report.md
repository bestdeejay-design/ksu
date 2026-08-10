# GitHub Repo Hygiene Report — ksu

**Date:** 2026-08-10  **Owner:** bestdeejay-design  **Repo URL:** github.com/bestdeejay-design/ksu

## A. Файлы — на месте и распознаны GitHub

| Файл | Статус | Комментарий |
|------|--------|-------------|
| README.md | ❌ MISSING | Нет вообще — главная страница пустая |
| README.ru.md | ❌ MISSING | Нет |
| LICENSE | ❌ MISSING | Нет (публичный репо без лицензии — антипаттерн) |
| CODE_OF_CONDUCT.md | ❌ MISSING | Нет |
| CONTRIBUTING.md | ❌ MISSING | Нет |
| SECURITY.md | ❌ MISSING | Нет |
| SUPPORT.md | ❌ MISSING | Нет |
| .github/ISSUE_TEMPLATE | ❌ MISSING | Нет форм bug_report/feature_request |
| .github/pull_request_template.md | ❌ MISSING | Нет |

**Итого по A: 0/9** — полный провал по community-файлам.

## B. Метаданные GitHub

| Пункт | Статус | Значение |
|-------|--------|----------|
| description | ⚠️ есть, короткий | «Портфолио Ксения — графический дизайнер» (43 символа: нет ключевых слов, нет получателя) |
| topics | ❌ пусто | 0 тегов (лимит 20) |
| homepage | ❌ пусто | Pages built, но homepage в About не проставлен |
| GitHub Pages | ✅ built | https://bestdeejay-design.github.io/ksu/ — рабочая |
| Social preview | ❌ нет | og-image.png есть в репо, но в Settings не загружен |

## C. Community Health

- **health_percentage: 14/100** (!!!)
- Распознаны кнопки, но не содержимое: code_of_conduct=null, contributing=null, issue_template=null, license=null, readme=null

## D. Релизы

- Релизов с semver-тегами **нет** (version-bumper: latest_tag=none, предлагает v0.1.0)

## Рекомендации (приоритет)
1. **P0**: создать README.md (+ README.ru.md) — сейчас страница репо пустая
2. **P0**: добавить LICENSE (MIT, owner: Ksenia, год 2026)
3. **P1**: SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, SUPPORT.md
4. **P1**: .github/ISSUE_TEMPLATE (bug_report.yml + feature_request.yml) + pull_request_template.md
5. **P1**: topics (10–20 тегов: portfolio, graphic-design, frontend, design, ux, css, javascript, pwa, github-pages...)
6. **P1**: homepage = https://bestdeejay-design.github.io/ksu/
7. **P2**: первый релиз v0.1.0 + настройка .github/release.yml
8. **P2**: социальный превью (новая og-image)
