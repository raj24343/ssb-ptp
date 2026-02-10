import React from 'react';

export default function Timeline({ items = [] }) {
  return (
    <ol className="relative border-s border-white/10">
      {items.map((it, i) => (
        <li key={i} className="ms-6 mb-6">
          <span className="absolute -start-3 mt-1 h-5 w-5 rounded-full bg-accent/70 ring-2 ring-white/10"></span>
          <h4 className="text-white font-medium">{it.title}</h4>
          <p className="text-text-dim text-sm">{it.time}</p>
          <p className="text-text-soft mt-1">{it.desc}</p>
        </li>
      ))}
    </ol>
  );
}