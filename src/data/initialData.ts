import { 
  ServiceItem, 
  PortfolioProject, 
  BlogPost, 
  Testimonial, 
  ClientLogo, 
  PricingPlan, 
  FaqItem 
} from '../types';
import logoPhoto from '../assets/images/regenerated_image_1785569587116.jpg';
import neurahealthLogo from '../assets/images/logos/neurahealth.svg';
import nexusPayLogo from '../assets/images/logos/nexuspay.svg';
import luxEstateLogo from '../assets/images/logos/luxestate.svg';
import cyberAutoLogo from '../assets/images/logos/cyberauto.svg';
import vortexQuantumLogo from '../assets/images/logos/vortexquantum.svg';
import novaTechLogo from '../assets/images/logos/novatech.svg';

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
    id: 'riaseal-asociados',
    title: 'RIASEAL Asociados - Sitio Web Corporativo & Identidad Digital',
    client: 'RIASEAL Asociados',
    category: 'web',
    summary: 'Sitio web corporativo de alta gama, soluciones empresariales y gestión de identidad digital.',
    description: 'Desarrollo integral de portal corporativo con arquitectura de alto rendimiento, optimizado para posicionamiento en motores de búsqueda y transmisión de máxima autoridad empresarial.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    technologies: ['React 19', 'Tailwind CSS', 'TypeScript', 'SEO Técnico'],
    metrics: [
      { label: 'Velocidad de carga', value: '0.4s' },
      { label: 'Core Web Vitals', value: '100/100' },
      { label: 'Autoridad de Marca', value: '+180%' }
    ],
    year: '2026',
    featured: true,
    country: '🇲🇽 México'
  },
  {
    id: 'spa-rio-cristales',
    title: 'Spa Río Cristales - Experiencia Digital & Branding Sensorial',
    client: 'Spa Río Cristales',
    category: 'branding',
    summary: 'Sitio web inmersivo, identidad visual y experiencia digital de relajación.',
    description: 'Renovación de branding corporativo y diseño de plataforma web con catálogos de servicios, reservas interactivas y estética visual enfocada en el bienestar y el lujo.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Branding UI/UX'],
    metrics: [
      { label: 'Reservas online', value: '+240%' },
      { label: 'Engagement', value: '94%' },
      { label: 'Conversión', value: '12.5%' }
    ],
    year: '2026',
    featured: true,
    country: '🇲🇽 México'
  },
  {
    id: 'essenya-spa',
    title: 'Essenya Spa a Domicilio - Plataforma Web & Reservas Automatizadas',
    client: 'Essenya Spa',
    category: 'automation',
    summary: 'Plataforma web con sistema de reservas en tiempo real y automatización de citas.',
    description: 'Implementación de sistema web a medida con motor de reservas automatizadas, pasarela de confirmación vía WhatsApp y branding integral para servicios de spa a domicilio.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'Make / n8n', 'WhatsApp API', 'Tailwind'],
    metrics: [
      { label: 'Citas automáticas', value: '85%' },
      { label: 'Ahorro operativo', value: '25 hrs/sem' },
      { label: 'Satisfacción', value: '4.9 ★' }
    ],
    year: '2026',
    featured: true,
    country: '🇲🇽 México'
  },
  {
    id: 'floreria-nas-lizz',
    title: 'Florería Nas & Lizz - Catálogo Digital & Diseño Gráfico Exclusivo',
    client: 'Florería Nas & Lizz',
    category: 'web',
    summary: 'Sitio web con catálogo digital interactivo y diseño gráfico de alta conversión.',
    description: 'Creación de tienda virtual y catálogo digital optimizado para pedidos rápidos con galerías fotográficas en alta resolución e identidad visual floral refinada.',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'E-commerce UI', 'Cloudinary'],
    metrics: [
      { label: 'Pedidos online', value: '+310%' },
      { label: 'Visualizaciones', value: '+15k/mes' },
      { label: 'Ticket promedio', value: '+35%' }
    ],
    year: '2026',
    country: '🇲🇽 México'
  },
  {
    id: 'landing-xv-fernanda-kaori',
    title: 'Landing Page XV Fernanda Kaori - Invitación Digital & RSVP',
    client: 'Familia Kaori',
    category: 'web',
    summary: 'Invitación digital interactiva con confirmación de asistencia RSVP y galería multimedia.',
    description: 'Desarrollo de landing page temática de lujo para celebración de XV años, con música ambiental opcional, cuenta regresiva, confirmación de asistencia automatizada y mapa interactivo.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Firebase'],
    metrics: [
      { label: 'RSVP confirmados', value: '98%' },
      { label: 'Invitados', value: '+300' },
      { label: 'Experiencia', value: '100% Digital' }
    ],
    year: '2026',
    country: '🇲🇽 México'
  },
  {
    id: 'graphixglow-corp',
    title: 'GraphixGlow Tech - Plataforma Tecnológica & IA Autónoma',
    client: 'GraphixGlow Agency',
    category: 'ia',
    summary: 'Sitio corporativo, plataforma tecnológica y núcleo de Inteligencia Artificial.',
    description: 'Nuestro propio ecosistema digital con motor de IA integrado, pasarela de diagnósticos inteligentes y arquitecturas de alto rendimiento bajo estándares globales.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    technologies: ['React 19', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'Express'],
    metrics: [
      { label: 'Performance', value: '100 pts' },
      { label: 'Agentes activos', value: '24/7' },
      { label: 'Proyectos entregados', value: '+120' }
    ],
    year: '2026',
    featured: true,
    country: '🇲🇽 México'
  },
  {
    id: 'eco-glamping-chinauta',
    title: 'Eco Glamping Chinauta - Portal Turístico, Branding & Marketing',
    client: 'Eco Glamping Chinauta',
    category: 'marketing',
    summary: 'Sitio web turístico, identidad de marca y estrategia de marketing digital.',
    description: 'Diseño web inmersivo para complejo eco-turístico en Colombia, integrando motor de reservas de cabañas, branding naturalista y campañas publicitarias de alta conversión.',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Next.js', 'Meta Ads', 'SEO Local', 'Tailwind'],
    metrics: [
      { label: 'Ocupación', value: '95%' },
      { label: 'ROAS Publicitario', value: '5.2x' },
      { label: 'Reservas directas', value: '+280%' }
    ],
    year: '2025',
    featured: true,
    country: '🇨🇴 Colombia'
  },
  {
    id: 'inspiracion-spa-col',
    title: 'Inspiración Spa - Sitio Web, Branding & Experiencia Digital',
    client: 'Inspiración Spa',
    category: 'web',
    summary: 'Plataforma web, identidad de marca y experiencia digital de bienestar.',
    description: 'Creación de imagen de marca y portal web interactivo para centro de estética y relajación en Colombia, destacando tratamientos especializados y reserva de experiencias.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'UI/UX Design', 'SEO'],
    metrics: [
      { label: 'Nuevos clientes', value: '+190%' },
      { label: 'Tasa rebote', value: '18%' },
      { label: 'Satisfacción', value: '4.9 ★' }
    ],
    year: '2025',
    country: '🇨🇴 Colombia'
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
    logoUrl: neurahealthLogo, 
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
    logoUrl: nexusPayLogo, 
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
    logoUrl: luxEstateLogo, 
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
    logoUrl: cyberAutoLogo, 
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
    logoUrl: vortexQuantumLogo, 
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
    logoUrl: novaTechLogo, 
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
