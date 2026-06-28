import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal } from 'lucide-react';
import { Button } from '../atoms/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, githubUrl, liveUrl, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass rounded-[2rem] p-8 md:p-10 flex flex-col h-full border border-white/10 hover:border-[var(--color-purple-500)]/30 transition-colors duration-500 shadow-2xl shadow-black/40"
    >
      <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">{title}</h3>
      <p className="text-gray-400 mb-8 flex-grow leading-relaxed md:text-lg font-light">{description}</p>
      
      <div className="flex flex-wrap gap-3 mb-8">
        {techStack.map(tech => (
          <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide uppercase bg-[var(--color-purple-900)] text-[var(--color-purple-400)] bg-opacity-20 border border-[var(--color-purple-900)]/50">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {githubUrl && (
          <Button variant="outline" size="md" onClick={() => window.open(githubUrl, '_blank')} className="gap-2 w-full sm:w-auto">
            <Terminal size={18} /> Repositorio
          </Button>
        )}
        {liveUrl && (
          <Button size="md" onClick={() => window.open(liveUrl, '_blank')} className="gap-2 w-full sm:w-auto">
            <ExternalLink size={18} /> Ver en vivo
          </Button>
        )}
      </div>
    </motion.div>
  );
};
