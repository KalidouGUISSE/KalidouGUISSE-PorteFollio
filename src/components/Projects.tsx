import { useState, useMemo, useEffect } from 'react';
import { PortfolioData } from '../types/portfolio';
import {
  Github, ExternalLink, Code2, Layers, Terminal,
  ChevronDown, ChevronUp, SlidersHorizontal, Filter,
  Database, Smartphone, Globe, Server
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { TechnologyFilter } from './TechnologyFilter';

interface ProjectsProps {
  data: PortfolioData;
}

type ViewMode = 'grid' | 'list' | 'mobile-accordion';

// Catégories de technologies avec icônes
const TECH_CATEGORIES = [
  { name: 'Frontend', icon: <Globe size={14} />, color: 'blue' },
  { name: 'Backend', icon: <Server size={14} />, color: 'green' },
  { name: 'Mobile', icon: <Smartphone size={14} />, color: 'purple' },
  { name: 'Database', icon: <Database size={14} />, color: 'orange' },
  { name: 'Tools', icon: <SlidersHorizontal size={14} />, color: 'gray' },
];

// Fonction pour catégoriser une technologie
const getTechCategory = (tech: string): string => {
  const frontend = ['React', 'Angular', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS'];
  const backend = ['PHP', 'Laravel', 'Node', 'Java', 'Python', 'C'];
  const mobile = ['Flutter', 'Dart'];
  const database = ['MySQL', 'MongoDB', 'PostgreSQL'];
  
  if (frontend.includes(tech)) return 'Frontend';
  if (backend.includes(tech)) return 'Backend';
  if (mobile.includes(tech)) return 'Mobile';
  if (database.includes(tech)) return 'Database';
  return 'Tools';
};

// Composant: MobileAccordionItem
const MobileAccordionItem = ({ 
  project, 
  isDark,
  isOpen,
  onToggle
}: { 
  project: PortfolioData['projects'][0];
  isDark: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const allTechnologies = [
    ...project.technologies.core,
    ...project.technologies.tools,
    ...project.technologies.packages.filter(p => p)
  ];

  return (
    <div
      className={`
        rounded-xl border overflow-hidden transition-all duration-300
        ${isDark 
          ? 'bg-gray-800/50 border-gray-700' 
          : 'bg-gray-50 border-gray-200'
        }
      `}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`project-content-${project.id}`}
        className={`
          w-full px-4 py-4 flex items-center justify-between gap-4
          ${isDark 
            ? 'hover:bg-gray-800/80' 
            : 'hover:bg-gray-100'
          }
          transition-colors duration-200
        `}
      >
        <div className="flex items-center gap-3">
          <div className={`
            p-2 rounded-lg
            ${isDark ? 'bg-gray-700' : 'bg-gray-200'}
          `}>
            <Code2 size={18} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
          </div>
          <span className={`
            font-semibold text-left
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            {project.title}
          </span>
        </div>
        <ChevronUp 
          size={20}
          className={`
            transition-transform duration-300 flex-shrink-0
            ${isOpen ? 'rotate-180' : ''}
            ${isDark ? 'text-gray-400' : 'text-gray-500'}
          `}
        />
      </button>

      <div
        id={`project-content-${project.id}`}
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className={`
          px-4 pb-4 space-y-4
          ${isDark ? 'border-t border-gray-700' : 'border-t border-gray-200'}
        `}>
          <p className={`
            pt-4 text-sm leading-relaxed
            ${isDark ? 'text-gray-300' : 'text-gray-600'}
          `}>
            {project.shortDescription}
          </p>

          <div>
            <h4 className={`
              text-xs font-semibold uppercase tracking-wider mb-2
              ${isDark ? 'text-gray-400' : 'text-gray-500'}
            `}>
              Réalisations
            </h4>
            <ul className="space-y-1">
              {project.achievements.slice(0, 4).map((achievement, idx) => (
                <li 
                  key={idx}
                  className={`
                    flex items-start gap-2 text-xs
                    ${isDark ? 'text-gray-400' : 'text-gray-600'}
                  `}
                >
                  <span className={`
                    w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0
                    ${isDark ? 'bg-blue-400' : 'bg-blue-500'}
                  `} />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`
              text-xs font-semibold uppercase tracking-wider mb-2
              ${isDark ? 'text-gray-400' : 'text-gray-500'}
            `}>
              Technologies ({allTechnologies.length})
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {allTechnologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`
                    px-2 py-0.5 text-xs font-medium rounded-full
                    ${isDark 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-200 text-gray-700'
                    }
                  `}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={`
            pt-2 flex flex-wrap gap-2
          `}>
            {(project.links.github || project.links.backend || project.links.frontend) && (
              <a
                href={project.links.github || project.links.backend || project.links.frontend || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                  ${isDark 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }
                `}
              >
                <Github size={14} />
                Code
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                  ${isDark 
                    ? 'bg-blue-600/20 text-blue-400' 
                    : 'bg-blue-100 text-blue-600'
                  }
                `}
              >
                <ExternalLink size={14} />
                Demo
              </a>
            )}
            {project.links.docs && (
              <a
                href={project.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                  ${isDark 
                    ? 'bg-gray-700 text-gray-300' 
                    : 'bg-gray-200 text-gray-700'
                  }
                `}
              >
                <Terminal size={14} />
                API
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant: ProjectCard
const ProjectCard = ({ 
  project, 
  isDark 
}: { 
  project: PortfolioData['projects'][0];
  isDark: boolean;
}) => {
  const allTechnologies = [
    ...project.technologies.core,
    ...project.technologies.tools,
    ...project.technologies.packages.filter(p => p)
  ];

  return (
    <article
      className={`
        group relative flex flex-col h-full rounded-xl border transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-xl
        ${isDark 
          ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:border-gray-600' 
          : 'bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300'
        }
      `}
      aria-labelledby={`project-title-${project.id}`}
    >
      <div className={`
        px-6 py-4 rounded-t-xl border-b transition-colors duration-300
        ${isDark 
          ? 'bg-gradient-to-r from-gray-800 to-gray-750 border-gray-700' 
          : 'bg-gradient-to-r from-gray-100 to-gray-50 border-gray-200'
        }
      `}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`
              p-2 rounded-lg transition-transform duration-300 group-hover:scale-110
              ${isDark ? 'bg-gray-700' : 'bg-gray-200'}
            `}>
              <Code2 
                size={20} 
                className={isDark ? 'text-blue-400' : 'text-blue-600'} 
              />
            </div>
            <h3 
              id={`project-title-${project.id}`}
              className={`
                text-lg font-bold leading-tight
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}
            >
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-4">
        <p className={`
          text-sm leading-relaxed line-clamp-3
          ${isDark ? 'text-gray-300' : 'text-gray-600'}
        `}>
          {project.shortDescription}
        </p>

        <div className="space-y-2">
          <h4 className={`
            text-xs font-semibold uppercase tracking-wider
            ${isDark ? 'text-gray-400' : 'text-gray-500'}
          `}>
            Réalisations
          </h4>
          <ul className="space-y-1">
            {project.achievements.slice(0, 3).map((achievement, idx) => (
              <li 
                key={idx}
                className={`
                  flex items-start gap-2 text-xs leading-relaxed
                  ${isDark ? 'text-gray-400' : 'text-gray-600'}
                `}
              >
                <span className={`
                  w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0
                  ${isDark ? 'bg-blue-400' : 'bg-blue-500'}
                `} />
                <span className="line-clamp-1">{achievement}</span>
              </li>
            ))}
            {project.achievements.length > 3 && (
              <li className={`
                text-xs italic
                ${isDark ? 'text-gray-500' : 'text-gray-400'}
              `}>
                +{project.achievements.length - 3} autres...
              </li>
            )}
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className={`
            text-xs font-semibold uppercase tracking-wider
            ${isDark ? 'text-gray-400' : 'text-gray-500'}
          `}>
            Technologies
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {allTechnologies.slice(0, 6).map((tech, idx) => (
              <span
                key={idx}
                className={`
                  px-2 py-0.5 text-xs font-medium rounded-full transition-all duration-200
                  ${isDark 
                    ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                    : 'bg-gray-200 text-gray-700 border border-gray-300'
                  }
                `}
              >
                {tech}
              </span>
            ))}
            {allTechnologies.length > 6 && (
              <span className={`
                px-2 py-0.5 text-xs font-medium rounded-full
                ${isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'}
              `}>
                +{allTechnologies.length - 6}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className={`
        px-6 py-4 rounded-b-xl border-t flex items-center justify-between gap-4
        ${isDark 
          ? 'bg-gray-800/50 border-gray-700' 
          : 'bg-gray-50 border-gray-200'
        }
      `}>
        <div className="flex items-center gap-2">
          {(project.links.github || project.links.backend || project.links.frontend) && (
            <a
              href={project.links.github || project.links.backend || project.links.frontend || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code de ${project.title}`}
              className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
                transition-all duration-200 hover:scale-105
                ${isDark 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
              `}
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Démo de ${project.title}`}
              className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
                transition-all duration-200 hover:scale-105
                ${isDark 
                  ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-600/30' 
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'
                }
              `}
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
          {project.links.docs && (
            <a
              href={project.links.docs}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Documentation de ${project.title}`}
              className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
                transition-all duration-200 hover:scale-105
                ${isDark 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
              `}
            >
              <Terminal size={16} />
              <span>API</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const Projects = ({ data }: ProjectsProps) => {
  const { isDark } = useTheme();
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewMode('mobile-accordion');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Extraire technologies avec catégories
  const techCategories = useMemo(() => {
    const categories: Record<string, string[]> = {};
    
    data.projects.forEach(project => {
      [...project.technologies.core, ...project.technologies.tools].forEach(t => {
        const cat = getTechCategory(t);
        if (!categories[cat]) categories[cat] = [];
        if (!categories[cat].includes(t)) categories[cat].push(t);
      });
    });
    
    return Object.entries(categories).map(([name, items]) => ({
      name,
      items: items.sort(),
      icon: TECH_CATEGORIES.find(c => c.name === name)?.icon || <Code2 size={14} />,
      color: TECH_CATEGORIES.find(c => c.name === name)?.color || 'gray'
    }));
  }, [data.projects]);

  // Filtrer les projets
  const filteredProjects = useMemo(() => {
    return data.projects.filter(project => {
      const matchesSearch = 
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.achievements.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTechs = selectedTechs.length === 0 || selectedTechs.some(tech => 
        project.technologies.core.includes(tech) ||
        project.technologies.tools.includes(tech) ||
        project.technologies.packages.includes(tech)
      );

      return matchesSearch && matchesTechs;
    });
  }, [data.projects, searchQuery, selectedTechs]);

  const handleToggleTech = (tech: string) => {
    setSelectedTechs(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedTechs([]);
  };

  const handleAccordionToggle = (projectId: string) => {
    setOpenAccordionId(prev => prev === projectId ? null : projectId);
  };

  return (
    <section 
      className="py-20 px-6 relative z-10 bg-white dark:bg-gray-900" 
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Projets Réalisés
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full" />
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl">
              {filteredProjects.length} projet{filteredProjects.length !== 1 ? 's' : ''} trouvé{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="flex items-center gap-2 p-1 rounded-lg bg-gray-100 dark:bg-gray-800 animate-fade-in-up animation-delay-200">
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Vue grille"
              className={`
                flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                ${viewMode === 'grid'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }
              `}
            >
              <Layers size={16} />
              <span className="hidden sm:inline">Grille</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              aria-label="Vue liste"
              className={`
                flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                ${viewMode === 'list'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }
              `}
            >
              <Terminal size={16} />
              <span className="hidden sm:inline">Liste</span>
            </button>
            <button
              onClick={() => setViewMode('mobile-accordion')}
              aria-label="Vue mobile avec accordéons"
              className={`
                flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                ${viewMode === 'mobile-accordion'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }
              `}
            >
              <ChevronDown size={16} />
              <span className="hidden sm:inline">Accordéon</span>
            </button>
          </div>
        </div>

        {/* Filter Toggle Button */}
        <div className="mb-4">
          <button
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            className={ `
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              transition-all duration-200
              ${isDark
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
              }
            `}
            aria-expanded={isFilterVisible}
            aria-controls="filter-section"
          >
            <Filter size={16} className={selectedTechs.length > 0 ? 'text-blue-500' : ''} />
            <span>Filtres</span>
            {selectedTechs.length > 0 && (
              <span className="px-2 py-0.5 text-xs bg-blue-500 text-white rounded-full">
                {selectedTechs.length}
              </span>
            )}
            <ChevronDown
              size={16}
              className={`
                transition-transform duration-200
                ${isFilterVisible ? 'rotate-180' : ''}
              `}
            />
          </button>
        </div>

        {/* Search & Filters */}
        <div
          id="filter-section"
          className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${isFilterVisible ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <TechnologyFilter
            techCategories={techCategories}
            selectedTechs={selectedTechs}
            searchQuery={searchQuery}
            isDark={isDark}
            onToggleTech={handleToggleTech}
            onResetFilters={handleResetFilters}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Projects Display */}
        {filteredProjects.length === 0 ? (
          <div className={`
            text-center py-16 rounded-xl border border-dashed
            ${isDark 
              ? 'border-gray-700 text-gray-400' 
              : 'border-gray-300 text-gray-500'
            }
          `}>
            <Code2 size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">Aucun projet trouvé</p>
            <p className="text-sm mt-2">Essayez d'ajuster vos critères de recherche</p>
          </div>
        ) : (
          <>
            {viewMode === 'mobile-accordion' && (
              <div className="flex flex-col gap-3" role="list" aria-label="Projets en accordéon">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                    role="listitem"
                  >
                    <MobileAccordionItem
                      project={project}
                      isDark={isDark}
                      isOpen={openAccordionId === project.id}
                      onToggle={() => handleAccordionToggle(project.id)}
                    />
                  </div>
                ))}
              </div>
            )}

            {viewMode === 'grid' && (
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                role="list"
                aria-label="Projets en grille"
              >
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    role="listitem"
                  >
                    <ProjectCard project={project} isDark={isDark} />
                  </div>
                ))}
              </div>
            )}

            {viewMode === 'list' && (
              <div className="flex flex-col gap-4" role="list" aria-label="Projets en liste">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    role="listitem"
                  >
                    <ProjectCard project={project} isDark={isDark} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Stats Section */}
        <div className={`
          mt-16 p-8 rounded-2xl border
          ${isDark 
            ? 'bg-gray-800/30 border-gray-700' 
            : 'bg-gray-50 border-gray-200'
          }
        `}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className={`
                text-4xl font-bold mb-2
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}>
                {filteredProjects.length}
              </div>
              <div className={`
                text-sm font-medium uppercase tracking-wider
                ${isDark ? 'text-gray-400' : 'text-gray-500'}
              `}>
                Projets
              </div>
            </div>
            <div>
              <div className={`
                text-4xl font-bold mb-2
                ${isDark ? 'text-blue-400' : 'text-blue-600'}
              `}>
                {new Set(filteredProjects.flatMap(p => p.technologies.core)).size}+
              </div>
              <div className={`
                text-sm font-medium uppercase tracking-wider
                ${isDark ? 'text-gray-400' : 'text-gray-500'}
              `}>
                Technologies
              </div>
            </div>
            <div>
              <div className={`
                text-4xl font-bold mb-2
                ${isDark ? 'text-green-400' : 'text-green-600'}
              `}>
                {filteredProjects.filter(p => p.links.demo).length}
              </div>
              <div className={`
                text-sm font-medium uppercase tracking-wider
                ${isDark ? 'text-gray-400' : 'text-gray-500'}
              `}>
                Démos Live
              </div>
            </div>
            <div>
              <div className={`
                text-4xl font-bold mb-2
                ${isDark ? 'text-purple-400' : 'text-purple-600'}
              `}>
                {filteredProjects.filter(p => p.links.github || p.links.backend || p.links.frontend).length}
              </div>
              <div className={`
                text-sm font-medium uppercase tracking-wider
                ${isDark ? 'text-gray-400' : 'text-gray-500'}
              `}>
                Open Source
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
