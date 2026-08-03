import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = React.memo(({
  value,
  prefix = '',
  suffix = '',
  duration = 1800,
  className = ''
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const nextCount = Math.floor(easeProgress * value);

      if (elementRef.current) {
        elementRef.current.textContent = `${prefix}${nextCount}${suffix}`;
      }

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      } else {
        if (elementRef.current) {
           elementRef.current.textContent = `${prefix}${value}${suffix}`;
        }
      }
    };

    frameId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(frameId);
  }, [hasAnimated, value, duration, prefix, suffix]);

  return (
    <span ref={elementRef} className={`inline-block font-black transition-transform duration-300 ${className}`}>
      {prefix}0{suffix}
    </span>
  );
});
