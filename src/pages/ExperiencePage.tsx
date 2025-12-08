import { PortfolioData } from '../models/PortfolioModel';
import { Experience } from '../components/Experience';

interface ExperiencePageProps {
  data: PortfolioData;
}

export const ExperiencePage = ({ data }: ExperiencePageProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900/50">
      <Experience data={data} />
    </div>
  );
};