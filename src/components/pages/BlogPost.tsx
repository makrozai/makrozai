import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { MainLayout } from '../templates/MainLayout';

// Lazily load components
const postsMap: Record<string, React.LazyExoticComponent<any>> = {
  'deepseek-production': React.lazy(() => import('../../content/first-post.mdx')),
  'futuro-del-frontend': React.lazy(() => import('../../content/segundo-post.mdx')),
};

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const PostComponent = slug ? postsMap[slug] : null;

  if (!PostComponent) {
    return (
      <MainLayout>
        <section className="py-32 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Artículo no encontrado</h1>
          <Link to="/blog" className="text-[var(--color-purple-500)] hover:underline">Volver al Blog</Link>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Helmet>
        <title>Artículo | Marco Condori</title>
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-[var(--color-dark-bg)]">
        <main className="flex-1">
          <section className="py-24 max-w-3xl mx-auto px-6">
            <div className="mb-12">
              <Link to="/blog" className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 hover:text-white uppercase transition-colors duration-300">
                <span className="mr-2">←</span> Volver al Blog
              </Link>
            </div>
            
            <article className="prose prose-invert lg:prose-xl prose-purple max-w-none">
              <Suspense fallback={<div className="text-gray-500">Cargando artículo...</div>}>
                <PostComponent />
              </Suspense>
            </article>
          </section>
        </main>
      </div>
    </MainLayout>
  );
};
