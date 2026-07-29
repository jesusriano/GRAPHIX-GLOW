import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Zap, 
  ShieldCheck, 
  ChevronRight, 
  TrendingUp, 
  Code2, 
  CheckCircle2 
} from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenPortfolio: () => void;
  onOpenAiChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuote,
  onOpenPortfolio,
  onOpenAiChat
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Top Floating Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs md:text-sm font-mono backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,210,255,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <Zap className="w-4 h-4 text-cyan-400" />
          <span>Agencia de Transformación Digital & IA de Próxima Generación</span>
        </motion.div>

        {/* Main Title with Shimmer Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mb-6 relative group"
        >
          Transformamos empresas tradicionales en{' '}
          <span className="inline-block relative">
            <span className="animate-shimmer-text drop-shadow-[0_0_35px_rgba(0,210,255,0.6)] font-black">
              negocios digitales impulsados por IA
            </span>
            <span className="absolute -inset-1 bg-cyan-500/20 blur-xl -z-10 rounded-2xl opacity-60 pointer-events-none" />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-slate-300 max-w-3xl font-light leading-relaxed mb-10"
        >
          Diseño web de ultra lujo, aplicaciones móviles nativas, automatización empresarial con agentes de IA y estrategias de marketing acelerado diseñadas para posicionar tu marca como líder indiscutible.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-16"
        >
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 text-white font-bold text-base shadow-[0_0_40px_rgba(0,180,255,0.5)] hover:shadow-[0_0_60px_rgba(0,210,255,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 text-cyan-200 group-hover:rotate-12 transition-transform" />
            <span>Solicitar Cotización</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenPortfolio}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-base border border-cyan-500/30 backdrop-blur-md transition-all hover:border-cyan-400 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,210,255,0.1)]"
          >
            <span>Ver Portafolio</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </button>
        </motion.div>

        {/* Feature Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl"
        >
          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md flex flex-col items-center justify-center text-center group hover:border-cyan-400/60 transition shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <span className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
              +150
            </span>
            <span className="text-xs text-slate-300 font-medium">Proyectos Exitosos</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md flex flex-col items-center justify-center text-center group hover:border-cyan-400/60 transition shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <span className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
              100/100
            </span>
            <span className="text-xs text-slate-300 font-medium">Core Web Vitals</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md flex flex-col items-center justify-center text-center group hover:border-cyan-400/60 transition shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <span className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
              +300%
            </span>
            <span className="text-xs text-slate-300 font-medium">ROI Promedio</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md flex flex-col items-center justify-center text-center group hover:border-cyan-400/60 transition shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <span className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
              24/7
            </span>
            <span className="text-xs text-slate-300 font-medium">Agentes de IA Activos</span>
          </motion.div>
        </motion.div>

        {/* Interactive Banner Triggering AI Assistant */}
        <motion.div
          onClick={onOpenAiChat}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.01, y: -2 }}
          className="mt-12 p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-blue-950/60 to-slate-950/80 border border-cyan-500/40 backdrop-blur-xl flex items-center justify-between gap-4 cursor-pointer hover:border-cyan-300 transition shadow-[0_0_35px_rgba(0,210,255,0.2)] max-w-3xl w-full text-left group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Bot className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-xs font-mono text-cyan-300 font-semibold uppercase tracking-wider flex items-center gap-2">
                <span>Asistente Virtual Maestro AI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </p>
              <p className="text-sm text-slate-200 font-light">
                ¿Necesitas orientación instantánea? Conversa con nuestra IA para diseñar tu proyecto.
              </p>
            </div>
          </div>
          <span className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs shrink-0 flex items-center gap-1 shadow-lg group-hover:scale-105 transition-transform">
            <span>Probar IA</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </motion.div>
      </div>
    </section>
  );
};
