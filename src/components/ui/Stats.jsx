import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';

export default function Stats({ items = [], title, subtitle }) {
  const statColors = [
    'from-brand to-brand-dark',
    'from-accent-primary to-emerald-600', 
    'from-accent-warm to-amber-600',
    'from-accent-secondary to-purple-600'
  ];

  return (
    <div>
      {title && (
        <SectionHeader 
          title={title}
          subtitle={subtitle}
          center 
        />
      )}
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 ${title ? 'mt-16' : ''}`}>
        {items.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="card text-center group relative overflow-hidden"
          >
            {/* Icon */}
            {stat.icon && (
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${statColors[i % statColors.length]} mb-4 text-2xl shadow-lg mx-auto`}>
                {stat.icon}
              </div>
            )}
            
            {/* Value */}
            <div className="relative">
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${statColors[i % statColors.length]} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-text-soft font-medium text-lg">{stat.label}</div>
            </div>
            
            {/* Background decoration */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${statColors[i % statColors.length]} opacity-5 rounded-bl-3xl group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            {/* Animated border */}
            <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${statColors[i % statColors.length]} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} 
                 style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', WebkitMaskComposite: 'xor' }}>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}