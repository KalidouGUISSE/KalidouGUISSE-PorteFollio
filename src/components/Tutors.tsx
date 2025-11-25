import { PortfolioData } from '../models/PortfolioModel';
import { Users, Award, Mail, Phone, Linkedin } from 'lucide-react';

interface TutorsProps {
  data: PortfolioData;
}

export const Tutors = ({ data }: TutorsProps) => {
  return (
    <section className="py-20 px-6 relative z-10 bg-white dark:bg-gray-900" id="tutors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Tuteurs
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Les principaux formateurs et mentors qui m'ont accompagné dans mon parcours
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.tutors.map((tutor, index) => (
            <div
              key={tutor.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative bg-gradient-to-br from-green-500 to-green-700 p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative flex items-center gap-4 text-white">
                  <div className="flex-shrink-0">
                    {tutor.photo ? (
                      <img
                        src={tutor.photo}
                        alt={tutor.name}
                        className="w-20 h-20 rounded-xl object-cover border-2 border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        <Users size={32} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">{tutor.name}</h3>
                    <p className="text-green-100 text-lg">{tutor.role}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="text-blue-600 dark:text-blue-400" size={20} />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                      Informations
                    </span>
                  </div>
                  <div className="space-y-2">
                    {tutor.organization && (
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {tutor.organization}
                      </p>
                    )}
                    {tutor.period && (
                      <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold rounded-full">
                        {tutor.period}
                      </span>
                    )}
                    {tutor.email && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Mail size={16} />
                        <span className="text-sm">{tutor.email}</span>
                      </div>
                    )}
                    {tutor.phone && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Phone size={16} />
                        <span className="text-sm">{tutor.phone}</span>
                      </div>
                    )}
                    {tutor.linkedin && (
                      <div className="flex items-center gap-2">
                        <Linkedin size={16} className="text-blue-600 dark:text-blue-400" />
                        <a
                          href={tutor.linkedin.startsWith('http') ? tutor.linkedin : `https://${tutor.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                        >
                          Profil LinkedIn
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {tutor.description && (
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {tutor.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};