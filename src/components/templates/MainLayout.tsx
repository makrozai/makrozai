import React from 'react';
import { Navbar } from '../organisms/Navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      <footer className="py-8 text-center text-sm text-gray-500 glass mt-auto border-t-0 rounded-t-[40px]">
        <p>© {new Date().getFullYear()} Marco Condori (makrozai). All rights reserved.</p>
      </footer>
    </div>
  );
};
