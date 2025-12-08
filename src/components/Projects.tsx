import { useState, useEffect } from 'react';
import { PortfolioData } from '../models/PortfolioModel';
import { Github, BookOpen, ExternalLink, Image as ImageIcon, ChevronLeft, ChevronRight, Pause, Play, X } from 'lucide-react';

interface ProjectsProps {
  data: PortfolioData;
}

interface ImageCarouselProps {
  images: string[];
  projectTitle: string;
}

const ImageCarousel = ({ images, projectTitle }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay functionality
  useEffect(() => {
    if (images.length <= 1 || !isAutoPlaying) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, images.length]);

  // Progress bar animation
  useEffect(() => {
    if (images.length <= 1 || !isAutoPlaying) {
      setProgress(0);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / 40); // 40 steps for 4 seconds (100ms each)
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentIndex, isAutoPlaying, images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <ImageIcon size={20} />
          Aperçu ({images.length} image{images.length > 1 ? 's' : ''})
        </h4>
        {images.length > 1 && (
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-sm font-medium transition-colors"
            aria-label={isAutoPlaying ? 'Mettre en pause l\'autoplay' : 'Activer l\'autoplay'}
          >
            {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isAutoPlaying ? 'Pause' : 'Play'}
          </button>
        )}
      </div>

      <div
        className="relative h-64 md:h-80 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`${projectTitle} - Aperçu ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setZoomedImage(image)}
              />
            </div>
          ))}
        </div>

        {/* Contrôles de navigation */}
        {images.length > 1 && (
          <>
            {/* Boutons précédent/suivant */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Image précédente"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Image suivante"
            >
              <ChevronRight size={20} />
            </button>

            {/* Indicateurs */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>

            {/* Barre de progression */}
            {images.length > 1 && isAutoPlaying && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                <div
                  className="h-full bg-blue-500 transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </>
        )}

        {/* Compteur d'images */}
        <div className="absolute top-2 right-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Modal de zoom */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={zoomedImage}
              alt={`${projectTitle} - Zoom`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Fermer le zoom"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const Projects = ({ data }: ProjectsProps) => {
  return (
    <section className="py-20 px-6 relative z-10 bg-gray-50 dark:bg-gray-900/50" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projets Réalisés
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mes réalisations techniques et leur impact métier
          </p>
        </div>

        <div className="space-y-12">
          {data.projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header avec titre et boutons */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    )}
                    {project.links.backend && (
                      <a
                        href={project.links.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Github size={18} />
                        Backend
                      </a>
                    )}
                    {project.links.frontend && (
                      <a
                        href={project.links.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Github size={18} />
                        Frontend
                      </a>
                    )}
                    {project.links.docs && (
                      <a
                        href={project.links.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <BookOpen size={18} />
                        Documentation
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={18} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Description et réalisations */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Réalisations clés
                        </h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Technologies et images */}
                  <div className="space-y-6">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Technologies
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">
                            Core
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.core.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-green-600 dark:text-green-400 mb-2 uppercase tracking-wide">
                            Outils
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.tools.map((tool, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full font-medium"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2 uppercase tracking-wide">
                            Packages
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.packages.map((pkg, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full font-medium"
                              >
                                {pkg}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Images (optionnel) */}
                    {project.images && project.images.length > 0 && (
                      <ImageCarousel images={project.images} projectTitle={project.title} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
