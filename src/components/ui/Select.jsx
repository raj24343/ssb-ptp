import React from 'react';

export default function Select({ children, ...props }) {
  return (
    <select
      className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-2 text-white focus:ring-2 focus:ring-brand/60"
      {...props}
    >
      {children}
    </select>
  );
}