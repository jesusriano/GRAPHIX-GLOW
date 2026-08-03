import React, { useState, useEffect, useRef } from 'react';

interface InViewDeferredProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  minHeight?: string;
  rootMargin?: string;
}

export const InViewDeferred: React.FC<InViewDeferredProps> = React.memo(({
  children,
  fallback = null,
  minHeight = '250px',
  rootMargin = '350px 0px',
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView, rootMargin]);

  return (
    <div ref={ref} style={{ minHeight, width: '100%' }}>
      {isInView ? (
        <React.Suspense fallback={fallback}>
          {children}
        </React.Suspense>
      ) : (
        fallback
      )}
    </div>
  );
});
