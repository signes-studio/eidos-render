/**
 * ===================================================================
 * EIDOS RENDER — main.js (Orquestador Central Modular)
 * ===================================================================
 * Arquitectura modular limpia en ES6+ para máximo rendimiento y mantenibilidad.
 */

import { initNavigation } from './js/navigation.js';
import { initProjectsFilter } from './js/projects-filter.js';
import { initContactForm } from './js/contact-form.js';
import { initGalleryModal } from './js/gallery-modal.js';
import { initCookieConsent } from './js/cookie-consent.js';
import { initSeoHelper } from './js/seo-injector.js';
import { initCalculator } from './js/calculator.js';

function bootEidosApp() {
    try {
        initNavigation();
        initProjectsFilter();
        initContactForm();
        initGalleryModal();
        initCookieConsent();
        initSeoHelper();
        initCalculator();
    } catch (err) {
        console.error('[Eidos Render] Error inicializando módulos:', err);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootEidosApp);
} else {
    bootEidosApp();
}

// Exportar para acceso programático si fuera necesario
export {
    initNavigation,
    initProjectsFilter,
    initContactForm,
    initGalleryModal,
    initCookieConsent,
    initSeoHelper,
    initCalculator
};