// ============================================
// EIDOS RENDER — main.js
// Script compartido por todas las páginas.
// ============================================

// Menú móvil: abre/cierra el panel de navegación
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (!navToggle || !navLinks) return;

    navToggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('is-open');
        navToggle.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Cierra el menú al pulsar un enlace (útil en móvil, evita que
    // el panel se quede abierto al navegar a otra página o ancla)
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('is-open');
            navToggle.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
});