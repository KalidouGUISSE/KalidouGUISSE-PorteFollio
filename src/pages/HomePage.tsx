import { PortfolioData } from '../models/PortfolioModel';
import { Hero } from '../components/Hero';
import { AnimatedParticles } from '../components/AnimatedParticles';

interface HomePageProps {
  data: PortfolioData;
  onContact: (type: string, value: string) => void;
}

export const HomePage = ({ data, onContact }: HomePageProps) => {
  return (
    <div className="bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative">
      <AnimatedParticles count={20} />
      <Hero data={data} onContact={onContact} />
    </div>
  );
};