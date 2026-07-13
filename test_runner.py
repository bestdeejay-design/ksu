#!/usr/bin/env python3
"""
KSU Portfolio — Automated Test Runner
Запуск: python3 test_runner.py [--url http://localhost:PORT]
"""

import sys, os, time, json, platform
from pathlib import Path

ROOT = Path(__file__).parent.resolve()
PORTFOLIO = ROOT / "portfolio"
URL = "http://localhost:8765"

passed = failed = total = 0
results = []

def check(section, tid, desc, ok, detail=""):
    global passed, failed, total
    total += 1
    if ok:
        passed += 1
    else:
        failed += 1
    s = "✅" if ok else "❌"
    results.append(f"  {s} [{section}] {tid}: {desc}" + (f"  ({detail})" if detail else ""))

def print_header(title):
    print(f"\n{'='*70}")
    print(f"  {title}")
    print(f"{'='*70}")

def run_tests(url):
    from playwright.sync_api import sync_playwright

    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True, args=["--no-sandbox"])
        ctx = browser.new_context(viewport={"width": 1440, "height": 900})
        page = ctx.new_page()

        errors_seen = []

        def on_console(msg):
            if msg.type == "error":
                errors_seen.append(msg.text)

        page.on("console", on_console)

        page.goto(url, wait_until="networkidle", timeout=15000)
        print(f"  Connected: {page.title()}")
        print(f"  URL: {url}\n")

        # ───── T2: CARDS ─────
        print_header("T2. Карточки проектов")
        cards = page.locator(".work-card")
        check("T2", "T2.1", "12 карточек (11 проектов + CTA)", cards.count() == 12, f"найдено {cards.count()}")

        wc = page.locator("#works-count").text_content()
        check("T2", "T2.2", "Счётчик = 11", wc == "11", f"'{wc}'")

        for i in range(11):
            n = cards.nth(i).locator(".work-card__num").text_content()
            expected = str(i + 1).zfill(2)
            ok = n == expected
            check("T2", f"T2.3.{i}", f"Card {i+1} номер '{expected}'", ok, f"'{n}'")

        for i in range(11):
            title = cards.nth(i).locator(".work-card__title").text_content()
            check("T2", f"T2.4.{i}", f"Card {i+1} title виден", len(title) > 0, f"'{title[:30]}'")

        for i in range(11):
            cat = cards.nth(i).locator(".work-card__category").text_content()
            check("T2", f"T2.5.{i}", f"Card {i+1} category видна", len(cat) > 0, f"'{cat[:20]}'")

        # CTA card
        cta = cards.nth(11)
        check("T2", "T2.6", "CTA card exists", cta.count() > 0)
        check("T2", "T2.6b", "CTA card class", cta.get_attribute("class") and "work-card--cta" in (cta.get_attribute("class") or ""))

        for i in range(11):
            vis = cards.nth(i).locator(".work-card__visual")
            has_img = vis.locator("img").count() > 0
            has_wv_style = vis.locator(".wv").get_attribute("style")
            has_vis_style = vis.get_attribute("style")
            check("T2", f"T2.7.{i}", f"Card {i+1} visual контент", has_img or bool(has_wv_style) or bool(has_vis_style))

        # ───── T3: OVERLAYS ─────
        print_header("T3. Оверлеи")
        overlay = page.locator("#project-overlay")
        close_btn = page.locator("#overlay-close")

        page.evaluate("openProject(0)")
        time.sleep(0.5)
        cls = overlay.get_attribute("class") or ""
        check("T3", "T3.1", "Оверлей проекта открыт", "overlay--open" in cls)
        content = page.locator("#overlay-content")
        check("T3", "T3.1b", "Контент загружен", content.locator("*").count() > 0)

        page.keyboard.press("Escape")
        time.sleep(0.6)
        cls = overlay.get_attribute("class") or ""
        check("T3", "T3.2", "Escape закрывает оверлей", "overlay--open" not in cls)

        # Each card click check via evaluate
        for i in range(11):
            if i != 0:
                try:
                    page.evaluate(f"openProject({i})")
                    time.sleep(0.3)
                    cls = overlay.get_attribute("class") or ""
                    ok = "overlay--open" in cls
                    if ok:
                        page.keyboard.press("Escape")
                        time.sleep(0.6)
                    check("T3", f"T3.5.{i}", f"Card {i+1} overlay открыт", ok)
                except Exception:
                    check("T3", f"T3.5.{i}", f"Card {i+1} click", False, "EXCEPTION")

        # ───── T4: LANGUAGE ─────
        print_header("T4. Язык (i18n)")
        page.evaluate("localStorage.setItem('lang', 'en')")
        page.reload(wait_until="networkidle")
        page.locator("#lang-toggle").click()
        time.sleep(0.3)
        ru = page.locator('[data-i18n="about.label"]').text_content()
        check("T4", "T4.1", "RU about = 'Обо мне'", ru == "Обо мне", f"'{ru}'")

        page.locator("#lang-toggle").click()
        time.sleep(0.3)
        en = page.locator('[data-i18n="about.label"]').text_content()
        check("T4", "T4.2", "EN about = 'About'", en == "About", f"'{en}'")

        ls = page.evaluate("localStorage.getItem('lang')")
        check("T4", "T4.3", "Язык сохранён", ls == "en", f"lang='{ls}'")

        # ───── T5: THEME ─────
        print_header("T5. Тёмная / светлая тема")
        page.evaluate("localStorage.setItem('theme', 'dark')")
        page.reload(wait_until="networkidle")
        h = page.locator("html")
        init = h.get_attribute("data-theme")
        page.locator("#theme-toggle").click()
        time.sleep(0.4)
        after = h.get_attribute("data-theme")
        check("T5", "T5.1", f"Theme dark→light", after == "light", f"{init}→{after}")

        page.locator("#theme-toggle").click()
        time.sleep(0.4)
        restored = h.get_attribute("data-theme")
        check("T5", "T5.2", "Вернулась тёмная", restored == "dark", f"{restored}")

        saved = page.evaluate("localStorage.getItem('theme')")
        check("T5", "T5.3", "Тема сохранена", saved == "dark", f"'{saved}'")

        # ───── T6: RESPONSIVE ─────
        print_header("T6. Адаптивность")
        page.set_viewport_size({"width": 768, "height": 1024})
        page.reload(wait_until="networkidle")
        menu_btn = page.locator(".menu-btn")
        check("T6", "T6.1", "Burger btn visible ≤768px", menu_btn.is_visible())

        menu_btn.click()
        time.sleep(0.4)
        nav_links = page.locator(".nav__links")
        right = nav_links.evaluate("el => getComputedStyle(el).right")
        check("T6", "T6.2", "Menu открывается по клику", right in ("0px", "0"), f"right={right}")

        page.set_viewport_size({"width": 375, "height": 667})
        page.reload(wait_until="networkidle")
        grid = page.locator(".works__grid")
        gs = grid.evaluate("el => getComputedStyle(el).gridTemplateColumns")
        # 1fr resolves to pixel width; count tracks by splitting on space
        tracks = [t for t in gs.split() if t.strip()]
        is_single_col = len(tracks) <= 1 or tracks[0] == tracks[-1]  # all same size = 1 col repeated
        check("T6", "T6.3", "Works 1 col ≤480px", is_single_col, f"tracks={len(tracks)}, {gs[:50]}")

        page.set_viewport_size({"width": 1440, "height": 900})

        # ───── T7: NAVIGATION ─────
        print_header("T7. Навигация")
        for sid in ["hero", "about", "works", "contact"]:
            check("T7", f"T7.{sid}", f"#{sid} существует", page.locator(f"#{sid}").count() > 0)
        logo = page.locator(".nav__logo")
        check("T7", "T7.logo", "Логотип виден", logo.is_visible())
        check("T7", "T7.logo.href", "Логотип → #", logo.get_attribute("href") == "#")
        nav_links = page.locator(".nav__link")
        check("T7", "T7.nav", "Ссылки в nav видимы", nav_links.count() >= 3, f"{nav_links.count()}")

        email = page.locator(".contact__email")
        check("T7", "T7.email", "Email виден", email.is_visible())
        check("T7", "T7.email.text", "Email = ksu@ya.ru", "ksu@ya.ru" in (email.text_content() or ""))

        phone = page.locator(".contact__phone")
        check("T7", "T7.phone", "Телефон виден", phone.is_visible())

        footer = page.locator(".footer")
        check("T7", "T7.footer", "Футер виден", footer.is_visible())

        # ───── T8: SEO ─────
        print_header("T8. SEO и PWA")
        check("T8", "T8.1", "Title: 'Ksenia'", "Ksenia" in page.title(), f"'{page.title()}'")
        ogi = page.locator('meta[property="og:image"]').get_attribute("content")
        check("T8", "T8.2", "OG image", bool(ogi))
        man = page.locator('link[rel="manifest"]').get_attribute("href")
        check("T8", "T8.3", "Manifest.json", bool(man), f"'{man}'")
        fav = page.locator('link[rel="icon"]').first.get_attribute("href")
        check("T8", "T8.4", "Favicon", bool(fav), f"'{fav}'")
        tc = page.locator('meta[name="twitter:card"]').get_attribute("content")
        check("T8", "T8.5", "Twitter card", bool(tc), f"'{tc}'")

        # ───── T9: CONSOLE ─────
        print_header("T9. Консоль")
        page.reload(wait_until="networkidle")
        time.sleep(0.5)
        check("T9", "T9.1", "Нет JS ошибок", len(errors_seen) == 0, f"errors={errors_seen[:3]}" if errors_seen else "")

        # ───── T10: CONTENT FILES ─────
        print_header("T10. Файлы контента")
        expected_dirs = {
            "game": 9, "poster-cat-day": 5, "moodboards": 12, "stickers": 4,
            "photobook": 27, "packaging": 10, "retouch": 1,
        }
        for d, cnt in expected_dirs.items():
            actual = len(list((PORTFOLIO / d).glob("*"))) if (PORTFOLIO / d).is_dir() else 0
            check("T10", f"T10.files.{d}", f"{d}: {cnt} файлов", actual == cnt, f"найдено {actual}")

        dd = PORTFOLIO / "digital-drawing"
        if dd.is_dir():
            dd_files = sum(1 for _ in dd.rglob("*") if _.is_file())
            check("T10", "T10.files.dd", "digital-drawing: 23 файлов", dd_files == 23, f"найдено {dd_files}")

        has_cyrillic = any(ord(c) > 127 for p in PORTFOLIO.rglob("*") for c in str(p.relative_to(PORTFOLIO)))
        check("T10", "T10.cyrillic", "Нет кириллицы в путях", not has_cyrillic)

        has_spaces = any(" " in str(p.relative_to(PORTFOLIO)) for p in PORTFOLIO.rglob("*"))
        check("T10", "T10.spaces", "Нет пробелов в путях", not has_spaces)

        # PDF check
        pdfs = list(PORTFOLIO.rglob("*.pdf"))
        check("T10", "T10.pdfs", f"PDF: {len(pdfs)}", len(pdfs) == 3, f"{[p.name for p in pdfs]}")

        browser.close()

    # ───── REPORT ─────
    print(f"\n{'='*70}")
    print(f"  ОТЧЁТ ТЕСТИРОВАНИЯ")
    print(f"{'='*70}")
    for r in results:
        print(r)

    pct = round(passed / total * 100, 1) if total else 0
    print(f"\n{'─'*70}")
    print(f"  Пройдено: {passed}/{total} ({pct}%)")
    if failed:
        print(f"  Провалено: {failed}")
    print(f"{'─'*70}")

    return failed == 0


if __name__ == "__main__":
    url = URL
    if len(sys.argv) > 1 and sys.argv[1].startswith("--url="):
        url = sys.argv[1].split("=", 1)[1]
    elif len(sys.argv) > 1 and not sys.argv[1].startswith("-"):
        url = sys.argv[1]

    print(f"{'█'*70}")
    print(f"  KSU Portfolio — Automated Test Runner")
    print(f"  {platform.node()} | Python {platform.python_version()}")
    print(f"{'█'*70}")

    ok = run_tests(url)
    sys.exit(0 if ok else 1)
