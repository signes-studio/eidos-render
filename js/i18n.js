/**
 * EIDOS RENDER — Multilingual & Geo-Targeting System (i18n)
 * Handles auto-detection, European geo/regional routing, hreflang sync, and explicit user preference.
 */
(function() {
  'use strict';

  var SUPPORTED_LANGS = ['es', 'en', 'de', 'fr'];
  var STORAGE_KEY = 'eidos_lang';
  var ROUTED_KEY = 'eidos_geo_checked';

  // Helper: Cookie access
  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return match ? decodeURIComponent(match[3]) : null;
  }

  function setCookie(name, val, days) {
    var d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + encodeURIComponent(val) + '; path=/; max-age=' + (days * 86400) + '; SameSite=Lax';
  }

  // Globally accessible language setter for switcher links
  window.setLang = function(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) !== -1) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch(e) {}
      setCookie(STORAGE_KEY, lang, 365);
    }
  };

  // Determine current page language from pathname
  function getCurrentLang() {
    var p = window.location.pathname;
    if (p.indexOf('/en/') === 0 || p === '/en') return 'en';
    if (p.indexOf('/de/') === 0 || p === '/de') return 'de';
    if (p.indexOf('/fr/') === 0 || p === '/fr') return 'fr';
    return 'es';
  }

  // Detect preferred language from browser settings
  function detectBrowserLang() {
    var langs = [];
    if (navigator.languages && navigator.languages.length) {
      langs = navigator.languages;
    } else if (navigator.language) {
      langs = [navigator.language];
    } else if (navigator.userLanguage) {
      langs = [navigator.userLanguage];
    }

    for (var i = 0; i < langs.length; i++) {
      var l = langs[i].toLowerCase();
      if (l.indexOf('es') === 0) return 'es';
      if (l.indexOf('de') === 0) return 'de';
      if (l.indexOf('fr') === 0) return 'fr';
      if (l.indexOf('en') === 0) return 'en';
    }
    // Default international European fallback: English
    return 'en';
  }

  // Check if current user is an automated bot/crawler
  function isBot() {
    return /bot|googlebot|crawler|spider|robot|crawling|bingbot|yandex|slurp|duckduckgo|baiduspider|facebookexternalhit|whatsapp|linkedinbot/i.test(navigator.userAgent);
  }

  // Perform one-time initial language detection on landing
  function checkAndRoute() {
    // 1. Never redirect bots/crawlers (essential for international SEO indexing)
    if (isBot()) return;

    // 2. Allow bypassing with URL param
    if (window.location.search.indexOf('noredirect=true') !== -1) return;

    // 3. Prevent redirect loops if already checked in this browsing session
    var alreadyChecked = false;
    try {
      alreadyChecked = sessionStorage.getItem(ROUTED_KEY) === '1';
    } catch(e) {}

    // Check saved preference
    var savedLang = null;
    try {
      savedLang = localStorage.getItem(STORAGE_KEY);
    } catch(e) {}
    if (!savedLang) {
      savedLang = getCookie(STORAGE_KEY);
    }

    var currentLang = getCurrentLang();
    var isRoot = (window.location.pathname === '/' || window.location.pathname === '/index.html');

    // If user explicitly saved a language and we are at the root
    if (savedLang && SUPPORTED_LANGS.indexOf(savedLang) !== -1) {
      if (isRoot && savedLang !== 'es') {
        window.location.replace('/' + savedLang + '/');
        return;
      }
      return;
    }

    // Only auto-route once per session on the root entry
    if (alreadyChecked) return;
    try {
      sessionStorage.setItem(ROUTED_KEY, '1');
    } catch(e) {}

    if (isRoot) {
      var detected = detectBrowserLang();
      if (detected !== 'es') {
        window.location.replace('/' + detected + '/');
      }
    }
  }

  // Execute immediately before render to avoid FOUC/flash
  checkAndRoute();

  // Attach event listener when DOM is ready to mark active switcher link
  document.addEventListener('DOMContentLoaded', function() {
    var cur = getCurrentLang();
    var switchers = document.querySelectorAll('.lang-switcher, .mobile-lang-switcher');
    switchers.forEach(function(container) {
      var links = container.querySelectorAll('a, span');
      links.forEach(function(el) {
        var lang = el.getAttribute('data-lang');
        if (lang === cur) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    });
  });

})();
