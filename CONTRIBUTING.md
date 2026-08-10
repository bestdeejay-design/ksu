# Contributing

Thanks for taking the time to contribute to the Ksenia Portfolio!

## Ground rules

- This is a simple static site: plain HTML/CSS/JS, no build step.
- All design tokens live in `css/tokens.css` — no raw colors in components.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/):
  `feat:`, `fix:`, `docs:`, `refactor:`, `style:`, `perf:`, `test:`.
- Before merging, the Playwright suite (`test_runner.py`) must pass 100%.

## How to contribute

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-change`.
3. Make your changes. Keep them small and focused.
4. Test: `python3 test_runner.py` (requires `playwright`).
5. Commit: use Conventional Commits style.
6. Open a pull request. Describe what and why you changed.

## Style notes

- **180+ char lines** — the codebase keeps long single-line rules for compactness
  (existing style); follow the surrounding file, not strict line limits.
- **i18n**: user-visible strings go into `i18n.en`/`i18n.ru` in `script.js`,
  never hardcoded in HTML.
- **Themes**: colors only via `var(--token)` from `css/tokens.css`.

## Questions

Open an issue with a clear reproduction or question.