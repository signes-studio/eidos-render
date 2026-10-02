const fs = require('fs');
const path = require('path');
const { seoData } = require('./seo-definitions.js');

function generateHtml(loc) {
  const isRoot = loc.prefix === '';
  const assetPrefix = loc.prefix;
  const homeLink = isRoot ? 'index.html' : 'index.html';

  // Build JSON-LD Master Schema
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://eidosrender.es/#organization",
        "name": "Eidos Render",
        "legalName": "Eidos Render",
        "alternateName": [
          "Eidos Render — Architectural Visualization & Real Estate Agency",
          "Eidos Render European CGI Studio",
          "Eidos Render 3D Architecture"
        ],
        "url": loc.canonical,
        "logo": "https://eidosrender.es/favicon.svg",
        "image": "https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg",
        "description": loc.metaDesc,
        "telephone": "+34614459144",
        "email": "info@eidosrender.es",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Valencia",
          "addressRegion": "Comunidad Valenciana",
          "addressCountry": "ES"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 39.4699,
          "longitude": -0.3763
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
          { "@type": "Country", "name": "Belgium" },
          { "@type": "Country", "name": "Italy" },
          { "@type": "Country", "name": "Portugal" },
          { "@type": "Country", "name": "Monaco" },
          { "@type": "Country", "name": "Luxembourg" },
          { "@type": "Country", "name": "Sweden" },
          { "@type": "Country", "name": "Denmark" },
          { "@type": "Country", "name": "Norway" },
          { "@type": "Country", "name": "Ireland" }
        ],
        "knowsAbout": [
          "Architectural Visualization",
          "3D Architectural Rendering",
          "Architectural CGI",
          "Photorealistic 3D Exterior Rendering",
          "Photorealistic 3D Interior Rendering",
          "3D Architectural Animation",
          "Cinematic Architectural Film",
          "Real Estate Branding",
          "Property Development Naming & Identity",
          "Editorial Real Estate Sales Dossiers",
          "2D and 3D Commercial Floor Plans",
          "Real Estate Development Websites",
          "Interactive Apartment Floor Selector",
          "Off-Plan Property Marketing",
          "Digital Buyer Acquisition for Property Developers",
          "High-Net-Worth Individual (HNWI) Real Estate Marketing",
          "BIM to Render Workflow",
          "Revit 3D Visualization",
          "ArchiCAD 3D Visualization"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Full-Suite Real Estate Visualization & Launch Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": loc.s1Name,
                "description": loc.s1Short
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": loc.s2Name,
                "description": loc.s2Short
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": loc.s3Name,
                "description": loc.s3Short
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": loc.s4Name,
                "description": loc.s4Short
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": loc.s5Name,
                "description": loc.s5Short
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": loc.s6Name,
                "description": loc.s6Short
              }
            }
          ]
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34614459144",
          "contactType": "customer service",
          "email": "info@eidosrender.es",
          "availableLanguage": ["Spanish", "English", "German", "French"],
          "areaServed": ["ES", "DE", "FR", "GB", "CH", "AT", "NL", "BE", "IT", "PT", "MC", "LU", "EU"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/eidos-render"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://eidosrender.es/#website",
        "url": "https://eidosrender.es/",
        "name": "Eidos Render",
        "inLanguage": ["es", "en", "de", "fr"],
        "publisher": { "@id": "https://eidosrender.es/#organization" }
      },
      {
        "@type": "FAQPage",
        "@id": `${loc.canonical}#faq`,
        "mainEntity": loc.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${loc.canonical}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Eidos Render",
            "item": loc.canonical
          }
        ]
      }
    ]
  };

  return `<!DOCTYPE html>
<html lang="${loc.lang}">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-N6R4S8NC');</script>
  <!-- End Google Tag Manager -->

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>${loc.pageTitle}</title>
  <meta name="description" content="${loc.metaDesc}">
  <meta name="keywords" content="${loc.metaKeywords}">
  <link rel="canonical" href="${loc.canonical}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

  <!-- European Geo Meta Tags -->
  <meta name="geo.region" content="ES">
  <meta name="geo.placename" content="Valencia">
  <meta name="geo.position" content="39.4699;-0.3763">
  <meta name="ICBM" content="39.4699, -0.3763">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/">

  <!-- Multilingual & Geo-routing -->
  <script src="${assetPrefix}js/i18n.js"></script>

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Eidos Render">
  <meta property="og:title" content="${loc.pageTitle}">
  <meta property="og:description" content="${loc.metaDesc}">
  <meta property="og:url" content="${loc.canonical}">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">
  <meta property="og:image:width" content="1600">
  <meta property="og:image:height" content="900">
  <meta property="og:image:alt" content="Eidos Render — Architectural CGI & Launch Agency">
  <meta property="og:locale" content="${loc.ogLocale}">
  <meta property="og:locale:alternate" content="es_ES">
  <meta property="og:locale:alternate" content="en_GB">
  <meta property="og:locale:alternate" content="de_DE">
  <meta property="og:locale:alternate" content="fr_FR">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${loc.pageTitle}">
  <meta name="twitter:description" content="${loc.metaDesc}">
  <meta name="twitter:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="${assetPrefix}favicon.svg">
  <link rel="shortcut icon" href="${assetPrefix}favicon.svg">
  <link rel="apple-touch-icon" sizes="180x180" href="${assetPrefix}apple-touch-icon.png">

  <!-- Preload Hero Image -->
  <link rel="preload" as="image" href="${assetPrefix}img/render-fachada-edificio-obra-nueva.webp" fetchpriority="high">

  <!-- Typography & Stylesheets -->
  <link rel="stylesheet" href="${assetPrefix}assets/fonts.css">
  <link rel="stylesheet" href="${assetPrefix}style.css">

  <!-- Schema.org Knowledge Graph (Zero Prices) -->
  <script type="application/ld+json">
  ${JSON.stringify(schemaGraph, null, 2)}
  </script>
</head>
<body style="background-color: var(--cream); color: var(--charcoal);">

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4S8NC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- =====================================================
       00. CABECERA DINÁMICA CENTRADA:
       Isotipo grande a dos tintas + Nombre centrado debajo
       Al hacer scroll, el nombre se funde y queda solo el logo en navbar sutil
       ===================================================== -->
  <header class="nav-header" id="navHeader" role="banner">
    <div class="nav-inner">
      <div class="nav-center-brand">
        <a href="${homeLink}" class="brand-lockup-vertical" id="brandLockup" aria-label="Eidos Render">
          <svg class="isotype-hero" id="headerIsotype" viewBox="0 0 64 64" aria-hidden="true">
            <path class="iso-sun" fill="var(--granate)" d="M 12,34 A 20,20 0 0,1 52,34 Z" />
            <rect class="iso-line-1" fill="var(--charcoal)" x="6" y="40" width="52" height="5" />
            <rect class="iso-line-2" fill="var(--charcoal)" x="18" y="50" width="28" height="3" />
          </svg>
          <span class="brand-name-scroll" id="brandName">${loc.brandName}</span>
        </a>
      </div>
    </div>
  </header>

  <!-- =====================================================
       00B. BOTÓN FLOTANTE DERECHO & PANEL FLOTANTE TIPO APP
       ===================================================== -->
  <button class="floating-menu-btn" id="floatingMenuBtn" aria-label="Open menu" aria-expanded="false">
    <span class="menu-btn-label">${loc.menuBtn}</span>
    <span class="menu-btn-icon">
      <span class="line line-top"></span>
      <span class="line line-bottom"></span>
    </span>
  </button>

  <div class="floating-app-panel" id="floatingAppPanel" aria-label="Navigation" aria-hidden="true">
    <div class="app-panel-header">
      <span class="app-panel-title">${loc.appTitle}</span>
      <span class="kicker-dot" style="background-color: var(--granate); width: 6px; height: 6px;"></span>
    </div>

    <nav aria-label="Main navigation">
      <ul class="app-nav-list">
        <li class="app-nav-item">
          <a href="#hero" class="app-link">
            <span><span class="app-nav-num">01</span>${loc.nav1}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="#servicios" class="app-link">
            <span><span class="app-nav-num">02</span>${loc.nav2}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="#proyectos" class="app-link">
            <span><span class="app-nav-num">03</span>${loc.nav3}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="#branding" class="app-link">
            <span><span class="app-nav-num">04</span>${loc.nav4}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="#europa" class="app-link">
            <span><span class="app-nav-num">05</span>${loc.nav5}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="#proceso" class="app-link">
            <span><span class="app-nav-num">06</span>${loc.nav6}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="#faq" class="app-link">
            <span><span class="app-nav-num">07</span>${loc.nav7}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="#contacto" class="app-link">
            <span><span class="app-nav-num">08</span>${loc.nav8}</span>
            <span>→</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Selector de Idioma Elegante Tipo Segmented Control -->
    <div class="app-lang-segmented" aria-label="Language selector">
      <a href="${isRoot ? './' : '../'}" data-lang="es" class="${loc.lang === 'es' ? 'active' : ''}" onclick="window.setLang('es')">ES</a>
      <a href="${isRoot ? 'en/' : '../en/'}" data-lang="en" class="${loc.lang === 'en' ? 'active' : ''}" onclick="window.setLang('en')">EN</a>
      <a href="${isRoot ? 'de/' : '../de/'}" data-lang="de" class="${loc.lang === 'de' ? 'active' : ''}" onclick="window.setLang('de')">DE</a>
      <a href="${isRoot ? 'fr/' : '../fr/'}" data-lang="fr" class="${loc.lang === 'fr' ? 'active' : ''}" onclick="window.setLang('fr')">FR</a>
    </div>

    <div class="app-panel-footer">
      <a href="#contacto" class="app-cta-btn">
        ${loc.appCta}
      </a>
      <div class="app-contact-sub">${loc.appSub}</div>
    </div>
  </div>

  <main>

    <!-- =====================================================
         01. HERO EDITORIAL CON TEXTO INMEDIATO
         ===================================================== -->
    <section class="section hero-editorial-wrap" id="hero" style="background-color: var(--cream); border-bottom: 1px solid var(--line);">
      <div class="container">

        <div class="kicker text-reveal-flow" style="color: var(--granate); margin-bottom: 24px;">
          <span class="kicker-dot" style="background-color: var(--granate);"></span>
          ${loc.kicker}
        </div>

        <div class="hero-statement-grid">
          <div>
            <h1 class="hero-main-title text-reveal-flow">
              ${loc.heroH1Pre}<br>
              <span class="text-prata-accent">${loc.heroH1Acc}</span><br>
              ${loc.heroH1Post}
            </h1>

            <p class="text-reveal-flow" style="font-family: var(--font-special); font-size: 1.25rem; line-height: 1.6; color: var(--warm-gray); max-width: 58ch; margin-bottom: 36px;">
              ${loc.heroSub}
            </p>

            <div class="contact-buttons-group text-reveal-flow">
              <a href="#contacto" class="btn btn-editorial" style="background-color: var(--granate); color: var(--cream); border: none; padding: 16px 32px; font-family: var(--font-syncopate); font-size: 11px; letter-spacing: 0.14em; border-radius: 6px !important;">
                ${loc.ctaPrimary}
              </a>
              <a href="#servicios" class="link-arrow" style="font-family: var(--font-syncopate); font-size: 11px; font-weight: 700; color: var(--charcoal); letter-spacing: 0.12em;">
                ${loc.ctaSecondary}
              </a>
            </div>
          </div>

          <div class="text-reveal-flow">
            <div class="hero-supporting-media" style="border-radius: 12px !important; overflow: hidden;">
              <picture>
                <source srcset="${assetPrefix}img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
                <img src="${assetPrefix}img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Render arquitectura 3D obra nueva — Eidos Render" loading="eager" fetchpriority="high">
              </picture>
              <div style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; font-family: var(--font-syncopate); font-size: 10px; letter-spacing: 0.12em; color: var(--warm-gray); background-color: var(--cream);">
                <span>${loc.heroImgTag}</span>
                <span style="color: var(--granate); font-weight: 700;">${loc.heroImgLoc}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- =====================================================
         02. INTRODUCCIÓN EDITORIAL (Fondo: Crema)
         ===================================================== -->
    <section class="section intro-section" style="background-color: var(--cream); color: var(--charcoal);">
      <div class="container">
        <div class="kicker text-reveal-flow" style="color: var(--granate);">
          <span class="kicker-dot" style="background-color: var(--granate);"></span>
          ${loc.introKicker}
        </div>

        <div class="intro-grid">
          <h2 class="display-title intro-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.4rem, 5vw, 4.8rem); line-height: 0.98;">
            ${loc.introH1}
          </h2>

          <div class="intro-copy text-reveal-flow" style="font-family: var(--font-special); font-size: 1.15rem; line-height: 1.65;">
            <p style="margin-bottom: 20px;">
              ${loc.introP1}
            </p>
            <p style="color: var(--warm-gray);">
              ${loc.introP2}
            </p>
            <div style="margin-top: 36px;">
              <a href="#servicios" class="link-arrow" style="font-family: var(--font-syncopate); font-size: 11px; font-weight: 700; color: var(--granate); letter-spacing: 0.14em;">
                ${loc.introLink}
              </a>
            </div>
          </div>
        </div>

        <div class="intro-divider" style="background-color: var(--line); margin-top: 80px; height: 1px;"></div>
      </div>
    </section>

    <!-- =====================================================
         03. POSICIONAMIENTO (Fondo: Crema Secundaria #E8E1D3)
         ===================================================== -->
    <section class="section" style="background-color: var(--cream-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: clamp(70px, 10vw, 130px) 0; color: var(--charcoal);">
      <div class="container">
        <div class="kicker text-reveal-flow" style="color: var(--granate); margin-bottom: 24px;">
          <span class="kicker-dot" style="background-color: var(--granate);"></span>
          ${loc.posKicker}
        </div>
        <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.4rem, 5.2vw, 4.8rem); line-height: 1.02; max-width: 1100px; text-transform: uppercase;">
          ${loc.posTitle}
        </h2>
        <p class="body-large text-reveal-flow" style="max-width: 720px; margin-top: 32px; font-family: var(--font-special); color: var(--warm-gray); font-size: 1.15rem; line-height: 1.65;">
          ${loc.posCopy}
        </p>
      </div>
    </section>

    <!-- =====================================================
         04. CAPACIDADES / SERVICIOS (Fondo: Granate Vivo #A31A33)
         ===================================================== -->
    <section class="section" id="servicios" style="background-color: var(--granate); color: var(--cream);">
      <div class="container">
        <div class="services-header">
          <div>
            <div class="kicker text-reveal-flow" style="color: var(--cream);">
              <span class="kicker-dot" style="background-color: var(--cream);"></span>
              ${loc.servKicker}
            </div>
            <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.4rem, 4.8vw, 4.4rem); color: var(--cream); line-height: 0.98;">
              ${loc.servTitle}
            </h2>
          </div>
          <div class="text-reveal-flow" style="font-family: var(--font-special); font-size: 1.1rem; color: rgba(241,235,223,0.85); line-height: 1.6;">
            ${loc.servSub}
          </div>
        </div>

        <div class="service-accordion">

          <!-- 01 -->
          <div class="service-item active text-reveal-flow" style="border-top: 1px solid var(--line-on-granate);">
            <div class="service-summary">
              <span class="service-num" style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream);">${loc.s1Num}</span>
              <h3 class="service-name" style="font-family: var(--font-special); font-size: 1.6rem; color: var(--cream);">${loc.s1Name}</h3>
              <p class="service-short" style="font-family: var(--font-special); color: rgba(241,235,223,0.8);">${loc.s1Short}</p>
              <div class="service-toggle-icon" style="color: var(--cream);">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p style="font-family: var(--font-special); font-size: 1.05rem; line-height: 1.65; color: rgba(241,235,223,0.9);">
                    ${loc.s1P}
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables" style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-special); font-size: 0.95rem; color: var(--cream);">
                    ${loc.s1Items.map(i => `<li>${i}</li>`).join('\n')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 02 -->
          <div class="service-item text-reveal-flow" style="border-top: 1px solid var(--line-on-granate);">
            <div class="service-summary">
              <span class="service-num" style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream);">${loc.s2Num}</span>
              <h3 class="service-name" style="font-family: var(--font-special); font-size: 1.6rem; color: var(--cream);">${loc.s2Name}</h3>
              <p class="service-short" style="font-family: var(--font-special); color: rgba(241,235,223,0.8);">${loc.s2Short}</p>
              <div class="service-toggle-icon" style="color: var(--cream);">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p style="font-family: var(--font-special); font-size: 1.05rem; line-height: 1.65; color: rgba(241,235,223,0.9);">
                    ${loc.s2P}
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables" style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-special); font-size: 0.95rem; color: var(--cream);">
                    ${loc.s2Items.map(i => `<li>${i}</li>`).join('\n')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 03 -->
          <div class="service-item text-reveal-flow" style="border-top: 1px solid var(--line-on-granate);">
            <div class="service-summary">
              <span class="service-num" style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream);">${loc.s3Num}</span>
              <h3 class="service-name" style="font-family: var(--font-special); font-size: 1.6rem; color: var(--cream);">${loc.s3Name}</h3>
              <p class="service-short" style="font-family: var(--font-special); color: rgba(241,235,223,0.8);">${loc.s3Short}</p>
              <div class="service-toggle-icon" style="color: var(--cream);">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p style="font-family: var(--font-special); font-size: 1.05rem; line-height: 1.65; color: rgba(241,235,223,0.9);">
                    ${loc.s3P}
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables" style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-special); font-size: 0.95rem; color: var(--cream);">
                    ${loc.s3Items.map(i => `<li>${i}</li>`).join('\n')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 04 -->
          <div class="service-item text-reveal-flow" style="border-top: 1px solid var(--line-on-granate);">
            <div class="service-summary">
              <span class="service-num" style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream);">${loc.s4Num}</span>
              <h3 class="service-name" style="font-family: var(--font-special); font-size: 1.6rem; color: var(--cream);">${loc.s4Name}</h3>
              <p class="service-short" style="font-family: var(--font-special); color: rgba(241,235,223,0.8);">${loc.s4Short}</p>
              <div class="service-toggle-icon" style="color: var(--cream);">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p style="font-family: var(--font-special); font-size: 1.05rem; line-height: 1.65; color: rgba(241,235,223,0.9);">
                    ${loc.s4P}
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables" style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-special); font-size: 0.95rem; color: var(--cream);">
                    ${loc.s4Items.map(i => `<li>${i}</li>`).join('\n')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 05 -->
          <div class="service-item text-reveal-flow" style="border-top: 1px solid var(--line-on-granate);">
            <div class="service-summary">
              <span class="service-num" style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream);">${loc.s5Num}</span>
              <h3 class="service-name" style="font-family: var(--font-special); font-size: 1.6rem; color: var(--cream);">${loc.s5Name}</h3>
              <p class="service-short" style="font-family: var(--font-special); color: rgba(241,235,223,0.8);">${loc.s5Short}</p>
              <div class="service-toggle-icon" style="color: var(--cream);">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p style="font-family: var(--font-special); font-size: 1.05rem; line-height: 1.65; color: rgba(241,235,223,0.9);">
                    ${loc.s5P}
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables" style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-special); font-size: 0.95rem; color: var(--cream);">
                    ${loc.s5Items.map(i => `<li>${i}</li>`).join('\n')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 06 -->
          <div class="service-item text-reveal-flow" style="border-top: 1px solid var(--line-on-granate); border-bottom: 1px solid var(--line-on-granate);">
            <div class="service-summary">
              <span class="service-num" style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream);">${loc.s6Num}</span>
              <h3 class="service-name" style="font-family: var(--font-special); font-size: 1.6rem; color: var(--cream);">${loc.s6Name}</h3>
              <p class="service-short" style="font-family: var(--font-special); color: rgba(241,235,223,0.8);">${loc.s6Short}</p>
              <div class="service-toggle-icon" style="color: var(--cream);">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p style="font-family: var(--font-special); font-size: 1.05rem; line-height: 1.65; color: rgba(241,235,223,0.9);">
                    ${loc.s6P}
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables" style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-special); font-size: 0.95rem; color: var(--cream);">
                    ${loc.s6Items.map(i => `<li>${i}</li>`).join('\n')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style="margin-top: 50px;" class="text-reveal-flow">
          <a href="#contacto" class="btn btn-editorial" style="background-color: var(--cream); color: var(--granate); border: none; padding: 18px 36px; font-family: var(--font-syncopate); font-size: 11px; letter-spacing: 0.14em; border-radius: 6px !important;">
            ${loc.servCta}
          </a>
        </div>
      </div>
    </section>

    <!-- =====================================================
         05. PORTFOLIO DE CASOS (Fondo: Crema)
         ===================================================== -->
    <section class="section" id="proyectos" style="background-color: var(--cream); color: var(--charcoal);">
      <div class="container">
        <div class="portfolio-header">
          <div>
            <div class="kicker text-reveal-flow" style="color: var(--granate);">
              <span class="kicker-dot" style="background-color: var(--granate);"></span>
              ${loc.portKicker}
            </div>
            <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.4rem, 4.8vw, 4.4rem); line-height: 0.98;">
              ${loc.portTitle}
            </h2>
          </div>
          <div class="text-reveal-flow" style="font-family: var(--font-special); color: var(--warm-gray); font-size: 1.05rem; max-width: 440px;">
            ${loc.portSub}
          </div>
        </div>

        <div class="editorial-portfolio">

          <!-- Proyecto 01 -->
          <article class="project-card span-8 text-reveal-flow">
            <div class="project-card-link">
              <div class="project-media-wrap" style="border-radius: 12px !important; overflow: hidden; border: 1px solid var(--line);">
                <picture>
                  <source srcset="${assetPrefix}img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
                  <img src="${assetPrefix}img/render-fachada-edificio-obra-nueva-1600.jpg" alt="${loc.p1Name} — 3D CGI Architecture" loading="lazy">
                </picture>
              </div>
              <div class="project-info" style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid var(--line);">
                <div>
                  <h3 class="project-name" style="font-family: var(--font-special); font-size: 1.4rem;">${loc.p1Name}</h3>
                  <div class="project-services-line" style="font-family: var(--font-syncopate); font-size: 10px; color: var(--warm-gray); letter-spacing: 0.1em; text-transform: uppercase;">${loc.p1Type}</div>
                </div>
                <div class="project-meta" style="font-family: var(--font-syncopate); font-size: 11px; font-weight: 700;">Valencia, ES</div>
              </div>
            </div>
          </article>

          <!-- Proyecto 02 -->
          <article class="project-card span-4 tall text-reveal-flow">
            <div class="project-card-link">
              <div class="project-media-wrap" style="border-radius: 12px !important; overflow: hidden; border: 1px solid var(--line);">
                <picture>
                  <source srcset="${assetPrefix}img/infografia-exterior-zonas-comunes-obra-nueva.webp" type="image/webp">
                  <img src="${assetPrefix}img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="${loc.p2Name} — 3D CGI Landscape" loading="lazy">
                </picture>
              </div>
              <div class="project-info" style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid var(--line);">
                <div>
                  <h3 class="project-name" style="font-family: var(--font-special); font-size: 1.4rem;">${loc.p2Name}</h3>
                  <div class="project-services-line" style="font-family: var(--font-syncopate); font-size: 10px; color: var(--warm-gray); letter-spacing: 0.1em; text-transform: uppercase;">${loc.p2Type}</div>
                </div>
                <div class="project-meta" style="font-family: var(--font-syncopate); font-size: 11px; font-weight: 700;">Madrid, ES</div>
              </div>
            </div>
          </article>

          <!-- Proyecto 03 -->
          <article class="project-card span-4 tall text-reveal-flow">
            <div class="project-card-link">
              <div class="project-media-wrap" style="border-radius: 12px !important; overflow: hidden; border: 1px solid var(--line);">
                <picture>
                  <source srcset="${assetPrefix}img/render-exterior-vivienda-unifamiliar-piscina.webp" type="image/webp">
                  <img src="${assetPrefix}img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="${loc.p3Name} — 3D CGI Luxury Villa" loading="lazy">
                </picture>
              </div>
              <div class="project-info" style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid var(--line);">
                <div>
                  <h3 class="project-name" style="font-family: var(--font-special); font-size: 1.4rem;">${loc.p3Name}</h3>
                  <div class="project-services-line" style="font-family: var(--font-syncopate); font-size: 10px; color: var(--warm-gray); letter-spacing: 0.1em; text-transform: uppercase;">${loc.p3Type}</div>
                </div>
                <div class="project-meta" style="font-family: var(--font-syncopate); font-size: 11px; font-weight: 700;">Alicante, ES</div>
              </div>
            </div>
          </article>

          <!-- Proyecto 04 -->
          <article class="project-card span-8 text-reveal-flow">
            <div class="project-card-link">
              <div class="project-media-wrap" style="border-radius: 12px !important; overflow: hidden; border: 1px solid var(--line);">
                <picture>
                  <source srcset="${assetPrefix}img/infografia-3d-salon-moderno-doble-altura.webp" type="image/webp">
                  <img src="${assetPrefix}img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="${loc.p4Name} — 3D CGI Penthouse Interior" loading="lazy">
                </picture>
              </div>
              <div class="project-info" style="display: flex; justify-content: space-between; align-items: center; padding: 18px 0; border-bottom: 1px solid var(--line);">
                <div>
                  <h3 class="project-name" style="font-family: var(--font-special); font-size: 1.4rem;">${loc.p4Name}</h3>
                  <div class="project-services-line" style="font-family: var(--font-syncopate); font-size: 10px; color: var(--warm-gray); letter-spacing: 0.1em; text-transform: uppercase;">${loc.p4Type}</div>
                </div>
                <div class="project-meta" style="font-family: var(--font-syncopate); font-size: 11px; font-weight: 700;">Interior Prime</div>
              </div>
            </div>
          </article>

        </div>

        <div style="margin-top: 60px; text-align: center;" class="text-reveal-flow">
          <a href="${isRoot ? 'proyectos.html' : 'projects.html'}" class="btn btn-editorial" style="background-color: transparent; border: 1px solid var(--charcoal); color: var(--charcoal); padding: 18px 36px; font-family: var(--font-syncopate); font-size: 11px; letter-spacing: 0.14em; border-radius: 6px !important;">
            ${loc.portBtn}
          </a>
        </div>
      </div>
    </section>

    <!-- =====================================================
         06. VÍDEO Y ANIMACIÓN (Fondo: Granate Vivo #A31A33)
         ===================================================== -->
    <section class="section" style="background-color: var(--granate); color: var(--cream);">
      <div class="container">
        <div class="kicker text-reveal-flow" style="color: var(--cream);">
          <span class="kicker-dot" style="background-color: var(--cream);"></span>
          ${loc.vidKicker}
        </div>

        <div class="video-section-grid">
          <div>
            <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.4rem, 4.8vw, 4.4rem); color: var(--cream); line-height: 0.98; margin-bottom: 24px;">
              ${loc.vidTitle}
            </h2>
            <p class="text-reveal-flow" style="font-family: var(--font-special); font-size: 1.15rem; line-height: 1.65; color: rgba(241,235,223,0.85); margin-bottom: 32px;">
              ${loc.vidSub}
            </p>
          </div>

          <div class="reels-grid text-reveal-flow">
            <div style="border-radius: 12px !important; overflow: hidden; border: 1px solid var(--line-on-granate); background-color: rgba(27,25,24,0.3);">
              <video autoplay muted loop playsinline poster="${assetPrefix}img/infografia-exterior-zonas-comunes-obra-nueva.webp" style="width: 100%; display: block; aspect-ratio: 9/16; object-fit: cover;">
                <source src="${assetPrefix}video/reel-vertical-render-arquitectura-residencial.mp4" type="video/mp4">
              </video>
            </div>
            <div style="border-radius: 12px !important; overflow: hidden; border: 1px solid var(--line-on-granate); background-color: rgba(27,25,24,0.3);">
              <video autoplay muted loop playsinline poster="${assetPrefix}img/render-exterior-vivienda-unifamiliar-piscina.webp" style="width: 100%; display: block; aspect-ratio: 9/16; object-fit: cover;">
                <source src="${assetPrefix}video/reel-vertical-animacion-villa-piscina.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         07. IDENTIDAD DE PROMOCIÓN (Fondo: Crema)
         ===================================================== -->
    <section class="section" id="branding" style="background-color: var(--cream); color: var(--charcoal);">
      <div class="container">
        <div class="feature-split">
          <div>
            <div class="kicker text-reveal-flow" style="color: var(--granate);">
              <span class="kicker-dot" style="background-color: var(--granate);"></span>
              ${loc.brandKicker}
            </div>
            <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.4rem, 4.8vw, 4.4rem); line-height: 0.98; margin-bottom: 24px;">
              ${loc.brandTitle}
            </h2>
            <p class="text-reveal-flow" style="font-family: var(--font-special); font-size: 1.15rem; line-height: 1.65; color: var(--warm-gray); margin-bottom: 36px; max-width: 52ch;">
              ${loc.brandSub}
            </p>
            <div class="text-reveal-flow">
              <a href="#contacto" class="btn btn-editorial" style="background-color: var(--granate); color: var(--cream); border: none; padding: 16px 32px; font-family: var(--font-syncopate); font-size: 11px; letter-spacing: 0.14em; border-radius: 6px !important;">
                ${loc.brandCta}
              </a>
            </div>
          </div>

          <div class="feature-cards-grid text-reveal-flow">
            <div style="border: 1px solid var(--line); padding: 32px; border-radius: 12px !important; background-color: var(--cream-2);">
              <div style="font-family: var(--font-syncopate); font-size: 12px; font-weight: 700; color: var(--granate); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">${loc.b1Title}</div>
              <p style="font-family: var(--font-special); font-size: 0.95rem; color: var(--warm-gray); line-height: 1.6;">${loc.b1Desc}</p>
            </div>
            <div style="border: 1px solid var(--line); padding: 32px; border-radius: 12px !important; background-color: var(--cream-2);">
              <div style="font-family: var(--font-syncopate); font-size: 12px; font-weight: 700; color: var(--granate); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">${loc.b2Title}</div>
              <p style="font-family: var(--font-special); font-size: 0.95rem; color: var(--warm-gray); line-height: 1.6;">${loc.b2Desc}</p>
            </div>
            <div style="border: 1px solid var(--line); padding: 32px; border-radius: 12px !important; background-color: var(--cream-2);">
              <div style="font-family: var(--font-syncopate); font-size: 12px; font-weight: 700; color: var(--granate); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">${loc.b3Title}</div>
              <p style="font-family: var(--font-special); font-size: 0.95rem; color: var(--warm-gray); line-height: 1.6;">${loc.b3Desc}</p>
            </div>
            <div style="border: 1px solid var(--line); padding: 32px; border-radius: 12px !important; background-color: var(--cream-2);">
              <div style="font-family: var(--font-syncopate); font-size: 12px; font-weight: 700; color: var(--granate); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">${loc.b4Title}</div>
              <p style="font-family: var(--font-special); font-size: 0.95rem; color: var(--warm-gray); line-height: 1.6;">${loc.b4Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         08. ÁMBITO DE ACTUACIÓN EUROPEO (Fondo: Crema Secundaria #E8E1D3)
         POTENCIA SEO 200% PARA TODA EUROPA
         ===================================================== -->
    <section class="section" id="europa" style="background-color: var(--cream-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: clamp(70px, 10vw, 130px) 0; color: var(--charcoal);">
      <div class="container">
        <div class="kicker text-reveal-flow" style="color: var(--granate); margin-bottom: 24px;">
          <span class="kicker-dot" style="background-color: var(--granate);"></span>
          ${loc.europeKicker}
        </div>

        <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.4rem, 5vw, 4.4rem); line-height: 1.02; max-width: 1000px;">
          ${loc.europeTitle}
        </h2>
        <p class="body-large text-reveal-flow" style="max-width: 760px; margin-top: 24px; font-family: var(--font-special); color: var(--warm-gray); font-size: 1.15rem; line-height: 1.65;">
          ${loc.europeSub}
        </p>

        <div class="europe-grid text-reveal-flow">
          ${loc.regions.map(r => `
          <div class="europe-card">
            <div>
              <div class="europe-card-region">${r.tag}</div>
              <h3 class="europe-card-hubs">${r.hubs}</h3>
              <p class="europe-card-desc">${r.desc}</p>
            </div>
            <div class="europe-card-tag">${r.scope}</div>
          </div>
          `).join('')}
        </div>

        <div class="europe-tech-strip text-reveal-flow">
          ${loc.techStrip.map(t => `
          <div class="europe-tech-item">
            <span class="europe-tech-dot"></span>
            <span>${t}</span>
          </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- =====================================================
         09. METODOLOGÍA / PROCESO (Fondo: Granate Vivo #A31A33)
         ===================================================== -->
    <section class="section" id="proceso" style="background-color: var(--granate); color: var(--cream);">
      <div class="container">
        <div class="kicker text-reveal-flow" style="color: var(--cream);">
          <span class="kicker-dot" style="background-color: var(--cream);"></span>
          ${loc.procKicker}
        </div>
        <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.2rem, 4.4vw, 4.2rem); color: var(--cream); line-height: 1.02; margin-bottom: 40px;">
          ${loc.procTitle}
        </h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
          <div class="text-reveal-flow" style="border: 1px solid var(--line-on-granate); padding: 32px; border-radius: 12px !important;">
            <div style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream); margin-bottom: 12px;">${loc.f1Num}</div>
            <div style="font-family: var(--font-syncopate); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">${loc.f1Title}</div>
            <p style="font-family: var(--font-special); font-size: 0.95rem; color: rgba(241,235,223,0.85); line-height: 1.6;">${loc.f1P}</p>
          </div>
          <div class="text-reveal-flow" style="border: 1px solid var(--line-on-granate); padding: 32px; border-radius: 12px !important;">
            <div style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream); margin-bottom: 12px;">${loc.f2Num}</div>
            <div style="font-family: var(--font-syncopate); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">${loc.f2Title}</div>
            <p style="font-family: var(--font-special); font-size: 0.95rem; color: rgba(241,235,223,0.85); line-height: 1.6;">${loc.f2P}</p>
          </div>
          <div class="text-reveal-flow" style="border: 1px solid var(--line-on-granate); padding: 32px; border-radius: 12px !important;">
            <div style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream); margin-bottom: 12px;">${loc.f3Num}</div>
            <div style="font-family: var(--font-syncopate); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">${loc.f3Title}</div>
            <p style="font-family: var(--font-special); font-size: 0.95rem; color: rgba(241,235,223,0.85); line-height: 1.6;">${loc.f3P}</p>
          </div>
          <div class="text-reveal-flow" style="border: 1px solid var(--line-on-granate); padding: 32px; border-radius: 12px !important;">
            <div style="font-family: var(--font-prata); font-size: 1.8rem; color: var(--cream); margin-bottom: 12px;">${loc.f4Num}</div>
            <div style="font-family: var(--font-syncopate); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">${loc.f4Title}</div>
            <p style="font-family: var(--font-special); font-size: 0.95rem; color: rgba(241,235,223,0.85); line-height: 1.6;">${loc.f4P}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         10. PREGUNTAS FRECUENTES / FAQ (Fondo: Crema)
         POTENCIA SEO & SNIPPETS GOOGLE FAQPAGE
         ===================================================== -->
    <section class="section" id="faq" style="background-color: var(--cream); color: var(--charcoal); padding: clamp(70px, 10vw, 130px) 0;">
      <div class="container">
        <div class="kicker text-reveal-flow" style="color: var(--granate); margin-bottom: 24px;">
          <span class="kicker-dot" style="background-color: var(--granate);"></span>
          ${loc.faqKicker}
        </div>

        <div class="faq-layout-grid">
          <div>
            <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.4rem, 4.6vw, 4.2rem); line-height: 1.02;">
              ${loc.faqTitle}
            </h2>
            <p class="text-reveal-flow" style="font-family: var(--font-special); color: var(--warm-gray); font-size: 1.1rem; line-height: 1.6; margin-top: 24px;">
              ${loc.faqSub}
            </p>
          </div>

          <div>
            <div class="faq-accordion text-reveal-flow">
              ${loc.faqs.map((f, idx) => `
              <div class="faq-item ${idx === 0 ? 'active' : ''}">
                <button class="faq-question" aria-expanded="${idx === 0 ? 'true' : 'false'}">
                  <span>${f.q}</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer">
                  <p>${f.a}</p>
                </div>
              </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         11. CONTACTO DIRECTO (Fondo: Crema)
         ===================================================== -->
    <section class="section" id="contacto" style="background-color: var(--cream); color: var(--charcoal); padding: clamp(80px, 12vw, 140px) 0; border-top: 1px solid var(--line);">
      <div class="container">
        <div style="max-width: 900px;">
          <div class="kicker text-reveal-flow" style="color: var(--granate);">
            <span class="kicker-dot" style="background-color: var(--granate);"></span>
            ${loc.cntKicker}
          </div>

          <h2 class="display-title text-reveal-flow" style="font-family: var(--font-special); font-size: clamp(2.8rem, 6vw, 5.6rem); line-height: 0.95; margin-bottom: 32px;">
            ${loc.cntTitle}
          </h2>

          <p class="body-large text-reveal-flow" style="font-family: var(--font-special); color: var(--warm-gray); font-size: 1.25rem; line-height: 1.6; margin-bottom: 48px; max-width: 60ch;">
            ${loc.cntSub}
          </p>

          <div class="contact-buttons-group text-reveal-flow">
            <a href="mailto:info@eidosrender.es" class="btn btn-editorial" style="background-color: var(--granate); color: var(--cream); border: none; padding: 18px 36px; font-family: var(--font-syncopate); font-size: 11.5px; letter-spacing: 0.14em; border-radius: 8px !important;">
              ${loc.cntEmail}
            </a>
            <a href="https://wa.me/34614459144" target="_blank" rel="noopener" class="btn btn-editorial" style="background-color: transparent; border: 1px solid var(--charcoal); color: var(--charcoal); padding: 18px 36px; font-family: var(--font-syncopate); font-size: 11.5px; letter-spacing: 0.14em; border-radius: 8px !important;">
              ${loc.cntWa}
            </a>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- =====================================================
       PIE DE PÁGINA (Fondo: Granate Vivo #A31A33)
       ===================================================== -->
  <footer style="background-color: var(--granate); color: var(--cream); border-top: 1px solid var(--line-on-granate); padding: 80px 0 40px;">
    <div class="container">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--line-on-granate); padding-bottom: 40px; margin-bottom: 40px; flex-wrap: wrap; gap: 20px;">
        <div style="display: flex; align-items: center; gap: 20px;">
          <svg class="isotype-icon" viewBox="0 0 64 64" width="32" height="32" aria-hidden="true">
            <path fill="var(--cream)" d="M 12,34 A 20,20 0 0,1 52,34 Z" />
            <rect fill="var(--cream)" x="6" y="40" width="52" height="5" />
            <rect fill="var(--cream)" x="18" y="50" width="28" height="3" />
          </svg>
          <span style="font-family: var(--font-syncopate); font-weight: 700; font-size: 14px; letter-spacing: 0.16em;">EIDOS RENDER</span>
        </div>
        <div style="font-family: var(--font-special); font-size: 13px; color: rgba(241,235,223,0.85);">
          ${loc.footerSub}
        </div>
      </div>

      <!-- European Coverage Bar -->
      <div style="padding-bottom: 28px; margin-bottom: 28px; border-bottom: 1px solid var(--line-on-granate); font-family: var(--font-syncopate); font-size: 9.5px; letter-spacing: 0.12em; color: rgba(241,235,223,0.7); text-transform: uppercase;">
        ${loc.europeCoverageText}
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; font-family: var(--font-syncopate); font-size: 10px; letter-spacing: 0.1em; color: rgba(241,235,223,0.65); flex-wrap: wrap; gap: 16px;">
        <div>${loc.copy}</div>
        <div style="display: flex; gap: 24px;">
          <a href="${loc.legalUrl}" style="color: inherit;">${loc.legal}</a>
          <a href="${loc.privacyUrl}" style="color: inherit;">${loc.privacy}</a>
          <a href="${loc.cookiesUrl}" style="color: inherit;">${loc.cookies}</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scripts: Vendor y Controlador de Movimiento -->
  <script src="${assetPrefix}assets/vendor/lenis.min.js"></script>
  <script src="${assetPrefix}assets/vendor/gsap.min.js"></script>
  <script src="${assetPrefix}assets/vendor/ScrollTrigger.min.js"></script>
  <script src="${assetPrefix}main.js"></script>
</body>
</html>`;
}

// 1. Build Spanish Root index.html
const esHtml = generateHtml(seoData.es);
fs.writeFileSync(path.join(__dirname, '../index.html'), esHtml, 'utf8');
console.log('✅ Generated index.html (ES) with 200% SEO, European Scope & FAQ');

// 2. Build English en/index.html
const enHtml = generateHtml(seoData.en);
fs.writeFileSync(path.join(__dirname, '../en/index.html'), enHtml, 'utf8');
console.log('✅ Generated en/index.html (EN) with 200% SEO, European Scope & FAQ');

// 3. Build German de/index.html
const deHtml = generateHtml(seoData.de);
fs.writeFileSync(path.join(__dirname, '../de/index.html'), deHtml, 'utf8');
console.log('✅ Generated de/index.html (DE) with 200% SEO, European Scope & FAQ');

// 4. Build French fr/index.html
const frHtml = generateHtml(seoData.fr);
fs.writeFileSync(path.join(__dirname, '../fr/index.html'), frHtml, 'utf8');
console.log('✅ Generated fr/index.html (FR) with 200% SEO, European Scope & FAQ');
