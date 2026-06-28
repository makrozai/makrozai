import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: 'Eligiusmc Hidden Armor',
    role: 'Arquitectura Java',
    description: 'Sincronización Redis Pub/Sub con cero latencia para sistemas de alto volumen.',
    tech: ['Java 21', 'Redis', 'Hexagonal'],
    link: 'https://github.com/Eligiusmc/EligiusHiddenArmor'
  },
  {
    title: 'nayra-ui',
    role: 'Design System',
    description: 'UI Kit Modular y escalable. Componentes atómicos inyectados matemáticamente.',
    tech: ['React', 'Tailwind', 'Framer'],
    link: 'https://github.com/makrozai/nayra-ui'
  },
  {
    title: 'Asana GitLab Bridge',
    role: 'Microservicio Node',
    description: 'Motor de sincronización bidireccional en tiempo real entre plataformas enterprise.',
    tech: ['Node.js', 'Docker', 'Webhooks'],
    link: 'https://github.com/makrozai/asana-gitlab-bridge'
  },
  {
    title: 'gobaserest',
    role: 'Infraestructura API',
    description: 'Boilerplate ultra-ligero y de concurrencia masiva para APIs REST en Golang.',
    tech: ['Go', 'PostgreSQL', 'JWT'],
    link: 'https://github.com/makrozai/gobaserest'
  }
];

export const ProjectsGrid: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative bg-[var(--color-dark-bg)] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--color-purple-500)] uppercase mb-16 text-center md:text-left">Trabajo Destacado</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group block relative overflow-hidden glass p-10 md:p-12 rounded-3xl cursor-pointer border border-white/5 hover:border-white/20 transition-colors duration-500 h-full flex flex-col justify-between bg-[var(--color-dark-bg)]"
            >
              {/* Abstract 3D Glow effect on Hover */}
              <div className="absolute -inset-full bg-[radial-gradient(ellipse_at_center,var(--color-purple-500),transparent_50%)] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 pointer-events-none mix-blend-screen" />
              
              <div className="relative z-10 mb-12">
                <p className="text-[var(--color-purple-500)] text-xs font-bold tracking-widest uppercase mb-4">{project.role}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4 group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-light max-w-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-8 border-t border-white/10">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-gray-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
