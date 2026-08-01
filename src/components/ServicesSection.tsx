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
  Layers 
} from 'lucide-react';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectServiceForQuote: (serviceTitle: string) => void;
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
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#030712] via-[#091124] to-[#030712] border-y border-cyan-500/20">
      {/* High-Impact Vibrant Animated Background Elements */}
      <motion.div
        animate={{
          opacity: [0.35, 0.65, 0.35],
          scale: [1, 1.15, 1],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/30 via-blue-600/25 to-indigo-600/20 rounded-full blur-[150px] pointer-events-none -z-0"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1.1, 1, 1.1],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 right-10 w-[700px] h-[700px] bg-gradient-to-bl from-purple-600/25 via-indigo-600/25 to-cyan-500/30 rounded-full blur-[160px] pointer-events-none -z-0"
      />

      {/* Cybernetic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d2ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d2ff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestras Soluciones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Servicios Tecnológicos de{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 drop-shadow-[0_0_15px_rgba(0,210,255,0.4)]">
              Clase Mundial
            </span>
          </h2>

          <p className="text-slate-300 font-light text-base sm:text-lg">
            Desarrollamos soluciones integrales adaptadas a las necesidades específicas de tu empresa.
          </p>
        </motion.div>

        {/* Search & Category Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12"
        >
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(0,210,255,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar servicio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => {
            const Icon = getIconComponent(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl overflow-hidden transition-all duration-300 flex flex-col hover:shadow-[0_0_35px_rgba(0,210,255,0.2)]"
              >
                {/* Service Card Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent" />

                  {service.featured && (
                    <span className="absolute top-4 right-4 bg-cyan-500 text-slate-950 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full shadow-lg">
                      Más Solicitado
                    </span>
                  )}

                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-md flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-300" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-xs font-light leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Key Benefits snippet */}
                    <ul className="space-y-1.5 mb-6">
                      {service.benefits.slice(0, 2).map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition text-center"
                    >
                      Ver Detalles
                    </button>

                    <button
                      onClick={() => onSelectServiceForQuote(service.title)}
                      className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition flex items-center gap-1"
                    >
                      <span>Cotizar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detailed Service Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0A1224] border border-cyan-500/30 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-[0_0_50px_rgba(0,210,255,0.3)] text-left"
            >
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase">
                  {activeModalService.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Entrega: {activeModalService.deliverTime}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {activeModalService.title}
              </h3>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                {activeModalService.fullDesc}
              </p>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-white mb-3 uppercase font-mono tracking-wider text-cyan-300">
                  Beneficios Clave
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
                <h4 className="text-sm font-bold text-white mb-3 uppercase font-mono tracking-wider text-cyan-300">
                  Entregables Incluidos
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalService.deliverables.map((d, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-200 text-xs">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectServiceForQuote(title);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/30 hover:scale-[1.02] active:scale-98 transition flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Solicitar este Servicio Ahora</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
});
