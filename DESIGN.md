# DESIGN.md — Sistema de Diseño Eidos Render

## 1. Identidad de Marca y Filosofía Visual
El diseño de **Eidos Render** se inspira en publicaciones de arquitectura de autor, dossiers editoriales de alta gama y tipografía editorial de precisión. No es una web tecnológica ruidosa ni una plantilla genérica con degradados violetas ("AI slop"); es una plataforma sobria, táctil y arquitectónica.

---

## 2. Paleta Oficial de Colores (Tokens)

```css
:root {
  /* Fondos y Superficies Principales */
  --charcoal: #1B1918;            /* Carbón: textos sobre fondo claro, cabeceras, superficies oscuras */
  --charcoal-deep: #141416;       /* Fondo oscuro profundo de contraste */
  --cream: #F1EBDF;               /* Crema: color base de "papel", cálido y arquitectónico */
  --cream-2: #E8E1D3;             /* Crema secundario para tarjetas y bloques alternados */
  --cream-pure: #FFFFFF;          /* Blanco puro para tarjetas elevadas con foco */

  /* Color de Acento Oficial */
  --granate: #C8102E;             /* Carmesí / Granate vivo oficial de marca */
  --granate-muted: #A31A33;       /* Granate sobrio para fondos de sección */
  --granate-hover: #7F1428;       /* Hover y estados activos */
  --granate-deep: #6B1A2A;        /* Sombras o bordes de acento */

  /* Tonos Neutros y Estructurales */
  --warm-gray: #8C867B;           /* Metadatos, numeración, fechas y etiquetas */
  --line: #CFC6B6;                /* Línea divisoria arquitectónica */
  --line-subtle: rgba(27, 25, 24, 0.08); /* Borde suave para elevaciones */
  --line-strong: rgba(27, 25, 24, 0.28);
}
```

---

## 3. Tipografía Oficial (Autoalojada WOFF2 con `font-display: swap`)

1. **`Josefin Sans` (400 Regular):** Tipografía principal para el cuerpo de texto, párrafos, descripciones técnicas y listas. Ofrece una legibilidad geométrica limpia con carácter contemporáneo.
2. **`Newsreader` (700 Italic):** Tipografía con remates para acentos editoriales específicos. Se aplica en palabras clave dentro de los titulares para aportar calidez y refinamiento artesanal.
3. **`Poiret One` (400 Regular):** Tipografía de gran apertura geométrica para navegación, botones de llamada a la acción, metadatos, numeraciones y titulares capitalizados.

### Reglas Tipográficas
- Suavizado tipográfico forzado:
  ```css
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  ```
- Titulares con `text-wrap: balance;` para evitar líneas huérfanas.
- Párrafos introductorios con `text-wrap: pretty;`.
- Métricas, tarifas y teléfonos con figuras tabulares (`font-variant-numeric: tabular-nums;`).

---

## 4. Superficies, Radios y Elevaciones (Make Interfaces Feel Better)

### Radios Concêntricos
- Elementos arquitectónicos base mantienen líneas rectas estructuradas (`border-radius: 0` o `2px`).
- Para elementos interactivos y tarjetas flotantes, aplicar el principio concéntrico:
  $$R_{outer} = R_{inner} + Padding$$
  - Botones y tarjetas interactivas: radio sutil de `3px` a `4px` para eliminar la agresividad cortante sin perder rigor arquitectónico.
  - Badges y píldoras: `border-radius: 999px`.

### Sombras Multinivel (Layered Shadows)
Evitar bordes planos negros (`border: 1px solid #000`) o sombras artificiales oscuras de un solo paso. Usar elevación compuesta:
```css
--shadow-subtle: 0 1px 2px rgba(27, 25, 24, 0.04), 0 4px 12px rgba(27, 25, 24, 0.05);
--shadow-card: 0 2px 4px rgba(27, 25, 24, 0.03), 0 8px 24px rgba(27, 25, 24, 0.06);
--shadow-hover: 0 4px 8px rgba(27, 25, 24, 0.04), 0 16px 36px rgba(27, 25, 24, 0.08);
```

### Áreas de Pulsación (Touch Targets)
- Todos los enlaces, botones y disparadores de acordeón deben garantizar una superficie táctil mínima de **44x44px** (idealmente **48x48px** en dispositivos móviles).

---

## 5. Movimiento y Micro-Interacciones (Transitions.dev)

### Tokens de Movimiento CSS
```css
:root {
  --t-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --t-ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --t-duration-fast: 180ms;
  --t-duration-base: 280ms;
}
```

### Reglas Estrictas de Rendimiento y SEO
1. **Contenido siempre presente:** Todo el contenido debe ser legible en el HTML estático plano sin ejecución de JavaScript.
2. **Cero `opacity: 0` dependiente de JS:** Ningún bloque de texto, título ni elemento de contenido puede tener `opacity: 0` inicial en CSS que requiera un script para revelarse.
3. **No animar la imagen LCP:** La imagen principal de cabecera debe ser visible de inmediato; no aplicar animaciones de zoom, entrada ni fade sobre el elemento LCP.
4. **Propiedades aceleradas por hardware:** Solo se animan `transform` y `opacity`.
5. **GSAP restringido:** GSAP y Lenis solo se ejecutan con `defer` y exclusivamente en la portada para efectos de sección específicos. Micro-interacciones (menú flotante, acordeón de FAQs, hover de tarjetas) se resuelven 100% con CSS nativo o selectores ultra-ligeros.
6. **Accesibilidad Obligatoria:** Respetar la preferencia `prefers-reduced-motion: reduce`.

