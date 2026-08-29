/**
 * EIDOS RENDER — js/gallery-modal.js
 * Visor interactivo tipo galería de arte para inspección de renders en alta resolución.
 */

export function initGalleryModal() {
    // Buscar todos los elementos que pueden abrirse en visor
    const galleryTriggers = document.querySelectorAll('[data-gallery-src], .gallery-zoom-trigger, .portfolio-img img');
    if (galleryTriggers.length === 0) return;

    // Crear el modal una sola vez en el DOM
    let modal = document.getElementById('galleryLightbox');
    if (!modal) {
        modal = createModalDOM();
        document.body.appendChild(modal);
    }

    const modalImg = modal.querySelector('.lightbox-image');
    const modalCaption = modal.querySelector('.lightbox-caption');
    const modalClose = modal.querySelector('.lightbox-close');
    const prevBtn = modal.querySelector('.lightbox-prev');
    const nextBtn = modal.querySelector('.lightbox-next');

    // Recopilar lista de imágenes disponibles
    const items = Array.from(galleryTriggers).map((el) => {
        const img = el.tagName === 'IMG' ? el : el.querySelector('img');
        const src = el.getAttribute('data-gallery-src') || (img ? img.getAttribute('src') : '');
        const title = el.getAttribute('data-gallery-title') || (img ? img.getAttribute('alt') : 'Render de arquitectura');
        const category = el.closest('[data-category]')?.getAttribute('data-category') || '';
        return { src, title, category, element: el };
    }).filter(item => item.src);

    let currentIndex = 0;

    const openModal = (index) => {
        currentIndex = index;
        const currentItem = items[currentIndex];
        if (!currentItem) return;

        modalImg.src = currentItem.src;
        modalImg.alt = currentItem.title;
        modalCaption.innerHTML = `
            <span class="lightbox-title">${currentItem.title}</span>
            <span class="lightbox-counter">${currentIndex + 1} / ${items.length}</span>
        `;

        modal.classList.add('is-active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        modalClose.focus();
    };

    const closeModal = () => {
        modal.classList.remove('is-active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        modalImg.src = '';
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % items.length;
        openModal(currentIndex);
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        openModal(currentIndex);
    };

    // Asignar clics a los triggers
    galleryTriggers.forEach((trigger, idx) => {
        trigger.style.cursor = 'zoom-in';
        trigger.addEventListener('click', (e) => {
            // Si el elemento está dentro de un enlace que no sea a la misma imagen, prevenimos navegación si se pulsó el zoom
            if (trigger.classList.contains('gallery-zoom-trigger') || trigger.tagName === 'IMG') {
                const linkParent = trigger.closest('a');
                if (linkParent && trigger.classList.contains('gallery-zoom-trigger')) {
                    e.preventDefault();
                }
                const foundIndex = items.findIndex(item => item.element === trigger || item.src === (trigger.src || trigger.getAttribute('data-gallery-src')));
                openModal(foundIndex >= 0 ? foundIndex : idx);
            }
        });
    });

    // Controles del modal
    modalClose.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // Cerrar al hacer clic en el fondo oscuro
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('lightbox-backdrop')) {
            closeModal();
        }
    });

    // Control por teclado
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('is-active')) return;

        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowRight') {
            showNext();
        } else if (e.key === 'ArrowLeft') {
            showPrev();
        }
    });

    // Soporte para gestos táctiles (Swipe)
    let touchStartX = 0;
    let touchEndX = 0;

    modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 50) {
            if (diff < 0) showNext();
            else showPrev();
        }
    }, { passive: true });
}

/**
 * Genera la estructura DOM accesible del visor modal
 */
function createModalDOM() {
    const modal = document.createElement('div');
    modal.id = 'galleryLightbox';
    modal.className = 'gallery-lightbox';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-label', 'Visor de renders en alta resolución');

    modal.innerHTML = `
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-dialog">
            <button class="lightbox-close" aria-label="Cerrar visor">✕</button>
            <button class="lightbox-prev" aria-label="Render anterior">‹</button>
            <button class="lightbox-next" aria-label="Siguiente render">›</button>
            <div class="lightbox-media-wrap">
                <img class="lightbox-image" src="" alt="">
            </div>
            <div class="lightbox-caption"></div>
        </div>
    `;

    return modal;
}

