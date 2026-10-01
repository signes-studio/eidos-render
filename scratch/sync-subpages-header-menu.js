const fs = require('fs');
const path = require('path');

const files = ['servicios.html', 'proyectos.html', 'contacto.html'];

const newHeaderAndMenu = `  <!-- =====================================================
       00. CABECERA DINÁMICA CENTRADA:
       Isotipo grande a dos tintas + Nombre centrado debajo
       Al hacer scroll, el nombre se funde y queda solo el logo en navbar sutil
       ===================================================== -->
  <header class="nav-header" id="navHeader" role="banner">
    <div class="nav-inner">
      <div class="nav-center-brand">
        <a href="index.html" class="brand-lockup-vertical" id="brandLockup" aria-label="Eidos Render Inicio">
          <svg class="isotype-hero" id="headerIsotype" viewBox="0 0 64 64" aria-hidden="true">
            <path class="iso-sun" fill="var(--granate)" d="M 12,34 A 20,20 0 0,1 52,34 Z" />
            <rect class="iso-line-1" fill="var(--charcoal)" x="6" y="40" width="52" height="5" />
            <rect class="iso-line-2" fill="var(--charcoal)" x="18" y="50" width="28" height="3" />
          </svg>
          <span class="brand-name-scroll" id="brandName">EIDOS RENDER</span>
        </a>
      </div>
    </div>
  </header>

  <!-- =====================================================
       00B. BOTÓN FLOTANTE DERECHO & PANEL FLOTANTE TIPO APP
       ===================================================== -->
  <button class="floating-menu-btn" id="floatingMenuBtn" aria-label="Abrir menú" aria-expanded="false">
    <span class="menu-btn-label">MENÚ</span>
    <span class="menu-btn-icon">
      <span class="line line-top"></span>
      <span class="line line-bottom"></span>
    </span>
  </button>

  <div class="floating-app-panel" id="floatingAppPanel" aria-label="Menú de navegación" aria-hidden="true">
    <div class="app-panel-header">
      <span class="app-panel-title">EIDOS RENDER · APP</span>
      <span class="kicker-dot" style="background-color: var(--granate); width: 6px; height: 6px;"></span>
    </div>

    <nav aria-label="Navegación principal">
      <ul class="app-nav-list">
        <li class="app-nav-item">
          <a href="index.html" class="app-link">
            <span><span class="app-nav-num">01</span>Inicio</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="servicios.html" class="app-link">
            <span><span class="app-nav-num">02</span>Servicios & Capacidades</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="proyectos.html" class="app-link">
            <span><span class="app-nav-num">03</span>Portfolio de Casos</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="index.html#branding" class="app-link">
            <span><span class="app-nav-num">04</span>Identidad & Branding</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="index.html#proceso" class="app-link">
            <span><span class="app-nav-num">05</span>Metodología</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="contacto.html" class="app-link">
            <span><span class="app-nav-num">06</span>Contacto Directo</span>
            <span>→</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Selector de Idioma Elegante Tipo Segmented Control -->
    <div class="app-lang-segmented" aria-label="Selector de idioma">
      <span class="active" data-lang="es">ES</span>
      <a href="en/" data-lang="en" onclick="window.setLang('en')">EN</a>
      <a href="de/" data-lang="de" onclick="window.setLang('de')">DE</a>
      <a href="fr/" data-lang="fr" onclick="window.setLang('fr')">FR</a>
    </div>

    <div class="app-panel-footer">
      <a href="contacto.html" class="app-cta-btn">
        HABLEMOS DEL PROYECTO →
      </a>
      <div class="app-contact-sub">Valencia · Servicio Nacional e Internacional</div>
    </div>
  </div>`;

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Replace header and mobile overlay
  const headerRegex = /<header class="nav-header[\s\S]*?<\/header>[\s\S]*?<div class="mobile-nav-overlay[\s\S]*?<\/div>[\s\S]*?<\/div>/i;
  if (headerRegex.test(content)) {
    content = content.replace(headerRegex, newHeaderAndMenu);
    console.log(`Replaced header & mobile-nav-overlay in ${file}`);
  } else {
    // try replacing nav-header alone
    const navHeaderOnly = /<header class="nav-header[\s\S]*?<\/header>/i;
    if (navHeaderOnly.test(content)) {
      content = content.replace(navHeaderOnly, newHeaderAndMenu);
      console.log(`Replaced header only in ${file}`);
    }
  }

  // Ensure <main> has top padding
  content = content.replace(/<main\s+style="padding-top:\s*var\(--nav-h\);"/gi, '<main style="padding-top: 140px;"');
  content = content.replace(/<main>/gi, '<main style="padding-top: 140px;">');

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Saved: ${file}`);
});
