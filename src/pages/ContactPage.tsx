import { PortfolioData } from '../models/PortfolioModel';
import { Contact } from '../components/Contact';

interface ContactPageProps {
  data: PortfolioData;
  onContact: (type: string, value: string) => void;
}

export const ContactPage = ({ data, onContact }: ContactPageProps) => {
  return (
    <div className="min-h-screen">
      <Contact data={data} onContact={onContact} />
    </div>
  );
};