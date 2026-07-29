import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Total animation runtime: ~1.7 seconds (1700ms)
    // 0ms - 1400ms: Light sweep beam travels left-to-right revealing live UI
    // 1400ms - 1700ms: Smooth overlay resolution & handover to page
    const completeTimer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 300);
    }, 1700);

    return () => clearTimeout(completeTimer);
  }, [onComplete]);

  // Generate subtle floating luminous blue particles riding along light beam path
  const particles = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    top: `${12 + (i * 6) % 75}%`,
    left: `${(i * 7.5) % 85}%`,
    size: 2 + (i % 3) * 1.5,
    delay: (i * 0.08) % 0.5,
    duration: 1.0 + (i % 3) * 0.4,
  }));

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] pointer-events-none select-none overflow-hidden font-sans"
        >
          {/* Dark Curtain Overlay with synchronized Left-to-Right Reveal Mask */}
          <motion.div
            initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
            animate={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
            transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="absolute inset-0 bg-[#030712] pointer-events-auto flex items-center justify-center"
          >
            {/* Ambient Deep Blue Glow behind the dark mask */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-950/90 to-[#030712]" />

            {/* Central Monogram Emblem - illuminates softly before light sweep */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: [0, 0.95, 0], scale: [0.9, 1.05, 1], y: [10, 0, -5] }}
              transition={{ duration: 1.2, times: [0, 0.45, 1], ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center justify-center text-center px-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-blue-900/40 backdrop-blur-xl border border-cyan-400/40 shadow-[0_0_50px_rgba(0,210,255,0.4)] flex items-center justify-center mb-3">
                <span className="text-xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-400">
                  JR
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-cyan-300/90 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>GRAPHIX GLOW</span>
              </div>
            </motion.div>
          </motion.div>

          {/* THE MAIN LIGHT SWEEP BEAM (HAZ DE LUZ AZUL PREMIUM) */}
          <motion.div
            initial={{ x: '-35vw', opacity: 0 }}
            animate={{ x: '120vw', opacity: [0, 1, 1, 0.8, 0] }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="absolute top-0 bottom-0 w-[38vw] -skew-x-[14deg] pointer-events-none z-20"
            style={{ willChange: 'transform' }}
          >
            {/* Outer Volumetric Atmospheric Blue Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/15 via-blue-600/30 via-cyan-400/20 to-transparent blur-2xl" />

            {/* Core Luminous Beam Body */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 via-cyan-300/80 via-white/95 via-cyan-300/80 via-blue-500/30 to-transparent blur-md shadow-[0_0_100px_#00D2FF,0_0_50px_#0066FF]" />

            {/* Ultra-Sharp Intense Luminous Center Streak */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-3 bg-gradient-to-b from-cyan-200 via-white to-blue-300 shadow-[0_0_30px_#FFFFFF,0_0_60px_#00D2FF]" />

            {/* Anamorphic Lens Flare Core & Horizontal Streaks */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
              {/* Radial Luminous Hotspot */}
              <div className="w-32 h-32 rounded-full bg-cyan-300/40 blur-xl shadow-[0_0_80px_#00D2FF]" />
              <div className="w-12 h-12 rounded-full bg-white blur-xs shadow-[0_0_40px_#FFFFFF]" />

              {/* Anamorphic Lens Flare Horizontal Ray */}
              <div className="absolute w-[600px] h-[2px] bg-gradient-to-r from-transparent via-cyan-300 via-white to-transparent shadow-[0_0_20px_#00D2FF]" />
              <div className="absolute w-[300px] h-[6px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent blur-sm" />
            </div>

            {/* Subtle Luminous Micro-Particles riding along beam path */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0, 0.9, 0],
                  scale: [0.5, 1.3, 0.8],
                  y: [-10, 10],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  position: 'absolute',
                  top: p.top,
                  left: p.left,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  borderRadius: '50%',
                  backgroundColor: '#E0F2FE',
                  boxShadow: '0 0 12px #00D2FF, 0 0 24px #0066FF',
                }}
              />
            ))}
          </motion.div>

          {/* Light Bloom Vignette Layer - soft blue bloom that clears gracefully */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.25, 0] }}
            transition={{ duration: 1.4, times: [0, 0.5, 1], ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/15 to-transparent pointer-events-none z-15 mix-blend-screen"
          />

          {/* Discrete Skip Button */}
          <button
            onClick={() => {
              setIsFinished(true);
              onComplete();
            }}
            className="absolute bottom-6 right-6 text-xs text-cyan-200/80 hover:text-white bg-slate-950/60 hover:bg-slate-900/90 px-4 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-400/60 backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer pointer-events-auto z-30 shadow-[0_0_20px_rgba(0,210,255,0.15)] group"
          >
            <span className="font-medium tracking-wide">Omitir</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

