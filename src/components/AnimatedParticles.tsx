import { useEffect, useRef } from 'react';

interface AnimatedParticlesProps {
  count?: number;
  className?: string;
}

export const AnimatedParticles = ({ count = 50, className = '' }: AnimatedParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Nettoyer les particules existantes
    container.innerHTML = '';

    // Créer les particules
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');

      // Taille aléatoire avec variation
      const size = Math.random() * 8 + 1; // 1px à 9px
      const isLarge = size > 5;

      // Styles de base des particules
      particle.className = `absolute rounded-full ${
        isLarge
          ? 'bg-white/30 dark:bg-white/20 animate-float-slow'
          : 'bg-white/15 dark:bg-white/8 animate-float'
      }`;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Position aléatoire
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // Animation delay et duration aléatoires
      particle.style.animationDelay = `${Math.random() * 25}s`;
      particle.style.animationDuration = isLarge
        ? `${Math.random() * 15 + 20}s` // 20-35s pour les grandes
        : `${Math.random() * 12 + 8}s`; // 8-20s pour les petites

      container.appendChild(particle);
    }
  }, [count]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};