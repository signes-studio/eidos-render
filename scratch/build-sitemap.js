const fs = require('fs');
const path = require('path');

const today = '2026-10-01';

const multilingualGroups = [
  {
    name: 'Home',
    priority: '1.0',
    changefreq: 'weekly',
    urls: {
      es: 'https://eidosrender.es/',
      en: 'https://eidosrender.es/en/',
      de: 'https://eidosrender.es/de/',
      fr: 'https://eidosrender.es/fr/',
      'x-default': 'https://eidosrender.es/en/'
    }
  },
  {
    name: 'Services',
    priority: '0.95',
    changefreq: 'weekly',
    urls: {
      es: 'https://eidosrender.es/servicios',
      en: 'https://eidosrender.es/en/services',
      de: 'https://eidosrender.es/de/leistungen',
      fr: 'https://eidosrender.es/fr/services',
      'x-default': 'https://eidosrender.es/en/services'
    }
  },
  {
    name: 'Projects',
    priority: '0.95',
    changefreq: 'weekly',
    urls: {
      es: 'https://eidosrender.es/proyectos',
      en: 'https://eidosrender.es/en/projects',
      de: 'https://eidosrender.es/de/projekte',
      fr: 'https://eidosrender.es/fr/projets',
      'x-default': 'https://eidosrender.es/en/projects'
    }
  },
  {
    name: 'Contact',
    priority: '0.90',
    changefreq: 'monthly',
    urls: {
      es: 'https://eidosrender.es/contacto',
      en: 'https://eidosrender.es/en/contact',
      de: 'https://eidosrender.es/de/kontakt',
      fr: 'https://eidosrender.es/fr/contact',
      'x-default': 'https://eidosrender.es/en/contact'
    }
  },
  {
    name: 'FAQ',
    priority: '0.85',
    changefreq: 'monthly',
    urls: {
      es: 'https://eidosrender.es/faq',
      en: 'https://eidosrender.es/en/faq',
      de: 'https://eidosrender.es/de/faq',
      fr: 'https://eidosrender.es/fr/faq',
      'x-default': 'https://eidosrender.es/en/faq'
    }
  },
  // Subservices
  {
    name: 'Branding',
    priority: '0.85',
    changefreq: 'monthly',
    urls: {
      es: 'https://eidosrender.es/servicios/branding',
      en: 'https://eidosrender.es/en/services/branding',
      de: 'https://eidosrender.es/de/leistungen/branding',
      fr: 'https://eidosrender.es/fr/services/branding',
      'x-default': 'https://eidosrender.es/en/services/branding'
    }
  },
  {
    name: '3D Rendering',
    priority: '0.90',
    changefreq: 'monthly',
    urls: {
      es: 'https://eidosrender.es/servicios/infografia-3d',
      en: 'https://eidosrender.es/en/services/3d-rendering',
      de: 'https://eidosrender.es/de/leistungen/3d-rendering',
      fr: 'https://eidosrender.es/fr/services/rendu-3d',
      'x-default': 'https://eidosrender.es/en/services/3d-rendering'
    }
  },
  {
    name: '3D Video',
    priority: '0.85',
    changefreq: 'monthly',
    urls: {
      es: 'https://eidosrender.es/servicios/video-3d',
      en: 'https://eidosrender.es/en/services/3d-video',
      de: 'https://eidosrender.es/de/leistungen/3d-video',
      fr: 'https://eidosrender.es/fr/services/video-3d',
      'x-default': 'https://eidosrender.es/en/services/3d-video'
    }
  },
  {
    name: 'Marketing Collateral',
    priority: '0.85',
    changefreq: 'monthly',
    urls: {
      es: 'https://eidosrender.es/servicios/material-comercial',
      en: 'https://eidosrender.es/en/services/marketing-collateral',
      de: 'https://eidosrender.es/de/leistungen/vermarktungsunterlagen',
      fr: 'https://eidosrender.es/fr/services/supports-commerciaux',
      'x-default': 'https://eidosrender.es/en/services/marketing-collateral'
    }
  },
  {
    name: 'Real Estate Web',
    priority: '0.85',
    changefreq: 'monthly',
    urls: {
      es: 'https://eidosrender.es/servicios/web-real-estate',
      en: 'https://eidosrender.es/en/services/real-estate-web',
      de: 'https://eidosrender.es/de/leistungen/projekt-website',
      fr: 'https://eidosrender.es/fr/services/site-web-immobilier',
      'x-default': 'https://eidosrender.es/en/services/real-estate-web'
    }
  },
  {
    name: 'Buyer Acquisition',
    priority: '0.85',
    changefreq: 'monthly',
    urls: {
      es: 'https://eidosrender.es/servicios/captacion',
      en: 'https://eidosrender.es/en/services/acquisition',
      de: 'https://eidosrender.es/de/leistungen/digitale-vermarktung',
      fr: 'https://eidosrender.es/fr/services/acquisition',
      'x-default': 'https://eidosrender.es/en/services/acquisition'
    }
  },
  // Legal
  {
    name: 'Legal Notice',
    priority: '0.30',
    changefreq: 'yearly',
    urls: {
      es: 'https://eidosrender.es/aviso-legal',
      en: 'https://eidosrender.es/en/legal-notice',
      de: 'https://eidosrender.es/de/impressum',
      fr: 'https://eidosrender.es/fr/mentions-legales',
      'x-default': 'https://eidosrender.es/en/legal-notice'
    }
  },
  {
    name: 'Privacy Policy',
    priority: '0.30',
    changefreq: 'yearly',
    urls: {
      es: 'https://eidosrender.es/privacidad',
      en: 'https://eidosrender.es/en/privacy-policy',
      de: 'https://eidosrender.es/de/datenschutz',
      fr: 'https://eidosrender.es/fr/politique-de-confidentialite',
      'x-default': 'https://eidosrender.es/en/privacy-policy'
    }
  },
  {
    name: 'Cookie Policy',
    priority: '0.30',
    changefreq: 'yearly',
    urls: {
      es: 'https://eidosrender.es/cookies',
      en: 'https://eidosrender.es/en/cookie-policy',
      de: 'https://eidosrender.es/de/cookies',
      fr: 'https://eidosrender.es/fr/politique-des-cookies',
      'x-default': 'https://eidosrender.es/en/cookie-policy'
    }
  }
];

const spanishOnlyUrls = [
  // Tipologías
  { loc: 'https://eidosrender.es/obra-nueva', priority: '0.90', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/vivienda-unifamiliar', priority: '0.90', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/reforma-de-piso', priority: '0.90', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/promociones-inmobiliarias', priority: '0.90', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/renders-para-house-flipping', priority: '0.85', changefreq: 'monthly' },
  // Local SEO España
  { loc: 'https://eidosrender.es/renders-valencia', priority: '0.85', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/renders-madrid', priority: '0.85', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/renders-malaga', priority: '0.85', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/renders-alicante', priority: '0.85', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/renders-sevilla', priority: '0.85', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/renders-bilbao', priority: '0.85', changefreq: 'monthly' },
  // Blog
  { loc: 'https://eidosrender.es/blog', priority: '0.75', changefreq: 'weekly' },
  { loc: 'https://eidosrender.es/blog/promotoras-obra-nueva', priority: '0.65', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/blog/vender-pisos-sobre-plano', priority: '0.65', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/blog/house-flipping', priority: '0.65', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/blog/como-elegir-estudio-render', priority: '0.65', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/blog/estrategias-visuales-promociones', priority: '0.65', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/blog/home-staging-virtual', priority: '0.65', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/blog/agencias-inmobiliarias', priority: '0.65', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/blog/planos-3d-vs-planos-tecnicos', priority: '0.65', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/blog/renders-fotorealistas-vs-comerciales', priority: '0.65', changefreq: 'monthly' },
  { loc: 'https://eidosrender.es/blog/reducir-stock-inmobiliario-visualizacion-3d', priority: '0.65', changefreq: 'monthly' }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

    <!-- ================================================================== -->
    <!-- 1. MULTILINGUAL CORE & LAUNCH PAGES (ES / EN / DE / FR)           -->
    <!-- ================================================================== -->
`;

multilingualGroups.forEach(group => {
  const langs = ['es', 'en', 'de', 'fr'];
  langs.forEach(lang => {
    const loc = group.urls[lang];
    xml += `    <url>\n`;
    xml += `        <loc>${loc}</loc>\n`;
    langs.forEach(l => {
      xml += `        <xhtml:link rel="alternate" hreflang="${l}" href="${group.urls[l]}"/>\n`;
    });
    xml += `        <xhtml:link rel="alternate" hreflang="x-default" href="${group.urls['x-default']}"/>\n`;
    xml += `        <lastmod>${today}</lastmod>\n`;
    xml += `        <changefreq>${group.changefreq}</changefreq>\n`;
    xml += `        <priority>${group.priority}</priority>\n`;
    xml += `    </url>\n`;
  });
  xml += `\n`;
});

xml += `    <!-- ================================================================== -->
    <!-- 2. SPANISH ARCHITECTURAL TYPOLOGIES & LOCAL SEO                   -->
    <!-- ================================================================== -->
`;

spanishOnlyUrls.forEach(item => {
  xml += `    <url>\n`;
  xml += `        <loc>${item.loc}</loc>\n`;
  xml += `        <lastmod>${today}</lastmod>\n`;
  xml += `        <changefreq>${item.changefreq}</changefreq>\n`;
  xml += `        <priority>${item.priority}</priority>\n`;
  xml += `    </url>\n`;
});

xml += `</urlset>\n`;

const outPath = path.join(__dirname, '..', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log('sitemap.xml successfully generated with full xhtml:link multilingual matrix!');
