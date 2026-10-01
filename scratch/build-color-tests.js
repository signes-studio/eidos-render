const fs = require('fs');
const path = require('path');

const testDir = path.join(__dirname, '..', '_tests', 'color');
if (!fs.existsSync(testDir)) fs.mkdirSync(testDir, { recursive: true });

const variants = [
  {
    id: 'burdeos',
    name: '01 · Burdeos',
    hex: '#6B1A2A',
    deep: '#4F131F',
    onDark: '#C97285',
    desc: 'Tono noble, sobrio y profundo. Máxima afinidad con marcas de relojería clásica y acabados en madera oscura/cuero.'
  },
  {
    id: 'granate',
    name: '02 · Granate',
    hex: '#8E1B2E',
    deep: '#6B1A2A',
    onDark: '#D9788E',
    desc: 'Equilibrio perfecto entre calidez arquitectónica y visibilidad sin estridencias. Predeterminado.'
  },
  {
    id: 'frambuesa',
    name: '03 · Frambuesa',
    hex: '#B5294E',
    deep: '#8E1B2E',
    onDark: '#E86584',
    desc: 'Mayor luminosidad y frescura contemporánea con subtono frío. Excelente contraste y energía editorial.'
  }
];

function generateVariantHtml(v, isIframe = false) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eidos Render · Prueba de Acento (${v.name})</title>
  <link rel="stylesheet" href="../../assets/fonts.css">
  <style>
    :root {
      --charcoal: #1E1C1A;
      --charcoal-2: #292724;
      --cream: #EFE9DC;
      --cream-2: #E6DFD0;
      --cream-pure: #F8F4EA;
      --stone: #8C867B;
      --stone-text: #5F5A51;

      /* Variable Accent Tokens */
      --accent: ${v.hex};
      --accent-deep: ${v.deep};
      --accent-on-dark: ${v.onDark};

      --line: rgba(30, 28, 26, 0.14);
      --line-strong: rgba(30, 28, 26, 0.28);
      --line-dark: rgba(239, 233, 220, 0.16);
      --line-dark-strong: rgba(239, 233, 220, 0.32);

      --font-display: 'Special Gothic Condensed', 'Barlow Condensed', sans-serif;
      --font-text: 'Special Gothic', sans-serif;
      --font-serif: 'Prata', Georgia, serif;
      --font-numeral: 'Viga', 'Special Gothic Condensed', sans-serif;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border-radius: 0 !important;
    }

    body {
      background-color: var(--charcoal);
      color: var(--charcoal);
      font-family: var(--font-text);
      line-height: 1.5;
      font-feature-settings: "cv01", "cv02", "kern", "liga";
      -webkit-font-smoothing: antialiased;
    }

    .container {
      width: 100%;
      max-width: 1360px;
      margin: 0 auto;
      padding: 0 clamp(20px, 4vw, 48px);
    }

    /* --------------------------------------------------------
       01. HERO CARBÓN (--charcoal)
       -------------------------------------------------------- */
    .hero-section {
      background-color: var(--charcoal);
      color: var(--cream);
      position: relative;
      min-height: 82vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      border-bottom: 1px solid var(--line-dark);
    }

    .hero-bg-wrap {
      position: absolute;
      inset: 0;
      z-index: 1;
    }

    .hero-bg-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.38;
      filter: saturate(0.85);
    }

    .hero-veil {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(30,28,26,0.65) 0%, rgba(30,28,26,0.3) 50%, rgba(30,28,26,0.92) 100%);
    }

    .hero-nav {
      position: relative;
      z-index: 10;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 28px 0;
      border-bottom: 1px solid var(--line-dark);
    }

    .logo-wrap {
      display: flex;
      align-items: center;
      gap: 14px;
      color: var(--cream);
      text-decoration: none;
    }

    .logo-text {
      font-family: var(--font-display);
      font-size: 1.25rem;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    .nav-items {
      display: flex;
      gap: 32px;
      list-style: none;
      font-family: var(--font-display);
      font-size: 0.82rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .nav-items a {
      color: rgba(239, 233, 220, 0.7);
      text-decoration: none;
      transition: color 0.2s;
    }

    .nav-items a:hover {
      color: var(--cream);
    }

    @media (max-width: 768px) {
      .nav-items { display: none; }
    }

    .hero-content {
      position: relative;
      z-index: 10;
      margin-top: auto;
      padding-bottom: 64px;
    }

    .kicker-dark {
      font-family: var(--font-display);
      font-size: 0.8rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--accent-on-dark);
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .kicker-dot {
      width: 6px;
      height: 6px;
      background-color: var(--accent-on-dark);
    }

    .hero-title {
      font-family: var(--font-display);
      font-size: clamp(2.8rem, 6.5vw, 6.2rem);
      line-height: 0.93;
      letter-spacing: -0.015em;
      text-transform: uppercase;
      color: var(--cream);
      margin-bottom: 28px;
      max-width: 1200px;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      gap: 40px;
      align-items: flex-end;
      border-top: 1px solid var(--line-dark);
      padding-top: 32px;
    }

    @media (max-width: 768px) {
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
    }

    .hero-desc {
      font-size: clamp(1rem, 1.15vw, 1.25rem);
      color: rgba(239, 233, 220, 0.8);
      max-width: 650px;
      line-height: 1.5;
    }

    .hero-actions {
      display: flex;
      gap: 24px;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
    }

    @media (max-width: 768px) {
      .hero-actions { justify-content: flex-start; }
    }

    /* CTA Button (Accent Surface) */
    .btn-cta {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-family: var(--font-display);
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 16px 32px;
      background-color: var(--accent);
      color: var(--cream);
      border: 1px solid var(--accent);
      cursor: pointer;
      text-decoration: none;
      transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .btn-cta:hover {
      background-color: var(--accent-deep);
      border-color: var(--accent-deep);
      transform: translateY(-1px);
    }

    /* Link Hover Draw (Accent Line Underline) */
    .link-draw-accent {
      font-family: var(--font-display);
      font-size: 0.82rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--cream);
      text-decoration: none;
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding-bottom: 4px;
    }

    .link-draw-accent::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.5px;
      background-color: var(--accent-on-dark);
      transform: scaleX(1); /* Shown in active/hover state for inspection */
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    /* --------------------------------------------------------
       02. SECCIÓN CREMA (--cream)
       -------------------------------------------------------- */
    .cream-section {
      background-color: var(--cream);
      color: var(--charcoal);
      padding: clamp(60px, 8vw, 110px) 0;
      border-bottom: 1px solid var(--line);
    }

    .cream-grid {
      display: grid;
      grid-template-columns: 80px 1.4fr 1fr;
      gap: 48px;
      align-items: start;
    }

    @media (max-width: 900px) {
      .cream-grid {
        grid-template-columns: 1fr;
        gap: 32px;
      }
    }

    .section-kicker-cream {
      font-family: var(--font-display);
      font-size: 0.82rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--accent);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .cream-title {
      font-family: var(--font-display);
      font-size: clamp(2rem, 3.8vw, 3.6rem);
      line-height: 0.95;
      text-transform: uppercase;
      color: var(--charcoal);
      margin-bottom: 24px;
    }

    .manifesto-sentence {
      font-family: var(--font-serif);
      font-size: clamp(1.2rem, 1.8vw, 1.65rem);
      line-height: 1.35;
      color: var(--charcoal);
      margin-bottom: 28px;
      padding-left: 20px;
      border-left: 2px solid var(--accent);
    }

    .cream-body {
      font-size: 1.05rem;
      color: var(--stone-text);
      line-height: 1.6;
      max-width: 60ch;
      margin-bottom: 28px;
    }

    .link-cream-hover {
      font-family: var(--font-display);
      font-size: 0.82rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent);
      text-decoration: none;
      position: relative;
      padding-bottom: 3px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .link-cream-hover::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--accent);
    }

    .stat-card {
      border: 1px solid var(--line);
      background-color: var(--cream-pure);
      padding: 36px 32px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .stat-number {
      font-family: var(--font-numeral);
      font-size: clamp(3rem, 5vw, 4.8rem);
      line-height: 0.9;
      color: var(--charcoal);
      font-variant-numeric: tabular-nums;
    }

    .stat-label {
      font-family: var(--font-display);
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--stone-text);
    }

    /* --------------------------------------------------------
       03. BANDA DE CIERRE EN ACENTO
       Superficie plana y mate en --accent con texto --cream
       -------------------------------------------------------- */
    .accent-closure-band {
      background-color: var(--accent);
      color: var(--cream-pure);
      padding: clamp(48px, 6vw, 80px) 0;
      border-top: 1px solid var(--accent-deep);
    }

    .closure-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 36px;
    }

    .closure-kicker {
      font-family: var(--font-display);
      font-size: 0.8rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(248, 244, 234, 0.7);
      margin-bottom: 8px;
    }

    .closure-title {
      font-family: var(--font-display);
      font-size: clamp(1.8rem, 3.2vw, 3rem);
      line-height: 0.95;
      text-transform: uppercase;
      color: var(--cream-pure);
    }

    .closure-desc {
      font-size: 1rem;
      color: rgba(248, 244, 234, 0.8);
      max-width: 480px;
      margin-top: 8px;
    }

    .btn-closure {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-family: var(--font-display);
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 18px 36px;
      background-color: var(--charcoal);
      color: var(--cream);
      border: 1px solid var(--charcoal);
      text-decoration: none;
      cursor: pointer;
      transition: all 0.25s ease;
    }

    .btn-closure:hover {
      background-color: var(--cream);
      color: var(--charcoal);
      border-color: var(--cream);
    }

    /* Variant Spec Badge */
    .variant-spec-badge {
      background: var(--charcoal-2);
      border: 1px solid var(--line-dark);
      padding: 16px 24px;
      display: flex;
      gap: 24px;
      align-items: center;
      margin-bottom: 32px;
      font-family: var(--font-display);
      font-size: 0.82rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--cream);
    }

    .color-swatch {
      width: 24px;
      height: 24px;
      background-color: var(--accent);
      border: 1px solid rgba(255,255,255,0.2);
    }
  </style>
</head>
<body>

  <!-- HERO CARBÓN -->
  <section class="hero-section">
    <div class="hero-bg-wrap">
      <img src="../../img/render-fachada-edificio-obra-nueva-1600.jpg" alt="Render de fachada residencial">
      <div class="hero-veil"></div>
    </div>

    <div class="container" style="position: relative; z-index: 10;">
      <nav class="hero-nav">
        <a href="#" class="logo-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="none">
            <path d="M 4 11 L 4 4 L 11 4" stroke="var(--cream)" stroke-width="2" stroke-linecap="square"/>
            <path d="M 21 4 L 28 4 L 28 11" stroke="var(--cream)" stroke-width="2" stroke-linecap="square"/>
            <path d="M 4 21 L 4 28 L 11 28" stroke="var(--cream)" stroke-width="2" stroke-linecap="square"/>
            <path d="M 21 28 L 28 28 L 28 21" stroke="var(--cream)" stroke-width="2" stroke-linecap="square"/>
            <circle cx="16" cy="16" r="2.5" fill="var(--accent-on-dark)"/>
          </svg>
          <span class="logo-text">EIDOS RENDER</span>
        </a>

        <ul class="nav-items">
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Metodología</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>

        <div style="font-family: var(--font-display); font-size: 0.8rem; letter-spacing: 0.1em; color: var(--accent-on-dark);">
          ${v.hex}
        </div>
      </nav>
    </div>

    <div class="container hero-content">
      <div class="kicker-dark">
        <span class="kicker-dot"></span>
        Dirección Visual & Lanzamiento Inmobiliario
      </div>

      <h1 class="hero-title">
        Del proyecto<br>
        arquitectónico<br>
        al lanzamiento.
      </h1>

      <div class="hero-grid">
        <p class="hero-desc">
          Partimos de la arquitectura. Construimos su imagen. Y la llevamos hasta el mercado con un sistema visual integral diseñado para promotoras, fondos e inversión inmobiliaria.
        </p>

        <div class="hero-actions">
          <a href="#" class="link-draw-accent">
            VER PROYECTOS SELECCIONADOS →
          </a>
          <a href="#" class="btn-cta">
            HABLEMOS DEL PROYECTO →
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- SECCIÓN CREMA -->
  <section class="cream-section">
    <div class="container">
      <div class="cream-grid">
        <div style="font-family: var(--font-display); font-size: 0.9rem; letter-spacing: 0.14em; color: var(--stone); text-transform: uppercase;">
          01 / CRITERIO
        </div>

        <div>
          <div class="section-kicker-cream">
            <span style="width: 6px; height: 6px; background-color: var(--accent); display: inline-block;"></span>
            Manifiesto del Estudio
          </div>
          <h2 class="cream-title">
            Una sola visión.<br>Todas las piezas.
          </h2>

          <div class="manifesto-sentence">
            El render es el producto. Cada decisión existe para que la arquitectura exprese su máximo valor. La interfaz se retira; la imagen protagoniza.
          </div>

          <p class="cream-body">
            No producimos imágenes aisladas ni packs impersonales. Diseñamos un ecosistema completo de marca, visualización y herramientas comerciales donde cada plano y cada render refuerza el precio del metro cuadrado.
          </p>

          <div>
            <a href="#" class="link-cream-hover">
              CONOCE NUESTRO SISTEMA DE LANZAMIENTO →
            </a>
          </div>
        </div>

        <div class="stat-card">
          <span class="stat-label">Precisión & Escala</span>
          <div class="stat-number">4K</div>
          <p style="font-size: 0.9rem; color: var(--stone-text);">
            Resolución nativa de cálculo fotográfico para gran formato editorial y comercial.
          </p>
          <div style="border-top: 1px solid var(--line); padding-top: 16px; margin-top: 8px;">
            <span style="font-family: var(--font-display); font-size: 0.75rem; letter-spacing: 0.1em; color: var(--accent); text-transform: uppercase;">
              Acento aplicado en línea & kicker
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BANDA DE CIERRE EN ACENTO -->
  <section class="accent-closure-band">
    <div class="container">
      <div class="closure-flex">
        <div>
          <div class="closure-kicker">Cierre Editorial · Superficie Mate</div>
          <h2 class="closure-title">¿Preparando una promoción?</h2>
          <p class="closure-desc">
            Revisemos la planimetría para dimensionar el alcance visual idóneo.
          </p>
        </div>
        <div>
          <a href="#" class="btn-closure">
            INICIAR VALORACIÓN DEL PROYECTO →
          </a>
        </div>
      </div>
    </div>
  </section>

</body>
</html>
`;
}

// 1. Write individual test files
for (const v of variants) {
  const content = generateVariantHtml(v);
  const filePath = path.join(testDir, `${v.id}.html`);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated: _tests/color/${v.id}.html`);
}

// 2. Write unified comparison dashboard
const indexDashboard = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eidos Render · Prueba Comparativa de Acentos de Color</title>
  <link rel="stylesheet" href="../../assets/fonts.css">
  <style>
    :root {
      --charcoal: #1E1C1A;
      --charcoal-2: #292724;
      --cream: #EFE9DC;
      --cream-pure: #F8F4EA;
      --stone: #8C867B;
      --font-display: 'Special Gothic Condensed', 'Barlow Condensed', sans-serif;
      --font-text: 'Special Gothic', sans-serif;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border-radius: 0 !important;
    }

    body {
      background: #141312;
      color: var(--cream);
      font-family: var(--font-text);
      overflow-x: hidden;
    }

    /* Fixed top bar for test controls */
    .test-control-bar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: var(--charcoal);
      border-bottom: 1px solid rgba(239,233,220,0.18);
      padding: 16px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .test-brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .test-title {
      font-family: var(--font-display);
      font-size: 1.15rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-weight: 600;
    }

    .test-tabs {
      display: flex;
      gap: 12px;
      align-items: center;
      flex-wrap: wrap;
    }

    .tab-btn {
      font-family: var(--font-display);
      font-size: 0.8rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 8px 16px;
      border: 1px solid rgba(239,233,220,0.25);
      background: transparent;
      color: var(--cream);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
    }

    .tab-btn:hover, .tab-btn.active {
      background: var(--cream);
      color: var(--charcoal);
      border-color: var(--cream);
    }

    .swatch-dot {
      width: 10px;
      height: 10px;
      display: inline-block;
    }

    /* View containers */
    .view-container {
      display: none;
      width: 100%;
    }

    .view-container.active {
      display: block;
    }

    /* Side-by-side Desktop Grid */
    .side-by-side-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      padding: 24px;
      background: #141312;
    }

    .column-panel {
      border: 1px solid rgba(239,233,220,0.2);
      display: flex;
      flex-direction: column;
      background: #000;
    }

    .panel-header {
      padding: 12px 18px;
      background: var(--charcoal-2);
      border-bottom: 1px solid rgba(239,233,220,0.15);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-display);
      font-size: 0.85rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .iframe-desktop {
      width: 100%;
      height: 920px;
      border: none;
    }

    /* Mobile Side-by-side Grid */
    .mobile-side-by-side {
      display: flex;
      justify-content: center;
      gap: 36px;
      padding: 40px 24px;
      background: #141312;
      flex-wrap: wrap;
    }

    .mobile-device-frame {
      width: 390px;
      border: 1px solid rgba(239,233,220,0.25);
      background: var(--charcoal);
      display: flex;
      flex-direction: column;
    }

    .iframe-mobile {
      width: 390px;
      height: 844px;
      border: none;
    }

    /* Fullscreen view */
    .fullscreen-iframe {
      width: 100%;
      height: calc(100vh - 65px);
      border: none;
      display: block;
    }
  </style>
</head>
<body>

  <nav class="test-control-bar">
    <div class="test-brand">
      <span class="test-title">EIDOS RENDER · PRUEBA DE ACENTO</span>
    </div>

    <div class="test-tabs">
      <button class="tab-btn active" onclick="switchView('side-desktop')">
        Lado a Lado (Escritorio)
      </button>
      <button class="tab-btn" onclick="switchView('side-mobile')">
        Lado a Lado (Móvil)
      </button>
      <button class="tab-btn" onclick="switchView('view-burdeos')">
        <span class="swatch-dot" style="background:#6B1A2A;"></span> Burdeos #6B1A2A
      </button>
      <button class="tab-btn" onclick="switchView('view-granate')">
        <span class="swatch-dot" style="background:#8E1B2E;"></span> Granate #8E1B2E
      </button>
      <button class="tab-btn" onclick="switchView('view-frambuesa')">
        <span class="swatch-dot" style="background:#B5294E;"></span> Frambuesa #B5294E
      </button>
    </div>
  </nav>

  <!-- 01. DESKTOP SIDE BY SIDE -->
  <section id="side-desktop" class="view-container active">
    <div class="side-by-side-grid">
      <!-- Burdeos -->
      <div class="column-panel">
        <div class="panel-header">
          <span>01 · Burdeos #6B1A2A</span>
          <span style="color: #C97285;">--accent-on-dark: #C97285</span>
        </div>
        <iframe src="burdeos.html" class="iframe-desktop"></iframe>
      </div>

      <!-- Granate -->
      <div class="column-panel">
        <div class="panel-header" style="background: #312E2B;">
          <span>02 · Granate #8E1B2E (Default)</span>
          <span style="color: #D9788E;">--accent-on-dark: #D9788E</span>
        </div>
        <iframe src="granate.html" class="iframe-desktop"></iframe>
      </div>

      <!-- Frambuesa -->
      <div class="column-panel">
        <div class="panel-header">
          <span>03 · Frambuesa #B5294E</span>
          <span style="color: #E86584;">--accent-on-dark: #E86584</span>
        </div>
        <iframe src="frambuesa.html" class="iframe-desktop"></iframe>
      </div>
    </div>
  </section>

  <!-- 02. MOBILE SIDE BY SIDE -->
  <section id="side-mobile" class="view-container">
    <div class="mobile-side-by-side">
      <!-- Burdeos -->
      <div class="mobile-device-frame">
        <div class="panel-header">
          <span>01 · Burdeos #6B1A2A</span>
          <span style="font-size: 0.7rem; color: #C97285;">390 × 844 px</span>
        </div>
        <iframe src="burdeos.html" class="iframe-mobile"></iframe>
      </div>

      <!-- Granate -->
      <div class="mobile-device-frame">
        <div class="panel-header" style="background: #312E2B;">
          <span>02 · Granate #8E1B2E</span>
          <span style="font-size: 0.7rem; color: #D9788E;">390 × 844 px</span>
        </div>
        <iframe src="granate.html" class="iframe-mobile"></iframe>
      </div>

      <!-- Frambuesa -->
      <div class="mobile-device-frame">
        <div class="panel-header">
          <span>03 · Frambuesa #B5294E</span>
          <span style="font-size: 0.7rem; color: #E86584;">390 × 844 px</span>
        </div>
        <iframe src="frambuesa.html" class="iframe-mobile"></iframe>
      </div>
    </div>
  </section>

  <!-- 03. FULLSCREEN VIEWS -->
  <section id="view-burdeos" class="view-container">
    <iframe src="burdeos.html" class="fullscreen-iframe"></iframe>
  </section>

  <section id="view-granate" class="view-container">
    <iframe src="granate.html" class="fullscreen-iframe"></iframe>
  </section>

  <section id="view-frambuesa" class="view-container">
    <iframe src="frambuesa.html" class="fullscreen-iframe"></iframe>
  </section>

  <script>
    function switchView(viewId) {
      document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

      const targetView = document.getElementById(viewId);
      if (targetView) targetView.classList.add('active');

      const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick').includes(viewId));
      if (activeBtn) activeBtn.classList.add('active');
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(testDir, 'index.html'), indexDashboard, 'utf8');
console.log('Generated: _tests/color/index.html (Unified Comparison Dashboard)');
