import { useEffect, useState } from 'react';
import { PortfolioController } from './controllers/PortfolioController';
import { PortfolioData } from './models/PortfolioModel';
import { ThemeProvider } from './contexts/ThemeContext';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

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
    <div className="min-h-screen relative overflow-x-hidden bg-white dark:bg-gray-900">
      <AnimatedBackground />
      <Navigation />

      <main id="home">
        <Hero data={portfolioData} onContact={handleContact} />
        <About data={portfolioData} />
        <Projects data={portfolioData} />
        <Skills data={portfolioData} />
        <Experience data={portfolioData} />
        <Contact data={portfolioData} onContact={handleContact} />
      </main>

      <Footer />
    </div>
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
