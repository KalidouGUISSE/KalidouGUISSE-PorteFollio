import { PortfolioData } from '../models/PortfolioModel';
import { Phone, Mail, MapPin, Linkedin, MessageCircle, Download, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  data: PortfolioData;
  onContact: (type: string, value: string) => void;
}

export const Hero = ({ data, onContact }: HeroProps) => {
  const { personalInfo } = data;

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-kalidou-guisse.pdf';
    link.download = 'CV-Kalidou-GUISSE.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-4 animate-slide-in-left">
              <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Disponible pour de nouveaux projets</span>
            </div>

            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-2 animate-slide-in-left bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white">
                {personalInfo.name}
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 animate-expand shadow-lg"></div>
            </div>

            <h2 className="text-2xl md:text-4xl text-blue-600 dark:text-blue-400 font-bold animate-slide-in-left animation-delay-200">
              {personalInfo.title}
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-in-left animation-delay-400">
              Développeur passionné spécialisé en <span className="font-semibold text-blue-600 dark:text-blue-400">Génie Logiciel</span>, transformant des idées en solutions web et mobile performantes.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 animate-slide-in-left animation-delay-500">
              <button
                onClick={scrollToContact}
                className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Me Contacter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleDownloadCV}
                className="group flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 dark:border-gray-700"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Télécharger CV
              </button>
            </div>

            <div className="space-y-3 pt-6 animate-slide-in-left animation-delay-700">
              <button
                onClick={() => onContact('phone', personalInfo.phone)}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Phone size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-medium">{personalInfo.phone}</span>
              </button>

              <button
                onClick={() => onContact('email', personalInfo.email)}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Mail size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-medium">{personalInfo.email}</span>
              </button>

              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-medium">{personalInfo.location}, {personalInfo.country}</span>
              </div>
            </div>

            <div className="flex gap-4 pt-6 animate-slide-in-left animation-delay-800">
              {personalInfo.whatsapp && (
                <button
                  onClick={() => onContact('whatsapp', personalInfo.whatsapp!)}
                  className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-110 hover:shadow-xl shadow-lg"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={24} />
                </button>
              )}

              {personalInfo.linkedin && (
                <button
                  onClick={() => onContact('linkedin', personalInfo.linkedin!)}
                  className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-xl shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </button>
              )}
            </div>
          </div>

          <div className="flex justify-center animate-fade-in-up animation-delay-400">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-80 h-90 md:w-96 md:h-90 object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-gray-800 transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
