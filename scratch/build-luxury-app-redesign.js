const fs = require('fs');

// 1. UPDATE style.css
let css = fs.readFileSync('style.css', 'utf8');

// Replace nav and floating menu CSS with the new refined Centered Logo (Two Inks) + Floating App Menu
const navSectionRegex = /\/\* ==========================================================================\s+HEADER SUPERIOR CENTRAL[\s\S]*$/;

const newNavAndAppCss = `/* ==========================================================================
   HEADER SUPERIOR CENTRAL: LOGOTIPO A DOS TINTAS + NOMBRE DINÁMICO
   ========================================================================== */
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 124px;
  z-index: 1000;
  background-color: transparent;
  pointer-events: none;
  transition: height 0.45s var(--easing-editorial),
              background-color 0.4s ease,
              border-color 0.4s ease,
              backdrop-filter 0.4s ease,
              box-shadow 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-header.scrolled {
  height: 64px;
  background-color: rgba(241, 235, 223, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--line);
  box-shadow: 0 4px 20px rgba(27, 25, 24, 0.04);
}

.nav-inner {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  pointer-events: none;
}

.nav-center-brand {
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.brand-lockup-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  color: var(--charcoal);
  transition: gap 0.4s var(--easing-editorial);
}

/* Isotipo grande a dos tintas centrado en reposo */
.isotype-hero {
  width: 54px;
  height: 54px;
  overflow: visible;
  transition: width 0.4s var(--easing-editorial),
              height 0.4s var(--easing-editorial),
              transform 0.4s var(--easing-editorial);
}

.isotype-hero .iso-sun {
  fill: var(--granate);
  transition: fill 0.3s ease;
}

.isotype-hero .iso-line-1,
.isotype-hero .iso-line-2 {
  fill: var(--charcoal);
  transition: fill 0.3s ease;
}

/* Nombre EIDOS RENDER centrado debajo */
.brand-name-scroll {
  font-family: var(--font-syncopate);
  font-weight: 700;
  font-size: 13.5px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--charcoal);
  white-space: nowrap;
  line-height: 1;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              max-height 0.4s ease;
  max-height: 24px;
}

/* Al hacer scroll: el nombre se funde y solo queda el logo centrado sutil */
.nav-header.scrolled .brand-name-scroll {
  opacity: 0;
  transform: translateY(-8px);
  max-height: 0;
  pointer-events: none;
}

.nav-header.scrolled .isotype-hero {
  width: 32px;
  height: 32px;
}

.nav-header.scrolled .brand-lockup-vertical {
  gap: 0;
}

/* ==========================================================================
   BOTÓN FLOTANTE DERECHO & MENÚ TIPO APP
   ========================================================================== */
.floating-menu-btn {
  position: fixed;
  top: 24px;
  right: 28px;
  z-index: 1200;
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: var(--charcoal);
  color: var(--cream);
  padding: 12px 22px;
  border: 1px solid var(--charcoal);
  border-radius: 30px !important; /* Píldora moderna tipo app */
  font-family: var(--font-syncopate);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(27, 25, 24, 0.12);
  transition: all 0.35s var(--easing-editorial);
}

.floating-menu-btn:hover {
  background-color: var(--granate);
  border-color: var(--granate);
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(163, 26, 51, 0.25);
}

.floating-menu-btn .menu-btn-icon {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 16px;
}

.floating-menu-btn .menu-btn-icon span {
  display: block;
  height: 1.5px;
  background-color: currentColor;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.floating-menu-btn.active .line-top {
  transform: translateY(2.75px) rotate(45deg);
}

.floating-menu-btn.active .line-bottom {
  transform: translateY(-2.75px) rotate(-45deg);
}

/* Modal / Isla Flotante Tipo App */
.floating-app-panel {
  position: fixed;
  top: 78px;
  right: 28px;
  width: min(360px, calc(100vw - 32px));
  background-color: rgba(241, 235, 223, 0.98);
  color: var(--charcoal);
  z-index: 1150;
  border-radius: 20px !important;
  border: 1px solid var(--line);
  box-shadow: 0 24px 60px rgba(27, 25, 24, 0.18), 0 4px 16px rgba(27, 25, 24, 0.05);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  transform: translateY(-12px) scale(0.96);
  pointer-events: none;
  transform-origin: top right;
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.floating-app-panel.open {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.app-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--line);
}

.app-panel-title {
  font-family: var(--font-syncopate);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--warm-gray);
  text-transform: uppercase;
}

.app-nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.app-nav-item a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-radius: 10px !important;
  font-family: var(--font-special);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--charcoal);
  text-decoration: none;
  transition: all 0.2s ease;
}

.app-nav-item a:hover {
  background-color: var(--cream-2);
  color: var(--granate);
  transform: translateX(4px);
}

.app-nav-num {
  font-family: var(--font-prata);
  font-size: 0.85rem;
  color: var(--warm-gray);
  margin-right: 10px;
}

/* Selector de Idioma Tipo Segmented Control iOS */
.app-lang-segmented {
  display: flex;
  align-items: center;
  background-color: var(--cream-2);
  border-radius: 20px !important;
  padding: 3px;
  border: 1px solid var(--line);
  justify-content: space-between;
}

.app-lang-segmented a, .app-lang-segmented span {
  flex: 1;
  text-align: center;
  padding: 6px 0;
  font-family: var(--font-syncopate);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--warm-gray);
  text-decoration: none;
  border-radius: 16px !important;
  transition: all 0.25s ease;
  cursor: pointer;
}

.app-lang-segmented .active, .app-lang-segmented a:hover {
  background-color: var(--charcoal);
  color: var(--cream);
}

/* App Footer Actions */
.app-panel-footer {
  border-top: 1px solid var(--line);
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.app-cta-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--granate);
  color: var(--cream);
  padding: 12px;
  border-radius: 12px !important;
  font-family: var(--font-syncopate);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.25s ease;
}

.app-cta-btn:hover {
  background-color: var(--granate-hover);
}

.app-contact-sub {
  font-family: var(--font-special);
  font-size: 12px;
  color: var(--warm-gray);
  text-align: center;
}

/* ==========================================================================
   TIPOGRAFÍA INTEGRADA, EFECTOS VISUALES & PESO PRIORITARIO AL TEXTO
   ========================================================================== */
.hero-editorial-wrap {
  padding-top: 140px;
  padding-bottom: 80px;
}

.hero-statement-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.85fr;
  gap: 48px;
  align-items: center;
}

@media (max-width: 992px) {
  .hero-statement-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

.hero-main-title {
  font-family: var(--font-special);
  font-size: clamp(2.8rem, 6.5vw, 6.2rem);
  line-height: 0.95;
  letter-spacing: -0.025em;
  color: var(--charcoal);
  margin-bottom: 28px;
}

.hero-supporting-media {
  position: relative;
  border: 1px solid var(--line);
  background-color: var(--cream-2);
  padding: 8px;
  box-shadow: 0 16px 40px rgba(27, 25, 24, 0.08);
}

.hero-supporting-media video,
.hero-supporting-media img {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
}

/* Animaciones y Efectos Visuales en Textos */
.text-reveal-flow {
  opacity: 0;
  transform: translateY(28px);
  filter: blur(6px);
  transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.85s cubic-bezier(0.22, 1, 0.36, 1),
              filter 0.85s cubic-bezier(0.22, 1, 0.36, 1);
}

.text-reveal-flow.revealed {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* Citas y Palabras Destacadas con Prata Italic y Granate Vivo */
.text-prata-accent, .font-prata, em, .display-italic {
  font-family: var(--font-prata) !important;
  font-style: italic;
  font-weight: 400;
  color: var(--granate);
}
`;

if (navSectionRegex.test(css)) {
  css = css.replace(navSectionRegex, newNavAndAppCss);
} else {
  css += '\n' + newNavAndAppCss;
}

fs.writeFileSync('style.css', css, 'utf8');
console.log('style.css updated with centered two-ink header and app-like floating panel.');
