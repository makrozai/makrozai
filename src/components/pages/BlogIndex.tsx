import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MainLayout } from '../templates/MainLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Vite glob import for MDX files
const mdxModules = import.meta.glob('../../content/*.mdx', { eager: true });

interface PostMeta {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
}

const getPosts = () => {
  const posts: PostMeta[] = [];
  for (const path in mdxModules) {
    const mod = mdxModules[path] as any;
    if (mod.meta) {
      posts.push(mod.meta);
    }
  }
  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const BlogIndex: React.FC = () => {
  const posts = getPosts();

  return (
    <MainLayout>
      <Helmet>
        <title>Artículos MDX | Marco Condori</title>
        <meta name="description" content="Pensamientos sobre Inteligencia Artificial, Desarrollo Full Stack y Arquitectura." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-[var(--color-dark-bg)]">
        <main className="flex-1">
          <section className="py-32 max-w-4xl mx-auto px-6">
            <h1 className="text-xs font-bold tracking-[0.2em] text-[var(--color-purple-500)] uppercase mb-16">
              Últimos Artículos
            </h1>
            
            <div className="flex flex-col gap-6">
              {posts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="group block p-8 glass rounded-2xl border border-white/5 hover:border-[var(--color-purple-500)]/40 transition-colors duration-500 hover:bg-[var(--color-dark-surface)]"
                  >
                    <p className="text-gray-500 text-xs tracking-widest uppercase font-semibold mb-3">
                      {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[var(--color-purple-500)] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </MainLayout>
  );
};
