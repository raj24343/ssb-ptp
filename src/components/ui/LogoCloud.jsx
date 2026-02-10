import React from 'react';

export default function LogoCloud({ logos = [] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-90">
      {logos.map((src, i) => (
        <div key={i} className="glass rounded-2xl p-4 flex items-center justify-center">
          <img src={src} alt="Recruiter logo" className="h-8 md:h-10 object-contain" loading="lazy" />
        </div>
      ))}
    </div>
  );
}