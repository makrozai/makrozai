import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-6 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl md:rounded-full px-6 py-4 flex flex-col md:flex-row items-center justify-between pointer-events-auto shadow-2xl shadow-black/50 border border-white/5">
        <Link to="/" className="text-2xl font-black text-white tracking-tighter mb-4 md:mb-0">
          makrozai<span className="text-[var(--color-purple-500)]">.</span>
        </Link>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-semibold text-gray-400 tracking-wide uppercase">
          <Link to="/#about" className="hover:text-white transition-colors duration-300">Acerca</Link>
          <Link to="/#projects" className="hover:text-white transition-colors duration-300">Proyectos</Link>
          <Link to="/blog" className="hover:text-white transition-colors duration-300">Blog</Link>
          <a href="#contact" className="text-[var(--color-purple-500)] hover:text-[var(--color-purple-400)] transition-colors duration-300">Contacto</a>
        </div>
      </div>
    </motion.nav>
  );
};
