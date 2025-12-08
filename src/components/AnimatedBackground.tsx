import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const currentColorRef = useRef<[number, number, number]>(isDark ? [96, 165, 250] : [59, 130, 246]);
  const targetColorRef = useRef<[number, number, number]>(isDark ? [96, 165, 250] : [59, 130, 246]);

  // Update target color on theme change
  useEffect(() => {
    targetColorRef.current = isDark ? [96, 165, 250] : [59, 130, 246];
  }, [isDark]);

  // Throttle function
  const throttle = (func: (...args: unknown[]) => void, limit: number) => {
    let inThrottle = false;
    return (...args: unknown[]) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 40 : 80;

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: prefersReducedMotion ? 0 : Math.random() * 0.5 - 0.25,
      speedY: prefersReducedMotion ? 0 : Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.5 + 0.2,
    });

    const updateParticle = (particle: Particle) => {
      if (prefersReducedMotion) return;
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x > canvas.width) particle.x = 0;
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.y > canvas.height) particle.y = 0;
      if (particle.y < 0) particle.y = canvas.height;
    };

    const drawParticle = (particle: Particle) => {
      if (!ctx) return;
      const [r, g, b] = currentColorRef.current;
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    particlesRef.current = particles;

    const animate = () => {
      if (prefersReducedMotion) return;

      // Interpolate color
      const [cr, cg, cb] = currentColorRef.current;
      const [tr, tg, tb] = targetColorRef.current;
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      currentColorRef.current = [
        lerp(cr, tr, 0.02),
        lerp(cg, tg, 0.02),
        lerp(cb, tb, 0.02)
      ];

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        updateParticle(particles[i]);
        drawParticle(particles[i]);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const [r, g, b] = currentColorRef.current;
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    if (!prefersReducedMotion) {
      animate();
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Recreate particles on resize
      particles.length = 0;
      const newCount = window.innerWidth < 768 ? 40 : 80;
      for (let i = 0; i < newCount; i++) {
        particles.push(createParticle());
      }
    };

    const throttledResize = throttle(handleResize, 100);

    window.addEventListener('resize', throttledResize);

    return () => {
      window.removeEventListener('resize', throttledResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)',
        willChange: 'transform'
      }}
    />
  );
};
