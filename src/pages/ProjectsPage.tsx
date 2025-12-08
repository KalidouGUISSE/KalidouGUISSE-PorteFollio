import { PortfolioData } from '../models/PortfolioModel';
import { Projects } from '../components/Projects';

interface ProjectsPageProps {
  data: PortfolioData;
}

export const ProjectsPage = ({ data }: ProjectsPageProps) => {
  return (
    <div>
      <Projects data={data} />
    </div>
  );
};