import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ 
  eyebrow, 
  title, 
  subtitle, 
  center = false, 
  large = false,
  className = "",
  animated = true 
}) {
  const containerClasses = `
    ${center ? 'text-center' : ''} 
    ${large ? 'mb-16' : 'mb-12'} 
    ${className}
  `.trim();

  const titleClasses = `
    ${large ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl lg:text-5xl'} 
    font-bold text-[var(--text)] leading-tight tracking-tight
  `.trim();

  const subtitleClasses = `
    text-[var(--text-soft)] mt-4 text-lg md:text-xl leading-relaxed
    ${center ? 'max-w-4xl mx-auto' : 'max-w-3xl'}
  `.trim();

  const content = (
    <div className={containerClasses}>
      {eyebrow && (
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[var(--brand)]/20 to-[var(--accent)]/20 border border-[var(--brand)]/30 backdrop-blur-sm mb-6">
          <div className="w-2 h-2 bg-[var(--accent)] rounded-full mr-3 animate-pulse"></div>
          <span className="text-[var(--brand-light)] tracking-wider uppercase text-sm font-semibold">
            {eyebrow}
          </span>
        </div>
      )}
      
      <h2 className={titleClasses}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={subtitleClasses}>
          {subtitle}
        </p>
      )}
      
      {/* Decorative underline for centered headers */}
      {center && (
        <div className="flex justify-center mt-8">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent rounded-full"></div>
        </div>
      )}
    </div>
  );

  if (!animated) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {content}
    </motion.div>
  );
}