import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Bot, Cpu, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

interface AiHolographicCoreProps {
  onOpenAiChat: () => void;
}

export const AiHolographicCore: React.FC<AiHolographicCoreProps> = ({ onOpenAiChat }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mousePos.current.targetX = (x / (rect.width / 2)) * 0.5;
      mousePos.current.targetY = (y / (rect.height / 2)) * 0.5;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
    }

    // 3D Particles Swarm
    const particleCount = 70;
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

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse damping
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mousePos.current.x * 30;
      const centerY = height / 2 + mousePos.current.y * 30;
      const baseRadius = Math.min(width, height) * 0.17; // ~20% smaller as requested

      // 1. Draw Outer Glowing Atmosphere
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

      // 2. Draw 3D Rotating Holographic Rings
      const ringConfigs = [
        { radius: baseRadius * 1.25, tiltX: 0.6 + mousePos.current.y * 0.3, tiltY: time * 0.8 + mousePos.current.x * 0.3, color: 'rgba(6, 182, 212, 0.6)', dash: [15, 25] },
        { radius: baseRadius * 1.45, tiltX: -0.4 - mousePos.current.y * 0.2, tiltY: -time * 0.5, color: 'rgba(59, 130, 246, 0.5)', dash: [8, 12] },
        { radius: baseRadius * 1.65, tiltX: 0.8, tiltY: time * 0.3, color: 'rgba(99, 102, 241, 0.4)', dash: [40, 15] },
        { radius: baseRadius * 1.05, tiltX: -0.8, tiltY: time * 1.2, color: 'rgba(56, 189, 248, 0.7)', dash: [6, 6] },
      ];

      ringConfigs.forEach((ring) => {
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
      });

      // 3. Central AI Sphere Nucleus with pulsing light
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

      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = coreGlow;
      ctx.fill();

      // Energy Pulsing Outline
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.9)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      // 4. Draw Orbiting Neural Network Particles and Connections
      const projectedParticles: Array<{ x: number; y: number; radius: number; color: string }> = [];

      particles.forEach((p) => {
        p.baseAngle += 0.012;
        const angle = p.baseAngle;
        const x3d = Math.cos(angle) * p.orbitDistance;
        const z3d = Math.sin(angle) * p.orbitDistance;
        const y3d = p.y + Math.sin(time * 1.5 + p.orbitDistance) * 12;

        const scale = 250 / (250 + z3d);
        const projX = centerX + x3d * scale;
        const projY = centerY + y3d * scale;
        const projRadius = Math.max(0.6, p.radius * scale * (1 + Math.sin(time * 4 + p.baseAngle) * 0.2));

        projectedParticles.push({ x: projX, y: projY, radius: projRadius, color: p.color });

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(1, Math.max(0.3, scale - 0.1));
        ctx.beginPath();
        ctx.arc(projX, projY, projRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw Neural Connection Lines and Energy Sparks travelling along links
      ctx.save();
      for (let i = 0; i < projectedParticles.length; i++) {
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p1 = projectedParticles[i];
          const p2 = projectedParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 60) {
            const alpha = (1 - dist / 60) * 0.4;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Energy spark traveling along the link
            if ((i + j) % 5 === 0) {
              const sparkProgress = (time * 1.5 + i * 0.3) % 1;
              const sparkX = p1.x + (p2.x - p1.x) * sparkProgress;
              const sparkY = p1.y + (p2.y - p1.y) * sparkProgress;
              ctx.fillStyle = '#ffffff';
              ctx.beginPath();
              ctx.arc(sparkX, sparkY, 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }
      ctx.restore();

      // 5. Draw Digital Data Streams radiating outward
      const streamCount = 6;
      for (let s = 0; s < streamCount; s++) {
        const streamAngle = (s * Math.PI * 2) / streamCount + time * 0.4;
        const startDist = coreRadius;
        const endDist = baseRadius * 1.5;
        const currentDist = startDist + ((time * 60 + s * 30) % (endDist - startDist));

        const sx = centerX + Math.cos(streamAngle) * currentDist;
        const sy = centerY + Math.sin(streamAngle) * currentDist;

        ctx.save();
        ctx.fillStyle = '#38bdf8';
        ctx.globalAlpha = 1 - (currentDist - startDist) / (endDist - startDist);
        ctx.beginPath();
        ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[560px] mx-auto flex items-center justify-center select-none backdrop-blur-md bg-slate-950/50 border border-white/10 rounded-3xl p-6 shadow-2xl shadow-cyan-500/10">
      {/* Dynamic Background Glow Halo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-indigo-600/15 rounded-full blur-[80px] pointer-events-none animate-pulse" />

      {/* Main Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 block pointer-events-auto cursor-pointer"
        onClick={onOpenAiChat}
        title="Núcleo de IA Interactivo - Haz clic para conversar"
      />
    </div>
  );
};
