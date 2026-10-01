/**
 * EIDOS RENDER — MOTION GRAPHICS ABSTRACTOS
 * 6 Componentes de Lenguaje Visual Arquitectónico y Lumínico:
 * 1. Lamas (Brise-Soleil)
 * 2. Sombra Proyectada
 * 3. Sol y Horizonte
 * 4. Forjados
 * 5. Sección que se Dibuja
 * 6. Planos Desplazados
 */
(function () {
  'use strict';

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(hover: none) or (pointer: coarse)').matches;

  // --------------------------------------------------------------------------
  // 1. LAMAS (Brise-Soleil)
  // --------------------------------------------------------------------------
  function initLamas() {
    const overlays = document.querySelectorAll('.motion-lamas-overlay');
    if (!overlays.length || isReducedMotion) return;

    overlays.forEach(overlay => {
      const lamas = overlay.querySelectorAll('.motion-lama-col');
      if (!lamas.length) return;

      // Animación de apertura al entrar en viewport
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.fromTo(lamas, 
              { scaleX: 1, transformOrigin: 'left center' },
              {
                scaleX: 0,
                duration: 1.35,
                stagger: { each: 0.045, from: 'start' },
                ease: 'expo.out'
              }
            );
            observer.unobserve(overlay);
          }
        });
      }, { threshold: 0.1 });

      observer.observe(overlay);
    });
  }

  // --------------------------------------------------------------------------
  // 2. SOMBRA PROYECTADA (Scroll Scrub)
  // --------------------------------------------------------------------------
  function initSombraProyectada() {
    const sombras = document.querySelectorAll('.motion-shadow-bg');
    if (!sombras.length || isReducedMotion || !window.ScrollTrigger) return;

    sombras.forEach(wrap => {
      const poly = wrap.querySelector('.motion-shadow-polygon');
      const line = wrap.querySelector('.motion-shadow-edge');
      if (!poly) return;

      const trigger = wrap.closest('section') || wrap.parentElement;

      // Scrub solar continuo a lo largo del recorrido
      gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      })
      .fromTo(poly, 
        { attr: { points: "0,0 650,0 220,900 0,900" } },
        { attr: { points: "0,0 1200,0 720,900 0,900" }, ease: 'none' }
      )
      .fromTo(line,
        { attr: { x1: 650, y1: 0, x2: 220, y2: 900 } },
        { attr: { x1: 1200, y1: 0, x2: 720, y2: 900 } },
        0
      );
    });
  }

  // --------------------------------------------------------------------------
  // 3. SOL Y HORIZONTE
  // --------------------------------------------------------------------------
  function initSolHorizonte() {
    const tracks = document.querySelectorAll('.motion-solar-track');
    if (!tracks.length || isReducedMotion || !window.ScrollTrigger) return;

    tracks.forEach(track => {
      const sun = track.querySelector('.solar-track-sun-disk');
      if (!sun) return;

      const section = track.closest('section') || track.parentElement;

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          scrub: 0.8,
          onUpdate: (self) => {
            // Cambio sutil de color del sol al cruzar el horizonte (progreso > 0.5)
            if (self.progress > 0.5) {
              sun.style.backgroundColor = 'var(--accent-on-dark)';
            } else {
              sun.style.backgroundColor = 'var(--charcoal)';
            }
          }
        }
      })
      .fromTo(sun, { y: -140 }, { y: 140, ease: 'none' });
    });
  }

  // --------------------------------------------------------------------------
  // 4. FORJADOS (Capas Tectónicas)
  // --------------------------------------------------------------------------
  function initForjados() {
    const stacks = document.querySelectorAll('.motion-forjados-wrap');
    if (!stacks.length || isReducedMotion) return;

    stacks.forEach(stack => {
      const items = Array.from(stack.querySelectorAll('.motion-forjado-item')).reverse();
      const bars = items.map(it => it.querySelector('.motion-forjado-bar'));
      const tags = items.map(it => it.querySelector('.motion-forjado-tag'));

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.to(bars, {
              scaleX: 1,
              duration: 1.0,
              stagger: 0.12,
              ease: 'expo.out'
            });

            gsap.to(tags, {
              opacity: 1,
              duration: 0.5,
              stagger: 0.12,
              ease: 'power2.out',
              delay: 0.2
            });

            observer.unobserve(stack);
          }
        });
      }, { threshold: 0.2 });

      observer.observe(stack);
    });
  }

  // --------------------------------------------------------------------------
  // 5. SECCIÓN QUE SE DIBUJA
  // --------------------------------------------------------------------------
  function initSeccionQueSeDibuja() {
    const svgs = document.querySelectorAll('.motion-arch-section-svg');
    if (!svgs.length || isReducedMotion) return;

    svgs.forEach(svg => {
      const path = svg.querySelector('.motion-section-path');
      const dot = svg.querySelector('.motion-section-accent-dot');
      if (!path) return;

      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;
      if (dot) gsap.set(dot, { transform: 'scale(0)' });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.to(path, {
              strokeDashoffset: 0,
              duration: 1.8,
              ease: 'power2.inOut',
              onComplete: () => {
                if (dot) gsap.to(dot, { transform: 'scale(1)', duration: 0.35, ease: 'back.out(2)' });
              }
            });
            observer.unobserve(svg);
          }
        });
      }, { threshold: 0.2 });

      observer.observe(svg);
    });
  }

  // --------------------------------------------------------------------------
  // 6. PLANOS DE COLOR DESPLAZADOS (Parallax de Cursor)
  // --------------------------------------------------------------------------
  function initPlanosDesplazados() {
    const sculptures = document.querySelectorAll('.motion-planes-sculpture');
    if (!sculptures.length || isTouchDevice || isReducedMotion) return;

    sculptures.forEach(sculpture => {
      const planes = sculpture.querySelectorAll('.motion-plane-rect');
      const container = sculpture.closest('section') || sculpture.parentElement;

      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;

        planes.forEach((plane, i) => {
          const depth = (i + 1) * 0.35;
          const moveX = relX * 18 * depth; // 4-8px
          const moveY = relY * 18 * depth;

          gsap.to(plane, {
            x: moveX,
            y: moveY,
            duration: 0.9,
            ease: 'power2.out'
          });
        });
      });
    });
  }

  // Inicialización global
  document.addEventListener('DOMContentLoaded', () => {
    initLamas();
    initSombraProyectada();
    initSolHorizonte();
    initForjados();
    initSeccionQueSeDibuja();
    initPlanosDesplazados();
  });

  // Exportar al objeto global de Eidos
  window.EidosMotion = {
    initLamas,
    initSombraProyectada,
    initSolHorizonte,
    initForjados,
    initSeccionQueSeDibuja,
    initPlanosDesplazados
  };

})();
