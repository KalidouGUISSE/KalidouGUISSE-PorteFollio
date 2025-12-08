import { PortfolioData } from '../models/PortfolioModel';
import { Hero } from '../components/Hero';

interface HomePageProps {
  data: PortfolioData;
  onContact: (type: string, value: string) => void;
}

export const HomePage = ({ data, onContact }: HomePageProps) => {
  return (
    <Hero data={data} onContact={onContact} />
  );
};