const fs = require('fs');
const path = require('path');

const subserviceFiles = [
  // Spanish
  'servicios/infografia-3d.html',
  'servicios/video-3d.html',
  'servicios/branding.html',
  'servicios/material-comercial.html',
  'servicios/web-real-estate.html',
  'servicios/captacion.html',
  // English
  'en/services/3d-rendering.html',
  'en/services/3d-video.html',
  'en/services/branding.html',
  'en/services/marketing-collateral.html',
  'en/services/real-estate-web.html',
  'en/services/acquisition.html',
  // German
  'de/leistungen/3d-rendering.html',
  'de/leistungen/3d-video.html',
  'de/leistungen/branding.html',
  'de/leistungen/vermarktungsunterlagen.html',
  'de/leistungen/projekt-website.html',
  'de/leistungen/digitale-vermarktung.html',
  // French
  'fr/services/rendu-3d.html',
  'fr/services/video-3d.html',
  'fr/services/branding.html',
  'fr/services/supports-commerciaux.html',
  'fr/services/site-web-immobilier.html',
  'fr/services/acquisition.html'
];

let enrichedCount = 0;

subserviceFiles.forEach(relPath => {
  if (!fs.existsSync(relPath)) {
    console.log(`Skipping missing file: ${relPath}`);
    return;
  }

  let content = fs.readFileSync(relPath, 'utf8');

  // Extract metadata
  const title = content.match(/<title>(.*?)<\/title>/)?.[1] || 'Eidos Render';
  const desc = content.match(/<meta name="description" content="(.*?)"/)?.[1] || '';
  const canonical = content.match(/<link rel="canonical" href="(.*?)"/)?.[1] || `https://eidosrender.es/${relPath.replace(/\.html$/, '')}`;

  let lang = 'es';
  let homeUrl = 'https://eidosrender.es/';
  let servicesUrl = 'https://eidosrender.es/servicios';
  let homeLabel = 'Inicio';
  let servicesLabel = 'Servicios';

  if (relPath.startsWith('en/')) {
    lang = 'en';
    homeUrl = 'https://eidosrender.es/en/';
    servicesUrl = 'https://eidosrender.es/en/services';
    homeLabel = 'Home';
    servicesLabel = 'Services';
  } else if (relPath.startsWith('de/')) {
    lang = 'de';
    homeUrl = 'https://eidosrender.es/de/';
    servicesUrl = 'https://eidosrender.es/de/leistungen';
    homeLabel = 'Startseite';
    servicesLabel = 'Leistungen';
  } else if (relPath.startsWith('fr/')) {
    lang = 'fr';
    homeUrl = 'https://eidosrender.es/fr/';
    servicesUrl = 'https://eidosrender.es/fr/services';
    homeLabel = 'Accueil';
    servicesLabel = 'Services';
  }

  // Remove existing schema if any
  content = content.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/g, '');

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        "name": title.replace(' — Eidos Render', ''),
        "description": desc,
        "provider": {
          "@type": "ProfessionalService",
          "@id": "https://eidosrender.es/#organization",
          "name": "Eidos Render",
          "url": "https://eidosrender.es/",
          "telephone": "+34614459144",
          "email": "info@eidosrender.es"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "European Union" },
          { "@type": "AdministrativeArea", "name": "Europe" },
          { "@type": "Country", "name": "Spain" },
          { "@type": "Country", "name": "Germany" },
          { "@type": "Country", "name": "France" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Switzerland" },
          { "@type": "Country", "name": "Austria" },
          { "@type": "Country", "name": "Netherlands" },
          { "@type": "Country", "name": "Belgium" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": homeLabel,
            "item": homeUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": servicesLabel,
            "item": servicesUrl
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": title.replace(' — Eidos Render', ''),
            "item": canonical
          }
        ]
      }
    ]
  };

  const schemaTag = `\n  <!-- Schema.org Data (Zero Prices) -->\n  <script type="application/ld+json">\n  ${JSON.stringify(schemaJson, null, 2)}\n  </script>\n`;

  // Inject meta robots and geo tags if not present
  if (!content.includes('name="robots"')) {
    content = content.replace('</head>', `  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">\n</head>`);
  }
  if (!content.includes('name="geo.region"')) {
    content = content.replace('</head>', `  <meta name="geo.region" content="ES">\n  <meta name="geo.placename" content="Valencia">\n  <meta name="geo.position" content="39.4699;-0.3763">\n  <meta name="ICBM" content="39.4699, -0.3763">\n</head>`);
  }

  // Inject Schema before </head>
  content = content.replace('</head>', `${schemaTag}</head>`);

  fs.writeFileSync(relPath, content, 'utf8');
  enrichedCount++;
  console.log(`✅ Enriched ${relPath}`);
});

console.log(`\nSuccessfully injected Schema.org into ${enrichedCount} sub-service pages.`);
