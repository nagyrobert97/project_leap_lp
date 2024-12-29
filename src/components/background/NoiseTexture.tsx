import React from 'react';

const NoiseTexture = () => {
  return (
    <div 
      className="fixed inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        filter: 'contrast(320%) brightness(100%)',
      }}
    />
  );
};

export default NoiseTexture;