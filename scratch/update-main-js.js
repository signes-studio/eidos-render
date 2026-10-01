const fs = require('fs');

let code = fs.readFileSync('main.js', 'utf8');

// Add to DOMContentLoaded
if (!code.includes('initFloatingMenu();')) {
  code = code.replace('initPreloader();', 'initPreloader();\n      initFloatingMenu();\n      initScrollReveals();');
}

// Add function definitions
const functions = `
  /* ==========================================================================
     BOTÓN FLOTANTE DERECHO & DRAWER EDITORIAL
     ========================================================================== */
  function initFloatingMenu() {
    const btn = document.getElementById('floatingMenuBtn');
    const drawer = document.getElementById('floatingDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (!btn || !drawer) return;

    function toggleMenu(open) {
      const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
      btn.classList.toggle('active', isOpen);
      btn.setAttribute('aria-expanded', isOpen);
      drawer.classList.toggle('open', isOpen);
      drawer.setAttribute('aria-hidden', !isOpen);
      if (backdrop) backdrop.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    if (backdrop) {
      backdrop.addEventListener('click', () => toggleMenu(false));
    }

    // Cerrar al hacer clic en enlaces del drawer
    const links = drawer.querySelectorAll('.drawer-link');
    links.forEach(l => {
      l.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  /* ==========================================================================
     SCROLL REVEAL TRANSITIONS (Aparición de textos al ir bajando)
     ========================================================================== */
  function initScrollReveals() {
    const elements = document.querySelectorAll('.scroll-reveal');
    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      elements.forEach(el => observer.observe(el));
    } else {
      elements.forEach(el => el.classList.add('revealed'));
    }
  }
`;

if (!code.includes('function initFloatingMenu()')) {
  code = code.replace('})();', functions + '\n})();');
  fs.writeFileSync('main.js', code, 'utf8');
  console.log('main.js updated with initFloatingMenu and initScrollReveals.');
} else {
  console.log('main.js already contains floating menu functions.');
}
