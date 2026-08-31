/**
 * ===================================================================
 * EIDOS RENDER — js/calculator.js
 * Calculadora de Presupuestos B2B basada en Paquetes Base + Upsells Dinámicos
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

    // Tarifas del Sistema
    const PACKAGES = {
        'inversor': {
            price: 350,
            name: 'Pack Inversor & Flipping',
            selectValue: 'reforma-flipping',
            desc: '2 Renders Interiores + Plano'
        },
        'promotora': {
            price: 750,
            name: 'Pack Promotora Residencial',
            selectValue: 'obra-nueva',
            desc: '1 Ext + 2 Int + 1 Plano 3D (4K)'
        },
        'marketing-pro': {
            price: 1450,
            name: 'Pack Marketing Pro',
            selectValue: 'obra-nueva',
            desc: 'Kit Integral Multiformato'
        }
    };

    const EXTRA_RENDER_UNIT_PRICE = 175;
    const EXTRA_TOUR_PRICE = 450;
    const EXTRA_DRON_PRICE = 180;

    let currentTotal = 0;
    let animationFrameId = null;

    /**
     * Calcula los importes según la selección
     */
    function calculate() {
        // A. Paquete Base Seleccionado
        const selectedPackageKey = document.querySelector('input[name="basePackage"]:checked')?.value || 'promotora';
        const packageData = PACKAGES[selectedPackageKey] || PACKAGES['promotora'];
        const basePrice = packageData.price;

        // B. Renders Adicionales (+175€/ud)
        let extraRenders = parseInt(extraRendersInput ? extraRendersInput.value : 0, 10);
        if (isNaN(extraRenders) || extraRenders < 0) extraRenders = 0;
        if (extraRenders > 20) extraRenders = 20;
        if (extraRendersInput) extraRendersInput.value = extraRenders;

        const extraRendersCost = extraRenders * EXTRA_RENDER_UNIT_PRICE;

        // C. Checkboxes de Extras Fijos
        let hasTour = false;
        let hasDron = false;

        extraCheckboxes.forEach((chk) => {
            if (chk.checked) {
                if (chk.value === 'tour360') hasTour = true;
                if (chk.value === 'dron') hasDron = true;
            }
        });

        const tourCost = hasTour ? EXTRA_TOUR_PRICE : 0;
        const dronCost = hasDron ? EXTRA_DRON_PRICE : 0;

        // D. Total Final
        const finalTotal = basePrice + extraRendersCost + tourCost + dronCost;

        // E. Lista de extras para texto
        const extrasList = [];
        if (extraRenders > 0) {
            extrasList.push(`${extraRenders} render(s) extra (+${formatCurrency(extraRendersCost)}€)`);
        }
        if (hasTour) extrasList.push('Tour Virtual 360º (+450€)');
        if (hasDron) extrasList.push('Integración Dron (+180€)');

        // F. Actualizar UI
        updateSummaryUI({
            packageData,
            basePrice,
            extraRenders,
            extraRendersCost,
            hasTour,
            hasDron,
            finalTotal,
            extrasList
        });

        // G. Animar número
        animateTotal(finalTotal);
    }

    /**
     * Actualiza los elementos del DOM y los enlaces CTA
     */
    function updateSummaryUI(data) {
        // Paquete Base
        if (summaryPackName) summaryPackName.textContent = data.packageData.name;
        if (summaryPackPrice) summaryPackPrice.textContent = `${formatCurrency(data.basePrice)}€`;

        // Renders Adicionales
        if (rowExtraRenders && summaryExtraRendersName && summaryExtraRendersVal) {
            if (data.extraRenders > 0) {
                rowExtraRenders.style.display = 'flex';
                summaryExtraRendersName.textContent = `${data.extraRenders} ${data.extraRenders === 1 ? 'Render adicional' : 'Renders adicionales'} (+175€/ud)`;
                summaryExtraRendersVal.textContent = `+${formatCurrency(data.extraRendersCost)}€`;
            } else {
                rowExtraRenders.style.display = 'none';
            }
        }

        // Tour 360
        if (rowTour) {
            rowTour.style.display = data.hasTour ? 'flex' : 'none';
        }

        // Dron
        if (rowDron) {
            rowDron.style.display = data.hasDron ? 'flex' : 'none';
        }

        // Parámetros para URL de Contacto
        const params = new URLSearchParams({
            paquete: data.packageData.name,
            tipologia: data.packageData.selectValue,
            extras: data.extrasList.join(' · ') || 'Ninguno',
            estimacion: `${formatCurrency(data.finalTotal)}€`
        });

        const contactUrl = `https://eidosrender.es/contacto?${params.toString()}`;
        if (btnRequestQuote) btnRequestQuote.href = contactUrl;
        if (btnMobileStickyCTA) btnMobileStickyCTA.href = contactUrl;

        // Mensaje directo para WhatsApp
        if (btnWhatsappQuote) {
            const waText = encodeURIComponent(
                `Hola Eidos Render, he configurado un presupuesto en vuestra web:\n` +
                `• Paquete Base: ${data.packageData.name} (${formatCurrency(data.basePrice)}€)\n` +
                `• Extras seleccionados: ${data.extrasList.join(', ') || 'Sin extras'}\n` +
                `• Total Estimado: ${formatCurrency(data.finalTotal)}€ + IVA\n\n` +
                `¿Podemos revisar los planos de mi proyecto?`
            );
            btnWhatsappQuote.href = `https://wa.me/34614459144?text=${waText}`;
        }
    }

    /**
     * Animación de conteo suave con requestAnimationFrame
     */
    function animateTotal(target) {
        if (currentTotal === target) return;

        const start = currentTotal;
        const duration = 260; // ms
        const startTime = performance.now();

        if (totalAmountEl) totalAmountEl.classList.add('is-updating');
        if (mobileStickyAmountEl) mobileStickyAmountEl.classList.add('is-updating');

        if (animationFrameId) cancelAnimationFrame(animationFrameId);

        function step(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(start + (target - start) * easeOut);
            const formatted = formatCurrency(value);

            if (totalAmountEl) totalAmountEl.textContent = formatted;
            if (mobileStickyAmountEl) mobileStickyAmountEl.textContent = formatted;

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(step);
            } else {
                currentTotal = target;
                const finalFormatted = formatCurrency(target);
                if (totalAmountEl) {
                    totalAmountEl.textContent = finalFormatted;
                    setTimeout(() => totalAmountEl.classList.remove('is-updating'), 100);
                }
                if (mobileStickyAmountEl) {
                    mobileStickyAmountEl.textContent = finalFormatted;
                    setTimeout(() => mobileStickyAmountEl.classList.remove('is-updating'), 100);
                }
            }
        }

        animationFrameId = requestAnimationFrame(step);
    }

    function formatCurrency(num) {
        return new Intl.NumberFormat('es-ES').format(num);
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
                // Mostrar barra fija cuando la calculadora entra en viewport
                if (entry.isIntersecting) {
                    mobileBar.classList.add('is-visible');
                } else {
                    mobileBar.classList.remove('is-visible');
                }
            });
        }, { threshold: 0.08 });

        observer.observe(calcSection);
    }

    // Inicializar cálculo en carga
    calculate();
}
