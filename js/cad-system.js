/**
 * ===================================================================
 * EIDOS RENDER — js/cad-system.js
 * Módulo de Telemetría Institucional, Reloj UTC y Retícula CAD Interactiva
 * ===================================================================
 */

export function initCadSystem() {
    initLiveStudioClock();
    initCadGridToggle();
    initCursorTracker();
}

/**
 * 1. Reloj en tiempo real sincronizado con huso horario de la sede (Valencia / UTC+1)
 */
function initLiveStudioClock() {
    const clockEl = document.getElementById('liveStudioClock');
    if (!clockEl) return;

    function updateClock() {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('es-ES', {
            timeZone: 'Europe/Madrid',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        
        clockEl.textContent = `VALENCIA [UTC+01:00] · ${formatter.format(now)}`;
    }

    updateClock();
    setInterval(updateClock, 1000);
}

/**
 * 2. Interruptor de Retícula CAD técnica sobreimpresionada
 */
function initCadGridToggle() {
    const btnToggle = document.getElementById('btnToggleCadGrid');
    const statusText = document.getElementById('cadGridStatusText');
    const body = document.body;

    if (!btnToggle) return;

    btnToggle.addEventListener('click', () => {
        const isActive = body.classList.toggle('show-cad-grid');
        btnToggle.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        if (statusText) {
            statusText.textContent = isActive ? 'ON' : 'OFF';
        }
    });
}

/**
 * 3. Tracker de coordenadas cartesianas X/Y bajo cursor en modo CAD
 */
function initCursorTracker() {
    const hudTracker = document.getElementById('cadHudTracker');
    if (!hudTracker) return;

    let ticking = false;

    window.addEventListener('mousemove', (e) => {
        if (!document.body.classList.contains('show-cad-grid')) return;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                const x = e.clientX.toString().padStart(4, '0');
                const y = e.clientY.toString().padStart(4, '0');
                hudTracker.textContent = `COORD X: ${x} | Y: ${y} · RETÍCULA CAD: ON`;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

