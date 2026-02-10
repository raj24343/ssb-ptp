import React, { useEffect, useRef, useState } from 'react';
import NavLinkItem from '../ui/NavLinkItem.jsx';
import { NAV } from '../../data/nav.js';

export default function MobileNav({ children }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({});
  const panelRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onClick = (e) => { if (open && !panelRef.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  return (
    <div className="md:hidden">
      <div onClick={() => setOpen(true)}>{children}</div>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50" aria-hidden="true"></div>
      )}
      <aside
        ref={panelRef}
        className={`fixed top-0 right-0 h-full w-80 glass z-[60] p-4 transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold text-white">Menu</span>
          <button className="nav-link" onClick={() => setOpen(false)}>Close</button>
        </div>
        <nav className="space-y-2">
          {NAV.map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between">
                <span className="text-white">{item.label}</span>
                {item.children && (
                  <button
                    className="text-text-dim"
                    aria-expanded={!!expanded[idx]}
                    onClick={() => setExpanded({ ...expanded, [idx]: !expanded[idx] })}
                  >{expanded[idx] ? '−' : '+'}</button>
                )}
              </div>
              {(!item.children) && (
                <div className="mt-1">
                  <NavLinkItem item={item} onClick={() => setOpen(false)} />
                </div>
              )}
              {item.children && expanded[idx] && (
                <div className="ms-3 mt-1 flex flex-col">
                  {item.children.map((c, i) => (
                    <NavLinkItem key={i} item={c} onClick={() => setOpen(false)} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}