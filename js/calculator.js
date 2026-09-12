/**
 * ===================================================================
 * EIDOS RENDER — js/calculator.js
 * Configurador de Proyecto y Presupuesto B2B basado en Paquetes Base + Extras
 * ===================================================================
 */

export function initCalculator() {
    const calcSection = document.getElementById('calculadora');
    if (!calcSection) return;

    // 1. Elementos de Paquetes Base
    const packageRadios = document.querySelectorAll('input[name="basePackage"]');
    
    // 2. Elementos de Extras y Upsells
    const extraRendersInput = document.getElementById('extraRendersCount');
    const btnDecrementExtra = document.getElementById('btnDecrementExtra');
    const btnIncrementExtra = document.getElementById('btnIncrementExtra');
    const extraCheckboxes = document.querySelectorAll('input[name="calcExtra"]');

    // 3. Elementos del Desglose y Resumen
    const summaryPackName = document.getElementById('summaryPackName');
    const summaryPackPrice = document.getElementById('summaryPackPrice');
    
    const rowExtraRenders = document.getElementById('rowExtraRenders');
    const summaryExtraRendersName = document.getElementById('summaryExtraRendersName');
    const summaryExtraRendersVal = document.getElementById('summaryExtraRendersVal');
    
    const rowTour = document.getElementById('rowTour');
    const rowDron = document.getElementById('rowDron');
    
    const totalAmountEl = document.getElementById('totalAmount');
    const mobileStickyAmountEl = document.getElementById('mobileStickyAmount');
    const btnRequestQuote = document.getElementById('btnRequestQuote');
    const btnWhatsappQuote = document.getElementById('btnWhatsappQuote');
    const btnMobileStickyCTA = document.getElementById('btnMobileStickyCTA');

    // Paquetes y Soluciones del Sistema
    const PACKAGES = {
        'inversor': {
            name: 'Pack Inversor & Flipping',
            selectValue: 'reforma-flipping',
            desc: '2 Renders Interiores + Plano'
        },
        'promotora': {
            name: 'Pack Promotora Residencial',
            selectValue: 'obra-nueva',
            desc: '1 Ext + 2 Int + 1 Plano 3D (4K)'
        },
        'marketing-pro': {
            name: 'Pack Marketing Pro',
            selectValue: 'obra-nueva',
            desc: 'Kit Integral Multiformato'
        }
    };

    /**
     * Actualiza el alcance según la selección
     */
    function calculate() {
        // A. Paquete Base Seleccionado
        const selectedPackageKey = document.querySelector('input[name="basePackage"]:checked')?.value || 'promotora';
        const packageData = PACKAGES[selectedPackageKey] || PACKAGES['promotora'];

        // B. Renders Adicionales
        let extraRenders = parseInt(extraRendersInput ? extraRendersInput.value : 0, 10);
        if (isNaN(extraRenders) || extraRenders < 0) extraRenders = 0;
        if (extraRenders > 20) extraRenders = 20;
        if (extraRendersInput) extraRendersInput.value = extraRenders;

        // C. Checkboxes de Extras Fijos
        let hasTour = false;
        let hasDron = false;

        extraCheckboxes.forEach((chk) => {
            if (chk.checked) {
                if (chk.value === 'tour360') hasTour = true;
                if (chk.value === 'dron') hasDron = true;
            }
        });

        // D. Lista de extras para texto
        const extrasList = [];
        if (extraRenders > 0) {
            extrasList.push(`${extraRenders} ${extraRenders === 1 ? 'render adicional' : 'renders adicionales'}`);
        }
        if (hasTour) extrasList.push('Tour Virtual 360º');
        if (hasDron) extrasList.push('Integración sobre Dron');

        // E. Actualizar UI
        updateSummaryUI({
            packageData,
            extraRenders,
            hasTour,
            hasDron,
            extrasList
        });
    }

    /**
     * Actualiza los elementos del DOM y los enlaces CTA
     */
    function updateSummaryUI(data) {
        // Paquete Base
        if (summaryPackName) summaryPackName.textContent = data.packageData.name;
        if (summaryPackPrice) summaryPackPrice.textContent = 'Incluido';

        // Renders Adicionales
        if (rowExtraRenders && summaryExtraRendersName) {
            if (data.extraRenders > 0) {
                rowExtraRenders.style.display = 'flex';
                summaryExtraRendersName.textContent = `${data.extraRenders} ${data.extraRenders === 1 ? 'Render adicional' : 'Renders adicionales'}`;
                if (summaryExtraRendersVal) summaryExtraRendersVal.textContent = 'A medida';
            } else {
                rowExtraRenders.style.display = 'none';
            }
        }

        // Tour 360
        if (rowTour) {
            rowTour.style.display = data.hasTour ? 'flex' : 'none';
            const val = rowTour.querySelector('.row-v, .item-val');
            if (val) val.textContent = 'A medida';
        }

        // Dron
        if (rowDron) {
            rowDron.style.display = data.hasDron ? 'flex' : 'none';
            const val = rowDron.querySelector('.row-v, .item-val');
            if (val) val.textContent = 'A medida';
        }

        // Totales textuales a medida
        if (totalAmountEl) totalAmountEl.textContent = 'A Medida';
        if (mobileStickyAmountEl) mobileStickyAmountEl.textContent = 'A Medida';

        // Parámetros para URL de Contacto
        const params = new URLSearchParams({
            paquete: data.packageData.name,
            tipologia: data.packageData.selectValue,
            extras: data.extrasList.join(' · ') || 'Estándar'
        });

        const contactUrl = `https://eidosrender.es/contacto?${params.toString()}`;
        if (btnRequestQuote) btnRequestQuote.href = contactUrl;
        if (btnMobileStickyCTA) btnMobileStickyCTA.href = contactUrl;

        // Mensaje directo para WhatsApp
        if (btnWhatsappQuote) {
            const waText = encodeURIComponent(
                `Hola Eidos Render, he configurado un proyecto en vuestra web:\n` +
                `• Paquete Base: ${data.packageData.name}\n` +
                `• Extras seleccionados: ${data.extrasList.join(', ') || 'Sin extras'}\n\n` +
                `¿Podemos revisar los planos para darme presupuesto cerrado?`
            );
            btnWhatsappQuote.href = `https://wa.me/34614459144?text=${waText}`;
        }
    }

    // -------------------------------------------------------------------------
    // EVENT LISTENERS REACTIVOS
    // -------------------------------------------------------------------------
    packageRadios.forEach((radio) => radio.addEventListener('change', calculate));
    extraCheckboxes.forEach((chk) => chk.addEventListener('change', calculate));

    if (btnIncrementExtra && extraRendersInput) {
        btnIncrementExtra.addEventListener('click', () => {
            let val = parseInt(extraRendersInput.value, 10) || 0;
            if (val < 20) {
                extraRendersInput.value = val + 1;
                calculate();
            }
        });
    }

    if (btnDecrementExtra && extraRendersInput) {
        btnDecrementExtra.addEventListener('click', () => {
            let val = parseInt(extraRendersInput.value, 10) || 0;
            if (val > 0) {
                extraRendersInput.value = val - 1;
                calculate();
            }
        });
    }

    if (extraRendersInput) {
        extraRendersInput.addEventListener('input', calculate);
        extraRendersInput.addEventListener('change', calculate);
    }

    // Control de visibilidad del Bottom Bar móvil (se muestra al hacer scroll en móvil)
    const mobileBar = document.getElementById('calcMobileStickyBar');
    if (mobileBar && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    mobileBar.classList.add('is-visible');
                } else {
                    mobileBar.classList.remove('is-visible');
                }
            });
        }, { 
            threshold: 0.01,
            rootMargin: "-20px 0px -20px 0px"
        });

        observer.observe(calcSection);
    }

    // Inicializar cálculo en carga
    calculate();
}
