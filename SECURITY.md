# Security Policy

## Supported versions

This project is a static portfolio site served via GitHub Pages.
Only the latest version on the `main` branch is supported.

## Reporting a vulnerability

This repository contains no server-side code: it is plain HTML/CSS/JS served
statically. Any security issue (e.g. XSS vector, dependency concern, or
misconfiguration) should be reported privately.

**Please do not open a public issue for security problems.**

To report:

- Open a private advisory: GitHub → Security → Report a vulnerability, or
- Write to the repository owner directly (see `CONTACT` in the site footer).

We aim to respond within 7 days and will keep you informed about the fix.

## What we take seriously

- Stored/reflected XSS vectors (all dynamic HTML is built from static constants today)
- Malicious links / tracking in the published site
- Supply-chain issues in `Dockerfile` base images

Note: `test_runner.py` requires the Playwright Python package; run
`pip install playwright` from trusted sources only.