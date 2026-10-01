const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

// Helper to write file safely
function write(filePath, content) {
  const full = path.join(root, filePath);
  const dir = path.dirname(full);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  console.log('Written:', filePath);
}

// Contact page template generator
function generateContactPage(lang, isSubdir = false) {
  const prefix = isSubdir ? '../' : '';
  
  const translations = {
    es: {
      lang: 'es',
      title: 'Contacto — Eidos Render | Del Proyecto al Lanzamiento',
      desc: 'Contacto directo con el estudio. Cuéntenos los detalles de su promoción inmobiliaria para valorar su dirección visual, infografía 3D y materiales de lanzamiento.',
      canonical: 'https://eidosrender.es/contacto',
      kicker: 'Contacto Directo con el Estudio',
      h1: 'DEL PROYECTO<br>AL LANZAMIENTO.<br><span style="color: var(--accent);">HABLEMOS.</span>',
      tagline: 'Imagen · Identidad · Comercial · Digital · Captación',
      p1: 'Si estás preparando una promoción y quieres definir su imagen, materiales y lanzamiento, cuéntanos el proyecto. Coordinamos la dirección visual, la producción de renders y las herramientas comerciales para su salida al mercado.',
      btn: 'HABLEMOS DEL PROYECTO →',
      emailLabel: 'Email directo',
      telLabel: 'Teléfono directo',
      protocolTitle: 'Protocolo de Trabajo',
      protocolSub: 'Información útil para valorar su promoción',
      protocolIntro: 'Para ofrecer una estimación precisa de plazos y dirección visual, suele ser suficiente con enviarnos por correo:',
      item1: 'Planos de arquitectura preliminares (plantas, alzados, sección o modelo 3D).',
      item2: 'Tipología de promoción (residencial colectiva, unifamiliar, obra nueva o rehabilitación).',
      item3: 'Calendario comercial previsto y fecha estimada de inicio de ventas.',
      metaResponse: 'Tiempo de respuesta:',
      metaResponseVal: 'Menos de 24 horas',
      metaNda: 'Confidencialidad:',
      metaNdaVal: 'NDA disponible previa solicitud',
      metaHq: 'Sede central:',
      metaHqVal: 'Valencia, España · Cobertura Europea',
      navProjects: 'Proyectos',
      navServices: 'Servicios',
      navStudio: 'Estudio',
      navProcess: 'Proceso',
      navContact: 'Contacto',
      navCta: 'HABLEMOS DEL PROYECTO →',
      footerAbout: 'Partner visual y creativo para proyectos inmobiliarios. Del proyecto arquitectónico al lanzamiento comercial.',
      footerNav: 'Navegación',
      footerCaps: 'Capacidades',
      footerContact: 'Contacto Directo',
      footerRights: '© 2026 Eidos Render. Todos los derechos reservados.',
      legal: 'Aviso Legal',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      subject: 'Consulta%20Proyecto%20Inmobiliario'
    },
    en: {
      lang: 'en',
      title: 'Contact — Eidos Render | From Project to Launch',
      desc: 'Direct contact with the studio. Share the details of your property development to evaluate art direction, 3D visualisations, and launch collateral.',
      canonical: 'https://eidosrender.es/en/contact',
      kicker: 'Direct Studio Contact',
      h1: 'FROM PROJECT<br>TO LAUNCH.<br><span style="color: var(--accent);">LET’S TALK.</span>',
      tagline: 'Image · Identity · Collateral · Digital · Acquisition',
      p1: 'If you are preparing a property development and want to define its imagery, marketing collateral, and launch strategy, share your project with us. We coordinate visual direction, 3D render production, and commercial tools for market debut.',
      btn: 'LET’S DISCUSS THE PROJECT →',
      emailLabel: 'Direct email',
      telLabel: 'Direct phone',
      protocolTitle: 'Working Protocol',
      protocolSub: 'Useful details to evaluate your development',
      protocolIntro: 'To provide an accurate estimate of timelines and creative direction, sharing the following via email is typically sufficient:',
      item1: 'Preliminary architectural plans (floor plans, elevations, sections or 3D model).',
      item2: 'Development typology (multi-family residential, luxury villas, new build or refurbishment).',
      item3: 'Target commercial schedule and estimated sales launch date.',
      metaResponse: 'Response time:',
      metaResponseVal: 'Under 24 business hours',
      metaNda: 'Confidentiality:',
      metaNdaVal: 'NDA available upon request',
      metaHq: 'Headquarters:',
      metaHqVal: 'Valencia, Spain · European Coverage',
      navProjects: 'Projects',
      navServices: 'Services',
      navStudio: 'Studio',
      navProcess: 'Process',
      navContact: 'Contact',
      navCta: 'LET’S TALK →',
      footerAbout: 'Visual and creative partner for property developments. From architectural design to commercial launch.',
      footerNav: 'Navigation',
      footerCaps: 'Capabilities',
      footerContact: 'Direct Contact',
      footerRights: '© 2026 Eidos Render. All rights reserved.',
      legal: 'Legal Notice',
      privacy: 'Privacy Policy',
      cookies: 'Cookies Policy',
      subject: 'Property%20Development%20Inquiry'
    },
    de: {
      lang: 'de',
      title: 'Kontakt — Eidos Render | Vom Entwurf zum Launch',
      desc: 'Direkter Kontakt zum Studio. Teilen Sie uns die Details Ihres Bauvorhabens mit, um visuelle Regie, 3D-Visualisierungen und Vermarktungsunterlagen zu besprechen.',
      canonical: 'https://eidosrender.es/de/kontakt',
      kicker: 'Direkter Kontakt zum Studio',
      h1: 'VOM ENTWURF<br>ZUM VERKAUFSSTART.<br><span style="color: var(--accent);">SPRECHEN WIR.</span>',
      tagline: 'Bild · Identität · Vermarktung · Digital · Kundengewinnung',
      p1: 'Wenn Sie ein Immobilienprojekt planen und dessen Bildsprache, Vertriebsmaterialien und Launch definieren möchten, stellen Sie uns Ihr Projekt vor. Wir koordinieren visuelle Regie, High-End-Renderings und digitale Verkaufswerkzeuge.',
      btn: 'PROJEKT BESPRECHEN →',
      emailLabel: 'Direkte E-Mail',
      telLabel: 'Direktes Telefon',
      protocolTitle: 'Arbeitsprotokoll',
      protocolSub: 'Hilfreiche Angaben zur Ersteinschätzung',
      protocolIntro: 'Für eine präzise Einschätzung von Zeitplan und kreativer Ausrichtung genügt es meist, uns per E-Mail folgendes zukommen zu lassen:',
      item1: 'Vorläufige Architekturpläne (Grundrisse, Ansichten, Schnitte oder 3D-Modell).',
      item2: 'Projekttypologie (Mehrfamilienhaus, Luxusvilla, Neubau oder Sanierung).',
      item3: 'Geplanter Vermarktungszeitplan und avisierter Vertriebsstart.',
      metaResponse: 'Reaktionszeit:',
      metaResponseVal: 'Innerhalb von 24 Stunden',
      metaNda: 'Vertraulichkeit:',
      metaNdaVal: 'NDA auf Anfrage verfügbar',
      metaHq: 'Hauptsitz:',
      metaHqVal: 'Valencia, Spanien · Europaweite Projekte',
      navProjects: 'Projekte',
      navServices: 'Leistungen',
      navStudio: 'Studio',
      navProcess: 'Prozess',
      navContact: 'Kontakt',
      navCta: 'PROJEKT BESPRECHEN →',
      footerAbout: 'Visueller Partner für anspruchsvolle Immobilienentwicklungen. Vom Architekturentwurf zum Verkaufsstart.',
      footerNav: 'Navigation',
      footerCaps: 'Leistungen',
      footerContact: 'Direkter Kontakt',
      footerRights: '© 2026 Eidos Render. Alle Rechte vorbehalten.',
      legal: 'Impressum',
      privacy: 'Datenschutz',
      cookies: 'Cookies',
      subject: 'Anfrage%20Immobilienprojekt'
    },
    fr: {
      lang: 'fr',
      title: 'Contact — Eidos Render | Du Projet au Lancement',
      desc: 'Contact direct avec le studio. Partagez les détails de votre programme immobilier pour définir votre direction visuelle, imagerie 3D et supports de vente.',
      canonical: 'https://eidosrender.es/fr/contact',
      kicker: 'Contact Direct avec le Studio',
      h1: 'DU PROJET<br>AU LANCEMENT.<br><span style="color: var(--accent);">PARLONS-EN.</span>',
      tagline: 'Image · Identité · Commercial · Digital · Acquisition',
      p1: 'Si vous préparez une opération immobilière et souhaitez concevoir son image, ses outils commerciaux et sa stratégie de lancement, présentez-nous votre projet. Nous coordonnons direction artistique, rendus 3D et outils de commercialisation.',
      btn: 'PARLONS DE VOTRE PROJET →',
      emailLabel: 'Email direct',
      telLabel: 'Téléphone direct',
      protocolTitle: 'Protocole de Travail',
      protocolSub: 'Éléments utiles pour évaluer votre projet',
      protocolIntro: 'Pour établir une estimation précise des délais et de la direction visuelle, il suffit généralement de nous transmettre par email :',
      item1: 'Plans d’architecture préliminaires (plans de niveaux, façades, coupes ou maquette 3D).',
      item2: 'Typologie du programme (résidentiel collectif, villa haut de gamme, neuf ou réhabilitation).',
      item3: 'Calendrier commercial envisagé et date estimée de lancement commercial.',
      metaResponse: 'Délai de réponse :',
      metaResponseVal: 'Sous 24 heures ouvrées',
      metaNda: 'Confidentialité :',
      metaNdaVal: 'Accord de confidentialité (NDA) sur demande',
      metaHq: 'Siège :',
      metaHqVal: 'Valence, Espagne · Couverture Européenne',
      navProjects: 'Projets',
      navServices: 'Services',
      navStudio: 'Studio',
      navProcess: 'Processus',
      navContact: 'Contact',
      navCta: 'PARLONS DU PROJET →',
      footerAbout: 'Partenaire visuel et créatif pour programmes immobiliers. Du projet architectural au lancement commercial.',
      footerNav: 'Navigation',
      footerCaps: 'Expertises',
      footerContact: 'Contact Direct',
      footerRights: '© 2026 Eidos Render. Tous droits réservés.',
      legal: 'Mentions Légales',
      privacy: 'Politique de Confidentialité',
      cookies: 'Cookies',
      subject: 'Demande%20Projet%20Immobilier'
    }
  };

  const t = translations[lang];

  // Base paths
  let homeLink, projectsLink, servicesLink, contactLink, legalLink, privacyLink, cookiesLink;
  let switcherEs, switcherEn, switcherDe, switcherFr;

  if (lang === 'es') {
    homeLink = isSubdir ? '../' : './';
    projectsLink = isSubdir ? '../proyectos.html' : 'proyectos.html';
    servicesLink = isSubdir ? '../servicios.html' : 'servicios.html';
    contactLink = isSubdir ? '../contacto.html' : 'contacto.html';
    legalLink = isSubdir ? '../aviso-legal.html' : 'aviso-legal.html';
    privacyLink = isSubdir ? '../privacidad.html' : 'privacidad.html';
    cookiesLink = isSubdir ? '../cookies.html' : 'cookies.html';

    switcherEs = '#';
    switcherEn = isSubdir ? '../en/contact.html' : 'en/contact.html';
    switcherDe = isSubdir ? '../de/kontakt.html' : 'de/kontakt.html';
    switcherFr = isSubdir ? '../fr/contact.html' : 'fr/contact.html';
  } else if (lang === 'en') {
    homeLink = isSubdir ? '../../en/' : '../en/';
    projectsLink = isSubdir ? '../../en/projects.html' : 'projects.html';
    servicesLink = isSubdir ? '../../en/services.html' : 'services.html';
    contactLink = isSubdir ? '../../en/contact.html' : 'contact.html';
    legalLink = isSubdir ? '../../en/legal-notice.html' : 'legal-notice.html';
    privacyLink = isSubdir ? '../../en/privacy-policy.html' : 'privacy-policy.html';
    cookiesLink = isSubdir ? '../../en/cookie-policy.html' : 'cookie-policy.html';

    switcherEs = isSubdir ? '../../contacto.html' : '../contacto.html';
    switcherEn = '#';
    switcherDe = isSubdir ? '../../de/kontakt.html' : '../de/kontakt.html';
    switcherFr = isSubdir ? '../../fr/contact.html' : '../fr/contact.html';
  } else if (lang === 'de') {
    homeLink = isSubdir ? '../../de/' : '../de/';
    projectsLink = isSubdir ? '../../de/projekte.html' : 'projekte.html';
    servicesLink = isSubdir ? '../../de/leistungen.html' : 'leistungen.html';
    contactLink = isSubdir ? '../../de/kontakt.html' : 'kontakt.html';
    legalLink = isSubdir ? '../../de/impressum.html' : 'impressum.html';
    privacyLink = isSubdir ? '../../de/datenschutz.html' : 'datenschutz.html';
    cookiesLink = isSubdir ? '../../de/cookies.html' : 'cookies.html';

    switcherEs = isSubdir ? '../../contacto.html' : '../contacto.html';
    switcherEn = isSubdir ? '../../en/contact.html' : '../en/contact.html';
    switcherDe = '#';
    switcherFr = isSubdir ? '../../fr/contact.html' : '../fr/contact.html';
  } else if (lang === 'fr') {
    homeLink = isSubdir ? '../../fr/' : '../fr/';
    projectsLink = isSubdir ? '../../fr/projets.html' : 'projets.html';
    servicesLink = isSubdir ? '../../fr/services.html' : 'services.html';
    contactLink = isSubdir ? '../../fr/contact.html' : 'contact.html';
    legalLink = isSubdir ? '../../fr/mentions-legales.html' : 'mentions-legales.html';
    privacyLink = isSubdir ? '../../fr/politique-de-confidentialite.html' : 'politique-de-confidentialite.html';
    cookiesLink = isSubdir ? '../../fr/politique-des-cookies.html' : 'politique-des-cookies.html';

    switcherEs = isSubdir ? '../../contacto.html' : '../contacto.html';
    switcherEn = isSubdir ? '../../en/contact.html' : '../en/contact.html';
    switcherDe = isSubdir ? '../../de/kontakt.html' : '../de/kontakt.html';
    switcherFr = '#';
  }

  const assetPrefix = (lang === 'es') 
    ? (isSubdir ? '../' : '') 
    : (isSubdir ? '../../' : '../');

  return `<!DOCTYPE html>
<html lang="${t.lang}">
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
  
  <title>${t.title}</title>
  <meta name="description" content="${t.desc}">
  <link rel="canonical" href="${t.canonical}">

  <!-- International SEO / Hreflang -->
  <link rel="alternate" hreflang="es" href="https://eidosrender.es/contacto">
  <link rel="alternate" hreflang="en" href="https://eidosrender.es/en/contact">
  <link rel="alternate" hreflang="de" href="https://eidosrender.es/de/kontakt">
  <link rel="alternate" hreflang="fr" href="https://eidosrender.es/fr/contact">
  <link rel="alternate" hreflang="x-default" href="https://eidosrender.es/en/contact">

  <!-- Multilingual & Geo-routing -->
  <script src="${assetPrefix}js/i18n.js"></script>

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Eidos Render">
  <meta property="og:title" content="${t.title}">
  <meta property="og:description" content="${t.desc}">
  <meta property="og:url" content="${t.canonical}">
  <meta property="og:image" content="https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg">
  <meta name="twitter:card" content="summary_large_image">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="${assetPrefix}favicon.svg">
  <link rel="shortcut icon" href="${assetPrefix}favicon.svg">
  <link rel="apple-touch-icon" sizes="180x180" href="${assetPrefix}apple-touch-icon.png">

  <link rel="stylesheet" href="${assetPrefix}style.css">
</head>
<body class="bg-paper">

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6R4S8NC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- Header Fijo y Discreto con Isotipo C -->
  <header class="nav-header nav-light" role="banner">
    <div class="nav-inner">
      <a href="${homeLink}" class="logo" aria-label="Eidos Render Inicio">
        <svg class="isotype-icon" viewBox="0 0 32 32" width="22" height="22" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="2"/>
          <line x1="2" y1="16" x2="30" y2="16" stroke="var(--accent)" stroke-width="2" stroke-linecap="square" class="iso-line"/>
        </svg>
        <span class="logo-text">EIDOS RENDER</span>
      </a>

      <nav aria-label="Navegación principal">
        <ul class="nav-links">
          <li><a href="${projectsLink}">${t.navProjects}</a></li>
          <li><a href="${servicesLink}">${t.navServices}</a></li>
          <li><a href="${homeLink}#estudio">${t.navStudio}</a></li>
          <li><a href="${homeLink}#proceso">${t.navProcess}</a></li>
          <li><a href="${contactLink}" class="active">${t.navContact}</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher" aria-label="Selector de idioma">
          <span class="${lang === 'es' ? 'active' : ''}" data-lang="es">${lang === 'es' ? 'ES' : `<a href="${switcherEs}" onclick="window.setLang('es')">ES</a>`}</span>
          <span class="lang-divider">/</span>
          <span class="${lang === 'en' ? 'active' : ''}" data-lang="en">${lang === 'en' ? 'EN' : `<a href="${switcherEn}" onclick="window.setLang('en')">EN</a>`}</span>
          <span class="lang-divider">/</span>
          <span class="${lang === 'de' ? 'active' : ''}" data-lang="de">${lang === 'de' ? 'DE' : `<a href="${switcherDe}" onclick="window.setLang('de')">DE</a>`}</span>
          <span class="lang-divider">/</span>
          <span class="${lang === 'fr' ? 'active' : ''}" data-lang="fr">${lang === 'fr' ? 'FR' : `<a href="${switcherFr}" onclick="window.setLang('fr')">FR</a>`}</span>
        </div>

        <a href="mailto:info@eidosrender.es?subject=${t.subject}" class="nav-cta">
          ${t.navCta}
        </a>
      </div>

      <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-nav-overlay" aria-hidden="true">
    <div>
      <div class="mobile-lang-switcher" aria-label="Selector de idioma">
        <a href="${switcherEs}" class="${lang === 'es' ? 'active' : ''}">ES</a>
        <a href="${switcherEn}" class="${lang === 'en' ? 'active' : ''}">EN</a>
        <a href="${switcherDe}" class="${lang === 'de' ? 'active' : ''}">DE</a>
        <a href="${switcherFr}" class="${lang === 'fr' ? 'active' : ''}">FR</a>
      </div>

      <span class="kicker crimson">${t.footerNav}</span>
      <ul class="mobile-nav-links">
        <li><a href="${projectsLink}">${t.navProjects}</a></li>
        <li><a href="${servicesLink}">${t.navServices}</a></li>
        <li><a href="${homeLink}#estudio">${t.navStudio}</a></li>
        <li><a href="${homeLink}#proceso">${t.navProcess}</a></li>
        <li><a href="${contactLink}" class="active">${t.navContact}</a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div><strong>EIDOS RENDER</strong> — Architectural Visualisation</div>
      <div><a href="mailto:info@eidosrender.es">info@eidosrender.es</a> · <a href="tel:+34614459144">+34 614 45 91 44</a></div>
    </div>
  </div>

  <main style="padding-top: var(--nav-h);">

    <!-- Sección de Contacto Editorial (Cero formularios, Contacto Directo) -->
    <section class="section bg-paper" style="padding: clamp(90px, 12vw, 160px) 0; min-height: 80vh; display: flex; align-items: center;">
      <div class="container">
        
        <div class="grid-12" style="align-items: start; gap: clamp(32px, 5vw, 64px);">
          
          <!-- Columna Izquierda: Mensaje Central y Contacto Inmediato -->
          <div style="grid-column: 1 / 8;">
            <div class="kicker crimson" style="margin-bottom: 24px;">
              <span class="kicker-dot"></span>
              ${t.kicker}
            </div>
            
            <h1 class="display-title" style="margin-bottom: 28px; line-height: 1.05; letter-spacing: -0.02em;">
              ${t.h1}
            </h1>

            <div style="font-family: var(--font-display); font-size: clamp(0.92rem, 1.2vw, 1.15rem); letter-spacing: 0.16em; text-transform: uppercase; color: var(--stone-text); margin-bottom: 36px;">
              ${t.tagline}
            </div>
            
            <p class="body-large" style="margin-bottom: 48px; max-width: 620px; color: var(--charcoal); opacity: 0.9; font-size: 1.2rem; line-height: 1.6;">
              ${t.p1}
            </p>

            <div style="display: flex; flex-direction: column; gap: 28px; align-items: flex-start;">
              <a href="mailto:info@eidosrender.es?subject=${t.subject}" class="btn-editorial btn-crimson" style="font-size: 1.05rem; padding: 20px 38px;">
                ${t.btn}
              </a>
              
              <div style="display: flex; gap: 36px; flex-wrap: wrap; align-items: baseline; margin-top: 12px; border-top: 1px solid var(--line); padding-top: 24px; width: 100%;">
                <div>
                  <span class="kicker" style="color: var(--stone-text); display: block; margin-bottom: 4px; font-size: 0.76rem;">${t.emailLabel}</span>
                  <a href="mailto:info@eidosrender.es" class="link-draw" style="font-size: 1.25rem; font-family: var(--font-display); letter-spacing: 0.04em;">
                    info@eidosrender.es
                  </a>
                </div>
                <div>
                  <span class="kicker" style="color: var(--stone-text); display: block; margin-bottom: 4px; font-size: 0.76rem;">${t.telLabel}</span>
                  <a href="tel:+34614459144" class="link-draw" style="font-size: 1.2rem; font-family: var(--font-display); letter-spacing: 0.04em;">
                    +34 614 45 91 44
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Protocolo Editorial de Recepción -->
          <div style="grid-column: 8 / 13;">
            <div style="background-color: var(--cream-2); border: 1px solid var(--line-strong); padding: clamp(32px, 4vw, 48px);">
              <div class="kicker" style="color: var(--stone-text); margin-bottom: 18px;">
                ${t.protocolTitle}
              </div>
              
              <h2 class="display-sub" style="font-size: 1.45rem; margin-bottom: 20px; color: var(--charcoal); line-height: 1.2;">
                ${t.protocolSub}
              </h2>

              <p class="body-regular" style="color: var(--stone-text); margin-bottom: 28px; line-height: 1.6;">
                ${t.protocolIntro}
              </p>

              <ul style="list-style: none; padding: 0; margin: 0 0 32px 0; display: flex; flex-direction: column; gap: 16px;">
                <li style="display: flex; gap: 12px; align-items: baseline;">
                  <span style="color: var(--accent); font-weight: 700;">—</span>
                  <span class="body-regular" style="color: var(--charcoal);">${t.item1}</span>
                </li>
                <li style="display: flex; gap: 12px; align-items: baseline;">
                  <span style="color: var(--accent); font-weight: 700;">—</span>
                  <span class="body-regular" style="color: var(--charcoal);">${t.item2}</span>
                </li>
                <li style="display: flex; gap: 12px; align-items: baseline;">
                  <span style="color: var(--accent); font-weight: 700;">—</span>
                  <span class="body-regular" style="color: var(--charcoal);">${t.item3}</span>
                </li>
              </ul>

              <div style="border-top: 1px solid var(--line); padding-top: 24px; display: flex; flex-direction: column; gap: 14px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.88rem;">
                  <span style="color: var(--stone-text);">${t.metaResponse}</span>
                  <strong style="color: var(--charcoal);">${t.metaResponseVal}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.88rem;">
                  <span style="color: var(--stone-text);">${t.metaNda}</span>
                  <strong style="color: var(--charcoal);">${t.metaNdaVal}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.88rem;">
                  <span style="color: var(--stone-text);">${t.metaHq}</span>
                  <strong style="color: var(--charcoal);">${t.metaHqVal}</strong>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

  </main>

  <!-- Footer Editorial Tipo Cortina -->
  <div class="curtain-footer-wrap">
    <footer class="curtain-footer" role="contentinfo">
      <div class="container">
        
        <div class="footer-top">
          <div>
            <a href="${homeLink}" class="logo" style="margin-bottom: 20px;" aria-label="Eidos Render">
              <svg class="isotype-icon" viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="2"/>
                <line x1="2" y1="16" x2="30" y2="16" stroke="var(--accent-on-dark)" stroke-width="2" stroke-linecap="square"/>
              </svg>
              <span class="logo-text">EIDOS RENDER</span>
            </a>
            <p class="body-regular" style="color: rgba(239, 233, 220, 0.65); max-width: 380px;">
              ${t.footerAbout}
            </p>
          </div>

          <div>
            <div class="footer-col-title">${t.footerNav}</div>
            <ul class="footer-links">
              <li><a href="${projectsLink}">${t.navProjects}</a></li>
              <li><a href="${servicesLink}">${t.navServices}</a></li>
              <li><a href="${homeLink}#estudio">${t.navStudio}</a></li>
              <li><a href="${homeLink}#proceso">${t.navProcess}</a></li>
              <li><a href="${contactLink}">${t.navContact}</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-col-title">${t.footerCaps}</div>
            <ul class="footer-links">
              <li><a href="${servicesLink}">${t.navServices}</a></li>
              <li><a href="${projectsLink}">${t.navProjects}</a></li>
              <li><a href="mailto:info@eidosrender.es">${t.emailLabel}</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-col-title">${t.footerContact}</div>
            <ul class="footer-links">
              <li><a href="mailto:info@eidosrender.es">info@eidosrender.es</a></li>
              <li><a href="tel:+34614459144">+34 614 45 91 44</a></li>
              <li><span style="color: rgba(239, 233, 220, 0.5);">Valencia · Europa</span></li>
            </ul>
          </div>
        </div>

        <div class="curtain-brand-banner" aria-hidden="true">
          <span>EIDOS RENDER</span>
        </div>

        <div class="footer-bottom">
          <div>${t.footerRights}</div>
          <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
            <div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
              <span style="color: ${lang === 'es' ? 'var(--accent-on-dark)' : 'inherit'}; font-weight: ${lang === 'es' ? '700' : '400'};"><a href="${switcherEs}">ES</a></span> ·
              <span style="color: ${lang === 'en' ? 'var(--accent-on-dark)' : 'inherit'}; font-weight: ${lang === 'en' ? '700' : '400'};"><a href="${switcherEn}">EN</a></span> ·
              <span style="color: ${lang === 'de' ? 'var(--accent-on-dark)' : 'inherit'}; font-weight: ${lang === 'de' ? '700' : '400'};"><a href="${switcherDe}">DE</a></span> ·
              <span style="color: ${lang === 'fr' ? 'var(--accent-on-dark)' : 'inherit'}; font-weight: ${lang === 'fr' ? '700' : '400'};"><a href="${switcherFr}">FR</a></span>
            </div>
            <a href="${legalLink}">${t.legal}</a>
            <a href="${privacyLink}">${t.privacy}</a>
            <a href="${cookiesLink}">${t.cookies}</a>
          </div>
        </div>

      </div>
    </footer>
  </div>

  <script src="${assetPrefix}main.js" defer></script>
</body>
</html>
`;
}

// Generate for all contact endpoints
const targets = [
  { path: 'contacto.html', lang: 'es', isSubdir: false },
  { path: 'contacto/index.html', lang: 'es', isSubdir: true },
  { path: 'en/contact.html', lang: 'en', isSubdir: false },
  { path: 'en/contact/index.html', lang: 'en', isSubdir: true },
  { path: 'de/kontakt.html', lang: 'de', isSubdir: false },
  { path: 'de/kontakt/index.html', lang: 'de', isSubdir: true },
  { path: 'fr/contact.html', lang: 'fr', isSubdir: false },
  { path: 'fr/contact/index.html', lang: 'fr', isSubdir: true }
];

targets.forEach(t => {
  const html = generateContactPage(t.lang, t.isSubdir);
  write(t.path, html);
});

console.log('All contact pages generated successfully with direct contact protocol and luxury curtain footer!');
