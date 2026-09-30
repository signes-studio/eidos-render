/**
 * EIDOS RENDER — main.js
 * Arquitectura modular y ligera en Vanilla JS para interacción editorial y rendimiento.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initServiceAccordion();
  initVideoObservers();
  initContactForm();
  initSmoothScroll();
});

/* ==========================================================================
   NAVIGATION
   ========================================================================== */
function initNav() {
  const header = document.querySelector('.nav-header');
  const toggle = document.querySelector('.nav-toggle');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  if (toggle && overlay) {
    const toggleMenu = () => {
      const isOpen = toggle.classList.toggle('open');
      overlay.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      toggle.setAttribute('aria-expanded', isOpen);
    };

    toggle.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (overlay.classList.contains('open')) {
          toggleMenu();
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        toggleMenu();
      }
    });
  }
}

/* ==========================================================================
   SERVICE ACCORDION / EXPANDER
   ========================================================================== */
function initServiceAccordion() {
  const items = document.querySelectorAll('.service-item');
  if (!items.length) return;

  items.forEach(item => {
    const summary = item.querySelector('.service-summary');
    if (!summary) return;

    summary.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other items for focused reading
      items.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      item.classList.toggle('active', !isActive);
    });
  });
}

/* ==========================================================================
   VIDEO INTERSECTION OBSERVER (PERFORMANCE)
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

  videos.forEach(video => observer.observe(video));
}

/* ==========================================================================
   CONTACT FORM QUALIFICATION & SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn ? btn.innerHTML : 'ENVIAR';

    // Validate required fields
    const requiredInputs = form.querySelectorAll('[required]');
    let valid = true;

    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = 'var(--crimson)';
      } else {
        input.style.borderColor = '';
      }
    });

    if (!valid) {
      alert('Por favor, completa los campos obligatorios para valorar tu proyecto.');
      return;
    }

    if (btn) {
      btn.disabled = true;
      btn.innerHTML = 'ENVIANDO PROYECTO...';
    }

    const formData = new FormData(form);

    try {
      const res = await fetch('enviar.php', {
        method: 'POST',
        body: formData
      });

      // Show high-end success notification
      const feedback = document.createElement('div');
      feedback.style.padding = '24px';
      feedback.style.backgroundColor = 'var(--ink)';
      feedback.style.color = 'var(--paper)';
      feedback.style.border = '1px solid var(--crimson)';
      feedback.style.marginTop = '20px';
      feedback.style.fontFamily = 'Space Grotesk, sans-serif';
      feedback.innerHTML = `
        <h4 style="font-size: 1.2rem; color: var(--crimson); text-transform: uppercase; margin-bottom: 8px;">Proyecto Recibido</h4>
        <p style="font-size: 0.95rem; color: rgba(244,243,239,0.85); line-height: 1.5;">
          Gracias por contactar con Eidos Render. Hemos registrado la información de tu promoción y nos pondremos en contacto contigo en menos de 24 horas laborables para coordinar una primera conversación.
        </p>
      `;

      form.style.display = 'none';
      form.parentNode.appendChild(feedback);
    } catch (err) {
      // Fallback
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = originalText;
      }
      form.submit();
    }
  });
}

/* ==========================================================================
   SMOOTH SCROLL FOR IN-PAGE ANCHORS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}