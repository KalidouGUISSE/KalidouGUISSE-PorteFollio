import { PortfolioData } from '../models/PortfolioModel';
import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceProps {
  data: PortfolioData;
}

export const Experience = ({ data }: ExperienceProps) => {
  return (
    <section className="py-20 px-6 relative z-10 bg-gray-50 dark:bg-gray-900/50" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Parcours Professionnel
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mon parcours académique et mes expériences professionnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slide-in-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Briefcase className="text-blue-600 dark:text-blue-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Expériences</h3>
            </div>

            {data.experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800 last:pb-0 group hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full -translate-x-[9px] group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-3">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                  {exp.organization && (
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.organization}</p>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Formation</h3>
            </div>

            {data.education.map((edu, index) => (
              <div
                key={edu.id}
                className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800 last:pb-0 group hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full -translate-x-[9px] group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-3">
                    {edu.year}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
