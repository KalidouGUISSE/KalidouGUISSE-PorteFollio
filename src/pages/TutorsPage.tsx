import { PortfolioData } from '../models/PortfolioModel';
import { Tutors } from '../components/Tutors';

interface TutorsPageProps {
  data: PortfolioData;
}

export const TutorsPage = ({ data }: TutorsPageProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900/50">
      <Tutors data={data} />
    </div>
  );
};