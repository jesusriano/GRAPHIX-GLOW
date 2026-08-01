import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Zap, 
  ChevronRight, 
  ShieldCheck, 
  TrendingUp, 
  Code2 
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { AiHolographicCore } from './AiHolographicCore';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenPortfolio: () => void;
  onOpenAiChat: () => void;
}

export const Hero: React.FC<HeroProps> = React.memo(({
  onOpenQuote,
  onOpenPortfolio,
  onOpenAiChat
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  const x1 = useTransform(smoothX, [-600, 600], [-10, 10]);
  const y1 = useTransform(smoothY, [-600, 600], [-10, 10]);
  const x2 = useTransform(smoothX, [-600, 600], [-18, 18]);
  const y2 = useTransform(smoothY, [-600, 600], [-18, 18]);

  const lastMoveRef = React.useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const now = Date.now();
    if (now - lastMoveRef.current < 25) return; // Throttle to 40fps
    lastMoveRef.current = now;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen mt-[-6vh] sm:mt-0 pt-20 sm:pt-32 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Radial Glow Spheres */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-indigo-600/15 rounded-full blur-3xl pointer-events-none"
      />
      <div
        className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-gradient-to-br from-indigo-500/20 via-purple-600/15 to-cyan-500/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Subtle Geometric SVG Background Pattern Layer */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none overflow-hidden flex items-center justify-center">
        <div
          className="w-[1200px] h-[1200px]"
        >
          <svg className="w-full h-full text-cyan-400" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-pattern)" />
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.3" />
            <path d="M 50 0 L 50 100 M 0 50 L 100 50" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 3" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Mobile-only compact Holographic AI Core positioned at the very top */}
        <div className="w-full flex justify-center -mt-6 mb-2 lg:hidden">
          <div className="w-full max-w-[160px]">
            <AiHolographicCore onOpenAiChat={onOpenAiChat} />
          </div>
        </div>

        {/* Main Split Grid (Left Content + Right Holographic AI Nucleus) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-16">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Top Floating Pill Tag */}
            <motion.div
              style={{ x: x1, y: y1 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs md:text-sm font-mono backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,210,255,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Agencia de Transformación & Crecimiento Digital</span>
            </motion.div>

            {/* Main Title with Elegant Proportion & Shimmer Accent */}
            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6"
            >
              <motion.span
                style={{ x: x2, y: y2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="block animate-shimmer-text"
              >
                Impulsamos el{' '}
                <span className="inline-block relative">
                  <span className="animate-shimmer-text drop-shadow-[0_0_35px_rgba(0,210,255,0.6)] font-black">
                    crecimiento real
                  </span>
                  <span className="absolute -inset-1 bg-cyan-500/20 blur-xl -z-10 rounded-2xl opacity-60 pointer-events-none" />
                </span>{' '}
                de tu empresa con <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent font-black">tecnología, diseño & marketing</span>
              </motion.span>
            </motion.h1>

            {/* Concise Subtitle with High Readability */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl"
            >
              Desarrollamos páginas web de alto impacto, plataformas a medida, campañas de captación y estrategias digitales optimizadas con IA para acelerar tus ventas y consolidar tu marca.
            </motion.p>

            {/* Premium Animated CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8"
            >
              {/* Primary Glowing Button with Shimmer Sweep */}
              <button
                onClick={onOpenQuote}
                className="relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 text-white font-bold text-base shadow-[0_0_35px_rgba(0,180,255,0.45)] hover:shadow-[0_0_55px_rgba(0,210,255,0.8)] hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
              >
                {/* Shimmer Light Reflection Pass */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Sparkles className="w-5 h-5 text-cyan-200 group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">Solicitar Cotización</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>

              {/* Secondary Glassmorphism Button */}
              <button
                onClick={onOpenPortfolio}
                className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-semibold text-base border border-cyan-500/30 backdrop-blur-md transition-all hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,210,255,0.25)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ver Portafolio</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>
            </motion.div>


          </div>

          {/* Right Column: Spectacular Holographic AI Core Centerpiece */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
            <motion.div
              style={{ x: x1, y: y1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="w-full flex justify-center"
            >
              <AiHolographicCore onOpenAiChat={onOpenAiChat} />
            </motion.div>
          </div>
        </div>

        {/* Feature Badges Grid with Animated Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
        >
          <motion.div 
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md flex flex-col items-center justify-center text-center group hover:border-cyan-400/60 transition shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
              <AnimatedCounter value={150} prefix="+" />
            </div>
            <span className="text-xs text-slate-300 font-medium">Proyectos Exitosos</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md flex flex-col items-center justify-center text-center group hover:border-cyan-400/60 transition shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
              <AnimatedCounter value={100} suffix="/100" />
            </div>
            <span className="text-xs text-slate-300 font-medium">Core Web Vitals</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md flex flex-col items-center justify-center text-center group hover:border-cyan-400/60 transition shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
              <AnimatedCounter value={300} prefix="+" suffix="%" />
            </div>
            <span className="text-xs text-slate-300 font-medium">ROI Promedio</span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md flex flex-col items-center justify-center text-center group hover:border-cyan-400/60 transition shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
              <span>24/7</span>
            </div>
            <span className="text-xs text-slate-300 font-medium">Agentes de IA Activos</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

