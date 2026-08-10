# Code Review Report — ksu

**Date:** 2026-08-10  **Tool:** code-review/review.py (checklists: correctness, security, performance, style, tests, edge_cases)

## Table

| Файл | critical | warning | nit | Итого |
|------|:--------:|:-------:|:---:|:-----:|
| index.html | 0 | 0 | 24 | 24 |
| script.js | 13 | 0 | 57 | 70 |
| css/tokens.css | 0 | 0 | 0 | 0 |
| **Итого** | **13** | **0** | **81** | **94** |

## Critical (только script.js)

- **SEC-007 / XSS** — 13 вставок HTML из переменных через `innerHTML`:
  - `script.js:201` `el.innerHTML = text`
  - `script.js:215` `worksGrid.innerHTML = ''`
  - `script.js:260` `card.innerHTML = \`...\`` (и далее по файлу, генерация карточек работ)
  - **Риск:** при вставке пользовательских данных (названия работ, ссылки) — стored/reflected XSS.
  - **Рекомендация:** заменить на DOM-API (`createElement`/`textContent`) или экранировать входные данные перед вставкой.

## Nit (style, основное)

- index.html: длинные строки > 120 символов (meta description, og:description, twitter:description — строки 7, 29, 40, 64 и др., 24 шт.)
- script.js: 57 nit — форматирование, длинные строки, магические числа

## Вывод

- Код **функционально цел**, стиль аккуратный (tokens.css без замечаний).
- **Главный риск — XSS через innerHTML** (13 мест) — критично перед публикацией./***/
- Остальное — косметика (переносы строк).
