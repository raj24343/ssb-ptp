import React, { useState } from 'react';

export default function Accordion({ items = [] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-2">
      {items.map((it, i) => (
        <div key={i} className="glass rounded-2xl">
          <button
            className="w-full flex items-center justify-between px-4 py-3 text-left"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            <span className="font-medium">{it.title}</span>
            <span className="text-text-dim">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div className="px-4 pb-4 text-text-soft">{it.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}