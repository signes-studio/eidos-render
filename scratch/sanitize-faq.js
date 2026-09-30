const fs = require('fs');

let faq = fs.readFileSync('faq.html', 'utf8');

faq = faq.replace(
  'Para paquetes estándar (Pack Inversor y Pack Promotora), enviamos los primeros borradores de encuadre e iluminación en un plazo de 3 a 5 días hábiles.',
  'Para proyectos integrales de lanzamiento, los plazos habituales se sitúan entre 6 y 10 semanas. Para fases de visualización puntuales, enviamos los primeros borradores de encuadre e iluminación en pocos días hábiles tras la recepción de la planimetría.'
);

faq = faq.replace(
  '3. ¿Qué incluye el precio de los paquetes cerrados?',
  '3. ¿Qué incluye cada encargo o fase de producción?'
);

faq = faq.replace(
  'Todos nuestros paquetes incluyen el modelado 3D del espacio a partir de tus planos, la ambientación con mobiliario comercial contemporáneo, la configuración de iluminación fotorrealista diurna o atardecer y al menos 1 ronda completa de ajustes técnicos.',
  'Cada fase incluye el modelado riguroso a partir de tus planos arquitectónicos, la ambientación y dirección de arte acorde al perfil del comprador, la calibración lumínica y las rondas de ajuste técnico necesarias para garantizar fidelidad constructiva y excelencia visual.'
);

fs.writeFileSync('faq.html', faq, 'utf8');
console.log('faq.html sanitized successfully.');
