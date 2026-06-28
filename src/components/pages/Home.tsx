import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { MainLayout } from '../templates/MainLayout';
import { HeroSection } from '../organisms/HeroSection';
import { AboutSection } from '../organisms/AboutSection';
import { TechStack } from '../organisms/TechStack';
import { ProjectsGrid } from '../organisms/ProjectsGrid';
import { ContactForm } from '../organisms/ContactForm';
import { Footer } from '../organisms/Footer';
import { useLocation } from 'react-router-dom';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <MainLayout>
      <Helmet>
        <title>Marco Condori | Full Stack & AI Engineer</title>
        <meta name="description" content="Portfolio de Marco Condori, especializado en arquitecturas web escalables y modelos IA." />
      </Helmet>
      
      <HeroSection />
      <AboutSection />
      <ProjectsGrid />
      <TechStack />
      <ContactForm />
      <Footer />
    </MainLayout>
  );
};
