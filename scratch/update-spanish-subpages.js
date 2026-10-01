const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const mappings = [
  {
    file: 'servicios/branding.html',
    slugs: {
      es: 'servicios/branding',
      en: 'en/services/branding',
      de: 'de/leistungen/branding',
      fr: 'fr/services/branding'
    },
    relLinks: {
      en: '../en/services/branding.html',
      de: '../de/leistungen/branding.html',
      fr: '../fr/services/branding.html'
    }
  },
  {
    file: 'servicios/infografia-3d.html',
    slugs: {
      es: 'servicios/infografia-3d',
      en: 'en/services/3d-rendering',
      de: 'de/leistungen/3d-rendering',
      fr: 'fr/services/rendu-3d'
    },
    relLinks: {
      en: '../en/services/3d-rendering.html',
      de: '../de/leistungen/3d-rendering.html',
      fr: '../fr/services/rendu-3d.html'
    }
  },
  {
    file: 'servicios/video-3d.html',
    slugs: {
      es: 'servicios/video-3d',
      en: 'en/services/3d-video',
      de: 'de/leistungen/3d-video',
      fr: 'fr/services/video-3d'
    },
    relLinks: {
      en: '../en/services/3d-video.html',
      de: '../de/leistungen/3d-video.html',
      fr: '../fr/services/video-3d.html'
    }
  },
  {
    file: 'servicios/material-comercial.html',
    slugs: {
      es: 'servicios/material-comercial',
      en: 'en/services/marketing-collateral',
      de: 'de/leistungen/vermarktungsunterlagen',
      fr: 'fr/services/supports-commerciaux'
    },
    relLinks: {
      en: '../en/services/marketing-collateral.html',
      de: '../de/leistungen/vermarktungsunterlagen.html',
      fr: '../fr/services/supports-commerciaux.html'
    }
  },
  {
    file: 'servicios/web-real-estate.html',
    slugs: {
      es: 'servicios/web-real-estate',
      en: 'en/services/real-estate-web',
      de: 'de/leistungen/projekt-website',
      fr: 'fr/services/site-web-immobilier'
    },
    relLinks: {
      en: '../en/services/real-estate-web.html',
      de: '../de/leistungen/projekt-website.html',
      fr: '../fr/services/site-web-immobilier.html'
    }
  },
  {
    file: 'servicios/captacion.html',
    slugs: {
      es: 'servicios/captacion',
      en: 'en/services/acquisition',
      de: 'de/leistungen/digitale-vermarktung',
      fr: 'fr/services/acquisition'
    },
    relLinks: {
      en: '../en/services/acquisition.html',
      de: '../de/leistungen/digitale-vermarktung.html',
      fr: '../fr/services/acquisition.html'
    }
  }
];

mappings.forEach(item => {
  const filePath = path.join(root, item.file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Insert hreflang + i18n script if not present
  if (!content.includes('hreflang="en"')) {
    const hreflangBlock = `  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/${item.slugs.es}">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/${item.slugs.en}">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/${item.slugs.de}">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/${item.slugs.fr}">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/${item.slugs.en}">

  <!-- Multilingual & Geo-routing -->
  <script src="../js/i18n.js"></script>
`;
    content = content.replace(/(<link rel="canonical"[^>]*>)/i, `$1\n\n${hreflangBlock}`);
  }

  // Update nav-cta to nav-right-group with lang-switcher
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

  // Add mobile switcher
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

  // Add footer lang links
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
  console.log('Updated:', item.file);
});
