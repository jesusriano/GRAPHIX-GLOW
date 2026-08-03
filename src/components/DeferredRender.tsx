import React, { useState, useEffect } from 'react';

export const DeferredRender: React.FC<{ children: React.ReactNode, fallback?: React.ReactNode, delay?: number }> = ({ children, fallback = null, delay = 2000 }) => {
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShouldRender(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return <>{shouldRender ? children : fallback}</>;
};
