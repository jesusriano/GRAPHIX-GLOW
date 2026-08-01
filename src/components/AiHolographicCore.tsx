import React from 'react';
import { Bot, Cpu, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

interface AiHolographicCoreProps {
  onOpenAiChat: () => void;
}

export const AiHolographicCore: React.FC<AiHolographicCoreProps> = React.memo(({ onOpenAiChat }) => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[560px] mx-auto flex items-center justify-center select-none">
      {/* Static Background Glow Halo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-indigo-600/10 rounded-full blur-2xl pointer-events-none" />

      {/* High-End Static Holographic Graphic Container */}
      <div 
        onClick={onOpenAiChat}
        title="Núcleo de IA Interactivo - Haz clic para conversar"
        className="relative z-10 w-full h-full flex items-center justify-center cursor-pointer group"
      >
        {/* Outer Static Rings */}
        <div className="absolute w-[80%] h-[80%] rounded-full border border-cyan-500/30 border-dashed pointer-events-none" />
        <div className="absolute w-[65%] h-[65%] rounded-full border border-blue-500/30 pointer-events-none" />
        <div className="absolute w-[50%] h-[50%] rounded-full border border-indigo-500/25 border-dashed pointer-events-none" />

        {/* Central Core Nucleus */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-slate-900 border border-cyan-400/50 shadow-[0_0_40px_rgba(6,182,212,0.3)] flex items-center justify-center transition-transform group-hover:scale-105">
          <div className="absolute inset-2 rounded-full bg-slate-950/80 flex flex-col items-center justify-center text-center p-4">
            <Bot className="w-10 h-10 text-cyan-400 mb-2" />
            <span className="text-xs font-mono font-bold text-white tracking-wider">IA CORE v4</span>
            <span className="text-[10px] font-mono text-cyan-300">Activo 24/7</span>
          </div>
        </div>

        {/* Floating Stat Badges */}
        <div className="absolute top-6 left-6 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 shadow-lg flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>99.9% Precisión</span>
        </div>

        <div className="absolute bottom-8 right-6 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-blue-500/30 text-[11px] font-mono text-blue-300 shadow-lg flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>Enterprise Ready</span>
        </div>
      </div>
    </div>
  );
});

AiHolographicCore.displayName = 'AiHolographicCore';
