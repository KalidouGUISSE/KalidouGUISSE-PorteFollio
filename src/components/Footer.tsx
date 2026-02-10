import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-gray-900 dark:to-gray-800 text-white py-12 relative z-10 border-t-4 border-blue-500 dark:border-blue-400">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">
            Kalidou GUISSE
          </h3>
          <p className="text-blue-100 dark:text-gray-300 text-lg mb-6">
            Développeur Full-stack | DevOps
          </p>

          <div className="pt-6 border-t border-blue-400/30 dark:border-gray-700">
            <p className="text-sm text-blue-100 dark:text-gray-400">
              &copy; {currentYear} Kalidou GUISSE. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
