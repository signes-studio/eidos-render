const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

// Helper to write files
function writeFile(relPath, content) {
  const fullPath = path.join(root, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Created EN file:', relPath);
}

// -------------------------------------------------------------
// 1. en/index.html
// -------------------------------------------------------------
const enIndex = `<!DOCTYPE html>
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
  
  <title>Eidos Render — From Architectural Concept to Commercial Launch</title>
  <meta name="description" content="Eidos Render turns real estate developments into high-impact visual and commercial experiences. 3D imagery, film, brand identity, sales collateral, web and buyer acquisition for property developers.">
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
  <meta property="og:title" content="Eidos Render — From Architectural Concept to Commercial Launch">
  <meta property="og:description" content="Visual and creative partner for the commercial launch of real estate developments across Europe. 3D imagery, identity, sales materials, web and buyer acquisition.">
  <meta property="og:url" content="https://eidosrender.es/en/">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">
  <meta property="og:locale" content="en_GB">

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Eidos Render — From Architectural Concept to Commercial Launch">
  <meta name="twitter:description" content="Visual and creative partner for real estate developments. 3D renders, video, branding, web and buyer acquisition.">
  <meta name="twitter:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon.png">
  <link rel="shortcut icon" href="../favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">

  <!-- Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

  <!-- Preload Hero LCP -->
  <link rel="preload" as="image" href="../img/render-fachada-edificio-obra-nueva-800.webp" fetchpriority="high">

  <link rel="stylesheet" href="../style.css">

  <!-- Schema.org Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://eidosrender.es/en/#organization",
        "name": "Eidos Render",
        "url": "https://eidosrender.es/en/",
        "logo": "https://eidosrender.es/favicon.png",
        "image": "https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg",
        "description": "Creative and visual partner for the commercial launch of real estate developments across Europe. 3D architectural visualization, film, development identity, sales collateral, web and acquisition.",
        "telephone": "+34614459144",
        "email": "info@eidosrender.es",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Valencia",
          "addressCountry": "ES"
        },
        "sameAs": [
          "https://www.linkedin.com/company/eidos-render"
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "12000",
          "description": "Comprehensive real estate launch systems from €12,000"
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
<body>

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4S8NC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- =====================================================
       00. STICKY NAVIGATION
       ===================================================== -->
  <header class="nav-header" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo" aria-label="Eidos Render Home">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links">
          <li><a href="#proyectos">Projects</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="#proceso">Process</a></li>
          <li><a href="#eidos">About</a></li>
          <li><a href="contact.html">Contact</a></li>
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
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <!-- Fullscreen Mobile Navigation -->
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
        <li><a href="services.html">Services</a></li>
        <li><a href="#proceso">Process</a></li>
        <li><a href="#eidos">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Real Estate Launch</div>
      <div>Valencia · European & International Reach</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main>

    <!-- =====================================================
         01. HERO
         ===================================================== -->
    <section class="hero" id="hero">
      <div class="hero-media">
        <picture>
          <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
          <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Contemporary Residential Facade Render — Eidos Render" class="hero-poster" fetchpriority="high">
        </picture>
        <video class="hero-video" autoplay muted loop playsinline poster="../img/render-fachada-edificio-obra-nueva.webp">
          <source src="../img/video-reel-patio.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>
      </div>

      <div class="container hero-content">
        <div class="hero-subconcept">
          Visual Direction · 3D Imagery · Brand Identity · Sales Collateral · Development Web · Lead Acquisition
        </div>

        <h1 class="hero-title display-hero">
          From architectural<br>
          concept<br>
          to market launch.
        </h1>

        <div class="hero-bottom-grid">
          <p class="hero-desc">
            Visual direction, 3D imagery, brand identity, sales collateral, development websites, and buyer acquisition for real estate developers.
          </p>
          <div class="hero-actions">
            <a href="#contacto" class="btn btn-crimson">
              LET'S DISCUSS THE PROJECT →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         02. INTRODUCTION / NARRATIVE
         ===================================================== -->
    <section class="section intro-section bg-paper">
      <div class="container">
        <div class="kicker crimson">
          Integrated Vision
        </div>

        <div class="intro-grid">
          <h2 class="display-title intro-title">
            A development<br>
            demands<br>
            a narrative.
          </h2>

          <div class="intro-copy">
            <p>
              Architecture, brand identity, imagery, commercial collateral, website, and digital campaigns must operate as coherent facets of a single strategic system.
            </p>
            <p>
              At Eidos Render, we craft that system from the very first CGI render through to active market launch.
            </p>
            <div style="margin-top: 36px;">
              <a href="#servicios" class="link-arrow">
                EXPLORE THE LAUNCH SYSTEM →
              </a>
            </div>
          </div>
        </div>

        <div class="intro-divider"></div>
      </div>
    </section>

    <!-- =====================================================
         03. POSITIONING MANIFESTO
         ===================================================== -->
    <section class="section bg-paper-card" style="border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: clamp(64px, 10vw, 120px) 0;">
      <div class="container">
        <div class="kicker crimson" style="margin-bottom: 24px;">Positioning</div>
        <h2 class="display-title" style="font-size: clamp(2.2rem, 5vw, 4.4rem); line-height: 1.05; max-width: 1100px; text-transform: uppercase; letter-spacing: -0.02em;">
          We start from architecture.<br>
          We shape its visual identity.<br>
          <span style="color: var(--crimson);">And we bring it to the market.</span>
        </h2>
        <p class="body-large body-muted" style="max-width: 720px; margin-top: 32px;">
          Eidos Render is a specialized visual and creative studio for property developments. We partner with developers, architects, and investment funds across Europe from initial visual direction to live commercialization.
        </p>
      </div>
    </section>

    <!-- =====================================================
         04. CAPABILITIES / INTEGRAL SERVICES
         ===================================================== -->
    <section class="section bg-ink" id="servicios">
      <div class="container">
        <div class="services-header">
          <div>
            <div class="kicker crimson">
              Comprehensive Service
            </div>
            <h2 class="display-title" style="color: var(--paper);">
              One unified vision.<br>
              Every asset covered.
            </h2>
          </div>
          <div style="max-width: 440px;" class="body-muted">
            From initial creative direction through to high-precision 3D imagery and direct buyer acquisition.
          </div>
        </div>

        <div class="service-accordion">

          <!-- 01 -->
          <div class="service-item active">
            <div class="service-summary">
              <span class="service-num">01</span>
              <h3 class="service-name">Direction & Identity</h3>
              <p class="service-short">Creative concept, visual positioning, naming, and bespoke graphic design for property developments.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    We define the conceptual universe of the scheme before generating a single render. Naming, chromatic palette, typography, tone of voice, and guidelines to ensure total cohesion across all sales media.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Real estate brand identity manual</li>
                    <li>Typographic & color system</li>
                    <li>Showroom & construction hoarding design</li>
                    <li>Broker & sales network guidelines</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 02 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">02</span>
              <h3 class="service-name">3D Architectural Imagery</h3>
              <p class="service-short">Exteriors, interiors, amenities, lifestyle, and photorealistic 3D visualization calibrated for print and digital.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Our foundational hallmark. Photorealistic renders that go beyond geometry: constructing atmosphere, illuminating architecture with rigor, and stirring buyer desire prior to ground-breaking.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Ultra-high resolution CGI for billboards and editorial print</li>
                    <li>Precise site photomontage & drone matching</li>
                    <li>Sophisticated lighting & atmospheric calibration</li>
                    <li>Focus on tactile materials, joinery, and landscaping</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 03 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">03</span>
              <h3 class="service-name">3D Video & Film</h3>
              <p class="service-short">Cinematic 3D animation, architectural walkthroughs, fluid transitions, and dynamic social media assets.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Movement conveys scale, spatial relationships, and communal spaces with emotional immediacy, maximizing investor engagement and campaign response.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Cinematic color grading & bespoke sound design</li>
                    <li>Formats tailored for Meta, YouTube, and digital displays</li>
                    <li>Executive investor presentations</li>
                    <li>Vertical reels & video brochures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 04 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">04</span>
              <h3 class="service-name">Marketing Collateral</h3>
              <p class="service-short">Editorial sales dossiers, rendered 2D/3D floor plans, area location maps, and individual unit fact sheets.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    We translate architectural blueprints into clear, elegant, and persuasive sales tools that empower sales agents and inspire prospective buyers.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>High-resolution digital and print sales brochures</li>
                    <li>Furnished, textured architectural floor plans</li>
                    <li>Neighborhood infrastructure and amenity diagrams</li>
                    <li>Physical presentation materials for sales lounges</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 05 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">05</span>
              <h3 class="service-name">Development Website</h3>
              <p class="service-short">Architectural UX/UI, bespoke code, interactive unit selector, instant load speed, and qualified lead capture.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    The digital headquarters of the launch. Not an off-the-shelf theme, but an engineered sales asset designed to explain the architecture, filter typologies, and channel high-intent buyers directly to your commercial team.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Responsive design featuring editorial typography</li>
                    <li>Interactive floor plan and unit navigator</li>
                    <li>Flawless Core Web Vitals and lightning load speeds</li>
                    <li>Integrated conversion tracking & CRM webhook connection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 06 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">06</span>
              <h3 class="service-name">Launch & Acquisition</h3>
              <p class="service-short">Google Search Ads, Meta targeted campaigns, high-impact CGI creatives, advanced tracking, and ongoing weekly optimization.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Once the imagery and website are deployed, we activate precision marketing to capture qualified buyers. Creative assets and messages iterate continually based on real response data.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Hyper-local intent and geographic targeting</li>
                    <li>Continuous A/B testing of angles, renders, and headlines</li>
                    <li>Transparent reporting focused on qualified buyer inquiries</li>
                    <li>Constant conversion path optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style="margin-top: 56px; text-align: center;">
          <a href="#contacto" class="btn btn-crimson">
            LET'S DISCUSS THE PROJECT →
          </a>
        </div>
      </div>
    </section>

    <!-- =====================================================
         05. SELECTED PROJECTS ARCHIVE
         ===================================================== -->
    <section class="section bg-paper" id="proyectos">
      <div class="container">
        <div class="portfolio-header">
          <div>
            <div class="kicker crimson">
              Curated Archive
            </div>
            <h2 class="display-title">
              Selected Projects.
            </h2>
          </div>
          <div class="body-regular body-muted" style="max-width: 440px;">
            High-precision architectural visualization for residential schemes, landmark developments, and high-end living across Europe.
          </div>
        </div>

        <div class="editorial-portfolio">

          <!-- Project 01 -->
          <article class="project-card span-8">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
                  <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Contemporary Residential Facade Render" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Residential Complex</h3>
                  <div class="project-services-line">Multi-Family Residential · Visual Direction · Urban Context</div>
                </div>
                <div class="project-meta">Valencia, ES</div>
              </div>
            </div>
          </article>

          <!-- Project 02 -->
          <article class="project-card span-4 tall">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/infografia-exterior-zonas-comunes-obra-nueva.webp" type="image/webp">
                  <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="Communal Swimming Pool and Garden CGI" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Amenities & Landscaping</h3>
                  <div class="project-services-line">3D Visualization · Pools & Gardens · Cinematic Film</div>
                </div>
                <div class="project-meta">Madrid, ES</div>
              </div>
            </div>
          </article>

          <!-- Project 03 -->
          <article class="project-card span-4 tall">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/render-exterior-vivienda-unifamiliar-piscina.webp" type="image/webp">
                  <img src="../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Modern Detached Villa with Infinity Pool" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Contemporary Villa</h3>
                  <div class="project-services-line">Single-Family Villa · Infinity Pool · Coastal Integration</div>
                </div>
                <div class="project-meta">Alicante, ES</div>
              </div>
            </div>
          </article>

          <!-- Project 04 -->
          <article class="project-card span-8">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/infografia-3d-salon-moderno-doble-altura.webp" type="image/webp">
                  <img src="../img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Double-Height Penthouse Living Room Interior CGI" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Double-Height Penthouse</h3>
                  <div class="project-services-line">Interior Design · High-End CGI · Art Direction</div>
                </div>
                <div class="project-meta">Prime Living</div>
              </div>
            </div>
          </article>

          <!-- Project 05 -->
          <article class="project-card span-6">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/render-cocina-moderna-isla-madera.webp" type="image/webp">
                  <img src="../img/render-cocina-moderna-isla-madera-1600.jpg" alt="Bespoke Kitchen Island Render" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Central Island Kitchen</h3>
                  <div class="project-services-line">Natural Materials · Wood Joinery · Warm Lighting</div>
                </div>
                <div class="project-meta">Detail</div>
              </div>
            </div>
          </article>

          <!-- Project 06 -->
          <article class="project-card span-6">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/infografia-dormitorio-principal-render-inmobiliario.webp" type="image/webp">
                  <img src="../img/infografia-dormitorio-principal-render-inmobiliario-1600.jpg" alt="Contemporary Master Suite Interior Render" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Residential Master Suite</h3>
                  <div class="project-services-line">Serene Ambience · Tactile Finishes · Custom Furniture</div>
                </div>
                <div class="project-meta">Suite</div>
              </div>
            </div>
          </article>

        </div>

        <div style="margin-top: 56px; text-align: center;">
          <a href="projects.html" class="btn btn-outline-ink">
            VIEW ALL PROJECTS →
          </a>
        </div>
      </div>
    </section>

    <!-- =====================================================
         06. 3D VISUALIZATION SHOWCASE
         ===================================================== -->
    <section class="section bg-ink" id="imagen-3d">
      <div class="container">
        <div class="kicker crimson">
          3D Visualization
        </div>
        
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: flex-end; margin-bottom: 50px;">
          <h2 class="display-title" style="color: var(--paper);">
            The image<br>
            before construction.
          </h2>
          <div class="body-large" style="color: rgba(244,243,239,0.8);">
            We visualize architecture before it exists.<br>
            Images that elucidate the scheme, cultivate atmosphere, and trigger buyer desire.
          </div>
        </div>

        <div class="image-showcase-grid">

          <div class="image-showcase-item large">
            <picture>
              <source srcset="../img/infografia-3d-salon-moderno-doble-altura.webp" type="image/webp">
              <img src="../img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Interior Architecture Double Height Living Space" loading="lazy">
            </picture>
            <div class="image-showcase-caption">
              <span>Interiors · Lighting Atmosphere</span>
              <span>Open-Plan Space</span>
            </div>
          </div>

          <div class="image-showcase-item">
            <picture>
              <source srcset="../img/render-cocina-moderna-isla-madera.webp" type="image/webp">
              <img src="../img/render-cocina-moderna-isla-madera-1600.jpg" alt="Modern Kitchen Joinery CGI" loading="lazy">
            </picture>
            <div class="image-showcase-caption">
              <span>Lifestyle & Kitchens</span>
              <span>Noble Materials</span>
            </div>
          </div>

          <div class="image-showcase-item">
            <picture>
              <source srcset="../img/render-bano-moderno-ducha-minimalista.webp" type="image/webp">
              <img src="../img/render-bano-moderno-ducha-minimalista-1600.jpg" alt="Minimalist Bathroom Render" loading="lazy">
            </picture>
            <div class="image-showcase-caption">
              <span>Details & Finishes</span>
              <span>Microcement</span>
            </div>
          </div>

          <div class="image-showcase-item large">
            <picture>
              <source srcset="../img/infografia-exterior-zonas-comunes-obra-nueva.webp" type="image/webp">
              <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="Exterior Residential Amenities and Pool" loading="lazy">
            </picture>
            <div class="image-showcase-caption">
              <span>Exteriors · Communal Amenities</span>
              <span>Pool & Landscape</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- =====================================================
         07. VIDEO & MOVEMENT
         ===================================================== -->
    <section class="section bg-crimson" id="video">
      <div class="container">
        <div class="kicker paper">
          Video & Movement
        </div>

        <div class="video-section-grid">
          <div>
            <h2 class="display-title" style="color: var(--paper); margin-bottom: 28px;">
              From static renders<br>
              to an experiential<br>
              cinematic journey.
            </h2>
            <p class="body-large" style="color: rgba(244,243,239,0.9); margin-bottom: 32px;">
              Movement reveals spaces, communicates genuine scale, and extends the commercial longevity of a real estate development.
            </p>
          </div>

          <div>
            <div class="reels-grid">
              <div class="reel-card">
                <video autoplay muted loop playsinline controls poster="../img/infografia-exterior-zonas-comunes-obra-nueva-800.webp">
                  <source src="../img/video-reel-patio.mp4" type="video/mp4">
                </video>
              </div>
              <div class="reel-card">
                <video autoplay muted loop playsinline controls poster="../img/render-fachada-edificio-obra-nueva-800.webp">
                  <source src="../img/video-recorrido-patio.mp4" type="video/mp4">
                </video>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- =====================================================
         08. BRAND IDENTITY
         ===================================================== -->
    <section class="section bg-paper" id="branding">
      <div class="container">
        <div class="feature-split">
          <div>
            <div class="kicker crimson">Development Identity</div>
            <h2 class="display-title" style="margin-bottom: 24px;">
              A development<br>
              also requires<br>
              a distinctive identity.
            </h2>
            <p class="body-large body-muted" style="margin-bottom: 32px;">
              A real estate brand is never just a logo. It is the strategic positioning that substantiates the price per square meter, the voice that resonates with high-intent buyers, and the visual elegance binding every touchpoint.
            </p>
            <a href="contact.html" class="link-arrow">
              DISCUSS AN IDENTITY PROJECT →
            </a>
          </div>

          <div class="feature-cards-grid">
            <div class="feature-card">
              <div class="feature-card-num">01</div>
              <h3 class="feature-card-title">Naming & Concept</h3>
              <p class="feature-card-copy">Strategic naming with architectural resonance, legal protectability, and high market recall.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">02</div>
              <h3 class="feature-card-title">Graphic System</h3>
              <p class="feature-card-copy">Corporate typography, color palettes, and editorial grids designed to complement tactile architectural materials.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">03</div>
              <h3 class="feature-card-title">Art Direction</h3>
              <p class="feature-card-copy">Styling guidelines, framing principles, and lighting temperatures applied consistently to all 3D production.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">04</div>
              <h3 class="feature-card-title">Physical Applications</h3>
              <p class="feature-card-copy">Design for site hoardings, sales lounge banners, development wayfinding, and handover welcome boxes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         09. MARKETING COLLATERAL
         ===================================================== -->
    <section class="section bg-ink" id="comercial">
      <div class="container">
        <div class="feature-split reverse">
          <div>
            <div class="kicker crimson">Sales Collateral</div>
            <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
              From architectural plans<br>
              to persuasive<br>
              sales tools.
            </h2>
            <p class="body-large" style="color: rgba(244,243,239,0.8); margin-bottom: 32px;">
              We translate technical architectural blueprints into clean, intuitive, and visually compelling commercial collateral.
            </p>
            <p class="body-regular" style="color: rgba(244,243,239,0.65);">
              Empowering sales agents with tools that substantiate construction quality before institutional investors and private buyers.
            </p>
          </div>

          <div class="feature-cards-grid">
            <div class="feature-card">
              <div class="feature-card-num">A</div>
              <h3 class="feature-card-title">Sales Dossiers</h3>
              <p class="feature-card-copy">Editorial presentation brochures detailing specifications, material schedules, and architectural ethos.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">B</div>
              <h3 class="feature-card-title">Rendered Plans</h3>
              <p class="feature-card-copy">Dimensionally accurate, furnished, and textured 2D/3D floor plans for immediate spatial clarity.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">C</div>
              <h3 class="feature-card-title">Context & Area Maps</h3>
              <p class="feature-card-copy">Illustrative location infographics highlighting transport links, schools, culture, and key urban amenities.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">D</div>
              <h3 class="feature-card-title">Typology Sheets</h3>
              <p class="feature-card-copy">Individual apartment spec sheets with exact areas, layouts, solar orientation, and associated view renders.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         10. DEVELOPMENT WEBSITE
         ===================================================== -->
    <section class="section bg-paper" id="web">
      <div class="container">
        <div class="feature-split">
          <div>
            <div class="kicker crimson">Digital Presence</div>
            <h2 class="display-title" style="margin-bottom: 24px;">
              A website that<br>
              doesn't just display.<br>
              It anchors the launch.
            </h2>
            <p class="body-large body-muted" style="margin-bottom: 32px;">
              The development website is the strategic core of the commercialization. Rather than a generic web page, it serves as the primary platform where market interest is captured, informed, and directed straight to the sales team.
            </p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 14px; margin-bottom: 36px; font-size: 0.95rem;">
              <li><strong>— Architectural UX / UI:</strong> Frictionless immersion in renders and videos without technical delay.</li>
              <li><strong>— Bespoke Codebase:</strong> Semantic architecture, rapid performance, and mobile-first experience.</li>
              <li><strong>— Specifications & Assets:</strong> Floor plans, finish schedules, and downloadable editorial brochure.</li>
              <li><strong>— Measurement & CRM:</strong> Event tracking and instant lead routing to your commercial department.</li>
            </ul>
            <a href="contact.html" class="btn btn-crimson">
              PLAN DEVELOPMENT WEBSITE →
            </a>
          </div>

          <div>
            <div style="background-color: var(--ink); color: var(--paper); padding: 48px; border-left: 4px solid var(--crimson);">
              <span class="kicker crimson">Connected Ecosystem</span>
              <h3 class="display-sub" style="margin-bottom: 20px;">Engineered to support commercial sales.</h3>
              <p class="body-regular" style="color: rgba(244,243,239,0.75); margin-bottom: 24px;">
                We strictly avoid bloated templates. Every site is custom-engineered with clean semantic HTML, exceptional Core Web Vitals, and an editorial visual hierarchy that steers serious buyers toward project understanding or brochure download.
              </p>
              <div style="border-top: 1px solid var(--line-dark); padding-top: 20px; font-family: 'Space Grotesk', sans-serif; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--signal);">
                Analytics · Meta Pixel · Google Tag · CRM Webhooks
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         11. BUYER ACQUISITION
         ===================================================== -->
    <section class="section bg-ink" id="captacion">
      <div class="container">
        <div class="kicker crimson">Qualified Traffic Strategy</div>

        <div style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 60px; margin-bottom: 60px;">
          <h2 class="display-title" style="color: var(--paper);">
            Once the visuals<br>
            are ready,<br>
            the launch begins.
          </h2>
          <div class="body-large" style="color: rgba(244,243,239,0.8);">
            We avoid hollow promises of low-quality volume. We drive buyer acquisition through strategic targeting, precision segmentation, and weekly creative optimization.
          </div>
        </div>

        <div class="feature-cards-grid">
          <div class="feature-card">
            <div class="feature-card-num">01</div>
            <h3 class="feature-card-title">Google Search Ads</h3>
            <p class="feature-card-copy">Capturing active demand from high-intent buyers searching for new build apartments, penthouses, or villas in the exact target location.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-num">02</div>
            <h3 class="feature-card-title">Meta Ads</h3>
            <p class="feature-card-copy">High-net-worth campaigns across Instagram and Facebook segmented by purchasing power, investment behavior, and residential preferences.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-num">03</div>
            <h3 class="feature-card-title">Dynamic Creatives</h3>
            <p class="feature-card-copy">Continuous iteration of 3D renders, video snippets, reels, and carousel formats based on empirical conversion data.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-num">04</div>
            <h3 class="feature-card-title">Tracking & Optimization</h3>
            <p class="feature-card-copy">Granular tracking of phone clicks, direct emails, and brochure downloads, filtering out junk leads to protect your sales team's time.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         12. METHODOLOGY / WORKFLOW
         ===================================================== -->
    <section class="section bg-paper" id="proceso">
      <div class="container">
        <div class="kicker crimson">Editorial Methodology</div>
        <h2 class="display-title" style="margin-bottom: 24px;">
          From concept<br>
          to market launch.
        </h2>
        <p class="body-large body-muted" style="max-width: 720px; margin-bottom: 56px;">
          A single senior creative direction coordinates every phase from raw CAD planimetry through to commercial market activation.
        </p>

        <div class="process-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
          <div class="process-card">
            <div class="process-card-num">01</div>
            <h3 class="process-card-title">Direction & Identity</h3>
            <p class="process-card-desc">
              Concept development, positioning, naming, and bespoke graphic system tailored to the scheme.
            </p>
          </div>
          <div class="process-card">
            <div class="process-card-num">02</div>
            <h3 class="process-card-title">3D CGI & Film</h3>
            <p class="process-card-desc">
              Photorealistic 3D visualization of facades, key interiors, landscape amenities, and cinematic animation.
            </p>
          </div>
          <div class="process-card">
            <div class="process-card-num">03</div>
            <h3 class="process-card-title">Sales Collateral</h3>
            <p class="process-card-desc">
              Editorial sales brochure, rendered 2D/3D floor plans, and unit spec sheets for the commercial network.
            </p>
          </div>
          <div class="process-card">
            <div class="process-card-num">04</div>
            <h3 class="process-card-title">Development Web</h3>
            <p class="process-card-desc">
              Bespoke digital sales platform featuring unit selectors, architectural storytelling, and direct lead capture.
            </p>
          </div>
          <div class="process-card">
            <div class="process-card-num">05</div>
            <h3 class="process-card-title">Launch & Acquisition</h3>
            <p class="process-card-desc">
              Coordinated advertising activation on Google and Meta connecting the development with verified prospective buyers.
            </p>
          </div>
        </div>

        <div style="margin-top: 56px; text-align: center;">
          <a href="#contacto" class="btn btn-crimson">
            LET'S PLAN THE LAUNCH →
          </a>
        </div>
      </div>
    </section>

    <!-- =====================================================
         13. SCALE OF PROJECT
         ===================================================== -->
    <section class="section bg-paper" id="escala">
      <div class="container">
        <div class="kicker crimson">Scope Dimensions</div>
        <h2 class="display-title" style="margin-bottom: 24px;">
          Every development<br>
          has its own scale.
        </h2>

        <div class="scale-box">
          <p class="body-large" style="margin-bottom: 20px;">
            Creating the launch assets for an exclusive 20-residence boutique building requires a distinct approach compared to orchestrating the visual ecosystem of a multi-phase masterplan with complex amenities.
          </p>
          <p class="body-regular body-muted">
            Scope is calibrated precisely to the number of units, architectural complexity, amenity spaces, CGI volume, film requirements, website scope, and target launch date.
          </p>

          <div class="scale-comparison-grid">
            <div>
              <h4 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; text-transform: uppercase; margin-bottom: 12px; color: var(--crimson);">
                Standard Residential Scheme
              </h4>
              <p class="body-regular body-muted">
                15 to 40 units. Focus on main facade, communal garden/pool, key interior typologies, digital dossier, and launch website.
              </p>
            </div>
            <div>
              <h4 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; text-transform: uppercase; margin-bottom: 12px; color: var(--ink);">
                Masterplans & Flex Living
              </h4>
              <p class="body-regular body-muted">
                Multi-phase residential or hospitality developments. Overall aerials, cinematic walkthroughs, multiple furnished typologies, and omnichannel deployment.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- =====================================================
         14. INVESTMENT
         ===================================================== -->
    <section class="section bg-ink" id="inversion" style="color: var(--paper);">
      <div class="container">
        
        <div style="padding-bottom: 64px; border-bottom: 1px solid var(--line-dark);">
          <div class="kicker crimson">Estimated Investment</div>
          <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
            Comprehensive projects.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.8rem, 6vw, 4.8rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.03em; margin-bottom: 16px;">
            FROM €12,000 <span style="font-size: clamp(1.2rem, 2vw, 1.8rem); font-weight: 500; color: var(--signal);">+ VAT</span>
          </div>
          <p class="body-large" style="color: rgba(244,243,239,0.75); max-width: 680px;">
            Baseline benchmark for developments requiring coordinated direction and production across 3D, branding, collateral, and web. Final proposal tailored to scope and asset volume.
          </p>
        </div>

        <div style="padding-top: 64px;">
          <div class="kicker crimson">Commercial Continuity</div>
          <h2 class="display-sub" style="color: var(--paper); margin-bottom: 16px;">
            The launch does not conclude when the website is published.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.02em; margin-bottom: 16px;">
            FROM €600/MONTH <span style="font-size: clamp(1.1rem, 1.8vw, 1.5rem); font-weight: 500; color: var(--signal);">+ VAT</span>
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.75); max-width: 680px; margin-bottom: 20px;">
            Media ad spend billed separately. Continuous campaign management, asset rotation with 3D renderings, and lead flow optimization throughout sales milestones.
          </p>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--signal);">
            Google Ads · Meta Ads · Conversion Optimization · Transparent Reporting
          </div>
        </div>

      </div>
    </section>

    <!-- =====================================================
         15. TIMELINE / PHASING
         ===================================================== -->
    <section class="section bg-ink" style="border-top: 1px solid var(--line-dark);" id="plazos">
      <div class="container">
        <div class="kicker crimson">Timeline & Delivery</div>
        <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
          A launch is planned<br>
          in reverse.
        </h2>
        
        <p class="body-large" style="color: rgba(244,243,239,0.85); max-width: 720px; margin-bottom: 16px;">
          A comprehensive project is typically executed in approximately <strong>6–10 weeks</strong> for standard scope, managing parallel work streams simultaneously.
        </p>
        <p class="body-regular" style="color: var(--signal); max-width: 700px;">
          Your target launch date is the critical anchor for our production scheduling and capacity reservation.
        </p>

        <div class="timeline-bars">
          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">01 Direction & Identity</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 25%; left: 0%;"></div>
            </div>
            <div class="timeline-duration">1–2 weeks</div>
          </div>

          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">02 3D CGI & Film</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 50%; left: 15%;"></div>
            </div>
            <div class="timeline-duration">2–4 weeks</div>
          </div>

          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">03 Marketing Collateral</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 30%; left: 45%;"></div>
            </div>
            <div class="timeline-duration">1–2 weeks</div>
          </div>

          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">04 Development Web</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 55%; left: 40%;"></div>
            </div>
            <div class="timeline-duration">3–5 weeks</div>
          </div>

          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">05 Campaign Activation</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 20%; left: 80%;"></div>
            </div>
            <div class="timeline-duration">1 week</div>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         16. ABOUT THE STUDIO
         ===================================================== -->
    <section class="section bg-paper" id="eidos">
      <div class="container">
        <div class="kicker crimson">About the Studio</div>
        <div style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 70px; align-items: flex-start; margin-bottom: 64px;">
          <div>
            <h2 class="display-title" style="margin-bottom: 24px;">
              Eidos Render
            </h2>
            <div class="body-large" style="color: var(--crimson); font-weight: 600; line-height: 1.45;">
              Architectural visualization, visual direction, and digital sales tools for property developments.
            </div>
          </div>

          <div class="body-large body-muted">
            <p style="margin-bottom: 20px;">
              We start from architecture. We shape its visual identity. And we bring it to the market.
            </p>
            <p style="font-size: 1rem; line-height: 1.6; color: var(--ink);">
              We collaborate with developers, architects, and investment funds across Spain, the UK, Germany, France, and international markets. We combine architectural precision with high commercial discernment, ensuring every development stands out with authority in competitive real estate environments.
            </p>
            <div style="margin-top: 28px; display: flex; gap: 32px; font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; text-transform: uppercase;">
              <div><strong>Studio:</strong> Valencia, Spain</div>
              <div><strong>Reach:</strong> European & International</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================
         17. FINAL EDITORIAL CTA
         ===================================================== -->
    <section class="section bg-paper" style="border-top: 1px solid var(--line); padding: clamp(80px, 12vw, 160px) 0;" id="contacto">
      <div class="container">
        <div style="max-width: 1040px;">
          <div class="kicker crimson" style="margin-bottom: 24px;">One Development · One Identity · One Experience · One Launch</div>
          
          <h2 class="display-title" style="margin-bottom: 32px; font-size: clamp(2.8rem, 6.5vw, 6.2rem); line-height: 0.94;">
            FROM PROJECT<br>
            TO LAUNCH.<br>
            <span style="color: var(--crimson);">LET'S TALK.</span>
          </h2>
          
          <p class="body-large body-muted" style="max-width: 720px; font-size: clamp(1.2rem, 2.2vw, 1.55rem); line-height: 1.45; margin-bottom: 48px;">
            If you are preparing a development and want to define its image, marketing materials, and commercial launch, tell us about the project.
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; margin-bottom: 60px;">
            <a href="mailto:info@eidosrender.es?subject=Real%20Estate%20Project%20Inquiry" class="btn btn-crimson" style="padding: 20px 38px; font-size: 1rem;">
              LET'S DISCUSS THE PROJECT →
            </a>
          </div>

          <!-- Minimalist Direct Contact Block -->
          <div style="padding-top: 48px; border-top: 1px solid var(--line); display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 36px; align-items: start;">
            <div>
              <div style="font-family: 'Space Grotesk', sans-serif; font-size: 1.15rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 6px; text-transform: uppercase;">
                EIDOS RENDER
              </div>
              <div style="font-family: 'Archivo', sans-serif; font-size: 0.88rem; color: var(--signal); line-height: 1.5;">
                Image · Identity · Sales · Digital · Acquisition
              </div>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Direct Email</span>
              <a href="mailto:info@eidosrender.es" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--ink); text-decoration: none; border-bottom: 2px solid var(--crimson); padding-bottom: 2px;">
                info@eidosrender.es
              </a>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Direct Phone</span>
              <a href="tel:+34614459144" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; color: var(--ink); text-decoration: none;">
                +34 614 45 91 44
              </a>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Studio</span>
              <span style="font-family: 'Archivo', sans-serif; font-size: 0.95rem; color: var(--ink); line-height: 1.5;">
                Valencia, Spain<br>
                <span style="color: var(--signal); font-size: 0.85rem;">European & International Service</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">

        <div>
          <div class="footer-brand" style="margin-bottom: 14px;">EIDOS RENDER</div>
          <p style="font-size: 0.88rem; color: rgba(244,243,239,0.7); max-width: 320px; line-height: 1.6; margin-bottom: 20px;">
            Creative and visual partner for the commercial launch of real estate developments across Europe.
          </p>
          <div style="font-size: 0.82rem; color: var(--signal);">
            Image · Identity · Sales · Digital · Acquisition
          </div>
        </div>

        <div>
          <div class="footer-col-title">Navigation</div>
          <ul class="footer-links">
            <li><a href="#proyectos">Projects</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="#proceso">Methodology</a></li>
            <li><a href="#escala">Scope & Scale</a></li>
            <li><a href="#eidos">About Studio</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Services</div>
          <ul class="footer-links">
            <li><a href="services/branding.html">Direction & Identity</a></li>
            <li><a href="services/3d-rendering.html">3D Architectural Imagery</a></li>
            <li><a href="services/3d-video.html">3D Video & Film</a></li>
            <li><a href="services/marketing-collateral.html">Marketing Collateral</a></li>
            <li><a href="services/real-estate-web.html">Development Website</a></li>
            <li><a href="services/acquisition.html">Launch & Acquisition</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Direct Contact</div>
          <ul class="footer-links">
            <li><a href="mailto:info@eidosrender.es">info@eidosrender.es</a></li>
            <li><a href="tel:+34614459144">+34 614 45 91 44</a></li>
            <li>Valencia, Spain</li>
            <li style="margin-top: 14px;">
              <a href="https://www.linkedin.com/company/eidos-render" target="_blank" rel="noopener" style="color: var(--crimson); font-weight: 600;">
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <div>© 2026 Eidos Render. All rights reserved.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../" onclick="window.setLang('es')">ES</a> ·
            <span style="color: var(--crimson); font-weight: 700;">EN</span> ·
            <a href="../de/" onclick="window.setLang('de')">DE</a> ·
            <a href="../fr/" onclick="window.setLang('fr')">FR</a>
          </div>
          <a href="legal-notice.html">Legal Notice</a>
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="cookie-policy.html">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('en/index.html', enIndex);

// -------------------------------------------------------------
// 2. en/services.html
// -------------------------------------------------------------
const enServices = `<!DOCTYPE html>
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
  
  <title>Services — Eidos Render | One Unified Vision. Every Asset Covered.</title>
  <meta name="description" content="Visual and commercial launch services for property developments: Direction & identity, 3D imagery, film, sales collateral, development websites, and buyer acquisition.">
  <link rel="canonical" href="https://eidosrender.es/en/services">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/servicios">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/services">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/leistungen">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/services">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/services">

  <!-- Multilingual & Geo-routing -->
  <script src="../js/i18n.js"></script>

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Eidos Render">
  <meta property="og:title" content="Services — Eidos Render | One Unified Vision. Every Asset Covered.">
  <meta property="og:description" content="Integrated capabilities for the commercial launch of real estate developments across Europe.">
  <meta property="og:url" content="https://eidosrender.es/en/services">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon.png">
  <link rel="shortcut icon" href="../favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">

  <!-- Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="../style.css">
</head>
<body class="bg-paper">

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4S8NC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- Header -->
  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo" aria-label="Eidos Render Home">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links">
          <li><a href="projects.html">Projects</a></li>
          <li><a href="services.html" class="active">Services</a></li>
          <li><a href="./#proceso">Process</a></li>
          <li><a href="./#eidos">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Language selector">
          <a href="../servicios.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="en">EN</span>
          <span class="lang-divider">/</span>
          <a href="../de/leistungen.html" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <a href="../fr/services.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>

        <a href="contact.html" class="nav-cta">
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
        <a href="../servicios.html" data-lang="es" onclick="window.setLang('es')">ES</a>
        <span class="active" data-lang="en">EN</span>
        <a href="../de/leistungen.html" data-lang="de" onclick="window.setLang('de')">DE</a>
        <a href="../fr/services.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="projects.html">Projects</a></li>
        <li><a href="services.html" class="active">Services</a></li>
        <li><a href="./#proceso">Process</a></li>
        <li><a href="./#eidos">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Real Estate Launch</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main style="padding-top: var(--nav-h);">

    <!-- Section Header -->
    <section class="section-sm bg-paper" style="border-bottom: 1px solid var(--line);">
      <div class="container">
        <div class="kicker crimson">Capabilities Catalog</div>
        <h1 class="display-title" style="margin-bottom: 24px;">
          One unified vision.<br>Every asset covered.
        </h1>
        <p class="body-large body-muted" style="max-width: 760px;">
          We build the complete visual and commercial system required to present, differentiate, and sell off-plan property developments. You do not need to contract every phase: our engagement is tailored to the exact stage of your project.
        </p>
      </div>
    </section>

    <!-- DETAILED PHASES -->
    <section class="section bg-paper">
      <div class="container">

        <!-- 01 Direction & Identity -->
        <article class="service-block-row" id="direction" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">01</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Direction & Identity</h2>
            <div style="margin-bottom: 16px;">
              <a href="services/branding.html" class="link-arrow" style="font-size: 0.75rem;">VIEW SPECIFIC PAGE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">What We Do</span>
              <p class="body-regular body-muted">
                We define the creative concept, visual positioning, and brand universe of the development before initiating graphical production.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">What We Deliver</span>
              <p class="body-regular body-muted">
                Strategic naming, brand identity manual, typographic and chromatic systems, and guidelines for showrooms and construction hoardings.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Commercial Impact</span>
              <p class="body-regular body-muted">
                Builds a development brand that substantiates square-meter value and enforces strict visual coherence across all marketing channels.
              </p>
            </div>
          </div>
        </article>

        <!-- 02 3D Architectural Imagery -->
        <article class="service-block-row" id="imagery" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">02</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">3D Architectural Imagery</h2>
            <div style="margin-bottom: 16px;">
              <a href="services/3d-rendering.html" class="link-arrow" style="font-size: 0.75rem;">VIEW SPECIFIC PAGE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">What We Do</span>
              <p class="body-regular body-muted">
                High-end photorealistic 3D visualization for facades, landscaped gardens, interior architecture, and penthouse lifestyle spaces.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">What We Deliver</span>
              <p class="body-regular body-muted">
                High-resolution CGI renders ready for large-format hoardings, digital advertising, and luxury editorial print.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Commercial Impact</span>
              <p class="body-regular body-muted">
                Eliminates buyer hesitation by presenting the unbuilt architecture with tangible materiality and emotional warmth.
              </p>
            </div>
          </div>
        </article>

        <!-- 03 3D Video & Film -->
        <article class="service-block-row" id="video" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">03</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">3D Video & Animation</h2>
            <div style="margin-bottom: 16px;">
              <a href="services/3d-video.html" class="link-arrow" style="font-size: 0.75rem;">VIEW SPECIFIC PAGE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">What We Do</span>
              <p class="body-regular body-muted">
                Cinematic 3D animation, architectural walkthroughs, and vertical video formats for social channels and sales lounges.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">What We Deliver</span>
              <p class="body-regular body-muted">
                High-definition video files with color grading and immersive sound design, ready for Meta, YouTube, and presentation displays.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Commercial Impact</span>
              <p class="body-regular body-muted">
                Multiplies investor engagement and delivers a profound spatial understanding that static images alone cannot achieve.
              </p>
            </div>
          </div>
        </article>

        <!-- 04 Marketing Collateral -->
        <article class="service-block-row" id="collateral" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">04</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Marketing Collateral</h2>
            <div style="margin-bottom: 16px;">
              <a href="services/marketing-collateral.html" class="link-arrow" style="font-size: 0.75rem;">VIEW SPECIFIC PAGE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">What We Do</span>
              <p class="body-regular body-muted">
                Editorial sales brochures, furnished and dimensioned 2D/3D floor plans, area location maps, and apartment typology sheets.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">What We Deliver</span>
              <p class="body-regular body-muted">
                Print-ready artwork and interactive digital PDFs structured to guide buyers through layouts, finishes, and technical specifications.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Commercial Impact</span>
              <p class="body-regular body-muted">
                Arms real estate agents with professional documentation that builds institutional credibility during client meetings.
              </p>
            </div>
          </div>
        </article>

        <!-- 05 Development Web -->
        <article class="service-block-row" id="website" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">05</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Development Website</h2>
            <div style="margin-bottom: 16px;">
              <a href="services/real-estate-web.html" class="link-arrow" style="font-size: 0.75rem;">VIEW SPECIFIC PAGE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">What We Do</span>
              <p class="body-regular body-muted">
                Custom development website engineered for immersion, interactive typology filtering, rapid loading, and buyer capture.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">What We Deliver</span>
              <p class="body-regular body-muted">
                Fully responsive custom website connected to analytics, marketing pixels, and direct inquiry routing.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Commercial Impact</span>
              <p class="body-regular body-muted">
                Acts as the central conversion engine for the development, turning advertising traffic into qualified sales inquiries.
              </p>
            </div>
          </div>
        </article>

        <!-- 06 Launch & Acquisition -->
        <article class="service-block-row" id="acquisition" style="padding: 70px 0; display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">06</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Launch & Acquisition</h2>
            <div style="margin-bottom: 16px;">
              <a href="services/acquisition.html" class="link-arrow" style="font-size: 0.75rem;">VIEW SPECIFIC PAGE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">What We Do</span>
              <p class="body-regular body-muted">
                Targeted Google Search and Meta Ads campaigns utilizing 3D imagery and video to connect with qualified domestic and international buyers.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">What We Deliver</span>
              <p class="body-regular body-muted">
                Campaign setup, ongoing creative rotation, weekly optimization, and transparent reporting focused on high-intent lead flow.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Commercial Impact</span>
              <p class="body-regular body-muted">
                Secures commercial momentum from day one of public sales, accelerating pre-construction reservation targets.
              </p>
            </div>
          </div>
        </article>

      </div>
    </section>

    <!-- Bottom Editorial Callout -->
    <section class="section-sm bg-ink" style="color: var(--paper);">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 32px;">
        <div>
          <h3 class="display-sub" style="color: var(--paper); margin-bottom: 8px;">Preparing an upcoming development?</h3>
          <p class="body-regular" style="color: rgba(244,243,239,0.7); max-width: 580px;">
            Let us review the plans and calibrate the ideal visual and commercial scope for your launch.
          </p>
        </div>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <a href="contact.html" class="btn btn-crimson">
            LET'S DISCUSS THE PROJECT →
          </a>
        </div>
      </div>
    </section>

  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-bottom">
        <div>© 2026 Eidos Render. Services.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../servicios.html" onclick="window.setLang('es')">ES</a> ·
            <span style="color: var(--crimson); font-weight: 700;">EN</span> ·
            <a href="../de/leistungen.html" onclick="window.setLang('de')">DE</a> ·
            <a href="../fr/services.html" onclick="window.setLang('fr')">FR</a>
          </div>
          <a href="projects.html">Projects</a>
          <a href="contact.html">Contact</a>
          <a href="legal-notice.html">Legal Notice</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('en/services.html', enServices);
writeFile('en/services/index.html', enServices.replace(/\.\.\//g, '../../').replace(/href="services\//g, 'href="').replace(/href="\.\/"/g, 'href="../"'));

// -------------------------------------------------------------
// 3. en/projects.html
// -------------------------------------------------------------
const enProjects = `<!DOCTYPE html>
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
  
  <title>Projects & Case Studies — Eidos Render</title>
  <meta name="description" content="Portfolio of architectural 3D visualization, video, and commercial brand assets for residential developments and landmark schemes across Europe.">
  <link rel="canonical" href="https://eidosrender.es/en/projects">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/proyectos">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/projects">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/projekte">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/projets">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/projects">

  <!-- Multilingual & Geo-routing -->
  <script src="../js/i18n.js"></script>

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Eidos Render">
  <meta property="og:title" content="Projects & Case Studies — Eidos Render">
  <meta property="og:description" content="Portfolio of architectural 3D visualization, film, and commercial launch assets.">
  <meta property="og:url" content="https://eidosrender.es/en/projects">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon.png">
  <link rel="shortcut icon" href="../favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">

  <!-- Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="../style.css">
</head>
<body class="bg-paper">

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4S8NC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- Header -->
  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo" aria-label="Eidos Render Home">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links">
          <li><a href="projects.html" class="active">Projects</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="./#proceso">Process</a></li>
          <li><a href="./#eidos">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Language selector">
          <a href="../proyectos.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="en">EN</span>
          <span class="lang-divider">/</span>
          <a href="../de/projekte.html" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <a href="../fr/projets.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>

        <a href="contact.html" class="nav-cta">
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
        <a href="../proyectos.html" data-lang="es" onclick="window.setLang('es')">ES</a>
        <span class="active" data-lang="en">EN</span>
        <a href="../de/projekte.html" data-lang="de" onclick="window.setLang('de')">DE</a>
        <a href="../fr/projets.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="projects.html" class="active">Projects</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="./#proceso">Process</a></li>
        <li><a href="./#eidos">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Real Estate Launch</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main style="padding-top: var(--nav-h);">

    <!-- Section Header -->
    <section class="section-sm bg-paper" style="border-bottom: 1px solid var(--line);">
      <div class="container">
        <div class="kicker crimson">Production Archive</div>
        <h1 class="display-title" style="margin-bottom: 24px;">
          Selected projects.
        </h1>
        <p class="body-large body-muted" style="max-width: 760px;">
          Rigorous 3D visualization, visual direction, and commercial assets for residential developments, villas, and landmark real estate schemes across Europe.
        </p>
      </div>
    </section>

    <!-- EDITORIAL ARCHIVE GRID -->
    <section class="section bg-paper">
      <div class="container">
        <div class="editorial-portfolio">

          <!-- 01 -->
          <article class="project-card span-8">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
                  <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Residential Building Facade CGI" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Residential Complex</h3>
                  <div class="project-services-line">Multi-Family Residential · Visual Direction · Urban Context</div>
                </div>
                <div class="project-meta">Valencia, ES</div>
              </div>
            </div>
          </article>

          <!-- 02 -->
          <article class="project-card span-4 tall">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/infografia-exterior-zonas-comunes-obra-nueva.webp" type="image/webp">
                  <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="Communal Swimming Pool and Gardens CGI" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Amenities & Landscaping</h3>
                  <div class="project-services-line">3D Visualization · Pools & Gardens · Cinematic Film</div>
                </div>
                <div class="project-meta">Madrid, ES</div>
              </div>
            </div>
          </article>

          <!-- 03 -->
          <article class="project-card span-4 tall">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/render-exterior-vivienda-unifamiliar-piscina.webp" type="image/webp">
                  <img src="../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Contemporary Detached Villa CGI" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Contemporary Villa</h3>
                  <div class="project-services-line">Single-Family Villa · Infinity Pool · Coastal Integration</div>
                </div>
                <div class="project-meta">Alicante, ES</div>
              </div>
            </div>
          </article>

          <!-- 04 -->
          <article class="project-card span-8">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/infografia-3d-salon-moderno-doble-altura.webp" type="image/webp">
                  <img src="../img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Double Height Penthouse Interior CGI" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Double-Height Penthouse</h3>
                  <div class="project-services-line">Interior Architecture · High-End CGI · Art Direction</div>
                </div>
                <div class="project-meta">Prime Living</div>
              </div>
            </div>
          </article>

          <!-- 05 -->
          <article class="project-card span-6">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/render-cocina-moderna-isla-madera.webp" type="image/webp">
                  <img src="../img/render-cocina-moderna-isla-madera-1600.jpg" alt="Bespoke Kitchen Island Render" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Central Island Kitchen</h3>
                  <div class="project-services-line">Natural Materials · Wood Craftsmanship · Warm Illumination</div>
                </div>
                <div class="project-meta">Detail</div>
              </div>
            </div>
          </article>

          <!-- 06 -->
          <article class="project-card span-6">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/infografia-dormitorio-principal-render-inmobiliario.webp" type="image/webp">
                  <img src="../img/infografia-dormitorio-principal-render-inmobiliario-1600.jpg" alt="Contemporary Master Suite Interior Render" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Residential Master Suite</h3>
                  <div class="project-services-line">Serene Ambience · Tactile Finishes · Custom Furniture</div>
                </div>
                <div class="project-meta">Suite</div>
              </div>
            </div>
          </article>

        </div>

        <div style="margin-top: 80px; text-align: center; border-top: 1px solid var(--line); padding-top: 60px;">
          <h2 class="display-title" style="margin-bottom: 20px;">Let's discuss your next project.</h2>
          <p class="body-large body-muted" style="max-width: 600px; margin: 0 auto 32px;">
            We calibrate each engagement to your project's milestones, commercial targets, and target buyer demographic.
          </p>
          <a href="contact.html" class="btn btn-crimson">
            HAVE A PROJECT IN MIND? LET'S TALK →
          </a>
        </div>
      </div>
    </section>

  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-bottom">
        <div>© 2026 Eidos Render. Portfolio.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../proyectos.html" onclick="window.setLang('es')">ES</a> ·
            <span style="color: var(--crimson); font-weight: 700;">EN</span> ·
            <a href="../de/projekte.html" onclick="window.setLang('de')">DE</a> ·
            <a href="../fr/projets.html" onclick="window.setLang('fr')">FR</a>
          </div>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
          <a href="legal-notice.html">Legal Notice</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('en/projects.html', enProjects);
writeFile('en/projects/index.html', enProjects.replace(/\.\.\//g, '../../').replace(/href="projects\.html"/g, 'href="./"').replace(/href="services\.html"/g, 'href="../services.html"').replace(/href="contact\.html"/g, 'href="../contact.html"').replace(/href="\.\/"/g, 'href="../"'));

// -------------------------------------------------------------
// 4. en/contact.html
// -------------------------------------------------------------
const enContact = `<!DOCTYPE html>
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
  
  <title>Contact — Eidos Render | From Project to Launch</title>
  <meta name="description" content="Tell us about your property development. We evaluate 3D CGI, film, identity, sales materials, website, and buyer acquisition for your upcoming launch.">
  <link rel="canonical" href="https://eidosrender.es/en/contact">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/contacto">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/contact">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/kontakt">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/contact">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/contact">

  <!-- Multilingual & Geo-routing -->
  <script src="../js/i18n.js"></script>

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Eidos Render">
  <meta property="og:title" content="Contact — Eidos Render | From Project to Launch">
  <meta property="og:description" content="Tell us about your property development. We structure visual production and commercial launch.">
  <meta property="og:url" content="https://eidosrender.es/en/contact">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon.png">
  <link rel="shortcut icon" href="../favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">

  <!-- Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="../style.css">
</head>
<body class="bg-paper">

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4S8NC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- Header -->
  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo" aria-label="Eidos Render Home">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links">
          <li><a href="projects.html">Projects</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="./#proceso">Process</a></li>
          <li><a href="./#eidos">About</a></li>
          <li><a href="contact.html" class="active">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Language selector">
          <a href="../contacto.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="en">EN</span>
          <span class="lang-divider">/</span>
          <a href="../de/kontakt.html" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <a href="../fr/contact.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>

        <a href="contact.html" class="nav-cta">
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
        <a href="../contacto.html" data-lang="es" onclick="window.setLang('es')">ES</a>
        <span class="active" data-lang="en">EN</span>
        <a href="../de/kontakt.html" data-lang="de" onclick="window.setLang('de')">DE</a>
        <a href="../fr/contact.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="projects.html">Projects</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="./#proceso">Process</a></li>
        <li><a href="./#eidos">About</a></li>
        <li><a href="contact.html" class="active">Contact</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Real Estate Launch</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main style="padding-top: var(--nav-h);">

    <section class="section bg-paper" style="padding: clamp(80px, 12vw, 160px) 0;">
      <div class="container">
        
        <div style="max-width: 980px;">
          <div class="kicker crimson" style="margin-bottom: 24px;">Direct Contact</div>
          
          <h1 class="display-title" style="margin-bottom: 32px; font-size: clamp(2.8rem, 6.5vw, 6.2rem); line-height: 0.94;">
            FROM PROJECT<br>
            TO LAUNCH.<br>
            <span style="color: var(--crimson);">LET'S TALK.</span>
          </h1>
          
          <p class="body-large body-muted" style="max-width: 720px; font-size: clamp(1.2rem, 2.2vw, 1.55rem); line-height: 1.45; margin-bottom: 48px;">
            If you are preparing a development and want to define its image, marketing collateral, and commercial launch, tell us about the project.
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; margin-bottom: 64px;">
            <a href="mailto:info@eidosrender.es?subject=Real%20Estate%20Project%20Inquiry" class="btn btn-crimson" style="padding: 20px 38px; font-size: 1rem;">
              LET'S DISCUSS THE PROJECT →
            </a>
            <a href="mailto:info@eidosrender.es?subject=Development%20Presentation" class="btn btn-outline-ink" style="padding: 20px 38px; font-size: 1rem;">
              TELL US ABOUT THE DEVELOPMENT →
            </a>
          </div>

          <!-- Minimalist Direct Contact Block -->
          <div style="padding-top: 48px; border-top: 1px solid var(--line); display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 40px; align-items: start;">
            
            <div>
              <div style="font-family: 'Space Grotesk', sans-serif; font-size: 1.15rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 8px; text-transform: uppercase;">
                EIDOS RENDER
              </div>
              <div style="font-family: 'Archivo', sans-serif; font-size: 0.9rem; color: var(--signal); line-height: 1.5;">
                Image · Identity · Sales · Digital · Acquisition
              </div>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 8px; display: block;">Direct Email</span>
              <a href="mailto:info@eidosrender.es" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--ink); text-decoration: none; border-bottom: 2px solid var(--crimson); padding-bottom: 2px;">
                info@eidosrender.es
              </a>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 8px; display: block;">Direct Phone</span>
              <a href="tel:+34614459144" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; color: var(--ink); text-decoration: none;">
                +34 614 45 91 44
              </a>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 8px; display: block;">Studio Location</span>
              <span style="font-family: 'Archivo', sans-serif; font-size: 0.95rem; color: var(--ink); line-height: 1.5;">
                Valencia, Spain<br>
                <span style="color: var(--signal); font-size: 0.85rem;">Serving Clients Across Europe</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>

  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-bottom">
        <div>© 2026 Eidos Render. Direct Contact.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../contacto.html" onclick="window.setLang('es')">ES</a> ·
            <span style="color: var(--crimson); font-weight: 700;">EN</span> ·
            <a href="../de/kontakt.html" onclick="window.setLang('de')">DE</a> ·
            <a href="../fr/contact.html" onclick="window.setLang('fr')">FR</a>
          </div>
          <a href="projects.html">Projects</a>
          <a href="services.html">Services</a>
          <a href="legal-notice.html">Legal Notice</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('en/contact.html', enContact);
writeFile('en/contact/index.html', enContact.replace(/\.\.\//g, '../../').replace(/href="contact\.html"/g, 'href="./"').replace(/href="projects\.html"/g, 'href="../projects.html"').replace(/href="services\.html"/g, 'href="../services.html"').replace(/href="\.\/"/g, 'href="../"'));

// -------------------------------------------------------------
// 5. en/faq.html
// -------------------------------------------------------------
const enFaq = `<!DOCTYPE html>
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
  
  <title>Frequently Asked Questions (FAQ) — Eidos Render</title>
  <meta name="description" content="Frequently asked questions regarding delivery timelines, technical documentation, methodology, and commercial launch capabilities for property developments.">
  <link rel="canonical" href="https://eidosrender.es/en/faq">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/faq">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/faq">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/faq">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/faq">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/faq">

  <!-- Multilingual & Geo-routing -->
  <script src="../js/i18n.js"></script>

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Eidos Render">
  <meta property="og:title" content="Frequently Asked Questions (FAQ) — Eidos Render">
  <meta property="og:description" content="Methodology, timelines, and key answers for property developers, architects, and investment funds.">
  <meta property="og:url" content="https://eidosrender.es/en/faq">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon.png">
  <link rel="shortcut icon" href="../favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">

  <!-- Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="../style.css">

  <!-- Schema.org FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What technical documentation is needed to begin a project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Architectural drawings in CAD (DWG) or PDF format (plans, elevations, sections) along with preliminary specification sheets or material guidelines are sufficient to kick off our art direction and production."
        }
      },
      {
        "@type": "Question",
        "name": "What are typical production timelines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A comprehensive end-to-end launch project typically executes over 6 to 10 weeks across parallel work streams. For specific 3D visualization or film phases, initial camera and lighting drafts are delivered within days."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with property developers and architects across Europe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We actively collaborate with property developers, investment funds, and architectural studios across Spain, the UK, Germany, France, Switzerland, Austria, Belgium, and internationally through a structured, fully digital workflow."
        }
      },
      {
        "@type": "Question",
        "name": "Is it mandatory to contract the full launch service or can individual phases be commissioned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our engagement is strictly modular. We can intervene purely for high-end 3D CGI and architectural film or deliver the entire launch ecosystem (brand identity, editorial brochures, development website, and buyer acquisition)."
        }
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
  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo" aria-label="Eidos Render Home">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links">
          <li><a href="projects.html">Projects</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="./#proceso">Process</a></li>
          <li><a href="./#eidos">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Language selector">
          <a href="../faq.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="en">EN</span>
          <span class="lang-divider">/</span>
          <a href="../de/faq.html" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <a href="../fr/faq.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>

        <a href="contact.html" class="nav-cta">
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
        <a href="../faq.html" data-lang="es" onclick="window.setLang('es')">ES</a>
        <span class="active" data-lang="en">EN</span>
        <a href="../de/faq.html" data-lang="de" onclick="window.setLang('de')">DE</a>
        <a href="../fr/faq.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="projects.html">Projects</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="./#proceso">Process</a></li>
        <li><a href="./#eidos">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Real Estate Launch</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main style="padding-top: var(--nav-h);">

    <!-- Section Header -->
    <section class="section-sm bg-paper" style="border-bottom: 1px solid var(--line);">
      <div class="container">
        <div class="kicker crimson">Methodology & Scope</div>
        <h1 class="display-title" style="margin-bottom: 24px;">
          Frequently Asked Questions.
        </h1>
        <p class="body-large body-muted" style="max-width: 760px;">
          Technical criteria, project timelines, and collaboration framework for developers, investment funds, and architects.
        </p>
      </div>
    </section>

    <!-- FAQ LIST -->
    <section class="section bg-paper">
      <div class="container container-narrow">

        <div style="display: flex; flex-direction: column; gap: 48px;">
          
          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Technical Input</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              What architectural documentation is required to estimate and launch a project?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              Architectural drawings in CAD (DWG) or PDF format (plans, elevations, sections) along with preliminary finish schedules or material guidelines are all we need. From this information, we establish the visual framing, art direction, and production timeline.
            </p>
          </div>

          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Timelines & Milestones</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              What are the standard delivery timeframes?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              A comprehensive launch project (identity, 3D imagery, film, brochures, website, and ad activation) typically executes in 6 to 10 weeks. For specific 3D architectural visualization, initial camera composition and lighting passes are shared within days.
            </p>
          </div>

          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Modular Capabilities</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              Can individual service phases be commissioned separately?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              Yes. We do not require full-suite contracting. We regularly deliver standalone 3D CGI and architectural films for schemes with existing branding, or conversely step in to provide complete end-to-end commercialization.
            </p>
          </div>

          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">European Operations</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              Do you work with developments across Europe?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              Yes. We collaborate with property developers, private equity funds, and architects across Spain, the UK, Germany, France, Switzerland, Austria, and Belgium. All communications and reviews run through a centralized, transparent digital workflow.
            </p>
          </div>

          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Terms & Engagement</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              What are the contractual and payment terms?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              We operate under transparent milestone agreements. Production kicks off upon a 50% reservation deposit, with the remaining 50% due upon final client sign-off and delivery of all high-resolution production assets.
            </p>
          </div>

        </div>

        <!-- Editorial CTA Box -->
        <div style="margin-top: 70px; padding: 48px; background-color: var(--ink); color: var(--paper);">
          <div class="kicker crimson">Direct Contact</div>
          <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; line-height: 1.1; margin-bottom: 16px;">
            Planning an upcoming development?
          </h2>
          <p style="color: rgba(244,243,239,0.75); font-size: 1.05rem; line-height: 1.5; max-width: 600px; margin-bottom: 32px;">
            Let us review the plans and calibrate the ideal timeline and assets for your commercial launch.
          </p>
          <a href="mailto:info@eidosrender.es?subject=Real%20Estate%20Project%20Inquiry" class="btn btn-crimson">
            LET'S DISCUSS THE PROJECT →
          </a>
        </div>

      </div>
    </section>

  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-bottom">
        <div>© 2026 Eidos Render. Frequently Asked Questions.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../faq.html" onclick="window.setLang('es')">ES</a> ·
            <span style="color: var(--crimson); font-weight: 700;">EN</span> ·
            <a href="../de/faq.html" onclick="window.setLang('de')">DE</a> ·
            <a href="../fr/faq.html" onclick="window.setLang('fr')">FR</a>
          </div>
          <a href="projects.html">Projects</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
          <a href="legal-notice.html">Legal Notice</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('en/faq.html', enFaq);

// -------------------------------------------------------------
// 6. 6 English Subservices in en/services/
// -------------------------------------------------------------

function renderEnSubservice({ filename, canonicalSlug, esFile, deFile, frFile, phaseNum, phaseName, heroTitle, heroCopy, pillars }) {
  const pillarsHtml = pillars.map(p => `
          <div class="feature-card">
            <span class="kicker crimson">${p.kicker}</span>
            <h3 class="feature-card-title">${p.title}</h3>
            <p class="feature-card-copy">${p.desc}</p>
          </div>
  `).join('');

  return `<!DOCTYPE html>
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
  
  <title>${phaseName} — Eidos Render</title>
  <meta name="description" content="${heroCopy.replace(/"/g, '&quot;')}">
  <link rel="canonical" href="https://eidosrender.es/en/services/${canonicalSlug}">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/servicios/${esFile}">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/services/${canonicalSlug}">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/leistungen/${deFile}">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/services/${frFile}">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/services/${canonicalSlug}">

  <!-- Multilingual & Geo-routing -->
  <script src="../../js/i18n.js"></script>

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${phaseName} — Eidos Render">
  <meta property="og:description" content="${heroCopy.replace(/"/g, '&quot;')}">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva-1600.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="48x48" href="../../favicon.png">
  <link rel="shortcut icon" href="../../favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../../apple-touch-icon.png">

  <!-- Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="../../style.css">
</head>
<body class="bg-paper">

  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="../" class="logo" aria-label="Eidos Render Home">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Main Navigation">
        <ul class="nav-links">
          <li><a href="../projects.html">Projects</a></li>
          <li><a href="../services.html" class="active">Services</a></li>
          <li><a href="../#proceso">Process</a></li>
          <li><a href="../contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Language selector">
          <a href="../../servicios/${esFile}.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="en">EN</span>
          <span class="lang-divider">/</span>
          <a href="../../de/leistungen/${deFile}.html" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <a href="../../fr/services/${frFile}.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>

        <a href="../contact.html" class="nav-cta">
          LET'S DISCUSS THE PROJECT →
        </a>
      </div>

      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main style="padding-top: var(--nav-h);">

    <section class="section-sm bg-paper" style="border-bottom: 1px solid var(--line);">
      <div class="container">
        <div style="margin-bottom: 16px;">
          <a href="../services.html" class="link-arrow" style="font-size: 0.72rem;">← BACK TO SERVICES</a>
        </div>
        <div class="kicker crimson">Phase ${phaseNum} · ${phaseName}</div>
        <h1 class="display-title" style="margin-bottom: 24px;">
          ${heroTitle}
        </h1>
        <p class="body-large body-muted" style="max-width: 760px;">
          ${heroCopy}
        </p>
      </div>
    </section>

    <!-- Pillars -->
    <section class="section bg-paper">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; margin-bottom: 60px;">
          ${pillarsHtml}
        </div>

        <div style="border-top: 1px solid var(--line); padding-top: 48px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;">
          <div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.4rem; font-weight: 700; margin-bottom: 8px;">Plan this phase for your development</h3>
            <p class="body-regular body-muted">We structure individual proposals or full launch integration.</p>
          </div>
          <a href="../contact.html" class="btn btn-crimson">
            LET'S DISCUSS THE PROJECT →
          </a>
        </div>
      </div>
    </section>

  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-bottom">
        <div>© 2026 Eidos Render. ${phaseName}.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../../servicios/${esFile}.html" onclick="window.setLang('es')">ES</a> ·
            <span style="color: var(--crimson); font-weight: 700;">EN</span> ·
            <a href="../../de/leistungen/${deFile}.html" onclick="window.setLang('de')">DE</a> ·
            <a href="../../fr/services/${frFile}.html" onclick="window.setLang('fr')">FR</a>
          </div>
          <a href="../services.html">Services</a>
          <a href="../projects.html">Projects</a>
          <a href="../contact.html">Contact</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../../main.js" defer></script>
</body>
</html>`;
}

// 01 Branding
writeFile('en/services/branding.html', renderEnSubservice({
  filename: 'en/services/branding.html',
  canonicalSlug: 'branding',
  esFile: 'branding',
  deFile: 'branding',
  frFile: 'branding',
  phaseNum: '01',
  phaseName: 'Real Estate Branding & Identity',
  heroTitle: 'A development also requires a distinctive identity.',
  heroCopy: 'We reject generic branding templates. We craft brand identities rooted in architecture, natural context, and the verified square-meter value of each property development.',
  pillars: [
    { kicker: 'Strategy', title: 'Naming & Concept', desc: 'The name of a development dictates market perception. We craft names with geographic or conceptual resonance, international phonetic ease, and verified legal availability.' },
    { kicker: 'Design', title: 'Visual & Typographic System', desc: 'We engineer the logomark, bespoke typography, and a calibrated color palette designed to harmonize with tactile architectural materials (timber, natural stone, metal).' },
    { kicker: 'Production', title: 'Art Direction Guidelines', desc: 'Detailed manuals for 3D staging, natural lighting temperatures, furniture selection, and camera angles to guarantee complete visual synergy.' },
    { kicker: 'Physical', title: 'Site Hoardings & Sales Displays', desc: 'Architectural hoardings, sales gallery signage, interactive digital displays, and luxury key handover presentation boxes.' }
  ]
}));

// 02 3D Rendering
writeFile('en/services/3d-rendering.html', renderEnSubservice({
  filename: 'en/services/3d-rendering.html',
  canonicalSlug: '3d-rendering',
  esFile: 'infografia-3d',
  deFile: '3d-rendering',
  frFile: 'rendu-3d',
  phaseNum: '02',
  phaseName: '3D Architectural Imagery',
  heroTitle: 'The image before construction.',
  heroCopy: 'We visualize architecture with rigorous fidelity and atmospheric emotion. Exterior elevations, landscaped amenities, and interior living spaces in ultra-high resolution.',
  pillars: [
    { kicker: 'Exteriors', title: 'Facades & Urban Staging', desc: 'High-precision modeling from architectural plans, photographic site drone integration, and precise natural sun studies.' },
    { kicker: 'Interiors', title: 'Interior Architecture & Staging', desc: 'Tactile materiality, accurate millwork, custom furniture curation, and warm natural lighting that awakens prospective buyer desire.' },
    { kicker: 'Landscaping', title: 'Amenities & Communal Spaces', desc: 'Resort-style infinity pools, Mediterranean gardens, co-working lounges, and resident wellness facilities presented with spatial clarity.' },
    { kicker: 'Format', title: 'High-Resolution Production', desc: 'Clean 4K/8K rendering calibrated for high-impact outdoor hoardings, luxury print brochures, and digital multi-device campaigns.' }
  ]
}));

// 03 3D Video
writeFile('en/services/3d-video.html', renderEnSubservice({
  filename: 'en/services/3d-video.html',
  canonicalSlug: '3d-video',
  esFile: 'video-3d',
  deFile: '3d-video',
  frFile: 'video-3d',
  phaseNum: '03',
  phaseName: '3D Video & Architectural Animation',
  heroTitle: 'From static renders to an experiential cinematic journey.',
  heroCopy: 'Movement reveals volumetric spaces, conveys scale, and triggers profound emotional engagement in investor presentations and digital acquisition campaigns.',
  pillars: [
    { kicker: 'Cinematic', title: 'Architectural Walkthroughs', desc: 'Fluid camera tracks traversing from aerial urban integration into intimate interior spaces with natural camera optics.' },
    { kicker: 'Digital', title: 'Vertical Social Formats', desc: 'Dynamic 9:16 cuts and reels optimized for Instagram and Meta Ads campaigns to maximize organic and paid retention.' },
    { kicker: 'Atmosphere', title: 'Grading & Soundscapes', desc: 'Custom sound design, subtle ambient audio, and professional color grading tailored to the development identity.' },
    { kicker: 'Sales', title: 'Sales Lounge Presentations', desc: 'Seamless 4K video loops and interactive keynote presentations built for developer sales offices and overseas roadshows.' }
  ]
}));

// 04 Marketing Collateral
writeFile('en/services/marketing-collateral.html', renderEnSubservice({
  filename: 'en/services/marketing-collateral.html',
  canonicalSlug: 'marketing-collateral',
  esFile: 'material-comercial',
  deFile: 'vermarktungsunterlagen',
  frFile: 'supports-commerciaux',
  phaseNum: '04',
  phaseName: 'Sales Collateral & Brochures',
  heroTitle: 'From architectural plans to persuasive sales tools.',
  heroCopy: 'We translate complex blueprints into intuitive, elegant, and commercially compelling materials that empower your sales network and guide serious buyers.',
  pillars: [
    { kicker: 'Editorial', title: 'Sales Dossiers & Brochures', desc: 'Luxury print and interactive digital brochures featuring finish schedules, architectural philosophy, and lifestyle narratives.' },
    { kicker: 'Clarity', title: 'Rendered 2D/3D Floor Plans', desc: 'Clean, dimensionally accurate floor plans rendered with real textures and furnishings for instant spatial comprehension.' },
    { kicker: 'Location', title: 'Area & Connection Maps', desc: 'Custom infographics detailing transport connections, educational institutions, gastronomy, and green spaces in the local vicinity.' },
    { kicker: 'Sales', title: 'Apartment Spec Sheets', desc: 'Individual typology sheets showing exact living areas, terrace exposures, orientation, and dedicated interior renders.' }
  ]
}));

// 05 Real Estate Web
writeFile('en/services/real-estate-web.html', renderEnSubservice({
  filename: 'en/services/real-estate-web.html',
  canonicalSlug: 'real-estate-web',
  esFile: 'web-real-estate',
  deFile: 'projekt-website',
  frFile: 'site-web-immobilier',
  phaseNum: '05',
  phaseName: 'Development Websites',
  heroTitle: 'A website that doesn\'t just display. It drives the launch.',
  heroCopy: 'Custom-coded development websites engineered with bespoke architectural UX, lightning load performance, interactive typology filtering, and direct lead routing.',
  pillars: [
    { kicker: 'UX/UI', title: 'Architectural Experience', desc: 'Generous negative space, sophisticated typography, and full-bleed image displays tailored to discerning buyers.' },
    { kicker: 'Interactivity', title: 'Interactive Unit Navigator', desc: 'Intuitive floor plan browser allowing buyers to filter by bedrooms, floor level, orientation, and price range.' },
    { kicker: 'Performance', title: 'Engineered Speed & SEO', desc: 'Semantic code delivering top-tier Core Web Vitals, instant mobile loading, and international search indexing.' },
    { kicker: 'Conversion', title: 'CRM & Lead Automation', desc: 'Seamless capture routing leads directly to your sales directors and CRM systems with full marketing attribution.' }
  ]
}));

// 06 Acquisition
writeFile('en/services/acquisition.html', renderEnSubservice({
  filename: 'en/services/acquisition.html',
  canonicalSlug: 'acquisition',
  esFile: 'captacion',
  deFile: 'digitale-vermarktung',
  frFile: 'acquisition',
  phaseNum: '06',
  phaseName: 'Launch & Buyer Acquisition',
  heroTitle: 'Once the visuals are ready, the commercial launch begins.',
  heroCopy: 'Targeted Google Search and Meta Ads campaigns designed to connect your development with verified domestic and international property buyers.',
  pillars: [
    { kicker: 'Intent', title: 'Google Search Capture', desc: 'Direct capture of buyers actively querying for new-build developments, penthouses, and luxury villas in your precise geographic area.' },
    { kicker: 'High-Net-Worth', title: 'Meta Precision Targeting', desc: 'Sophisticated audience segmentation on Instagram and Facebook filtering by purchasing power and lifestyle behavior.' },
    { kicker: 'Iteration', title: 'Dynamic Creative Testing', desc: 'Continuous testing of render angles, video hooks, and headline angles to lower acquisition costs while lifting lead quality.' },
    { kicker: 'Rigor', title: 'Lead Qualification & Tracking', desc: 'Granular tracking of phone calls, WhatsApp inquiries, and brochure downloads, with active negative keyword filtering.' }
  ]
}));

// -------------------------------------------------------------
// 7. English Legal Pages
// -------------------------------------------------------------
function renderEnLegal({ title, canonicalSlug, bodyContent }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Eidos Render</title>
  <link rel="canonical" href="https://eidosrender.es/en/${canonicalSlug}">
  <link rel="stylesheet" href="../style.css">
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon.png">
</head>
<body class="bg-paper">
  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo"><span>EIDOS RENDER</span><span class="logo-dot"></span></a>
      <a href="contact.html" class="nav-cta">LET'S DISCUSS THE PROJECT →</a>
    </div>
  </header>
  <main style="padding-top: var(--nav-h);">
    <section class="section bg-paper">
      <div class="container container-narrow">
        <h1 class="display-title" style="margin-bottom: 32px;">${title}</h1>
        <div class="body-regular body-muted" style="line-height: 1.7;">
          ${bodyContent}
        </div>
      </div>
    </section>
  </main>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom">
        <div>© 2026 Eidos Render. All rights reserved.</div>
        <div style="display: flex; gap: 24px;">
          <a href="legal-notice.html">Legal Notice</a>
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="cookie-policy.html">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

writeFile('en/legal-notice.html', renderEnLegal({
  title: 'Legal Notice',
  canonicalSlug: 'legal-notice',
  bodyContent: '<p>In compliance with European information society regulations, this portal is owned and operated by Eidos Render, located in Valencia, Spain. For inquiries or formal communications: info@eidosrender.es.</p><p style="margin-top: 16px;">All content, architectural imagery, typography, and audiovisual assets displayed on this website are protected under international intellectual and industrial property laws.</p>'
}));

writeFile('en/privacy-policy.html', renderEnLegal({
  title: 'Privacy Policy',
  canonicalSlug: 'privacy-policy',
  bodyContent: '<p>In accordance with the EU General Data Protection Regulation (GDPR), Eidos Render processes data provided voluntarily by users exclusively for responding to commercial inquiries regarding architectural visualization and real estate launches.</p><p style="margin-top: 16px;">Your data is never transferred to third parties without explicit authorization. You may exercise your rights of access, rectification, or erasure at info@eidosrender.es.</p>'
}));

writeFile('en/cookie-policy.html', renderEnLegal({
  title: 'Cookie Policy',
  canonicalSlug: 'cookie-policy',
  bodyContent: '<p>This portal utilizes technical and analytical cookies to ensure optimal performance, analyze audience traffic, and enhance browsing experience. You may configure or decline cookies through your browser settings at any time.</p>'
}));

console.log('ALL ENGLISH FILES GENERATED SUCCESSFULLY.');
