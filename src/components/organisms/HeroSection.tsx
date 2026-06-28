import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../atoms/Button';
import { Scene3D } from './Scene3D';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-[var(--color-dark-bg)]">
      
      <Scene3D />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs md:text-sm text-gray-400 font-medium tracking-[0.2em] uppercase mb-8"
        >
          Marco Condori — Full Stack & AI Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1]"
        >
          Sistemas Escalables.<br />
          <span className="text-[var(--color-purple-500)] font-medium">Inteligencia Real.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Arquitectura backend de alto rendimiento y modelos de IA en producción. Diseñado con absoluta precisión.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="md" className="w-full sm:w-auto" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
            Proyectos
          </Button>
          <Button size="md" variant="outline" className="w-full sm:w-auto" onClick={() => navigate('/blog')}>
            Artículos MDX
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
