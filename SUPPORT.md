# Support

Need help with the Ksenia Portfolio? Start here.

## Documentation first

- **README.md** — what this is and how to run it locally.
- **docs/ARCHITECTURE.md** — how the site is structured.
- **docs/DECISIONS.md** — key technical decisions and why.
- **TEST_PLAN.md** — what the automated suite covers.

## Common issues

| Symptom | Fix |
|---------|-----|
| Pages don't render | Serve from the repo root; SPA uses relative paths |
| Dark/light theme resets | Check `localStorage`; theme is stored per-browser |
| Language switch not working | `localStorage.lang`; rebuilds content automatically |
| Tests fail locally | `pip install playwright && playwright install chromium` |

## Getting help

- Open an issue with a clear description and steps to reproduce.
- For project/design questions, contact the owner via the site footer (Email /
  Telegram / WhatsApp).

## Not covered here

- Design or creative-direction questions — contact Ksenia directly.
- GitHub Pages billing/limits — see GitHub Docs.