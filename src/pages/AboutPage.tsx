import { PortfolioData } from '../models/PortfolioModel';
import { About } from '../components/About';

interface AboutPageProps {
  data: PortfolioData;
}

export const AboutPage = ({ data }: AboutPageProps) => {
  return (
    <div>
      <About data={data} />
    </div>
  );
};
