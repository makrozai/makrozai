import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 relative bg-[var(--color-dark-bg)] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-4">
            <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--color-purple-500)] uppercase mb-4">
              Perfil
            </h2>
            <p className="text-xl font-light text-white mb-2 tracking-wide">Marco Condori</p>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">LATAM / Global</p>
          </div>
          
          <div className="md:col-span-8">
            <p className="text-lg md:text-2xl font-light text-gray-300 leading-relaxed mb-8">
              Ingeniero especializado en <strong className="text-white font-medium">Sistemas Distribuidos</strong> e <strong className="text-white font-medium">Inteligencia Artificial</strong>. Construyo arquitecturas backend de latencia ultra-baja y experiencias de usuario inmersivas.
            </p>
            
            <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
              Desde Perú hacia el mundo, mi filosofía de ingeniería se basa en la eliminación de complejidad innecesaria. Cada línea de código, cada modelo desplegado y cada render de WebGL tiene un propósito absoluto: rendimiento puro y estética inquebrantable.
            </p>
            
            <div className="mt-12 flex gap-4">
              <div className="h-1 w-12 bg-white rounded-full"></div>
              <div className="h-1 w-2 bg-[var(--color-purple-500)] rounded-full opacity-50"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
