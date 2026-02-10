import { useEffect, useRef } from 'react';
import { PortfolioData } from '../types/portfolio';
import {
  X, Github, ExternalLink, Terminal, Calendar,
  Target, Trophy, Users, FileText, Clock,
  CheckCircle2, ChevronLeft, ChevronRight,
  Database, Globe, Smartphone, Server, Layers
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectDetailModalProps {
  project: PortfolioData['projects'][0] | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (direction: 'prev' | 'next') => void;
  hasNavigation?: boolean;
}

const getTechIcon = (tech: string) => {
  const frontend = ['React', 'Angular', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS'];
  const backend = ['PHP', 'Laravel', 'Node', 'Java', 'Python', 'C', 'Node.js', 'Express.js'];
  const mobile = ['Flutter', 'Dart'];
  const database = ['MySQL', 'MongoDB', 'PostgreSQL', 'Prisma'];
  
  if (frontend.includes(tech)) return <Globe size={14} className="text-blue-400" />;
  if (backend.includes(tech)) return <Server size={14} className="text-green-400" />;
  if (mobile.includes(tech)) return <Smartphone size={14} className="text-purple-400" />;
  if (database.includes(tech)) return <Database size={14} className="text-orange-400" />;
  return <Layers size={14} className="text-gray-400" />;
};

const ProgressBar = ({ value, max = 100 }: { value: number; max?: number }) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
    </div>
  );
};

const DetailSection = ({
  title,
  icon: Icon,
  children,
  isDark
}: {
  title: string;
  icon: typeof Target;
  children: React.ReactNode;
  isDark: boolean;
}) => (
  <section className="space-y-3">
    <div className="flex items-center gap-2">
      <div className={`p-1.5 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <Icon size={16} className="text-blue-500" />
      </div>
      <h3 className={`text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
    </div>
    <div className={`pl-9 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
      {children}
    </div>
  </section>
);

export const ProjectDetailModal = ({
  project,
  isOpen,
  onClose,
  onNavigate,
  hasNavigation = false
}: ProjectDetailModalProps) => {
  const { isDark } = useTheme();
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = '';
      previousActiveElement.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return;

      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'ArrowLeft' && onNavigate && hasNavigation) {
        onNavigate('prev');
      }
      if (e.key === 'ArrowRight' && onNavigate && hasNavigation) {
        onNavigate('next');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, onClose, onNavigate, hasNavigation]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className={`
          relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl
          animate-scale-in
          ${isDark 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200'
          }
          shadow-2xl
        `}
      >
        {/* Header */}
        <div className={`
          px-6 py-4 border-b flex items-center justify-between
          ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}
        `}>
          <div className="flex items-center gap-3">
            <div className={`
              p-2 rounded-lg
              ${isDark ? 'bg-gray-700' : 'bg-gray-200'}
            `}>
              <Target size={20} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
            </div>
            <h2 id="modal-title" className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {project.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {hasNavigation && onNavigate && (
              <>
                <button
                  onClick={() => onNavigate('prev')}
                  className={`
                    p-2 rounded-lg transition-colors
                    ${isDark 
                      ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                      : 'hover:bg-gray-200 text-gray-500 hover:text-gray-900'
                    }
                  `}
                  aria-label="Projet précédent"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => onNavigate('next')}
                  className={`
                    p-2 rounded-lg transition-colors
                    ${isDark 
                      ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                      : 'hover:bg-gray-200 text-gray-500 hover:text-gray-900'
                    }
                  `}
                  aria-label="Projet suivant"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
            <button
              onClick={onClose}
              className={`
                p-2 rounded-lg transition-colors
                ${isDark 
                  ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-200 text-gray-500 hover:text-gray-900'
                }
              `}
              aria-label="Fermer la fenêtre"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={`overflow-y-auto max-h-[calc(90vh-80px)] ${isDark ? 'scrollbar-thin-dark' : 'scrollbar-thin'}`}>
          <div className="p-6 space-y-8">
            {/* Vidéo de démonstration */}
            {project.videos && project.videos.length > 0 && (
              <div className="space-y-3">
                <h3 className={`text-sm font-semibold uppercase tracking-wider flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <ExternalLink size={16} />
                  Présentation du projet
                </h3>
                <div className="rounded-xl overflow-hidden bg-black aspect-video">
                  <video
                    src={project.videos[0]}
                    controls
                    className="w-full h-full object-cover"
                    poster="/image.png"
                  >
                    Votre navigateur ne prend pas en charge la lecture de vidéos.
                  </video>
                </div>
              </div>
            )}

            {/* Description */}
            <DetailSection title="Description complète" icon={FileText} isDark={isDark}>
              <p className="leading-relaxed">
                {project.shortDescription}
              </p>
            </DetailSection>

            {/* Réalisations */}
            <DetailSection title="Réalisations clés" icon={Trophy} isDark={isDark}>
              <ul className="space-y-2">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </DetailSection>

            {/* Technologies */}
            <DetailSection title="Technologies utilisées" icon={Layers} isDark={isDark}>
              <div className="space-y-4">
                {project.technologies.core.length > 0 && (
                  <div>
                    <h4 className={`text-xs font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Technologies principales
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.core.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`
                            px-3 py-1 text-sm font-medium rounded-full flex items-center gap-2
                            ${isDark 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-200 text-gray-700'
                            }
                          `}
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.technologies.tools.length > 0 && (
                  <div>
                    <h4 className={`text-xs font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Outils & Environnements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.tools.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`
                            px-3 py-1 text-sm font-medium rounded-full flex items-center gap-2
                            ${isDark 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-200 text-gray-700'
                            }
                          `}
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.technologies.packages.length > 0 && (
                  <div>
                    <h4 className={`text-xs font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Packages & Librairies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.packages.filter(p => p).map((pkg, idx) => (
                        <span
                          key={idx}
                          className={`
                            px-3 py-1 text-sm font-medium rounded-full
                            ${isDark 
                              ? 'bg-blue-900/30 text-blue-300 border border-blue-700' 
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                            }
                          `}
                        >
                          {pkg}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </DetailSection>

            {/* Informations additionnelles du projet */}
            <DetailSection title="Informations additionnelles" icon={Clock} isDark={isDark}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Dates clés */}
                {project.dates && (
                  <div className="space-y-2">
                    <h4 className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Dates clés
                    </h4>
                    <div className="space-y-1">
                      {project.dates.startDate && (
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar size={14} className="text-blue-500" />
                          <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            Début: {project.dates.startDate}
                          </span>
                        </div>
                      )}
                      {project.dates.endDate && (
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar size={14} className="text-green-500" />
                          <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            Fin: {project.dates.endDate}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* État d'avancement */}
                {project.status && (
                  <div className="space-y-2">
                    <h4 className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      État d'avancement
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium capitalize ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {project.status.label}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          project.status.completion >= 80 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : project.status.completion >= 50
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                          {project.status.completion}%
                        </span>
                      </div>
                      <ProgressBar value={project.status.completion} />
                    </div>
                  </div>
                )}

                {/* Parties prenantes */}
                {project.stakeholders && project.stakeholders.length > 0 && (
                  <div className="space-y-2">
                    <h4 className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Parties prenantes
                    </h4>
                    <div className="space-y-1">
                      {project.stakeholders.map((stakeholder, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Users size={14} className="text-purple-500" />
                          <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            {stakeholder.name} - {stakeholder.role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Objectifs */}
                {project.objectives && project.objectives.length > 0 && (
                  <div className="space-y-2">
                    <h4 className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Objectifs initiaux
                    </h4>
                    <ul className="space-y-1">
                      {project.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Target size={14} className="text-orange-500 mt-0.5" />
                          <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            {objective}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Livrables */}
                {project.deliverables && project.deliverables.length > 0 && (
                  <div className="space-y-2">
                    <h4 className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Livrables réalisés
                    </h4>
                    <ul className="space-y-1">
                      {project.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 size={14} className="text-green-500 mt-0.5" />
                          <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            {deliverable}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Jalons */}
                {project.milestones && project.milestones.length > 0 && (
                  <div className="space-y-2">
                    <h4 className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Jalons atteints
                    </h4>
                    <ul className="space-y-1">
                      {project.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Trophy size={14} className="text-yellow-500 mt-0.5" />
                          <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            {milestone}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Ressources */}
                {project.resources && project.resources.length > 0 && (
                  <div className="space-y-2">
                    <h4 className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Ressources mobilisées
                    </h4>
                    <ul className="space-y-1">
                      {project.resources.map((resource, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Database size={14} className="text-cyan-500 mt-0.5" />
                          <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            {resource}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Commentaires */}
                {project.comments && project.comments.length > 0 && (
                  <div className="space-y-2 md:col-span-2">
                    <h4 className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Commentaires et retours d'expérience
                    </h4>
                    <ul className="space-y-2">
                      {project.comments.map((comment, idx) => (
                        <li 
                          key={idx}
                          className={`
                            p-3 rounded-lg text-sm
                            ${isDark ? 'bg-gray-700/50' : 'bg-gray-100'}
                          `}
                        >
                          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            {comment}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </DetailSection>

            {/* Liens */}
            {(project.links.github || project.links.backend || project.links.frontend || project.links.demo || project.links.docs) && (
              <DetailSection title="Liens et ressources" icon={ExternalLink} isDark={isDark}>
                <div className="flex flex-wrap gap-3">
                  {(project.links.github || project.links.backend || project.links.frontend) && (
                    <a
                      href={project.links.github || project.links.backend || project.links.frontend || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105
                        ${isDark 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }
                      `}
                    >
                      <Github size={16} />
                      Code Source
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105
                        ${isDark 
                          ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-600/30' 
                          : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'
                        }
                      `}
                    >
                      <ExternalLink size={16} />
                      Démo Live
                    </a>
                  )}
                  {project.links.docs && (
                    <a
                      href={project.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105
                        ${isDark 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }
                      `}
                    >
                      <Terminal size={16} />
                      Documentation API
                    </a>
                  )}
                </div>
              </DetailSection>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
