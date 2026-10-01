const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const indexMaster = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

function translateToEn(html) {
  let res = html;

  // Paths
  res = res.replace(/<html lang="es">/, '<html lang="en">');
  res = res.replace(/<link rel="canonical" href="https:\/\/eidosrender\.es\/">/, '<link rel="canonical" href="https://eidosrender.es/en/">');
  res = res.replace(/href="style\.css"/g, 'href="../style.css"');
  res = res.replace(/src="main\.js"/g, 'src="../main.js"');
  res = res.replace(/src="js\/i18n\.js"/g, 'src="../js/i18n.js"');
  res = res.replace(/href="favicon\.svg"/g, 'href="../favicon.svg"');
  res = res.replace(/href="apple-touch-icon\.png"/g, 'href="../apple-touch-icon.png"');
  res = res.replace(/src="img\//g, 'src="../img/');
  res = res.replace(/srcset="img\//g, 'srcset="../img/');
  res = res.replace(/poster="img\//g, 'poster="../img/');
  res = res.replace(/data-image="img\//g, 'data-image="../img/');
  res = res.replace(/content="https:\/\/eidosrender\.es\/favicon\.svg"/g, 'content="https://eidosrender.es/favicon.svg"');
  res = res.replace(/content="https:\/\/eidosrender\.es\/img\//g, 'content="https://eidosrender.es/img/');

  // Meta & Title
  res = res.replace(
    /<title>Eidos Render \| Visualización Arquitectónica & Dirección de Lanzamiento<\/title>/,
    '<title>Eidos Render | Architectural Visualisation & Real Estate Launch</title>'
  );
  res = res.replace(
    /content="Estudio de visualización arquitectónica 3D, dirección de arte y materiales comerciales para el lanzamiento de promociones inmobiliarias y arquitectura de autor\."/,
    'content="High-end 3D architectural visualisation, art direction, and launch collateral for property developments and signature architecture across Europe."'
  );
  res = res.replace(
    /content="Partner visual para proyectos inmobiliarios\. Del proyecto arquitectónico al lanzamiento comercial\."/,
    'content="Visual partner for property developments. From architectural design to market launch."'
  );

  // Nav Links
  res = res.replace(
    /<ul class="nav-links">[\s\S]*?<\/ul>/,
    `<ul class="nav-links">
          <li><a href="#proyectos">Projects</a></li>
          <li><a href="#servicios">Services</a></li>
          <li><a href="#estudio">Studio</a></li>
          <li><a href="#del-boceto-al-render">Layer Process</a></li>
          <li><a href="#proceso">Methodology</a></li>
          <li><a href="#contacto">Contact</a></li>
        </ul>`
  );

  // Lang Switcher in Header
  res = res.replace(
    /<div class="lang-switcher" aria-label="Selector de idioma">[\s\S]*?<\/div>/,
    `<div class="lang-switcher" aria-label="Language Selector">
          <a href="../" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="en">EN</span>
          <span class="lang-divider">/</span>
          <a href="../de/" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <a href="../fr/" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>`
  );

  // Nav CTA
  res = res.replace(
    /<a href="#contacto" class="nav-cta">\s*HABLEMOS DEL PROYECTO →\s*<\/a>/,
    `<a href="#contacto" class="nav-cta">
          LET’S TALK →
        </a>`
  );

  // Mobile menu
  res = res.replace(
    /<div class="mobile-lang-switcher" aria-label="Selector de idioma">[\s\S]*?<\/div>/,
    `<div class="mobile-lang-switcher" aria-label="Language Selector">
        <a href="../" data-lang="es" onclick="window.setLang('es')">ES</a>
        <span class="active" data-lang="en">EN</span>
        <a href="../de/" data-lang="de" onclick="window.setLang('de')">DE</a>
        <a href="../fr/" data-lang="fr" onclick="window.setLang('fr')">FR</a>
      </div>`
  );
  res = res.replace(
    /<span class="kicker crimson">Navegación<\/span>\s*<ul class="mobile-nav-links">[\s\S]*?<\/ul>/,
    `<span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="#proyectos">Projects</a></li>
        <li><a href="#servicios">Services</a></li>
        <li><a href="#estudio">Studio</a></li>
        <li><a href="#del-boceto-al-render">Layer Process</a></li>
        <li><a href="#proceso">Methodology</a></li>
        <li><a href="#contacto">Contact</a></li>
      </ul>`
  );

  // Hero Section
  res = res.replace(/Dirección Visual & Lanzamiento Comercial/, 'Visual Direction & Real Estate Launch');
  res = res.replace(
    /<h1 class="display-hero mask-reveal-title"[^>]*>[\s\S]*?<\/h1>/,
    `<h1 class="display-hero mask-reveal-title" style="color: var(--cream); max-width: 1300px; margin-bottom: 28px;">
          From architectural<br>
          project<br>
          to launch.
        </h1>`
  );
  res = res.replace(
    /Partimos de la arquitectura\. Construimos su imagen\. Y la llevamos hasta el mercado con un sistema visual integral diseñado para promotoras, estudios de arquitectura e inversión inmobiliaria\./,
    'We start from architecture. We shape its image. And we bring it to market with a comprehensive visual system tailored for property developers, architecture studios, and real estate funds.'
  );
  res = res.replace(/HABLEMOS DEL PROYECTO →/g, 'LET’S DISCUSS THE PROJECT →');
  res = res.replace(/PROYECTOS ↓/, 'PROJECTS ↓');

  // Statement Section
  res = res.replace(/El Render es el Producto/, 'The Render is the Product');
  res = res.replace(
    /Un render no es una imagen técnica\.<br>\s*Es el primer activo comercial de una promoción\./,
    'A render is not a technical drawing.<br> It is the primary commercial asset of a development.'
  );
  res = res.replace(
    /En el sector inmobiliario actual, el comprador adquiere una emoción antes de que comience la obra[\s\S]*?acelerar la toma de decisiones\./,
    'In modern real estate marketing, buyers acquire an emotion before construction begins. We craft imagery with architectural rigor and commercial clarity: framing spaces, capturing natural light, and creating an editorial narrative that accelerates decision-making.'
  );

  // Pinned Horizontal Gallery
  res = res.replace(/Galería Seleccionada/, 'Selected Works');
  res = res.replace(/Dossieres de Promoción/, 'Development Dossiers');
  res = res.replace(/Residencial Colectivo · Valencia/g, 'Collective Residential · Valencia');
  res = res.replace(/Campaña visual 3D exterior e interior para promoción de 24 viviendas frente a los jardines del Real\./, 'Comprehensive exterior and interior 3D campaign for a 24-unit luxury residential development.');
  res = res.replace(/Vivienda Unifamiliar · Alicante/g, 'Luxury Villa · Alicante');
  res = res.replace(/Estudio de soleamiento, integración paisajística y materialidad mediterránea en parcela en ladera\./, 'Sunlight study, cliff integration, and Mediterranean materiality on a coastal topography.');
  res = res.replace(/Espacios Interiores & Estilo de Vida · Valencia/g, 'Interiors & Lifestyle · Valencia');
  res = res.replace(/Infografía de cocinas de autor, texturas naturales y carpintería a medida con luz natural rasante\./, 'Bespoke kitchens, natural stone textures, and tailored millwork bathed in grazing sunlight.');
  res = res.replace(/Rehabilitación & Interiorismo · Valencia/g, 'Historic Penthouse · Valencia');
  res = res.replace(/Recreación fotorrealista de vivienda histórica reformada para comercialización en fase de proyecto\./, 'Photorealistic visualisation of a renovated heritage apartment for off-plan presale.');
  res = res.replace(/VER ARCHIVO DE PROYECTOS →/, 'VIEW PROJECTS ARCHIVE →');

  // Services Section
  res = res.replace(/Capacidades Integrales/, 'End-to-End Capabilities');
  res = res.replace(/Un único estudio\.<br>Todo el ciclo del lanzamiento\./, 'One single studio.<br>The complete launch cycle.');
  res = res.replace(/Infografía 3D de Arquitectura/, '3D Architectural Visualisation');
  res = res.replace(/Vídeo 3D & Recorridos Cinematográficos/, '3D Video & Cinematic Walkthroughs');
  res = res.replace(/Branding & Identidad Inmobiliaria/, 'Real Estate Branding & Identity');
  res = res.replace(/Material Comercial & Dossiers/, 'Sales Collateral & Brochures');
  res = res.replace(/Web de Promoción Inmobiliaria/, 'Property Development Websites');
  res = res.replace(/Captación Digital & Campañas/, 'Digital Lead Acquisition');

  // Layer Scrub Section
  res = res.replace(/Proceso Técnico/, 'Technical Process');
  res = res.replace(/Del boceto al render\.<br>Cuatro capas de precisión\./, 'From sketch to render.<br>Four precision passes.');
  res = res.replace(/Haga scroll para ver cómo se construye cada capa técnica sobre la arquitectura base\./, 'Scroll to inspect how each technical layer is sculpted over the base architectural geometry.');
  res = res.replace(/ARCILLA/g, 'CLAY');
  res = res.replace(/Volumetría base, calibración de cámara y encuadre compositivo\./, 'Base geometry, optical calibration, and camera framing.');
  res = res.replace(/MATERIALIDAD/g, 'MATERIALITY');
  res = res.replace(/Asignación física de materiales \(PBR\), texturas reales y haptología\./, 'Physically based rendering (PBR), authentic materials, and surface tactile depth.');
  res = res.replace(/ILUMINACIÓN/g, 'LIGHTING');
  res = res.replace(/Cálculo de acimut solar, difusión atmosférica y contrastes lumínicos\./, 'Solar azimuth calculation, atmospheric diffusion, and luminous contrast.');
  res = res.replace(/RENDER FINAL/g, 'FINAL RENDER');
  res = res.replace(/Postproducción cinematográfica, atmósfera fotográfica y detalle 4K\./, 'Cinematic color grading, photographic atmosphere, and 4K detail handover.');

  // Comparator Section
  res = res.replace(/Estudio Lumínico/, 'Lighting Study');
  res = res.replace(/Comportamiento solar:\s*Día y Noche\./, 'Solar Study: Day and Night.');
  res = res.replace(/Arrastre el separador para comparar el impacto del soleamiento cenital frente a la iluminación artificial crepuscular\./, 'Drag the divider to compare the impact of zenithal daylight against twilight warmth.');
  res = res.replace(/LUZ NATURAL · MEDIODÍA/, 'NATURAL LIGHT · MIDDAY');
  res = res.replace(/ATMÓSFERA CREPUSCULAR · NOCHE/, 'TWILIGHT ATMOSPHERE · NIGHT');

  // Studio Section
  res = res.replace(/Arquitectura, no sólo software\./, 'Architecture, not just software.');
  res = res.replace(/Fundamento Arquitectónico/, 'Architectural Grounding');
  res = res.replace(/Dirección de Arte Rigurosa/, 'Rigorous Art Direction');
  res = res.replace(/Un Único Interlocutor/, 'Single Dedicated Lead');

  // Process Methodology Section
  res = res.replace(/Metodología/, 'Methodology');
  res = res.replace(/Cuatro fases\. Cero fricción\./, 'Four phases. Zero friction.');
  res = res.replace(/Análisis y Geometría/, 'Analysis & Geometry');
  res = res.replace(/Materialidad e Iluminación/, 'Materiality & Light');
  res = res.replace(/Producción Visual Integral/, 'Integral Production');
  res = res.replace(/Entrega y Lanzamiento/, 'Handover & Launch');
  res = res.replace(/PLANIFIQUEMOS EL LANZAMIENTO →/, 'PLAN YOUR LAUNCH →');

  // Contact Section
  res = res.replace(/Contacto Directo/, 'Direct Studio Contact');
  res = res.replace(
    /DEL PROYECTO<br>\s*AL LANZAMIENTO\.<br>\s*<span[^>]*>HABLEMOS\.<\/span>/,
    `FROM PROJECT<br>
          TO LAUNCH.<br>
          <span style="color: var(--accent-on-dark);">LET’S TALK.</span>`
  );
  res = res.replace(
    /Si estás preparando una promoción y quieres definir su imagen, materiales y lanzamiento, cuéntanos el proyecto\./,
    'If you are preparing a property development and want to define its imagery, commercial collateral, and launch strategy, share your project with us.'
  );
  res = res.replace(/Sede Central · Valencia, España/, 'Headquarters · Valencia, Spain');
  res = res.replace(/Ámbito · España · Reino Unido · Alemania · Francia · Suiza/, 'Coverage · Spain · United Kingdom · Germany · France · Switzerland');

  // Footer Navigation
  res = res.replace(/Navegación/g, 'Navigation');
  res = res.replace(/Capacidades/g, 'Capabilities');
  res = res.replace(/Contacto Directo/g, 'Direct Contact');
  res = res.replace(/Valencia · Europa/g, 'Valencia · Europe');
  res = res.replace(/Preguntas Frecuentes/g, 'Frequently Asked Questions');
  res = res.replace(/© 2026 Eidos Render\. Todos los derechos reservados\./, '© 2026 Eidos Render. All rights reserved.');
  res = res.replace(/Aviso Legal/g, 'Legal Notice');
  res = res.replace(/Privacidad/g, 'Privacy');
  res = res.replace(/Cookies/g, 'Cookies');

  // Footer Links to subpages
  res = res.replace(/href="servicios\/infografia-3d\.html"/g, 'href="services/3d-rendering.html"');
  res = res.replace(/href="servicios\/video-3d\.html"/g, 'href="services/3d-video.html"');
  res = res.replace(/href="servicios\/branding\.html"/g, 'href="services/branding.html"');
  res = res.replace(/href="servicios\/material-comercial\.html"/g, 'href="services/marketing-collateral.html"');
  res = res.replace(/href="servicios\/web-real-estate\.html"/g, 'href="services/real-estate-web.html"');
  res = res.replace(/href="servicios\/captacion\.html"/g, 'href="services/acquisition.html"');
  res = res.replace(/href="proyectos\.html"/g, 'href="projects.html"');
  res = res.replace(/href="servicios\.html"/g, 'href="services.html"');
  res = res.replace(/href="contacto\.html"/g, 'href="contact.html"');
  res = res.replace(/href="aviso-legal\.html"/g, 'href="legal-notice.html"');
  res = res.replace(/href="privacidad\.html"/g, 'href="privacy-policy.html"');
  res = res.replace(/href="cookies\.html"/g, 'href="cookie-policy.html"');

  // Footer lang active indicators
  res = res.replace(
    /<div style="display: flex; gap: 8px; font-size: 0\.78rem; text-transform: uppercase;">[\s\S]*?<\/div>/,
    `<div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
              <a href="../" onclick="window.setLang('es')">ES</a> ·
              <span style="color: var(--accent-on-dark); font-weight: 700;">EN</span> ·
              <a href="../de/" onclick="window.setLang('de')">DE</a> ·
              <a href="../fr/" onclick="window.setLang('fr')">FR</a>
            </div>`
  );

  return res;
}

function translateToDe(html) {
  let res = html;

  // Paths
  res = res.replace(/<html lang="es">/, '<html lang="de">');
  res = res.replace(/<link rel="canonical" href="https:\/\/eidosrender\.es\/">/, '<link rel="canonical" href="https://eidosrender.es/de/">');
  res = res.replace(/href="style\.css"/g, 'href="../style.css"');
  res = res.replace(/src="main\.js"/g, 'src="../main.js"');
  res = res.replace(/src="js\/i18n\.js"/g, 'src="../js/i18n.js"');
  res = res.replace(/href="favicon\.svg"/g, 'href="../favicon.svg"');
  res = res.replace(/href="apple-touch-icon\.png"/g, 'href="../apple-touch-icon.png"');
  res = res.replace(/src="img\//g, 'src="../img/');
  res = res.replace(/srcset="img\//g, 'srcset="../img/');
  res = res.replace(/poster="img\//g, 'poster="../img/');
  res = res.replace(/data-image="img\//g, 'data-image="../img/');
  res = res.replace(/content="https:\/\/eidosrender\.es\/favicon\.svg"/g, 'content="https://eidosrender.es/favicon.svg"');
  res = res.replace(/content="https:\/\/eidosrender\.es\/img\//g, 'content="https://eidosrender.es/img/');

  // Meta & Title
  res = res.replace(
    /<title>Eidos Render \| Visualización Arquitectónica & Dirección de Lanzamiento<\/title>/,
    '<title>Eidos Render | 3D-Architekturvisualisierung & Immobilien-Launch</title>'
  );
  res = res.replace(
    /content="Estudio de visualización arquitectónica 3D, dirección de arte y materiales comerciales para el lanzamiento de promociones inmobiliarias y arquitectura de autor\."/,
    'content="Hochwertige 3D-Architekturvisualisierung, visuelle Regie und Vermarktungsunterlagen für anspruchsvolle Bauträger und Architekturbüros in Europa."'
  );
  res = res.replace(
    /content="Partner visual para proyectos inmobiliarios\. Del proyecto arquitectónico al lanzamiento comercial\."/,
    'content="Visueller Partner für Immobilienentwickler. Vom Architekturentwurf zum Verkaufsstart."'
  );

  // Nav Links
  res = res.replace(
    /<ul class="nav-links">[\s\S]*?<\/ul>/,
    `<ul class="nav-links">
          <li><a href="#proyectos">Projekte</a></li>
          <li><a href="#servicios">Leistungen</a></li>
          <li><a href="#estudio">Studio</a></li>
          <li><a href="#del-boceto-al-render">Schichten-Prozess</a></li>
          <li><a href="#proceso">Methodik</a></li>
          <li><a href="#contacto">Kontakt</a></li>
        </ul>`
  );

  // Lang Switcher in Header
  res = res.replace(
    /<div class="lang-switcher" aria-label="Selector de idioma">[\s\S]*?<\/div>/,
    `<div class="lang-switcher" aria-label="Sprachauswahl">
          <a href="../" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../en/" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="de">DE</span>
          <span class="lang-divider">/</span>
          <a href="../fr/" data-lang="fr" onclick="window.setLang('fr')">FR</a>
        </div>`
  );

  // Nav CTA
  res = res.replace(
    /<a href="#contacto" class="nav-cta">\s*HABLEMOS DEL PROYECTO →\s*<\/a>/,
    `<a href="#contacto" class="nav-cta">
          PROJEKT BESPRECHEN →
        </a>`
  );

  // Mobile menu
  res = res.replace(
    /<div class="mobile-lang-switcher" aria-label="Selector de idioma">[\s\S]*?<\/div>/,
    `<div class="mobile-lang-switcher" aria-label="Sprachauswahl">
        <a href="../" data-lang="es" onclick="window.setLang('es')">ES</a>
        <a href="../en/" data-lang="en" onclick="window.setLang('en')">EN</a>
        <span class="active" data-lang="de">DE</span>
        <a href="../fr/" data-lang="fr" onclick="window.setLang('fr')">FR</a>
      </div>`
  );
  res = res.replace(
    /<span class="kicker crimson">Navegación<\/span>\s*<ul class="mobile-nav-links">[\s\S]*?<\/ul>/,
    `<span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="#proyectos">Projekte</a></li>
        <li><a href="#servicios">Leistungen</a></li>
        <li><a href="#estudio">Studio</a></li>
        <li><a href="#del-boceto-al-render">Schichten-Prozess</a></li>
        <li><a href="#proceso">Methodik</a></li>
        <li><a href="#contacto">Kontakt</a></li>
      </ul>`
  );

  // Hero Section
  res = res.replace(/Dirección Visual & Lanzamiento Comercial/, 'Visuelle Regie & Immobilien-Launch');
  res = res.replace(
    /<h1 class="display-hero mask-reveal-title"[^>]*>[\s\S]*?<\/h1>/,
    `<h1 class="display-hero mask-reveal-title" style="color: var(--cream); max-width: 1300px; margin-bottom: 28px;">
          Vom Entwurf<br>
          zum Verkaufsstart.<br>
          Sprechen wir.
        </h1>`
  );
  res = res.replace(
    /Partimos de la arquitectura\. Construimos su imagen\. Y la llevamos hasta el mercado con un sistema visual integral diseñado para promotoras, estudios de arquitectura e inversión inmobiliaria\./,
    'Wir gehen von der Architektur aus. Wir formen ihr Bild. Und führen sie mit einem integralen visuellen System an den Markt, maßgeschneidert für Bauträger, Architekturbüros und institutionelle Investoren.'
  );
  res = res.replace(/HABLEMOS DEL PROYECTO →/g, 'PROJEKT BESPRECHEN →');
  res = res.replace(/PROYECTOS ↓/, 'PROJEKTE ↓');

  // Statement Section
  res = res.replace(/El Render es el Producto/, 'Das Render ist das Produkt');
  res = res.replace(
    /Un render no es una imagen técnica\.<br>\s*Es el primer activo comercial de una promoción\./,
    'Ein Rendering ist keine technische Zeichnung.<br> Es ist das wichtigste Vertriebsinstrument eines Bauvorhabens.'
  );
  res = res.replace(
    /En el sector inmobiliario actual, el comprador adquiere una emoción antes de que comience la obra[\s\S]*?acelerar la toma de decisiones\./,
    'Auf dem modernen Immobilienmarkt kauft der Kunde, was er fühlt, bevor der erste Stein gesetzt wird. Wir verbinden architektonische Präzision mit verkaufspsychologischer Bildsprache: präzise Blickachsen, atmosphärisches Licht und ein klares Narrativ, das den Verkauf beschleunigt.'
  );

  // Pinned Horizontal Gallery
  res = res.replace(/Galería Seleccionada/, 'Ausgewählte Projekte');
  res = res.replace(/Dossieres de Promoción/, 'Projekt-Dossiers');
  res = res.replace(/Residencial Colectivo · Valencia/g, 'Wohnanlage · Valencia');
  res = res.replace(/Campaña visual 3D exterior e interior para promoción de 24 viviendas frente a los jardines del Real\./, 'Komplette 3D-Visualisierungskampagne für eine hochwertige Wohnanlage mit 24 Einheiten direkt am königlichen Stadtpark.');
  res = res.replace(/Vivienda Unifamiliar · Alicante/g, 'Architektenvilla · Alicante');
  res = res.replace(/Estudio de soleamiento, integración paisajística y materialidad mediterránea en parcela en ladera\./, 'Lichtstudie, mediterrane Natursteinmaterialien und Lifestyle-Renderings für ein exklusives Klippenanwesen an der Küste.');
  res = res.replace(/Espacios Interiores & Estilo de Vida · Valencia/g, 'Interieur & Lebensart · Valencia');
  res = res.replace(/Infografía de cocinas de autor, texturas naturales y carpintería a medida con luz natural rasante\./, 'Atmosphärische Innenraumvisualisierung mit maßgefertigten Holzelementen und fließendem Raumkonzept.');
  res = res.replace(/Rehabilitación & Interiorismo · Valencia/g, 'Sanierung · Valencia');
  res = res.replace(/Recreación fotorrealista de vivienda histórica reformada para comercialización en fase de proyecto\./, 'Historisches Penthouse nach Denkmalschutzsanierung: Verbindung klassischer Stuckaturen mit zeitgenössischer Architektur.');
  res = res.replace(/VER ARCHIVO DE PROYECTOS →/, 'PROJEKTARCHIV ANSEHEN →');

  // Services Section
  res = res.replace(/Capacidades Integrales/, 'Gesamte Bandbreite');
  res = res.replace(/Un único estudio\.<br>Todo el ciclo del lanzamiento\./, 'Ein Studio.<br>Der gesamte Launch-Zyklus.');
  res = res.replace(/Infografía 3D de Arquitectura/, '3D-Architekturvisualisierung');
  res = res.replace(/Vídeo 3D & Recorridos Cinematográficos/, '3D-Video & Filmische Rundgänge');
  res = res.replace(/Branding & Identidad Inmobiliaria/, 'Markenidentität & Branding');
  res = res.replace(/Material Comercial & Dossiers/, 'Vermarktungsunterlagen & Exposés');
  res = res.replace(/Web de Promoción Inmobiliaria/, 'Projekt-Websites');
  res = res.replace(/Captación Digital & Campañas/, 'Digitale Vermarktung');

  // Layer Scrub Section
  res = res.replace(/Proceso Técnico/, 'Technischer Ablauf');
  res = res.replace(/Del boceto al render\.<br>Cuatro capas de precisión\./, 'Vom Entwurf zum Render.<br>Vier Präzisionsschritte.');
  res = res.replace(/Haga scroll para ver cómo se construye cada capa técnica sobre la arquitectura base\./, 'Scrollen Sie, um zu sehen, wie jede Ebene von der Geometrie bis zum finalen Bild aufgebaut wird.');
  res = res.replace(/ARCILLA/g, 'CLAY-MODELL');
  res = res.replace(/Volumetría base, calibración de cámara y encuadre compositivo\./, 'Volumetrische Kalibrierung, Kameraperspektive & Ausrichtung.');
  res = res.replace(/MATERIALIDAD/g, 'MATERIALITÄT');
  res = res.replace(/Asignación física de materiales \(PBR\), texturas reales y haptología\./, 'PBR-Texturen, Oberflächenhaptik und echte Steinmaserungen.');
  res = res.replace(/ILUMINACIÓN/g, 'BELEUCHTUNG');
  res = res.replace(/Cálculo de acimut solar, difusión atmosférica y contrastes lumínicos\./, 'Sonnenstand, atmosphärische Streuung & warme Innenraumakzente.');
  res = res.replace(/RENDER FINAL/g, 'FINALES RENDER');
  res = res.replace(/Postproducción cinematográfica, atmósfera fotográfica y detalle 4K\./, 'Fotografische Postproduktion, Farbkorrektur & atmosphärische Tiefe.');

  // Comparator Section
  res = res.replace(/Estudio Lumínico/, 'Lichtstudie');
  res = res.replace(/Comportamiento solar:\s*Día y Noche\./, 'Lichtvergleich: Tag und Nacht.');
  res = res.replace(/Arrastre el separador para comparar el impacto del soleamiento cenital frente a la iluminación artificial crepuscular\./, 'Verschieben Sie den Regler, um die Wirkung natürlicher Sonnenstrahlen und warmer Abendbeleuchtung zu vergleichen.');
  res = res.replace(/LUZ NATURAL · MEDIODÍA/, 'NATÜRLICHES TAGESLICHT');
  res = res.replace(/ATMÓSFERA CREPUSCULAR · NOCHE/, 'DÄMMERUNG & INTERIEUR');

  // Studio Section
  res = res.replace(/Arquitectura, no sólo software\./, 'Architektur, nicht nur Software.');
  res = res.replace(/Fundamento Arquitectónico/, 'Architekturverständnis');
  res = res.replace(/Dirección de Arte Rigurosa/, 'Kreative Regie');
  res = res.replace(/Un Único Interlocutor/, 'Fester Ansprechpartner');

  // Process Methodology Section
  res = res.replace(/Metodología/, 'Methodik');
  res = res.replace(/Cuatro fases\. Cero fricción\./, 'Vier Phasen. Absolute Verlässlichkeit.');
  res = res.replace(/Análisis y Geometría/, 'Analyse & Geometrie');
  res = res.replace(/Materialidad e Iluminación/, 'Material & Lichtführung');
  res = res.replace(/Producción Visual Integral/, 'Integrale Produktion');
  res = res.replace(/Entrega y Lanzamiento/, 'Übergabe & Launch');
  res = res.replace(/PLANIFIQUEMOS EL LANZAMIENTO →/, 'LAUNCH PLANEN →');

  // Contact Section
  res = res.replace(/Contacto Directo/, 'Direkter Kontakt');
  res = res.replace(
    /DEL PROYECTO<br>\s*AL LANZAMIENTO\.<br>\s*<span[^>]*>HABLEMOS\.<\/span>/,
    `VOM ENTWURF<br>
          ZUM VERKAUFSSTART.<br>
          <span style="color: var(--accent-on-dark);">SPRECHEN WIR.</span>`
  );
  res = res.replace(
    /Si estás preparando una promoción y quieres definir su imagen, materiales y lanzamiento, cuéntanos el proyecto\./,
    'Wenn Sie ein Neubauprojekt planen und Bildsprache, Vermarktungsmaterialien sowie Launch-Strategie festlegen möchten, stellen Sie uns Ihr Projekt vor.'
  );
  res = res.replace(/Sede Central · Valencia, España/, 'Hauptsitz · Valencia, Spanien');
  res = res.replace(/Ámbito · España · Reino Unido · Alemania · Francia · Suiza/, 'Aktionsradius · Spanien · Deutschland · Schweiz · Vereinigtes Königreich · Frankreich');

  // Footer Navigation
  res = res.replace(/Navegación/g, 'Navigation');
  res = res.replace(/Capacidades/g, 'Leistungen');
  res = res.replace(/Contacto Directo/g, 'Direkter Kontakt');
  res = res.replace(/Valencia · Europa/g, 'Valencia · Europa');
  res = res.replace(/Preguntas Frecuentes/g, 'Häufig gestellte Fragen');
  res = res.replace(/© 2026 Eidos Render\. Todos los derechos reservados\./, '© 2026 Eidos Render. Alle Rechte vorbehalten.');
  res = res.replace(/Aviso Legal/g, 'Impressum');
  res = res.replace(/Privacidad/g, 'Datenschutz');
  res = res.replace(/Cookies/g, 'Cookies');

  // Footer Links to subpages
  res = res.replace(/href="servicios\/infografia-3d\.html"/g, 'href="leistungen/3d-rendering.html"');
  res = res.replace(/href="servicios\/video-3d\.html"/g, 'href="leistungen/3d-video.html"');
  res = res.replace(/href="servicios\/branding\.html"/g, 'href="leistungen/branding.html"');
  res = res.replace(/href="servicios\/material-comercial\.html"/g, 'href="leistungen/vermarktungsunterlagen.html"');
  res = res.replace(/href="servicios\/web-real-estate\.html"/g, 'href="leistungen/projekt-website.html"');
  res = res.replace(/href="servicios\/captacion\.html"/g, 'href="leistungen/digitale-vermarktung.html"');
  res = res.replace(/href="proyectos\.html"/g, 'href="projekte.html"');
  res = res.replace(/href="servicios\.html"/g, 'href="leistungen.html"');
  res = res.replace(/href="contacto\.html"/g, 'href="kontakt.html"');
  res = res.replace(/href="aviso-legal\.html"/g, 'href="impressum.html"');
  res = res.replace(/href="privacidad\.html"/g, 'href="datenschutz.html"');
  res = res.replace(/href="cookies\.html"/g, 'href="cookies.html"');

  // Footer lang active indicators
  res = res.replace(
    /<div style="display: flex; gap: 8px; font-size: 0\.78rem; text-transform: uppercase;">[\s\S]*?<\/div>/,
    `<div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
              <a href="../" onclick="window.setLang('es')">ES</a> ·
              <a href="../en/" onclick="window.setLang('en')">EN</a> ·
              <span style="color: var(--accent-on-dark); font-weight: 700;">DE</span> ·
              <a href="../fr/" onclick="window.setLang('fr')">FR</a>
            </div>`
  );

  return res;
}

function translateToFr(html) {
  let res = html;

  // Paths
  res = res.replace(/<html lang="es">/, '<html lang="fr">');
  res = res.replace(/<link rel="canonical" href="https:\/\/eidosrender\.es\/">/, '<link rel="canonical" href="https://eidosrender.es/fr/">');
  res = res.replace(/href="style\.css"/g, 'href="../style.css"');
  res = res.replace(/src="main\.js"/g, 'src="../main.js"');
  res = res.replace(/src="js\/i18n\.js"/g, 'src="../js/i18n.js"');
  res = res.replace(/href="favicon\.svg"/g, 'href="../favicon.svg"');
  res = res.replace(/href="apple-touch-icon\.png"/g, 'href="../apple-touch-icon.png"');
  res = res.replace(/src="img\//g, 'src="../img/');
  res = res.replace(/srcset="img\//g, 'srcset="../img/');
  res = res.replace(/poster="img\//g, 'poster="../img/');
  res = res.replace(/data-image="img\//g, 'data-image="../img/');
  res = res.replace(/content="https:\/\/eidosrender\.es\/favicon\.svg"/g, 'content="https://eidosrender.es/favicon.svg"');
  res = res.replace(/content="https:\/\/eidosrender\.es\/img\//g, 'content="https://eidosrender.es/img/');

  // Meta & Title
  res = res.replace(
    /<title>Eidos Render \| Visualización Arquitectónica & Dirección de Lanzamiento<\/title>/,
    '<title>Eidos Render | Visualisation Architecturale & Lancement Immobilier</title>'
  );
  res = res.replace(
    /content="Estudio de visualización arquitectónica 3D, dirección de arte y materiales comerciales para el lanzamiento de promociones inmobiliarias y arquitectura de autor\."/,
    'content="Visualisation architecturale 3D haut de gamme, direction artistique et supports de vente pour programmes immobiliers et architecture en Europe."'
  );
  res = res.replace(
    /content="Partner visual para proyectos inmobiliarios\. Del proyecto arquitectónico al lanzamiento comercial\."/,
    'content="Partenaire visuel pour programmes immobiliers. Du projet architectural au lancement commercial."'
  );

  // Nav Links
  res = res.replace(
    /<ul class="nav-links">[\s\S]*?<\/ul>/,
    `<ul class="nav-links">
          <li><a href="#proyectos">Projets</a></li>
          <li><a href="#servicios">Services</a></li>
          <li><a href="#estudio">Studio</a></li>
          <li><a href="#del-boceto-al-render">Processus par Couches</a></li>
          <li><a href="#proceso">Méthodologie</a></li>
          <li><a href="#contacto">Contact</a></li>
        </ul>`
  );

  // Lang Switcher in Header
  res = res.replace(
    /<div class="lang-switcher" aria-label="Selector de idioma">[\s\S]*?<\/div>/,
    `<div class="lang-switcher" aria-label="Sélecteur de langue">
          <a href="../" data-lang="es" onclick="window.setLang('es')">ES</a>
          <span class="lang-divider">/</span>
          <a href="../en/" data-lang="en" onclick="window.setLang('en')">EN</a>
          <span class="lang-divider">/</span>
          <a href="../de/" data-lang="de" onclick="window.setLang('de')">DE</a>
          <span class="lang-divider">/</span>
          <span class="active" data-lang="fr">FR</span>
        </div>`
  );

  // Nav CTA
  res = res.replace(
    /<a href="#contacto" class="nav-cta">\s*HABLEMOS DEL PROYECTO →\s*<\/a>/,
    `<a href="#contacto" class="nav-cta">
          PARLONS DU PROJET →
        </a>`
  );

  // Mobile menu
  res = res.replace(
    /<div class="mobile-lang-switcher" aria-label="Selector de idioma">[\s\S]*?<\/div>/,
    `<div class="mobile-lang-switcher" aria-label="Sélecteur de langue">
        <a href="../" data-lang="es" onclick="window.setLang('es')">ES</a>
        <a href="../en/" data-lang="en" onclick="window.setLang('en')">EN</a>
        <a href="../de/" data-lang="de" onclick="window.setLang('de')">DE</a>
        <span class="active" data-lang="fr">FR</span>
      </div>`
  );
  res = res.replace(
    /<span class="kicker crimson">Navegación<\/span>\s*<ul class="mobile-nav-links">[\s\S]*?<\/ul>/,
    `<span class="kicker crimson">Navigation</span>
      <ul class="mobile-nav-links">
        <li><a href="#proyectos">Projets</a></li>
        <li><a href="#servicios">Services</a></li>
        <li><a href="#estudio">Studio</a></li>
        <li><a href="#del-boceto-al-render">Processus par Couches</a></li>
        <li><a href="#proceso">Méthodologie</a></li>
        <li><a href="#contacto">Contact</a></li>
      </ul>`
  );

  // Hero Section
  res = res.replace(/Dirección Visual & Lanzamiento Comercial/, 'Direction Artistique & Lancement Immobilier');
  res = res.replace(
    /<h1 class="display-hero mask-reveal-title"[^>]*>[\s\S]*?<\/h1>/,
    `<h1 class="display-hero mask-reveal-title" style="color: var(--cream); max-width: 1300px; margin-bottom: 28px;">
          Du projet<br>
          architectural<br>
          au lancement.
        </h1>`
  );
  res = res.replace(
    /Partimos de la arquitectura\. Construimos su imagen\. Y la llevamos hasta el mercado con un sistema visual integral diseñado para promotoras, estudios de arquitectura e inversión inmobiliaria\./,
    'Nous partons de l’architecture. Nous créons son image. Et nous la portons sur le marché avec un système visuel complet conçu pour promoteurs, agences d’architecture et fonds d’investissement.'
  );
  res = res.replace(/HABLEMOS DEL PROYECTO →/g, 'PARLONS DU PROJET →');
  res = res.replace(/PROYECTOS ↓/, 'PROJETS ↓');

  // Statement Section
  res = res.replace(/El Render es el Producto/, 'Le Rendu est le Produit');
  res = res.replace(
    /Un render no es una imagen técnica\.<br>\s*Es el primer activo comercial de una promoción\./,
    'Un rendu n’est pas un document technique.<br> C’est le premier actif commercial d’un programme immobilier.'
  );
  res = res.replace(
    /En el sector inmobiliario actual, el comprador adquiere una emoción antes de que comience la obra[\s\S]*?acelerar la toma de decisiones\./,
    'Sur le marché immobilier actuel, l’acquéreur achète une émotion avant même que les fondations ne soient coulées. Nous abordons l’image avec exigence architecturale et finalité commerciale : cadrages narratifs, lumière cinématographique et mise en valeur spatiale.'
  );

  // Pinned Horizontal Gallery
  res = res.replace(/Galería Seleccionada/, 'Sélection de Projets');
  res = res.replace(/Dossieres de Promoción/, 'Dossiers de Programmes');
  res = res.replace(/Residencial Colectivo · Valencia/g, 'Résidentiel Collectif · Valence');
  res = res.replace(/Campaña visual 3D exterior e interior para promoción de 24 viviendas frente a los jardines del Real\./, 'Campagne 3D complète pour une promotion de 24 appartements d’exception en lisière des jardins royaux.');
  res = res.replace(/Vivienda Unifamiliar · Alicante/g, 'Villa d’Architecte · Alicante');
  res = res.replace(/Estudio de soleamiento, integración paisajística y materialidad mediterránea en parcela en ladera\./, 'Étude d’ensoleillement, matérialité méditerranéenne et images de style de vie pour une demeure de prestige en falaise.');
  res = res.replace(/Espacios Interiores & Estilo de Vida · Valencia/g, 'Espaces & Atmosphère · Valence');
  res = res.replace(/Infografía de cocinas de autor, texturas naturales y carpintería a medida con luz natural rasante\./, 'Visualisation intérieure sensible mettant en avant la noblesse des bois, textures douces et fluidité des volumes.');
  res = res.replace(/Rehabilitación & Interiorismo · Valencia/g, 'Réhabilitation · Valence');
  res = res.replace(/Recreación fotorrealista de vivienda histórica reformada para comercialización en fase de proyecto\./, 'Rénovation d’un attique patrimonial : mariage de moulures classiques et de lignes épurées pour la pré-commercialisation.');
  res = res.replace(/VER ARCHIVO DE PROYECTOS →/, 'VOIR L’ARCHIVE DES PROJETS →');

  // Services Section
  res = res.replace(/Capacidades Integrales/, 'Champ d’Expertise');
  res = res.replace(/Un único estudio\.<br>Todo el ciclo del lanzamiento\./, 'Un seul studio.<br>Tout le cycle de commercialisation.');
  res = res.replace(/Infografía 3D de Arquitectura/, 'Visualisation 3D d’Architecture');
  res = res.replace(/Vídeo 3D & Recorridos Cinematográficos/, 'Vidéo 3D & Visites Virtuelles');
  res = res.replace(/Branding & Identidad Inmobiliaria/, 'Branding & Identité de Marque');
  res = res.replace(/Material Comercial & Dossiers/, 'Outils Commerciaux & Brochures');
  res = res.replace(/Web de Promoción Inmobiliaria/, 'Sites Web Immobiliers');
  res = res.replace(/Captación Digital & Campañas/, 'Acquisition Digitale & Campagnes');

  // Layer Scrub Section
  res = res.replace(/Proceso Técnico/, 'Processus Technique');
  res = res.replace(/Del boceto al render\.<br>Cuatro capas de precisión\./, 'De l’esquisse au rendu.<br>Quatre couches de précision.');
  res = res.replace(/Haga scroll para ver cómo se construye cada capa técnica sobre la arquitectura base\./, 'Faites défiler pour observer la construction progressive de l’image, de la volumétrie brute à la retouche finale.');
  res = res.replace(/ARCILLA/g, 'VOLUME CLAY');
  res = res.replace(/Volumetría base, calibración de cámara y encuadre compositivo\./, 'Calibrage volumétrique, focale caméra & perspectives architecturales.');
  res = res.replace(/MATERIALIDAD/g, 'MATÉRIALITÉ');
  res = res.replace(/Asignación física de materiales \(PBR\), texturas reales y haptología\./, 'Textures physiques (PBR), grain des pierres et vérité des textures.');
  res = res.replace(/ILUMINACIÓN/g, 'ÉCLAIRAGE');
  res = res.replace(/Cálculo de acimut solar, difusión atmosférica y contrastes lumínicos\./, 'Course solaire, diffusion atmosphérique & chaleur des lumières intérieures.');
  res = res.replace(/RENDER FINAL/g, 'RENDU FINAL');
  res = res.replace(/Postproducción cinematográfica, atmósfera fotográfica y detalle 4K\./, 'Post-production photographique, étalonnage chromatique et profondeur d’air.');

  // Comparator Section
  res = res.replace(/Estudio Lumínico/, 'Étude d’Éclairage');
  res = res.replace(/Comportamiento solar:\s*Día y Noche\./, 'Comparaison Solaire : Jour et Nuit.');
  res = res.replace(/Arrastre el separador para comparar el impacto del soleamiento cenital frente a la iluminación artificial crepuscular\./, 'Glissez le séparateur pour observer le comportement des volumes sous la lumière naturelle et nocturne.');
  res = res.replace(/LUZ NATURAL · MEDIODÍA/, 'LUMIÈRE NATURELLE DIURNE');
  res = res.replace(/ATMÓSFERA CREPUSCULAR · NOCHE/, 'CRÉPUSCULE & AMBIANCE INTÉRIEURE');

  // Studio Section
  res = res.replace(/Arquitectura, no sólo software\./, 'L’architecture, pas seulement le logiciel.');
  res = res.replace(/Fundamento Arquitectónico/, 'Fondement Architectural');
  res = res.replace(/Dirección de Arte Rigurosa/, 'Direction Artistique Rigoureuse');
  res = res.replace(/Un Único Interlocutor/, 'Interlocuteur Unique Dédié');

  // Process Methodology Section
  res = res.replace(/Metodología/, 'Méthodologie');
  res = res.replace(/Cuatro fases\. Cero fricción\./, 'Quatre étapes. Clarté totale.');
  res = res.replace(/Análisis y Geometría/, 'Analyse & Géométrie');
  res = res.replace(/Materialidad e Iluminación/, 'Matières & Lumière');
  res = res.replace(/Producción Visual Integral/, 'Production Intégrale');
  res = res.replace(/Entrega y Lanzamiento/, 'Livraison & Lancement');
  res = res.replace(/PLANIFIQUEMOS EL LANZAMIENTO →/, 'PLANIFIER LE LANCEMENT →');

  // Contact Section
  res = res.replace(/Contacto Directo/, 'Contact Direct');
  res = res.replace(
    /DEL PROYECTO<br>\s*AL LANZAMIENTO\.<br>\s*<span[^>]*>HABLEMOS\.<\/span>/,
    `DU PROJET<br>
          AU LANCEMENT.<br>
          <span style="color: var(--accent-on-dark);">PARLONS-EN.</span>`
  );
  res = res.replace(
    /Si estás preparando una promoción y quieres definir su imagen, materiales y lanzamiento, cuéntanos el proyecto\./,
    'Si vous préparez une promotion immobilière et souhaitez concevoir son univers visuel, ses supports de vente et sa stratégie de lancement, présentez-nous votre projet.'
  );
  res = res.replace(/Sede Central · Valencia, España/, 'Siège · Valence, Espagne');
  res = res.replace(/Ámbito · España · Reino Unido · Alemania · Francia · Suiza/, 'Rayonnement · Espagne · France · Suisse · Royaume-Uni · Allemagne');

  // Footer Navigation
  res = res.replace(/Navegación/g, 'Navigation');
  res = res.replace(/Capacidades/g, 'Expertises');
  res = res.replace(/Contacto Directo/g, 'Contact Direct');
  res = res.replace(/Valencia · Europa/g, 'Valence · Europe');
  res = res.replace(/Preguntas Frecuentes/g, 'Foire Aux Questions');
  res = res.replace(/© 2026 Eidos Render\. Todos los derechos reservados\./, '© 2026 Eidos Render. Tous droits réservés.');
  res = res.replace(/Aviso Legal/g, 'Mentions Légales');
  res = res.replace(/Privacidad/g, 'Politique de Confidentialité');
  res = res.replace(/Cookies/g, 'Cookies');

  // Footer Links to subpages
  res = res.replace(/href="servicios\/infografia-3d\.html"/g, 'href="services/rendu-3d.html"');
  res = res.replace(/href="servicios\/video-3d\.html"/g, 'href="services/video-3d.html"');
  res = res.replace(/href="servicios\/branding\.html"/g, 'href="services/branding.html"');
  res = res.replace(/href="servicios\/material-comercial\.html"/g, 'href="services/supports-commerciaux.html"');
  res = res.replace(/href="servicios\/web-real-estate\.html"/g, 'href="services/site-web-immobilier.html"');
  res = res.replace(/href="servicios\/captacion\.html"/g, 'href="services/acquisition.html"');
  res = res.replace(/href="proyectos\.html"/g, 'href="projets.html"');
  res = res.replace(/href="servicios\.html"/g, 'href="services.html"');
  res = res.replace(/href="contacto\.html"/g, 'href="contact.html"');
  res = res.replace(/href="aviso-legal\.html"/g, 'href="mentions-legales.html"');
  res = res.replace(/href="privacidad\.html"/g, 'href="politique-de-confidentialite.html"');
  res = res.replace(/href="cookies\.html"/g, 'href="politique-des-cookies.html"');

  // Footer lang active indicators
  res = res.replace(
    /<div style="display: flex; gap: 8px; font-size: 0\.78rem; text-transform: uppercase;">[\s\S]*?<\/div>/,
    `<div style="display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase;">
              <a href="../" onclick="window.setLang('es')">ES</a> ·
              <a href="../en/" onclick="window.setLang('en')">EN</a> ·
              <a href="../de/" onclick="window.setLang('de')">DE</a> ·
              <span style="color: var(--accent-on-dark); font-weight: 700;">FR</span>
            </div>`
  );

  return res;
}

const enOut = translateToEn(indexMaster);
fs.writeFileSync(path.join(root, 'en/index.html'), enOut, 'utf8');
console.log('en/index.html master written');

const deOut = translateToDe(indexMaster);
fs.writeFileSync(path.join(root, 'de/index.html'), deOut, 'utf8');
console.log('de/index.html master written');

const frOut = translateToFr(indexMaster);
fs.writeFileSync(path.join(root, 'fr/index.html'), frOut, 'utf8');
console.log('fr/index.html master written');

console.log('Multilingual homepages generated with 100% markup fidelity to index.html master!');
