import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À Propos' },
    { path: '/projects', label: 'Projets' },
    { path: '/skills', label: 'Compétences' },
    { path: '/experience', label: 'Parcours' },
    { path: '/tutors', label: 'Tuteurs' },
    // { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-gradient-to-r from-sky-400/80 via-sky-300/80 to-sky-200/80 dark:from-slate-900/80 dark:via-slate-800/80 dark:to-slate-700/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-800'
                : isDark
                ? 'text-white hover:text-blue-400'
                : 'text-gray-900 hover:text-blue-600'
            }`}
          >
            KG
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-300 relative group ${
                  location.pathname === item.path
                    ? isScrolled
                      ? 'text-blue-600 dark:text-blue-400'
                      : isDark
                      ? 'text-blue-400'
                      : 'text-blue-600'
                    : isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    : isDark
                    ? 'text-gray-300 hover:text-blue-400'
                    : 'text-gray-800 hover:text-blue-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  location.pathname === item.path
                    ? isScrolled
                      ? 'w-full bg-blue-600 dark:bg-blue-400'
                      : isDark
                      ? 'w-full bg-blue-400'
                      : 'w-full bg-blue-600'
                    : 'w-0 group-hover:w-full bg-blue-600 dark:bg-blue-400'
                }`}></span>
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  : isDark
                  ? 'bg-gray-800/50 hover:bg-gray-700/70'
                  : 'bg-white/50 hover:bg-gray-100/70'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className={isScrolled ? 'text-gray-700' : 'text-gray-800'} />
              )}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  : isDark
                  ? 'bg-gray-800/50 hover:bg-gray-700/70'
                  : 'bg-white/50 hover:bg-gray-100/70'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className={isScrolled ? 'text-gray-700' : 'text-gray-800'} />
              )}
            </button>

            <button
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  : isDark
                  ? 'text-gray-300 hover:text-blue-400'
                  : 'text-gray-800 hover:text-blue-600'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 py-4 rounded-lg shadow-lg animate-fade-in ${
            isScrolled
              ? 'bg-white dark:bg-gray-800'
              : 'bg-gradient-to-b from-sky-400/90 via-sky-300/90 to-sky-200/90 dark:from-slate-900/90 dark:via-slate-800/90 dark:to-slate-700/90 backdrop-blur-md'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block w-full text-left px-4 py-3 font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? isScrolled
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : isDark
                      ? 'text-blue-400 bg-blue-900/30'
                      : 'text-blue-600 bg-blue-50'
                    : isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                    : isDark
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/30'
                    : 'text-gray-800 hover:text-blue-600 hover:bg-gray-100/80'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
