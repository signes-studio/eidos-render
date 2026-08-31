/**
 * ===================================================================
 * EIDOS RENDER — js/navigation.js
 * Módulo de navegación accesible, header sticky inteligente y control de menú móvil.
 * ===================================================================
 */

export function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // 1. Header Sticky con contraste y elevación
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 15) {
                navbar.classList.add('is-scrolled');
            } else {
                navbar.classList.remove('is-scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // 2. Control del Menú Móvil con ARIA y accesibilidad completa
    if (navToggle && navLinks) {
        const toggleMenu = (forceState) => {
            const isOpen = typeof forceState === 'boolean' 
                ? forceState 
                : !navLinks.classList.contains('is-open');

            navLinks.classList.toggle('is-open', isOpen);
            navToggle.classList.toggle('is-open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');

            // Bloquear scroll de la página cuando el menú móvil está abierto
            if (window.innerWidth <= 768) {
                document.body.style.overflow = isOpen ? 'hidden' : '';
                document.documentElement.style.overflow = isOpen ? 'hidden' : '';
            }
        };

        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Cerrar menú al pulsar en cualquier enlace de la lista
        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => toggleMenu(false));
        });

        // Cerrar menú con la tecla Escape y devolver el foco al botón
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
                toggleMenu(false);
                navToggle.focus();
            }
        });

        // Cerrar menú al hacer clic fuera del menú o cabecera
        document.addEventListener('click', (e) => {
            if (
                navLinks.classList.contains('is-open') &&
                !navLinks.contains(e.target) &&
                !navToggle.contains(e.target)
            ) {
                toggleMenu(false);
            }
        });

        // Restaurar estado si se redimensiona a pantalla de escritorio
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navLinks.classList.contains('is-open')) {
                toggleMenu(false);
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
            }
        }, { passive: true });
    }

    // 3. Marcado automático del enlace activo según la URL actual
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

            // Comprobar coincidencia exacta o coincidencia de subcarpeta relevante
            if (
                anchorPath === currentPath ||
                (anchorPath !== '/' && currentPath.startsWith(anchorPath))
            ) {
                anchor.classList.add('active');
                anchor.setAttribute('aria-current', 'page');
            }
        } catch {
            // Ignorar URLs externas o inválidas
        }
    });
}
