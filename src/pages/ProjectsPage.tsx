import { PortfolioData } from '../types/portfolio';
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