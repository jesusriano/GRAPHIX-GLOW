import { 
  ServiceItem, 
  PortfolioProject, 
  BlogPost, 
  Testimonial, 
  ClientLogo, 
  PricingPlan, 
  FaqItem 
} from '../types';

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'ia-agentes',
    title: 'Inteligencia Artificial y Agentes',
    category: 'ia',
    shortDesc: 'Integración de modelos LLM, automatización con agentes autónomos y sistemas de IA a medida.',
    fullDesc: 'Desarrollamos soluciones personalizadas basadas en Inteligencia Artificial Generativa, agentes conversacionales con RAG (Retrieval-Augmented Generation), automatización de tareas cognitivas y modelos predictivos para optimizar la toma de decisiones empresariales.',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Reducción de hasta un 70% en tiempos operativos',
      'Agentes IA disponibles 24/7 sin interrupción',
      'Integración nativa con tu base de datos y ERPs',
      'Personalización absoluta de los prompts y modelos'
    ],
    deliverables: ['Modelos Fine-tuned / RAG', 'API de Integración', 'Panel de Supervisión', 'Capacitación a equipo'],
    deliverTime: '3-6 Semanas',
    featured: true
  },
  {
    id: 'desarrollo-web-premium',
    title: 'Diseño y Desarrollo Web Premium',
    category: 'web',
    shortDesc: 'Sitios web de ultra alto rendimiento, Next.js, arquitectura JAMstack y diseños galardonados.',
    fullDesc: 'Construimos portales corporativos y aplicaciones web dinámicas utilizando las tecnologías más avanzadas del mercado. Diseños visualmente cinematográficos, velocidad de carga instantánea (100/100 Core Web Vitals) y arquitectura escalable.',
    iconName: 'Globe',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Carga ultrarrápida optimizada para SEO',
      'Diseño único no-template adaptado a tu marca',
      'Seguridad de grado bancario e integración API',
      'Experiencia inmersiva con animaciones fluídas'
    ],
    deliverables: ['Código Fuente Optimizado', 'Diseño Responsive Mobile-First', 'Certificado SSL & Dominio', 'Panel de Administración CMS'],
    deliverTime: '2-4 Semanas',
    featured: true
  },
  {
    id: 'aplicaciones-moviles',
    title: 'Aplicaciones Móviles (iOS & Android)',
    category: 'apps',
    shortDesc: 'Apps nativas y multiplataforma de alto impacto, experiencia de usuario fluida y publicación en tiendas.',
    fullDesc: 'Creamos aplicaciones móviles excepcionales para App Store y Google Play con React Native y Flutter. Desde la conceptualización de interfaz UX/UI hasta la gestión completa de servidores en la nube y notificaciones push.',
    iconName: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Publicación garantizada en App Store y Play Store',
      'Sincronización en tiempo real e integración con sensores',
      'Arquitectura segura offline-first',
      'Suscripciones y pagos In-App nativos'
    ],
    deliverables: ['Archivos APK / IPA', 'Publicación en Stores', 'Backend Firebase/Nube', 'Soporte Continuo'],
    deliverTime: '4-8 Semanas',
    featured: true
  },
  {
    id: 'automatizacion-empresarial',
    title: 'Automatización Empresarial & CRM',
    category: 'automation',
    shortDesc: 'Conecta tus herramientas, elimina trabajo repetitivo y automatiza tus flujos de conversión.',
    fullDesc: 'Diseñamos flujos automatizados de trabajo integrando Zapier, Make, n8n y CRMs personalizados. Automatiza el envío de propuestas, facturación, seguimiento de leads y gestión de inventario sin intervención humana.',
    iconName: 'Workflow',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Elimina errores humanos en entrada de datos',
      'Aumenta la velocidad de cierre de ventas en un 40%',
      'Panel centralizado de analítica operacional',
      'Conexión sin costuras entre +5000 plataformas'
    ],
    deliverables: ['Flujos Automatizados n8n/Make', 'CRM Personalizado', 'Webhooks de Notificación', 'Manual de Operación'],
    deliverTime: '1-3 Semanas'
  },
  {
    id: 'branding-identidad',
    title: 'Branding e Identidad Corporativa',
    category: 'branding',
    shortDesc: 'Marcas memorables que transmiten autoridad, lujo tecnológico y confianza inmediata.',
    fullDesc: 'Construimos la personalidad visual de tu empresa desde cero: logotipos vectoriales de alta precisión, manuales de marca, tipografías personalizadas, paletas cromáticas exclusivas y activos digitales corporativos.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Posicionamiento de marca en segmento Premium',
      'Manual de identidad de +50 páginas detalladas',
      'Diseño de merchandising y papelería corporativa',
      'Kit completo de marca para medios digitales'
    ],
    deliverables: ['Logotipo en Vectores (SVG, AI, PNG)', 'Brandbook Digital', 'Tipografías & Colores', 'Plantillas para Redes'],
    deliverTime: '2 Semanas',
    featured: true
  },
  {
    id: 'marketing-seo-growth',
    title: 'Marketing Digital & SEO Tecnológico',
    category: 'seo',
    shortDesc: 'Posicionamiento orgánico en Google, campañas de alto ROI en Meta Ads y Google Ads.',
    fullDesc: 'Estrategias aceleradas de adquisición de clientes. Auditoría técnica SEO, optimización de palabras clave con intención comercial de compra, embudos de conversión (funnels) y campañas publicitarias optimizadas diariamente.',
    iconName: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Tráfico cualificado listo para contratar tu servicio',
      'Retorno de inversión (ROAS) de +4.5x en publicidad',
      'Aparición en primeros resultados de Google',
      'Informes mensuales en vivo con métricas clave'
    ],
    deliverables: ['Estrategia SEO On-Page & Off-Page', 'Configuración Google Ads/Meta', 'Reportes de Conversión', 'Landing Pages A/B'],
    deliverTime: 'Estrategia Mensual'
  }
];

export const INITIAL_PORTFOLIO: PortfolioProject[] = [
  {
    id: 'neura-health',
    title: 'NeuraHealth AI - Plataforma Médica con IA Diagnóstica',
    client: 'NeuraHealth Medical Group',
    category: 'ia',
    summary: 'Plataforma web y sistema de triaje automatizado con inteligencia artificial para acelerar diagnósticos iniciales.',
    description: 'Diseñamos un ecosistema completo para clínicas especializadas. Los pacientes realizan su pre-consulta con un asistente de IA empático que compila antecedentes y genera sugerencias clínicas preliminares para los médicos.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    technologies: ['React 19', 'Next.js', 'Gemini API', 'Tailwind CSS', 'Express', 'Python AI'],
    metrics: [
      { label: 'Tiempo de triaje', value: '-65%' },
      { label: 'Satisfacción paciente', value: '98.4%' },
      { label: 'Procesamiento mensual', value: '+12,000' }
    ],
    year: '2025',
    featured: true
  },
  {
    id: 'fintech-nexus',
    title: 'Nexus Pay - Core Banking & App Financiera Multi-Moneda',
    client: 'Nexus Group International',
    category: 'apps',
    summary: 'Aplicación móvil de pagos instantáneos en cripto y moneda local con biometría integrada.',
    description: 'Desarrollo integral de app móvil para iOS y Android con cifrado de grado militar, interfaz ultrasuave en dark mode y notificaciones push inmediatas para transferencias internacionales.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets'],
    metrics: [
      { label: 'Descargas activas', value: '+250,000' },
      { label: 'Tasa de conversión', value: '8.4%' },
      { label: 'Rating Stores', value: '4.9 ★' }
    ],
    year: '2025',
    featured: true
  },
  {
    id: 'lux-estate',
    title: 'LuxEstate Global - Portal Inmobiliario de Lujo con Tour 3D',
    client: 'LuxEstate Holdings',
    category: 'web',
    summary: 'Sitio web corporativo de bienes raíces premium con visualizador holográfico y cotizador interactivo.',
    description: 'Transformación digital para agencia inmobiliaria de propiedades exclusivas en Riviera Maya y Miami. Integración de mapa interactivo, filtros avanzados y captura inteligente de inversionistas.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Mapbox API'],
    metrics: [
      { label: 'Leads cualificados', value: '+320%' },
      { label: 'Tiempo en sitio', value: '4m 12s' },
      { label: 'Propiedades vendidas', value: '$45M USD' }
    ],
    year: '2024',
    featured: true
  },
  {
    id: 'cyber-auto',
    title: 'CyberAuto ERP - Sistema de Automatización para Flotillas',
    client: 'CyberAuto Logistics',
    category: 'automation',
    summary: 'Automatización completa de rutas, combustible y mantenimiento preventivo mediante sensores e IA.',
    description: 'Ecosistema web para el monitoreo en tiempo real de más de 500 camiones de carga, reduciendo costos operativos y generando alertas predictivas de averías.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    technologies: ['TypeScript', 'Express', 'Make/n8n', 'Tailwind CSS', 'WebSockets'],
    metrics: [
      { label: 'Ahorro de combustible', value: '22.5%' },
      { label: 'Reducción de fallas', value: '-40%' },
      { label: 'Retorno inversión', value: '3 meses' }
    ],
    year: '2024'
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-ia-2026',
    title: 'Cómo los Agentes de Inteligencia Artificial están Reemplazando los Procesos Tradicionales en 2026',
    slug: 'agentes-inteligencia-artificial-procesos-2026',
    category: 'Inteligencia Artificial',
    summary: 'Descubre cómo las empresas líderes implementan agentes IA autónomos para automatizar el 80% de sus tareas repetitivas y multiplicar sus ingresos.',
    content: `
# La Revolución de los Agentes Autónomos en las Empresas

La Inteligencia Artificial ha evolucionado desde simples modelos de respuesta hasta **agentes autónomos capaces de razonar, ejecutar herramientas y tomar decisiones en tiempo real**.

En **Graphix Glow**, ayudamos a organizaciones a migrar de flujos manuales lentos a sistemas inteligentes.

## 1. ¿Qué es un Agente de IA Empresarial?
A diferencia de un chatbot tradicional que responde únicamente a preguntas prediseñadas, un **Agente de IA**:
* Analiza solicitudes complejas desglosándolas en sub-tareas.
* Consulta bases de datos internas en milisegundos mediante RAG.
* Ejecuta acciones en tu CRM, ERP o correo electrónico.
* Aprende continuamente de la interacción humana.

## 2. Casos de Éxito Reales
Las empresas que adoptan agentes de IA reportan:
1. **Atención al Cliente**: Tiempos de resolución reducidos de horas a 12 segundos.
2. **Ventas y Calificación de Leads**: Agentes de voz e interacción textual que agendan citas directamente en Google Calendar o HubSpot.
3. **Análisis de Documentos**: Extracción instantánea de cláusulas clave en contratos legales de +100 páginas.

## 3. Cómo Empezar la Transformación Digital en tu Empresa
Para implementar IA sin riesgos operativos, recomendamos seguir este mapa de ruta:
* **Auditoría de Procesos**: Identificar cuellos de botella con alto volumen de tareas repetitivas.
* **Prototipado Rápido**: Crear un MVP funcional en 14 días.
* **Despliegue Progresivo**: Integrar los agentes asegurando supervisión humana (*Human-in-the-loop*).

> "La IA no reemplazará a tu empresa, pero las empresas que utilicen IA reemplazarán a las que no lo hagan."
    `,
    featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Alan J. Ruiz',
      role: 'CEO & Lead AI Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    publishedAt: '28 de Julio, 2026',
    readTime: '5 min de lectura',
    tags: ['IA', 'Agentes Autónomos', 'Automatización', 'Innovación Empresarial'],
    tableOfContents: [
      { id: '1-qu-es-un-agente-de-ia-empresarial', title: '1. ¿Qué es un Agente de IA Empresarial?' },
      { id: '2-casos-de-xito-reales', title: '2. Casos de Éxito Reales' },
      { id: '3-cmo-empezar-la-transformacin-digital-en-tu-empresa', title: '3. Cómo Empezar la Transformación Digital' }
    ],
    commentsCount: 4,
    schemaJson: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Cómo los Agentes de Inteligencia Artificial están Reemplazando los Procesos Tradicionales en 2026",
      "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "author": {
        "@type": "Person",
        "name": "Alan J. Ruiz"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Graphix Glow",
        "logo": {
          "@type": "ImageObject",
          "url": "https://graphixglow.com/logo.png"
        }
      },
      "datePublished": "2026-07-28"
    }
  },
  {
    id: 'post-seo-web-vitals',
    title: 'Guía Definitiva de SEO Técnico y Core Web Vitals para Dominar Google en 2026',
    slug: 'guia-definitiva-seo-tecnico-core-web-vitals',
    category: 'SEO',
    summary: 'Aprende las métricas exactas que Google exige para posicionar tu web corporativa en el puesto #1 orgánico.',
    content: `
# SEO Técnico de Alta Precisión: Domina las Búsquedas Orgánicas

El posicionamiento SEO ya no se trata de repetir palabras clave sin sentido. En 2026, Google prioriza la **experiencia de usuario fluida, la velocidad de respuesta en el servidor y la arquitectura semántica**.

## Puntos Clave de Optimización
1. **INP (Interaction to Next Paint)**: Tu web debe responder al toque del usuario en menos de 200 milisegundos.
2. **Schema.org JSON-LD**: Implementar marcados de datos estructurados para aparecer en rich snippets e Inteligencia Artificial de Google (SGE).
3. **Indexación Mobile-First**: Diseños desarrollados prioritariamente para dispositivos móviles.

En **Graphix Glow** construimos cada sitio web garantizando puntuaciones de 99-100 en Google PageSpeed Insights.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Valeria Solares',
      role: 'Head of Growth & SEO Technical Specialist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    publishedAt: '22 de Julio, 2026',
    readTime: '6 min de lectura',
    tags: ['SEO', 'Core Web Vitals', 'Google', 'Posicionamiento Organic'],
    tableOfContents: [
      { id: 'seo-tnico-de-alta-precisin-domina-las-bsquedas-orgnicas', title: 'Introducción' },
      { id: 'puntos-clave-de-optimizacin', title: 'Puntos Clave de Optimización' }
    ],
    commentsCount: 2,
    schemaJson: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Guía Definitiva de SEO Técnico y Core Web Vitals para Dominar Google en 2026",
      "datePublished": "2026-07-22"
    }
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Roberto Mendoza',
    role: 'Director General',
    company: 'Grupo Industrial Mendoza',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Graphix Glow transformó por completo nuestra imagen corporativa y desarrolló un sistema de automatización con IA que incrementó nuestras ventas en un 180% en los primeros 3 meses. El nivel de detalle visual y técnico es insuperable.',
    serviceUsed: 'IA & Desarrollo Web'
  },
  {
    id: 'test-2',
    clientName: 'Dra. Sofía Alarcón',
    role: 'Fundadora',
    company: 'NeuraHealth Medical Group',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Trabajar con el equipo de Graphix Glow fue una experiencia de nivel internacional. Su capacidad para traducir conceptos de inteligencia artificial complejos en un sitio web fluido e intuitivo superó todas nuestras expectativas.',
    serviceUsed: 'Plataforma IA & App Móvil'
  },
  {
    id: 'test-3',
    clientName: 'Carlos Benítez',
    role: 'VP de Operaciones',
    company: 'CyberAuto Logistics',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    comment: 'Su trabajo de branding, desarrollo web y SEO local nos colocó en el puesto #1 de nuestro sector. Es la mejor inversión tecnológica que hemos hecho.',
    serviceUsed: 'Branding & SEO Growth'
  }
];

export const INITIAL_CLIENT_LOGOS: ClientLogo[] = [
  { 
    id: 'logo-1', 
    name: 'NeuraHealth Medical', 
    logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80', 
    industry: 'Salud & Biotecnología',
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    textColor: 'text-emerald-300',
    borderColor: 'hover:border-emerald-400/60',
    glowColor: 'shadow-[0_0_25px_rgba(16,185,129,0.35)]',
    iconBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    iconName: 'Activity'
  },
  { 
    id: 'logo-2', 
    name: 'Nexus Pay Banking', 
    logoUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=150&q=80', 
    industry: 'Fintech & Finanzas',
    badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    textColor: 'text-amber-300',
    borderColor: 'hover:border-amber-400/60',
    glowColor: 'shadow-[0_0_25px_rgba(245,158,11,0.35)]',
    iconBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    iconName: 'Coins'
  },
  { 
    id: 'logo-3', 
    name: 'LuxEstate Global', 
    logoUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=150&q=80', 
    industry: 'Bienes Raíces de Lujo',
    badgeBg: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40',
    textColor: 'text-fuchsia-300',
    borderColor: 'hover:border-fuchsia-400/60',
    glowColor: 'shadow-[0_0_25px_rgba(217,70,239,0.35)]',
    iconBg: 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30',
    iconName: 'Building'
  },
  { 
    id: 'logo-4', 
    name: 'CyberAuto Fleet', 
    logoUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=150&q=80', 
    industry: 'Logística & Transporte',
    badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    textColor: 'text-cyan-300',
    borderColor: 'hover:border-cyan-400/60',
    glowColor: 'shadow-[0_0_25px_rgba(6,182,212,0.35)]',
    iconBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    iconName: 'Truck'
  },
  { 
    id: 'logo-5', 
    name: 'Vortex Quantum AI', 
    logoUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=150&q=80', 
    industry: 'Computación Cuántica',
    badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    textColor: 'text-indigo-300',
    borderColor: 'hover:border-indigo-400/60',
    glowColor: 'shadow-[0_0_25px_rgba(99,102,241,0.35)]',
    iconBg: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    iconName: 'Cpu'
  },
  { 
    id: 'logo-6', 
    name: 'Universidad NovaTech', 
    logoUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=150&q=80', 
    industry: 'Educación Superior',
    badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    textColor: 'text-blue-300',
    borderColor: 'hover:border-blue-400/60',
    glowColor: 'shadow-[0_0_25px_rgba(59,130,246,0.35)]',
    iconBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    iconName: 'GraduationCap'
  }
];

export const INITIAL_PRICING: PricingPlan[] = [
  {
    id: 'plan-startup',
    name: 'Presencia Digital & Web Premium',
    tagline: 'Ideal para empresas que buscan proyectar autoridad instantánea, diseño exclusivo y captar clientes cualificados.',
    badgeText: 'Propuesta Personalizada',
    targetAudience: 'Negocios & Profesionales',
    ctaText: 'Solicitar Cotización',
    category: 'web',
    features: [
      'Diseño Web Exclusivo (100% Personalizado)',
      'Hasta 6 Secciones Interactivas',
      'Velocidad de Carga Garantizada (<1s)',
      'Optimizaciones de SEO On-Page Básicas',
      'Integración con WhatsApp & CRM Básico',
      'Diseño Responsivo Mobile First',
      '1 Mes de Soporte Técnico Incluido'
    ],
    notIncluded: [
      'Agentes de IA Personalizados',
      'Aplicación Móvil Nativa'
    ]
  },
  {
    id: 'plan-business',
    name: 'Transformación IA & Automatización',
    tagline: 'Solución integral para empresas en crecimiento que requieren agentes de IA y flujos automáticos de trabajo.',
    badgeText: 'Cotización A Medida',
    targetAudience: 'Empresas en Crecimiento',
    popular: true,
    ctaText: 'Cotizar Este Plan',
    category: 'ia',
    features: [
      'Todo lo del Plan Presencia Digital',
      'Ecosistema Web Completo + Blog SEO',
      'Agente de Inteligencia Artificial Conversacional',
      'Integración RAG con tus Documentos/Bases de Datos',
      'Automatización de CRM (HubSpot/Make/n8n)',
      'Formularios Inteligentes con Calificación Lead',
      'Branding & Identidad Visual Completa',
      '3 Meses de Soporte Técnico Garantizado'
    ]
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise AI & Suite Multiplataforma',
    tagline: 'Para corporativos y marcas de alto nivel que exigen aplicaciones móviles a medida e Inteligencia Artificial a gran escala.',
    badgeText: 'Proyecto A Medida',
    targetAudience: 'Corporativos & Marcas Globales',
    ctaText: 'Agendar Sesión Estratégica',
    category: 'complete',
    features: [
      'Plataforma Web + Apps Móviles iOS & Android',
      'Infraestructura de IA Generativa & Agentes RAG Multi-modelo',
      'Automatizaciones Empresariales Complejas a Medida',
      'Estrategia de SEO Técnico On/Off Page + Core Web Vitals',
      'Auditoría de Seguridad OWASP & Encriptación',
      'SLA Garantizado de Soporte 24/7 Dedicado',
      'Capacitación Presencial/Virtual para Ejecutivos'
    ]
  }
];

export const INITIAL_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Cuánto tiempo tarda el desarrollo de un proyecto en Graphix Glow?',
    answer: 'El tiempo de entrega varía según la complejidad. Una Landing Page o Sitio Web Corporativo Premium suele completarse entre 2 y 3 semanas. Proyectos que incluyen integración de Agentes de IA, Aplicaciones Móviles o Automatizaciones completas toman entre 4 y 8 semanas. Mantenemos comunicación semanal y entregas por sprints intermedios.',
    category: 'Desarrollo'
  },
  {
    id: 'faq-2',
    question: '¿Cómo funciona el Agente de Inteligencia Artificial que integran en la web?',
    answer: 'Utilizamos tecnología avanzada con el motor Gemini de Google. Entrenamos la IA específicamente con la información de tus productos, servicios, tarifas y preguntas frecuentes. La IA interactúa en lenguaje natural con tus visitantes, responde dudas técnicas, califica clientes potenciales y los agendan directamente en tu calendario.',
    category: 'IA'
  },
  {
    id: 'faq-3',
    question: '¿El sitio web incluye optimización SEO para posicionarse en Google?',
    answer: 'Sí. Todos nuestros desarrollos incluyen SEO Técnico On-Page desde el código: estructura semántica HTML5, metadatos enriquecidos (Open Graph, Twitter Cards), Schema.org en JSON-LD, Sitemap XML automático, compresión de imágenes WebP/AVIF y tiempos de respuesta optimizados para cumplir al 100% las métricas Core Web Vitals de Google.',
    category: 'Marketing & SEO'
  },
  {
    id: 'faq-4',
    question: '¿Qué tecnologías utilizan en Graphix Glow?',
    answer: 'Utilizamos las tecnologías más modernas del ecosistema actual: React 19, Next.js, TypeScript, Tailwind CSS, Framer Motion, Express, Node.js, Python para algoritmos de IA, Firebase y Google GenAI SDK. Evitamos plantillas genéricas o builders pesados para garantizar máxima velocidad y seguridad.',
    category: 'Desarrollo'
  },
  {
    id: 'faq-5',
    question: '¿Puedo administrar mi propio contenido después de la entrega?',
    answer: '¡Por supuesto! Entregamos un Panel Administrativo personalizado donde podrás crear entradas de blog, actualizar proyectos de portafolio, administrar leads recibidos, cambiar información de servicios y revisar estadísticas de rendimiento sin necesidad de escribir código.',
    category: 'General'
  },
  {
    id: 'faq-6',
    question: '¿Cómo iniciamos un proyecto y cuáles son los métodos de pago?',
    answer: 'El proceso inicia con una llamada estratégica de descubrimiento o completando nuestro formulario/cotizador inteligente. Tras acordar el alcance, trabajamos habitualmente bajo el esquema de 50% de anticipo al inicio y 50% a la entrega y conformidad final. Aceptamos transferencias bancarias, tarjetas de crédito/débito y pagos internacionales.',
    category: 'General'
  }
];
