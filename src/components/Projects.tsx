import { PortfolioData } from '../models/PortfolioModel';
import { FolderGit2, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  data: PortfolioData;
}

export const Projects = ({ data }: ProjectsProps) => {
  return (
    <section className="py-20 px-6 relative z-10 bg-white dark:bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projets Académiques
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez quelques-uns des projets sur lesquels j'ai travaillé
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative flex items-center gap-4 text-white">
                  <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <FolderGit2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">Stack Technique:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 text-sm rounded-lg font-medium hover:from-blue-200 hover:to-blue-300 dark:hover:from-blue-800/40 dark:hover:to-blue-700/40 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors group/btn">
                  Voir les détails
                  <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
