import { PortfolioData } from '../models/PortfolioModel';
import { Code2, Database, Smartphone, Layers, Globe, Languages } from 'lucide-react';

interface SkillsProps {
  data: PortfolioData;
}

const iconMap: Record<string, React.ReactNode> = {
  'Développement Backend': <Code2 size={24} />,
  'Développement Mobile': <Smartphone size={24} />,
  'Développement Web': <Globe size={24} />,
  'Langages de programmation': <Code2 size={24} />,
  'Bases de données': <Database size={24} />,
  'Modélisation': <Layers size={24} />,
};

export const Skills = ({ data }: SkillsProps) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800/50 relative z-10" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences Techniques
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des applications performantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {data.skills.map((skill, index) => (
            <div
              key={skill.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  {iconMap[skill.category] || <Code2 size={24} />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 text-sm rounded-lg font-medium hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/40 dark:hover:to-blue-700/40 transition-all duration-300 cursor-default shadow-sm hover:shadow-md transform hover:scale-105"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in-up animation-delay-600 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
              <Languages size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Langues</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.languages.map((lang, index) => (
              <div
                key={lang.id}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-700/50 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 border border-blue-100 dark:border-blue-800/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{lang.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
