import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PortfolioController } from './controllers/PortfolioController';
import { PortfolioData } from './types/portfolio';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { TutorsPage } from './pages/TutorsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const controller = PortfolioController.getInstance();

  useEffect(() => {
    const data = controller.getPortfolioData();
    setPortfolioData(data);

    const handleUpdate = (updatedData: PortfolioData) => {
      setPortfolioData(updatedData);
    };

    controller.subscribeToUpdates(handleUpdate);

    return () => {
      controller.unsubscribeFromUpdates(handleUpdate);
    };
  }, []);

  const handleContact = (type: string, value: string) => {
    controller.handleContact(type, value);
  };

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage data={portfolioData} onContact={handleContact} />} />
          <Route path="/about" element={<AboutPage data={portfolioData} />} />
          <Route path="/projects" element={<ProjectsPage data={portfolioData} />} />
          <Route path="/skills" element={<SkillsPage data={portfolioData} />} />
          <Route path="/experience" element={<ExperiencePage data={portfolioData} />} />
          <Route path="/tutors" element={<TutorsPage data={portfolioData} />} />
          <Route path="/blog" element={<BlogPage data={portfolioData} />} />
          <Route path="/contact" element={<ContactPage data={portfolioData} onContact={handleContact} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
