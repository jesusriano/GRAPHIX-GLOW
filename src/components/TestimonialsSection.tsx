import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial, ClientLogo } from '../types';
import { OptimizedImage } from './OptimizedImage';
import { 
  Sparkles, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Building2,
  Activity,
  Coins,
  Building,
  Truck,
  Cpu,
  GraduationCap
} from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  clientLogos?: ClientLogo[];
  isLoading?: boolean;
}


export const TestimonialsSection: React.FC<TestimonialsSectionProps> = React.memo(({
  testimonials = [],
  clientLogos = [],
  isLoading = false
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (isLoading || testimonials.length === 0) {
    return <TestimonialsSkeleton />;
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  const getClientIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Coins': return <Coins className="w-5 h-5" />;
      case 'Building': return <Building className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#030712]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Confianza Comprobada</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Lo que Dicen Nuestros{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 drop-shadow-[0_0_15px_rgba(0,210,255,0.4)]">
              Clientes Líderes
            </span>
          </h2>

          <p className="text-slate-300 font-light text-base sm:text-lg">
            Resultados reales en crecimiento, eficiencia operativa y retorno de inversión.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-blue-950/40 to-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_50px_rgba(0,102,255,0.2)] relative"
            >
              <Quote className="w-12 h-12 text-cyan-500/20 absolute top-6 right-8" />

              {/* Star rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              {/* Feedback text */}
              <p className="text-lg sm:text-xl text-slate-100 font-light italic leading-relaxed mb-8">
                "{current.comment}"
              </p>

              {/* User details */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <OptimizedImage
                  src={current.avatar}
                  alt={current.clientName}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,210,255,0.4)]"
                />
                <div>
                  <h4 className="text-base font-bold text-white">{current.clientName}</h4>
                  <p className="text-xs text-cyan-300 font-mono">
                    {current.role} • {current.company}
                  </p>
                  <span className="text-[10px] text-slate-400">Servicio: {current.serviceUsed}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-slate-400">
              {currentIndex + 1} / {testimonials.length}
            </span>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Client Logos Grid - Colorful & Vibrant */}
        <div className="text-center pt-8 border-t border-white/10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-10">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Empresas e Instituciones que Confían en Graphix Glow</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientLogos.map((client) => (
              <div
                key={client.id}
                className={`group px-6 py-5 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 border border-white/10 ${client.borderColor || 'hover:border-cyan-500/50'} backdrop-blur-md transition-all duration-300 ${client.glowColor || 'hover:shadow-[0_0_25px_rgba(0,210,255,0.3)]'} flex items-center justify-between gap-4 cursor-default relative overflow-hidden`}
              >
                <div className="flex items-center gap-3.5 text-left">
                  <div className={`p-2 rounded-xl border ${client.iconBg || 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'} group-hover:scale-105 transition-transform duration-300 shrink-0 w-12 h-12 flex items-center justify-center overflow-hidden bg-slate-950`}>
                    {client.logoUrl ? (
                      <OptimizedImage
                        src={client.logoUrl}
                        alt={client.name}
                        width={48}
                        height={48}
                        mobileWidth={100}
                        desktopWidth={200}
                        sizes="48px"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    ) : (
                      getClientIcon(client.iconName)
                    )}
                  </div>
                  <div>
                    <h4 className={`text-base font-extrabold ${client.textColor || 'text-white'} tracking-tight`}>
                      {client.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
                      {client.industry}
                    </span>
                  </div>
                </div>

                {client.badgeBg && (
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${client.badgeBg} shrink-0`}>
                    Verificado
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
