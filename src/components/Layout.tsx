import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { AnimatedParticles } from './AnimatedParticles';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative">
      <AnimatedParticles count={30} />
      <Navigation />
      <main className="pt-20 relative z-10"> {/* Espace pour la navigation fixe */}
        {children}
      </main>
      <Footer />
    </div>
  );
};