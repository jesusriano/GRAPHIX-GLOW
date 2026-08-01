import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OptimizedImage } from './OptimizedImage';
import { 
  ServiceItem, 
  CategoryType 
} from '../types';
import { 
  Sparkles, 
  Cpu, 
  Globe, 
  Smartphone, 
  Workflow, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  X, 
  Clock,
  Zap,
  ShieldCheck,
  Megaphone,
  ShoppingBag,
  MapPin,
  Video
} from 'lucide-react';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

interface SpecializedServiceGroup {
  categoryTitle: string;
  icon: any;
  items: string[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = React.memo(({
  services,
  onSelectServiceForQuote
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'Todos los Servicios' },
    { id: 'ia', label: 'Inteligencia Artificial' },
    { id: 'web', label: 'Diseño & Web' },
    { id: 'apps', label: 'Apps Móviles' },
    { id: 'automation', label: 'Automatización' },
    { id: 'branding', label: 'Branding & Diseño' },
    { id: 'seo', label: 'SEO & Marketing' },
  ];

  const specializedGroups: SpecializedServiceGroup[] = [
    {
      categoryTitle: 'Redes Sociales & Publicidad Digital',
      icon: Megaphone,
      items: [
        'Gestión de Redes Sociales',
        'Community Management',
        'Creación de Contenido',
        'Diseño para Redes Sociales',
        'Campañas Publicitarias',
        'Facebook Ads',
        'Google Ads',
        'TikTok Ads',
        'Instagram Ads',
        'Email Marketing'
      ]
    },
    {
      categoryTitle: 'Conversión, Tiendas & Embudos',
      icon: ShoppingBag,
      items: [
        'Landing Pages',
        'Embudos de Venta',
        'Tiendas en Línea',
        'Catálogos Digitales',
        'Menús Digitales',
        'Tarjetas Digitales',
        'Link in Bio',
        'Portafolios Profesionales'
      ]
    },
    {
      categoryTitle: 'Invitaciones Digitales & Eventos',
      icon: Sparkles,
      items: [
        'Invitaciones Digitales',
        'Invitaciones para Bodas',
        'Invitaciones para XV Años',
        'Invitaciones para Cumpleaños',
        'Invitaciones para Bautizos',
        'Invitaciones para Eventos Corporativos'
      ]
    },
    {
      categoryTitle: 'SEO Local, Mapas & Autoridad',
      icon: MapPin,
      items: [
        'Optimización SEO Local',
        'Google Business Profile',
        'Posicionamiento en Google Maps'
      ]
    },
    {
      categoryTitle: 'Producción Multimedia & Diseño',
      icon: Video,
      items: [
        'Edición de Video',
        'Diseño Gráfico',
        'Presentaciones Corporativas',
        'Branding para Empresas',
        'Logotipos',
        'Manuales de Marca'
      ]
    },
    {
      categoryTitle: 'Automatización, Chatbots & Consultoría',
      icon: Cpu,
      items: [
        'Automatización de WhatsApp',
        'Chatbots',
        'Automatización de Procesos',
        'Consultoría Tecnológica',
        'Transformación Digital'
      ]
    }
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return Cpu;
      case 'Globe': return Globe;
      case 'Smartphone': return Smartphone;
      case 'Workflow': return Workflow;
      case 'Sparkles': return Sparkles;
      default: return TrendingUp;
    }
  };

  const filteredServices = services.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesQuery = 
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="services" className="py-28 relative overflow-hidden bg-[#030712] border-y border-cyan-500/15">
      {/* Subtle atmospheric light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Agencia Integral de Tecnología & Soluciones Digitales</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Ingeniería y soluciones{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
                para cada escala.
              </span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm font-light leading-relaxed max-w-md"
          >
            Desde desarrollos empresariales corporativos hasta soluciones digitales especializadas para emprendedores y clientes particulares.
          </motion.p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-12 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                aria-label={`Filtrar por ${cat.label}`}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,210,255,0.35)]'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar servicio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar servicio tecnológico"
              className="w-full bg-slate-900/60 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>
        </div>

        {/* Compact Principal Services Grid (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {filteredServices.map((service, idx) => {
            const Icon = getIconComponent(service.iconName);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group rounded-2xl bg-slate-900/40 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Image container with fixed aspect ratio */}
                  <div className="relative w-full h-44 overflow-hidden bg-slate-950">
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-slate-950/80 border border-cyan-400/40 backdrop-blur-md flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4 text-cyan-300" />
                    </div>

                    {service.featured && (
                      <span className="absolute top-3 right-3 bg-cyan-400 text-slate-950 font-bold text-[9px] uppercase px-2 py-0.5 rounded-full shadow">
                        Destacado
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[11px] text-cyan-400 font-mono mb-2">
                      <span className="uppercase tracking-wider">{service.category}</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        {service.deliverTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 text-xs font-light leading-relaxed mb-4 line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalService(service)}
                    aria-label={`Ver detalles de ${service.title}`}
                    className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-white transition text-center cursor-pointer"
                  >
                    Detalles
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    aria-label={`Diagnóstico para ${service.title}`}
                    className="py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-[11px] transition flex items-center gap-1.5 cursor-pointer shadow"
                  >
                    <span>Diagnóstico</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Specialized Services Section: "También somos especialistas en..." */}
        <div className="pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Soluciones Dedicadas & Versátiles</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              También somos especialistas en...
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Soluciones digitales enfocadas en resultados rápidos, branding impecable y experiencias memorables para cada tipo de proyecto o negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedGroups.map((group, idx) => {
              const GroupIcon = group.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-2xl bg-slate-900/30 border border-white/10 p-6 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/30 transition-all group shadow-lg"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow group-hover:scale-110 transition-transform">
                        <GroupIcon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {group.categoryTitle}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {group.items.map((item, itemIdx) => (
                        <button
                          key={itemIdx}
                          onClick={() => onSelectServiceForQuote(item)}
                          aria-label={`Diagnóstico para ${item}`}
                          className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/15 border border-white/5 hover:border-cyan-500/30 text-[11px] text-slate-200 hover:text-cyan-200 transition font-mono cursor-pointer flex items-center gap-1.5 group/btn"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/btn:scale-125 transition-transform" />
                          <span>{item}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Entrega rápida</span>
                    <button 
                      onClick={() => onSelectServiceForQuote(group.categoryTitle)}
                      className="text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <span>Diagnóstico de área</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Detailed Service Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#0A1224] border border-cyan-500/30 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-[0_0_80px_rgba(0,210,255,0.25)] text-left"
            >
              <button
                onClick={() => setActiveModalService(null)}
                aria-label="Cerrar modal"
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
                  {activeModalService.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Entrega estimada: {activeModalService.deliverTime}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                {activeModalService.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {activeModalService.fullDesc}
              </p>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-widest font-mono mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Beneficios Clave</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.benefits.map((b, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-widest font-mono mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Entregables del Servicio</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalService.deliverables.map((d, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-200 text-xs font-mono">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectServiceForQuote(title);
                  }}
                  aria-label={`Iniciar diagnóstico para ${activeModalService.title}`}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 hover:from-cyan-300 hover:to-blue-500 text-white font-bold text-xs shadow-[0_0_25px_rgba(0,210,255,0.35)] transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Iniciar Diagnóstico para este Servicio</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
});
