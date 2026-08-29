/**
 * EIDOS RENDER — js/projects-filter.js
 * Sistema modular de filtración de proyectos y casos de estudio comercial por tipología de activo.
 */

export function initProjectsFilter() {
    const filterContainer = document.querySelector('.projects-filter-nav');
    const projectCards = document.querySelectorAll('[data-category]');

    if (!filterContainer || projectCards.length === 0) return;

    const filterButtons = filterContainer.querySelectorAll('.filter-btn');

    // 1. Inicializar contadores en cada botón de filtro
    updateCategoryCounts(filterButtons, projectCards);

    // 2. Comprobar si hay un parámetro de filtro en la URL (ej. ?type=obra-nueva)
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('type') || 'all';

    applyFilter(initialCategory, filterButtons, projectCards, false);

    // 3. Event listeners en los botones de filtro
    filterButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetCategory = button.getAttribute('data-filter') || 'all';
            applyFilter(targetCategory, filterButtons, projectCards, true);
        });
    });
}

/**
 * Aplica el filtro seleccionado con animación fluida
 */
function applyFilter(category, buttons, cards, updateUrl = true) {
    // Actualizar estado visual de los botones
    buttons.forEach((btn) => {
        const isMatch = btn.getAttribute('data-filter') === category;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    let visibleCount = 0;

    cards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        const shouldShow = category === 'all' || cardCategory === category;

        if (shouldShow) {
            visibleCount++;
            card.style.display = '';
            // Micro-delay para activación de animación CSS
            requestAnimationFrame(() => {
                card.classList.remove('is-hidden');
                card.classList.add('is-visible');
            });
        } else {
            card.classList.remove('is-visible');
            card.classList.add('is-hidden');
            // Ocultar tras finalizar la transición
            setTimeout(() => {
                if (card.classList.contains('is-hidden')) {
                    card.style.display = 'none';
                }
            }, 300);
        }
    });

    // Actualizar URL sin recargar la página para permitir compartir el filtro
    if (updateUrl && window.history.pushState) {
        const url = new URL(window.location.href);
        if (category === 'all') {
            url.searchParams.delete('type');
        } else {
            url.searchParams.set('type', category);
        }
        window.history.replaceState({}, '', url);
    }
}

/**
 * Calcula y asigna los contadores dinámicos por tipología de activo
 */
function updateCategoryCounts(buttons, cards) {
    const counts = { all: cards.length };

    cards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (cat) {
            counts[cat] = (counts[cat] || 0) + 1;
        }
    });

    buttons.forEach((btn) => {
        const cat = btn.getAttribute('data-filter') || 'all';
        const countBadge = btn.querySelector('.filter-count');
        if (countBadge && counts[cat] !== undefined) {
            countBadge.textContent = `(${counts[cat]})`;
        }
    });
}

