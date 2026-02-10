import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ 
  className = '', 
  children, 
  hover = true,
  uniform = false,
  padding = "default",
  animated = true,
  ...props 
}) {
  const paddingClasses = {
    none: '',
    small: 'p-4 md:p-5',
    default: 'p-6 md:p-7 lg:p-8',
    large: 'p-8 md:p-10 lg:p-12'
  };

  const cardClasses = `
    card
    ${uniform ? 'h-full flex flex-col' : ''}
    ${hover ? 'hover-lift' : ''}
    ${paddingClasses[padding]}
    ${className}
  `.trim();

  const cardContent = (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );

  if (!animated) {
    return cardContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="h-full"
    >
      {cardContent}
    </motion.div>
  );
}

// Card content wrapper for uniform layouts
export function CardContent({ className = '', children, grow = false }) {
  return (
    <div className={`${grow ? 'flex-grow' : ''} ${className}`}>
      {children}
    </div>
  );
}

// Card header component
export function CardHeader({ 
  icon, 
  title, 
  subtitle, 
  iconColor = 'from-[var(--brand)] to-[var(--brand-dark)]',
  className = '' 
}) {
  return (
    <div className={`flex items-start gap-4 mb-6 ${className}`}>
      {icon && (
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${iconColor} flex items-center justify-center text-xl shadow-lg flex-shrink-0`}>
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="text-[var(--text)] font-bold text-xl mb-2 leading-tight">{title}</h3>
        {subtitle && (
          <p className="text-[var(--text-soft)] leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

// Card footer component
export function CardFooter({ className = '', children }) {
  return (
    <div className={`mt-auto pt-4 border-t border-[var(--border-light)] ${className}`}>
      {children}
    </div>
  );
}

// Card image component
export function CardImage({ 
  src, 
  alt, 
  height = 'h-48',
  overlay = true,
  className = '' 
}) {
  return (
    <div className={`relative ${height} overflow-hidden rounded-xl mb-6 ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--base)]/60 via-transparent to-transparent"></div>
      )}
    </div>
  );
}