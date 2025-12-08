import { PortfolioData } from '../models/PortfolioModel';
import { Contact } from '../components/Contact';
import { AnimatedParticles } from '../components/AnimatedParticles';

interface ContactPageProps {
  data: PortfolioData;
  onContact: (type: string, value: string) => void;
}

export const ContactPage = ({ data, onContact }: ContactPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative">
      <AnimatedParticles count={25} />
      <Contact data={data} onContact={onContact} />
    </div>
  );
};