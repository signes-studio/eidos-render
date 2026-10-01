const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

// Helper to write file safely
function writeFile(relPath, content) {
  const fullPath = path.join(root, relPath);
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Synced:', relPath);
}

// --------------------------------------------------------------------------
// 1. ENGLISH INDEX (en/index.html)
// --------------------------------------------------------------------------
const enIndexHtml = `<!DOCTYPE html>
<html lang="en">
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
  
  <title>Eidos Render | Architectural Visualisation & Real Estate Launch</title>
  <meta name="description" content="High-end 3D architectural visualisation, art direction, and marketing collateral for property developments and signature architecture studios across Europe.">
  <link rel="canonical" href="https://eidosrender.es/en/">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/">

  <!-- Multilingual & Geo-routing -->
  <script src="../js/i18n.js"></script>

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Eidos Render">
  <meta property="og:title" content="Eidos Render | Architectural Visualisation & Real Estate Launch">
  <meta property="og:description" content="Visual partner for property developers. From architectural project to market launch.">
  <meta property="og:url" content="https://eidosrender.es/en/">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">
  <meta name="twitter:card" content="summary_large_image">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon.png">
  <link rel="shortcut icon" href="../favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">

  <!-- Tipografía Editorial (Prata + Barlow Condensed + Amiri) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Barlow+Condensed:wght@400;500;600;700&family=Prata&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="../style.css">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://eidosrender.es/en/#organization",
        "name": "Eidos Render",
        "url": "https://eidosrender.es/en/",
        "logo": "https://eidosrender.es/favicon.png",
        "email": "info@eidosrender.es",
        "telephone": "+34614459144",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Valencia",
          "addressCountry": "ES"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://eidosrender.es/en/#website",
        "url": "https://eidosrender.es/en/",
        "name": "Eidos Render",
        "publisher": { "@id": "https://eidosrender.es/en/#organization" }
      }
    ]
  }
  </script>
</head>
<body class="bg-paper">

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4S8NC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- Header -->
  <header class="nav-header" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo" aria-label="Eidos Render Home">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Main navigation">
        <ul class="nav-links">
          <li><a href="#proyectos">Projects</a></li>
          <li><a href="#servicios">Services</a></li>
          <li><a href="#estudio">Studio</a></li>
          <li><a href="#proceso">Process</a></li>
          <li><a href="#contacto">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Language selector">
          <a href="../" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="en">EN</span>
          <span class="lang-divider">/</span>
          <a href="../de/" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <a href="../fr/" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>

        <a href="#contacto" class="nav-cta">
          LET'S DISCUSS THE PROJECT →
        </a>
      </div>

      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-nav-overlay" aria-hidden="true">
    <div>
      <div class="mobile-lang-switcher" aria-label="Language selector">
        <a href="../" data-lang="es" onclick="window.setLang('es')">ES</a>
        <span class="active" data-lang="en">EN</span>
        <a href="../de/" data-lang="de" onclick="window.setLang('de')">DE</a>
        <a href="../fr/" data-lang="fr" onclick="window.setLang('fr')">FR</a>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="#proyectos">Projects</a></li>
        <li><a href="#servicios">Services</a></li>
        <li><a href="#estudio">Studio</a></li>
        <li><a href="#proceso">Process</a></li>
        <li><a href="#contacto">Contact</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Visualisation & Launch</div>
      <div>Valencia · Serving Clients Across Europe</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main>

    <!-- 01. HERO -->
    <section class="section-hero bg-ink" id="hero">
      <div style="position: absolute; inset: 0; overflow: hidden; z-index: 1;">
        <picture>
          <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
          <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Residential exterior architectural rendering — Eidos Render" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.42;" fetchpriority="high">
        </picture>
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(11,11,12,0.6) 0%, rgba(11,11,12,0.2) 50%, rgba(11,11,12,0.85) 100%);"></div>
      </div>

      <div class="container" style="position: relative; z-index: 2; margin-top: auto; padding-bottom: 80px;">
        <div class="kicker crimson">
          <span class="kicker-dot"></span>
          Visual Direction & Commercial Launch
        </div>

        <h1 class="display-hero" style="color: var(--paper); max-width: 1300px; margin-bottom: 28px;">
          From architectural<br>
          project to<br>
          market launch.
        </h1>

        <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px; align-items: flex-end; border-top: 1px solid var(--line-dark); padding-top: 32px;">
          <p class="body-large" style="color: rgba(244, 243, 239, 0.85);">
            We start with the architecture. We build its visual identity. And we bring it to market with an integrated creative framework engineered for developers, architects, and private equity funds.
          </p>
          <div style="text-align: right;">
            <a href="#proyectos" class="link-draw" style="color: var(--paper);">
              EXPLORE CURATED PROJECTS ↓
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 02. MANIFESTO -->
    <section class="section bg-paper">
      <div class="container">
        <div class="grid-12">
          <div style="grid-column: 1 / 3;">
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Manifesto
            </span>
          </div>
          <div style="grid-column: 3 / 13;">
            <p class="manifesto-text" style="color: var(--ink); margin-bottom: 40px;">
              The render is the product. Every lighting calculation, camera angle, and material choice exists so the architecture speaks with its highest value. The interface steps back; the image leads.
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; border-top: 1px solid var(--line); padding-top: 40px;">
              <div>
                <span class="kicker signal" style="margin-bottom: 8px;">01 · Architectural Discernment</span>
                <p class="body-regular body-muted">
                  We interpret geometries, construction systems, and material assemblies before initiating 3D production.
                </p>
              </div>
              <div>
                <span class="kicker signal" style="margin-bottom: 8px;">02 · Unified Art Direction</span>
                <p class="body-regular body-muted">
                  Imagery, brand narrative, editorial brochures, and digital touchpoints developed under a single creative eye.
                </p>
              </div>
              <div>
                <span class="kicker signal" style="margin-bottom: 8px;">03 · Commercial Authority</span>
                <p class="body-regular body-muted">
                  Assets crafted to substantiate price-per-square-meter value and drive off-plan reservation velocity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 03. PROJECTS -->
    <section class="section bg-ink" id="proyectos">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 80px; border-bottom: 1px solid var(--line-dark); padding-bottom: 32px;">
          <div>
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Production Archive
            </span>
            <h2 class="display-title" style="color: var(--paper);">
              Selected Works.
            </h2>
          </div>
          <div class="body-muted" style="text-align: right; font-family: var(--font-condensed); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">
            Selection 2024 — 2026
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 90px;">

          <!-- 01 21:9 Full -->
          <article class="project-card">
            <div class="project-media-wrap ratio-21-9">
              <picture>
                <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
                <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Contemporary urban residential façade rendering" loading="lazy">
              </picture>
            </div>
            <div class="project-meta-row">
              <div style="display: flex; gap: 24px; align-items: baseline;">
                <span class="project-num">01</span>
                <div>
                  <h3 class="project-title" style="color: var(--paper);">Urban Residential Complex</h3>
                  <div class="project-specs">Multi-Family New Build · Visual Direction · Urban Integration</div>
                </div>
              </div>
              <div class="project-specs" style="color: rgba(244,243,239,0.5);">Valencia, Spain · 2026</div>
            </div>
          </article>

          <!-- 02 & 03 Split -->
          <div class="grid-12">
            <article class="project-card" style="grid-column: span 5;">
              <div class="project-media-wrap ratio-4-5">
                <picture>
                  <source srcset="../img/infografia-exterior-zonas-comunes-obra-nueva.webp" type="image/webp">
                  <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="3D rendering of common areas with infinity pool" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 20px; align-items: baseline;">
                  <span class="project-num">02</span>
                  <div>
                    <h3 class="project-title" style="color: var(--paper); font-size: 1.5rem;">Common Amenities & Landscape</h3>
                    <div class="project-specs">Rooftop Pool · Solarium · Dusk Atmosphere</div>
                  </div>
                </div>
              </div>
            </article>

            <article class="project-card" style="grid-column: span 7; align-self: flex-end;">
              <div class="project-media-wrap ratio-16-9">
                <picture>
                  <source srcset="../img/render-exterior-vivienda-unifamiliar-piscina.webp" type="image/webp">
                  <img src="../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Coastal cliff contemporary villa rendering" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 20px; align-items: baseline;">
                  <span class="project-num">03</span>
                  <div>
                    <h3 class="project-title" style="color: var(--paper); font-size: 1.5rem;">Hillside Coastal Villa</h3>
                    <div class="project-specs">Private Luxury Villa · Topographic Integration · Sea Views</div>
                  </div>
                </div>
                <div class="project-specs" style="color: rgba(244,243,239,0.5);">Alicante, Spain</div>
              </div>
            </article>
          </div>

          <!-- 04 21:9 Full -->
          <article class="project-card">
            <div class="project-media-wrap ratio-21-9">
              <picture>
                <source srcset="../img/infografia-3d-salon-moderno-doble-altura.webp" type="image/webp">
                <img src="../img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Double height residential living space interior rendering" loading="lazy">
              </picture>
            </div>
            <div class="project-meta-row">
              <div style="display: flex; gap: 24px; align-items: baseline;">
                <span class="project-num">04</span>
                <div>
                  <h3 class="project-title" style="color: var(--paper);">Double-Height Penthouse</h3>
                  <div class="project-specs">Prime Residential Interior · Daylight Atmosphere · Custom Furniture</div>
                </div>
              </div>
              <div class="project-specs" style="color: rgba(244,243,239,0.5);">Madrid, Spain</div>
            </div>
          </article>

          <!-- 05 & 06 Split -->
          <div class="grid-12">
            <article class="project-card" style="grid-column: span 6;">
              <div class="project-media-wrap ratio-16-9">
                <picture>
                  <source srcset="../img/render-cocina-moderna-isla-madera.webp" type="image/webp">
                  <img src="../img/render-cocina-moderna-isla-madera-1600.jpg" alt="Designer kitchen with natural oak island rendering" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 20px; align-items: baseline;">
                  <span class="project-num">05</span>
                  <div>
                    <h3 class="project-title" style="color: var(--paper); font-size: 1.4rem;">Architectural Kitchen & Island</h3>
                    <div class="project-specs">Natural Oak · Continuous Surfaces · Warm Light</div>
                  </div>
                </div>
              </div>
            </article>

            <article class="project-card" style="grid-column: span 6;">
              <div class="project-media-wrap ratio-16-9">
                <picture>
                  <source srcset="../img/infografia-dormitorio-principal-render-inmobiliario.webp" type="image/webp">
                  <img src="../img/infografia-dormitorio-principal-render-inmobiliario-1600.jpg" alt="Master suite interior rendering with fabric textures" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 20px; align-items: baseline;">
                  <span class="project-num">06</span>
                  <div>
                    <h3 class="project-title" style="color: var(--paper); font-size: 1.4rem;">Master Suite & Dressing Room</h3>
                    <div class="project-specs">Refined Finishes · Serene Atmosphere · Morning Light</div>
                  </div>
                </div>
              </div>
            </article>
          </div>

        </div>

        <div style="margin-top: 80px; text-align: center; border-top: 1px solid var(--line-dark); padding-top: 48px;">
          <a href="projects.html" class="btn-editorial" style="border-color: var(--paper); color: var(--paper);">
            VIEW COMPLETE PROJECTS ARCHIVE →
          </a>
        </div>
      </div>
    </section>

    <!-- 04. STUDIO -->
    <section class="section bg-paper" id="estudio">
      <div class="container">
        <div class="grid-12">
          <div style="grid-column: 1 / 4;">
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              The Studio
            </span>
            <h2 class="display-title" style="margin-bottom: 24px;">
              Quiet<br>
              authority.
            </h2>
          </div>

          <div style="grid-column: 5 / 13;">
            <p class="body-large" style="margin-bottom: 28px; color: var(--ink);">
              Eidos Render was founded on the conviction that a property development requires a cohesive visual system executed with the same geometric discipline as the architecture itself.
            </p>
            <p class="body-regular body-muted" style="margin-bottom: 48px;">
              We partner with institutional developers, private equity funds, and leading architects across Europe. Every production stage is overseen personally: from initial camera composition and native landscaping to bespoke print brochures and commercial advertising rollouts.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 32px; border-top: 1px solid var(--line); padding-top: 36px;">
              <div>
                <div class="display-num" style="color: var(--ink); margin-bottom: 6px;">4K</div>
                <div class="kicker signal" style="margin-bottom: 4px;">Native Resolution</div>
                <p class="body-regular body-muted" style="font-size: 0.88rem;">Imagery optimized for editorial print publications and large-scale site hoardings.</p>
              </div>
              <div>
                <div class="display-num" style="color: var(--ink); margin-bottom: 6px;">100%</div>
                <div class="kicker signal" style="margin-bottom: 4px;">Architectural Fidelity</div>
                <p class="body-regular body-muted" style="font-size: 0.88rem;">Rigorous adherence to technical specification sheets, CAD/BIM blueprints, and landscaping.</p>
              </div>
              <div>
                <div class="display-num" style="color: var(--ink); margin-bottom: 6px;">6–10</div>
                <div class="kicker signal" style="margin-bottom: 4px;">Weeks Average</div>
                <p class="body-regular body-muted" style="font-size: 0.88rem;">Complete commercial launch delivery with parallel workflow synchronization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 05. SERVICES -->
    <section class="section bg-paper-card" id="servicios" style="border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 64px; flex-wrap: wrap; gap: 24px;">
          <div>
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Integrated Capabilities
            </span>
            <h2 class="display-title">
              Launch Services.
            </h2>
          </div>
          <p class="body-regular body-muted" style="max-width: 480px;">
            One unified vision. Every asset required to position, differentiate, and market a development pre-construction or during construction.
          </p>
        </div>

        <div class="editorial-list">
          <a href="services/branding.html" class="editorial-row">
            <span class="row-num">01</span>
            <div><h3 class="row-title">Visual Direction & Identity</h3></div>
            <div class="row-meta">Naming · Brand Guidelines · Narrative</div>
            <div class="row-type" style="font-family: var(--font-condensed); font-size: 0.75rem; letter-spacing: 0.1em; color: var(--signal-text);">PHASE 01</div>
            <div class="row-arrow">→</div>
          </a>
          <a href="services/3d-rendering.html" class="editorial-row">
            <span class="row-num">02</span>
            <div><h3 class="row-title">3D Architectural Imagery</h3></div>
            <div class="row-meta">Exteriors · Interiors · Amenities</div>
            <div class="row-type" style="font-family: var(--font-condensed); font-size: 0.75rem; letter-spacing: 0.1em; color: var(--signal-text);">PHASE 02</div>
            <div class="row-arrow">→</div>
          </a>
          <a href="services/3d-video.html" class="editorial-row">
            <span class="row-num">03</span>
            <div><h3 class="row-title">3D Film & Cinematic Motion</h3></div>
            <div class="row-meta">Virtual Tours · 9:16 Social Reels</div>
            <div class="row-type" style="font-family: var(--font-condensed); font-size: 0.75rem; letter-spacing: 0.1em; color: var(--signal-text);">PHASE 03</div>
            <div class="row-arrow">→</div>
          </a>
          <a href="services/marketing-collateral.html" class="editorial-row">
            <span class="row-num">04</span>
            <div><h3 class="row-title">Marketing Collateral & Brochures</h3></div>
            <div class="row-meta">Sales Brochures · Textured Floor Plans</div>
            <div class="row-type" style="font-family: var(--font-condensed); font-size: 0.75rem; letter-spacing: 0.1em; color: var(--signal-text);">PHASE 04</div>
            <div class="row-arrow">→</div>
          </a>
          <a href="services/real-estate-web.html" class="editorial-row">
            <span class="row-num">05</span>
            <div><h3 class="row-title">Development Web Platform</h3></div>
            <div class="row-meta">Unit Selector · Architectural UX</div>
            <div class="row-type" style="font-family: var(--font-condensed); font-size: 0.75rem; letter-spacing: 0.1em; color: var(--signal-text);">PHASE 05</div>
            <div class="row-arrow">→</div>
          </a>
          <a href="services/acquisition.html" class="editorial-row">
            <span class="row-num">06</span>
            <div><h3 class="row-title">Buyer Acquisition & Ads</h3></div>
            <div class="row-meta">Google Ads · Meta Ads · Qualified Leads</div>
            <div class="row-type" style="font-family: var(--font-condensed); font-size: 0.75rem; letter-spacing: 0.1em; color: var(--signal-text);">PHASE 06</div>
            <div class="row-arrow">→</div>
          </a>
        </div>

        <div style="margin-top: 48px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;">
          <p class="body-regular body-muted" style="max-width: 600px;">
            Services can be commissioned individually or as part of a fully synchronized launch deployment.
          </p>
          <a href="services.html" class="link-draw">
            EXPLORE SERVICE DETAILS →
          </a>
        </div>
      </div>
    </section>

    <!-- 06. VIDEO -->
    <section class="section bg-ink" id="video">
      <div class="container">
        <div class="grid-12" style="align-items: center;">
          <div style="grid-column: 1 / 6;">
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Cinematic Motion
            </span>
            <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
              Movement<br>
              articulates<br>
              space.
            </h2>
            <p class="body-large" style="color: rgba(244,243,239,0.8); margin-bottom: 32px;">
              Cinematic camera movement invites prospective buyers inside the development before ground is broken. It conveys light paths, volume transitions, and the relationship between built forms and natural surroundings.
            </p>
            <div style="font-family: var(--font-condensed); font-size: 0.82rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--signal);">
              4K UHD · Color Grading · Ambient Spatial Audio · 16:9 & 9:16 Formats
            </div>
          </div>

          <div style="grid-column: 7 / 13;">
            <div style="position: relative; overflow: hidden; border: 1px solid var(--line-dark);">
              <video autoplay muted loop playsinline poster="../img/render-fachada-edificio-obra-nueva-800.webp" style="width: 100%; display: block; aspect-ratio: 16 / 9;">
                <source src="../img/video-recorrido-patio.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 07. PROCESS -->
    <section class="section bg-paper" id="proceso">
      <div class="container">
        <div style="margin-bottom: 80px;">
          <span class="kicker crimson">
            <span class="kicker-dot"></span>
            Methodology
          </span>
          <h2 class="display-title">
            A launch is planned<br>
            in reverse.
          </h2>
          <p class="body-large body-muted" style="margin-top: 16px; max-width: 680px;">
            We establish your public sales launch target and sequence technical and creative workflows with calculated buffers to eliminate delivery slippage.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; border-top: 1px solid var(--line); padding-top: 48px;">
          <div style="padding-bottom: 24px; border-bottom: 1px solid var(--line);">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 8px;">01</div>
            <h3 class="display-sub" style="font-size: 1.3rem; margin-bottom: 8px;">Blueprint & Project Analysis</h3>
            <p class="body-regular body-muted">Analysis of CAD/BIM files, material specifications, solar orientation, and target buyer demographics.</p>
          </div>
          <div style="padding-bottom: 24px; border-bottom: 1px solid var(--line);">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 8px;">02</div>
            <h3 class="display-sub" style="font-size: 1.3rem; margin-bottom: 8px;">Art Direction & Camera Angles</h3>
            <p class="body-regular body-muted">Selection of perspective focal lengths, daylight conditions, framing composition, and low-res lighting clay drafts.</p>
          </div>
          <div style="padding-bottom: 24px; border-bottom: 1px solid var(--line);">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 8px;">03</div>
            <h3 class="display-sub" style="font-size: 1.3rem; margin-bottom: 8px;">4K Photorealistic Production</h3>
            <p class="body-regular body-muted">High-precision geometry modeling, tactile texturing, photorealistic raytracing, and final rendering in native 4K.</p>
          </div>
          <div style="padding-bottom: 24px; border-bottom: 1px solid var(--line);">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 8px;">04</div>
            <h3 class="display-sub" style="font-size: 1.3rem; margin-bottom: 8px;">Commercial Collateral</h3>
            <p class="body-regular body-muted">Brochure layout design, rendered floor plan vectorization, sales suite graphics, and hoarding preparation.</p>
          </div>
          <div style="padding-bottom: 24px; border-bottom: 1px solid var(--line);">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 8px;">05</div>
            <h3 class="display-sub" style="font-size: 1.3rem; margin-bottom: 8px;">Digital Platform Rollout</h3>
            <p class="body-regular body-muted">Deployment of bespoke development website featuring interactive floor selectors, downloadable plans, and CRM sync.</p>
          </div>
          <div style="padding-bottom: 24px; border-bottom: 1px solid var(--line);">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 8px;">06</div>
            <h3 class="display-sub" style="font-size: 1.3rem; margin-bottom: 8px;">Active Lead Acquisition</h3>
            <p class="body-regular body-muted">Activation of Google & Meta campaigns capturing high-intent buyer inquiries from day one of public reservations.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 08. CONTACT -->
    <section class="section bg-ink" id="contacto" style="border-top: 1px solid var(--line-dark);">
      <div class="container">
        <div class="grid-12">
          <div style="grid-column: 1 / 7;">
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Direct Inquiries
            </span>
            <h2 class="display-title" style="color: var(--paper); margin-bottom: 28px; line-height: 1.05;">
              From the project<br>
              to the launch.<br>
              Let's speak.
            </h2>
            <p class="body-large" style="color: rgba(244,243,239,0.8); margin-bottom: 40px; max-width: 520px;">
              If you are preparing an upcoming development or singular architectural project, let us examine the plans and calibrate the visual scope.
            </p>

            <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px;">
              <div>
                <span class="kicker signal" style="margin-bottom: 4px;">Direct Email</span>
                <div>
                  <a href="mailto:info@eidosrender.es" class="link-draw" style="font-size: 1.25rem; font-family: var(--font-display); text-transform: none; color: var(--paper); letter-spacing: 0;">
                    info@eidosrender.es
                  </a>
                </div>
              </div>
              <div style="margin-top: 12px;">
                <span class="kicker signal" style="margin-bottom: 4px;">Direct Phone</span>
                <div>
                  <a href="tel:+34614459144" class="link-draw" style="font-size: 1.1rem; color: var(--paper);">
                    +34 614 45 91 44
                  </a>
                </div>
              </div>
              <div style="margin-top: 12px;">
                <span class="kicker signal" style="margin-bottom: 4px;">Studio</span>
                <p class="body-regular" style="color: rgba(244,243,239,0.65);">
                  Valencia, Spain · Projects across the UK, Germany, France, Switzerland, and Spain.
                </p>
              </div>
            </div>
          </div>

          <!-- Minimalist Form -->
          <div style="grid-column: 8 / 13;">
            <div style="border: 1px solid var(--line-dark); padding: clamp(32px, 5vw, 60px);">
              <div class="kicker signal" style="margin-bottom: 24px;">Project Assessment</div>
              
              <form class="form-minimal" method="POST" action="../enviar.php">
                <div class="field-group">
                  <label for="en-nombre">Full Name *</label>
                  <input type="text" id="en-nombre" name="nombre" required placeholder="e.g. Alistair Vance">
                  <span class="field-error">Please enter your name.</span>
                </div>

                <div class="field-group">
                  <label for="en-empresa">Developer / Architectural Firm</label>
                  <input type="text" id="en-empresa" name="empresa" placeholder="e.g. Primrose Developments">
                </div>

                <div class="field-group">
                  <label for="en-email">Corporate Email *</label>
                  <input type="email" id="en-email" name="email" required placeholder="a.vance@primrose.co.uk">
                  <span class="field-error">Please enter a valid email address.</span>
                </div>

                <div class="field-group">
                  <label for="en-telefono">Telephone</label>
                  <input type="tel" id="en-telefono" name="telefono" placeholder="+44 20 7946 0958">
                </div>

                <div class="field-group">
                  <label for="en-mensaje">Development Scope (Location, Unit Count, Timeline) *</label>
                  <textarea id="en-mensaje" name="mensaje" rows="3" required placeholder="32 coastal luxury apartments, public sales launch Q3..."></textarea>
                  <span class="field-error">Please provide a brief outline of the scheme.</span>
                </div>

                <div style="padding-top: 16px;">
                  <button type="submit" class="btn-editorial btn-crimson" style="width: 100%; justify-content: center;">
                    REQUEST PROJECT ASSESSMENT →
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-top">
        <div>
          <div class="logo" style="margin-bottom: 16px;">
            <span>EIDOS RENDER</span>
            <span class="logo-dot"></span>
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.65); max-width: 380px;">
            Visual partner for real estate developments. From architectural project to commercial market launch.
          </p>
        </div>

        <div>
          <div class="footer-col-title">Navigation</div>
          <ul class="footer-links">
            <li><a href="#proyectos">Projects</a></li>
            <li><a href="#servicios">Services</a></li>
            <li><a href="#estudio">Studio</a></li>
            <li><a href="#proceso">Methodology</a></li>
            <li><a href="#contacto">Contact</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Services</div>
          <ul class="footer-links">
            <li><a href="services/3d-rendering.html">3D Rendering</a></li>
            <li><a href="services/3d-video.html">3D Film & Reels</a></li>
            <li><a href="services/branding.html">Real Estate Branding</a></li>
            <li><a href="services/marketing-collateral.html">Sales Brochures</a></li>
            <li><a href="services/real-estate-web.html">Development Websites</a></li>
            <li><a href="services/acquisition.html">Buyer Acquisition</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Studio</div>
          <ul class="footer-links">
            <li><a href="mailto:info@eidosrender.es">info@eidosrender.es</a></li>
            <li><a href="tel:+34614459144">+34 614 45 91 44</a></li>
            <li><span style="color: rgba(244,243,239,0.5);">Valencia, Spain</span></li>
            <li><a href="faq.html">Frequently Asked Questions</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 Eidos Render. All rights reserved.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../" onclick="window.setLang('es')">ES</a> ·
            <span style="color: var(--crimson-on-dark); font-weight: 700;">EN</span> ·
            <a href="../de/" onclick="window.setLang('de')">DE</a> ·
            <a href="../fr/" onclick="window.setLang('fr')">FR</a>
          </div>
          <a href="legal-notice.html">Legal Notice</a>
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="cookie-policy.html">Cookies</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>
`;

writeFile('en/index.html', enIndexHtml);
