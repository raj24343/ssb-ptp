import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader.jsx';

export default function Committees() {
  const committees = [
    { name: 'IQAC', desc: 'Internal Quality Assurance Cell', href: '/committees/iqac' },
    { name: 'Anti Ragging', desc: 'Anti-ragging measures and reporting', href: '/committees/anti-ragging' },
    { name: 'All Other Committees', desc: 'Grievance Redressal, NPTEL, Academic, IIC, R&D, Women Empowerment, and more', href: '/committees/all-committees' }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            eyebrow="Committees"
            title="Institutional Committees & Cells"
            description="IQAC, Anti Ragging, and all other institutional committees"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {committees.map((c, i) => (
              <Link
                key={i}
                to={c.href}
                className="panel block hover:border-[var(--brand)]/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-[var(--text)] mb-2">{c.name}</h3>
                <p className="text-sm text-[var(--text-soft)]">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
