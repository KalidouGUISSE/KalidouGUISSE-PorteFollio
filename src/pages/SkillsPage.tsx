import { PortfolioData } from '../models/PortfolioModel';
import { Skills } from '../components/Skills';

interface SkillsPageProps {
  data: PortfolioData;
}

export const SkillsPage = ({ data }: SkillsPageProps) => {
  return (
    <div>
      <Skills data={data} />
    </div>
  );
};