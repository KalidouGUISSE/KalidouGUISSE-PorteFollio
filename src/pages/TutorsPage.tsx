import { PortfolioData } from '../models/PortfolioModel';
import { Tutors } from '../components/Tutors';

interface TutorsPageProps {
  data: PortfolioData;
}

export const TutorsPage = ({ data }: TutorsPageProps) => {
  return (
    <div>
      <Tutors data={data} />
    </div>
  );
};