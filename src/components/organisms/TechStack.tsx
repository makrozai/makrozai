import React from 'react';
import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    title: 'Inteligencia Artificial',
    techs: ['DeepSeek Models', 'Claude / OpenAI API', 'TensorFlow', 'PyTorch']
  },
  {
    title: 'Ingeniería Backend',
    techs: ['Node.js (V8)', 'Go (High Concurrency)', 'Java 21 / Spring', 'PostgreSQL / Redis']
  },
  {
    title: 'Arquitectura Frontend',
    techs: ['React 18/19', 'Next.js App Router', 'WebGL / Three.js', 'Framer Motion']
  },
  {
    title: 'Cloud & DevOps',
    techs: ['Docker Containers', 'AWS Ecosystem', 'Kubernetes', 'CI/CD Pipelines']
  }
];

export const TechStack: React.FC = () => {
  return (
    <section className="py-32 relative bg-[var(--color-dark-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--color-purple-500)] uppercase mb-16 text-center md:text-left">Ecosistema Tecnológico</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {CATEGORIES.map((cat, i) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-8 border-b border-white/10 pb-4">
                {cat.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {cat.techs.map((tech) => (
                  <li key={tech} className="text-sm text-gray-400 font-light hover:text-[var(--color-purple-500)] transition-colors duration-300">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
