import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  TrendingUp, 
  Award, 
  Sparkles, 
  ExternalLink, 
  X, 
  Building2, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Target, 
  Zap, 
  BarChart3,
  Star
} from 'lucide-react';

export interface SuccessStory {
  id: string;
  clientName: string;
  category: string;
  logoSvg: React.ReactNode;
  objective: string;
  results: string[];
  services: string[];
  roiMetric: string;
  growthPercentage: string;
  accentGradient: string;
  badgeBg: string;
  beforeAfter: {
    before: string;
    after: string;
  };
  testimonialQuote?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'riaseal',
    clientName: 'RIASEAL ASOCIADOS',
    category: 'Despacho Contable, Legal y Migratorio',
    logoSvg: (
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900/60 to-slate-900 border border-blue-400/40 p-3 flex flex-col items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
        <div className="flex items-center gap-1 text-cyan-400 font-extrabold font-mono text-xl tracking-tighter">
          <span>R</span>
          <span className="text-blue-400">A</span>
        </div>
        <span className="text-[8px] font-mono uppercase text-slate-300 tracking-widest mt-0.5">Asociados</span>
      </div>
    ),
    objective: 'Desarrollar una presencia digital profesional que transmitiera confianza institucional y facilitara el contacto directo con nuevos clientes corporativos.',
    results: [
      'Sitio web corporativo',
      'Optimización para dispositivos móviles',
      'Mayor presencia en Google',
      'Incremento de solicitudes de contacto'
    ],
    services: ['Sitio Web', 'Branding', 'SEO', 'Marketing Digital', 'Estrategia Digital'],
    roiMetric: '+210% Solicitudes de Asesoría',
    growthPercentage: '+210%',
    accentGradient: 'from-cyan-500 via-blue-600 to-indigo-600',
    badgeBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
    beforeAfter: {
      before: 'Presencia web informal con baja visibilidad orgánica en buscadores y captación 100% por recomendación de boca en boca.',
      after: 'Plataforma corporativa de alto impacto posicionada en los primeros resultados de Google, duplicando la entrada mensual de clientes.'
    },
    testimonialQuote: 'GraphixGlow logró traducir nuestra complejidad legal en una experiencia web sumamente clara y confiable. El incremento de consultas formales fue inmediato.',
    testimonialAuthor: 'Lic. Roberto Riaseal',
    testimonialRole: 'Socio Fundador'
  },
  {
    id: 'essenya',
    clientName: 'ESSENYA',
    category: 'Spa de masajes a domicilio',
    logoSvg: (
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-950/60 via-slate-900 to-yellow-950/40 border border-amber-400/40 p-3 flex flex-col items-center justify-center shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-transform duration-300">
        <div className="w-8 h-8 rounded-full border border-amber-300/60 flex items-center justify-center text-amber-300 font-serif text-lg font-bold">
          E
        </div>
        <span className="text-[8px] font-mono uppercase text-amber-200/80 tracking-widest mt-1">Luxury Spa</span>
      </div>
    ),
    objective: 'Crear una identidad digital premium y un sistema de reservas moderno para automatizar la agenda de terapeutas y elevar el valor percibido.',
    results: [
      'Página web de lujo',
      'Sistema de reservas',
      'Diseño optimizado para conversión',
      'Mayor confianza de los clientes'
    ],
    services: ['Página Web de Lujo', 'Branding', 'Sistema de Reservas', 'Diseño UI/UX', 'Marketing Digital'],
    roiMetric: '+340% Reservas Confirmadas',
    growthPercentage: '+340%',
    accentGradient: 'from-amber-400 via-yellow-500 to-orange-500',
    badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
    beforeAfter: {
      before: 'Proceso de agendamiento manual por mensajería con pérdidas de clientes en horarios fuera de atención.',
      after: 'Plataforma automatizada 24/7 donde los clientes eligen horario, servicio y terapeuta en menos de 60 segundos.'
    },
    testimonialQuote: 'La estética impecable y la velocidad del nuevo sistema elevaron la marca a un nivel exclusivo. Ahora agendamos servicios incluso mientras dormimos.',
    testimonialAuthor: 'Directora de Operaciones',
    testimonialRole: 'Essenya Wellness'
  },
  {
    id: 'floreria-nas-lizz',
    clientName: 'FLORERÍA NAS & LIZZ',
    category: 'Florería en Ciudad de México y Estado de México',
    logoSvg: (
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-950/60 via-slate-900 to-rose-950/40 border border-rose-400/40 p-3 flex flex-col items-center justify-center shadow-lg shadow-rose-500/10 group-hover:scale-105 transition-transform duration-300">
        <div className="text-rose-300 font-serif font-bold text-base tracking-tight flex items-center gap-0.5">
          <span>N</span>
          <span className="text-xs text-rose-400">&</span>
          <span>L</span>
        </div>
        <span className="text-[7px] font-mono uppercase text-rose-200/80 tracking-widest mt-0.5">Floral Studio</span>
      </div>
    ),
    objective: 'Impulsar las ventas directas de arreglos florales mediante una presencia digital elegante, ágil y fácil de usar en toda la zona metropolitana.',
    results: [
      'Catálogo digital',
      'Optimización para pedidos',
      'Diseño responsivo',
      'Mayor alcance local'
    ],
    services: ['Catálogo Digital', 'Diseño Web Responsivo', 'SEO Local', 'Marketing Digital', 'Optimización de Pedidos'],
    roiMetric: '+280% Pedidos Digitales',
    growthPercentage: '+280%',
    accentGradient: 'from-rose-400 via-pink-500 to-red-500',
    badgeBg: 'bg-rose-500/10 border-rose-500/30 text-rose-300',
    beforeAfter: {
      before: 'Ventas limitadas a clientes locales de mostrador y pedidos manuales sin catálogo visual unificado.',
      after: 'Experiencia e-commerce ágil con catálogo interactivo y motor de ubicación para envíos en CDMX y Estado de México.'
    },
    testimonialQuote: 'El catálogo web es rápido y hermoso. Logramos expandir nuestra cobertura a todo el Estado de México con un incremento constante de ventas.',
    testimonialAuthor: 'Gerencia General',
    testimonialRole: 'Florería Nas & Lizz'
  },
  {
    id: 'spa-rio-cristales',
    clientName: 'SPA RÍO CRISTALES',
    category: 'Spa de masajes a domicilio',
    logoSvg: (
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-slate-900 to-teal-950/40 border border-emerald-400/40 p-3 flex flex-col items-center justify-center shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform duration-300">
        <div className="text-emerald-300 font-serif font-bold text-lg tracking-wider">
          R C
        </div>
        <span className="text-[7px] font-mono uppercase text-emerald-200/80 tracking-widest mt-0.5">Spa Cristales</span>
      </div>
    ),
    objective: 'Posicionar la marca como la opción premium por excelencia para servicios de bienestar y masajes de lujo a domicilio.',
    results: [
      'Imagen profesional',
      'Experiencia móvil optimizada',
      'Captación de clientes',
      'Mayor presencia digital'
    ],
    services: ['Identidad Corporativa', 'Página Web Móvil', 'SEO Local', 'Estrategia Digital', 'Marketing Digital'],
    roiMetric: '+190% Captación Digital',
    growthPercentage: '+190%',
    accentGradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    beforeAfter: {
      before: 'Falta de uniformidad gráfica y baja penetración en segmentos corporativos y residenciales de alto valor.',
      after: 'Identidad sofisticada y web móvil ultra-rápida que transmite confianza inmediata en clientes exigentes.'
    },
    testimonialQuote: 'El rediseño total de la marca y nuestra web nos permitió ingresar al segmento corporativo y quintuplicar nuestro alcance digital.',
    testimonialAuthor: 'Fundador & Director',
    testimonialRole: 'Spa Río Cristales'
  }
];

interface SuccessStoriesSectionProps {
  onOpenQuote?: (serviceName?: string) => void;
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({ onOpenQuote }) => {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  return (
    <section id="casos-de-exito" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Casos de Éxito & Impacto de Negocio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Resultados Reales en{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 drop-shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              Crecimiento Digital
            </span>
          </h2>

          <p className="text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            Descubre cómo hemos transformado empresas de diversos sectores combinando desarrollo web, estrategia de branding, marketing digital y optimización de conversión.
          </p>
        </div>

        {/* Success Stories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SUCCESS_STORIES.map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,210,255,0.15)] flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle Corner Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-500" />

              <div>
                {/* 1. LOGO (centered on top) */}
                <div className="flex justify-center mb-6">
                  {story.logoSvg}
                </div>

                {/* 2. Client Name */}
                <h3 className="text-xl sm:text-2xl font-black text-white text-center tracking-tight mb-2">
                  {story.clientName}
                </h3>

                {/* 3. Category Badge */}
                <div className="flex justify-center mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${story.badgeBg}`}>
                    {story.category}
                  </span>
                </div>

                {/* 4. Objective / Breve Descripción */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                    Objetivo Estratégico
                  </span>
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {story.objective}
                  </p>
                </div>

                {/* 5. Bullet Results & Deliverables */}
                <div className="mb-6 space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-2">
                    Resultados & Entregables Clave
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {story.results.map((res, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-200 text-xs font-medium bg-slate-900/40 p-2 rounded-xl border border-slate-800/60">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {story.services.map((srv, i) => (
                    <span key={i} className="text-[10px] font-mono bg-slate-900 text-slate-400 px-2.5 py-1 rounded-md border border-slate-800">
                      ✓ {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer: ROI Metric & Action Button */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Impacto Medible</span>
                    <span className="text-sm font-bold text-cyan-300 font-mono">{story.roiMetric}</span>
                  </div>
                </div>

                {/* 7. Action Button */}
                <button
                  onClick={() => setSelectedStory(story)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer group-hover:bg-cyan-500/10"
                >
                  <span>Conocer Caso de Éxito</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Strategy Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-950 to-indigo-950/60 border border-cyan-500/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full inline-block mb-2">
              Transformación Digital a Medida
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              ¿Quieres lograr resultados similares en tu empresa?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light max-w-2xl">
              Analizamos tu presencia actual y diseñamos una estrategia integral de desarrollo, diseño y marketing enfocado en retorno de inversión.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote && onOpenQuote('Transformación Digital Integral')}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Solicitar Diagnóstico Estratégico</span>
          </button>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-950 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative my-8"
            >
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                {selectedStory.logoSvg}
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
                    Caso de Éxito // {selectedStory.category}
                  </span>
                  <h3 className="text-2xl font-black text-white">{selectedStory.clientName}</h3>
                </div>
              </div>

              <div className="space-y-6">
                {/* Growth Badge */}
                <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Crecimiento / ROI Medido</span>
                    <span className="text-xl font-bold font-mono text-cyan-300">{selectedStory.roiMetric}</span>
                  </div>
                  <span className="text-3xl font-black font-mono text-cyan-400">{selectedStory.growthPercentage}</span>
                </div>

                {/* Objective */}
                <div>
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">Desafío & Objetivo</h4>
                  <p className="text-slate-300 text-sm leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                    {selectedStory.objective}
                  </p>
                </div>

                {/* Before vs After */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/20">
                    <span className="text-xs font-mono text-red-400 uppercase block mb-1">Antes de GraphixGlow</span>
                    <p className="text-slate-300 text-xs leading-relaxed">{selectedStory.beforeAfter.before}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
                    <span className="text-xs font-mono text-emerald-400 uppercase block mb-1">Después de GraphixGlow</span>
                    <p className="text-slate-300 text-xs leading-relaxed">{selectedStory.beforeAfter.after}</p>
                  </div>
                </div>

                {/* Results Checklist */}
                <div>
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">Soluciones Implementadas</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedStory.results.map((res, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-200 text-xs font-medium bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote if available */}
                {selectedStory.testimonialQuote && (
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 relative">
                    <p className="text-slate-300 text-xs italic mb-2">"{selectedStory.testimonialQuote}"</p>
                    <span className="text-xs font-bold text-white block">{selectedStory.testimonialAuthor}</span>
                    <span className="text-[10px] text-slate-400 font-mono block">{selectedStory.testimonialRole}</span>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-slate-400 font-bold text-xs hover:text-white transition cursor-pointer"
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={() => {
                      setSelectedStory(null);
                      if (onOpenQuote) onOpenQuote(`Proyecto similar a ${selectedStory.clientName}`);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/30 hover:scale-105 transition flex items-center gap-2 cursor-pointer"
                  >
                    <span>Quiero este resultado para mi empresa</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
