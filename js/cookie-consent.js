/**
 * EIDOS RENDER — js/cookie-consent.js
 * Módulo de consentimiento de cookies conforme a RGPD y directiva ePrivacy con integración de GTM.
 */

export function initCookieConsent() {
    const banner = document.getElementById('cookieBanner');
    if (!banner) return;

    const acceptBtn = banner.querySelector('.cookie-btn-accept');
    const rejectBtn = banner.querySelector('.cookie-btn-reject');

    const checkConsent = () => {
        const consent = localStorage.getItem('eidos_cookie_consent');
        if (!consent) {
            banner.style.display = 'block';
        } else if (consent === 'accepted') {
            enableTracking();
        }
    };

    const handleAccept = () => {
        localStorage.setItem('eidos_cookie_consent', 'accepted');
        banner.style.display = 'none';
        enableTracking();
    };

    const handleReject = () => {
        localStorage.setItem('eidos_cookie_consent', 'rejected');
        banner.style.display = 'none';
    };

    if (acceptBtn) acceptBtn.addEventListener('click', handleAccept);
    if (rejectBtn) rejectBtn.addEventListener('click', handleReject);

    // Comprobar estado de consentimiento inmediatamente
    checkConsent();
}

/**
 * Activa las etiquetas de analítica en Google Tag Manager tras recibir consentimiento
 */
function enableTracking() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'cookie_consent_granted',
        consent_timestamp: new Date().toISOString()
    });
}

