import React, { useState } from 'react';
import brandLogoImg from '../assets/images/jr_graphixglow_logo_1785360293197.jpg';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = React.memo(({ size = 'md', showSubtitle = true }) => {
  const [imgError, setImgError] = useState(false);

  const sizeMap = {
    sm: { container: 'h-8 sm:h-9', icon: 'w-7 h-7 text-xs', title: 'text-base', sub: 'text-[8px]', img: 'h-7 sm:h-8' },
    md: { container: 'h-10 sm:h-12', icon: 'w-9 h-9 text-sm', title: 'text-lg', sub: 'text-[9px]', img: 'h-9 sm:h-11' },
    lg: { container: 'h-14 sm:h-16', icon: 'w-12 h-12 text-lg', title: 'text-2xl', sub: 'text-[11px]', img: 'h-13 sm:h-15' }
  };

  const currentSize = sizeMap[size];

  if (imgError || !brandLogoImg) {
    return (
      <div className={`flex items-center gap-2.5 select-none ${currentSize.container} group cursor-pointer`}>
        {/* 3D Crystal Geometric Monogram Shield (JR) */}
        <div className={`${currentSize.icon} rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 p-[1.5px] shadow-[0_0_20px_rgba(0,210,255,0.5)] group-hover:shadow-[0_0_30px_rgba(0,210,255,0.8)] transition-all duration-300 relative overflow-hidden flex-shrink-0`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <div className="w-full h-full bg-[#050C1A] rounded-[10px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,210,255,0.35),_transparent_70%)]" />
            <span className="font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-blue-400 drop-shadow-[0_0_8px_rgba(0,210,255,0.8)] relative z-10">
              JR
            </span>
          </div>
        </div>

        {/* Brand Typography in Crystalline Electric Blue */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1">
            <span className={`${currentSize.title} font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 drop-shadow-[0_0_12px_rgba(0,210,255,0.4)]`}>
              Graphix<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">Glow</span>
            </span>
          </div>
          {showSubtitle && (
            <span className={`${currentSize.sub} font-mono tracking-widest text-cyan-300/80 uppercase font-semibold`}>
              Digital Agency & AI
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 select-none ${currentSize.container} group cursor-pointer`}>
      <div className="relative flex items-center justify-center rounded-xl overflow-hidden p-1 bg-black/95 border border-cyan-500/40 shadow-[0_0_25px_rgba(0,210,255,0.4)] group-hover:shadow-[0_0_35px_rgba(0,210,255,0.8)] group-hover:border-cyan-300 transition-all duration-300">
        <img
          src={brandLogoImg}
          alt="JR GraphixGlow - Logo Oficial"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className={`${currentSize.img} w-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300 mix-blend-screen`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />
      </div>
    </div>
  );
});



