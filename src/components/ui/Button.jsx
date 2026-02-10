
import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ as: Comp = 'button', className = '', glow = false, children, ...props }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Comp
        className={`btn-base bg-brand hover:bg-brand-light text-white shadow-elev ${glow ? 'shadow-glow ring-1 ring-brand/30' : ''} ${className}`}
        {...props}
      >
        {children}
      </Comp>
    </motion.div>
  );
}