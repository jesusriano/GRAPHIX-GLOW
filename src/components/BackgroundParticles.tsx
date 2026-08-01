import React from 'react';

export const BackgroundParticles: React.FC = React.memo(() => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
    />
  );
});
