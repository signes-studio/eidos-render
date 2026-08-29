/**
 * EIDOS RENDER — js/navigation.js
 * Módulo de navegación accesible, header sticky inteligente y control de menú móvil.
 */

export function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // 1. Header Sticky con elevación y contraste en scroll
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                navbar.classList.add('is-scrolled');
            } else {
                navbar.classList.remove('is-scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Comprobar estado inicial
    }

    // 2. Control del Menú Móvil con ARIA y accesibilidad
    if (navToggle && navLinks) {
        const toggleMenu = (forceState) => {
            const isOpen = typeof forceState === 'boolean' 
                ? forceState 
                : !navLinks.classList.contains('is-open');

            navLinks.classList.toggle('is-open', isOpen);
            navToggle.classList.toggle('is-open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');

            // Bloquear scroll del body si el menú está abierto en móvil
            if (window.innerWidth <= 768) {
                document.body.style.overflow = isOpen ? 'hidden' : '';
            }
        };

        navToggle.addEventListener('click', () => toggleMenu());

        // Cerrar menú al hacer clic en cualquier enlace
        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => toggleMenu(false));
        });

        // Cerrar menú con la tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
                toggleMenu(false);
                navToggle.focus();
            }
        });

        // Cerrar si se redimensiona a pantalla de escritorio
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navLinks.classList.contains('is-open')) {
                toggleMenu(false);
                document.body.style.overflow = '';
            }
        }, { passive: true });
    }

    // 3. Marcado automático del enlace activo según la URL
    highlightCurrentPage();
}

/**
 * Resalta visualmente el enlace de la página activa en el menú de navegación
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    const navAnchors = document.querySelectorAll('.nav-links a');

    navAnchors.forEach((anchor) => {
        try {
            const url = new URL(anchor.href, window.location.origin);
            const anchorPath = url.pathname.replace(/\/$/, '') || '/';

            // Comprobar coincidencia exacta o subrutas relevantes
            if (
                anchorPath === currentPath ||
                (anchorPath !== '/' && currentPath.startsWith(anchorPath))
            ) {
                anchor.classList.add('active');
                anchor.setAttribute('aria-current', 'page');
            }
        } catch {
            // Ignorar URLs inválidas o externas
        }
    });
}

