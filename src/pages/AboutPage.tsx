import { PortfolioData } from '../models/PortfolioModel';
import { About } from '../components/About';

interface AboutPageProps {
  data: PortfolioData;
}

export const AboutPage = ({ data }: AboutPageProps) => {
  return (
    <div className="bg-red-800 dark:bg-gray-900/50">
      <About data={data} />
    </div>
  );
};
