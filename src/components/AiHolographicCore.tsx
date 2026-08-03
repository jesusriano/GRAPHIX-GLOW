import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Bot, Cpu, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

interface AiHolographicCoreProps {
  onOpenAiChat: () => void;
}

export const AiHolographicCore: React.FC<AiHolographicCoreProps> = React.memo(({ onOpenAiChat }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = false; // start false
    let width = 0;
    let height = 0;

    const updateDimensions = () => {
      if (!canvas) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w > 0 && h > 0) {
        width = canvas.width = w * window.devicePixelRatio;
        height = canvas.height = h * window.devicePixelRatio;
      }
    };

    updateDimensions();

    const handleResize = () => {
      requestAnimationFrame(() => {
        updateDimensions();
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        }
      });
      // Fallback timeouts for mobile orientation reflow delays
      setTimeout(updateDimensions, 100);
      setTimeout(updateDimensions, 300);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mousePos.current.targetX = (x / (rect.width / 2)) * 0.5;
      mousePos.current.targetY = (y / (rect.height / 2)) * 0.5;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // IntersectionObserver to pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wasVisible = isVisible;
          isVisible = entry.isIntersecting;
          if (isVisible && !wasVisible) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0 }
    );
    
    // Delay observing to allow LCP
    const startTimeout = setTimeout(() => {
      observer.observe(canvas);
    }, 100);

    // 3D Particles Swarm
    const particleCount = 35;
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      speedZ: number;
      baseAngle: number;
      orbitDistance: number;
    }> = [];

    const colors = ['#06b6d4', '#3b82f6', '#6366f1', '#38bdf8', '#a855f7', '#ffffff'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: 0,
        y: 0,
        z: (Math.random() - 0.5) * 200,
        radius: Math.random() * 2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.015,
        speedY: (Math.random() - 0.5) * 0.015,
        speedZ: (Math.random() - 0.5) * 0.02,
        baseAngle: Math.random() * Math.PI * 2,
        orbitDistance: 80 + Math.random() * 110,
      });
    }

    // Preallocated buffer for projected particle calculations to avoid GC thrashing
    const projectedParticles: Array<{ x: number; y: number; radius: number; color: string }> = Array.from(
      { length: particleCount },
      () => ({ x: 0, y: 0, radius: 0, color: '' })
    );

    let time = 0;
    let lastRenderTime = 0;
    let initialStartTime = 0;
    const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 1024;

    const render = (timeMs: number) => {
      if (!isVisible) return;
      if (!initialStartTime) initialStartTime = timeMs;

      animationFrameId = requestAnimationFrame(render);

      // During initial load on mobile (first 3.5s), throttle to 30 FPS (~33ms interval)
      // to reduce CPU competition during LCP rendering, then restore automatically.
      const isStabilizing = (timeMs - initialStartTime) < 3500;
      const targetInterval = (isMobileDevice && isStabilizing) ? 33 : (isMobileDevice ? 24 : 16);

      if (timeMs - lastRenderTime < targetInterval) return;
      lastRenderTime = timeMs;

      time += 0.025;

      // Smooth mouse damping
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mousePos.current.x * 30;
      const centerY = height / 2 + mousePos.current.y * 30;
      const baseRadius = Math.min(width, height) * 0.17;

      // 1. Outer Atmosphere Glow
      const atmosphereGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        baseRadius * 0.2,
        centerX,
        centerY,
        baseRadius * 1.8
      );
      atmosphereGlow.addColorStop(0, 'rgba(6, 182, 212, 0.35)');
      atmosphereGlow.addColorStop(0.4, 'rgba(59, 130, 246, 0.18)');
      atmosphereGlow.addColorStop(0.8, 'rgba(99, 102, 241, 0.06)');
      atmosphereGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = atmosphereGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // 2. 3D Rotating Holographic Rings
      const ringConfigs = [
        { radius: baseRadius * 1.25, tiltX: 0.6 + mousePos.current.y * 0.3, tiltY: time * 0.8 + mousePos.current.x * 0.3, color: 'rgba(6, 182, 212, 0.6)', dash: [15, 25] },
        { radius: baseRadius * 1.45, tiltX: -0.4 - mousePos.current.y * 0.2, tiltY: -time * 0.5, color: 'rgba(59, 130, 246, 0.5)', dash: [8, 12] },
        { radius: baseRadius * 1.65, tiltX: 0.8, tiltY: time * 0.3, color: 'rgba(99, 102, 241, 0.4)', dash: [40, 15] },
        { radius: baseRadius * 1.05, tiltX: -0.8, tiltY: time * 1.2, color: 'rgba(56, 189, 248, 0.7)', dash: [6, 6] },
      ];

      for (let r = 0; r < ringConfigs.length; r++) {
        const ring = ringConfigs[r];
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(ring.tiltY);
        ctx.scale(1, Math.cos(ring.tiltX));

        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.5;
        ctx.setLineDash(ring.dash);

        ctx.beginPath();
        ctx.arc(0, 0, ring.radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
      }

      // 3. Central AI Sphere Nucleus
      const pulseFactor = 1 + Math.sin(time * 3) * 0.08;
      const coreRadius = baseRadius * 0.55 * pulseFactor;

      const coreGlow = ctx.createRadialGradient(
        centerX - coreRadius * 0.3,
        centerY - coreRadius * 0.3,
        coreRadius * 0.05,
        centerX,
        centerY,
        coreRadius
      );
      coreGlow.addColorStop(0, '#ffffff');
      coreGlow.addColorStop(0.25, '#22d3ee');
      coreGlow.addColorStop(0.65, '#2563eb');
      coreGlow.addColorStop(1, 'rgba(15, 23, 42, 0.9)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = coreGlow;
      ctx.fill();

      ctx.strokeStyle = 'rgba(6, 182, 212, 0.9)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 4. Orbiting Neural Network Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.baseAngle += 0.012;
        const angle = p.baseAngle;
        const x3d = Math.cos(angle) * p.orbitDistance;
        const z3d = Math.sin(angle) * p.orbitDistance;
        const y3d = p.y + Math.sin(time * 1.5 + p.orbitDistance) * 12;

        const scale = 250 / (250 + z3d);
        const projX = centerX + x3d * scale;
        const projY = centerY + y3d * scale;
        const projRadius = Math.max(0.6, p.radius * scale * (1 + Math.sin(time * 4 + p.baseAngle) * 0.2));

        const proj = projectedParticles[i];
        proj.x = projX;
        proj.y = projY;
        proj.radius = projRadius;
        proj.color = p.color;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(1, Math.max(0.3, scale - 0.1));
        ctx.beginPath();
        ctx.arc(projX, projY, projRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Fast Neural Connection Lines
      for (let i = 0; i < particleCount; i++) {
        const p1 = projectedParticles[i];
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = projectedParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 3600) { // 60px squared
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / 60) * 0.4;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            if ((i + j) % 6 === 0) {
              const sparkProgress = (time * 1.5 + i * 0.3) % 1;
              const sparkX = p1.x + (p2.x - p1.x) * sparkProgress;
              const sparkY = p1.y + (p2.y - p1.y) * sparkProgress;
              ctx.fillStyle = '#ffffff';
              ctx.globalAlpha = 1;
              ctx.beginPath();
              ctx.arc(sparkX, sparkY, 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // 5. Digital Data Streams
      const streamCount = 5;
      ctx.fillStyle = '#38bdf8';
      for (let s = 0; s < streamCount; s++) {
        const streamAngle = (s * Math.PI * 2) / streamCount + time * 0.4;
        const startDist = coreRadius;
        const endDist = baseRadius * 1.5;
        const currentDist = startDist + ((time * 60 + s * 30) % (endDist - startDist));

        const sx = centerX + Math.cos(streamAngle) * currentDist;
        const sy = centerY + Math.sin(streamAngle) * currentDist;

        ctx.globalAlpha = 1 - (currentDist - startDist) / (endDist - startDist);
        ctx.beginPath();
        ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    // Initial requestAnimationFrame call removed to prevent LCP blocking

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(startTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[560px] mx-auto flex items-center justify-center select-none">
      {/* Dynamic Background Glow Halo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-indigo-600/15 rounded-full blur-2xl pointer-events-none" />

      {/* Main Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 block pointer-events-auto cursor-pointer"
        onClick={onOpenAiChat}
        title="Núcleo de IA Interactivo - Haz clic para conversar"
      />
    </div>
  );
});

