import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[var(--color-dark-bg)] pb-12 pt-8 text-sm">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 font-medium tracking-wide">
        <p>© {new Date().getFullYear()} makrozai.</p>
        
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="https://github.com/makrozai" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/marco-condori" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="/makrozai/blog" className="hover:text-white transition-colors">Blog</a>
        </div>
      </div>
    </footer>
  );
};
