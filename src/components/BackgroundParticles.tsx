import React, { useEffect, useRef } from 'react';

export const BackgroundParticles: React.FC = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect user prefers-reduced-motion setting
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;
    let lastMouseTime = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseTime < 50) return; // ~20fps throttle for mouse tracking
      lastMouseTime = now;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // IntersectionObserver to completely stop rAF when canvas is off-screen
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
    observer.observe(canvas);

    // Initial tech energy rain phase: first 2.5 seconds descending particles
    const startTime = Date.now();
    const particleCount = Math.min(Math.floor(width / 45), 24);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      initialVy: number;
      radius: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
    }

    const colors = ['#0066FF', '#00D2FF', '#38BDF8', '#818CF8', '#FFFFFF'];
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const initialFallSpeed = 2.0 + Math.random() * 3.0;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * -height - 50,
        vx: (Math.random() - 0.5) * 0.3,
        vy: initialFallSpeed,
        initialVy: initialFallSpeed,
        radius: Math.random() * 1.8 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: 0.01 + Math.random() * 0.02
      });
    }

    let lastTime = 0;

    const render = (time: number) => {
      if (!isVisible) return;

      animationFrameId = requestAnimationFrame(render);

      // Throttle canvas rendering to ~24fps to free main thread
      if (time - lastTime < 40) return;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const elapsed = (Date.now() - startTime) / 1000;
      const settlingFactor = Math.max(0, 1 - elapsed / 3.0);

      // Single-path Tech Grid Background
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 100;

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Update and draw particles
      const nowMs = Date.now();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const currentVy = (p.initialVy * settlingFactor) + ((Math.random() - 0.5) * 0.2 * (1 - settlingFactor));
        p.y += currentVy;
        p.x += p.vx;

        p.alpha += Math.sin(nowMs * p.pulseSpeed) * 0.008;
        p.alpha = Math.max(0.15, Math.min(0.75, p.alpha));

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y > height) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distSq = dx * dx + dy * dy;
        let renderRadius = p.radius;
        let renderAlpha = p.alpha;

        if (distSq < 22500) { // 150px
          const dist = Math.sqrt(distSq);
          const factor = 1 - dist / 150;
          renderRadius += factor * 1.5;
          renderAlpha = Math.min(1, renderAlpha + factor * 0.3);
        }

        ctx.globalAlpha = renderAlpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, renderRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Fast squared-distance check for node connecting lines
      ctx.strokeStyle = '#00D2FF';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 10000) { // 100px
            const dist = Math.sqrt(distSq);
            ctx.globalAlpha = (1 - dist / 100) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
});

