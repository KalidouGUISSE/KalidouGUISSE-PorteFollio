import { PortfolioData } from '../types/portfolio';
import { Blog } from '../components/Blog';

interface BlogPageProps {
  data: PortfolioData;
}

export const BlogPage = ({ data }: BlogPageProps) => {
  return (
    <div>
      <Blog data={data} />
    </div>
  );
};