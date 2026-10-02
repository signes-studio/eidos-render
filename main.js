/**
 * EIDOS RENDER — main.js
 * Sistema de Movimiento, Interacción Editorial y Lujo Comedido.
 * Stack: Lenis Smooth Scroll + GSAP ScrollTrigger + Transiciones Nativas
 */

(function () {
  'use strict';

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(hover: none) or (pointer: coarse)').matches;

  document.addEventListener('DOMContentLoaded', () => {
    initVendorScripts(() => {
      initLenis();
      initPreloader();
      initFloatingMenu();
      initScrollReveals();
      initPageTransitions();
      initHeaderBehavior();
      initMaskedReveals();
      initCustomCursor();
      initMagneticButtons();
      initLayerScrub();
      initComparator();
      initHorizontalGallery();
      initProjectListHoverPreview();
      initProjectViewToggle();
      initVideoObservers();
      initDirectContact();
      initFaqAccordion();
    });
  });

  /* ==========================================================================
     01. VENDOR SCRIPT LOADER (Autoalojado localmente en assets/vendor/)
     ========================================================================== */
  function initVendorScripts(callback) {
    let loaded = 0;
    const scripts = [
      'assets/vendor/lenis.min.js',
      'assets/vendor/gsap.min.js',
      'assets/vendor/ScrollTrigger.min.js'
    ];

    // Detectar si ya están cargados
    if (window.Lenis && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      return callback();
    }

    const checkComplete = () => {
      loaded++;
      if (loaded === scripts.length) {
        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
        }
        callback();
      }
    };

    scripts.forEach(src => {
      // Ajustar ruta si estamos en subdirectorios
      const depth = (window.location.pathname.match(/\//g) || []).length;
      let prefix = '';
      if (window.location.pathname.includes('/servicios/')) {
        prefix = '../';
      }
      const s = document.createElement('script');
      s.src = prefix + src;
      s.onload = checkComplete;
      s.onerror = checkComplete; // Continuar aunque falle
      document.head.appendChild(s);
    });
  }

  /* ==========================================================================
     02. LENIS SMOOTH SCROLL CON INERCIA
     ========================================================================== */
  let lenisInstance = null;
  function initLenis() {
    if (isReducedMotion || !window.Lenis) return;

    try {
      lenisInstance = new window.Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo-out de alta precisión
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95
      });

      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      if (window.ScrollTrigger) {
        lenisInstance.on('scroll', window.ScrollTrigger.update);
        window.gsap.ticker.add((time) => {
          lenisInstance.raf(time * 1000);
        });
        window.gsap.ticker.lagSmoothing(0);
      }
    } catch (e) {
      console.warn('Lenis falló al iniciar:', e);
    }
  }

  /* ==========================================================================
     03. PRELOADER EDITORIAL (Isotipo Trazo + Contador + Solo Primera Visita)
     ========================================================================== */
  function initPreloader() {
    let preloader = document.querySelector('.preloader');
    const alreadyVisited = sessionStorage.getItem('eidos_motion_visited_v2');

    if (alreadyVisited || isReducedMotion) {
      if (preloader) {
        preloader.classList.add('preloader-loaded');
        setTimeout(() => preloader.remove(), 100);
      }
      return;
    }

    // Inyectar preloader con el Isotipo a dos tintas + Nombre centrado
    if (!preloader) {
      preloader = document.createElement('div');
      preloader.className = 'preloader';
      preloader.innerHTML = `
        <div class="preloader-header">
          <span>EIDOS RENDER</span>
          <span>ESTUDIO VISUAL</span>
        </div>
        <div class="preloader-center">
          <svg class="preloader-iso" viewBox="0 0 64 64" width="88" height="88" style="overflow: visible;">
            <defs>
              <clipPath id="preloaderClip">
                <rect x="0" y="0" width="64" height="40" />
              </clipPath>
            </defs>
            <g clip-path="url(#preloaderClip)">
              <path class="preloader-sun" fill="var(--granate)" d="M 12,34 A 20,20 0 0,1 52,34 Z" />
            </g>
            <rect class="preloader-line-1" fill="var(--charcoal)" x="6" y="40" width="52" height="5" />
            <rect class="preloader-line-2" fill="var(--charcoal)" x="18" y="50" width="28" height="3" />
          </svg>
          <div class="preloader-wordmark">EIDOS RENDER</div>
        </div>
        <div class="preloader-footer">
          <span>ARQUITECTURA & IMAGEN</span>
          <span>VALENCIA · INTERNACIONAL</span>
        </div>
      `;
      document.body.prepend(preloader);
    }

    const line1 = preloader.querySelector('.preloader-line-1');
    const line2 = preloader.querySelector('.preloader-line-2');
    const sun = preloader.querySelector('.preloader-sun');
    const wordmark = preloader.querySelector('.preloader-wordmark');

    if (window.gsap) {
      const tl = window.gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            preloader.classList.add('preloader-loaded');
            sessionStorage.setItem('eidos_motion_visited_v2', 'true');
            setTimeout(() => preloader.remove(), 900);
          }, 400);
        }
      });

      window.gsap.set(line1, { scaleX: 0, transformOrigin: 'left center' });
      window.gsap.set(line2, { scaleX: 0, transformOrigin: 'left center' });
      window.gsap.set(sun, { y: 22 });
      window.gsap.set(wordmark, { opacity: 0, y: 8 });

      // 1. línea 1 se dibuja de izquierda a derecha (0.8s)
      tl.to(line1, { scaleX: 1, duration: 0.8, ease: 'cubic-bezier(.22,1,.36,1)' }, 0);
      // 2. el sol asciende tras un clip en la línea 1 (1.1s, delay .3s)
      tl.to(sun, { y: 0, duration: 1.1, ease: 'cubic-bezier(.22,1,.36,1)' }, 0.3);
      // 3. línea 2 se dibuja (0.8s, delay .8s)
      tl.to(line2, { scaleX: 1, duration: 0.8, ease: 'cubic-bezier(.22,1,.36,1)' }, 0.8);
      // 4. Wordmark aparece con elegancia (0.7s, delay 1.1s)
      tl.to(wordmark, { opacity: 1, y: 0, duration: 0.7, ease: 'cubic-bezier(.22,1,.36,1)' }, 1.1);
    } else {
      setTimeout(() => {
        preloader.classList.add('preloader-loaded');
        sessionStorage.setItem('eidos_motion_visited_v2', 'true');
        setTimeout(() => preloader.remove(), 900);
      }, 1500);
    }
  }

  /* ==========================================================================
     04. TRANSICIONES DE PÁGINA (Telón Plano Clip-Path)
     ========================================================================== */
  function initPageTransitions() {
    let curtain = document.querySelector('.page-transition-curtain');
    if (!curtain) {
      curtain = document.createElement('div');
      curtain.className = 'page-transition-curtain';
      curtain.innerHTML = `<div class="page-transition-title">EIDOS RENDER</div>`;
      document.body.appendChild(curtain);
    }

    // Efecto de apertura al cargar página
    window.addEventListener('pageshow', () => {
      curtain.classList.add('is-revealing');
      setTimeout(() => {
        curtain.classList.remove('is-transitioning', 'is-revealing');
      }, 700);
    });

    // Interceptar enlaces internos
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank') {
        return;
      }

      link.addEventListener('click', (e) => {
        // Solo enlaces del mismo dominio
        const url = new URL(link.href, window.location.origin);
        if (url.origin !== window.location.origin) return;

        e.preventDefault();
        const titleEl = curtain.querySelector('.page-transition-title');
        if (titleEl) {
          const label = link.getAttribute('data-transition-title') || link.textContent.trim() || 'EIDOS RENDER';
          titleEl.textContent = label.length > 25 ? 'EIDOS RENDER' : label;
        }

        curtain.classList.remove('is-revealing');
        curtain.classList.add('is-transitioning');

        setTimeout(() => {
          window.location.href = link.href;
        }, 600);
      });
    });
  }

  /* ==========================================================================
     05. COMPORTAMIENTO DE CABECERA (Compacting, Auto-hide & Dynamic Theme)
     ========================================================================== */
  function initHeaderBehavior() {
    const header = document.querySelector('.nav-header');
    if (!header) return;

    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;

      // Al bajar > 40px: se añade .scrolled (funde el nombre y reduce isotipo)
      if (currentScrollY > 40) {
        header.classList.add('scrolled', 'nav-scrolled');
      } else {
        header.classList.remove('scrolled', 'nav-scrolled');
      }

      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });

    updateHeader();
  }

  /* ==========================================================================
     06. REVELADO LÍNEA A LÍNEA CON MÁSCARA (Line-by-Line Reveals)
     ========================================================================== */
  function initMaskedReveals() {
    if (isReducedMotion) {
      document.querySelectorAll('.line-mask, .img-reveal-wrap').forEach(el => {
        el.classList.add('line-mask-revealed', 'is-revealed');
      });
      return;
    }

    // Convertir titulares a máscaras de línea
    const targets = document.querySelectorAll('.mask-reveal-title, .display-hero, .display-title');
    targets.forEach(el => {
      if (el.dataset.masked) return;
      el.dataset.masked = 'true';

      const html = el.innerHTML;
      // Si ya tiene divs o brs, envolver líneas
      const lines = html.split(/<br\s*[\/]?>/gi);
      if (lines.length > 1) {
        el.innerHTML = lines.map(line => `
          <span class="line-mask">
            <span class="line-mask-inner">${line.trim()}</span>
          </span>
        `).join('');
      } else {
        el.innerHTML = `
          <span class="line-mask">
            <span class="line-mask-inner">${html.trim()}</span>
          </span>
        `;
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('line-mask-revealed', 'is-revealed');
        } else {
          const rect = entry.boundingClientRect;
          if (rect.bottom < 0 || rect.top > window.innerHeight) {
            entry.target.classList.remove('line-mask-revealed', 'is-revealed');
          }
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -30px 0px'
    });

    document.querySelectorAll('.line-mask, .img-reveal-wrap, .reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  /* ==========================================================================
     07. CURSOR CONTEXTUAL (Solo Escritorio / Sin Táctil)
     ========================================================================== */
  function initCustomCursor() {
    if (isTouchDevice) return;

    let cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      cursor.innerHTML = `<span class="custom-cursor-label"></span>`;
      document.body.appendChild(cursor);
    }

    const labelEl = cursor.querySelector('.custom-cursor-label');
    let mouseX = -100, mouseY = -100;
    let cursorX = -100, cursorY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = '1';
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    function renderCursor() {
      // Interpolación suave (lerp)
      cursorX += (mouseX - cursorX) * 0.22;
      cursorY += (mouseY - cursorY) * 0.22;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Zonas interactivas con etiquetas dinámicas
    const setupHover = (selector, label, isAccent = false) => {
      document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('has-label');
          if (isAccent) cursor.classList.add('cursor-accent');
          if (labelEl) labelEl.textContent = label;
        });
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('has-label', 'cursor-accent');
          if (labelEl) labelEl.textContent = '';
        });
      });
    };

    setupHover('.project-card, .pinned-gallery-card', 'VER');
    setupHover('.comparator-wrap', 'ARRASTRAR');
    setupHover('.layer-scrub-viewport', 'CAPAS');
    setupHover('.btn-accent-fill, .nav-cta', 'HABLEMOS', true);
  }

  /* ==========================================================================
     08. BOTONES MAGNÉTICOS (Micro-magnetismo de 6-8px)
     ========================================================================== */
  function initMagneticButtons() {
    if (isTouchDevice || isReducedMotion) return;

    document.querySelectorAll('.btn-editorial, .nav-cta').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        // Limitar a máx 6-8px de desplazamiento
        const pullX = (x / rect.width) * 12;
        const pullY = (y / rect.height) * 12;
        btn.style.transform = `translate(${pullX}px, ${pullY}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  /* ==========================================================================
     09. PROCESO POR CAPAS: DEL BOCETO AL RENDER
     ========================================================================== */
  function initLayerScrub() {
    const section = document.querySelector('.layer-scrub-section');
    if (!section) return;

    const images = section.querySelectorAll('.layer-scrub-img');
    const buttons = section.querySelectorAll('.layer-scrub-step-btn');
    if (!images.length || !buttons.length) return;

    const setLayer = (index) => {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
      buttons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
      });
    };

    // Control por clic
    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', () => setLayer(idx));
    });

    // Control por scroll si GSAP ScrollTrigger está disponible
    if (window.ScrollTrigger && !isReducedMotion) {
      window.ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const step = Math.min(images.length - 1, Math.floor(self.progress * images.length));
          setLayer(step);
        }
      });
    }
  }

  /* ==========================================================================
     10. COMPARADOR DÍA / NOCHE ARRASTRABLE
     ========================================================================== */
  function initComparator() {
    const comparators = document.querySelectorAll('.comparator-wrap');
    if (!comparators.length) return;

    comparators.forEach(wrap => {
      const layerAfter = wrap.querySelector('.comparator-layer.layer-after');
      const divider = wrap.querySelector('.comparator-divider');
      const handle = wrap.querySelector('.comparator-handle');
      if (!layerAfter || !divider) return;

      let isDragging = false;

      const updatePosition = (clientX) => {
        const rect = wrap.getBoundingClientRect();
        let percent = ((clientX - rect.left) / rect.width) * 100;
        percent = Math.max(0, Math.min(100, percent));

        layerAfter.style.clipPath = `inset(0 0 0 ${percent}%)`;
        layerAfter.style.webkitClipPath = `inset(0 0 0 ${percent}%)`;
        divider.style.left = `${percent}%`;
        if (handle) handle.style.left = `${percent}%`;
      };

      const onStart = (e) => {
        isDragging = true;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        updatePosition(clientX);
      };

      const onMove = (e) => {
        if (!isDragging) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        updatePosition(clientX);
      };

      const onEnd = () => {
        isDragging = false;
      };

      wrap.addEventListener('mousedown', onStart);
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onEnd);

      wrap.addEventListener('touchstart', onStart, { passive: true });
      window.addEventListener('touchmove', onMove, { passive: true });
      window.addEventListener('touchend', onEnd);
    });
  }

  /* ==========================================================================
     11. GALERÍA HORIZONTAL FIJADA EN HOME
     ========================================================================== */
  function initHorizontalGallery() {
    const section = document.querySelector('.pinned-gallery-section');
    const container = document.querySelector('.pinned-gallery-container');
    const progressFill = document.querySelector('.pinned-gallery-progress-fill');
    if (!section || !container) return;

    // Actualizar barra de progreso al hacer scroll horizontal
    container.addEventListener('scroll', () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll > 0 && progressFill) {
        const ratio = (container.scrollLeft / maxScroll) * 100;
        progressFill.style.width = `${Math.min(100, Math.max(10, ratio))}%`;
      }
    }, { passive: true });
  }

  /* ==========================================================================
     12. HOVER PREVIEW PARA ÍNDICE DE PROYECTOS (Con Inercia)
     ========================================================================== */
  function initProjectListHoverPreview() {
    const rows = document.querySelectorAll('.editorial-row[data-image]');
    const preview = document.querySelector('.project-hover-preview');
    if (!rows.length || !preview) return;

    const previewImg = preview.querySelector('img');
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let isVisible = false;

    function renderPreview() {
      if (isVisible) {
        currentX += (targetX - currentX) * 0.18;
        currentY += (targetY - currentY) * 0.18;
        preview.style.left = `${currentX}px`;
        preview.style.top = `${currentY}px`;
      }
      requestAnimationFrame(renderPreview);
    }
    requestAnimationFrame(renderPreview);

    rows.forEach(row => {
      row.addEventListener('mouseenter', () => {
        const src = row.getAttribute('data-image');
        if (src && previewImg) {
          previewImg.src = src;
          preview.classList.add('visible');
          isVisible = true;
        }
        // Atenuar las otras filas
        rows.forEach(other => {
          if (other !== row) other.style.opacity = '0.35';
        });
      });

      row.addEventListener('mousemove', (e) => {
        targetX = e.clientX + 24;
        targetY = e.clientY - 120;
      });

      row.addEventListener('mouseleave', () => {
        preview.classList.remove('visible');
        isVisible = false;
        rows.forEach(other => {
          other.style.opacity = '1';
        });
      });
    });
  }

  /* ==========================================================================
     13. CONMUTADOR DE VISTA DE PROYECTOS (Lista / Rejilla)
     ========================================================================== */
  function initProjectViewToggle() {
    const switchers = document.querySelectorAll('.view-switcher');
    if (!switchers.length) return;

    switchers.forEach(sw => {
      const btnList = sw.querySelector('[data-view="list"]');
      const btnGrid = sw.querySelector('[data-view="grid"]');
      const listView = document.querySelector('.projects-list-view');
      const gridView = document.querySelector('.projects-grid-view');

      if (!listView || !gridView) return;

      btnList?.addEventListener('click', () => {
        btnList.classList.add('active');
        btnGrid?.classList.remove('active');
        listView.style.display = 'block';
        gridView.style.display = 'none';
      });

      btnGrid?.addEventListener('click', () => {
        btnGrid.classList.add('active');
        btnList?.classList.remove('active');
        gridView.style.display = 'block';
        listView.style.display = 'none';
      });
    });
  }

  /* ==========================================================================
     14. CONTROL DE VÍDEOS EN VIEWPORT
     ========================================================================== */
  function initVideoObservers() {
    const videos = document.querySelectorAll('video[autoplay]');
    if (!('IntersectionObserver' in window) || !videos.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.15 });

    videos.forEach(v => observer.observe(v));
  }

  /* ==========================================================================
     15. CONTACTO DIRECTO (Sin formulario, prioridad mailto:)
     ========================================================================== */
  function initDirectContact() {
    // Si existe algún formulario residual, asegurar redirección limpia
    const form = document.querySelector('.contact-form, .form-minimal');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = 'mailto:info@eidosrender.es?subject=Consulta%20de%20Proyecto';
      });
    }
  }


  /* ==========================================================================
     BOTÓN FLOTANTE DERECHO & PANEL FLOTANTE TIPO APP
     ========================================================================== */
  function initFloatingMenu() {
    const btn = document.getElementById('floatingMenuBtn');
    const panel = document.getElementById('floatingAppPanel') || document.getElementById('floatingDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (!btn || !panel) return;

    function toggleMenu(open) {
      const isOpen = open !== undefined ? open : !panel.classList.contains('open');
      btn.classList.toggle('active', isOpen);
      btn.setAttribute('aria-expanded', isOpen);
      panel.classList.toggle('open', isOpen);
      panel.setAttribute('aria-hidden', !isOpen);
      if (backdrop) backdrop.classList.toggle('active', isOpen);
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    if (backdrop) {
      backdrop.addEventListener('click', () => toggleMenu(false));
    }

    // Cerrar al hacer clic fuera del panel flotante
    document.addEventListener('click', (e) => {
      if (panel.classList.contains('open') && !panel.contains(e.target) && !btn.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Cerrar al hacer clic en enlaces del panel
    const links = panel.querySelectorAll('.app-link, .app-cta-btn, .drawer-link');
    links.forEach(l => {
      l.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  /* ==========================================================================
     SCROLL REVEAL TRANSITIONS — BIDIRECCIONALES (KATEGORA STYLE)
     Animación fluida tanto al bajar como al subir el scroll en escritorio y móvil.
     ========================================================================== */
  function initScrollReveals() {
    const elements = document.querySelectorAll(
      '.text-reveal-flow, .scroll-reveal, .editorial-reveal, .europe-card, .feature-cards-grid > div, .service-item, .project-card, .faq-item'
    );
    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          } else {
            // Fuera de vista: resetear si el elemento ha salido por arriba o por abajo
            // para permitir que vuelva a animarse al scrollear hacia arriba o hacia abajo
            const rect = entry.boundingClientRect;
            if (rect.bottom < -40 || rect.top > window.innerHeight + 40) {
              entry.target.classList.remove('revealed');
            }
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -20px 0px'
      });

      elements.forEach(el => {
        observer.observe(el);
      });

      // Animación suave de entrada inicial para los elementos del hero visibles en pantalla
      requestAnimationFrame(() => {
        setTimeout(() => {
          const heroElements = document.querySelectorAll('#hero .text-reveal-flow, #hero .line-mask');
          heroElements.forEach((el, idx) => {
            setTimeout(() => {
              el.classList.add('revealed', 'line-mask-revealed');
            }, idx * 90);
          });
        }, 120);
      });
    } else {
      elements.forEach(el => el.classList.add('revealed'));
    }
  }

  /* ==========================================================================
     17. FAQ & SERVICE ACCORDION (SEO & LUXURY INTERACTION)
     ========================================================================== */
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const q = item.querySelector('.faq-question');
      if (!q) return;
      q.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });
        item.classList.toggle('active', !isActive);
      });
    });

    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
      const summary = item.querySelector('.service-summary');
      if (!summary) return;
      summary.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        item.classList.toggle('active', !isActive);
      });
    });
  }

})();