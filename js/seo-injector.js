/**
 * EIDOS RENDER — js/seo-injector.js
 * Utilidad de soporte y enriquecimiento para datos estructurados (Schema.org JSON-LD) y metadatos SEO.
 */

export function initSeoHelper() {
    // Verificar si existen scripts de Schema.org en la página
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    
    if (existingSchemas.length === 0) {
        // Inyectar esquema básico de fallback si la página no lo contiene
        injectDefaultOrganizationSchema();
    }
}

/**
 * Genera e inyecta dinámicamente el esquema corporativo para B2B con enlace a LinkedIn
 */
export function injectDefaultOrganizationSchema() {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Corporation",
        "name": "Eidos Render",
        "legalName": "Eidos Render S.L.",
        "url": "https://eidosrender.es/",
        "logo": "https://eidosrender.es/LOGO.PNG",
        "image": "https://eidosrender.es/img/render-fachada-edificio-obra-nueva.jpg",
        "description": "Estudio especializado en renders inmobiliarios, planos 3D comerciales e infografía hiperrealista para promotoras inmobiliarias, fondos de inversión y comercializadoras.",
        "telephone": "+34614459144",
        "email": "info@eidosrender.es",
        "sameAs": [
            "https://www.linkedin.com/company/eidos-render"
        ],
        "areaServed": [
            { "@type": "AdministrativeArea", "name": "Valencia" },
            { "@type": "AdministrativeArea", "name": "Madrid" },
            { "@type": "AdministrativeArea", "name": "Alicante" },
            { "@type": "AdministrativeArea", "name": "Málaga" },
            { "@type": "AdministrativeArea", "name": "Sevilla" },
            { "@type": "AdministrativeArea", "name": "Bilbao" },
            { "@type": "Country", "name": "España" }
        ],
        "knowsAbout": [
            "Renders Inmobiliarios",
            "Infografía 3D de Arquitectura",
            "Comercialización de Obra Nueva",
            "Venta sobre Plano",
            "House Flipping",
            "Planos 3D Comerciales"
        ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(orgSchema, null, 2);
    document.head.appendChild(script);
}

