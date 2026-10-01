const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function writeFile(relPath, content) {
  const fullPath = path.join(root, relPath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Synced:', relPath);
}

// ============================================================================
// 1. GERMAN HOMEPAGE (de/index.html)
// ============================================================================
const deIndexHtml = `<!DOCTYPE html>
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
  
  <title>Eidos Render | 3D-Architekturvisualisierung & Immobilien-Launch</title>
  <meta name="description" content="Hochwertige 3D-Architekturvisualisierung, visuelle Regie und Vermarktungswerkzeuge für anspruchsvolle Bauträger und Architekturbüros in Europa.">
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
  <meta property="og:title" content="Eidos Render | 3D-Architekturvisualisierung & Immobilien-Launch">
  <meta property="og:description" content="Visueller Partner für Immobilienentwickler. Vom Architekturentwurf zum Verkaufsstart.">
  <meta property="og:url" content="https://eidosrender.es/de/">
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
        "@id": "https://eidosrender.es/de/#organization",
        "name": "Eidos Render",
        "url": "https://eidosrender.es/de/",
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
        "@id": "https://eidosrender.es/de/#website",
        "url": "https://eidosrender.es/de/",
        "name": "Eidos Render",
        "publisher": { "@id": "https://eidosrender.es/de/#organization" }
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
      <a href="./" class="logo" aria-label="Eidos Render Startseite">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Hauptnavigation">
        <ul class="nav-links">
          <li><a href="#projekte">Projekte</a></li>
          <li><a href="#servicios">Leistungen</a></li>
          <li><a href="#estudio">Studio</a></li>
          <li><a href="#prozess">Prozess</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
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
        <li><a href="#servicios">Leistungen</a></li>
        <li><a href="#estudio">Studio</a></li>
        <li><a href="#prozess">Prozess</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Visualisierung & Launch</div>
      <div>Valencia · Nationaler und europäischer Wirkungskreis</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main>

    <!-- 01. HERO -->
    <section class="section-hero bg-ink" id="hero">
      <div style="position: absolute; inset: 0; overflow: hidden; z-index: 1;">
        <picture>
          <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
          <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Fassaden-Rendering für Wohnungsneubau — Eidos Render" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.42;" fetchpriority="high">
        </picture>
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(11,11,12,0.6) 0%, rgba(11,11,12,0.2) 50%, rgba(11,11,12,0.85) 100%);"></div>
      </div>

      <div class="container" style="position: relative; z-index: 2; margin-top: auto; padding-bottom: 80px;">
        <div class="kicker crimson">
          <span class="kicker-dot"></span>
          Visuelle Regie & Verkaufsstart
        </div>

        <h1 class="display-hero" style="color: var(--paper); max-width: 1300px; margin-bottom: 28px;">
          Vom Architektur-<br>
          entwurf zum<br>
          Verkaufsstart.
        </h1>

        <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px; align-items: flex-end; border-top: 1px solid var(--line-dark); padding-top: 32px;">
          <p class="body-large" style="color: rgba(244, 243, 239, 0.85);">
            Wir gehen von der Architektur aus. Wir erschaffen ihre Bildwelt. Und wir bringen sie an den Markt – mit einem ganzheitlichen visuellen System für Bauträger, Architekturbüros und Immobilieninvestoren.
          </p>
          <div style="text-align: right;">
            <a href="#projekte" class="link-draw" style="color: var(--paper);">
              PROJEKTAUSWAHL ENTDECKEN ↓
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 02. MANIFEST -->
    <section class="section bg-paper">
      <div class="container">
        <div class="grid-12">
          <div style="grid-column: 1 / 3;">
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Manifest
            </span>
          </div>
          <div style="grid-column: 3 / 13;">
            <p class="manifesto-text" style="color: var(--ink); margin-bottom: 40px;">
              Das Rendering ist das Produkt. Jede Entscheidung zu Lichtführung, Bildausschnitt und Materialität existiert einzig, um den architektonischen Wert maximal zur Geltung zu bringen. Die Benutzeroberfläche tritt zurück; das Bild dominiert.
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; border-top: 1px solid var(--line); padding-top: 40px;">
              <div>
                <span class="kicker signal" style="margin-bottom: 8px;">01 · Architektonisches Gespür</span>
                <p class="body-regular body-muted">
                  Wir analysieren Geometrien, Tragwerke und Materialität bis ins Detail, bevor die 3D-Software geöffnet wird.
                </p>
              </div>
              <div>
                <span class="kicker signal" style="margin-bottom: 8px;">02 · Einheitliche Bildregie</span>
                <p class="body-regular body-muted">
                  Eine durchgängige visuelle Sprache vom ersten Fassadenbild bis zur Vermarktungskampagne.
                </p>
              </div>
              <div>
                <span class="kicker signal" style="margin-bottom: 8px;">03 · Verkaufsrelevante Präzision</span>
                <p class="body-regular body-muted">
                  Jedes Bild wird strategisch für den Vertrieb entwickelt: Lichtstimmungen, die Begehren wecken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 03. PORTFOLIO IN BG-INK -->
    <section class="section bg-ink" id="projekte">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 80px; border-bottom: 1px solid var(--line-dark); padding-bottom: 32px;">
          <div>
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Projektarchiv
            </span>
            <h2 class="display-title" style="color: var(--paper);">
              Ausgewählte Projekte.
            </h2>
          </div>
          <div class="body-muted" style="text-align: right; font-family: var(--font-condensed); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">
            Auswahl 2024 — 2026
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 90px;">

          <!-- 01 21:9 Full -->
          <article class="project-card">
            <div class="project-media-wrap ratio-21-9">
              <picture>
                <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
                <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Fassaden-Rendering Wohnanlage" loading="lazy">
              </picture>
            </div>
            <div class="project-meta-row">
              <div style="display: flex; gap: 24px; align-items: baseline;">
                <span class="project-num">01</span>
                <div>
                  <h3 class="project-title" style="color: var(--paper);">Urbanes Wohnensemble</h3>
                  <div class="project-specs">Mehrfamilienhaus · Visuelle Regie · Urbane Integration</div>
                </div>
              </div>
              <div class="project-specs" style="color: rgba(244,243,239,0.5);">Valencia, Spanien · 2026</div>
            </div>
          </article>

          <!-- 02 & 03 Split -->
          <div class="grid-12">
            <article class="project-card" style="grid-column: span 5;">
              <div class="project-media-wrap ratio-4-5">
                <picture>
                  <source srcset="../img/infografia-exterior-zonas-comunes-obra-nueva.webp" type="image/webp">
                  <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="Außenanlagen und Pool" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 20px; align-items: baseline;">
                  <span class="project-num">02</span>
                  <div>
                    <h3 class="project-title" style="color: var(--paper); font-size: 1.5rem;">Gartenanlagen & Infinity-Pool</h3>
                    <div class="project-specs">Landschaftsarchitektur · Solarium · Abendlicht</div>
                  </div>
                </div>
              </div>
            </article>

            <article class="project-card" style="grid-column: span 7; align-self: flex-end;">
              <div class="project-media-wrap ratio-16-9">
                <picture>
                  <source srcset="../img/render-exterior-vivienda-unifamiliar-piscina.webp" type="image/webp">
                  <img src="../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Zeitgenössische Villa" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 20px; align-items: baseline;">
                  <span class="project-num">03</span>
                  <div>
                    <h3 class="project-title" style="color: var(--paper); font-size: 1.5rem;">Zeitgenössische Küstenvilla</h3>
                    <div class="project-specs">Einfamilienvilla · Hangintegration · Meerblick</div>
                  </div>
                </div>
                <div class="project-specs" style="color: rgba(244,243,239,0.5);">Alicante, Spanien</div>
              </div>
            </article>
          </div>

          <!-- 04 21:9 Full -->
          <article class="project-card">
            <div class="project-media-wrap ratio-21-9">
              <picture>
                <source srcset="../img/infografia-3d-salon-moderno-doble-altura.webp" type="image/webp">
                <img src="../img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Lichtdurchflutetes Penthouse" loading="lazy">
              </picture>
            </div>
            <div class="project-meta-row">
              <div style="display: flex; gap: 24px; align-items: baseline;">
                <span class="project-num">04</span>
                <div>
                  <h3 class="project-title" style="color: var(--paper);">Penthouse mit Galerie</h3>
                  <div class="project-specs">Innenarchitektur · Offener Grundriss · Kuratierte Materialien</div>
                </div>
              </div>
              <div class="project-specs" style="color: rgba(244,243,239,0.5);">Madrid, Spanien</div>
            </div>
          </article>

          <!-- 05 & 06 Split -->
          <div class="grid-12">
            <article class="project-card" style="grid-column: span 6;">
              <div class="project-media-wrap ratio-16-9">
                <picture>
                  <source srcset="../img/render-cocina-moderna-isla-madera.webp" type="image/webp">
                  <img src="../img/render-cocina-moderna-isla-madera-1600.jpg" alt="Küche mit Naturholz-Insel" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 20px; align-items: baseline;">
                  <span class="project-num">05</span>
                  <div>
                    <h3 class="project-title" style="color: var(--paper); font-size: 1.4rem;">Designerküche mit Kochinsel</h3>
                    <div class="project-specs">Naturholz · Fugenlose Flächen · Warmes Licht</div>
                  </div>
                </div>
              </div>
            </article>

            <article class="project-card" style="grid-column: span 6;">
              <div class="project-media-wrap ratio-16-9">
                <picture>
                  <source srcset="../img/infografia-dormitorio-principal-render-inmobiliario.webp" type="image/webp">
                  <img src="../img/infografia-dormitorio-principal-render-inmobiliario-1600.jpg" alt="Master Suite Schlafzimmer" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 20px; align-items: baseline;">
                  <span class="project-num">06</span>
                  <div>
                    <h3 class="project-title" style="color: var(--paper); font-size: 1.4rem;">Master Suite & Ankleide</h3>
                    <div class="project-specs">Feine Texturen · Ruhige Atmosphäre · Morgenlicht</div>
                  </div>
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>

    <!-- 04. STUDIO / SYSTEM -->
    <section class="section bg-paper-card" id="estudio" style="border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);">
      <div class="container">
        <div class="grid-12">
          <div style="grid-column: 1 / 5;">
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Ganzheitliches System
            </span>
            <h2 class="display-title" style="margin-bottom: 24px;">
              Keine isolierten Renders.<br>Ein zusammenhängendes System.
            </h2>
            <p class="body-regular body-muted" style="margin-bottom: 32px;">
              Die Vermarktung einer Immobilienentwicklung scheitert selten an der Qualität des Entwurfs, sondern an der Zersplitterung seiner visuellen Identität. Wir bündeln alle Disziplinen unter einer kohärenten künstlerischen Leitung.
            </p>
            <div style="padding-top: 16px;">
              <a href="#kontakt" class="btn-editorial btn-dark">
                PROJEKT BESPRECHEN →
              </a>
            </div>
          </div>

          <div style="grid-column: 6 / 13;">
            <div class="editorial-list">
              <div class="editorial-row">
                <span class="row-num">01</span>
                <div>
                  <h3 class="row-title">Architektur & Geometrie</h3>
                  <p class="body-regular body-muted">Analyse der Plangrundlagen und konstruktiven Besonderheiten.</p>
                </div>
                <div class="row-meta">BIM / CAD</div>
              </div>

              <div class="editorial-row">
                <span class="row-num">02</span>
                <div>
                  <h3 class="row-title">3D-Bildsprache & Lichtregie</h3>
                  <p class="body-regular body-muted">Cinematische Beleuchtung, reale Texturen und native 4K-Auflösung.</p>
                </div>
                <div class="row-meta">CGI & Film</div>
              </div>

              <div class="editorial-row">
                <span class="row-num">03</span>
                <div>
                  <h3 class="row-title">Markenidentität & Naming</h3>
                  <p class="body-regular body-muted">Typografisches System, Farbpalette und redaktionelle Tonalität.</p>
                </div>
                <div class="row-meta">Branding</div>
              </div>

              <div class="editorial-row">
                <span class="row-num">04</span>
                <div>
                  <h3 class="row-title">Vertriebsdossiers & Verkaufspläne</h3>
                  <p class="body-regular body-muted">Hochwertige Print-Exposés und strukturierte 2D/3D-Verkaufspläne.</p>
                </div>
                <div class="row-meta">Print & PDF</div>
              </div>

              <div class="editorial-row">
                <span class="row-num">05</span>
                <div>
                  <h3 class="row-title">Projekt-Website</h3>
                  <p class="body-regular body-muted">Digitale Vertriebsplattform mit interaktivem Wohnungsfinder.</p>
                </div>
                <div class="row-meta">Web Platform</div>
              </div>

              <div class="editorial-row">
                <span class="row-num">06</span>
                <div>
                  <h3 class="row-title">Käuferakquise</h3>
                  <p class="body-regular body-muted">Gezielte Kampagnen auf Google und Meta mit Render-Creatives.</p>
                </div>
                <div class="row-meta">Vermarktung</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 05. VIDEO SECTION -->
    <section class="section bg-ink" style="color: var(--paper);">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 24px;">
          <div>
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Film & Bewegung
            </span>
            <h2 class="display-title" style="color: var(--paper);">Atmosphäre in Bewegung.</h2>
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.7); max-width: 480px;">
            Architekturfilm eröffnet eine neue Dimension: Lichtwechsel, Wind in den Bäumen und cinematische Kamerafahrten, die Emotionen wecken.
          </p>
        </div>

        <div style="position: relative; aspect-ratio: 16/9; width: 100%; overflow: hidden; background: #000;">
          <video style="width: 100%; height: 100%; object-fit: cover;" autoplay muted loop playsinline poster="../img/render-fachada-edificio-obra-nueva-1600.jpg">
            <source src="../img/video-reel-patio.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </section>

    <!-- 06. LEISTUNGEN -->
    <section class="section bg-paper" id="servicios">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 56px; border-bottom: 1px solid var(--line); padding-bottom: 24px;">
          <div>
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Umfassendes Leistungsbild
            </span>
            <h2 class="display-title">Vom Entwurf zum Launch.</h2>
          </div>
          <div>
            <a href="leistungen.html" class="link-draw">DETAILSEITE LEISTUNGEN →</a>
          </div>
        </div>

        <div class="grid-12">
          <!-- 01 -->
          <div style="grid-column: span 4; border-top: 1px solid var(--line); padding-top: 24px; margin-bottom: 48px;">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 16px;">01</div>
            <h3 class="display-sub" style="margin-bottom: 12px;">3D-Visualisierung</h3>
            <p class="body-regular body-muted" style="margin-bottom: 20px;">
              Exterieurs, Interieurs, Gemeinschaftsbereiche und städtebauliche Einbindung in nativer 4K-Auflösung.
            </p>
            <a href="leistungen/3d-rendering.html" class="link-draw">MEHR ERFAHREN →</a>
          </div>

          <!-- 02 -->
          <div style="grid-column: span 4; border-top: 1px solid var(--line); padding-top: 24px; margin-bottom: 48px;">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 16px;">02</div>
            <h3 class="display-sub" style="margin-bottom: 12px;">3D-Film & Animation</h3>
            <p class="body-regular body-muted" style="margin-bottom: 20px;">
              Cinematische Kamerafahrten, 16:9 Präsentationsfilme und vertikale 9:16 Social-Media-Reels.
            </p>
            <a href="leistungen/3d-video.html" class="link-draw">MEHR ERFAHREN →</a>
          </div>

          <!-- 03 -->
          <div style="grid-column: span 4; border-top: 1px solid var(--line); padding-top: 24px; margin-bottom: 48px;">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 16px;">03</div>
            <h3 class="display-sub" style="margin-bottom: 12px;">Markenidentität</h3>
            <p class="body-regular body-muted" style="margin-bottom: 20px;">
              Naming, Logo-System, typografisches Regelwerk und visuelle Leitlinien für das Projekt.
            </p>
            <a href="leistungen/branding.html" class="link-draw">MEHR ERFAHREN →</a>
          </div>

          <!-- 04 -->
          <div style="grid-column: span 4; border-top: 1px solid var(--line); padding-top: 24px;">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 16px;">04</div>
            <h3 class="display-sub" style="margin-bottom: 12px;">Verkaufsunterlagen</h3>
            <p class="body-regular body-muted" style="margin-bottom: 20px;">
              Redaktionelle Verkaufsdossiers, strukturierte 2D/3D-Verkaufspläne und Baustellenbanner.
            </p>
            <a href="leistungen/vermarktungsunterlagen.html" class="link-draw">MEHR ERFAHREN →</a>
          </div>

          <!-- 05 -->
          <div style="grid-column: span 4; border-top: 1px solid var(--line); padding-top: 24px;">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 16px;">05</div>
            <h3 class="display-sub" style="margin-bottom: 12px;">Projekt-Website</h3>
            <p class="body-regular body-muted" style="margin-bottom: 20px;">
              Maßgeschneiderte Webplattform mit interaktivem Wohnungsfinder und direkter CRM-Verbindung.
            </p>
            <a href="leistungen/projekt-website.html" class="link-draw">MEHR ERFAHREN →</a>
          </div>

          <!-- 06 -->
          <div style="grid-column: span 4; border-top: 1px solid var(--line); padding-top: 24px;">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 16px;">06</div>
            <h3 class="display-sub" style="margin-bottom: 12px;">Käuferakquise</h3>
            <p class="body-regular body-muted" style="margin-bottom: 20px;">
              Gezielte Kampagnen auf Google und Meta mit den entwickelten 3D-Visualisierungen.
            </p>
            <a href="leistungen/digitale-vermarktung.html" class="link-draw">MEHR ERFAHREN →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 07. PROZESS -->
    <section class="section bg-paper-card" id="prozess" style="border-top: 1px solid var(--line);">
      <div class="container">
        <div class="grid-12">
          <div style="grid-column: 1 / 4;">
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Methodik
            </span>
            <h2 class="display-title" style="margin-bottom: 20px;">Präziser Ablauf.</h2>
            <p class="body-regular body-muted">
              Vom ersten Planabgleich bis zur schlüsselfertigen Vermarktungskampagne: Strukturierte Meilensteine garantieren termingerechte Exzellenz.
            </p>
          </div>

          <div style="grid-column: 5 / 13;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 32px;">
              <div style="border-top: 1px solid var(--line); padding-top: 20px;">
                <span class="row-num" style="color: var(--crimson);">01</span>
                <h4 class="display-sub" style="font-size: 1.15rem; margin: 12px 0 8px;">CAD & Geometrie</h4>
                <p class="body-regular body-muted" style="font-size: 0.92rem;">Analyse der Ausführungspläne, Massenmodellierung und Festlegung der Sichtachsen.</p>
              </div>

              <div style="border-top: 1px solid var(--line); padding-top: 20px;">
                <span class="row-num" style="color: var(--crimson);">02</span>
                <h4 class="display-sub" style="font-size: 1.15rem; margin: 12px 0 8px;">Kamera & Bildregie</h4>
                <p class="body-regular body-muted" style="font-size: 0.92rem;">Wahl der Brennweiten, Perspektiven und architektonischen Fluchtpunkte.</p>
              </div>

              <div style="border-top: 1px solid var(--line); padding-top: 20px;">
                <span class="row-num" style="color: var(--crimson);">03</span>
                <h4 class="display-sub" style="font-size: 1.15rem; margin: 12px 0 8px;">Licht & Textur</h4>
                <p class="body-regular body-muted" style="font-size: 0.92rem;">Physikalisch korrekte Materialien, Vegetation und differenzierte Lichtstimmungen.</p>
              </div>

              <div style="border-top: 1px solid var(--line); padding-top: 20px;">
                <span class="row-num" style="color: var(--crimson);">04</span>
                <h4 class="display-sub" style="font-size: 1.15rem; margin: 12px 0 8px;">4K-Rendering</h4>
                <p class="body-regular body-muted" style="font-size: 0.92rem;">Berechnung in voller nativer Auflösung und subtile Farbkorrektur.</p>
              </div>

              <div style="border-top: 1px solid var(--line); padding-top: 20px;">
                <span class="row-num" style="color: var(--crimson);">05</span>
                <h4 class="display-sub" style="font-size: 1.15rem; margin: 12px 0 8px;">Medienintegration</h4>
                <p class="body-regular body-muted" style="font-size: 0.92rem;">Einbindung in Verkaufsbroschüren, Exposés und interaktive Webmodelle.</p>
              </div>

              <div style="border-top: 1px solid var(--line); padding-top: 20px;">
                <span class="row-num" style="color: var(--crimson);">06</span>
                <h4 class="display-sub" style="font-size: 1.15rem; margin: 12px 0 8px;">Markteinführung</h4>
                <p class="body-regular body-muted" style="font-size: 0.92rem;">Aktivierung der Vertriebskanäle und Kampagnen zur qualifizierten Leadgewinnung.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 08. KONTAKT -->
    <section class="section bg-ink" id="kontakt" style="color: var(--paper);">
      <div class="container">
        <div class="grid-12">
          
          <div style="grid-column: 1 / 7;">
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Direkter Kontakt
            </span>
            <h2 class="display-hero" style="color: var(--paper); line-height: 1.05; margin-bottom: 24px;">
              Vom Projekt<br>zum Launch.<br>Sprechen wir.
            </h2>
            <p class="body-large" style="color: rgba(244,243,239,0.8); max-width: 500px; margin-bottom: 40px;">
              Wenn Sie ein Neubauprojekt oder eine Quartiersentwicklung vorbereiten und Bildwelt, Unterlagen und Vermarktung definieren möchten, stellen Sie uns Ihr Vorhaben vor.
            </p>

            <div style="display: flex; flex-direction: column; gap: 24px; border-top: 1px solid var(--line-dark); padding-top: 32px;">
              <div>
                <span class="kicker signal" style="margin-bottom: 4px;">Direkte E-Mail</span>
                <div>
                  <a href="mailto:info@eidosrender.es" class="link-draw" style="font-size: 1.25rem; font-family: var(--font-display); text-transform: none; color: var(--paper); letter-spacing: 0;">
                    info@eidosrender.es
                  </a>
                </div>
              </div>
              <div style="margin-top: 12px;">
                <span class="kicker signal" style="margin-bottom: 4px;">Direkttelefon</span>
                <div>
                  <a href="tel:+34614459144" class="link-draw" style="font-size: 1.1rem; color: var(--paper);">
                    +34 614 45 91 44
                  </a>
                </div>
              </div>
              <div style="margin-top: 12px;">
                <span class="kicker signal" style="margin-bottom: 4px;">Studio & Einzugsgebiet</span>
                <p class="body-regular" style="color: rgba(244,243,239,0.65);">
                  Valencia, Spanien · Betreuung von Projekten in ganz Deutschland, Österreich, der Schweiz und Europa.
                </p>
              </div>
            </div>
          </div>

          <!-- Minimalist Form -->
          <div style="grid-column: 8 / 13;">
            <div style="border: 1px solid var(--line-dark); padding: clamp(32px, 5vw, 60px);">
              <div class="kicker signal" style="margin-bottom: 24px;">Projekteinschätzung</div>
              
              <form class="form-minimal" method="POST" action="../enviar.php">
                <div class="field-group">
                  <label for="de-nombre">Vor- und Nachname *</label>
                  <input type="text" id="de-nombre" name="nombre" required placeholder="z. B. Maximilian Weber">
                  <span class="field-error">Bitte geben Sie Ihren Namen an.</span>
                </div>

                <div class="field-group">
                  <label for="de-empresa">Bauträger / Architekturbüro</label>
                  <input type="text" id="de-empresa" name="empresa" placeholder="z. B. Weber Immobilien GmbH">
                </div>

                <div class="field-group">
                  <label for="de-email">Geschäftliche E-Mail *</label>
                  <input type="email" id="de-email" name="email" required placeholder="m.weber@weber-immo.de">
                  <span class="field-error">Bitte geben Sie eine gültige E-Mail-Adresse an.</span>
                </div>

                <div class="field-group">
                  <label for="de-telefono">Telefonnummer</label>
                  <input type="tel" id="de-telefono" name="telefono" placeholder="+49 30 12345678">
                </div>

                <div class="field-group">
                  <label for="de-mensaje">Projektbeschreibung (Standort, Einheiten, Zeitplan) *</label>
                  <textarea id="de-mensaje" name="mensaje" rows="3" required placeholder="Wohnensemble mit 24 Einheiten, geplanter Vertriebsstart Q4..."></textarea>
                  <span class="field-error">Bitte beschreiben Sie kurz das Vorhaben.</span>
                </div>

                <div style="padding-top: 16px;">
                  <button type="submit" class="btn-editorial btn-crimson" style="width: 100%; justify-content: center;">
                    PROJEKT ANFRAGEN →
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
            Visueller Partner für Immobilienentwicklungen. Vom Architekturentwurf zum kommerziellen Verkaufsstart.
          </p>
        </div>

        <div>
          <div class="footer-col-title">Navigation</div>
          <ul class="footer-links">
            <li><a href="#projekte">Projekte</a></li>
            <li><a href="#servicios">Leistungen</a></li>
            <li><a href="#estudio">Studio</a></li>
            <li><a href="#prozess">Methodik</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Leistungen</div>
          <ul class="footer-links">
            <li><a href="leistungen/3d-rendering.html">3D-Rendering</a></li>
            <li><a href="leistungen/3d-video.html">3D-Film & Reels</a></li>
            <li><a href="leistungen/branding.html">Markenidentität</a></li>
            <li><a href="leistungen/vermarktungsunterlagen.html">Verkaufsunterlagen</a></li>
            <li><a href="leistungen/projekt-website.html">Projekt-Websites</a></li>
            <li><a href="leistungen/digitale-vermarktung.html">Käuferakquise</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Studio</div>
          <ul class="footer-links">
            <li><a href="mailto:info@eidosrender.es">info@eidosrender.es</a></li>
            <li><a href="tel:+34614459144">+34 614 45 91 44</a></li>
            <li><span style="color: rgba(244,243,239,0.5);">Valencia, Spanien</span></li>
            <li><a href="faq.html">Häufig gestellte Fragen</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 Eidos Render. Alle Rechte vorbehalten.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../" onclick="window.setLang('es')">ES</a> ·
            <a href="../en/" onclick="window.setLang('en')">EN</a> ·
            <span style="color: var(--crimson-on-dark); font-weight: 700;">DE</span> ·
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
</html>
`;

writeFile('de/index.html', deIndexHtml);

// ============================================================================
// 2. FRENCH HOMEPAGE (fr/index.html)
// ============================================================================
const frIndexHtml = `<!DOCTYPE html>
<html lang="fr">
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
  
  <title>Eidos Render | Rendu 3D Architecture & Lancement Immobilier</title>
  <meta name="description" content="Perspectives 3D d'architecture haut de gamme, direction artistique et outils commerciaux pour promoteurs et agences d'architecture à travers l'Europe.">
  <link rel="canonical" href="https://eidosrender.es/fr/">

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
  <meta property="og:title" content="Eidos Render | Rendu 3D Architecture & Lancement Immobilier">
  <meta property="og:description" content="Partenaire visuel pour promoteurs immobiliers. Du projet architectural au lancement commercial.">
  <meta property="og:url" content="https://eidosrender.es/fr/">
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
        "@id": "https://eidosrender.es/fr/#organization",
        "name": "Eidos Render",
        "url": "https://eidosrender.es/fr/",
        "logo": "https://eidosrender.es/favicon.png",
        "email": "info@eidosrender.es",
        "telephone": "+34614459144",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Valence",
          "addressCountry": "ES"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://eidosrender.es/fr/#website",
        "url": "https://eidosrender.es/fr/",
        "name": "Eidos Render",
        "publisher": { "@id": "https://eidosrender.es/fr/#organization" }
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
      <a href="./" class="logo" aria-label="Eidos Render Accueil">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Navigation principale">
        <ul class="nav-links">
          <li><a href="#proyectos">Projets</a></li>
          <li><a href="#servicios">Services</a></li>
          <li><a href="#estudio">Studio</a></li>
          <li><a href="#prozess">Méthode</a></li>
          <li><a href="#contacto">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Sélecteur de langue">
          <a href="../" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../en/" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <a href="../de/" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="fr">FR</span>
        </div>

        <a href="#contacto" class="nav-cta">
          PARLONS DU PROJET →
        </a>
      </div>

      <button class="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-nav-overlay" aria-hidden="true">
    <div>
      <div class="mobile-lang-switcher" aria-label="Sélecteur de langue">
        <a href="../" data-lang="es" onclick="window.setLang('es')">ES</a>
        <a href="../en/" data-lang="en" onclick="window.setLang('en')">EN</a>
        <a href="../de/" data-lang="de" onclick="window.setLang('de')">DE</a>
        <span class="active" data-lang="fr">FR</span>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="#proyectos">Projets</a></li>
        <li><a href="#servicios">Services</a></li>
        <li><a href="#estudio">Studio</a></li>
        <li><a href="#prozess">Méthode</a></li>
        <li><a href="#contacto">Contact</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Visualisation & Lancement</div>
      <div>Valence · Envergure Européenne & Internationale</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main>

    <!-- 01. HERO -->
    <section class="section-hero bg-ink" id="hero">
      <div style="position: absolute; inset: 0; overflow: hidden; z-index: 1;">
        <picture>
          <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
          <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Rendu extérieur d'immeuble résidentiel — Eidos Render" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.42;" fetchpriority="high">
        </picture>
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(11,11,12,0.6) 0%, rgba(11,11,12,0.2) 50%, rgba(11,11,12,0.85) 100%);"></div>
      </div>

      <div class="container" style="position: relative; z-index: 2; margin-top: auto; padding-bottom: 80px;">
        <div class="kicker crimson">
          <span class="kicker-dot"></span>
          Direction Visuelle & Lancement Commercial
        </div>

        <h1 class="display-hero" style="color: var(--paper); max-width: 1300px; margin-bottom: 28px;">
          Du projet<br>
          architectural au<br>
          lancement.
        </h1>

        <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px; align-items: flex-end; border-top: 1px solid var(--line-dark); padding-top: 32px;">
          <p class="body-large" style="color: rgba(244, 243, 239, 0.85);">
            Nous partons de l'architecture. Nous concevons son image. Et nous la propulsons sur le marché grâce à un écosystème visuel complet dédié aux promoteurs, architectes et investisseurs.
          </p>
          <div style="text-align: right;">
            <a href="#proyectos" class="link-draw" style="color: var(--paper);">
              DÉCOUVRIR LES PROJETS SÉLECTIONNÉS ↓
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 02. MANIFESTE -->
    <section class="section bg-paper">
      <div class="container">
        <div class="grid-12">
          <div style="grid-column: 1 / 3;">
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Manifeste
            </span>
          </div>
          <div style="grid-column: 3 / 13;">
            <p class="manifesto-text" style="color: var(--ink); margin-bottom: 40px;">
              Le rendu est le produit. Chaque choix d'éclairage, de cadrage et de matière sublime la valeur de l'architecture. L'interface s'efface; l'image prend le devant.
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; border-top: 1px solid var(--line); padding-top: 40px;">
              <div>
                <span class="kicker signal" style="margin-bottom: 8px;">01 · Rigueur Architecturale</span>
                <p class="body-regular body-muted">
                  Nous analysons les plans techniques, la volumétrie et les matériaux avant même d'ouvrir les outils 3D.
                </p>
              </div>
              <div>
                <span class="kicker signal" style="margin-bottom: 8px;">02 · Direction Visuelle Unifiée</span>
                <p class="body-regular body-muted">
                  Une cohérence esthétique absolue de la première perspective jusqu'aux supports commerciaux.
                </p>
              </div>
              <div>
                <span class="kicker signal" style="margin-bottom: 8px;">03 · Efficacité Commerciale</span>
                <p class="body-regular body-muted">
                  Chaque perspective est composée pour séduire l'acquéreur haut de gamme et l'investisseur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 03. PORTFOLIO IN BG-INK -->
    <section class="section bg-ink" id="proyectos">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 80px; border-bottom: 1px solid var(--line-dark); padding-bottom: 32px;">
          <div>
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Archives de Production
            </span>
            <h2 class="display-title" style="color: var(--paper);">
              Projets Sélectionnés.
            </h2>
          </div>
          <div class="body-muted" style="text-align: right; font-family: var(--font-condensed); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">
            Sélection 2024 — 2026
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 90px;">

          <!-- 01 21:9 Full -->
          <article class="project-card">
            <div class="project-media-wrap ratio-21-9">
              <picture>
                <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
                <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Rendu 3D Façade Immeuble Neuf" loading="lazy">
              </picture>
            </div>
            <div class="project-meta-row">
              <div style="display: flex; gap: 24px; align-items: baseline;">
                <span class="project-num">01</span>
                <div>
                  <h3 class="project-title" style="color: var(--paper);">Ensemble Résidentiel Urbain</h3>
                  <div class="project-specs">Logement Collectif · Direction Artistique · Insertion Urbaine</div>
                </div>
              </div>
              <div class="project-specs" style="color: rgba(244,243,239,0.5);">Valence, Espagne · 2026</div>
            </div>
          </article>

          <!-- 02 & 03 Split -->
          <div class="grid-12">
            <article class="project-card" style="grid-column: span 5;">
              <div class="project-media-wrap ratio-4-5">
                <picture>
                  <source srcset="../img/infografia-exterior-zonas-comunes-obra-nueva.webp" type="image/webp">
                  <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="Perspectives 3D Espaces Communs" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 20px; align-items: baseline;">
                  <span class="project-num">02</span>
                  <div>
                    <h3 class="project-title" style="color: var(--paper); font-size: 1.5rem;">Espaces Communs & Piscine Infinity</h3>
                    <div class="project-specs">Aménagement Paysager · Solarium · Lumière Dorée</div>
                  </div>
                </div>
              </div>
            </article>

            <article class="project-card" style="grid-column: span 7; align-self: flex-end;">
              <div class="project-media-wrap ratio-16-9">
                <picture>
                  <source srcset="../img/render-exterior-vivienda-unifamiliar-piscina.webp" type="image/webp">
                  <img src="../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Villa Contemporaine" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 20px; align-items: baseline;">
                  <span class="project-num">03</span>
                  <div>
                    <h3 class="project-title" style="color: var(--paper); font-size: 1.5rem;">Villa en Flanc de Colline</h3>
                    <div class="project-specs">Résidence Individuelle · Intégration Topographique · Vue Mer</div>
                  </div>
                </div>
                <div class="project-specs" style="color: rgba(244,243,239,0.5);">Alicante, Espagne</div>
              </div>
            </article>
          </div>

          <!-- 04 21:9 Full -->
          <article class="project-card">
            <div class="project-media-wrap ratio-21-9">
              <picture>
                <source srcset="../img/infografia-3d-salon-moderno-doble-altura.webp" type="image/webp">
                <img src="../img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Attique Baigné de Lumière" loading="lazy">
              </picture>
            </div>
            <div class="project-meta-row">
              <div style="display: flex; gap: 24px; align-items: baseline;">
                <span class="project-num">04</span>
                <div>
                  <h3 class="project-title" style="color: var(--paper);">Penthouse Double Hauteur</h3>
                  <div class="project-specs">Architecture d'Intérieur · Volumes Épurés · Matériaux Nobles</div>
                </div>
              </div>
              <div class="project-specs" style="color: rgba(244,243,239,0.5);">Madrid, Espagne</div>
            </div>
          </article>

          <!-- 05 & 06 Split -->
          <div class="grid-12">
            <article class="project-card" style="grid-column: span 6;">
              <div class="project-media-wrap ratio-16-9">
                <picture>
                  <source srcset="../img/render-cocina-moderna-isla-madera.webp" type="image/webp">
                  <img src="../img/render-cocina-moderna-isla-madera-1600.jpg" alt="Cuisine d'Auteur avec Îlot" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 20px; align-items: baseline;">
                  <span class="project-num">05</span>
                  <div>
                    <h3 class="project-title" style="color: var(--paper); font-size: 1.4rem;">Cuisine d'Auteur avec Îlot</h3>
                    <div class="project-specs">Chêne Naturel · Lignes Continues · Lumière Chaude</div>
                  </div>
                </div>
              </div>
            </article>

            <article class="project-card" style="grid-column: span 6;">
              <div class="project-media-wrap ratio-16-9">
                <picture>
                  <source srcset="../img/infografia-dormitorio-principal-render-inmobiliario.webp" type="image/webp">
                  <img src="../img/infografia-dormitorio-principal-render-inmobiliario-1600.jpg" alt="Master Suite Résidentielle" loading="lazy">
                </picture>
              </div>
              <div class="project-meta-row">
                <div style="display: flex; gap: 20px; align-items: baseline;">
                  <span class="project-num">06</span>
                  <div>
                    <h3 class="project-title" style="color: var(--paper); font-size: 1.4rem;">Master Suite & Dressing</h3>
                    <div class="project-specs">Matières Textiles · Atmosphère Apaisée · Lumière Matinale</div>
                  </div>
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>

    <!-- 04. STUDIO / ECOSYSTÈME -->
    <section class="section bg-paper-card" id="estudio" style="border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);">
      <div class="container">
        <div class="grid-12">
          <div style="grid-column: 1 / 5;">
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Écosystème Intégré
            </span>
            <h2 class="display-title" style="margin-bottom: 24px;">
              Pas de rendus isolés.<br>Un système cohérent.
            </h2>
            <p class="body-regular body-muted" style="margin-bottom: 32px;">
              La commercialisation d'une promotion immobilière ne souffre pas du manque d'idées, mais de la fragmentation de son image. Nous unissons toutes les phases sous une même direction artistique exigeante.
            </p>
            <div style="padding-top: 16px;">
              <a href="#contacto" class="btn-editorial btn-dark">
                PARLONS DU PROJET →
              </a>
            </div>
          </div>

          <div style="grid-column: 6 / 13;">
            <div class="editorial-list">
              <div class="editorial-row">
                <span class="row-num">01</span>
                <div>
                  <h3 class="row-title">Architecture & Géométrie</h3>
                  <p class="body-regular body-muted">Compréhension des plans masse, volumes et spécificités constructives.</p>
                </div>
                <div class="row-meta">BIM / CAD</div>
              </div>

              <div class="editorial-row">
                <span class="row-num">02</span>
                <div>
                  <h3 class="row-title">Rendu 3D & Éclairage</h3>
                  <p class="body-regular body-muted">Lumières cinématographiques, matières photoréalistes et résolution 4K.</p>
                </div>
                <div class="row-meta">CGI & Film</div>
              </div>

              <div class="editorial-row">
                <span class="row-num">03</span>
                <div>
                  <h3 class="row-title">Identité de Marque & Naming</h3>
                  <p class="body-regular body-muted">Système typographique, palette de couleurs et positionnement.</p>
                </div>
                <div class="row-meta">Branding</div>
              </div>

              <div class="editorial-row">
                <span class="row-num">04</span>
                <div>
                  <h3 class="row-title">Dossiers de Vente & Plans</h3>
                  <p class="body-regular body-muted">Brochures haut de gamme et plans commerciaux 2D/3D meublés.</p>
                </div>
                <div class="row-meta">Print & PDF</div>
              </div>

              <div class="editorial-row">
                <span class="row-num">05</span>
                <div>
                  <h3 class="row-title">Site Web de Promotion</h3>
                  <p class="body-regular body-muted">Plateforme digitale immersive avec sélecteur de lots par étage.</p>
                </div>
                <div class="row-meta">Plateforme Web</div>
              </div>

              <div class="editorial-row">
                <span class="row-num">06</span>
                <div>
                  <h3 class="row-title">Acquisition d'Acquéreurs</h3>
                  <p class="body-regular body-muted">Campagnes ciblées sur Google et Meta basées sur les perspectives 3D.</p>
                </div>
                <div class="row-meta">Acquisition</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 05. VIDEO SECTION -->
    <section class="section bg-ink" style="color: var(--paper);">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 24px;">
          <div>
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Cinéma & Mouvement
            </span>
            <h2 class="display-title" style="color: var(--paper);">L'architecture en mouvement.</h2>
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.7); max-width: 480px;">
            Le film architectural apporte une dimension émotionnelle unique : variations de lumière naturelle, mouvement des matières et travellings immersifs.
          </p>
        </div>

        <div style="position: relative; aspect-ratio: 16/9; width: 100%; overflow: hidden; background: #000;">
          <video style="width: 100%; height: 100%; object-fit: cover;" autoplay muted loop playsinline poster="../img/render-fachada-edificio-obra-nueva-1600.jpg">
            <source src="../img/video-reel-patio.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </section>

    <!-- 06. SERVICES -->
    <section class="section bg-paper" id="servicios">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 56px; border-bottom: 1px solid var(--line); padding-bottom: 24px;">
          <div>
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Prestations Complètes
            </span>
            <h2 class="display-title">Du concept au lancement.</h2>
          </div>
          <div>
            <a href="services.html" class="link-draw">DÉCOUVRIR NOS SERVICES →</a>
          </div>
        </div>

        <div class="grid-12">
          <!-- 01 -->
          <div style="grid-column: span 4; border-top: 1px solid var(--line); padding-top: 24px; margin-bottom: 48px;">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 16px;">01</div>
            <h3 class="display-sub" style="margin-bottom: 12px;">Perspectives 3D</h3>
            <p class="body-regular body-muted" style="margin-bottom: 20px;">
              Extérieurs, intérieurs, espaces partagés et intégrations paysagères en résolution native 4K.
            </p>
            <a href="services/rendu-3d.html" class="link-draw">EN SAVOIR PLUS →</a>
          </div>

          <!-- 02 -->
          <div style="grid-column: span 4; border-top: 1px solid var(--line); padding-top: 24px; margin-bottom: 48px;">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 16px;">02</div>
            <h3 class="display-sub" style="margin-bottom: 12px;">Film 3D & Animation</h3>
            <p class="body-regular body-muted" style="margin-bottom: 20px;">
              Traversées immersives continues, présentations horizontales 16:9 et formats verticaux 9:16.
            </p>
            <a href="services/video-3d.html" class="link-draw">EN SAVOIR PLUS →</a>
          </div>

          <!-- 03 -->
          <div style="grid-column: span 4; border-top: 1px solid var(--line); padding-top: 24px; margin-bottom: 48px;">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 16px;">03</div>
            <h3 class="display-sub" style="margin-bottom: 12px;">Identité de Marque</h3>
            <p class="body-regular body-muted" style="margin-bottom: 20px;">
              Naming, logotype, charte graphique et principes d'habillage pour showroom et palissades.
            </p>
            <a href="services/branding.html" class="link-draw">EN SAVOIR PLUS →</a>
          </div>

          <!-- 04 -->
          <div style="grid-column: span 4; border-top: 1px solid var(--line); padding-top: 24px;">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 16px;">04</div>
            <h3 class="display-sub" style="margin-bottom: 12px;">Supports Commerciaux</h3>
            <p class="body-regular body-muted" style="margin-bottom: 20px;">
              Plaquettes de vente éditoriales, plans 2D/3D texturés et fiches individuelles par typologie.
            </p>
            <a href="services/supports-commerciaux.html" class="link-draw">EN SAVOIR PLUS →</a>
          </div>

          <!-- 05 -->
          <div style="grid-column: span 4; border-top: 1px solid var(--line); padding-top: 24px;">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 16px;">05</div>
            <h3 class="display-sub" style="margin-bottom: 12px;">Site Web de Promotion</h3>
            <p class="body-regular body-muted" style="margin-bottom: 20px;">
              Plateforme digitale rapide avec consultation dynamique des lots et intégration CRM.
            </p>
            <a href="services/site-web-immobilier.html" class="link-draw">EN SAVOIR PLUS →</a>
          </div>

          <!-- 06 -->
          <div style="grid-column: span 4; border-top: 1px solid var(--line); padding-top: 24px;">
            <div class="display-num" style="color: var(--signal-text); margin-bottom: 16px;">06</div>
            <h3 class="display-sub" style="margin-bottom: 12px;">Acquisition d'Acquéreurs</h3>
            <p class="body-regular body-muted" style="margin-bottom: 20px;">
              Campagnes ultra-ciblées sur Google Ads et Meta Ads basées sur les visuels 3D du projet.
            </p>
            <a href="services/acquisition.html" class="link-draw">EN SAVOIR PLUS →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 07. MÉTHODE -->
    <section class="section bg-paper-card" id="prozess" style="border-top: 1px solid var(--line);">
      <div class="container">
        <div class="grid-12">
          <div style="grid-column: 1 / 4;">
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Méthodologie
            </span>
            <h2 class="display-title" style="margin-bottom: 20px;">Rigueur & Process.</h2>
            <p class="body-regular body-muted">
              De l'analyse géométrique préliminaire jusqu'au lancement commercial : un cheminement jalonné et maîtrisé.
            </p>
          </div>

          <div style="grid-column: 5 / 13;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 32px;">
              <div style="border-top: 1px solid var(--line); padding-top: 20px;">
                <span class="row-num" style="color: var(--crimson);">01</span>
                <h4 class="display-sub" style="font-size: 1.15rem; margin: 12px 0 8px;">CAD & Géométrie</h4>
                <p class="body-regular body-muted" style="font-size: 0.92rem;">Lecture des plans architecturaux, modélisation des masses et validation des volumes.</p>
              </div>

              <div style="border-top: 1px solid var(--line); padding-top: 20px;">
                <span class="row-num" style="color: var(--crimson);">02</span>
                <h4 class="display-sub" style="font-size: 1.15rem; margin: 12px 0 8px;">Cadrage & Perspective</h4>
                <p class="body-regular body-muted" style="font-size: 0.92rem;">Définition des focales, hauteur d'yeux et lignes de fuite architecturales.</p>
              </div>

              <div style="border-top: 1px solid var(--line); padding-top: 20px;">
                <span class="row-num" style="color: var(--crimson);">03</span>
                <h4 class="display-sub" style="font-size: 1.15rem; margin: 12px 0 8px;">Lumière & Matière</h4>
                <p class="body-regular body-muted" style="font-size: 0.92rem;">Application de matériaux réalistes, intégration végétale et atmosphère lumineuse.</p>
              </div>

              <div style="border-top: 1px solid var(--line); padding-top: 20px;">
                <span class="row-num" style="color: var(--crimson);">04</span>
                <h4 class="display-sub" style="font-size: 1.15rem; margin: 12px 0 8px;">Rendu 4K</h4>
                <p class="body-regular body-muted" style="font-size: 0.92rem;">Calcul haute résolution pour grand format et étalonnage chromatique précis.</p>
              </div>

              <div style="border-top: 1px solid var(--line); padding-top: 20px;">
                <span class="row-num" style="color: var(--crimson);">05</span>
                <h4 class="display-sub" style="font-size: 1.15rem; margin: 12px 0 8px;">Supports Commerciaux</h4>
                <p class="body-regular body-muted" style="font-size: 0.92rem;">Mise en page des plaquettes de vente, plans et modules digitaux.</p>
              </div>

              <div style="border-top: 1px solid var(--line); padding-top: 20px;">
                <span class="row-num" style="color: var(--crimson);">06</span>
                <h4 class="display-sub" style="font-size: 1.15rem; margin: 12px 0 8px;">Lancement Commercial</h4>
                <p class="body-regular body-muted" style="font-size: 0.92rem;">Déploiement des campagnes d'acquisition pour générer les premières réservations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 08. CONTACT -->
    <section class="section bg-ink" id="contacto" style="color: var(--paper);">
      <div class="container">
        <div class="grid-12">
          
          <div style="grid-column: 1 / 7;">
            <span class="kicker crimson">
              <span class="kicker-dot"></span>
              Contact Direct
            </span>
            <h2 class="display-hero" style="color: var(--paper); line-height: 1.05; margin-bottom: 24px;">
              Du projet<br>au lancement.<br>Échangeons.
            </h2>
            <p class="body-large" style="color: rgba(244,243,239,0.8); max-width: 500px; margin-bottom: 40px;">
              Si vous préparez une opération immobilière et souhaitez définir son image, ses outils commerciaux et sa stratégie de mise en marché, partagez-nous les détails du projet.
            </p>

            <div style="display: flex; flex-direction: column; gap: 24px; border-top: 1px solid var(--line-dark); padding-top: 32px;">
              <div>
                <span class="kicker signal" style="margin-bottom: 4px;">E-mail Direct</span>
                <div>
                  <a href="mailto:info@eidosrender.es" class="link-draw" style="font-size: 1.25rem; font-family: var(--font-display); text-transform: none; color: var(--paper); letter-spacing: 0;">
                    info@eidosrender.es
                  </a>
                </div>
              </div>
              <div style="margin-top: 12px;">
                <span class="kicker signal" style="margin-bottom: 4px;">Ligne Directe</span>
                <div>
                  <a href="tel:+34614459144" class="link-draw" style="font-size: 1.1rem; color: var(--paper);">
                    +34 614 45 91 44
                  </a>
                </div>
              </div>
              <div style="margin-top: 12px;">
                <span class="kicker signal" style="margin-bottom: 4px;">Studio & Rayonnement</span>
                <p class="body-regular" style="color: rgba(244,243,239,0.65);">
                  Valence, Espagne · Projets menés en France, Suisse, Belgique et dans toute l'Europe.
                </p>
              </div>
            </div>
          </div>

          <!-- Minimalist Form -->
          <div style="grid-column: 8 / 13;">
            <div style="border: 1px solid var(--line-dark); padding: clamp(32px, 5vw, 60px);">
              <div class="kicker signal" style="margin-bottom: 24px;">Étude de Projet</div>
              
              <form class="form-minimal" method="POST" action="../enviar.php">
                <div class="field-group">
                  <label for="fr-nombre">Nom & Prénom *</label>
                  <input type="text" id="fr-nombre" name="nombre" required placeholder="ex. Alexandre Laurent">
                  <span class="field-error">Veuillez renseigner votre nom.</span>
                </div>

                <div class="field-group">
                  <label for="fr-empresa">Promoteur / Agence d'Architecture</label>
                  <input type="text" id="fr-empresa" name="empresa" placeholder="ex. Laurent Promotion">
                </div>

                <div class="field-group">
                  <label for="fr-email">Courriel Professionnel *</label>
                  <input type="email" id="fr-email" name="email" required placeholder="a.laurent@promotion.fr">
                  <span class="field-error">Veuillez indiquer une adresse email valide.</span>
                </div>

                <div class="field-group">
                  <label for="fr-telefono">Numéro de Téléphone</label>
                  <input type="tel" id="fr-telefono" name="telefono" placeholder="+33 1 42 68 00 00">
                </div>

                <div class="field-group">
                  <label for="fr-mensaje">Présentation de l'Opération (Ville, Nb de lots, Planning) *</label>
                  <textarea id="fr-mensaje" name="mensaje" rows="3" required placeholder="Programme résidentiel de 28 logements, lancement commercial prévu au T3..."></textarea>
                  <span class="field-error">Veuillez décrire brièvement l'opération.</span>
                </div>

                <div style="padding-top: 16px;">
                  <button type="submit" class="btn-editorial btn-crimson" style="width: 100%; justify-content: center;">
                    DEMANDER UNE ÉTUDE DU PROJET →
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
            Partenaire visuel pour développements immobiliers. Du projet architectural au lancement commercial.
          </p>
        </div>

        <div>
          <div class="footer-col-title">Navigation</div>
          <ul class="footer-links">
            <li><a href="#proyectos">Projets</a></li>
            <li><a href="#servicios">Services</a></li>
            <li><a href="#estudio">Studio</a></li>
            <li><a href="#prozess">Méthode</a></li>
            <li><a href="#contacto">Contact</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Services</div>
          <ul class="footer-links">
            <li><a href="services/rendu-3d.html">Rendu 3D</a></li>
            <li><a href="services/video-3d.html">Film 3D</a></li>
            <li><a href="services/branding.html">Branding</a></li>
            <li><a href="services/supports-commerciaux.html">Dossiers de Vente</a></li>
            <li><a href="services/site-web-immobilier.html">Site Web</a></li>
            <li><a href="services/acquisition.html">Acquisition</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Studio</div>
          <ul class="footer-links">
            <li><a href="mailto:info@eidosrender.es">info@eidosrender.es</a></li>
            <li><a href="tel:+34614459144">+34 614 45 91 44</a></li>
            <li><span style="color: rgba(244,243,239,0.5);">Valence, Espagne</span></li>
            <li><a href="faq.html">Questions Fréquentes</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 Eidos Render. Tous droits réservés.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../" onclick="window.setLang('es')">ES</a> ·
            <a href="../en/" onclick="window.setLang('en')">EN</a> ·
            <a href="../de/" onclick="window.setLang('de')">DE</a> ·
            <span style="color: var(--crimson-on-dark); font-weight: 700;">FR</span>
          </div>
          <a href="mentions-legales.html">Mentions Légales</a>
          <a href="politique-de-confidentialite.html">Confidentialité</a>
          <a href="politique-des-cookies.html">Cookies</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>
`;

writeFile('fr/index.html', frIndexHtml);

console.log('Synchronized DE and FR Index pages with exact portfolio and verified assets.');
