import { Search, Filter, X } from 'lucide-react';

export interface TechCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}

interface TechnologyFilterProps {
  techCategories: TechCategory[];
  selectedTechs: string[];
  searchQuery: string;
  isDark: boolean;
  onToggleTech: (tech: string) => void;
  onResetFilters: () => void;
  onSearchChange: (query: string) => void;
}

export const TechnologyFilter = ({
  techCategories,
  selectedTechs,
  searchQuery,
  isDark,
  onToggleTech,
  onResetFilters,
  onSearchChange,
}: TechnologyFilterProps) => {
  return (
    <div
      className={`
        mb-8 rounded-xl border overflow-hidden
        ${isDark
          ? 'bg-gray-800/30 border-gray-700'
          : 'bg-gray-50 border-gray-200'
        }
      `}
    >
      <div className="relative">
        <Search
          size={18}
          className={`
            absolute left-4 top-1/2 -translate-y-1/2
            ${isDark ? 'text-gray-400' : 'text-gray-500'}
          `}
        />
        <input
          type="text"
          placeholder="Rechercher un projet par titre, description ou technologie..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={`
            w-full pl-12 pr-10 py-3 text-sm transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500
            ${isDark
              ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }
          `}
          aria-label="Rechercher un projet"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className={`
              absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full
              ${isDark
                ? 'hover:bg-gray-700 text-gray-400'
                : 'hover:bg-gray-200 text-gray-500'
              }
            `}
            aria-label="Effacer la recherche"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div
        className={`
          px-4 py-4 border-t
          ${isDark
            ? 'border-gray-700'
            : 'border-gray-200'
          }
        `}
      >
        <div className="flex items-center justify-between mb-3">
          <span
            className={`
              text-sm font-semibold flex items-center gap-2
              ${isDark ? 'text-gray-300' : 'text-gray-700'}
            `}
          >
            <Filter size={16} className={selectedTechs.length > 0 ? 'text-blue-500' : ''} />
            Technologies
            {selectedTechs.length > 0 && (
              <span className="px-2 py-0.5 text-xs bg-blue-500 text-white rounded-full">
                {selectedTechs.length}
              </span>
            )}
          </span>
          {(searchQuery || selectedTechs.length > 0) && (
            <button
              onClick={onResetFilters}
              className={`
                text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1
                transition-colors duration-200
                ${isDark
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              <X size={12} />
              Réinitialiser
            </button>
          )}
        </div>

        <div className="space-y-4">
          {techCategories.map((category) => (
            <div key={category.name} className="space-y-2">
              <div
                className={`
                  text-xs font-medium uppercase tracking-wider flex items-center gap-2
                  ${isDark ? 'text-gray-500' : 'text-gray-400'}
                `}
              >
                <span
                  className={`
                    p-1 rounded
                    ${isDark
                      ? `bg-${category.color}-900/30 text-${category.color}-400`
                      : `bg-${category.color}-100 text-${category.color}-600`
                    }
                  `}
                >
                  {category.icon}
                </span>
                {category.name}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => {
                  const isSelected = selectedTechs.includes(tech);
                  return (
                    <button
                      key={tech}
                      onClick={() => onToggleTech(tech)}
                      aria-pressed={isSelected}
                      className={`
                        px-3 py-1.5 text-xs font-medium rounded-lg
                        transition-all duration-200 flex items-center gap-1.5
                        hover:scale-105 active:scale-95
                        ${isSelected
                          ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30'
                          : isDark
                            ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 border border-gray-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300'
                        }
                      `}
                    >
                      {tech}
                      {isSelected && <X size={12} />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
