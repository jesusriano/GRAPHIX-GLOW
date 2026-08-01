import React, { useEffect, useRef } from 'react';

export const BackgroundParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // IntersectionObserver to pause when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    // Initial tech energy rain phase: first 2.5 seconds descending particles
    const startTime = Date.now();
    const particleCount = Math.min(Math.floor(width / 18), 70);

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
      const initialFallSpeed = 2.5 + Math.random() * 3.5;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * -height - 50,
        vx: (Math.random() - 0.5) * 0.4,
        vy: initialFallSpeed,
        initialVy: initialFallSpeed,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: 0.01 + Math.random() * 0.02
      });
    }

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        const elapsed = (Date.now() - startTime) / 1000;
        const settlingFactor = Math.max(0, 1 - elapsed / 3.0);

        // Tech Grid Background
        ctx.strokeStyle = 'rgba(0, 210, 255, 0.03)';
        ctx.lineWidth = 1;
        const gridSize = 65;

        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }

        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Update and draw particles
        particles.forEach((p) => {
          const currentVy = (p.initialVy * settlingFactor) + ((Math.random() - 0.5) * 0.3 * (1 - settlingFactor));
          p.y += currentVy;
          p.x += p.vx;

          p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.01;
          p.alpha = Math.max(0.15, Math.min(0.85, p.alpha));

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y > height) {
            p.y = -20;
            p.x = Math.random() * width;
          }

          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let renderRadius = p.radius;
          let renderAlpha = p.alpha;

          if (dist < 150) {
            const factor = 1 - dist / 150;
            renderRadius += factor * 2;
            renderAlpha = Math.min(1, renderAlpha + factor * 0.4);
          }

          ctx.save();
          ctx.globalAlpha = renderAlpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, renderRadius, 0, Math.PI * 2);
          ctx.fill();

          if (settlingFactor > 0.1) {
            ctx.strokeStyle = p.color;
            ctx.lineWidth = renderRadius * 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x - p.vx * 3, p.y - currentVy * 4);
            ctx.stroke();
          }

          ctx.restore();
        });

        // Connecting lines between close nodes
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 110) {
              ctx.save();
              ctx.globalAlpha = (1 - dist / 110) * 0.18;
              ctx.strokeStyle = '#00D2FF';
              ctx.lineWidth = 0.6;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
              ctx.restore();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
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
};
