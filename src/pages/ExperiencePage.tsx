import { PortfolioData } from '../models/PortfolioModel';
import { Experience } from '../components/Experience';

interface ExperiencePageProps {
  data: PortfolioData;
}

export const ExperiencePage = ({ data }: ExperiencePageProps) => {
  return (
    <div>
      <Experience data={data} />
    </div>
  );
};