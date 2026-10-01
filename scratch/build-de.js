const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function writeFile(relPath, content) {
  const fullPath = path.join(root, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Created DE file:', relPath);
}

// -------------------------------------------------------------
// 1. de/index.html
// -------------------------------------------------------------
const deIndex = `<!DOCTYPE html>
<html lang="de">
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
  
  <title>Eidos Render — Vom Architekturentwurf zum Verkaufsstart</title>
  <meta name="description" content="Eidos Render verwandelt Immobilienprojekte in anspruchsvolle visuelle und kommerzielle Erlebnisse. 3D-Visualisierung, Film, Branding, Verkaufsunterlagen, Projekt-Website und Vermarktung für Bauträger und Projektentwickler.">
  <link rel="canonical" href="https://eidosrender.es/de/">

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
  <meta property="og:title" content="Eidos Render — Vom Architekturentwurf zum Verkaufsstart">
  <meta property="og:description" content="Strategischer Kreativpartner für den erfolgreichen Verkaufsstart von Immobilienprojekten in Europa.">
  <meta property="og:url" content="https://eidosrender.es/de/">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">
  <meta property="og:locale" content="de_DE">

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Eidos Render — Vom Architekturentwurf zum Verkaufsstart">
  <meta name="twitter:description" content="3D-Visualisierung, Film, Branding, Web und digitale Vermarktung für Immobilienentwicklungen.">
  <meta name="twitter:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon.png">
  <link rel="shortcut icon" href="../favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">

  <!-- Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

  <link rel="preload" as="image" href="../img/render-fachada-edificio-obra-nueva-800.webp" fetchpriority="high">
  <link rel="stylesheet" href="../style.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://eidosrender.es/de/#organization",
        "name": "Eidos Render",
        "url": "https://eidosrender.es/de/",
        "logo": "https://eidosrender.es/favicon.png",
        "image": "https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg",
        "description": "Kreativpartner für die ganzheitliche Vermarktung von Immobilienprojekten. 3D-Visualisierung, Film, Markenidentität, Verkaufsunterlagen, Projekt-Website und Lead-Generierung.",
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
          "description": "Ganzheitliche Launch-Systeme für Immobilienprojekte ab 12.000 €"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://eidosrender.es/de/#website",
        "url": "https://eidosrender.es/de/",
        "name": "Eidos Render",
        "publisher": { "@id": "https://eidosrender.es/de/#organization" }
      }
    ]
  }
  </script>
</head>
<body>

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4S8NC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- Header -->
  <header class="nav-header" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo" aria-label="Eidos Render Startseite">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Hauptnavigation">
        <ul class="nav-links">
          <li><a href="#projekte">Projekte</a></li>
          <li><a href="leistungen.html">Leistungen</a></li>
          <li><a href="#prozess">Prozess</a></li>
          <li><a href="#eidos">Über uns</a></li>
          <li><a href="kontakt.html">Kontakt</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Sprachauswahl">
          <a href="../" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../en/" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="de">DE</span>
          <span class="lang-divider">/</span>
          <a href="../fr/" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>

        <a href="#kontakt" class="nav-cta">
          PROJEKT BESPRECHEN →
        </a>
      </div>

      <button class="nav-toggle" aria-label="Menü öffnen" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-nav-overlay" aria-hidden="true">
    <div>
      <div class="mobile-lang-switcher" aria-label="Sprachauswahl">
        <a href="../" data-lang="es" onclick="window.setLang('es')">ES</a>
        <a href="../en/" data-lang="en" onclick="window.setLang('en')">EN</a>
        <span class="active" data-lang="de">DE</span>
        <a href="../fr/" data-lang="fr" onclick="window.setLang('fr')">FR</a>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="#projekte">Projekte</a></li>
        <li><a href="leistungen.html">Leistungen</a></li>
        <li><a href="#prozess">Prozess</a></li>
        <li><a href="#eidos">Über uns</a></li>
        <li><a href="kontakt.html">Kontakt</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Real Estate Launch</div>
      <div>Valencia · Nationaler und europäischer Wirkungskreis</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main>

    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="hero-media">
        <picture>
          <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
          <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Fassaden-Rendering für Wohnungsneubau — Eidos Render" class="hero-poster" fetchpriority="high">
        </picture>
        <video class="hero-video" autoplay muted loop playsinline poster="../img/render-fachada-edificio-obra-nueva.webp">
          <source src="../img/video-reel-patio.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>
      </div>

      <div class="container hero-content">
        <div class="hero-subconcept">
          Visuelle Regie · 3D-Visualisierung · Markenidentität · Verkaufsunterlagen · Projekt-Website · Digitale Vermarktung
        </div>

        <h1 class="hero-title display-hero">
          Vom Architektur-<br>
          entwurf zum<br>
          Verkaufsstart.
        </h1>

        <div class="hero-bottom-grid">
          <p class="hero-desc">
            Bildwelt, Identität, Verkaufsunterlagen, Projekt-Website und gezielte Käuferansprache für Bauträger und Projektentwickler.
          </p>
          <div class="hero-actions">
            <a href="#kontakt" class="btn btn-crimson">
              PROJEKT BESPRECHEN →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- NARRATIVE -->
    <section class="section intro-section bg-paper">
      <div class="container">
        <div class="kicker crimson">
          Ganzheitliche Vision
        </div>

        <div class="intro-grid">
          <h2 class="display-title intro-title">
            Ein Projekt<br>
            braucht<br>
            eine Identität.
          </h2>

          <div class="intro-copy">
            <p>
              Architektur, Branding, 3D-Bilder, Verkaufsbroschüren, Webauftritt und Kampagnen müssen als Teile eines einzigen, fein abgestimmten Systems ineinandergreifen.
            </p>
            <p>
              Bei Eidos Render entwickeln wir dieses System vom ersten Renderentwurf bis zur aktiven Vermarktungsphase.
            </p>
            <div style="margin-top: 36px;">
              <a href="#leistungen" class="link-arrow">
                DAS LAUNCH-SYSTEM ENTDECKEN →
              </a>
            </div>
          </div>
        </div>

        <div class="intro-divider"></div>
      </div>
    </section>

    <!-- POSITIONING -->
    <section class="section bg-paper-card" style="border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: clamp(64px, 10vw, 120px) 0;">
      <div class="container">
        <div class="kicker crimson" style="margin-bottom: 24px;">Positionierung</div>
        <h2 class="display-title" style="font-size: clamp(2.2rem, 5vw, 4.4rem); line-height: 1.05; max-width: 1100px; text-transform: uppercase; letter-spacing: -0.02em;">
          Wir gehen von der Architektur aus.<br>
          Wir schaffen ihre Identität.<br>
          <span style="color: var(--crimson);">Und führen sie in den Markt.</span>
        </h2>
        <p class="body-large body-muted" style="max-width: 720px; margin-top: 32px;">
          Eidos Render ist ein spezialisiertes Kreativ- und Visualisierungsstudio für Immobilienprojekte. Wir begleiten Projektentwickler, Bauträger und Architekten von der visuellen Positionierung bis zur erfolgreichen Vorvermarktung.
        </p>
      </div>
    </section>

    <!-- CAPABILITIES -->
    <section class="section bg-ink" id="leistungen">
      <div class="container">
        <div class="services-header">
          <div>
            <div class="kicker crimson">
              Komplettservice
            </div>
            <h2 class="display-title" style="color: var(--paper);">
              Einheitliche Vision.<br>
              Alle Bausteine aus einer Hand.
            </h2>
          </div>
          <div style="max-width: 440px;" class="body-muted">
            Von der visuellen Regie bis zur direkten Lead-Generierung qualifizierter Immobilienkäufer.
          </div>
        </div>

        <div class="service-accordion">

          <!-- 01 -->
          <div class="service-item active">
            <div class="service-summary">
              <span class="service-num">01</span>
              <h3 class="service-name">Regie & Markenidentität</h3>
              <p class="service-short">Kreativkonzept, Naming, Corporate Identity und visuelles Erscheinungsbild für das Immobilienprojekt.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Wir definieren das Markenuniversum des Projekts vor der ersten 3D-Visualisierung. Naming, Typografie, Farbwelt und Tonalität sichern absolute Durchgängigkeit über alle Verkaufskanäle.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Markenhandbuch für das Projekt</li>
                    <li>Typografische und farbliche Systeme</li>
                    <li>Design für Bautafeln & Showrooms</li>
                    <li>Vorlagen für Vertriebspartner & Makler</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 02 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">02</span>
              <h3 class="service-name">3D-Architekturvisualisierung</h3>
              <p class="service-short">Fassaden, Innenräume, Gemeinschaftsbereiche und fotorealistische 3D-Renders in Galeriequalität.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Unser Fundament: Renders, die Architektur nicht bloß abbilden, sondern Atmosphäre schaffen, Lichtstimmungen einfangen und das Kaufverlangen vor Baubeginn wecken.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Fotorealistische Renders für Großflächen und Print</li>
                    <li>Präzise Drohnen-Fotomontagen im realen Kontext</li>
                    <li>Kalibrierte Lichtführung und Raumtiefe</li>
                    <li>Fokus auf edle Materialien, Holz, Stein und Begrünung</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 03 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">03</span>
              <h3 class="service-name">3D-Film & Animation</h3>
              <p class="service-short">Kinematografische 3D-Videos, virtuelle Rundgänge und dynamische Social-Media-Formate.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Bewegtbild vermittelt echte Dimensionen, macht Raumfolgen erlebbar und steigert das Engagement bei Investorenpräsentationen und digitalen Kampagnen deutlich.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Color Grading & atmosphärisches Sounddesign</li>
                    <li>Optimiert für Meta, YouTube und Messe-Displays</li>
                    <li>Exklusive Vertriebs- und Investorenpräsentationen</li>
                    <li>Vertikale Reels & Kurzclips für Social Media</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 04 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">04</span>
              <h3 class="service-name">Verkaufsunterlagen & Exposés</h3>
              <p class="service-short">Hochwertige Verkaufsexposés, möblierte 2D/3D-Grundrisse, Lagepläne und Typenblätter.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Wir verwandeln technische Pläne in klare, elegante und überzeugende Werkzeuge für Vertriebsteams und anspruchsvolle Endkäufer.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Druckfertige und interaktive digitale Exposés</li>
                    <li>Möblierte, maßstäbliche 2D/3D-Grundrisse</li>
                    <li>Infografiken zu Lage, Infrastruktur und Anbindung</li>
                    <li>Musterunterlagen für den Vertriebspoint</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 05 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">05</span>
              <h3 class="service-name">Projekt-Website</h3>
              <p class="service-short">Architektonisches UX/UI, interaktiver Wohnungsfinder, blitzschnelle Ladezeiten und direkte Lead-Erfassung.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Die digitale Schaltzentrale des Verkaufsstarts. Keine Stangenware, sondern eine individuell programmierte Verkaufsplattform, die Architektur erklärt und qualifizierte Käufer direkt anbindet.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Responsive Design mit exklusiver Typografie</li>
                    <li>Interaktiver Grundriss- und Einheiten-Navigator</li>
                    <li>Hervorragende Core Web Vitals und Spitzen-Performance</li>
                    <li>CRM-Integration & präzise Conversion-Messung</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 06 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">06</span>
              <h3 class="service-name">Digitale Vermarktung</h3>
              <p class="service-short">Google Search Ads, zielgerichtete Meta Ads, kreative Bildtests, Tracking und kontinuierliche Lead-Optimierung.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Sobald Bildmaterial und Website stehen, aktivieren wir die zielgerichtete Ansprache solventer Käufer. Wir optimieren Creatives kontinuierlich auf Basis realer Marktdaten.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Hyper-lokale Zielgruppen nach Kaufkraft & Suchintention</li>
                    <li>Laufendes Testing von Bildwinkeln und Botschaften</li>
                    <li>Transparente Berichte zu qualifizierten Kontakten</li>
                    <li>Kontinuierliche Verbesserung der Anfragerate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style="margin-top: 56px; text-align: center;">
          <a href="#kontakt" class="btn btn-crimson">
            PROJEKT BESPRECHEN →
          </a>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO -->
    <section class="section bg-paper" id="projekte">
      <div class="container">
        <div class="portfolio-header">
          <div>
            <div class="kicker crimson">
              Kuratiertes Archiv
            </div>
            <h2 class="display-title">
              Ausgewählte Projekte.
            </h2>
          </div>
          <div class="body-regular body-muted" style="max-width: 440px;">
            Hochpräzise 3D-Architekturvisualisierung für Wohnanlagen, Villen und Landmark-Immobilien in ganz Europa.
          </div>
        </div>

        <div class="editorial-portfolio">

          <!-- 01 -->
          <article class="project-card span-8">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
                  <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Fassaden-Visualisierung Wohngebäude" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Wohnanlage</h3>
                  <div class="project-services-line">Mehrfamilienhaus · Visuelle Regie · Urbane Integration</div>
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
                  <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="Garten- und Pool-Visualisierung" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Außenbereich & Garten</h3>
                  <div class="project-services-line">3D-Visualisierung · Pools & Gärten · Film</div>
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
                  <img src="../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Moderne Villa mit Pool" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Moderne Villa</h3>
                  <div class="project-services-line">Einfamilienhaus · Terrassen & Pool · Meeresnähe</div>
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
                  <img src="../img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Penthouse mit doppelter Deckenhöhe" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Zweigeschossiges Penthouse</h3>
                  <div class="project-services-line">Innenarchitektur · High-End CGI · Art Direction</div>
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
                  <img src="../img/render-cocina-moderna-isla-madera-1600.jpg" alt="Küche mit Kochinsel" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Küche mit Kochinsel</h3>
                  <div class="project-services-line">Edle Materialien · Holzoberflächen · Warme Beleuchtung</div>
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
                  <img src="../img/infografia-dormitorio-principal-render-inmobiliario-1600.jpg" alt="Master Suite Rendering" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Master Suite</h3>
                  <div class="project-services-line">Ruhevolle Atmosphäre · Textile Texturen · Maßmöbel</div>
                </div>
                <div class="project-meta">Suite</div>
              </div>
            </div>
          </article>

        </div>

        <div style="margin-top: 56px; text-align: center;">
          <a href="projekte.html" class="btn btn-outline-ink">
            ALLE PROJEKTE ANSEHEN →
          </a>
        </div>
      </div>
    </section>

    <!-- 3D SHOWCASE -->
    <section class="section bg-ink" id="visualisierung">
      <div class="container">
        <div class="kicker crimson">
          3D-Visualisierung
        </div>
        
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: flex-end; margin-bottom: 50px;">
          <h2 class="display-title" style="color: var(--paper);">
            Das Bild<br>
            vor dem Bau.
          </h2>
          <div class="body-large" style="color: rgba(244,243,239,0.8);">
            Wir visualisieren Architektur, bevor sie real existiert.<br>
            Bilder, die Entwürfe verständlich machen, Atmosphäre aufbauen und Begeisterung wecken.
          </div>
        </div>

        <div class="image-showcase-grid">
          <div class="image-showcase-item large">
            <picture>
              <source srcset="../img/infografia-3d-salon-moderno-doble-altura.webp" type="image/webp">
              <img src="../img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Innenarchitektur Wohnraum" loading="lazy">
            </picture>
            <div class="image-showcase-caption">
              <span>Innenräume · Lichtstimmung</span>
              <span>Offenes Wohnen</span>
            </div>
          </div>

          <div class="image-showcase-item">
            <picture>
              <source srcset="../img/render-cocina-moderna-isla-madera.webp" type="image/webp">
              <img src="../img/render-cocina-moderna-isla-madera-1600.jpg" alt="Küchendesign" loading="lazy">
            </picture>
            <div class="image-showcase-caption">
              <span>Lifestyle & Küchen</span>
              <span>Natürliche Materialien</span>
            </div>
          </div>

          <div class="image-showcase-item">
            <picture>
              <source srcset="../img/render-bano-moderno-ducha-minimalista.webp" type="image/webp">
              <img src="../img/render-bano-moderno-ducha-minimalista-1600.jpg" alt="Modernes Bad" loading="lazy">
            </picture>
            <div class="image-showcase-caption">
              <span>Details & Ausstattungsqualitäten</span>
              <span>Mikrozement</span>
            </div>
          </div>

          <div class="image-showcase-item large">
            <picture>
              <source srcset="../img/infografia-exterior-zonas-comunes-obra-nueva.webp" type="image/webp">
              <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="Außenanlagen und Pool" loading="lazy">
            </picture>
            <div class="image-showcase-caption">
              <span>Außenbereich · Gemeinschaftsanlagen</span>
              <span>Pool & Garten</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO -->
    <section class="section bg-crimson" id="video">
      <div class="container">
        <div class="kicker paper">
          Film & Bewegung
        </div>

        <div class="video-section-grid">
          <div>
            <h2 class="display-title" style="color: var(--paper); margin-bottom: 28px;">
              Vom statischen Render<br>
              zu einer lebendigen<br>
              Erlebnisreise.
            </h2>
            <p class="body-large" style="color: rgba(244,243,239,0.9); margin-bottom: 32px;">
              Bewegung erschließt Räume, transportiert echte Maßstäbe und verleiht dem Verkaufsprojekt nachhaltige emotionale Durchschlagskraft.
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

    <!-- BRANDING -->
    <section class="section bg-paper" id="branding">
      <div class="container">
        <div class="feature-split">
          <div>
            <div class="kicker crimson">Projektidentität</div>
            <h2 class="display-title" style="margin-bottom: 24px;">
              Ein Immobilienprojekt<br>
              braucht eine<br>
              starke Identität.
            </h2>
            <p class="body-large body-muted" style="margin-bottom: 32px;">
              Ein Immobilien-Branding ist weit mehr als ein Logo. Es ist die strategische Positionierung, die den Quadratmeterpreis rechtfertigt, und die ästhetische Handschrift, die alle Verkaufsmaterialien verbindet.
            </p>
            <a href="kontakt.html" class="link-arrow">
              BRANDING-PROJEKT ANFRAGEN →
            </a>
          </div>

          <div class="feature-cards-grid">
            <div class="feature-card">
              <div class="feature-card-num">01</div>
              <h3 class="feature-card-title">Naming & Konzept</h3>
              <p class="feature-card-copy">Namensfindung mit Identifikationskraft, internationaler Klangqualität und markenrechtlicher Absicherung.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">02</div>
              <h3 class="feature-card-title">Grafisches System</h3>
              <p class="feature-card-copy">Typografie, Farbwelten und Gestaltungsraster, die mit den echten Baumaterialien harmonieren.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">03</div>
              <h3 class="feature-card-title">Visuelle Regie</h3>
              <p class="feature-card-copy">Stilistische Leitlinien für Kameraoptik, Lichtführung und Möblierung über alle 3D-Bilder hinweg.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">04</div>
              <h3 class="feature-card-title">Verkaufsanwendungen</h3>
              <p class="feature-card-copy">Design für Bauzaunplanen, Fahnen, Verkaufscontainer, Wegeleitsysteme und Schlüsselübergabe-Boxen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COLLATERAL -->
    <section class="section bg-ink" id="vermarktung">
      <div class="container">
        <div class="feature-split reverse">
          <div>
            <div class="kicker crimson">Verkaufsunterlagen</div>
            <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
              Vom Bauplan<br>
              zum überzeugenden<br>
              Vertriebswerkzeug.
            </h2>
            <p class="body-large" style="color: rgba(244,243,239,0.8); margin-bottom: 32px;">
              Wir transformieren technische Planunterlagen in intuitive, elegante und verkaufsstarke Broschüren.
            </p>
            <p class="body-regular" style="color: rgba(244,243,239,0.65);">
              Werkzeuge, die Maklern Sicherheit geben und bei institutionellen Investoren wie Privatkäufern Vertrauen schaffen.
            </p>
          </div>

          <div class="feature-cards-grid">
            <div class="feature-card">
              <div class="feature-card-num">A</div>
              <h3 class="feature-card-title">Verkaufsexposés</h3>
              <p class="feature-card-copy">Hochwertige gedruckte und digitale Broschüren mit Baubeschreibung, Ausstattungsstandards und Projektphilosophie.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">B</div>
              <h3 class="feature-card-title">Möblierte Grundrisse</h3>
              <p class="feature-card-copy">Maßstabsgerechte, mit Texturen und Möbeln gestaltete 2D/3D-Grundrisse für sofortige Raumvorstellung.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">C</div>
              <h3 class="feature-card-title">Lage & Infrastruktur</h3>
              <p class="feature-card-copy">Anschauliche Umgebungsgrafiken mit Anbindung an Nahverkehr, Schulen, Parks und Freizeitangebote.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">D</div>
              <h3 class="feature-card-title">Wohnungs-Typenblätter</h3>
              <p class="feature-card-copy">Einzelne Datenblätter je Einheit mit genauen Quadratmetern, Ausrichtung und zugeordneten Renderings.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WEB -->
    <section class="section bg-paper" id="web">
      <div class="container">
        <div class="feature-split">
          <div>
            <div class="kicker crimson">Digitaler Auftritt</div>
            <h2 class="display-title" style="margin-bottom: 24px;">
              Eine Website, die<br>
              nicht nur zeigt.<br>
              Sondern den Verkauf führt.
            </h2>
            <p class="body-large body-muted" style="margin-bottom: 32px;">
              Die Projekt-Website ist der Dreh- und Angelpunkt des Verkaufsstarts. Hier bündelt sich das Marktinteresse, Interessenten informieren sich interaktiv und Anfragen fließen direkt an Ihr Vertriebsteam.
            </p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 14px; margin-bottom: 36px; font-size: 0.95rem;">
              <li><strong>— Architektonisches UX / UI:</strong> Eindrucksvolle Inszenierung ohne störende technische Ladebarrieren.</li>
              <li><strong>— Maßgeschneiderter Code:</strong> Semantischer Aufbau, rasante Ladezeiten und perfekte Mobilansicht.</li>
              <li><strong>— Ausstattung & Unterlagen:</strong> Grundrisse, Baubeschreibung und Exposé-Download auf Knopfdruck.</li>
              <li><strong>— Tracking & CRM-Anbindung:</strong> Messung relevanter Aktionen und sofortige Weiterleitung an den Vertrieb.</li>
            </ul>
            <a href="kontakt.html" class="btn btn-crimson">
              PROJEKT-WEBSITE PLANEN →
            </a>
          </div>

          <div>
            <div style="background-color: var(--ink); color: var(--paper); padding: 48px; border-left: 4px solid var(--crimson);">
              <span class="kicker crimson">Vernetztes System</span>
              <h3 class="display-sub" style="margin-bottom: 20px;">Für erfolgreiche Vorvermarktung gebaut.</h3>
              <p class="body-regular" style="color: rgba(244,243,239,0.75); margin-bottom: 24px;">
                Wir verzichten konsequent auf Standard-Templates. Jede Website wird maßgeschneidert programmiert mit optimierten Core Web Vitals und einer visuellen Nutzerführung, die ernsthafte Kaufinteressenten gezielt leitet.
              </p>
              <div style="border-top: 1px solid var(--line-dark); padding-top: 20px; font-family: 'Space Grotesk', sans-serif; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--signal);">
                Analytics · Meta Pixel · Google Tag · CRM-Schnittstellen
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ACQUISITION -->
    <section class="section bg-ink" id="kampagnen">
      <div class="container">
        <div class="kicker crimson">Gezielte Käufergewinnung</div>

        <div style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 60px; margin-bottom: 60px;">
          <h2 class="display-title" style="color: var(--paper);">
            Sobald die Bilder<br>
            bereitstehen,<br>
            startet der Verkauf.
          </h2>
          <div class="body-large" style="color: rgba(244,243,239,0.8);">
            Wir verzichten auf leere Reichweitenversprechen. Wir steuern die Interessentengewinnung mit präziser Ausrichtung und wöchentlicher Optimierung.
          </div>
        </div>

        <div class="feature-cards-grid">
          <div class="feature-card">
            <div class="feature-card-num">01</div>
            <h3 class="feature-card-title">Google Suchanzeigen</h3>
            <p class="feature-card-copy">Direkte Erfassung von Suchenden, die aktiv nach Neubauwohnungen, Penthouses oder Häusern im exakten Einzugsgebiet recherchieren.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-num">02</div>
            <h3 class="feature-card-title">Meta Ads</h3>
            <p class="feature-card-copy">Zielgerichtete Kampagnen auf Instagram und Facebook, segmentiert nach Kaufkraft, Vermögensstatus und Wohninteressen.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-num">03</div>
            <h3 class="feature-card-title">Dynamische Werbemittel</h3>
            <p class="feature-card-copy">Laufende Anpassung von Render-Ausschnitten, Kurzvideos und Story-Formaten nach tatsächlichen Reaktionsdaten.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-num">04</div>
            <h3 class="feature-card-title">Tracking & Lead-Qualität</h3>
            <p class="feature-card-copy">Genaue Erfassung von Anrufen und Exposé-Downloads mit konsequentem Ausschluss minderwertiger Kontakte.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="section bg-paper" id="prozess">
      <div class="container">
        <div class="kicker crimson">Strukturierte Methodik</div>
        <h2 class="display-title" style="margin-bottom: 24px;">
          Vom Entwurf<br>
          zum Verkaufsstart.
        </h2>
        <p class="body-large body-muted" style="max-width: 720px; margin-bottom: 56px;">
          Eine zentrale visuelle Regie steuert jede Phase von den ersten CAD-Plänen bis zur Marktplatzierung.
        </p>

        <div class="process-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
          <div class="process-card">
            <div class="process-card-num">01</div>
            <h3 class="process-card-title">Regie & Identität</h3>
            <p class="process-card-desc">Konzept, visuelle Positionierung, Naming und maßgeschneidertes Corporate Design.</p>
          </div>
          <div class="process-card">
            <div class="process-card-num">02</div>
            <h3 class="process-card-title">3D-Bild & Film</h3>
            <p class="process-card-desc">Fotorealistische 3D-Bilder der Architektur, prägende Innenräume und kinematografischer Film.</p>
          </div>
          <div class="process-card">
            <div class="process-card-num">03</div>
            <h3 class="process-card-title">Verkaufsunterlagen</h3>
            <p class="process-card-desc">Verkaufsexposé, möblierte 2D/3D-Grundrisse und übersichtliche Typenblätter für Makler.</p>
          </div>
          <div class="process-card">
            <div class="process-card-num">04</div>
            <h3 class="process-card-title">Projekt-Website</h3>
            <p class="process-card-desc">Maßgeschneiderte Verkaufs-Website mit Wohnungsfinder und direkter Anfragenweiterleitung.</p>
          </div>
          <div class="process-card">
            <div class="process-card-num">05</div>
            <h3 class="process-card-title">Verkaufsstart & Ads</h3>
            <p class="process-card-desc">Koordinierte Kampagnenaktivierung auf Google und Meta zur Gewinnung solventer Interessenten.</p>
          </div>
        </div>

        <div style="margin-top: 56px; text-align: center;">
          <a href="#kontakt" class="btn btn-crimson">
            VERKAUFSSTART PLANEN →
          </a>
        </div>
      </div>
    </section>

    <!-- SCALE -->
    <section class="section bg-paper" id="dimension">
      <div class="container">
        <div class="kicker crimson">Projektgröße</div>
        <h2 class="display-title" style="margin-bottom: 24px;">
          Jedes Projekt hat<br>
          seine eigene Dimension.
        </h2>

        <div class="scale-box">
          <p class="body-large" style="margin-bottom: 20px;">
            Die Vermarktung eines exklusiven Boutique-Wohnhauses mit 20 Einheiten verlangt eine andere Schwerpunktsetzung als das visuelle Gesamtkonzept eines Großquartiers mit vielfältigen Haustypen und Freizeitbereichen.
          </p>
          <p class="body-regular body-muted">
            Der Leistungsumfang wird exakt an Einheitenanzahl, architektonische Komplexität, Bildvolumen, Videoanforderungen, Website und gewünschten Verkaufsstart angepasst.
          </p>

          <div class="scale-comparison-grid">
            <div>
              <h4 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; text-transform: uppercase; margin-bottom: 12px; color: var(--crimson);">
                Klassischer Wohnungsbau
              </h4>
              <p class="body-regular body-muted">
                15 bis 40 Einheiten. Hauptfassade, Gemeinschaftsbereiche, repräsentative Musterräume, digitales Exposé und Landingpage.
              </p>
            </div>
            <div>
              <h4 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; text-transform: uppercase; margin-bottom: 12px; color: var(--ink);">
                Quartiere & Hospitality
              </h4>
              <p class="body-regular body-muted">
                Mehrphasige Areale oder Serviced Living. Masterplan-Übersichten, filmische Rundgänge, vielfältige Grundrisstypen und Omnichannel-Start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INVESTMENT -->
    <section class="section bg-ink" id="investition" style="color: var(--paper);">
      <div class="container">
        <div style="padding-bottom: 64px; border-bottom: 1px solid var(--line-dark);">
          <div class="kicker crimson">Investitionsrahmen</div>
          <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
            Ganzheitliche Projekte.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.8rem, 6vw, 4.8rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.03em; margin-bottom: 16px;">
            AB 12.000 € <span style="font-size: clamp(1.2rem, 2vw, 1.8rem); font-weight: 500; color: var(--signal);">zzgl. MwSt.</span>
          </div>
          <p class="body-large" style="color: rgba(244,243,239,0.75); max-width: 680px;">
            Orientierungswert für Neubauprojekte, die eine koordinierte Regie und Umsetzung über 3D, Branding, Unterlagen und Web erfordern. Verbindliches Angebot nach Planprüfung.
          </p>
        </div>

        <div style="padding-top: 64px;">
          <div class="kicker crimson">Laufende Vertriebsbetreuung</div>
          <h2 class="display-sub" style="color: var(--paper); margin-bottom: 16px;">
            Der Launch endet nicht mit dem Livegang der Website.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.02em; margin-bottom: 16px;">
            AB 600 €/MONAT <span style="font-size: clamp(1.1rem, 1.8vw, 1.5rem); font-weight: 500; color: var(--signal);">zzgl. MwSt.</span>
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.75); max-width: 680px; margin-bottom: 20px;">
            Werbebudget separat. Kontinuierliche Kampagnenführung, regelmäßige Aktualisierung der 3D-Werbemittel und laufende Optimierung der Interessentenzulaufes.
          </p>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--signal);">
            Google Ads · Meta Ads · Conversion-Optimierung · Wöchentliches Reporting
          </div>
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="section bg-ink" style="border-top: 1px solid var(--line-dark);" id="zeitplan">
      <div class="container">
        <div class="kicker crimson">Zeitplanung</div>
        <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
          Ein Verkaufsstart wird<br>
          rückwärts geplant.
        </h2>
        
        <p class="body-large" style="color: rgba(244,243,239,0.85); max-width: 720px; margin-bottom: 16px;">
          Ein Komplettprojekt wird bei parallelen Arbeitssträngen typischerweise in ca. <strong>6–10 Wochen</strong> realisiert.
        </p>
        <p class="body-regular" style="color: var(--signal); max-width: 700px;">
          Ihr geplanter Vertriebsstart ist der entscheidende Fixpunkt für unsere Kapazitäts- und Produktionsplanung.
        </p>

        <div class="timeline-bars">
          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">01 Regie & Identität</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 25%; left: 0%;"></div>
            </div>
            <div class="timeline-duration">1–2 Wochen</div>
          </div>

          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">02 3D-Bilder & Film</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 50%; left: 15%;"></div>
            </div>
            <div class="timeline-duration">2–4 Wochen</div>
          </div>

          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">03 Verkaufsunterlagen</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 30%; left: 45%;"></div>
            </div>
            <div class="timeline-duration">1–2 Wochen</div>
          </div>

          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">04 Projekt-Website</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 55%; left: 40%;"></div>
            </div>
            <div class="timeline-duration">3–5 Wochen</div>
          </div>

          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">05 Kampagnenstart</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 20%; left: 80%;"></div>
            </div>
            <div class="timeline-duration">1 Woche</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="section bg-paper" id="eidos">
      <div class="container">
        <div class="kicker crimson">Über das Studio</div>
        <div style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 70px; align-items: flex-start; margin-bottom: 64px;">
          <div>
            <h2 class="display-title" style="margin-bottom: 24px;">
              Eidos Render
            </h2>
            <div class="body-large" style="color: var(--crimson); font-weight: 600; line-height: 1.45;">
              Architekturvisualisierung, visuelle Regie und digitale Verkaufsinstrumente für anspruchsvolle Immobilienentwicklungen.
            </div>
          </div>

          <div class="body-large body-muted">
            <p style="margin-bottom: 20px;">
              Wir gehen von der Architektur aus. Wir schaffen ihre Identität. Und führen sie in den Markt.
            </p>
            <p style="font-size: 1rem; line-height: 1.6; color: var(--ink);">
              Wir arbeiten mit Bauträgern, Projektentwicklern und Architekturbüros in Deutschland, Österreich, der Schweiz, Spanien und ganz Europa. Wir verbinden architektonische Konstruktionstreue mit feinem Gespür für Ästhetik und Verkaufspsychologie.
            </p>
            <div style="margin-top: 28px; display: flex; gap: 32px; font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; text-transform: uppercase;">
              <div><strong>Sitz:</strong> Valencia, Spanien</div>
              <div><strong>Reichweite:</strong> DACH & Europaweit</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="section bg-paper" style="border-top: 1px solid var(--line); padding: clamp(80px, 12vw, 160px) 0;" id="kontakt">
      <div class="container">
        <div style="max-width: 1040px;">
          <div class="kicker crimson" style="margin-bottom: 24px;">Ein Projekt · Eine Identität · Ein Erlebnis · Ein erfolgreicher Launch</div>
          
          <h2 class="display-title" style="margin-bottom: 32px; font-size: clamp(2.8rem, 6.5vw, 6.2rem); line-height: 0.94;">
            VOM PROJEKT<br>
            ZUM VERKAUFSSTART.<br>
            <span style="color: var(--crimson);">SPRECHEN WIR DARÜBER.</span>
          </h2>
          
          <p class="body-large body-muted" style="max-width: 720px; font-size: clamp(1.2rem, 2.2vw, 1.55rem); line-height: 1.45; margin-bottom: 48px;">
            Wenn Sie ein Bauprojekt vorbereiten und dessen Erscheinungsbild, Vermarktungsunterlagen und Verkaufsstart definieren möchten, stellen Sie uns Ihr Vorhaben vor.
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; margin-bottom: 60px;">
            <a href="mailto:info@eidosrender.es?subject=Anfrage%20Immobilienprojekt" class="btn btn-crimson" style="padding: 20px 38px; font-size: 1rem;">
              PROJEKT BESPRECHEN →
            </a>
          </div>

          <div style="padding-top: 48px; border-top: 1px solid var(--line); display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 36px; align-items: start;">
            <div>
              <div style="font-family: 'Space Grotesk', sans-serif; font-size: 1.15rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 6px; text-transform: uppercase;">
                EIDOS RENDER
              </div>
              <div style="font-family: 'Archivo', sans-serif; font-size: 0.88rem; color: var(--signal); line-height: 1.5;">
                Bild · Identität · Vertrieb · Web · Kampagnen
              </div>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Direkte E-Mail</span>
              <a href="mailto:info@eidosrender.es" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--ink); text-decoration: none; border-bottom: 2px solid var(--crimson); padding-bottom: 2px;">
                info@eidosrender.es
              </a>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Telefon</span>
              <a href="tel:+34614459144" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; color: var(--ink); text-decoration: none;">
                +34 614 45 91 44
              </a>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Studio</span>
              <span style="font-family: 'Archivo', sans-serif; font-size: 0.95rem; color: var(--ink); line-height: 1.5;">
                Valencia, Spanien<br>
                <span style="color: var(--signal); font-size: 0.85rem;">DACH & Europaweiter Service</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">

        <div>
          <div class="footer-brand" style="margin-bottom: 14px;">EIDOS RENDER</div>
          <p style="font-size: 0.88rem; color: rgba(244,243,239,0.7); max-width: 320px; line-height: 1.6; margin-bottom: 20px;">
            Kreativpartner für die ganzheitliche Vermarktung von Immobilienprojekten in ganz Europa.
          </p>
          <div style="font-size: 0.82rem; color: var(--signal);">
            Bild · Identität · Vertrieb · Web · Kampagnen
          </div>
        </div>

        <div>
          <div class="footer-col-title">Navigation</div>
          <ul class="footer-links">
            <li><a href="#projekte">Projekte</a></li>
            <li><a href="leistungen.html">Leistungen</a></li>
            <li><a href="#prozess">Prozess</a></li>
            <li><a href="#dimension">Projektgrößen</a></li>
            <li><a href="#eidos">Über uns</a></li>
            <li><a href="kontakt.html">Kontakt</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Leistungen</div>
          <ul class="footer-links">
            <li><a href="leistungen/branding.html">Regie & Markenidentität</a></li>
            <li><a href="leistungen/3d-rendering.html">3D-Architekturvisualisierung</a></li>
            <li><a href="leistungen/3d-video.html">3D-Film & Animation</a></li>
            <li><a href="leistungen/vermarktungsunterlagen.html">Verkaufsunterlagen</a></li>
            <li><a href="leistungen/projekt-website.html">Projekt-Website</a></li>
            <li><a href="leistungen/digitale-vermarktung.html">Digitale Vermarktung</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Kontakt</div>
          <ul class="footer-links">
            <li><a href="mailto:info@eidosrender.es">info@eidosrender.es</a></li>
            <li><a href="tel:+34614459144">+34 614 45 91 44</a></li>
            <li>Valencia, Spanien</li>
            <li style="margin-top: 14px;">
              <a href="https://www.linkedin.com/company/eidos-render" target="_blank" rel="noopener" style="color: var(--crimson); font-weight: 600;">
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <div>© 2026 Eidos Render. Alle Rechte vorbehalten.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../" onclick="window.setLang('es')">ES</a> ·
            <a href="../en/" onclick="window.setLang('en')">EN</a> ·
            <span style="color: var(--crimson); font-weight: 700;">DE</span> ·
            <a href="../fr/" onclick="window.setLang('fr')">FR</a>
          </div>
          <a href="impressum.html">Impressum</a>
          <a href="datenschutz.html">Datenschutz</a>
          <a href="cookies.html">Cookies</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('de/index.html', deIndex);

// -------------------------------------------------------------
// 2. de/leistungen.html
// -------------------------------------------------------------
const deLeistungen = `<!DOCTYPE html>
<html lang="de">
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
  
  <title>Leistungen — Eidos Render | Einheitliche Vision. Alle Bausteine.</title>
  <meta name="description" content="Ganzheitliche Vermarktungsservices für Immobilienprojekte: Regie & Identität, 3D-Bilder, Film, Verkaufsunterlagen, Projekt-Website und gezielte Käuferakquise.">
  <link rel="canonical" href="https://eidosrender.es/de/leistungen">

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
  <meta property="og:title" content="Leistungen — Eidos Render | Einheitliche Vision. Alle Bausteine.">
  <meta property="og:description" content="Ganzheitliche Vermarktungsservices für Immobilienprojekte in ganz Europa.">
  <meta property="og:url" content="https://eidosrender.es/de/leistungen">
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

  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo" aria-label="Eidos Render Startseite">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Hauptnavigation">
        <ul class="nav-links">
          <li><a href="projekte.html">Projekte</a></li>
          <li><a href="leistungen.html" class="active">Leistungen</a></li>
          <li><a href="./#prozess">Prozess</a></li>
          <li><a href="./#eidos">Über uns</a></li>
          <li><a href="kontakt.html">Kontakt</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Sprachauswahl">
          <a href="../servicios.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../en/services.html" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="de">DE</span>
          <span class="lang-divider">/</span>
          <a href="../fr/services.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>

        <a href="kontakt.html" class="nav-cta">
          PROJEKT BESPRECHEN →
        </a>
      </div>

      <button class="nav-toggle" aria-label="Menü öffnen" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-nav-overlay" aria-hidden="true">
    <div>
      <div class="mobile-lang-switcher" aria-label="Sprachauswahl">
        <a href="../servicios.html" data-lang="es" onclick="window.setLang('es')">ES</a>
        <a href="../en/services.html" data-lang="en" onclick="window.setLang('en')">EN</a>
        <span class="active" data-lang="de">DE</span>
        <a href="../fr/services.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="projekte.html">Projekte</a></li>
        <li><a href="leistungen.html" class="active">Leistungen</a></li>
        <li><a href="./#prozess">Prozess</a></li>
        <li><a href="./#eidos">Über uns</a></li>
        <li><a href="kontakt.html">Kontakt</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Real Estate Launch</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main style="padding-top: var(--nav-h);">

    <section class="section-sm bg-paper" style="border-bottom: 1px solid var(--line);">
      <div class="container">
        <div class="kicker crimson">Leistungskatalog</div>
        <h1 class="display-title" style="margin-bottom: 24px;">
          Einheitliche Vision.<br>Alle Bausteine.
        </h1>
        <p class="body-large body-muted" style="max-width: 760px;">
          Wir entwickeln das gesamte visuelle und kommerzielle System, das ein Immobilienprojekt benötigt, um sich abzuheben und erfolgreich vermarktet zu werden. Unser Engagement richtet sich modular nach dem exakten Bedarf Ihres Vorhabens.
        </p>
      </div>
    </section>

    <!-- FASES DETALLADAS -->
    <section class="section bg-paper">
      <div class="container">

        <!-- 01 -->
        <article class="service-block-row" id="regie" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">01</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Regie & Identität</h2>
            <div style="margin-bottom: 16px;">
              <a href="leistungen/branding.html" class="link-arrow" style="font-size: 0.75rem;">ZUR DETAILSEITE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Unsere Aufgabe</span>
              <p class="body-regular body-muted">
                Wir definieren Kreativkonzept, Naming und Tonalität vor Beginn jeder bildlichen Umsetzung.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Ergebnis</span>
              <p class="body-regular body-muted">
                Markenhandbuch, Corporate Design, Farb- und Schriftenwelten sowie Vorgaben für Bautafeln und Showrooms.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Marktwert</span>
              <p class="body-regular body-muted">
                Schafft eine Projektmarke, die den Quadratmeterpreis fundiert und visuelle Konsistenz über alle Kanäle sichert.
              </p>
            </div>
          </div>
        </article>

        <!-- 02 -->
        <article class="service-block-row" id="visualisierung" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">02</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">3D-Architekturvisualisierung</h2>
            <div style="margin-bottom: 16px;">
              <a href="leistungen/3d-rendering.html" class="link-arrow" style="font-size: 0.75rem;">ZUR DETAILSEITE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Unsere Aufgabe</span>
              <p class="body-regular body-muted">
                Fotorealistische 3D-Bilder für Außenarchitektur, Gartenanlagen, Innenräume und exklusive Wohnwelten.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Ergebnis</span>
              <p class="body-regular body-muted">
                High-Resolution-Renderings für Großflächen-Bautafeln, digitale Kampagnen und hochkarätigen Magazindruck.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Marktwert</span>
              <p class="body-regular body-muted">
                Macht ungebautes Wohnen greifbar und weckt bei Kaufinteressenten emotionale Bindung vor dem Spatenstich.
              </p>
            </div>
          </div>
        </article>

        <!-- 03 -->
        <article class="service-block-row" id="film" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">03</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">3D-Film & Animation</h2>
            <div style="margin-bottom: 16px;">
              <a href="leistungen/3d-video.html" class="link-arrow" style="font-size: 0.75rem;">ZUR DETAILSEITE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Unsere Aufgabe</span>
              <p class="body-regular body-muted">
                Filmische Kamerafahrten, Raumdurchgänge und animierte Sequenzen für soziale Medien und Sales Lounges.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Ergebnis</span>
              <p class="body-regular body-muted">
                Fertig geschnittene 4K-Filme mit professionellem Color Grading und Sounddesign für alle Bildschirmformate.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Marktwert</span>
              <p class="body-regular body-muted">
                Steigert die Verweildauer von Investoren und erzeugt maximale Aufmerksamkeit in bezahlten Werbekampagnen.
              </p>
            </div>
          </div>
        </article>

        <!-- 04 -->
        <article class="service-block-row" id="unterlagen" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">04</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Verkaufsunterlagen</h2>
            <div style="margin-bottom: 16px;">
              <a href="leistungen/vermarktungsunterlagen.html" class="link-arrow" style="font-size: 0.75rem;">ZUR DETAILSEITE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Unsere Aufgabe</span>
              <p class="body-regular body-muted">
                Redaktionelle Exposés, möblierte Grundrisse, Lagepläne und Typenblätter für die Maklerorganisation.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Ergebnis</span>
              <p class="body-regular body-muted">
                Druckfertige Layouts und interaktive PDF-Exposés mit detaillierten Ausstattungsstandards und Grundrissdaten.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Marktwert</span>
              <p class="body-regular body-muted">
                Rüstet den Vertrieb mit verlässlichen Verkaufsunterlagen aus, die Professionalität und Solidität ausstrahlen.
              </p>
            </div>
          </div>
        </article>

        <!-- 05 -->
        <article class="service-block-row" id="website" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">05</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Projekt-Website</h2>
            <div style="margin-bottom: 16px;">
              <a href="leistungen/projekt-website.html" class="link-arrow" style="font-size: 0.75rem;">ZUR DETAILSEITE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Unsere Aufgabe</span>
              <p class="body-regular body-muted">
                Individuelle Entwickler-Websites mit interaktiver Wohnungsübersicht, Höchstgeschwindigkeit und Lead-Erfassung.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Ergebnis</span>
              <p class="body-regular body-muted">
                Maßgeschneiderte, datenschutzkonforme Verkaufsplattform mit CRM-Anbindung und lückenlosem Conversion-Tracking.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Marktwert</span>
              <p class="body-regular body-muted">
                Konvertiert Werbetraffic direkt in vorqualifizierte Kaufanfragen für Ihr internes oder externes Vertriebsteam.
              </p>
            </div>
          </div>
        </article>

        <!-- 06 -->
        <article class="service-block-row" id="vermarktung" style="padding: 70px 0; display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">06</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Digitale Vermarktung</h2>
            <div style="margin-bottom: 16px;">
              <a href="leistungen/digitale-vermarktung.html" class="link-arrow" style="font-size: 0.75rem;">ZUR DETAILSEITE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Unsere Aufgabe</span>
              <p class="body-regular body-muted">
                Targeting-Kampagnen auf Google und Meta mit kontinuierlichem A/B-Testing relevanter 3D-Bilder und Ansprachen.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Ergebnis</span>
              <p class="body-regular body-muted">
                Kampagnenaufbau, wöchentliche Feinabstimmung der Anzeigen und transparente Berichte über qualifizierte Kontakte.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Marktwert</span>
              <p class="body-regular body-muted">
                Generiert kontinuierlichen Fluss ernster Kaufinteressenten ab Tag eins der offiziellen Vermarktungsphase.
              </p>
            </div>
          </div>
        </article>

      </div>
    </section>

    <!-- Bottom Callout -->
    <section class="section-sm bg-ink" style="color: var(--paper);">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 32px;">
        <div>
          <h3 class="display-sub" style="color: var(--paper); margin-bottom: 8px;">Planen Sie ein konkretes Neubauvorhaben?</h3>
          <p class="body-regular" style="color: rgba(244,243,239,0.7); max-width: 580px;">
            Wir analysieren Ihre Pläne und schlagen den passgenauen visuellen und vertrieblichen Leistungsumfang vor.
          </p>
        </div>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <a href="kontakt.html" class="btn btn-crimson">
            PROJEKT BESPRECHEN →
          </a>
        </div>
      </div>
    </section>

  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-bottom">
        <div>© 2026 Eidos Render. Leistungen.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../servicios.html" onclick="window.setLang('es')">ES</a> ·
            <a href="../en/services.html" onclick="window.setLang('en')">EN</a> ·
            <span style="color: var(--crimson); font-weight: 700;">DE</span> ·
            <a href="../fr/services.html" onclick="window.setLang('fr')">FR</a>
          </div>
          <a href="projekte.html">Projekte</a>
          <a href="kontakt.html">Kontakt</a>
          <a href="impressum.html">Impressum</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('de/leistungen.html', deLeistungen);
writeFile('de/leistungen/index.html', deLeistungen.replace(/\.\.\//g, '../../').replace(/href="leistungen\//g, 'href="').replace(/href="\.\/"/g, 'href="../"'));

// -------------------------------------------------------------
// 3. de/projekte.html
// -------------------------------------------------------------
const deProjekte = `<!DOCTYPE html>
<html lang="de">
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
  
  <title>Projekte & Referenzen — Eidos Render</title>
  <meta name="description" content="Portfolio architektonischer 3D-Visualisierung, Animation und Vermarktungsmaterialien für anspruchsvolle Neubauprojekte in ganz Europa.">
  <link rel="canonical" href="https://eidosrender.es/de/projekte">

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
  <meta property="og:title" content="Projekte & Referenzen — Eidos Render">
  <meta property="og:description" content="Portfolio anspruchsvoller 3D-Architekturvisualisierung und Immobilienprojekte.">
  <meta property="og:url" content="https://eidosrender.es/de/projekte">
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

  <!-- Header -->
  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo" aria-label="Eidos Render Startseite">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Hauptnavigation">
        <ul class="nav-links">
          <li><a href="projekte.html" class="active">Projekte</a></li>
          <li><a href="leistungen.html">Leistungen</a></li>
          <li><a href="./#prozess">Prozess</a></li>
          <li><a href="./#eidos">Über uns</a></li>
          <li><a href="kontakt.html">Kontakt</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Sprachauswahl">
          <a href="../proyectos.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../en/projects.html" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="de">DE</span>
          <span class="lang-divider">/</span>
          <a href="../fr/projets.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>

        <a href="kontakt.html" class="nav-cta">
          PROJEKT BESPRECHEN →
        </a>
      </div>

      <button class="nav-toggle" aria-label="Menü öffnen" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-nav-overlay" aria-hidden="true">
    <div>
      <div class="mobile-lang-switcher" aria-label="Sprachauswahl">
        <a href="../proyectos.html" data-lang="es" onclick="window.setLang('es')">ES</a>
        <a href="../en/projects.html" data-lang="en" onclick="window.setLang('en')">EN</a>
        <span class="active" data-lang="de">DE</span>
        <a href="../fr/projets.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="projekte.html" class="active">Projekte</a></li>
        <li><a href="leistungen.html">Leistungen</a></li>
        <li><a href="./#prozess">Prozess</a></li>
        <li><a href="./#eidos">Über uns</a></li>
        <li><a href="kontakt.html">Kontakt</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Real Estate Launch</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main style="padding-top: var(--nav-h);">

    <section class="section-sm bg-paper" style="border-bottom: 1px solid var(--line);">
      <div class="container">
        <div class="kicker crimson">Projektarchiv</div>
        <h1 class="display-title" style="margin-bottom: 24px;">
          Ausgewählte Projekte.
        </h1>
        <p class="body-large body-muted" style="max-width: 760px;">
          Präzise 3D-Visualisierung, visuelle Regie und kommerzielle Vermarktungswerkzeuge für anspruchsvolle Wohnbauten und Quartiersentwicklungen.
        </p>
      </div>
    </section>

    <!-- ARCHIVE GRID -->
    <section class="section bg-paper">
      <div class="container">
        <div class="editorial-portfolio">

          <!-- 01 -->
          <article class="project-card span-8">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
                  <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Fassaden-Rendering Wohnanlage" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Wohnanlage</h3>
                  <div class="project-services-line">Mehrfamilienhaus · Visuelle Regie · Urbane Integration</div>
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
                  <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="Außenanlagen und Pool" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Außenbereich & Garten</h3>
                  <div class="project-services-line">3D-Visualisierung · Pools & Gärten · Film</div>
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
                  <img src="../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Moderne Villa mit Pool" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Moderne Villa</h3>
                  <div class="project-services-line">Einfamilienhaus · Terrassen & Pool · Meeresnähe</div>
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
                  <img src="../img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Penthouse mit doppelter Deckenhöhe" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Zweigeschossiges Penthouse</h3>
                  <div class="project-services-line">Innenarchitektur · High-End CGI · Art Direction</div>
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
                  <img src="../img/render-cocina-moderna-isla-madera-1600.jpg" alt="Küche mit Kochinsel" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Küche mit Kochinsel</h3>
                  <div class="project-services-line">Edle Materialien · Holzoberflächen · Warme Beleuchtung</div>
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
                  <img src="../img/infografia-dormitorio-principal-render-inmobiliario-1600.jpg" alt="Master Suite Rendering" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Master Suite</h3>
                  <div class="project-services-line">Ruhevolle Atmosphäre · Textile Texturen · Maßmöbel</div>
                </div>
                <div class="project-meta">Suite</div>
              </div>
            </div>
          </article>

        </div>

        <div style="margin-top: 80px; text-align: center; border-top: 1px solid var(--line); padding-top: 60px;">
          <h2 class="display-title" style="margin-bottom: 20px;">Lassen Sie uns über Ihr Vorhaben sprechen.</h2>
          <p class="body-large body-muted" style="max-width: 600px; margin: 0 auto 32px;">
            Wir strukturieren jede Zusammenarbeit passgenau zu Ihren Vertriebszielen und Meilensteinen.
          </p>
          <a href="kontakt.html" class="btn btn-crimson">
            PROJEKT VORSTELLEN →
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
            <a href="../en/projects.html" onclick="window.setLang('en')">EN</a> ·
            <span style="color: var(--crimson); font-weight: 700;">DE</span> ·
            <a href="../fr/projets.html" onclick="window.setLang('fr')">FR</a>
          </div>
          <a href="leistungen.html">Leistungen</a>
          <a href="kontakt.html">Kontakt</a>
          <a href="impressum.html">Impressum</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('de/projekte.html', deProjekte);
writeFile('de/projekte/index.html', deProjekte.replace(/\.\.\//g, '../../').replace(/href="projekte\.html"/g, 'href="./"').replace(/href="leistungen\.html"/g, 'href="../leistungen.html"').replace(/href="kontakt\.html"/g, 'href="../kontakt.html"').replace(/href="\.\/"/g, 'href="../"'));

// -------------------------------------------------------------
// 4. de/kontakt.html
// -------------------------------------------------------------
const deKontakt = `<!DOCTYPE html>
<html lang="de">
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
  
  <title>Kontakt — Eidos Render | Vom Projekt zum Verkaufsstart</title>
  <meta name="description" content="Stellen Sie uns Ihr Immobilienprojekt vor. Wir kalkulieren 3D-Bilder, Film, Identität, Verkaufsunterlagen, Website und Vermarktung.">
  <link rel="canonical" href="https://eidosrender.es/de/kontakt">

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
  <meta property="og:title" content="Kontakt — Eidos Render | Vom Projekt zum Verkaufsstart">
  <meta property="og:description" content="Stellen Sie uns Ihr Immobilienprojekt vor. Wir planen die visuelle Produktion und den Vertriebsstart.">
  <meta property="og:url" content="https://eidosrender.es/de/kontakt">
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

  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo" aria-label="Eidos Render Startseite">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Hauptnavigation">
        <ul class="nav-links">
          <li><a href="projekte.html">Projekte</a></li>
          <li><a href="leistungen.html">Leistungen</a></li>
          <li><a href="./#prozess">Prozess</a></li>
          <li><a href="./#eidos">Über uns</a></li>
          <li><a href="kontakt.html" class="active">Kontakt</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Sprachauswahl">
          <a href="../contacto.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../en/contact.html" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="de">DE</span>
          <span class="lang-divider">/</span>
          <a href="../fr/contact.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>

        <a href="kontakt.html" class="nav-cta">
          PROJEKT BESPRECHEN →
        </a>
      </div>

      <button class="nav-toggle" aria-label="Menü öffnen" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-nav-overlay" aria-hidden="true">
    <div>
      <div class="mobile-lang-switcher" aria-label="Sprachauswahl">
        <a href="../contacto.html" data-lang="es" onclick="window.setLang('es')">ES</a>
        <a href="../en/contact.html" data-lang="en" onclick="window.setLang('en')">EN</a>
        <span class="active" data-lang="de">DE</span>
        <a href="../fr/contact.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="projekte.html">Projekte</a></li>
        <li><a href="leistungen.html">Leistungen</a></li>
        <li><a href="./#prozess">Prozess</a></li>
        <li><a href="./#eidos">Über uns</a></li>
        <li><a href="kontakt.html" class="active">Kontakt</a></li>
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
          <div class="kicker crimson" style="margin-bottom: 24px;">Direkter Kontakt</div>
          
          <h1 class="display-title" style="margin-bottom: 32px; font-size: clamp(2.8rem, 6.5vw, 6.2rem); line-height: 0.94;">
            VOM PROJEKT<br>
            ZUM VERKAUFSSTART.<br>
            <span style="color: var(--crimson);">SPRECHEN WIR DARÜBER.</span>
          </h1>
          
          <p class="body-large body-muted" style="max-width: 720px; font-size: clamp(1.2rem, 2.2vw, 1.55rem); line-height: 1.45; margin-bottom: 48px;">
            Wenn Sie ein Bauvorhaben vorbereiten und dessen Erscheinungsbild, Vermarktungsunterlagen und Verkaufsstart definieren möchten, stellen Sie uns Ihr Vorhaben vor.
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; margin-bottom: 64px;">
            <a href="mailto:info@eidosrender.es?subject=Anfrage%20Immobilienprojekt" class="btn btn-crimson" style="padding: 20px 38px; font-size: 1rem;">
              PROJEKT BESPRECHEN →
            </a>
            <a href="mailto:info@eidosrender.es?subject=Projektvorstellung" class="btn btn-outline-ink" style="padding: 20px 38px; font-size: 1rem;">
              PLÄNE ÜBERMITTELN →
            </a>
          </div>

          <div style="padding-top: 48px; border-top: 1px solid var(--line); display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 40px; align-items: start;">
            
            <div>
              <div style="font-family: 'Space Grotesk', sans-serif; font-size: 1.15rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 8px; text-transform: uppercase;">
                EIDOS RENDER
              </div>
              <div style="font-family: 'Archivo', sans-serif; font-size: 0.9rem; color: var(--signal); line-height: 1.5;">
                Bild · Identität · Vertrieb · Web · Kampagnen
              </div>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 8px; display: block;">Direkte E-Mail</span>
              <a href="mailto:info@eidosrender.es" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--ink); text-decoration: none; border-bottom: 2px solid var(--crimson); padding-bottom: 2px;">
                info@eidosrender.es
              </a>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 8px; display: block;">Telefon</span>
              <a href="tel:+34614459144" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; color: var(--ink); text-decoration: none;">
                +34 614 45 91 44
              </a>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 8px; display: block;">Studio-Standort</span>
              <span style="font-family: 'Archivo', sans-serif; font-size: 0.95rem; color: var(--ink); line-height: 1.5;">
                Valencia, Spanien<br>
                <span style="color: var(--signal); font-size: 0.85rem;">DACH & Europaweiter Service</span>
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
        <div>© 2026 Eidos Render. Direkter Kontakt.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../contacto.html" onclick="window.setLang('es')">ES</a> ·
            <a href="../en/contact.html" onclick="window.setLang('en')">EN</a> ·
            <span style="color: var(--crimson); font-weight: 700;">DE</span> ·
            <a href="../fr/contact.html" onclick="window.setLang('fr')">FR</a>
          </div>
          <a href="projekte.html">Projekte</a>
          <a href="leistungen.html">Leistungen</a>
          <a href="impressum.html">Impressum</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('de/kontakt.html', deKontakt);
writeFile('de/kontakt/index.html', deKontakt.replace(/\.\.\//g, '../../').replace(/href="kontakt\.html"/g, 'href="./"').replace(/href="projekte\.html"/g, 'href="../projekte.html"').replace(/href="leistungen\.html"/g, 'href="../leistungen.html"').replace(/href="\.\/"/g, 'href="../"'));

// -------------------------------------------------------------
// 5. de/faq.html
// -------------------------------------------------------------
const deFaq = `<!DOCTYPE html>
<html lang="de">
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
  
  <title>Häufig gestellte Fragen (FAQ) — Eidos Render</title>
  <meta name="description" content="Häufig gestellte Fragen zu Fristen, Methodik, technischen Unterlagen und Leistungsumfang für die Vermarktung von Immobilienprojekten.">
  <link rel="canonical" href="https://eidosrender.es/de/faq">

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
  <meta property="og:title" content="Häufig gestellte Fragen (FAQ) — Eidos Render">
  <meta property="og:description" content="Methodik, Zeitpläne und Antworten für Bauträger, Architekten und Family Offices.">
  <meta property="og:url" content="https://eidosrender.es/de/faq">
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

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Welche Unterlagen werden für den Projektstart benötigt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es genügen Architekturpläne im CAD- (DWG) oder PDF-Format (Grundrisse, Schnitte, Ansichten) sowie vorläufige Baubeschreibungen oder Materialvorgaben."
        }
      },
      {
        "@type": "Question",
        "name": "Wie sehen typische Bearbeitungszeiträume aus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein ganzheitliches Launch-Projekt beansprucht bei parallelen Arbeitssträngen üblicherweise 6 bis 10 Wochen. Für einzelne 3D-Bilder oder Filmphasen liegen erste Entwürfe innerhalb weniger Werktage vor."
        }
      },
      {
        "@type": "Question",
        "name": "Arbeiten Sie mit Projektentwicklern in der gesamten DACH-Region?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Wir arbeiten regelmäßig mit Bauträgern, Projektentwicklern und Family Offices in Deutschland, Österreich, der Schweiz sowie ganz Europa über einen voll digitalisierten, transparenten Arbeitsprozess."
        }
      },
      {
        "@type": "Question",
        "name": "Muss das Gesamtpaket beauftragt werden oder sind Teilleistungen möglich?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unsere Leistungen sind strikt modular aufgebaut. Wir können punktuell für reine 3D-Bilder und Filme beauftragt werden oder das gesamte Vertriebssystem abbilden."
        }
      }
    ]
  }
  </script>
</head>
<body class="bg-paper">

  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo" aria-label="Eidos Render Startseite">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Hauptnavigation">
        <ul class="nav-links">
          <li><a href="projekte.html">Projekte</a></li>
          <li><a href="leistungen.html">Leistungen</a></li>
          <li><a href="./#prozess">Prozess</a></li>
          <li><a href="./#eidos">Über uns</a></li>
          <li><a href="kontakt.html">Kontakt</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Sprachauswahl">
          <a href="../faq.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../en/faq.html" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="de">DE</span>
          <span class="lang-divider">/</span>
          <a href="../fr/faq.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>

        <a href="kontakt.html" class="nav-cta">
          PROJEKT BESPRECHEN →
        </a>
      </div>

      <button class="nav-toggle" aria-label="Menü öffnen" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-nav-overlay" aria-hidden="true">
    <div>
      <div class="mobile-lang-switcher" aria-label="Sprachauswahl">
        <a href="../faq.html" data-lang="es" onclick="window.setLang('es')">ES</a>
        <a href="../en/faq.html" data-lang="en" onclick="window.setLang('en')">EN</a>
        <span class="active" data-lang="de">DE</span>
        <a href="../fr/faq.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="projekte.html">Projekte</a></li>
        <li><a href="leistungen.html">Leistungen</a></li>
        <li><a href="./#prozess">Prozess</a></li>
        <li><a href="./#eidos">Über uns</a></li>
        <li><a href="kontakt.html">Kontakt</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Real Estate Launch</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main style="padding-top: var(--nav-h);">

    <section class="section-sm bg-paper" style="border-bottom: 1px solid var(--line);">
      <div class="container">
        <div class="kicker crimson">Methodik & Umfang</div>
        <h1 class="display-title" style="margin-bottom: 24px;">
          Häufig gestellte Fragen.
        </h1>
        <p class="body-large body-muted" style="max-width: 760px;">
          Technische Voraussetzungen, Zeitabläufe und Zusammenarbeitsmodelle für Bauträger, Projektentwickler und Architekten.
        </p>
      </div>
    </section>

    <!-- FAQ LIST -->
    <section class="section bg-paper">
      <div class="container container-narrow">

        <div style="display: flex; flex-direction: column; gap: 48px;">
          
          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Planunterlagen</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              Welche technischen Pläne sind für Kalkulation und Start erforderlich?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              Architekturpläne im CAD- (DWG) oder PDF-Format (Grundrisse, Schnitte und Fassadenansichten) sowie ein grundlegender Auszug der Baubeschreibung oder Materialwünsche genügen völlig. Auf dieser Basis erarbeiten wir Blickwinkel, Regieplan und Zeitplan.
            </p>
          </div>

          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Fristen & Zeitplan</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              Wie lange dauert die Umsetzung typischerweise?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              Ein vollständiges Launch-Paket (Identität, 3D-Bilder, Film, Exposé, Website und Anzeigenschaltung) beansprucht im Schnitt 6 bis 10 Wochen. Für einzelne 3D-Visualisierungen stellen wir erste Entwürfe zur Ausrichtung und Belichtung bereits nach wenigen Arbeitstagen vor.
            </p>
          </div>

          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Modulare Bausteine</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              Können einzelne Leistungsphasen separat beauftragt werden?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              Selbstverständlich. Wir verlangen keine Paketbindung. Wir erstellen regelmäßig reine 3D-Architekturrenderings und Filme für bestehende Markenauftritte oder übernehmen den gesamten Vertriebsauftritt.
            </p>
          </div>

          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Europaweite Tätigkeit</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              Betreuen Sie Projekte im gesamten deutschsprachigen Raum und Europa?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              Ja. Wir arbeiten routiniert mit Bauträgern, Family Offices und Architekten in Deutschland, Österreich, der Schweiz sowie ganz Europa. Die gesamte Kommunikation, Dateiübermittlung und Abnahme erfolgt digital, termintreu und strukturiert.
            </p>
          </div>

          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Konditionen & Abrechnung</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              Wie erfolgt die Vertragsgestaltung und Rechnungsstellung?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              Wir arbeiten mit transparenten Festpreisangeboten gegliedert nach Liefermeilensteinen. Der Projektstart erfolgt mit 50% Anzahlung zur Kapazitätsreservierung, die restlichen 50% werden nach finaler Freigabe und Übergabe aller hochauflösenden Daten fällig.
            </p>
          </div>

        </div>

        <div style="margin-top: 70px; padding: 48px; background-color: var(--ink); color: var(--paper);">
          <div class="kicker crimson">Direkter Kontakt</div>
          <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; line-height: 1.1; margin-bottom: 16px;">
            Möchten Sie Ihr Projekt unverbindlich besprechen?
          </h2>
          <p style="color: rgba(244,243,239,0.75); font-size: 1.05rem; line-height: 1.5; max-width: 600px; margin-bottom: 32px;">
            Schreiben Sie uns direkt oder übermitteln Sie erste Pläne, um den zeitlichen und inhaltlichen Rahmen abzustimmen.
          </p>
          <a href="mailto:info@eidosrender.es?subject=Anfrage%20Immobilienprojekt" class="btn btn-crimson">
            PROJEKT BESPRECHEN →
          </a>
        </div>

      </div>
    </section>

  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-bottom">
        <div>© 2026 Eidos Render. Häufig gestellte Fragen.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../faq.html" onclick="window.setLang('es')">ES</a> ·
            <a href="../en/faq.html" onclick="window.setLang('en')">EN</a> ·
            <span style="color: var(--crimson); font-weight: 700;">DE</span> ·
            <a href="../fr/faq.html" onclick="window.setLang('fr')">FR</a>
          </div>
          <a href="projekte.html">Projekte</a>
          <a href="leistungen.html">Leistungen</a>
          <a href="kontakt.html">Kontakt</a>
          <a href="impressum.html">Impressum</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('de/faq.html', deFaq);

// -------------------------------------------------------------
// 6. 6 German Subservices in de/leistungen/
// -------------------------------------------------------------
function renderDeSubservice({ filename, canonicalSlug, esFile, enFile, frFile, phaseNum, phaseName, heroTitle, heroCopy, pillars }) {
  const pillarsHtml = pillars.map(p => `
          <div class="feature-card">
            <span class="kicker crimson">${p.kicker}</span>
            <h3 class="feature-card-title">${p.title}</h3>
            <p class="feature-card-copy">${p.desc}</p>
          </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="de">
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
  <link rel="canonical" href="https://eidosrender.es/de/leistungen/${canonicalSlug}">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/servicios/${esFile}">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/services/${enFile}">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/leistungen/${canonicalSlug}">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/services/${frFile}">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/services/${enFile}">

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
      <a href="../" class="logo" aria-label="Eidos Render Startseite">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Hauptnavigation">
        <ul class="nav-links">
          <li><a href="../projekte.html">Projekte</a></li>
          <li><a href="../leistungen.html" class="active">Leistungen</a></li>
          <li><a href="../#prozess">Prozess</a></li>
          <li><a href="../kontakt.html">Kontakt</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Sprachauswahl">
          <a href="../../servicios/${esFile}.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../../en/services/${enFile}.html" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="de">DE</span>
          <span class="lang-divider">/</span>
          <a href="../../fr/services/${frFile}.html" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>

        <a href="../kontakt.html" class="nav-cta">
          PROJEKT BESPRECHEN →
        </a>
      </div>

      <button class="nav-toggle" aria-label="Menü öffnen" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main style="padding-top: var(--nav-h);">

    <section class="section-sm bg-paper" style="border-bottom: 1px solid var(--line);">
      <div class="container">
        <div style="margin-bottom: 16px;">
          <a href="../leistungen.html" class="link-arrow" style="font-size: 0.72rem;">← ZURÜCK ZU LEISTUNGEN</a>
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
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.4rem; font-weight: 700; margin-bottom: 8px;">Planen Sie diese Phase für Ihr Projekt</h3>
            <p class="body-regular body-muted">Wir erstellen maßgeschneiderte Einzelangebote oder Komplettkonzepte.</p>
          </div>
          <a href="../kontakt.html" class="btn btn-crimson">
            PROJEKT BESPRECHEN →
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
            <a href="../../en/services/${enFile}.html" onclick="window.setLang('en')">EN</a> ·
            <span style="color: var(--crimson); font-weight: 700;">DE</span> ·
            <a href="../../fr/services/${frFile}.html" onclick="window.setLang('fr')">FR</a>
          </div>
          <a href="../leistungen.html">Leistungen</a>
          <a href="../projekte.html">Projekte</a>
          <a href="../kontakt.html">Kontakt</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../../main.js" defer></script>
</body>
</html>`;
}

// 01 Branding
writeFile('de/leistungen/branding.html', renderDeSubservice({
  filename: 'de/leistungen/branding.html',
  canonicalSlug: 'branding',
  esFile: 'branding',
  enFile: 'branding',
  frFile: 'branding',
  phaseNum: '01',
  phaseName: 'Regie & Markenidentität',
  heroTitle: 'Ein Immobilienprojekt braucht eine starke Identität.',
  heroCopy: 'Wir verzichten auf austauschbare Designs. Wir entwickeln Projektmarken, die in der Architektur verwurzelt sind und den anvisierten Quadratmeterpreis glaubwürdig untermauern.',
  pillars: [
    { kicker: 'Strategie', title: 'Naming & Konzept', desc: 'Der Projektname steuert die Marktwahrnehmung. Wir entwickeln Namen mit regionaler Verankerung, einfacher Aussprache und rechtlicher Schutzfähigkeit.' },
    { kicker: 'Design', title: 'Visuelles Erscheinungsbild', desc: 'Wir gestalten Bildmarke, Typografie und Farbwelten passend zu den realen Baustoffen (Holz, Sichtbeton, Naturstein, Metall).' },
    { kicker: 'Produktion', title: 'Stilistische Leitlinien', desc: 'Regievorgaben für Blickwinkel, Möblierung, Lichtstimmungen und Farbkorrektur für eine durchgängige Bildsprache in allen 3D-Renders.' },
    { kicker: 'Vor Ort', title: 'Bautafeln & Showrooms', desc: 'Layouts für Bauzaunplanen, Gerüstbanner, Fahnen, Verkaufscontainer und hochwertige Übergabeboxen.' }
  ]
}));

// 02 3D Rendering
writeFile('de/leistungen/3d-rendering.html', renderDeSubservice({
  filename: 'de/leistungen/3d-rendering.html',
  canonicalSlug: '3d-rendering',
  esFile: 'infografia-3d',
  enFile: '3d-rendering',
  frFile: 'rendu-3d',
  phaseNum: '02',
  phaseName: '3D-Architekturvisualisierung',
  heroTitle: 'Das Bild vor dem Bau.',
  heroCopy: 'Wir visualisieren Architektur mit fotorealistischer Präzision. Fassaden, Gemeinschaftsanlagen und Innenräume in gestochen scharfer Auflösung für Galerie- und Werbedruck.',
  pillars: [
    { kicker: 'Außenbereiche', title: 'Fassaden & Stadtraum', desc: 'Exakte 3D-Modellierung nach CAD-Plänen, reale Drohnen-Fotomontagen und physikalisch korrekte Sonnenstandsanalysen.' },
    { kicker: 'Innenarchitektur', title: 'Wohnwelten & Ausstattung', desc: 'Spürbare Materialtexturen, maßgefertigte Einbaumöbel, edle Hölzer und warmes Naturlicht für maximale Anziehungskraft.' },
    { kicker: 'Freiflächen', title: 'Garten & Gemeinschaft', desc: 'Poolbereiche, Dachterrassen, Wellness-Zonen und landschaftsplanerische Details mit hoher räumlicher Klarheit.' },
    { kicker: 'Auflösung', title: 'Großformatige Ausgabe', desc: 'Renderings in 4K/8K, berechnet für überdimensionale Bautafeln, Magazinexposés und digitale Präsentationen.' }
  ]
}));

// 03 3D Video
writeFile('de/leistungen/3d-video.html', renderDeSubservice({
  filename: 'de/leistungen/3d-video.html',
  canonicalSlug: '3d-video',
  esFile: 'video-3d',
  enFile: '3d-video',
  frFile: 'video-3d',
  phaseNum: '03',
  phaseName: '3D-Film & Animation',
  heroTitle: 'Vom statischen Render zu einer lebendigen Erlebnisreise.',
  heroCopy: 'Bewegtbild erschließt Raumzusammenhänge, transportiert echte Proportionen und erzielt bei Investorenpräsentationen und Social-Media-Kampagnen maximale Verweildauer.',
  pillars: [
    { kicker: 'Filmisch', title: 'Virtuelle Raumrundgänge', desc: 'Elegante Kamerafahrten von der städtebaulichen Übersicht bis in detailreiche Wohninnenräume mit natürlicher Optik.' },
    { kicker: 'Social Media', title: 'Vertikale Video-Reels', desc: 'Kurzformate im 9:16-Format für Instagram und Meta Ads, zugeschnitten auf hohe Klick- und Conversionraten.' },
    { kicker: 'Atmosphäre', title: 'Vertonung & Color Grading', desc: 'Fein abgestimmtes Sounddesign, dezente Umgebungsgeräusche und cineastische Farbkorrektur passend zum Projekt.' },
    { kicker: 'Vertrieb', title: 'Messe- & Lounge-Displays', desc: 'Unterbrechungsfreie 4K-Videoschleifen und Präsentationsversionen für Vertriebsbüros und Roadshows.' }
  ]
}));

// 04 Marketing Collateral
writeFile('de/leistungen/vermarktungsunterlagen.html', renderDeSubservice({
  filename: 'de/leistungen/vermarktungsunterlagen.html',
  canonicalSlug: 'vermarktungsunterlagen',
  esFile: 'material-comercial',
  enFile: 'marketing-collateral',
  frFile: 'supports-commerciaux',
  phaseNum: '04',
  phaseName: 'Verkaufsunterlagen & Exposés',
  heroTitle: 'Vom Bauplan zum überzeugenden Vertriebswerkzeug.',
  heroCopy: 'Wir verwandeln komplexe Architekturpläne in intuitive, repräsentative und vertriebsstarke Unterlagen, die Maklern Sicherheit geben und Käufer begeistern.',
  pillars: [
    { kicker: 'Redaktionell', title: 'Exposés & Broschüren', desc: 'Druckfertige und digitale Präsentationsbroschüren mit Baubeschreibung, Materialkatalogen und Projektleitbild.' },
    { kicker: 'Anschaulich', title: 'Möblierte 2D/3D-Grundrisse', desc: 'Maßstäbliche, geschmackvoll möblierte Grundrisspläne für ein klares und sofortiges Raumverständnis.' },
    { kicker: 'Lage', title: 'Standort- & Infrastrukturpläne', desc: 'Übersichtliche Umgebungskarten mit Darstellung von ÖPNV-Verbindungen, Schulen, Parks und Nahversorgung.' },
    { kicker: 'Vertrieb', title: 'Wohnungs-Datenblätter', desc: 'Kompakte Einzelblätter je Wohnung mit Flächenaufstellung, Orientierung und zugeordneten Renderings.' }
  ]
}));

// 05 Real Estate Web
writeFile('de/leistungen/projekt-website.html', renderDeSubservice({
  filename: 'de/leistungen/projekt-website.html',
  canonicalSlug: 'projekt-website',
  esFile: 'web-real-estate',
  enFile: 'real-estate-web',
  frFile: 'site-web-immobilier',
  phaseNum: '05',
  phaseName: 'Projekt-Websites',
  heroTitle: 'Eine Website, die nicht nur zeigt. Sondern den Verkauf führt.',
  heroCopy: 'Individuell programmierte Websites mit architektonischem UX/UI, blitzschnellen Ladezeiten, interaktivem Wohnungsfinder und direkter Anbindung an Ihren Vertrieb.',
  pillars: [
    { kicker: 'UX/UI', title: 'Architektonische Inszenierung', desc: 'Großzügiger Weißraum, elegante Schriften und nahtlose Bildpräsentation für anspruchsvolle Interessenten.' },
    { kicker: 'Interaktion', title: 'Interaktiver Wohnungsfinder', desc: 'Intuitiver Grundriss-Navigator mit Filtermöglichkeiten nach Zimmern, Geschoss, Ausrichtung und Kaufpreis.' },
    { kicker: 'Performance', title: 'Spitzen-Speed & SEO', desc: 'Semantischer Quellcode mit erstklassigen Core Web Vitals, optimaler mobiler Darstellung und internationaler Indexierung.' },
    { kicker: 'Lead-Flow', title: 'Direkte CRM-Schnittstelle', desc: 'Sofortige Weiterleitung eingehender Anfragen an Makler oder Vertriebsleitung inklusive genauer Herkunftsmessung.' }
  ]
}));

// 06 Acquisition
writeFile('de/leistungen/digitale-vermarktung.html', renderDeSubservice({
  filename: 'de/leistungen/digitale-vermarktung.html',
  canonicalSlug: 'digitale-vermarktung',
  esFile: 'captacion',
  enFile: 'acquisition',
  frFile: 'acquisition',
  phaseNum: '06',
  phaseName: 'Digitale Vermarktung & Lead-Generierung',
  heroTitle: 'Sobald die Bilder bereitstehen, startet der Verkauf.',
  heroCopy: 'Gezielte Kampagnen auf Google und Meta, um Ihr Neubauprojekt mit solventen Kaufinteressenten aus dem In- und Ausland zusammenzubringen.',
  pillars: [
    { kicker: 'Suchintention', title: 'Google Suchanzeigen', desc: 'Direkte Ansprache von Nutzern, die aktiv nach Eigentumswohnungen, Penthouses oder Häusern im Projektgebiet suchen.' },
    { kicker: 'Kaufkraft', title: 'Meta Ads mit Präzision', desc: 'Zielgruppengenaue Ausspielung auf Instagram und Facebook basierend auf Kaufkraft, Immobilienaffinität und Lebensphase.' },
    { kicker: 'Testing', title: 'Laufende Bildoptimierung', desc: 'Kontinuierlicher Test verschiedener Render-Blickwinkel und Texte zur Senkung der Akquisitionskosten.' },
    { kicker: 'Qualität', title: 'Tracking & Lead-Filterung', desc: 'Präzise Messung von Downloads und Anfragen bei konsequenter Ausschaltung minderwertiger Kontakte.' }
  ]
}));

// -------------------------------------------------------------
// 7. German Legal Pages
// -------------------------------------------------------------
function renderDeLegal({ title, canonicalSlug, bodyContent }) {
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Eidos Render</title>
  <link rel="canonical" href="https://eidosrender.es/de/${canonicalSlug}">
  <link rel="stylesheet" href="../style.css">
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon.png">
</head>
<body class="bg-paper">
  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo"><span>EIDOS RENDER</span><span class="logo-dot"></span></a>
      <a href="kontakt.html" class="nav-cta">PROJEKT BESPRECHEN →</a>
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
        <div>© 2026 Eidos Render. Alle Rechte vorbehalten.</div>
        <div style="display: flex; gap: 24px;">
          <a href="impressum.html">Impressum</a>
          <a href="datenschutz.html">Datenschutz</a>
          <a href="cookies.html">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

writeFile('de/impressum.html', renderDeLegal({
  title: 'Impressum',
  canonicalSlug: 'impressum',
  bodyContent: '<p>Angaben gemäß europäischen Telemedienrichtlinien: Eidos Render, ansässig in Valencia, Spanien. Kontakt: info@eidosrender.es.</p><p style="margin-top: 16px;">Sämtliche auf dieser Website veröffentlichten Inhalte, 3D-Bilder, Texte und visuellen Medien sind urheberrechtlich geschützt. Jede unbefugte Verwertung bedarf der schriftlichen Zustimmung.</p>'
}));

writeFile('de/datenschutz.html', renderDeLegal({
  title: 'Datenschutzerklärung',
  canonicalSlug: 'datenschutz',
  bodyContent: '<p>Gemäß EU-Datenschutz-Grundverordnung (DSGVO) verarbeitet Eidos Render personenbezogene Daten ausschließlich zur Beantwortung kommerzieller Anfragen hinsichtlich 3D-Visualisierung und Immobilienprojekten.</p><p style="margin-top: 16px;">Ihre Daten werden nicht an unberechtigte Dritte weitergegeben. Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung unter info@eidosrender.es.</p>'
}));

writeFile('de/cookies.html', renderDeLegal({
  title: 'Cookie-Richtlinie',
  canonicalSlug: 'cookies',
  bodyContent: '<p>Diese Website verwendet technische und analytische Cookies, um die einwandfreie Funktion sicherzustellen und das Nutzererlebnis fortlaufend zu verbessern. Sie können die Speicherung von Cookies jederzeit in den Einstellungen Ihres Browsers anpassen oder deaktivieren.</p>'
}));

console.log('ALL GERMAN FILES GENERATED SUCCESSFULLY.');
