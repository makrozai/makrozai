import React from 'react';
import { motion } from 'framer-motion';

interface TechBadgeProps {
  name: string;
  colorHex?: string;
  delay?: number;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, colorHex = '#9370DB', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: delay * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
      className="glass px-5 py-2.5 rounded-xl flex items-center gap-3 cursor-pointer transition-colors duration-300 hover:bg-white/5 border border-white/10"
      style={{ borderBottomColor: colorHex, borderBottomWidth: '2px' }}
    >
      <div className="w-2.5 h-2.5 rounded-full shadow-lg" style={{ backgroundColor: colorHex, boxShadow: `0 0 10px ${colorHex}` }} />
      <span className="font-medium text-gray-200 tracking-wide text-sm">{name}</span>
    </motion.div>
  );
};
