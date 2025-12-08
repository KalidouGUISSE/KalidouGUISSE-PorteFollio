import { PortfolioData } from '../models/PortfolioModel';
import { Skills } from '../components/Skills';

interface SkillsPageProps {
  data: PortfolioData;
}

export const SkillsPage = ({ data }: SkillsPageProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800/50">
      <Skills data={data} />
    </div>
  );
};