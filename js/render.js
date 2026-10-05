/**
 * KSU RENDER — разметка секций, собранная из js/config.js.
 * Один и тот же код использует:
 *   • index.html (через node tools/build.mjs — prerender для поисковиков и без JS)
 *   • script.js  (перерисовка при переключении RU/EN)
 *   • order/*    (SEO-лендинги услуг)
 * Правится только config.js — обновляется всё сразу.
 */
(function (root, factory) {
  var api = factory();
  root.KSU_RENDER = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var NBSP = '\u202F';
  var L = function (lang, ru, en) { return lang === 'ru' ? ru : en; };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /** 15000 → «15 000» (узкий неразрывный пробел, не ломается в переносах) */
  function num(n) {
    return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, NBSP);
  }

  function price(n, cfg) {
    return num(n) + NBSP + (cfg.pricing.currency || '₽');
  }

  /** «от 15 000 ₽ за снимок» */
  function priceLabel(svc, lang, cfg) {
    var word = lang === 'ru' ? 'от' : 'from';
    var unit = lang === 'ru' ? (svc.unitRu || '') : (svc.unitEn || '');
    return word + ' ' + price(svc.priceFrom, cfg) + (unit ? ' ' + unit : '');
  }

  /** Вилка для калькулятора: «15 000 – 24 000 ₽ */
  function priceRange(svc, cfg, mult) {
    var from = svc.priceFrom * (mult || 1);
    var to = from * (1 + (cfg.pricing.estimateSpread || 0.6));
    return price(from, cfg) + ' – ' + price(to, cfg);
  }

  function waHref(cfg, text) {
    return 'https://wa.me/' + cfg.contacts.whatsapp + '?text=' + encodeURIComponent(text);
  }

  /* ================= КАРТОЧКА УСЛУГИ ================= */
  /** prefix — путь к папке order/* (со стиртов сайта — 'order/', со страницы /order/ — '') */
  function serviceCard(svc, i, lang, cfg, prefix) {
    prefix = prefix == null ? 'order/' : prefix;
    var inc = (lang === 'ru' ? svc.includesRu : svc.includesEn) || [];
    var best = lang === 'ru' ? svc.bestForRu : svc.bestForEn;
    var lp = prefix + svc.slug + '/';
    return '<article class="svc" data-slug="' + svc.slug + '">' +
      '<a class="svc__link" href="' + lp + '" aria-label="' + esc(L(lang, 'Подробнее об услуге', 'Service details')) + '"></a>' +
      '<div class="svc__head">' +
        '<span class="svc__num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="svc__cat">' + esc(svc.category || '') + '</span>' +
      '</div>' +
      '<h3 class="svc__title">' + esc(L(lang, svc.titleRu, svc.titleEn)) + '</h3>' +
      '<p class="svc__short">' + esc(L(lang, svc.shortRu, svc.shortEn)) + '</p>' +
      '<ul class="svc__inc">' +
        inc.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') +
      '</ul>' +
      (best ? '<p class="svc__best"><span>' + L(lang, 'Кому подходит:', 'Good for:') + '</span> ' + esc(best) + '</p>' : '') +
      '<div class="svc__foot">' +
        '<div class="svc__price">' +
          '<b>' + esc(priceLabel(svc, lang, cfg)) + '</b>' +
          '<span>' + L(lang, 'срок', 'turnaround') + ' ' + esc(L(lang, svc.durationRu, svc.durationEn)) + '</span>' +
        '</div>' +
        '<button type="button" class="svc__cta btn btn--accent" data-order-service="' + svc.slug + '">' +
          L(lang, 'Заказать', 'Order') +
        '</button>' +
      '</div>' +
    '</article>';
  }

  function servicesGrid(lang, cfg, prefix) {
    return cfg.services.map(function (s, i) { return serviceCard(s, i, lang, cfg, prefix); }).join('');
  }

  /* ================= ЭТАПЫ ================= */
  function packagesGrid(lang, cfg) {
    return (cfg.packages || []).map(function (p) {
      var inc = (lang === 'ru' ? p.includesRu : p.includesEn) || [];
      return '<article class="pkg" data-package="' + p.id + '">' +
        '<h3 class="pkg__title">' + esc(L(lang, p.titleRu, p.titleEn)) + '</h3>' +
        '<p class="pkg__for">' + esc(L(lang, p.forRu, p.forEn)) + '</p>' +
        '<ul class="svc__inc">' + inc.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
        '<div class="svc__foot">' +
          '<div class="svc__price"><b>' + esc(price(p.price, cfg)) + '</b>' +
          '<span>' + L(lang, 'срок', 'turnaround') + ' ' + esc(L(lang, p.durationRu, p.durationEn)) + '</span></div>' +
          '<button type="button" class="svc__cta btn btn--accent" data-order-service="' + p.service + '" data-package="' + esc(L(lang, p.titleRu, p.titleEn)) + '">' +
            L(lang, 'Выбрать', 'Choose') + '</button>' +
        '</div></article>';
    }).join('');
  }

  function processList(lang, cfg) {
    return cfg.process.map(function (p, i) {
      return '<div class="proc__item">' +
        '<span class="proc__num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<h3 class="proc__title">' + esc(L(lang, p.titleRu, p.titleEn)) + '</h3>' +
        '<p class="proc__text">' + esc(L(lang, p.textRu, p.textEn)) + '</p>' +
      '</div>';
    }).join('');
  }

  /* ================= ОБЕЩАНИЯ / ДОВОДЫ ================= */
  function promises(lang, cfg) {
    var p = cfg.promises;
    var items = [p.responseRu, p.startRu, p.editRu, p.fileRu];
    var itemsEn = [p.responseEn, p.startEn, p.editEn, p.fileEn];
    var list = lang === 'ru' ? items : itemsEn;
    return list.map(function (t) {
      return '<li class="trust__item"><span class="trust__dot"></span>' + esc(t) + '</li>';
    }).join('');
  }

  /* ================= FAQ ================= */
  function faqItem(f, lang, cfg) {
    return '<details class="faq__item">' +
      '<summary class="faq__q"><span>' + esc(L(lang, f.qRu, f.qEn)) + '</span>' +
      '<i class="faq__plus" aria-hidden="true"></i></summary>' +
      '<div class="faq__a"><p>' + esc(L(lang, f.aRu, f.aEn)) + '</p></div>' +
    '</details>';
  }

  function faqList(lang, cfg, ids) {
    var all = cfg.faq;
    var list = ids && ids.length
      ? ids.map(function (id) { return all.filter(function (f) { return f.id === id; })[0]; }).filter(Boolean)
      : all;
    return list.map(function (f) { return faqItem(f, lang, cfg); }).join('');
  }

  /* ================= ОПЦИИ ФОРМЫ ================= */
  function serviceOptions(lang, cfg, selected) {
    return cfg.services.map(function (s) {
      return '<option value="' + s.slug + '"' + (s.slug === selected ? ' selected' : '') + '>' +
        esc(L(lang, s.titleRu, s.titleEn)) + ' · ' + esc(priceLabel(s, lang, cfg)) + '</option>';
    }).join('');
  }

  function chips(items, lang, name) {
    return items.map(function (b) {
      return '<label class="chip"><input type="radio" name="' + name + '" value="' + b.id + '">' +
        '<span>' + esc(L(lang, b.ru, b.en)) + '</span></label>';
    }).join('');
  }

  /* ================= СТРУКТУРНЫЕ ДАННЫЕ ================= */
  function faqJsonLd(lang, cfg, ids) {
    var all = cfg.faq;
    var list = ids && ids.length
      ? ids.map(function (id) { return all.filter(function (f) { return f.id === id; })[0]; }).filter(Boolean)
      : all;
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: list.map(function (f) {
        return {
          '@type': 'Question',
          name: L(lang, f.qRu, f.qEn),
          acceptedAnswer: { '@type': 'Answer', text: L(lang, f.aRu, f.aEn) }
        };
      })
    });
  }

  function servicesJsonLd(lang, cfg) {
    var url = cfg.siteUrl;
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: L(lang, cfg.brand.nameRu, cfg.brand.nameEn),
      description: lang === 'ru' ? cfg.seo.ru.homeDescription : cfg.seo.en.homeDescription,
      url: url + '/',
      image: url + '/og-dajet.jpg',
      priceRange: num(Math.min.apply(null, cfg.services.map(function (s) { return s.priceFrom; }))) + '₽–' +
                  num(Math.max.apply(null, cfg.services.map(function (s) { return s.priceFrom; }))) + '₽',
      areaServed: 'RU',
      availableLanguage: ['ru', 'en'],
      knowsAbout: cfg.services.map(function (s) { return L(lang, s.titleRu, s.titleEn); }),
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'order',
        availableLanguage: ['ru', 'en'],
        email: cfg.contacts.email,
        telephone: cfg.contacts.phone
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: L(lang, 'Услуги и цены', 'Services & prices'),
        itemListElement: cfg.services.map(function (s) {
          return {
            '@type': 'Offer',
            name: L(lang, s.titleRu, s.titleEn),
            url: url + '/order/' + s.slug + '/',
            priceCurrency: 'RUB',
            price: s.priceFrom,
            priceSpecification: {
              '@type': 'PriceSpecification',
              priceCurrency: 'RUB',
              minPrice: s.priceFrom,
              valueAddedTaxIncluded: false
            },
            availability: 'https://schema.org/InStock'
          };
        })
      }
    });
  }

  /* ================= ТЕКСТ БРИФА (то, что уйдёт в WhatsApp) ========== */
  function briefMessage(data, lang, cfg) {
    var svc = cfg.services.filter(function (s) { return s.slug === data.service; })[0];
    var bud = cfg.budgets.filter(function (b) { return b.id === data.budget; })[0];
    var dl = cfg.deadlines.filter(function (d) { return d.id === data.deadline; })[0];
    var ru = lang === 'ru';
    var lines = [];
    lines.push(ru ? 'Заявка с сайта (ksu) ✦' : 'Brief from the site (ksu) ✦');
    lines.push('');
    lines.push((ru ? 'Имя: ' : 'Name: ') + (data.name || '—'));
    lines.push((ru ? 'Отвечать на: ' : 'Reply to: ') + (data.contact || '—'));
    lines.push((ru ? 'Что нужно: ' : 'Task: ') + (svc ? L(lang, svc.titleRu, svc.titleEn) : (data.service || '—')));
    if (svc) lines.push((ru ? 'Ориентир по цене: ' : 'Ballpark: ') + priceRange(svc, cfg, data.rush ? cfg.pricing.rushMultiplier : 1));
    if (bud) lines.push((ru ? 'Бюджет: ' : 'Budget: ') + L(lang, bud.ru, bud.en));
    if (dl) lines.push((ru ? 'Срок: ' : 'Deadline: ') + L(lang, dl.ru, dl.en) + (dl.rush && ru ? ' (с наценкой за срочность)' : ''));
    if (data.refs) lines.push((ru ? 'Референсы / ТЗ: ' : 'References / brief: ') + data.refs);
    if (data.source && data.source !== 'other') lines.push((ru ? 'Откуда пришли: ' : 'How you found me: ') + data.sourceLabel);
    lines.push('');
    lines.push(ru ? 'Задача:' : 'Details:');
    lines.push(data.message || '');
    lines.push('');
    lines.push(ru ? '(отправлено из формы на сайте, смета ориентировочная)' : '(sent from the site form, estimate is indicative)');
    if (data.utm) lines.push('[utm] ' + data.utm);
    return lines.join('\n');
  }

  return {
    esc: esc, num: num, price: price, priceLabel: priceLabel, priceRange: priceRange,
    waHref: waHref, L: L,
    serviceCard: serviceCard, servicesGrid: servicesGrid, packagesGrid: packagesGrid,
    processList: processList, promises: promises,
    faqItem: faqItem, faqList: faqList,
    serviceOptions: serviceOptions, chips: chips,
    faqJsonLd: faqJsonLd, servicesJsonLd: servicesJsonLd,
    briefMessage: briefMessage
  };
});
