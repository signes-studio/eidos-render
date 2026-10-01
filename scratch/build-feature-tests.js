const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), '_tests/features');
fs.mkdirSync(outDir, { recursive: true });

const baseHeader = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../../style.css">
  <style>
    body { padding-top: 0; }
    .feature-test-bar {
      background: var(--charcoal-2);
      border-bottom: 1px solid var(--line-dark);
      padding: 12px 24px;
      font-family: var(--font-display);
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--stone);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 10001;
    }
    .feature-test-bar span.accent {
      color: var(--accent-on-dark);
      font-weight: 700;
    }
  </style>
</head>
<body class="bg-paper">
`;

const baseFooter = `
  <script src="../../main.js"></script>
</body>
</html>`;

// 01. Hero & Header Test
const heroContent = `
  <div class="feature-test-bar">
    <div>EIDOS RENDER · RECURSO ESPECIAL 03: <span class="accent">HERO CON REVELADO EN MÁSCARA & HEADER DINÁMICO</span></div>
    <div>ISOTIPO C + FRAMBUESA #B5294E</div>
  </div>

  <header class="nav-header" role="banner">
    <div class="nav-inner">
      <a href="#" class="logo" aria-label="Eidos Render Inicio">
        <svg class="isotype-icon" viewBox="0 0 32 32" width="22" height="22" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="2"/>
          <line x1="2" y1="16" x2="30" y2="16" stroke="var(--accent)" stroke-width="2" stroke-linecap="square" class="iso-line"/>
        </svg>
        <span class="logo-text">EIDOS RENDER</span>
      </a>

      <nav aria-label="Navegación principal">
        <ul class="nav-links">
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#estudio">Estudio</a></li>
          <li><a href="#proceso">Proceso</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <div class="nav-right-group">
        <div class="lang-switcher">
          <span class="active">ES</span>
          <span class="lang-divider">/</span>
          <span>EN</span>
          <span class="lang-divider">/</span>
          <span>DE</span>
          <span class="lang-divider">/</span>
          <span>FR</span>
        </div>
        <a href="#contacto" class="nav-cta">HABLEMOS DEL PROYECTO →</a>
      </div>

      <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false">
        <span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Overlay -->
  <div class="mobile-nav-overlay" aria-hidden="true">
    <div>
      <div class="mobile-lang-switcher">
        <span class="active">ES</span>
        <span>EN</span>
        <span>DE</span>
        <span>FR</span>
      </div>
      <span class="kicker kicker-accent">Navegación</span>
      <ul class="mobile-nav-links">
        <li><a href="#"><span>Proyectos</span></a></li>
        <li><a href="#"><span>Servicios</span></a></li>
        <li><a href="#"><span>Estudio</span></a></li>
        <li><a href="#"><span>Proceso</span></a></li>
        <li><a href="#"><span>Contacto</span></a></li>
      </ul>
    </div>
    <div class="mobile-nav-footer">
      <div>EIDOS RENDER — Visualización & Lanzamiento</div>
      <div>info@eidosrender.es</div>
    </div>
  </div>

  <main>
    <section class="section-hero bg-ink">
      <div style="position: absolute; inset: 0; overflow: hidden; z-index: 1;">
        <img src="../../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Render Hero" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.52;" fetchpriority="high">
        <div style="position: absolute; inset: 0; background-color: rgba(30, 28, 26, 0.52);"></div>
      </div>

      <div class="container" style="position: relative; z-index: 2; margin-top: auto; padding-bottom: 80px;">
        <div class="kicker kicker-accent">
          <span class="kicker-dot"></span>
          Dirección Visual & Lanzamiento Comercial
        </div>

        <h1 class="display-hero mask-reveal-title" style="color: var(--cream); max-width: 1300px; margin-bottom: 28px;">
          Del proyecto<br>
          arquitectónico<br>
          al lanzamiento.
        </h1>

        <div class="hero-bottom-grid">
          <p class="body-large" style="color: rgba(239, 233, 220, 0.88);">
            Partimos de la arquitectura. Construimos su imagen. Y la llevamos hasta el mercado con un sistema visual integral diseñado para promotoras, estudios de arquitectura e inversión inmobiliaria.
          </p>
          <div class="hero-cta-group">
            <a href="mailto:info@eidosrender.es" class="btn-editorial btn-accent-fill">
              HABLEMOS DEL PROYECTO →
            </a>
            <a href="#proyectos" class="link-draw" style="color: var(--cream);">
              PROYECTOS ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
`;
fs.writeFileSync(path.join(outDir, '01-hero.html'), baseHeader + heroContent + baseFooter);

// 02. "Del Boceto al Render" (Layer Scrub)
const layerScrubContent = `
  <div class="feature-test-bar">
    <div>EIDOS RENDER · RECURSO ESPECIAL 04: <span class="accent">DEL BOCETO AL RENDER (PROCESO POR CAPAS)</span></div>
    <div>4 NIVELES: ARCILLA → MATERIALES → LUZ → FINAL</div>
  </div>

  <section class="layer-scrub-section" id="del-boceto-al-render">
    <div class="container">
      <div class="layer-scrub-header">
        <span class="kicker kicker-accent"><span class="kicker-dot"></span> Proceso Técnico por Capas</span>
        <h2 class="display-title" style="color: var(--cream); font-size: clamp(2.4rem, 5vw, 4.5rem); margin-bottom: 16px;">
          Del boceto<br>
          al render final.
        </h2>
        <p class="body-large" style="color: rgba(239, 233, 220, 0.75); max-width: 620px;">
          Demostración técnica de rigor constructivo. Cada imagen se esculpe por capas sucesivas de cálculo geométrico, respuesta óptica de materiales y calibración solar.
        </p>
      </div>

      <div class="layer-scrub-viewport" data-cursor="CAPAS">
        <img src="../../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Modelado en Arcilla" class="layer-scrub-img active" style="filter: grayscale(100%) contrast(1.1) brightness(0.95);" loading="lazy">
        <img src="../../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Materialidad y Texturas" class="layer-scrub-img" style="filter: grayscale(40%) contrast(1.05);" loading="lazy">
        <img src="../../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Iluminación Solar y Atmósfera" class="layer-scrub-img" style="filter: brightness(1.08) contrast(1.15) saturate(1.1);" loading="lazy">
        <img src="../../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Render Final Terminado" class="layer-scrub-img" loading="lazy">
      </div>

      <div class="layer-scrub-controls">
        <div class="layer-scrub-steps">
          <button type="button" class="layer-scrub-step-btn active">01 · Modelo Arcilla</button>
          <button type="button" class="layer-scrub-step-btn">02 · Materialidad</button>
          <button type="button" class="layer-scrub-step-btn">03 · Iluminación</button>
          <button type="button" class="layer-scrub-step-btn">04 · Render Final</button>
        </div>
        <div class="layer-scrub-meta">Interacción: Selección por pestañas o avance con scroll</div>
      </div>
    </div>
  </section>
`;
fs.writeFileSync(path.join(outDir, '02-layer-scrub.html'), baseHeader + layerScrubContent + baseFooter);

// 03. Comparador Día / Noche
const comparatorContent = `
  <div class="feature-test-bar">
    <div>EIDOS RENDER · RECURSO ESPECIAL 05: <span class="accent">COMPARADOR DÍA / NOCHE ARRASTRABLE</span></div>
    <div>DIVISOR 1PX + INERCIA + CONTROLES TÁCTILES</div>
  </div>

  <section class="section bg-ink">
    <div class="container">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 20px;">
        <div>
          <span class="kicker kicker-accent"><span class="kicker-dot"></span> Estudio Lumínico</span>
          <h2 class="display-title" style="color: var(--cream); font-size: clamp(2rem, 4vw, 3.5rem);">
            Comportamiento Diurno & Crepuscular.
          </h2>
        </div>
        <div style="font-family: var(--font-display); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--stone);">
          Arrastra el selector horizontal ↔
        </div>
      </div>

      <div class="comparator-wrap" data-cursor="ARRASTRAR">
        <div class="comparator-layer layer-before">
          <img src="../../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Día" loading="lazy">
        </div>
        <div class="comparator-layer layer-after">
          <img src="../../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Crepúsculo" style="filter: brightness(0.65) contrast(1.2) hue-rotate(-20deg);" loading="lazy">
        </div>
        <div class="comparator-divider"></div>
        <div class="comparator-handle">↔</div>
        <div class="comparator-tag tag-left">Día · Luz Solar 12:00h</div>
        <div class="comparator-tag tag-right">Noche · Luz Artificial 21:00h</div>
      </div>
    </div>
  </section>
`;
fs.writeFileSync(path.join(outDir, '03-comparator.html'), baseHeader + comparatorContent + baseFooter);

// 04. Galería Horizontal Fijada
const horizontalGalleryContent = `
  <div class="feature-test-bar">
    <div>EIDOS RENDER · RECURSO ESPECIAL 07: <span class="accent">GALERÍA HORIZONTAL FIJADA</span></div>
    <div>DESPLAZAMIENTO HORIZONTAL + BARRA DE PROGRESO 1PX</div>
  </div>

  <section class="pinned-gallery-section" aria-label="Galería horizontal">
    <div class="container">
      <div class="pinned-gallery-header" style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid var(--line-dark); padding-bottom: 28px;">
        <div>
          <span class="kicker kicker-accent"><span class="kicker-dot"></span> Perspectivas Clave</span>
          <h2 class="display-title" style="color: var(--cream); font-size: clamp(2.2rem, 4.5vw, 3.8rem);">
            Atmósfera & Geometría.
          </h2>
        </div>
        <div style="font-family: var(--font-display); font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--stone);">
          Desplaza horizontalmente →
        </div>
      </div>

      <div class="pinned-gallery-container" data-cursor="VER">
        <article class="pinned-gallery-card">
          <div class="img-wrap">
            <img src="../../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Fachada" loading="lazy">
          </div>
          <div class="card-num">01 / 04</div>
          <h3 class="card-title">Fachada Norte & Entrada Principal</h3>
          <div class="card-meta">Residencial Plurifamiliar · Valencia</div>
        </article>

        <article class="pinned-gallery-card">
          <div class="img-wrap">
            <img src="../../img/render-exterior-vivienda-unifamiliar-piscina-1600.jpg" alt="Villa" loading="lazy">
          </div>
          <div class="card-num">02 / 04</div>
          <h3 class="card-title">Integración Topográfica & Solárium</h3>
          <div class="card-meta">Villa Unifamiliar · Alicante</div>
        </article>

        <article class="pinned-gallery-card">
          <div class="img-wrap">
            <img src="../../img/infografia-3d-salon-moderno-doble-altura-1600.jpg" alt="Penthouse" loading="lazy">
          </div>
          <div class="card-num">03 / 04</div>
          <h3 class="card-title">Espacio Diáfano & Luz Cenital</h3>
          <div class="card-meta">Interiorismo de Gran Altura · Madrid</div>
        </article>

        <article class="pinned-gallery-card">
          <div class="img-wrap">
            <img src="../../img/infografia-exterior-zonas-comunes-obra-nueva-1600.jpg" alt="Piscina" loading="lazy">
          </div>
          <div class="card-num">04 / 04</div>
          <h3 class="card-title">Piscina Infinity & Paisajismo</h3>
          <div class="card-meta">Áreas Comunitarias · Costa Blanca</div>
        </article>
      </div>

      <div class="pinned-gallery-progress-bar">
        <div class="pinned-gallery-progress-fill"></div>
      </div>
    </div>
  </section>
`;
fs.writeFileSync(path.join(outDir, '04-horizontal-gallery.html'), baseHeader + horizontalGalleryContent + baseFooter);

// 05. Contacto Editorial & Curtain Footer
const contactCurtainContent = `
  <div class="feature-test-bar">
    <div>EIDOS RENDER · RECURSO ESPECIAL 11: <span class="accent">CONTACTO DIRECTO & CURTAIN FOOTER</span></div>
    <div>CERO FORMULARIO · TIPOGRAFÍA MONUMENTAL · EFECTO CORTINA</div>
  </div>

  <section class="section bg-ink" id="contacto" style="padding: clamp(100px, 14vw, 180px) 0;">
    <div class="container">
      <div style="max-width: 1080px;">
        <span class="kicker kicker-accent">
          <span class="kicker-dot"></span>
          Contacto Directo
        </span>
        <h2 class="display-title mask-reveal-title" style="color: var(--cream); font-size: clamp(3.2rem, 8vw, 7.2rem); line-height: 0.92; margin-bottom: 36px;">
          DEL PROYECTO<br>
          AL LANZAMIENTO.<br>
          HABLEMOS.
        </h2>
        <p class="body-large" style="color: rgba(239, 233, 220, 0.85); font-size: clamp(1.15rem, 1.6vw, 1.45rem); line-height: 1.5; margin-bottom: 56px; max-width: 720px;">
          Si estás preparando una promoción y quieres definir su imagen, materiales y lanzamiento, cuéntanos el proyecto.
        </p>

        <div style="display: flex; gap: 32px; align-items: center; flex-wrap: wrap;">
          <a href="mailto:info@eidosrender.es?subject=Consulta%20de%20Proyecto%20Inmobiliario" class="btn-editorial btn-accent-fill" style="padding: 22px 44px; font-size: 0.9rem;">
            HABLEMOS DEL PROYECTO →
          </a>
          <a href="mailto:info@eidosrender.es" class="link-draw" style="font-size: 1.15rem; color: var(--cream); text-transform: lowercase;">
            info@eidosrender.es
          </a>
          <a href="tel:+34614459144" class="link-draw" style="font-size: 1.1rem; color: rgba(239, 233, 220, 0.7);">
            +34 614 45 91 44
          </a>
        </div>

        <div style="margin-top: 64px; padding-top: 32px; border-top: 1px solid var(--line-dark); display: flex; gap: 40px; flex-wrap: wrap; color: var(--stone); font-family: var(--font-display); font-size: 0.82rem; letter-spacing: 0.12em; text-transform: uppercase;">
          <div>Sede Central · Valencia, España</div>
          <div>Ámbito · España · Reino Unido · Alemania · Francia · Suiza</div>
        </div>
      </div>
    </div>
  </section>

  <div class="curtain-footer-wrap">
    <footer class="curtain-footer" role="contentinfo">
      <div class="container">
        
        <div class="footer-top">
          <div>
            <a href="#" class="logo" style="margin-bottom: 20px;" aria-label="Eidos Render Inicio">
              <svg class="isotype-icon" viewBox="0 0 32 32" width="24" height="24" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="2"/>
                <line x1="2" y1="16" x2="30" y2="16" stroke="var(--accent-on-dark)" stroke-width="2" stroke-linecap="square"/>
              </svg>
              <span class="logo-text">EIDOS RENDER</span>
            </a>
            <p class="body-regular" style="color: rgba(239, 233, 220, 0.65); max-width: 380px;">
              Partner visual y creativo para proyectos inmobiliarios. Del proyecto arquitectónico al lanzamiento comercial.
            </p>
          </div>

          <div>
            <div class="footer-col-title">Navegación</div>
            <ul class="footer-links">
              <li><a href="#">Proyectos</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Estudio</a></li>
              <li><a href="#">Proceso</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-col-title">Capacidades</div>
            <ul class="footer-links">
              <li><a href="#">Infografía 3D</a></li>
              <li><a href="#">Vídeo 3D & Recorridos</a></li>
              <li><a href="#">Branding Inmobiliario</a></li>
              <li><a href="#">Dossiers de Venta</a></li>
              <li><a href="#">Web de Promoción</a></li>
              <li><a href="#">Captación Digital</a></li>
            </ul>
          </div>

          <div>
            <div class="footer-col-title">Contacto Directo</div>
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
          <div>© 2026 Eidos Render. Todos los derechos reservados.</div>
          <div>Valencia, España</div>
        </div>

      </div>
    </footer>
  </div>
`;
fs.writeFileSync(path.join(outDir, '05-contact-curtain.html'), baseHeader + contactCurtainContent + baseFooter);

console.log('All feature test pages successfully generated in _tests/features/');
