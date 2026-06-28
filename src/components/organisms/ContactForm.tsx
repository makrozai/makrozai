import React from 'react';
import { motion } from 'framer-motion';

export const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative bg-[var(--color-dark-bg)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
            Construyamos el <br/>
            <span className="text-gray-500">siguiente nivel.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-xl mx-auto">
            Abierto a roles de ingeniería, consultoría en IA y proyectos arquitectónicos de alto impacto.
          </p>

          <a 
            href="mailto:hola@makrozai.com"
            className="inline-block relative group"
          >
            <div className="absolute inset-0 bg-white rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative bg-white text-black font-semibold text-lg px-8 py-4 rounded-full flex items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
              Contactar Directamente
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
