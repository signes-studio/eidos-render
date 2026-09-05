/**
 * EIDOS RENDER — js/contact-form.js
 * Validación avanzada de formulario de captación B2B con seguridad antibot (honeypot + timestamp)
 * y gestión de estados asíncronos accesible.
 */

export function initContactForm() {
    const form = document.querySelector('.contact-form, #contactForm');
    if (!form) return;

    // 1. Inyectar protección antibot: Timestamp de carga
    const loadTime = Date.now();
    let timeInput = form.querySelector('input[name="_form_rendered_at"]');
    if (!timeInput) {
        timeInput = document.createElement('input');
        timeInput.type = 'hidden';
        timeInput.name = '_form_rendered_at';
        timeInput.value = loadTime.toString();
        form.appendChild(timeInput);
    }

    // 2. Inyectar campo Honeypot si no existe en HTML
    let honeypot = form.querySelector('input[name="_gotcha_b2b"]');
    if (!honeypot) {
        const hpContainer = document.createElement('div');
        hpContainer.className = 'honeypot-field visually-hidden';
        hpContainer.setAttribute('aria-hidden', 'true');
        hpContainer.innerHTML = `
            <label for="_gotcha_b2b">Dejar este campo vacío si eres humano</label>
            <input type="text" id="_gotcha_b2b" name="_gotcha_b2b" tabindex="-1" autocomplete="off" aria-hidden="true">
        `;
        form.prepend(hpContainer);
        honeypot = hpContainer.querySelector('input');
    }

    // 3. Validación en tiempo real al desenfocar o escribir
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                validateField(input);
            }
        });
    });

    // 4. Auto-rellenado desde parámetros de URL (procedente de la calculadora)
    prefillFromUrl(form);

    // 4. Manejo del envío (Submit)
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Verificación Honeypot (trampa para bots)
        if (honeypot && honeypot.value.trim() !== '') {
            console.warn('Spam bot detected via honeypot.');
            showFeedback(form, 'success', 'Solicitud recibida correctamente. Nos pondremos en contacto a la brevedad.');
            form.reset();
            return;
        }

        // Verificación de tiempo mínimo humano (> 1.5s)
        const elapsed = (Date.now() - loadTime) / 1000;
        if (elapsed < 1.5) {
            console.warn('Submission too fast, possible automated submission.');
        }

        // Validar todos los campos antes de enviar
        let isFormValid = true;
        inputs.forEach((input) => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            const firstInvalid = form.querySelector('.is-invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        // Estado de carga en el botón
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Enviar solicitud';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <span class="spinner" aria-hidden="true"></span>
                <span>Procesando solicitud...</span>
            `;
        }

        try {
            const formData = new FormData(form);
            const endpoint = form.getAttribute('action') || 'https://formspree.io/f/mzdnaelg';

            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showFeedback(
                    form,
                    'success',
                    '<strong>¡Solicitud enviada con éxito!</strong> Hemos recibido los datos de tu promoción. Analizaremos los planos y te remitiremos un presupuesto cerrado en menos de 24h laborables.'
                );
                form.reset();

                // Notificar a Google Tag Manager / Analytics
                if (window.dataLayer) {
                    window.dataLayer.push({
                        event: 'lead_form_submitted',
                        form_id: form.id || 'contact_form'
                    });
                }
            } else {
                throw new Error('Server returned ' + response.status);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showFeedback(
                form,
                'error',
                'Hubo un problema al procesar el formulario. Puedes escribirnos directamente a <a href="mailto:info@eidosrender.es" style="text-decoration:underline;">info@eidosrender.es</a> o vía WhatsApp al <a href="https://wa.me/34614459144" style="text-decoration:underline;">+34 614 45 91 44</a>.'
            );
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        }
    });
}

/**
 * Valida un campo individual usando ValidityState nativo
 */
function validateField(field) {
    if (field.type === 'hidden' || field.name === '_gotcha_b2b') return true;

    const isValid = field.checkValidity();
    field.classList.toggle('is-valid', isValid);
    field.classList.toggle('is-invalid', !isValid);

    // Buscar o crear contenedor de error
    let errorMsg = field.parentNode.querySelector('.field-error-msg');
    if (!isValid) {
        if (!errorMsg) {
            errorMsg = document.createElement('span');
            errorMsg.className = 'field-error-msg';
            errorMsg.setAttribute('role', 'alert');
            field.parentNode.appendChild(errorMsg);
        }
        if (field.validity.valueMissing) {
            errorMsg.textContent = 'Este campo es obligatorio para el estudio del presupuesto.';
        } else if (field.validity.typeMismatch && field.type === 'email') {
            errorMsg.textContent = 'Por favor, introduce un correo electrónico válido.';
        } else {
            errorMsg.textContent = field.validationMessage || 'Información no válida.';
        }
    } else if (errorMsg) {
        errorMsg.remove();
    }

    return isValid;
}

/**
 * Muestra el mensaje de feedback post-envío
 */
function showFeedback(form, type, message) {
    let feedbackBox = form.querySelector('.form-feedback-message');
    if (!feedbackBox) {
        feedbackBox = document.createElement('div');
        feedbackBox.className = 'form-feedback-message';
        form.prepend(feedbackBox);
    }

    feedbackBox.className = `form-feedback-message is-${type}`;
    feedbackBox.setAttribute('role', 'alert');
    feedbackBox.innerHTML = message;

    feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Rellena automáticamente los campos del formulario con los parámetros de la calculadora
 */
function prefillFromUrl(form) {
    try {
        const params = new URLSearchParams(window.location.search);
        const paquete = params.get('paquete');
        const tipologia = params.get('tipologia');
        const vistas = params.get('vistas');
        const extras = params.get('extras');
        const estimacion = params.get('estimacion');

        if (tipologia) {
            const select = form.querySelector('select[name="tipologia"], #tipologia');
            if (select) {
                const opt = select.querySelector(`option[value="${tipologia}"]`);
                if (opt) opt.selected = true;
            }
        }

        if (paquete || vistas || estimacion || extras) {
            const mensajeTextarea = form.querySelector('textarea[name="mensaje"], #mensaje');
            if (mensajeTextarea && !mensajeTextarea.value.trim()) {
                const details = [];
                if (paquete) details.push(`Paquete: ${paquete}`);
                if (vistas) details.push(`Volumen: ${vistas} vistas`);
                if (extras && extras !== 'Ninguno') details.push(`Extras: ${extras}`);
                if (estimacion) details.push(`Subtotal estimado: ${estimacion} + IVA`);
                
                mensajeTextarea.value = `[Configuración desde Calculadora]\n${details.join(' · ')}\n\nDetalles del proyecto / enlace a planos (WeTransfer/Drive): `;
            }
        }
    } catch {
        // Silencioso en caso de error en parseo
    }
}


