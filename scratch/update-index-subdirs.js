const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const items = [
  {
    file: 'contacto/index.html',
    canonical: 'https://eidosrender.es/contacto',
    hreflangs: {
      es: 'https://eidosrender.es/contacto',
      en: 'https://eidosrender.es/en/contact',
      de: 'https://eidosrender.es/de/kontakt',
      fr: 'https://eidosrender.es/fr/contact'
    },
    relLinks: {
      en: '../en/contact.html',
      de: '../de/kontakt.html',
      fr: '../fr/contact.html'
    }
  },
  {
    file: 'proyectos/index.html',
    canonical: 'https://eidosrender.es/proyectos',
    hreflangs: {
      es: 'https://eidosrender.es/proyectos',
      en: 'https://eidosrender.es/en/projects',
      de: 'https://eidosrender.es/de/projekte',
      fr: 'https://eidosrender.es/fr/projets'
    },
    relLinks: {
      en: '../en/projects.html',
      de: '../de/projekte.html',
      fr: '../fr/projets.html'
    }
  },
  {
    file: 'servicios/index.html',
    canonical: 'https://eidosrender.es/servicios',
    hreflangs: {
      es: 'https://eidosrender.es/servicios',
      en: 'https://eidosrender.es/en/services',
      de: 'https://eidosrender.es/de/leistungen',
      fr: 'https://eidosrender.es/fr/services'
    },
    relLinks: {
      en: '../en/services.html',
      de: '../de/leistungen.html',
      fr: '../fr/services.html'
    }
  }
];

items.forEach(item => {
  const filePath = path.join(root, item.file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Insert hreflang + i18n
  if (!content.includes('hreflang="en"')) {
    const hreflangBlock = `  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="${item.hreflangs.es}">
  <link rel="alternate" hreflang="en" href="${item.hreflangs.en}">
  <link rel="alternate" hreflang="de" href="${item.hreflangs.de}">
  <link rel="alternate" hreflang="fr" href="${item.hreflangs.fr}">
  <link rel="alternate" hreflang="x-default" href="${item.hreflangs.en}">

  <!-- Multilingual & Geo-routing -->
  <script src="../js/i18n.js"></script>
`;
    content = content.replace(/(<link rel="canonical"[^>]*>)/i, `$1\n\n${hreflangBlock}`);
  }

  // Desktop switcher
  if (!content.includes('class="lang-switcher"')) {
    const desktopSwitcher = `      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Selector de idioma">
          <span class="active" data-lang="es">ES</span>
          <span class="lang-divider">/</span>
          <a href="${item.relLinks.en}" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <a href="${item.relLinks.de}" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <a href="${item.relLinks.fr}" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>

        <a href="../contacto.html" class="nav-cta">
          HABLEMOS DEL PROYECTO →
        </a>
      </div>`;

    content = content.replace(/<a href="\.\.\/contacto\.html" class="nav-cta">[\s\S]*?<\/a>/, desktopSwitcher);
  }

  // Mobile switcher
  if (!content.includes('class="mobile-lang-switcher"')) {
    const mobileSwitcher = `    <div>
      <div class="mobile-lang-switcher" aria-label="Selector de idioma">
        <span class="active" data-lang="es">ES</span>
        <a href="${item.relLinks.en}" data-lang="en" onclick="window.setLang('en')">EN</a>
        <a href="${item.relLinks.de}" data-lang="de" onclick="window.setLang('de')">DE</a>
        <a href="${item.relLinks.fr}" data-lang="fr" onclick="window.setLang('fr')">FR</a>
      </div>`;

    content = content.replace(/<div class="mobile-nav-overlay"[^>]*>\s*<div>/, mobileSwitcher);
  }

  // Footer lang links
  if (!content.includes('span style="color: var(--crimson); font-weight: 700;">ES</span>')) {
    const footerLang = `        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <span style="color: var(--crimson); font-weight: 700;">ES</span> ·
            <a href="${item.relLinks.en}" onclick="window.setLang('en')">EN</a> ·
            <a href="${item.relLinks.de}" onclick="window.setLang('de')">DE</a> ·
            <a href="${item.relLinks.fr}" onclick="window.setLang('fr')">FR</a>
          </div>`;
    content = content.replace(/<div style="display: flex; gap: 24px;">/, footerLang);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated index:', item.file);
});
