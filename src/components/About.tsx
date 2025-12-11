import { PortfolioData } from '../types/portfolio';
import { Code2, Zap, Users, Award } from 'lucide-react';

interface AboutProps {
  data: PortfolioData;
}

export const About = ({ data }: AboutProps) => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Développement Full Stack',
      description: 'Développement web et mobile avec Laravel, Flutter, Node.js, React, Spring Boot, Angular'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance & Qualité',
      description: 'Code propre, maintenable et optimisé selon les best practices'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Travail d\'équipe',
      description: 'Collaboration efficace en méthodologies agiles (MOTICAP)'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Passionné par les nouvelles technologies et solutions créatives'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50 relative z-10" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            À Propos de Moi
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {data.bio}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in-up animation-delay-400">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">Années d'études</p>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">Technologies maîtrisées</p>
          </div>
          <div className="animate-fade-in-up animation-delay-800">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">Engagement qualité</p>
          </div>
        </div>
      </div>
    </section>
  );
};
