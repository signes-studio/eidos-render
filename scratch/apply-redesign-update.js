const fs = require('fs');
const path = require('path');

// 1. UPDATE style.css
let css = fs.readFileSync('style.css', 'utf8');

// Replace Root Tokens with exact user specification
const oldTokensRegex = /\/\* 01\. PALETA OFICIAL[\s\S]*?\/\* Dimensiones & Retícula \*\//;
const newTokens = `/* 01. PALETA OFICIAL — DIRECTRICES EXACTAS */
  --charcoal: #1B1918;       /* Carbón: textos sobre crema, líneas fuertes, detalles */
  --cream: #F1EBDF;          /* Crema ("blanco" cálido de fondo principal) */
  --cream-2: #E8E1D3;        /* Superficies secundarias y bandas sutiles */
  --granate: #A31A33;        /* Granate vivo ("rojo" de fondo para secciones de impacto y acento) */
  --granate-hover: #7F1428;  /* Hover y estados activos */
  --warm-gray: #8C867B;      /* Gris cálido: metadatos y secundarios */
  --line: #CFC6B6;           /* Línea divisoria */
  --line-on-granate: rgba(241, 235, 223, 0.22);

  /* Mapeo de reglas: "No uses el negro como fondo solo el blanco (#F1EBDF) y el rojo (#A31A33)" */
  --night: var(--granate);
  --night-2: var(--granate-hover);
  --bone: var(--cream);
  --bone-2: var(--cream-2);
  --clay: var(--warm-gray);
  --clay-text: var(--warm-gray);
  --accent: var(--granate);
  --accent-deep: var(--granate-hover);
  --accent-on-dark: var(--cream);
  --ink: var(--granate);
  --ink-2: var(--granate-hover);
  --paper: var(--cream);
  --paper-card: var(--cream-2);
  --crimson: var(--granate);
  --crimson-hover: var(--granate-hover);

  /* Tipografías: Special Gothic principal, Syncopate + Prata en textos */
  --font-special: 'Special Gothic', sans-serif;
  --font-syncopate: 'Syncopate', sans-serif;
  --font-bodoni: 'Bodoni Moda', Georgia, serif;
  --font-prata: 'Prata', Georgia, serif;
  --font-jost: 'Jost', sans-serif;

  /* Mapeo Jerárquico Dinámico */
  --font-display: var(--font-special);
  --font-wordmark: var(--font-syncopate);
  --font-serif: var(--font-prata);
  --font-body: var(--font-special);
  --font-text: var(--font-special);

  /* Dimensiones & Retícula */`;

css = css.replace(oldTokensRegex, newTokens);

// Ensure html & body background is Cream
css = css.replace(/background-color:\s*var\(--bone\);/g, 'background-color: var(--cream);');
css = css.replace(/color:\s*var\(--night\);/g, 'color: var(--charcoal);');

// Background rule: .bg-ink is now GRANATE (#A31A33), NOT BLACK!
css = css.replace(/\.bg-ink\s*\{[^}]*\}/g, `.bg-ink {
  background-color: var(--granate);
  color: var(--cream);
}`);

// Add Floating Menu, Center Brand Header, and Text Transition animations
const additionalStyles = `
/* ==========================================================================
   HEADER SUPERIOR CENTRAL & BOTÓN FLOTANTE DERECHO
   ========================================================================== */
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 84px;
  z-index: 1000;
  background-color: rgba(241, 235, 223, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--line);
  color: var(--charcoal);
  pointer-events: none;
}

.nav-header .nav-inner {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  pointer-events: none;
}

/* Marca Centrada */
.nav-center-brand {
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
}

.brand-lockup-center {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.brand-lockup-center:hover {
  transform: translateY(-1px);
}

.brand-lockup-center .logo-text {
  font-family: var(--font-syncopate);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

/* Botón Flotante a la Derecha */
.floating-menu-btn {
  position: fixed;
  top: 20px;
  right: 28px;
  z-index: 1200;
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: var(--charcoal);
  color: var(--cream);
  padding: 12px 20px;
  border: 1px solid var(--charcoal);
  font-family: var(--font-syncopate);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s var(--easing-editorial);
}

.floating-menu-btn:hover {
  background-color: var(--granate);
  border-color: var(--granate);
  transform: translateY(-2px);
}

.floating-menu-btn .menu-btn-icon {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 18px;
}

.floating-menu-btn .menu-btn-icon span {
  display: block;
  height: 1.5px;
  background-color: currentColor;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.floating-menu-btn.active .line-top {
  transform: translateY(3.25px) rotate(45deg);
}

.floating-menu-btn.active .line-bottom {
  transform: translateY(-3.25px) rotate(-45deg);
}

/* Drawer / Menú Lateral Editorial */
.floating-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: min(520px, 100vw);
  height: 100vh;
  background-color: var(--granate);
  color: var(--cream);
  z-index: 1150;
  transform: translateX(100%);
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(32px, 6vw, 60px);
  border-left: 1px solid rgba(241, 235, 223, 0.2);
  box-shadow: -15px 0 45px rgba(27, 25, 24, 0.25);
}

.floating-drawer.open {
  transform: translateX(0);
}

.floating-drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(27, 25, 24, 0.55);
  backdrop-filter: blur(8px);
  z-index: 1140;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
}

.floating-drawer-backdrop.active {
  opacity: 1;
  pointer-events: auto;
}

.drawer-nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 50px;
}

.drawer-nav-list a {
  font-family: var(--font-special);
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: var(--cream);
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
}

.drawer-nav-list a:hover {
  color: var(--cream-2);
  transform: translateX(8px);
}

/* Selector de Idioma Elegante, Integrado y Oculto */
.drawer-lang-selector {
  border-top: 1px solid rgba(241, 235, 223, 0.2);
  padding-top: 24px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.drawer-lang-label {
  font-family: var(--font-syncopate);
  font-size: 10px;
  letter-spacing: 0.16em;
  opacity: 0.65;
  text-transform: uppercase;
}

.drawer-lang-options {
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: var(--font-syncopate);
  font-size: 11px;
  letter-spacing: 0.14em;
}

.drawer-lang-options a, .drawer-lang-options span {
  cursor: pointer;
  color: var(--cream);
  opacity: 0.55;
  transition: opacity 0.2s ease;
}

.drawer-lang-options .active, .drawer-lang-options a:hover {
  opacity: 1;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Dinamismo Tipográfico: Special Gothic + Syncopate + Prata */
.display-hero, .display-title, .hero-title, .section-title {
  font-family: var(--font-special);
  letter-spacing: -0.02em;
}

.text-prata-accent, .font-prata, em, .display-italic {
  font-family: var(--font-prata) !important;
  font-style: italic;
  font-weight: 400;
}

.font-syncopate, .kicker, .tag-meta, .btn-editorial, .btn-crimson, .hero-subconcept {
  font-family: var(--font-syncopate);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

/* Transición suave de textos al ir bajando */
.scroll-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
`;

css += '\n' + additionalStyles;
fs.writeFileSync('style.css', css, 'utf8');
console.log('style.css updated successfully.');
