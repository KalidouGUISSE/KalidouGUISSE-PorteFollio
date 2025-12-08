import { PortfolioData } from '../models/PortfolioModel';
import { Projects } from '../components/Projects';

interface ProjectsPageProps {
  data: PortfolioData;
}

export const ProjectsPage = ({ data }: ProjectsPageProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900/50">
      <Projects data={data} />
    </div>
  );
};