const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function getHeaderAndMenu(lang, depth) {
  const p = depth === 2 ? '../../' : depth === 1 ? '../' : './';
  const home = p + (lang === 'es' ? 'index.html' : lang + '/index.html');
  const serv = p + (lang === 'es' ? 'servicios.html' : lang === 'en' ? 'en/services.html' : lang === 'de' ? 'de/leistungen.html' : 'fr/services.html');
  const proj = p + (lang === 'es' ? 'proyectos.html' : lang === 'en' ? 'en/projects.html' : lang === 'de' ? 'de/projekte.html' : 'fr/projets.html');
  const brand = home + '#branding';
  const proc = home + '#proceso';
  const cnt = p + (lang === 'es' ? 'contacto.html' : lang === 'en' ? 'en/contact.html' : lang === 'de' ? 'de/kontakt.html' : 'fr/contact.html');

  const t = {
    es: { menu: 'MENÚ', app: 'EIDOS RENDER · APP', l1: 'Inicio', l2: 'Servicios & Capacidades', l3: 'Portfolio de Casos', l4: 'Identidad & Branding', l5: 'Metodología', l6: 'Contacto Directo', cta: 'HABLEMOS DEL PROYECTO →', sub: 'Valencia · Servicio Nacional e Internacional' },
    en: { menu: 'MENU', app: 'EIDOS RENDER · APP', l1: 'Home', l2: 'Services & Capabilities', l3: 'Case Portfolio', l4: 'Brand Identity', l5: 'Methodology', l6: 'Direct Contact', cta: 'DISCUSS YOUR PROJECT →', sub: 'Valencia · Operating Across Europe' },
    de: { menu: 'MENÜ', app: 'EIDOS RENDER · APP', l1: 'Startseite', l2: 'Leistungen & Kompetenzen', l3: 'Projektportfolio', l4: 'Markenidentität', l5: 'Methodik', l6: 'Direktkontakt', cta: 'PROJEKT BESPRECHEN →', sub: 'Valencia · Europaweiter Service' },
    fr: { menu: 'MENU', app: 'EIDOS RENDER · APP', l1: 'Accueil', l2: 'Services & Capacités', l3: 'Portfolio de Projets', l4: 'Identité & Branding', l5: 'Méthodologie', l6: 'Contact Direct', cta: 'PARLONS DU PROJET →', sub: 'Valence · Service Européen et International' }
  }[lang];

  return `  <!-- =====================================================
       00. CABECERA DINÁMICA CENTRADA:
       Isotipo grande a dos tintas + Nombre centrado debajo
       Al hacer scroll, el nombre se funde y queda solo el logo en navbar sutil
       ===================================================== -->
  <header class="nav-header" id="navHeader" role="banner">
    <div class="nav-inner">
      <div class="nav-center-brand">
        <a href="${home}" class="brand-lockup-vertical" id="brandLockup" aria-label="Eidos Render">
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
  <button class="floating-menu-btn" id="floatingMenuBtn" aria-label="Menu" aria-expanded="false">
    <span class="menu-btn-label">${t.menu}</span>
    <span class="menu-btn-icon">
      <span class="line line-top"></span>
      <span class="line line-bottom"></span>
    </span>
  </button>

  <div class="floating-app-panel" id="floatingAppPanel" aria-label="Navigation" aria-hidden="true">
    <div class="app-panel-header">
      <span class="app-panel-title">${t.app}</span>
      <span class="kicker-dot" style="background-color: var(--granate); width: 6px; height: 6px;"></span>
    </div>

    <nav aria-label="Navigation">
      <ul class="app-nav-list">
        <li class="app-nav-item">
          <a href="${home}" class="app-link">
            <span><span class="app-nav-num">01</span>${t.l1}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="${serv}" class="app-link">
            <span><span class="app-nav-num">02</span>${t.l2}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="${proj}" class="app-link">
            <span><span class="app-nav-num">03</span>${t.l3}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="${brand}" class="app-link">
            <span><span class="app-nav-num">04</span>${t.l4}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="${proc}" class="app-link">
            <span><span class="app-nav-num">05</span>${t.l5}</span>
            <span>→</span>
          </a>
        </li>
        <li class="app-nav-item">
          <a href="${cnt}" class="app-link">
            <span><span class="app-nav-num">06</span>${t.l6}</span>
            <span>→</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Selector de Idioma Elegante Tipo Segmented Control -->
    <div class="app-lang-segmented" aria-label="Language selector">
      <a href="${p}index.html" data-lang="es" class="${lang === 'es' ? 'active' : ''}" onclick="window.setLang('es')">ES</a>
      <a href="${p}en/" data-lang="en" class="${lang === 'en' ? 'active' : ''}" onclick="window.setLang('en')">EN</a>
      <a href="${p}de/" data-lang="de" class="${lang === 'de' ? 'active' : ''}" onclick="window.setLang('de')">DE</a>
      <a href="${p}fr/" data-lang="fr" class="${lang === 'fr' ? 'active' : ''}" onclick="window.setLang('fr')">FR</a>
    </div>

    <div class="app-panel-footer">
      <a href="${cnt}" class="app-cta-btn">
        ${t.cta}
      </a>
      <div class="app-contact-sub">${t.sub}</div>
    </div>
  </div>`;
}

function processDir(dir, lang, depth) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      processDir(full, lang, depth + 1);
    } else if (f.endsWith('.html') && f !== 'index.html') {
      let content = fs.readFileSync(full, 'utf8');
      
      const newMarkup = getHeaderAndMenu(lang, depth);
      
      // Replace header + mobile nav if present
      const fullNavRegex = /<header class="nav-header[\s\S]*?<\/header>[\s\S]*?<div class="mobile-nav-overlay[\s\S]*?<\/div>[\s\S]*?<\/div>/i;
      if (fullNavRegex.test(content)) {
        content = content.replace(fullNavRegex, newMarkup);
      } else {
        const headerOnly = /<header class="nav-header[\s\S]*?<\/header>/i;
        if (headerOnly.test(content)) {
          content = content.replace(headerOnly, newMarkup);
        }
      }
      
      content = content.replace(/<main\s+style="padding-top:\s*var\(--nav-h\);"/gi, '<main style="padding-top: 140px;"');
      
      fs.writeFileSync(full, content, 'utf8');
      console.log(`Updated subpage: ${full.replace(root, '')}`);
    }
  });
}

// Process directories
processDir(path.join(root, 'servicios'), 'es', 1);
processDir(path.join(root, 'en'), 'en', 1);
processDir(path.join(root, 'de'), 'de', 1);
processDir(path.join(root, 'fr'), 'fr', 1);
