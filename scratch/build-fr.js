const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function writeFile(relPath, content) {
  const fullPath = path.join(root, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Created FR file:', relPath);
}

// -------------------------------------------------------------
// 1. fr/index.html
// -------------------------------------------------------------
const frIndex = `<!DOCTYPE html>
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
  
  <title>Eidos Render — Du Projet Architectural au Lancement Commercial</title>
  <meta name="description" content="Eidos Render transforme les programmes immobiliers en expériences visuelles et commerciales d'exception. Rendu 3D, film, identité de marque, supports commerciaux, site web et acquisition pour promoteurs immobiliers.">
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
  <meta property="og:title" content="Eidos Render — Du Projet Architectural au Lancement Commercial">
  <meta property="og:description" content="Partenaire créatif et visuel pour le lancement commercial de programmes immobiliers en Europe.">
  <meta property="og:url" content="https://eidosrender.es/fr/">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">
  <meta property="og:locale" content="fr_FR">

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Eidos Render — Du Projet Architectural au Lancement Commercial">
  <meta name="twitter:description" content="Rendus 3D, film architectural, branding, site web et acquisition pour programmes immobiliers.">
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
        "@id": "https://eidosrender.es/fr/#organization",
        "name": "Eidos Render",
        "url": "https://eidosrender.es/fr/",
        "logo": "https://eidosrender.es/favicon.png",
        "image": "https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg",
        "description": "Partenaire créatif et visuel pour le lancement commercial de projets immobiliers en Europe. Visualisation 3D, film, identité de marque, supports commerciaux, site web et acquisition.",
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
          "description": "Systèmes intégrés de lancement commercial pour programmes immobiliers à partir de 12 000 €"
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
<body>

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
          <li><a href="#projets">Projets</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="#processus">Processus</a></li>
          <li><a href="#eidos">À propos</a></li>
          <li><a href="contact.html">Contact</a></li>
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

        <a href="#contact" class="nav-cta">
          ÉCHANGEONS SUR LE PROJET →
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
        <li><a href="#projets">Projets</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="#processus">Processus</a></li>
        <li><a href="#eidos">À propos</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Real Estate Launch</div>
      <div>Valence · Rayonnement national et européen</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main>

    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="hero-media">
        <picture>
          <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
          <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Rendu de façade résidentielle neuve — Eidos Render" class="hero-poster" fetchpriority="high">
        </picture>
        <video class="hero-video" autoplay muted loop playsinline poster="../img/render-fachada-edificio-obra-nueva.webp">
          <source src="../img/video-reel-patio.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>
      </div>

      <div class="container hero-content">
        <div class="hero-subconcept">
          Direction Visuelle · Image 3D · Identité de Marque · Supports Commerciaux · Site Web · Acquisition
        </div>

        <h1 class="hero-title display-hero">
          Du projet<br>
          architectural au<br>
          lancement.
        </h1>

        <div class="hero-bottom-grid">
          <p class="hero-desc">
            Direction visuelle, rendus 3D, branding, supports commerciaux, site web et acquisition d'acheteurs qualifiés pour promoteurs immobiliers.
          </p>
          <div class="hero-actions">
            <a href="#contact" class="btn btn-crimson">
              ÉCHANGEONS SUR LE PROJET →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- NARRATIVE -->
    <section class="section intro-section bg-paper">
      <div class="container">
        <div class="kicker crimson">
          Vision Intégrée
        </div>

        <div class="intro-grid">
          <h2 class="display-title intro-title">
            Un programme<br>
            doit raconter<br>
            une histoire.
          </h2>

          <div class="intro-copy">
            <p>
              Architecture, identité, images 3D, brochures commerciales, site web et campagnes digitales doivent opérer comme les rouages d'un système unique et cohérent.
            </p>
            <p>
              Chez Eidos Render, nous développons ce système de la première esquisse visuelle jusqu'à l'activation commerciale sur le marché.
            </p>
            <div style="margin-top: 36px;">
              <a href="#services" class="link-arrow">
                DÉCOUVRIR LE SYSTÈME DE LANCEMENT →
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
        <div class="kicker crimson" style="margin-bottom: 24px;">Positionnement</div>
        <h2 class="display-title" style="font-size: clamp(2.2rem, 5vw, 4.4rem); line-height: 1.05; max-width: 1100px; text-transform: uppercase; letter-spacing: -0.02em;">
          Nous partons de l'architecture.<br>
          Nous créons son identité.<br>
          <span style="color: var(--crimson);">Et nous la projetons sur le marché.</span>
        </h2>
        <p class="body-large body-muted" style="max-width: 720px; margin-top: 32px;">
          Eidos Render est un studio créatif et visuel spécialisé dans les programmes immobiliers. Nous accompagnons les promoteurs et architectes depuis la définition esthétique jusqu'au lancement commercial actif.
        </p>
      </div>
    </section>

    <!-- CAPABILITIES -->
    <section class="section bg-ink" id="services">
      <div class="container">
        <div class="services-header">
          <div>
            <div class="kicker crimson">
              Service Intégral
            </div>
            <h2 class="display-title" style="color: var(--paper);">
              Une même vision.<br>
              Toutes les pièces.
            </h2>
          </div>
          <div style="max-width: 440px;" class="body-muted">
            De la direction artistique initiale jusqu'à la captation directe des acquéreurs pour votre programme.
          </div>
        </div>

        <div class="service-accordion">

          <!-- 01 -->
          <div class="service-item active">
            <div class="service-summary">
              <span class="service-num">01</span>
              <h3 class="service-name">Direction & Identité</h3>
              <p class="service-short">Concept créatif, positionnement visuel, naming et système graphique sur mesure pour le projet.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Nous définissons l'univers conceptuel du programme avant toute production 3D. Naming, typographies, univers chromatique et charte de ton pour garantir une cohérence absolue sur tous les supports.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Charte d'identité de marque immobilière</li>
                    <li>Système typographique et palette de couleurs</li>
                    <li>Déclinaisons pour palissades de chantier et bulles de vente</li>
                    <li>Modèles pour réseaux de commercialisation et courtiers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 02 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">02</span>
              <h3 class="service-name">Image Architecturale 3D</h3>
              <p class="service-short">Façades, intérieurs, espaces communs, lifestyle et rendus photoréalistes en haute résolution.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Notre savoir-faire fondamental : des perspectives photoréalistes qui construisent une atmosphère, capturent la lumière naturelle et suscitent l'émotion de l'acquéreur avant le début des travaux.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Rendus photoréalistes pour grands formats et presse éditoriale</li>
                    <li>Photomontages par drone dans l'environnement réel</li>
                    <li>Gestion pointue de l'éclairage et des volumes</li>
                    <li>Focus sur les matières nobles, boiseries et végétalisation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 03 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">03</span>
              <h3 class="service-name">Vidéo & Animation 3D</h3>
              <p class="service-short">Film 3D cinématographique, visites virtuelles, transitions fluides et formats dynamiques pour réseaux sociaux.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Le mouvement révèle les volumes, traduit l'échelle réelle des espaces partagés et multiplie l'engagement lors des présentations aux investisseurs et campagnes digitales.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Étalonnage cinématographique et conception sonore immersive</li>
                    <li>Formats verticaux optimisés pour Meta et YouTube</li>
                    <li>Films de présentation commerciale pour bureaux de vente</li>
                    <li>Clips dynamiques pour écrans d'exposition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 04 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">04</span>
              <h3 class="service-name">Supports Commerciaux</h3>
              <p class="service-short">Brochure commerciale éditoriale, plans de vente 2D/3D meublés, cartes de situation et fiches typologiques.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Nous transformons les plans techniques en outils d'aide à la vente clairs, élégants et rassurants pour les commerciaux et les acquéreurs finaux.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Brochures imprimées de prestige et dossiers PDF interactifs</li>
                    <li>Plans d'étage texturés et meublés à l'échelle</li>
                    <li>Cartes de situation détaillant transports, écoles et commodités</li>
                    <li>Fiches par appartement avec surfaces exactes et orientation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 05 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">05</span>
              <h3 class="service-name">Site Web de Promotion</h3>
              <p class="service-short">UX/UI architecturale, développement sur mesure, sélecteur d'appartements, vitesse extrême et génération de leads.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Le quartier général digital du lancement. Une plateforme conçue sur mesure pour immerger l'internaute dans l'architecture, filtrer les lots et acheminer les demandes vers l'équipe commerciale.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Design responsive avec typographie éditoriale</li>
                    <li>Visualiseur interactif de plans et disponibilités</li>
                    <li>Optimisation poussée de la vitesse (Core Web Vitals)</li>
                    <li>Interfaçage CRM et traçabilité des conversions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 06 -->
          <div class="service-item">
            <div class="service-summary">
              <span class="service-num">06</span>
              <h3 class="service-name">Lancement & Acquisition</h3>
              <p class="service-short">Google Ads, Meta Ads ciblées, tests continus de visuels 3D, suivi analytique et qualification hebdomadaire.</p>
              <div class="service-toggle-icon">+</div>
            </div>
            <div class="service-details">
              <div class="service-details-inner">
                <div>
                  <p class="body-large" style="color: rgba(244,243,239,0.85); margin-bottom: 16px;">
                    Une fois les visuels et le site opérationnels, nous activons la captation ciblée d'acheteurs potentiels, en ajustant les messages et perspectives en fonction des retours réels.
                  </p>
                </div>
                <div>
                  <ul class="service-deliverables">
                    <li>Ciblage ultra-local et intentions d'achat vérifiées</li>
                    <li>A/B testing continu d'angles 3D et d'accroches</li>
                    <li>Rapports réguliers axés sur les contacts qualifiés</li>
                    <li>Optimisation constante du taux de transformation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style="margin-top: 56px; text-align: center;">
          <a href="#contact" class="btn btn-crimson">
            ÉCHANGEONS SUR LE PROJET →
          </a>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO -->
    <section class="section bg-paper" id="projets">
      <div class="container">
        <div class="portfolio-header">
          <div>
            <div class="kicker crimson">
              Archive Sélectionnée
            </div>
            <h2 class="display-title">
              Projets Réalisés.
            </h2>
          </div>
          <div class="body-regular body-muted" style="max-width: 440px;">
            Visualisation 3D de haute précision pour programmes résidentiels, ensembles d'envergure et villas d'exception en Europe.
          </div>
        </div>

        <div class="editorial-portfolio">

          <!-- 01 -->
          <article class="project-card span-8">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/render-fachada-edificio-obra-nueva.webp" type="image/webp">
                  <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Rendu de façade résidentielle collective" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Ensemble Résidentiel</h3>
                  <div class="project-services-line">Logements Collectifs Neufs · Direction Visuelle · Insertion Urbaine</div>
                </div>
                <div class="project-meta">Valence, ES</div>
              </div>
            </div>
          </article>

          <!-- 02 -->
          <article class="project-card span-4 tall">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/infografia-exterior-zonas-comunes-obra-nueva.webp" type="image/webp">
                  <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="Espaces communs et piscine" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Espaces Communs & Paysagisme</h3>
                  <div class="project-services-line">Visualisation 3D · Piscines & Jardins · Vidéo</div>
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
                  <img src="../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Villa moderne avec piscine" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Villa Contemporaine</h3>
                  <div class="project-services-line">Villa Individuelle · Terrasses & Piscine · Vue Mer</div>
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
                  <img src="../img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Penthouse en duplex séjour double hauteur" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Penthouse en Duplex</h3>
                  <div class="project-services-line">Architecture d'Intérieur · Rendu 3D Haute Définition · Direction Artistique</div>
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
                  <img src="../img/render-cocina-moderna-isla-madera-1600.jpg" alt="Cuisine contemporaine avec îlot central" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Cuisine d'Auteur</h3>
                  <div class="project-services-line">Matériaux Nobles · Ébénisterie · Lumière Naturelle</div>
                </div>
                <div class="project-meta">Détail</div>
              </div>
            </div>
          </article>

          <!-- 06 -->
          <article class="project-card span-6">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/infografia-dormitorio-principal-render-inmobiliario.webp" type="image/webp">
                  <img src="../img/infografia-dormitorio-principal-render-inmobiliario-1600.jpg" alt="Suite parentale contemporaine" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Suite Parentale</h3>
                  <div class="project-services-line">Atmosphère Sereine · Textures Textiles · Mobilier sur Mesure</div>
                </div>
                <div class="project-meta">Suite</div>
              </div>
            </div>
          </article>

        </div>

        <div style="margin-top: 56px; text-align: center;">
          <a href="projets.html" class="btn btn-outline-ink">
            DÉCOUVRIR TOUS LES PROJETS →
          </a>
        </div>
      </div>
    </section>

    <!-- 3D SHOWCASE -->
    <section class="section bg-ink" id="visualisation">
      <div class="container">
        <div class="kicker crimson">
          Visualisation 3D
        </div>
        
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: flex-end; margin-bottom: 50px;">
          <h2 class="display-title" style="color: var(--paper);">
            L'image avant<br>
            la construction.
          </h2>
          <div class="body-large" style="color: rgba(244,243,239,0.8);">
            Nous visualisons l'architecture avant qu'elle ne prenne forme.<br>
            Des visuels capables d'expliquer le programme, d'installer une atmosphère et de déclencher l'acte d'achat.
          </div>
        </div>

        <div class="image-showcase-grid">
          <div class="image-showcase-item large">
            <picture>
              <source srcset="../img/infografia-3d-salon-moderno-doble-altura.webp" type="image/webp">
              <img src="../img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Rendu séjour cathédrale lumière naturelle" loading="lazy">
            </picture>
            <div class="image-showcase-caption">
              <span>Intérieurs · Atmosphère Lumineuse</span>
              <span>Espace Ouvert</span>
            </div>
          </div>

          <div class="image-showcase-item">
            <picture>
              <source srcset="../img/render-cocina-moderna-isla-madera.webp" type="image/webp">
              <img src="../img/render-cocina-moderna-isla-madera-1600.jpg" alt="Cuisine avec îlot bois" loading="lazy">
            </picture>
            <div class="image-showcase-caption">
              <span>Lifestyle & Cuisines</span>
              <span>Matières Nobles</span>
            </div>
          </div>

          <div class="image-showcase-item">
            <picture>
              <source srcset="../img/render-bano-moderno-ducha-minimalista.webp" type="image/webp">
              <img src="../img/render-bano-moderno-ducha-minimalista-1600.jpg" alt="Salle de bain minimaliste" loading="lazy">
            </picture>
            <div class="image-showcase-caption">
              <span>Détails & Finitions</span>
              <span>Béton Ciré</span>
            </div>
          </div>

          <div class="image-showcase-item large">
            <picture>
              <source srcset="../img/infografia-exterior-zonas-comunes-obra-nueva.webp" type="image/webp">
              <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="Extérieurs espaces paysagers et piscine" loading="lazy">
            </picture>
            <div class="image-showcase-caption">
              <span>Extérieurs · Espaces Communs</span>
              <span>Piscine & Jardins</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO -->
    <section class="section bg-crimson" id="video">
      <div class="container">
        <div class="kicker paper">
          Vidéo & Mouvement
        </div>

        <div class="video-section-grid">
          <div>
            <h2 class="display-title" style="color: var(--paper); margin-bottom: 28px;">
              Du rendu statique<br>
              à l'expérience<br>
              cinématique.
            </h2>
            <p class="body-large" style="color: rgba(244,243,239,0.9); margin-bottom: 32px;">
              Le mouvement révèle les circulations intérieures, donne l'échelle réelle des pièces et prolonge l'impact commercial d'un programme immobilier.
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
            <div class="kicker crimson">Identité de Programme</div>
            <h2 class="display-title" style="margin-bottom: 24px;">
              Un programme<br>
              doit posséder sa<br>
              propre identité.
            </h2>
            <p class="body-large body-muted" style="margin-bottom: 32px;">
              Une marque immobilière ne se résume pas à un logo. C'est le positionnement stratégique qui justifie le prix au mètre carré, la voix qui parle à l'acquéreur cible et la cohérence graphique enveloppant chaque support commercial.
            </p>
            <a href="contact.html" class="link-arrow">
              CONSULTER UN PROJET D'IDENTITÉ →
            </a>
          </div>

          <div class="feature-cards-grid">
            <div class="feature-card">
              <div class="feature-card-num">01</div>
              <h3 class="feature-card-title">Naming & Concept</h3>
              <p class="feature-card-copy">Recherche de nom porteuse de sens, facile à mémoriser et juridiquement protégeable.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">02</div>
              <h3 class="feature-card-title">Système Graphique</h3>
              <p class="feature-card-copy">Typographies, grilles éditoriales et palettes chromatiques en accord avec les matériaux de l'architecture.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">03</div>
              <h3 class="feature-card-title">Direction Visuelle</h3>
              <p class="feature-card-copy">Directives de cadrage, de stylisme et de température de lumière appliquées à toutes les images 3D.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">04</div>
              <h3 class="feature-card-title">Déclinaisons Sur Site</h3>
              <p class="feature-card-copy">Palissades de chantier, drapeaux, habillage de bureau de vente et coffrets de remise des clés.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COLLATERAL -->
    <section class="section bg-ink" id="supports">
      <div class="container">
        <div class="feature-split reverse">
          <div>
            <div class="kicker crimson">Supports Commerciaux</div>
            <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
              Du plan technique<br>
              à l'outil de vente<br>
              efficace.
            </h2>
            <p class="body-large" style="color: rgba(244,243,239,0.8); margin-bottom: 32px;">
              Nous transformons des plans d'architecte complexes en supports commerciaux clairs, esthétiques et convaincants.
            </p>
            <p class="body-regular" style="color: rgba(244,243,239,0.65);">
              Des documents qui renforcent l'efficacité des commercialisateurs et inspirent une totale confiance aux acquéreurs.
            </p>
          </div>

          <div class="feature-cards-grid">
            <div class="feature-card">
              <div class="feature-card-num">A</div>
              <h3 class="feature-card-title">Dossier de Vente</h3>
              <p class="feature-card-copy">Brochures imprimées haut de gamme et PDF interactifs présentant la notice descriptive et la philosophie du projet.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">B</div>
              <h3 class="feature-card-title">Plans Commerciaux</h3>
              <p class="feature-card-copy">Plans 2D/3D meublés, texturés et mis à l'échelle pour une compréhension spatiale immédiate.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">C</div>
              <h3 class="feature-card-title">Cartes & Environnement</h3>
              <p class="feature-card-copy">Infographies géographiques situant les accès, transports en commun, écoles et espaces verts.</p>
            </div>
            <div class="feature-card">
              <div class="feature-card-num">D</div>
              <h3 class="feature-card-title">Fiches Typologiques</h3>
              <p class="feature-card-copy">Feuillets par lot avec surfaces habitables, terrasses, orientation solaire et perspectives associées.</p>
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
            <div class="kicker crimson">Présence Digitale</div>
            <h2 class="display-title" style="margin-bottom: 24px;">
              Un site qui ne fait<br>
              pas que présenter.<br>
              Il concrétise le lancement.
            </h2>
            <p class="body-large body-muted" style="margin-bottom: 32px;">
              Le site web du programme est le centre névralgique de la commercialisation. Il concentre l'attention du marché, informe les prospects avec clarté et achemine les demandes d'achat qualifiées directement vers votre équipe de vente.
            </p>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 14px; margin-bottom: 36px; font-size: 0.95rem;">
              <li><strong>— UX / UI Architecturale :</strong> Immersion visuelle totale sans lenteur technique ni friction.</li>
              <li><strong>— Développement Sur Mesure :</strong> Code sémantique, affichage ultrarapide et ergonomie mobile irréprochable.</li>
              <li><strong>— Lots & Prestations :</strong> Plans de masse, notice de finitions et brochure éditoriale téléchargeable.</li>
              <li><strong>— Analyse & Connexion CRM :</strong> Mesure granulaire des interactions et routage instantané des contacts.</li>
            </ul>
            <a href="contact.html" class="btn btn-crimson">
              PLANIFIER LE SITE DU PROGRAMME →
            </a>
          </div>

          <div>
            <div style="background-color: var(--ink); color: var(--paper); padding: 48px; border-left: 4px solid var(--crimson);">
              <span class="kicker crimson">Écosystème Connecté</span>
              <h3 class="display-sub" style="margin-bottom: 20px;">Conçu pour soutenir la vente en VEFA.</h3>
              <p class="body-regular" style="color: rgba(244,243,239,0.75); margin-bottom: 24px;">
                Nous bannissons les modèles génériques. Chaque site est développé avec un code épuré respectant les Core Web Vitals, et une hiérarchie visuelle qui guide l'acquéreur vers la compréhension du projet ou le téléchargement de la brochure.
              </p>
              <div style="border-top: 1px solid var(--line-dark); padding-top: 20px; font-family: 'Space Grotesk', sans-serif; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--signal);">
                Analytics · Meta Pixel · Google Tag · Connexion CRM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ACQUISITION -->
    <section class="section bg-ink" id="acquisition">
      <div class="container">
        <div class="kicker crimson">Trafic & Leads Qualifiés</div>

        <div style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 60px; margin-bottom: 60px;">
          <h2 class="display-title" style="color: var(--paper);">
            Quand l'image est prête,<br>
            le lancement débute.
          </h2>
          <div class="body-large" style="color: rgba(244,243,239,0.8);">
            Nous refusons les promesses creuses de volume non qualifié. Nous opérons l'acquisition par un ciblage pointu et une optimisation hebdomadaire des créations.
          </div>
        </div>

        <div class="feature-cards-grid">
          <div class="feature-card">
            <div class="feature-card-num">01</div>
            <h3 class="feature-card-title">Google Search Ads</h3>
            <p class="feature-card-copy">Captation active des personnes recherchant des programmes neufs, appartements avec terrasse ou villas dans votre commune exacte.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-num">02</div>
            <h3 class="feature-card-title">Meta Ads Ciblées</h3>
            <p class="feature-card-copy">Campagnes sur Instagram et Facebook segmentées par niveau de patrimoine, centres d'intérêt d'investissement et profil résidentiel.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-num">03</div>
            <h3 class="feature-card-title">Visuels Évolutifs</h3>
            <p class="feature-card-copy">Renouvellement permanent des formats stories, reels et carrousels selon les résultats observés en direct.</p>
          </div>
          <div class="feature-card">
            <div class="feature-card-num">04</div>
            <h3 class="feature-card-title">Tracking & Qualification</h3>
            <p class="feature-card-copy">Mesure précise des appels et téléchargements de dossiers, avec exclusion stricte des requêtes hors cible.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="section bg-paper" id="processus">
      <div class="container">
        <div class="kicker crimson">Méthodologie Éprouvée</div>
        <h2 class="display-title" style="margin-bottom: 24px;">
          Du concept initial<br>
          au lancement.
        </h2>
        <p class="body-large body-muted" style="max-width: 720px; margin-bottom: 56px;">
          Une direction artistique unique coordonne chaque phase, des plans architecturaux d'origine jusqu'à l'activation sur le marché.
        </p>

        <div class="process-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
          <div class="process-card">
            <div class="process-card-num">01</div>
            <h3 class="process-card-title">Direction & Identité</h3>
            <p class="process-card-desc">Concept créatif, positionnement visuel, naming et système graphique sur mesure.</p>
          </div>
          <div class="process-card">
            <div class="process-card-num">02</div>
            <h3 class="process-card-title">Image 3D & Film</h3>
            <p class="process-card-desc">Perspectives extérieures, intérieurs représentatifs, espaces paysagers et vidéo cinématique.</p>
          </div>
          <div class="process-card">
            <div class="process-card-num">03</div>
            <h3 class="process-card-title">Supports Commerciaux</h3>
            <p class="process-card-desc">Brochure éditoriale, plans de vente texturés et fiches de lots pour l'équipe commerciale.</p>
          </div>
          <div class="process-card">
            <div class="process-card-num">04</div>
            <h3 class="process-card-title">Site Web Dédié</h3>
            <p class="process-card-desc">Plateforme digitale avec sélecteur de typologies et recueil direct des demandes d'achat.</p>
          </div>
          <div class="process-card">
            <div class="process-card-num">05</div>
            <h3 class="process-card-title">Lancement & Campagnes</h3>
            <p class="process-card-desc">Activation publicitaire coordonnée sur Google et Meta auprès d'acquéreurs vérifiés.</p>
          </div>
        </div>

        <div style="margin-top: 56px; text-align: center;">
          <a href="#contact" class="btn btn-crimson">
            PLANIFIONS LE LANCEMENT →
          </a>
        </div>
      </div>
    </section>

    <!-- SCALE -->
    <section class="section bg-paper" id="envergure">
      <div class="container">
        <div class="kicker crimson">Dimension du Programme</div>
        <h2 class="display-title" style="margin-bottom: 24px;">
          Chaque programme a<br>
          sa propre échelle.
        </h2>

        <div class="scale-box">
          <p class="body-large" style="margin-bottom: 20px;">
            Accompagner le lancement d'une résidence intimiste de 20 logements implique une stratégie différente de celle d'un macro-complexe multifonctionnel comprenant plusieurs bâtiments et équipements exclusifs.
          </p>
          <p class="body-regular body-muted">
            Le périmètre d'intervention est précisément calibré selon le nombre de lots, la typologie architecturale, le volume d'images 3D, les besoins vidéo, le site web et la date cible de commercialisation.
          </p>

          <div class="scale-comparison-grid">
            <div>
              <h4 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; text-transform: uppercase; margin-bottom: 12px; color: var(--crimson);">
                Programme Résidentiel Standard
              </h4>
              <p class="body-regular body-muted">
                15 à 40 lots. Façade principale, espaces communs paysagers, intérieurs témoins, brochure digitale et site de lancement.
              </p>
            </div>
            <div>
              <h4 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.1rem; text-transform: uppercase; margin-bottom: 12px; color: var(--ink);">
                Grands Ensembles & Hospitality
              </h4>
              <p class="body-regular body-muted">
                Projets multi-phases ou résidences services. Masterplans d'ensemble, parcours filmés immersifs, multiples typologies et déploiement omnicanal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INVESTMENT -->
    <section class="section bg-ink" id="investissement" style="color: var(--paper);">
      <div class="container">
        <div style="padding-bottom: 64px; border-bottom: 1px solid var(--line-dark);">
          <div class="kicker crimson">Repères d'Investissement</div>
          <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
            Projets complets de lancement.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.8rem, 6vw, 4.8rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.03em; margin-bottom: 16px;">
            À PARTIR DE 12 000 € <span style="font-size: clamp(1.2rem, 2vw, 1.8rem); font-weight: 500; color: var(--signal);">HT</span>
          </div>
          <p class="body-large" style="color: rgba(244,243,239,0.75); max-width: 680px;">
            Base de référence pour les programmes requérant une direction visuelle complète, des rendus 3D, des supports imprimés et une plateforme web. Devis sur mesure après analyse des plans.
          </p>
        </div>

        <div style="padding-top: 64px;">
          <div class="kicker crimson">Continuité Commerciale</div>
          <h2 class="display-sub" style="color: var(--paper); margin-bottom: 16px;">
            Le lancement ne s'arrête pas à la mise en ligne du site.
          </h2>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 700; color: var(--paper); line-height: 1; letter-spacing: -0.02em; margin-bottom: 16px;">
            À PARTIR DE 600 €/MOIS <span style="font-size: clamp(1.1rem, 1.8vw, 1.5rem); font-weight: 500; color: var(--signal);">HT</span>
          </div>
          <p class="body-regular" style="color: rgba(244,243,239,0.75); max-width: 680px; margin-bottom: 20px;">
            Budget média en sus. Gestion suivie des campagnes publicitaires, renouvellement des créations 3D et optimisation du flux de leads qualifiés.
          </p>
          <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--signal);">
            Google Ads · Meta Ads · Optimisation Continue · Rapports Détaillés
          </div>
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="section bg-ink" style="border-top: 1px solid var(--line-dark);" id="calendrier">
      <div class="container">
        <div class="kicker crimson">Planification Temporelle</div>
        <h2 class="display-title" style="color: var(--paper); margin-bottom: 24px;">
          Un lancement se planifie<br>
          à rebours.
        </h2>
        
        <p class="body-large" style="color: rgba(244,243,239,0.85); max-width: 720px; margin-bottom: 16px;">
          Un projet intégral s'exécute généralement en <strong>6 à 10 semaines</strong> pour un périmètre standard, en menant les étapes en parallèle.
        </p>
        <p class="body-regular" style="color: var(--signal); max-width: 700px;">
          Votre date cible de commercialisation est le paramètre clé guidant notre engagement et nos réservations de production.
        </p>

        <div class="timeline-bars">
          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">01 Direction & Identité</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 25%; left: 0%;"></div>
            </div>
            <div class="timeline-duration">1–2 semaines</div>
          </div>

          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">02 Images 3D & Vidéo</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 50%; left: 15%;"></div>
            </div>
            <div class="timeline-duration">2–4 semaines</div>
          </div>

          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">03 Supports Commerciaux</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 30%; left: 45%;"></div>
            </div>
            <div class="timeline-duration">1–2 semaines</div>
          </div>

          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">04 Site Web du Programme</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 55%; left: 40%;"></div>
            </div>
            <div class="timeline-duration">3–5 semaines</div>
          </div>

          <div class="timeline-row">
            <div class="timeline-phase" style="color: var(--paper);">05 Lancement des Campagnes</div>
            <div class="timeline-progress-track">
              <div class="timeline-progress-fill" style="width: 20%; left: 80%;"></div>
            </div>
            <div class="timeline-duration">1 semaine</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="section bg-paper" id="eidos">
      <div class="container">
        <div class="kicker crimson">Le Studio</div>
        <div style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 70px; align-items: flex-start; margin-bottom: 64px;">
          <div>
            <h2 class="display-title" style="margin-bottom: 24px;">
              Eidos Render
            </h2>
            <div class="body-large" style="color: var(--crimson); font-weight: 600; line-height: 1.45;">
              Visualisation architecturale, direction visuelle et outils commerciaux digitaux pour programmes immobiliers.
            </div>
          </div>

          <div class="body-large body-muted">
            <p style="margin-bottom: 20px;">
              Nous partons de l'architecture. Nous créons son identité. Et nous la projetons sur le marché.
            </p>
            <p style="font-size: 1rem; line-height: 1.6; color: var(--ink);">
              Nous collaborons avec des promoteurs, fonds d'investissement et cabinets d'architecture en France, Belgique, Suisse, Espagne et à l'international. Nous allions la rigueur géométrique à l'élégance de l'image et à l'efficacité commerciale.
            </p>
            <div style="margin-top: 28px; display: flex; gap: 32px; font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; text-transform: uppercase;">
              <div><strong>Siège :</strong> Valence, Espagne</div>
              <div><strong>Rayonnement :</strong> France & Europe</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="section bg-paper" style="border-top: 1px solid var(--line); padding: clamp(80px, 12vw, 160px) 0;" id="contact">
      <div class="container">
        <div style="max-width: 1040px;">
          <div class="kicker crimson" style="margin-bottom: 24px;">Un programme · Une identité · Une expérience · Un lancement réussi</div>
          
          <h2 class="display-title" style="margin-bottom: 32px; font-size: clamp(2.8rem, 6.5vw, 6.2rem); line-height: 0.94;">
            DU PROJET<br>
            AU LANCEMENT.<br>
            <span style="color: var(--crimson);">PARLONS-EN.</span>
          </h2>
          
          <p class="body-large body-muted" style="max-width: 720px; font-size: clamp(1.2rem, 2.2vw, 1.55rem); line-height: 1.45; margin-bottom: 48px;">
            Si vous préparez un programme immobilier et souhaitez en définir l'image, les supports de vente et le lancement commercial, présentez-nous votre projet.
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; margin-bottom: 60px;">
            <a href="mailto:info@eidosrender.es?subject=Demande%20de%20projet%20immobilier" class="btn btn-crimson" style="padding: 20px 38px; font-size: 1rem;">
              ÉCHANGEONS SUR LE PROJET →
            </a>
          </div>

          <div style="padding-top: 48px; border-top: 1px solid var(--line); display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 36px; align-items: start;">
            <div>
              <div style="font-family: 'Space Grotesk', sans-serif; font-size: 1.15rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 6px; text-transform: uppercase;">
                EIDOS RENDER
              </div>
              <div style="font-family: 'Archivo', sans-serif; font-size: 0.88rem; color: var(--signal); line-height: 1.5;">
                Image · Identité · Vente · Web · Acquisition
              </div>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Courriel Direct</span>
              <a href="mailto:info@eidosrender.es" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--ink); text-decoration: none; border-bottom: 2px solid var(--crimson); padding-bottom: 2px;">
                info@eidosrender.es
              </a>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Téléphone</span>
              <a href="tel:+34614459144" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; color: var(--ink); text-decoration: none;">
                +34 614 45 91 44
              </a>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Studio</span>
              <span style="font-family: 'Archivo', sans-serif; font-size: 0.95rem; color: var(--ink); line-height: 1.5;">
                Valence, Espagne<br>
                <span style="color: var(--signal); font-size: 0.85rem;">Service France & Europe</span>
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
            Partenaire créatif et visuel pour le lancement commercial de programmes immobiliers en Europe.
          </p>
          <div style="font-size: 0.82rem; color: var(--signal);">
            Image · Identité · Vente · Web · Acquisition
          </div>
        </div>

        <div>
          <div class="footer-col-title">Navigation</div>
          <ul class="footer-links">
            <li><a href="#projets">Projets</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="#processus">Processus</a></li>
            <li><a href="#envergure">Échelle</a></li>
            <li><a href="#eidos">À propos</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Services</div>
          <ul class="footer-links">
            <li><a href="services/branding.html">Direction & Identité</a></li>
            <li><a href="services/rendu-3d.html">Image Architecturale 3D</a></li>
            <li><a href="services/video-3d.html">Vidéo & Animation 3D</a></li>
            <li><a href="services/supports-commerciaux.html">Supports Commerciaux</a></li>
            <li><a href="services/site-web-immobilier.html">Site Web de Promotion</a></li>
            <li><a href="services/acquisition.html">Lancement & Acquisition</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Contact</div>
          <ul class="footer-links">
            <li><a href="mailto:info@eidosrender.es">info@eidosrender.es</a></li>
            <li><a href="tel:+34614459144">+34 614 45 91 44</a></li>
            <li>Valence, Espagne</li>
            <li style="margin-top: 14px;">
              <a href="https://www.linkedin.com/company/eidos-render" target="_blank" rel="noopener" style="color: var(--crimson); font-weight: 600;">
                LinkedIn ↗
              </a>
            </li>
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
            <span style="color: var(--crimson); font-weight: 700;">FR</span>
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
</html>`;

writeFile('fr/index.html', frIndex);

// -------------------------------------------------------------
// 2. fr/services.html
// -------------------------------------------------------------
const frServices = `<!DOCTYPE html>
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
  
  <title>Services — Eidos Render | Une Même Vision. Toutes les Pièces.</title>
  <meta name="description" content="Services visuels et commerciaux pour programmes immobiliers : Direction & identité, image 3D, film, supports de vente, site web et acquisition d'acquéreurs.">
  <link rel="canonical" href="https://eidosrender.es/fr/services">

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
  <meta property="og:title" content="Services — Eidos Render | Une Même Vision. Toutes les Pièces.">
  <meta property="og:description" content="Offre intégrée de services pour le lancement commercial de programmes immobiliers en Europe.">
  <meta property="og:url" content="https://eidosrender.es/fr/services">
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
      <a href="./" class="logo" aria-label="Eidos Render Accueil">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Navigation principale">
        <ul class="nav-links">
          <li><a href="projets.html">Projets</a></li>
          <li><a href="services.html" class="active">Services</a></li>
          <li><a href="./#processus">Processus</a></li>
          <li><a href="./#eidos">À propos</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Sélecteur de langue">
          <a href="../servicios.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../en/services.html" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <a href="../de/leistungen.html" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="fr">FR</span>
        </div>

        <a href="contact.html" class="nav-cta">
          ÉCHANGEONS SUR LE PROJET →
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
        <a href="../servicios.html" data-lang="es" onclick="window.setLang('es')">ES</a>
        <a href="../en/services.html" data-lang="en" onclick="window.setLang('en')">EN</a>
        <a href="../de/leistungen.html" data-lang="de" onclick="window.setLang('de')">DE</a>
        <span class="active" data-lang="fr">FR</span>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="projets.html">Projets</a></li>
        <li><a href="services.html" class="active">Services</a></li>
        <li><a href="./#processus">Processus</a></li>
        <li><a href="./#eidos">À propos</a></li>
        <li><a href="contact.html">Contact</a></li>
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
        <div class="kicker crimson">Catalogue de Compétences</div>
        <h1 class="display-title" style="margin-bottom: 24px;">
          Une même vision.<br>Toutes les pièces.
        </h1>
        <p class="body-large body-muted" style="max-width: 760px;">
          Nous développons le système visuel et commercial complet nécessaire pour présenter, valoriser et vendre un programme immobilier. Nos interventions s'adaptent au calendrier exact de votre opération.
        </p>
      </div>
    </section>

    <!-- FASES DETALLADAS -->
    <section class="section bg-paper">
      <div class="container">

        <!-- 01 -->
        <article class="service-block-row" id="direction" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">01</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Direction & Identité</h2>
            <div style="margin-bottom: 16px;">
              <a href="services/branding.html" class="link-arrow" style="font-size: 0.75rem;">PAGE SPÉCIFIQUE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Notre Rôle</span>
              <p class="body-regular body-muted">
                Définir le concept créatif, le positionnement et l'univers visuel du programme avant toute production graphique.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Livrables</span>
              <p class="body-regular body-muted">
                Naming commercial, charte d'identité graphique, systèmes typographiques et chromatiques, et directives pour espaces de vente.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Impact Commercial</span>
              <p class="body-regular body-muted">
                Construire une marque immobilière qui justifie la valeur du mètre carré et garantit une cohérence sur tous les supports.
              </p>
            </div>
          </div>
        </article>

        <!-- 02 -->
        <article class="service-block-row" id="image" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">02</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Image Architecturale 3D</h2>
            <div style="margin-bottom: 16px;">
              <a href="services/rendu-3d.html" class="link-arrow" style="font-size: 0.75rem;">PAGE SPÉCIFIQUE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Notre Rôle</span>
              <p class="body-regular body-muted">
                Perspectives 3D photoréalistes pour façades, aménagements extérieurs, intérieurs témoins et terrasses panoramiques.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Livrables</span>
              <p class="body-regular body-muted">
                Rendus en très haute résolution pour palissades de chantier, campagnes digitales et dossiers de vente imprimés.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Impact Commercial</span>
              <p class="body-regular body-muted">
                Donne une matérialité tangible au projet non bâti et suscite le coup de cœur de l'acquéreur avant le démarrage des travaux.
              </p>
            </div>
          </div>
        </article>

        <!-- 03 -->
        <article class="service-block-row" id="video" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">03</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Vidéo & Animation 3D</h2>
            <div style="margin-bottom: 16px;">
              <a href="services/video-3d.html" class="link-arrow" style="font-size: 0.75rem;">PAGE SPÉCIFIQUE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Notre Rôle</span>
              <p class="body-regular body-muted">
                Animation 3D cinématographique, visites virtuelles immersives et formats courts adaptés aux réseaux sociaux.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Livrables</span>
              <p class="body-regular body-muted">
                Films étalonnés avec habillage sonore sur mesure, livrés en formats horizontaux et verticaux (reels/stories).
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Impact Commercial</span>
              <p class="body-regular body-muted">
                Permet aux investisseurs et futurs résidents de comprendre instantanément les volumes et les circulations de la résidence.
              </p>
            </div>
          </div>
        </article>

        <!-- 04 -->
        <article class="service-block-row" id="supports" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">04</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Supports Commerciaux</h2>
            <div style="margin-bottom: 16px;">
              <a href="services/supports-commerciaux.html" class="link-arrow" style="font-size: 0.75rem;">PAGE SPÉCIFIQUE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Notre Rôle</span>
              <p class="body-regular body-muted">
                Brochures commerciales imprimées et digitales, plans de vente 2D/3D meublés, cartes de quartier et fiches de lots.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Livrables</span>
              <p class="body-regular body-muted">
                Fichiers d'impression haute définition et documents interactifs optimisés pour tablettes de vente et envoi par courriel.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Impact Commercial</span>
              <p class="body-regular body-muted">
                Fournit à votre réseau commercial des outils rigoureux et raffinés qui valorisent les prestations architecturales.
              </p>
            </div>
          </div>
        </article>

        <!-- 05 -->
        <article class="service-block-row" id="site" style="padding: 70px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">05</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Site Web de Promotion</h2>
            <div style="margin-bottom: 16px;">
              <a href="services/site-web-immobilier.html" class="link-arrow" style="font-size: 0.75rem;">PAGE SPÉCIFIQUE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Notre Rôle</span>
              <p class="body-regular body-muted">
                Développement d'un site sur mesure dédié au programme, intégrant la sélection de lots, une vitesse de chargement instantanée et la captation de leads.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Livrables</span>
              <p class="body-regular body-muted">
                Plateforme web clé en main connectée à vos outils de mesure analytique et à vos outils de gestion de la relation client.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Impact Commercial</span>
              <p class="body-regular body-muted">
                Transforme l'audience publicitaire en prises de contact qualifiées pour vos conseillers commerciaux.
              </p>
            </div>
          </div>
        </article>

        <!-- 06 -->
        <article class="service-block-row" id="acquisition" style="padding: 70px 0; display: grid; grid-template-columns: 80px 1.2fr 1.6fr; gap: 40px; align-items: start;">
          <div class="display-num" style="color: var(--crimson);">06</div>
          <div>
            <h2 class="display-sub" style="margin-bottom: 12px; text-transform: uppercase;">Lancement & Acquisition</h2>
            <div style="margin-bottom: 16px;">
              <a href="services/acquisition.html" class="link-arrow" style="font-size: 0.75rem;">PAGE SPÉCIFIQUE →</a>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Notre Rôle</span>
              <p class="body-regular body-muted">
                Campagnes ciblées sur Google et Meta exploitant les rendus 3D et vidéos pour capter des acquéreurs potentiels qualifiés.
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Livrables</span>
              <p class="body-regular body-muted">
                Paramétrage publicitaire, rotation continue des visuels, suivi hebdomadaire et comptes rendus réguliers sur les leads générés.
              </p>
            </div>
            <div>
              <span class="kicker gray" style="margin-bottom: 6px; display: block;">Impact Commercial</span>
              <p class="body-regular body-muted">
                Génère un flux d'intérêt continu dès le lancement de la commercialisation pour atteindre rapidement les seuils de réservation.
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
          <h3 class="display-sub" style="color: var(--paper); margin-bottom: 8px;">Vous préparez un programme immobilier ?</h3>
          <p class="body-regular" style="color: rgba(244,243,239,0.7); max-width: 580px;">
            Examinons vos plans pour dimensionner le dispositif visuel et commercial adapté à votre calendrier de vente.
          </p>
        </div>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <a href="contact.html" class="btn btn-crimson">
            ÉCHANGEONS SUR LE PROJET →
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
            <a href="../en/services.html" onclick="window.setLang('en')">EN</a> ·
            <a href="../de/leistungen.html" onclick="window.setLang('de')">DE</a> ·
            <span style="color: var(--crimson); font-weight: 700;">FR</span>
          </div>
          <a href="projets.html">Projets</a>
          <a href="contact.html">Contact</a>
          <a href="mentions-legales.html">Mentions Légales</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('fr/services.html', frServices);
writeFile('fr/services/index.html', frServices.replace(/\.\.\//g, '../../').replace(/href="services\//g, 'href="').replace(/href="\.\/"/g, 'href="../"'));

// -------------------------------------------------------------
// 3. fr/projets.html
// -------------------------------------------------------------
const frProjets = `<!DOCTYPE html>
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
  
  <title>Projets & Études de Cas — Eidos Render</title>
  <meta name="description" content="Portfolio de visualisation architecturale 3D, film et identité visuelle pour programmes immobiliers neufs en Europe.">
  <link rel="canonical" href="https://eidosrender.es/fr/projets">

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
  <meta property="og:title" content="Projets & Études de Cas — Eidos Render">
  <meta property="og:description" content="Portfolio de visualisation 3D et projets immobiliers commerciaux.">
  <meta property="og:url" content="https://eidosrender.es/fr/projets">
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
      <a href="./" class="logo" aria-label="Eidos Render Accueil">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Navigation principale">
        <ul class="nav-links">
          <li><a href="projets.html" class="active">Projets</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="./#processus">Processus</a></li>
          <li><a href="./#eidos">À propos</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Sélecteur de langue">
          <a href="../proyectos.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../en/projects.html" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <a href="../de/projekte.html" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="fr">FR</span>
        </div>

        <a href="contact.html" class="nav-cta">
          ÉCHANGEONS SUR LE PROJET →
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
        <a href="../proyectos.html" data-lang="es" onclick="window.setLang('es')">ES</a>
        <a href="../en/projects.html" data-lang="en" onclick="window.setLang('en')">EN</a>
        <a href="../de/projekte.html" data-lang="de" onclick="window.setLang('de')">DE</a>
        <span class="active" data-lang="fr">FR</span>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="projets.html" class="active">Projets</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="./#processus">Processus</a></li>
        <li><a href="./#eidos">À propos</a></li>
        <li><a href="contact.html">Contact</a></li>
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
        <div class="kicker crimson">Archive de Réalisations</div>
        <h1 class="display-title" style="margin-bottom: 24px;">
          Projets sélectionnés.
        </h1>
        <p class="body-large body-muted" style="max-width: 760px;">
          Visualisation 3D architecturale de haute fidélité, direction visuelle et outils d'aide à la vente pour programmes résidentiels de premier ordre.
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
                  <img src="../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Rendu extérieur façade immeuble neuf" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Ensemble Résidentiel</h3>
                  <div class="project-services-line">Logements Collectifs Neufs · Direction Visuelle · Insertion Urbaine</div>
                </div>
                <div class="project-meta">Valence, ES</div>
              </div>
            </div>
          </article>

          <!-- 02 -->
          <article class="project-card span-4 tall">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/infografia-exterior-zonas-comunes-obra-nueva.webp" type="image/webp">
                  <img src="../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="Piscine et espaces extérieurs" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Espaces Communs & Paysagisme</h3>
                  <div class="project-services-line">Visualisation 3D · Piscines & Jardins · Vidéo</div>
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
                  <img src="../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Villa moderne avec piscine à débordement" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Villa Contemporaine</h3>
                  <div class="project-services-line">Villa Individuelle · Terrasses & Piscine · Vue Mer</div>
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
                  <img src="../img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Séjour cathédrale en duplex" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Penthouse en Duplex</h3>
                  <div class="project-services-line">Architecture d'Intérieur · Rendu 3D Haute Définition · Direction Artistique</div>
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
                  <img src="../img/render-cocina-moderna-isla-madera-1600.jpg" alt="Cuisine contemporaine avec îlot bois" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Cuisine d'Auteur</h3>
                  <div class="project-services-line">Matériaux Nobles · Ébénisterie · Lumière Naturelle</div>
                </div>
                <div class="project-meta">Détail</div>
              </div>
            </div>
          </article>

          <!-- 06 -->
          <article class="project-card span-6">
            <div class="project-card-link">
              <div class="project-media-wrap">
                <picture>
                  <source srcset="../img/infografia-dormitorio-principal-render-inmobiliario.webp" type="image/webp">
                  <img src="../img/infografia-dormitorio-principal-render-inmobiliario-1600.jpg" alt="Suite parentale contemporaine" loading="lazy">
                </picture>
              </div>
              <div class="project-info">
                <div>
                  <h3 class="project-name">Suite Parentale</h3>
                  <div class="project-services-line">Atmosphère Sereine · Textures Textiles · Mobilier sur Mesure</div>
                </div>
                <div class="project-meta">Suite</div>
              </div>
            </div>
          </article>

        </div>

        <div style="margin-top: 80px; text-align: center; border-top: 1px solid var(--line); padding-top: 60px;">
          <h2 class="display-title" style="margin-bottom: 20px;">Parlons de votre prochain programme.</h2>
          <p class="body-large body-muted" style="max-width: 600px; margin: 0 auto 32px;">
            Nous adaptons notre proposition à vos contraintes de calendrier et à vos objectifs de commercialisation.
          </p>
          <a href="contact.html" class="btn btn-crimson">
            PRÉSENTER UN PROJET →
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
            <a href="../de/projekte.html" onclick="window.setLang('de')">DE</a> ·
            <span style="color: var(--crimson); font-weight: 700;">FR</span>
          </div>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
          <a href="mentions-legales.html">Mentions Légales</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('fr/projets.html', frProjets);
writeFile('fr/projets/index.html', frProjets.replace(/\.\.\//g, '../../').replace(/href="projets\.html"/g, 'href="./"').replace(/href="services\.html"/g, 'href="../services.html"').replace(/href="contact\.html"/g, 'href="../contact.html"').replace(/href="\.\/"/g, 'href="../"'));

// -------------------------------------------------------------
// 4. fr/contact.html
// -------------------------------------------------------------
const frContact = `<!DOCTYPE html>
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
  
  <title>Contact — Eidos Render | Du Projet au Lancement Commercial</title>
  <meta name="description" content="Présentez-nous votre programme immobilier. Nous évaluons l'image 3D, le film, l'identité, les brochures, le site web et l'acquisition d'acquéreurs.">
  <link rel="canonical" href="https://eidosrender.es/fr/contact">

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
  <meta property="og:title" content="Contact — Eidos Render | Du Projet au Lancement Commercial">
  <meta property="og:description" content="Présentez-nous votre programme immobilier. Nous planifions la production visuelle et le lancement commercial.">
  <meta property="og:url" content="https://eidosrender.es/fr/contact">
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
      <a href="./" class="logo" aria-label="Eidos Render Accueil">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Navigation principale">
        <ul class="nav-links">
          <li><a href="projets.html">Projets</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="./#processus">Processus</a></li>
          <li><a href="./#eidos">À propos</a></li>
          <li><a href="contact.html" class="active">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Sélecteur de langue">
          <a href="../contacto.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../en/contact.html" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <a href="../de/kontakt.html" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="fr">FR</span>
        </div>

        <a href="contact.html" class="nav-cta">
          ÉCHANGEONS SUR LE PROJET →
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
        <a href="../contacto.html" data-lang="es" onclick="window.setLang('es')">ES</a>
        <a href="../en/contact.html" data-lang="en" onclick="window.setLang('en')">EN</a>
        <a href="../de/kontakt.html" data-lang="de" onclick="window.setLang('de')">DE</a>
        <span class="active" data-lang="fr">FR</span>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="projets.html">Projets</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="./#processus">Processus</a></li>
        <li><a href="./#eidos">À propos</a></li>
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
          <div class="kicker crimson" style="margin-bottom: 24px;">Contact Direct</div>
          
          <h1 class="display-title" style="margin-bottom: 32px; font-size: clamp(2.8rem, 6.5vw, 6.2rem); line-height: 0.94;">
            DU PROJET<br>
            AU LANCEMENT.<br>
            <span style="color: var(--crimson);">PARLONS-EN.</span>
          </h1>
          
          <p class="body-large body-muted" style="max-width: 720px; font-size: clamp(1.2rem, 2.2vw, 1.55rem); line-height: 1.45; margin-bottom: 48px;">
            Si vous préparez un programme immobilier et souhaitez en définir l'image, les supports de vente et le lancement commercial, faites-nous part de votre projet.
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; margin-bottom: 64px;">
            <a href="mailto:info@eidosrender.es?subject=Demande%20de%20projet%20immobilier" class="btn btn-crimson" style="padding: 20px 38px; font-size: 1rem;">
              ÉCHANGEONS SUR LE PROJET →
            </a>
            <a href="mailto:info@eidosrender.es?subject=Pr%C3%A9sentation%20de%20programme" class="btn btn-outline-ink" style="padding: 20px 38px; font-size: 1rem;">
              TRANSMETTRE VOS PLANS →
            </a>
          </div>

          <div style="padding-top: 48px; border-top: 1px solid var(--line); display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 40px; align-items: start;">
            
            <div>
              <div style="font-family: 'Space Grotesk', sans-serif; font-size: 1.15rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 8px; text-transform: uppercase;">
                EIDOS RENDER
              </div>
              <div style="font-family: 'Archivo', sans-serif; font-size: 0.9rem; color: var(--signal); line-height: 1.5;">
                Image · Identité · Vente · Web · Acquisition
              </div>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 8px; display: block;">Courriel Direct</span>
              <a href="mailto:info@eidosrender.es" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--ink); text-decoration: none; border-bottom: 2px solid var(--crimson); padding-bottom: 2px;">
                info@eidosrender.es
              </a>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 8px; display: block;">Téléphone Direct</span>
              <a href="tel:+34614459144" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 600; color: var(--ink); text-decoration: none;">
                +34 614 45 91 44
              </a>
            </div>

            <div>
              <span class="kicker gray" style="margin-bottom: 8px; display: block;">Atelier</span>
              <span style="font-family: 'Archivo', sans-serif; font-size: 0.95rem; color: var(--ink); line-height: 1.5;">
                Valence, Espagne<br>
                <span style="color: var(--signal); font-size: 0.85rem;">Service France & Europe</span>
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
        <div>© 2026 Eidos Render. Contact direct.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../contacto.html" onclick="window.setLang('es')">ES</a> ·
            <a href="../en/contact.html" onclick="window.setLang('en')">EN</a> ·
            <a href="../de/kontakt.html" onclick="window.setLang('de')">DE</a> ·
            <span style="color: var(--crimson); font-weight: 700;">FR</span>
          </div>
          <a href="projets.html">Projets</a>
          <a href="services.html">Services</a>
          <a href="mentions-legales.html">Mentions Légales</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('fr/contact.html', frContact);
writeFile('fr/contact/index.html', frContact.replace(/\.\.\//g, '../../').replace(/href="contact\.html"/g, 'href="./"').replace(/href="projets\.html"/g, 'href="../projets.html"').replace(/href="services\.html"/g, 'href="../services.html"').replace(/href="\.\/"/g, 'href="../"'));

// -------------------------------------------------------------
// 5. fr/faq.html
// -------------------------------------------------------------
const frFaq = `<!DOCTYPE html>
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
  
  <title>Foire Aux Questions (FAQ) — Eidos Render</title>
  <meta name="description" content="Questions fréquentes sur les délais de livraison, pièces techniques, méthodologie et périmètre de service pour le lancement commercial de programmes immobiliers.">
  <link rel="canonical" href="https://eidosrender.es/fr/faq">

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
  <meta property="og:title" content="Foire Aux Questions (FAQ) — Eidos Render">
  <meta property="og:description" content="Méthodologie, calendriers et réponses clés pour promoteurs, investisseurs et cabinets d'architecture.">
  <meta property="og:url" content="https://eidosrender.es/fr/faq">
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
        "name": "Quelles pièces techniques sont nécessaires pour démarrer un projet ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il suffit de disposer des plans d'architecte au format DWG ou PDF (plans d'étages, coupes, façades) et d'un extrait de notice descriptive sommaire ou d'indications de matériaux."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les délais habituels de production ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un projet intégral de lancement commercial s'exécute généralement en 6 à 10 semaines. Pour des phases ponctuelles de rendu 3D ou de vidéo, les premiers cadrages et tests lumière sont livrés sous quelques jours ouvrés."
        }
      },
      {
        "@type": "Question",
        "name": "Travaillez-vous avec des promoteurs et architectes en France et en Europe ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Nous collaborons régulièrement avec des promoteurs immobiliers, fonds et agences d'architecture en France, Belgique, Suisse, Espagne et dans toute l'Europe via un flux de travail 100% digital et rigoureux."
        }
      },
      {
        "@type": "Question",
        "name": "Est-il obligatoire de souscrire au service complet ou des missions ponctuelles sont-elles possibles ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Notre approche est entièrement modulaire. Nous pouvons intervenir exclusivement pour des perspectives 3D et films cinématographiques, ou concevoir l'intégralité du dispositif de vente."
        }
      }
    ]
  }
  </script>
</head>
<body class="bg-paper">

  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo" aria-label="Eidos Render Accueil">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Navigation principale">
        <ul class="nav-links">
          <li><a href="projets.html">Projets</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="./#processus">Processus</a></li>
          <li><a href="./#eidos">À propos</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Sélecteur de langue">
          <a href="../faq.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../en/faq.html" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <a href="../de/faq.html" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="fr">FR</span>
        </div>

        <a href="contact.html" class="nav-cta">
          ÉCHANGEONS SUR LE PROJET →
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
        <a href="../faq.html" data-lang="es" onclick="window.setLang('es')">ES</a>
        <a href="../en/faq.html" data-lang="en" onclick="window.setLang('en')">EN</a>
        <a href="../de/faq.html" data-lang="de" onclick="window.setLang('de')">DE</a>
        <span class="active" data-lang="fr">FR</span>
      </div>

      <span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="projets.html">Projets</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="./#processus">Processus</a></li>
        <li><a href="./#eidos">À propos</a></li>
        <li><a href="contact.html">Contact</a></li>
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
        <div class="kicker crimson">Méthode & Périmètre</div>
        <h1 class="display-title" style="margin-bottom: 24px;">
          Foire Aux Questions.
        </h1>
        <p class="body-large body-muted" style="max-width: 760px;">
          Critères techniques, calendriers de réalisation et modalités de collaboration pour promoteurs, commercialisateurs et architectes.
        </p>
      </div>
    </section>

    <!-- FAQ LIST -->
    <section class="section bg-paper">
      <div class="container container-narrow">

        <div style="display: flex; flex-direction: column; gap: 48px;">
          
          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Dossier Technique</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              Quels documents architecturaux sont nécessaires pour établir un devis et démarrer ?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              Il suffit de nous transmettre les plans au format CAD (DWG) ou PDF (plans d'étages, coupes et façades), ainsi qu'une notice de finitions ou de choix des matériaux. Ces éléments nous permettent d'établir les angles de vue, le calendrier et la direction artistique.
            </p>
          </div>

          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Calendrier & Délais</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              Quels sont les délais habituels de livraison ?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              Pour un lancement complet (identité, 3D, film, supports imprimés, site web et campagnes), le calendrier moyen est de 6 à 10 semaines. Pour des besoins spécifiques en rendus 3D, les premières esquisses de cadrage et lumière sont présentées en quelques jours ouvrés.
            </p>
          </div>

          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Missions Modulaires</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              Est-il possible de commander uniquement certaines phases ?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              Tout à fait. Nous n'imposons aucun forfait rigide. Nous intervenons fréquemment pour la seule production des rendus 3D et films pour des programmes ayant déjà leur charte, tout comme nous pouvons assurer le déploiement global.
            </p>
          </div>

          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Intervention en France et Europe</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              Accompagnez-vous des opérations en France, Belgique et Suisse ?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              Oui. Nous collaborons avec des promoteurs et architectes dans toute l'Europe francophone. L'ensemble des échanges, validation de cadrages et transmission de fichiers s'effectue de manière fluide et centralisée via nos outils digitaux.
            </p>
          </div>

          <div style="padding-bottom: 36px; border-bottom: 1px solid var(--line);">
            <div class="kicker gray" style="margin-bottom: 8px;">Modalités Financières</div>
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 14px;">
              Quelles sont les conditions contractuelles et de règlement ?
            </h3>
            <p class="body-regular body-muted" style="line-height: 1.65;">
              Nous travaillons sur devis ferme avec échéancier par étapes de validation. Le démarrage s'effectue après acompte de 50% pour réservation de planning, et le solde de 50% est facturé à l'approbation et livraison des fichiers haute définition.
            </p>
          </div>

        </div>

        <div style="margin-top: 70px; padding: 48px; background-color: var(--ink); color: var(--paper);">
          <div class="kicker crimson">Contact Direct</div>
          <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; line-height: 1.1; margin-bottom: 16px;">
            Vous souhaitez faire évaluer votre prochaine opération ?
          </h2>
          <p style="color: rgba(244,243,239,0.75); font-size: 1.05rem; line-height: 1.5; max-width: 600px; margin-bottom: 32px;">
            Contactez-nous directement pour convenir d'un échange sur les délais et les pièces nécessaires à son lancement.
          </p>
          <a href="mailto:info@eidosrender.es?subject=Demande%20de%20projet%20immobilier" class="btn btn-crimson">
            ÉCHANGEONS SUR LE PROJET →
          </a>
        </div>

      </div>
    </section>

  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-bottom">
        <div>© 2026 Eidos Render. Foire Aux Questions.</div>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
            <a href="../faq.html" onclick="window.setLang('es')">ES</a> ·
            <a href="../en/faq.html" onclick="window.setLang('en')">EN</a> ·
            <a href="../de/faq.html" onclick="window.setLang('de')">DE</a> ·
            <span style="color: var(--crimson); font-weight: 700;">FR</span>
          </div>
          <a href="projets.html">Projets</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
          <a href="mentions-legales.html">Mentions Légales</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="../main.js" defer></script>
</body>
</html>`;

writeFile('fr/faq.html', frFaq);

// -------------------------------------------------------------
// 6. 6 French Subservices in fr/services/
// -------------------------------------------------------------
function renderFrSubservice({ filename, canonicalSlug, esFile, enFile, deFile, phaseNum, phaseName, heroTitle, heroCopy, pillars }) {
  const pillarsHtml = pillars.map(p => `
          <div class="feature-card">
            <span class="kicker crimson">${p.kicker}</span>
            <h3 class="feature-card-title">${p.title}</h3>
            <p class="feature-card-copy">${p.desc}</p>
          </div>
  `).join('');

  return `<!DOCTYPE html>
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
  
  <title>${phaseName} — Eidos Render</title>
  <meta name="description" content="${heroCopy.replace(/"/g, '&quot;')}">
  <link rel="canonical" href="https://eidosrender.es/fr/services/${canonicalSlug}">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/servicios/${esFile}">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/services/${enFile}">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/leistungen/${deFile}">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/services/${canonicalSlug}">
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
      <a href="../" class="logo" aria-label="Eidos Render Accueil">
        <span>EIDOS RENDER</span>
        <span class="logo-dot"></span>
      </a>

      <nav aria-label="Navigation principale">
        <ul class="nav-links">
          <li><a href="../projets.html">Projets</a></li>
          <li><a href="../services.html" class="active">Services</a></li>
          <li><a href="../#processus">Processus</a></li>
          <li><a href="../contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Sélecteur de langue">
          <a href="../../servicios/${esFile}.html" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../../en/services/${enFile}.html" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <a href="../../de/leistungen/${deFile}.html" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="fr">FR</span>
        </div>

        <a href="../contact.html" class="nav-cta">
          ÉCHANGEONS SUR LE PROJET →
        </a>
      </div>

      <button class="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main style="padding-top: var(--nav-h);">

    <section class="section-sm bg-paper" style="border-bottom: 1px solid var(--line);">
      <div class="container">
        <div style="margin-bottom: 16px;">
          <a href="../services.html" class="link-arrow" style="font-size: 0.72rem;">← RETOUR AUX SERVICES</a>
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
            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.4rem; font-weight: 700; margin-bottom: 8px;">Planifier cette étape pour votre opération</h3>
            <p class="body-regular body-muted">Nous concevons des propositions ponctuelles ou des accompagnements globaux.</p>
          </div>
          <a href="../contact.html" class="btn btn-crimson">
            ÉCHANGEONS SUR LE PROJET →
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
            <a href="../../de/leistungen/${deFile}.html" onclick="window.setLang('de')">DE</a> ·
            <span style="color: var(--crimson); font-weight: 700;">FR</span>
          </div>
          <a href="../services.html">Services</a>
          <a href="../projets.html">Projets</a>
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
writeFile('fr/services/branding.html', renderFrSubservice({
  filename: 'fr/services/branding.html',
  canonicalSlug: 'branding',
  esFile: 'branding',
  enFile: 'branding',
  deFile: 'branding',
  phaseNum: '01',
  phaseName: 'Direction & Identité de Marque',
  heroTitle: 'Un programme doit posséder sa propre identité.',
  heroCopy: 'Nous réfutons les identités préfabriquées. Nous bâtissons des marques immobilières ancrées dans l\'architecture, l\'environnement géographique et la valeur réelle du mètre carré.',
  pillars: [
    { kicker: 'Stratégie', title: 'Naming & Concept', desc: 'Le nom conditionne la perception de l\'adresse. Nous créons des noms évocateurs, fluides à l\'oral et vérifiés juridiquement à l\'enregistrement des marques.' },
    { kicker: 'Design', title: 'Système Visuel & Typographique', desc: 'Création du logotype, de la typographie et d\'une charte chromatique calibrée pour coexister avec les matériaux de construction (bois, béton, pierre).' },
    { kicker: 'Production', title: 'Directives de Direction Artistique', desc: 'Cahier des charges pour les éclairages, les cadrages, le stylisme intérieur et la végétation dans toutes les productions 3D.' },
    { kicker: 'Sur Site', title: 'Palissades & Espaces de Vente', desc: 'Design pour panneaux de chantier, drapeaux, habillage de bulle de vente et coffrets d\'accueil pour la remise des clés.' }
  ]
}));

// 02 3D Rendering
writeFile('fr/services/rendu-3d.html', renderFrSubservice({
  filename: 'fr/services/rendu-3d.html',
  canonicalSlug: 'rendu-3d',
  esFile: 'infografia-3d',
  enFile: '3d-rendering',
  deFile: '3d-rendering',
  phaseNum: '02',
  phaseName: 'Image Architecturale 3D',
  heroTitle: 'L\'image avant la construction.',
  heroCopy: 'Visualisation 3D photoréaliste de haute précision pour programmes immobiliers. Façades, perspectives intérieures, terrasses et aménagements paysagers en résolution 4K/8K.',
  pillars: [
    { kicker: 'Extérieurs', title: 'Façades & Environnement', desc: 'Modélisation rigoureuse d\'après les plans architecturaux, photomontages aériens par drone et simulation exacte de la lumière du soleil.' },
    { kicker: 'Intérieurs', title: 'Architecture d\'Intérieur & Ambiance', desc: 'Textures tactiles, finitions soignées, mobilier sur mesure et atmosphères lumineuses chaleureuses pour susciter l\'envie d\'habiter.' },
    { kicker: 'Paysagisme', title: 'Espaces Communs & Jardins', desc: 'Piscines, espaces verts, halls d\'entrée et terrasses représentés avec une parfaite netteté spatiale.' },
    { kicker: 'Format', title: 'Rendus Haute Définition', desc: 'Images calculées pour l\'affichage grand format, les dossiers de vente imprimés et les campagnes digitales multi-écrans.' }
  ]
}));

// 03 3D Video
writeFile('fr/services/video-3d.html', renderFrSubservice({
  filename: 'fr/services/video-3d.html',
  canonicalSlug: 'video-3d',
  esFile: 'video-3d',
  enFile: '3d-video',
  deFile: '3d-video',
  phaseNum: '03',
  phaseName: 'Vidéo & Animation 3D',
  heroTitle: 'Du rendu statique à l\'expérience cinématique.',
  heroCopy: 'Le mouvement révèle l\'enchaînement des espaces, transmet l\'échelle réelle des volumes et démultiplie l\'intérêt des acquéreurs lors des présentations commerciales.',
  pillars: [
    { kicker: 'Cinématique', title: 'Visites Virtuelles Fluides', desc: 'Mouvements de caméra élégants reliant le contexte urbain jusqu\'à l\'intimité des pièces avec un rendu optique naturel.' },
    { kicker: 'Réseaux', title: 'Formats Verticaux 9:16', desc: 'Clips dynamiques et reels adaptés pour Instagram et Meta Ads, pensés pour captiver l\'attention sur mobile.' },
    { kicker: 'Son', title: 'Étalonnage & Sound Design', desc: 'Conception sonore soignée, ambiances délicates et étalonnage chromatique pour une signature cinématographique.' },
    { kicker: 'Vente', title: 'Écrans de Bureau de Vente', desc: 'Boucles vidéo 4K fluides et vidéos de présentation conçues pour les bulles de vente et les salons immobiliers.' }
  ]
}));

// 04 Marketing Collateral
writeFile('fr/services/supports-commerciaux.html', renderFrSubservice({
  filename: 'fr/services/supports-commerciaux.html',
  canonicalSlug: 'supports-commerciaux',
  esFile: 'material-comercial',
  enFile: 'marketing-collateral',
  deFile: 'vermarktungsunterlagen',
  phaseNum: '04',
  phaseName: 'Supports Commerciaux & Brochures',
  heroTitle: 'Du plan technique à l\'outil de vente efficace.',
  heroCopy: 'Nous convertissons les plans d\'exécution en supports commerciaux intuitifs, clairs et prestigieux qui facilitent le travail des négociateurs immobiliers.',
  pillars: [
    { kicker: 'Édition', title: 'Brochures de Vente Prestigieuses', desc: 'Catalogues imprimés d\'exception et PDF interactifs présentant la notice descriptive, les matériaux et la vision du projet.' },
    { kicker: 'Plans', title: 'Plans de Vente 2D/3D Meublés', desc: 'Plans d\'étages texturés et meublés à l\'échelle pour permettre une projection spatiale immédiate et rassurante.' },
    { kicker: 'Quartier', title: 'Cartes d\'Environnement', desc: 'Infographies cartographiques mettant en valeur la proximité des transports, commerces, écoles et parcs.' },
    { kicker: 'Lots', title: 'Fiches Typologiques par Lot', desc: 'Fiches de vente individuelles avec tableau des surfaces, terrasses, orientation solaire et perspective associée.' }
  ]
}));

// 05 Real Estate Web
writeFile('fr/services/site-web-immobilier.html', renderFrSubservice({
  filename: 'fr/services/site-web-immobilier.html',
  canonicalSlug: 'site-web-immobilier',
  esFile: 'web-real-estate',
  enFile: 'real-estate-web',
  deFile: 'projekt-website',
  phaseNum: '05',
  phaseName: 'Sites Web de Promotion',
  heroTitle: 'Un site qui ne fait pas que présenter. Il concrétise le lancement.',
  heroCopy: 'Sites internet développés sur mesure avec une ergonomie architecturale, un affichage ultra-rapide, un visualiseur de lots interactif et la transmission directe des leads.',
  pillars: [
    { kicker: 'UX/UI', title: 'Expérience Architecturale', desc: 'Grands espaces visuels, typographie éditoriale raffinée et immersion complète sans ralentissements.' },
    { kicker: 'Interaction', title: 'Sélecteur de Lots Interactif', desc: 'Module intuitif permettant aux acquéreurs de filtrer par nombre de pièces, étage, exposition et prix.' },
    { kicker: 'Vitesse', title: 'Performance & SEO International', desc: 'Code sémantique léger assurant d\'excellents scores Core Web Vitals et un référencement optimal sur Google.' },
    { kicker: 'Conversion', title: 'Routage CRM en Temps Réel', desc: 'Transmission automatisée des demandes de contact vers votre équipe de vente avec suivi d\'origine marketing.' }
  ]
}));

// 06 Acquisition
writeFile('fr/services/acquisition.html', renderFrSubservice({
  filename: 'fr/services/acquisition.html',
  canonicalSlug: 'acquisition',
  esFile: 'captacion',
  enFile: 'acquisition',
  deFile: 'digitale-vermarktung',
  phaseNum: '06',
  phaseName: 'Lancement & Acquisition Digitale',
  heroTitle: 'Quand l\'image est prête, le lancement débute.',
  heroCopy: 'Campagnes Google Search et Meta Ads ciblées pour relier votre programme à des acquéreurs et investisseurs sérieux, locaux ou internationaux.',
  pillars: [
    { kicker: 'Intention', title: 'Campagnes Google Search', desc: 'Captation des recherches d\'internautes ciblant explicitement des programmes neufs ou appartements d\'exception dans votre ville.' },
    { kicker: 'Précision', title: 'Ciblage Meta Haute Valeur', desc: 'Diffusion ciblée sur Instagram et Facebook selon le niveau patrimonial, les habitudes d\'investissement et le profil socio-professionnel.' },
    { kicker: 'Visuels', title: 'Optimisation Continue des Créations', desc: 'Tests itératifs des rendus 3D, vidéos et textes pour accroître le taux de clics et réduire le coût par contact qualifié.' },
    { kicker: 'Mesure', title: 'Filtrage & Qualification des Leads', desc: 'Mesure stricte des demandes de brochure et d\'appels, avec exclusion des mots-clés non pertinents pour préserver le temps des vendeurs.' }
  ]
}));

// -------------------------------------------------------------
// 7. French Legal Pages
// -------------------------------------------------------------
function renderFrLegal({ title, canonicalSlug, bodyContent }) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Eidos Render</title>
  <link rel="canonical" href="https://eidosrender.es/fr/${canonicalSlug}">
  <link rel="stylesheet" href="../style.css">
  <link rel="icon" type="image/png" sizes="48x48" href="../favicon.png">
</head>
<body class="bg-paper">
  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="./" class="logo"><span>EIDOS RENDER</span><span class="logo-dot"></span></a>
      <a href="contact.html" class="nav-cta">ÉCHANGEONS SUR LE PROJET →</a>
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
        <div>© 2026 Eidos Render. Tous droits réservés.</div>
        <div style="display: flex; gap: 24px;">
          <a href="mentions-legales.html">Mentions Légales</a>
          <a href="politique-de-confidentialite.html">Confidentialité</a>
          <a href="politique-des-cookies.html">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

writeFile('fr/mentions-legales.html', renderFrLegal({
  title: 'Mentions Légales',
  canonicalSlug: 'mentions-legales',
  bodyContent: '<p>Conformément aux dispositions légales européennes relatives aux services de la société de l\'information, ce site est édité par Eidos Render, basé à Valence, Espagne. Pour toute communication officielle : info@eidosrender.es.</p><p style="margin-top: 16px;">L\'ensemble des éléments figurant sur ce portail (textes, rendus 3D, vidéos et marques) sont protégés par le droit de la propriété intellectuelle et demeurent la propriété exclusive d\'Eidos Render ou de ses partenaires contractuels.</p>'
}));

writeFile('fr/politique-de-confidentialite.html', renderFrLegal({
  title: 'Politique de Confidentialité',
  canonicalSlug: 'politique-de-confidentialite',
  bodyContent: '<p>Conformément au Règlement Général sur la Protection des Données (RGPD), Eidos Render collecte et traite les informations transmises volontairement par les utilisateurs à la seule fin de répondre aux demandes commerciales relatives aux services de visualisation 3D et de lancement immobilier.</p><p style="margin-top: 16px;">Aucune donnée n\'est transmise à des tiers sans accord exprès. Vous pouvez exercer vos droits d\'accès, de rectification et d\'effacement à l\'adresse info@eidosrender.es.</p>'
}));

writeFile('fr/politique-des-cookies.html', renderFrLegal({
  title: 'Politique des Cookies',
  canonicalSlug: 'politique-des-cookies',
  bodyContent: '<p>Ce site utilise des cookies techniques nécessaires à sa navigation ainsi que des cookies d\'analyse d\'audience anonymes pour mesurer et améliorer l\'expérience utilisateur. Vous pouvez à tout moment configurer ou refuser ces cookies dans les préférences de votre navigateur.</p>'
}));

console.log('ALL FRENCH FILES GENERATED SUCCESSFULLY.');
