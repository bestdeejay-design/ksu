/**
 * KSU TRACK — тонкий слой аналитики.
 * Работает вхолостую, пока в js/config.js не вписан номер счётчика
 * Яндекс.Метрики. Если вписать — сайт сам подключит счётчик и начнёт
 * слать цели (order_submit, order_sent, whatsapp_click, …).
 */
(function (root) {
  'use strict';

  var cfg = root.KSU_CONFIG || {};
  var a = cfg.analytics || {};
  var id = a.metrikaId ? String(a.metrikaId) : '';
  var goals = a.goals || {};

  /* ---- подключение Яндекс.Метрики ---- */
  if (id) {
    try {
      (function (m, et, ctr) {
        m[m = 'yandex_metrika_callbacks'] = m[m] || [];
        m.push(function () { try { et.parentNode.insertBefore(ctr, et); } catch (e) {} });
        ctr.src = 'https://mc.yandex.ru/metrika/tag.js';
        ctr.async = true;
        ctr.id = 'ym-script';
      })(root, document.getElementsByTagName('script')[0] || document.head.firstChild, document.createElement('script'));

      var init = function () {
        if (root.ym) root.ym(id, { clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true });
      };
      if (root.ym) init();
      else (root.yandex_metrika_callbacks = root.yandex_metrika_callbacks || []).push(init);
    } catch (e) { /* аналитика не должна ломать сайт */ }
  }

  /* ---- utm: запоминаем источник заявки ---- */
  function captureUtm() {
    try {
      var q = new URLSearchParams(root.location.search);
      var keep = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref', 'from'].forEach(function (k) {
        if (q.get(k)) keep[k] = q.get(k);
      });
      if (Object.keys(keep).length) root.localStorage.setItem('ksu.utm', JSON.stringify(keep));
    } catch (e) {}
  }
  captureUtm();

  function utmLine() {
    try {
      var raw = root.localStorage.getItem('ksu.utm');
      if (!raw) return '';
      var o = JSON.parse(raw);
      return Object.keys(o).map(function (k) { return k + '=' + o[k]; }).join(', ');
    } catch (e) { return ''; }
  }

  /* ---- событие ---- */
  function track(name, params) {
    try {
      var goal = goals[name] || name;
      if (id && root.ym) root.ym(id, 'reachGoal', goal, params || {});
      root.dataLayer = root.dataLayer || [];
      root.dataLayer.push({ event: name, params: params || null });
    } catch (e) {}
  }

  root.ksuTrack = track;
  root.ksuUtm = utmLine;
})(typeof globalThis !== 'undefined' ? globalThis : window);
