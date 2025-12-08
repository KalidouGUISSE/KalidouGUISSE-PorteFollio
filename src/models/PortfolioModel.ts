type Observer = (data: PortfolioData) => void;

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    country: string;
    photo: string;
    linkedin?: string;
    whatsapp?: string;
  };
  bio: string;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
  tutors: Tutor[];
}

export interface Experience {
  id: string;
  title: string;
  organization?: string;
  period: string;
  description: string;
  type: 'work' | 'training';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface Skill {
  id: string;
  category: string;
  items: string[];
}

export interface Language {
  id: string;
  name: string;
  level: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string; // Description impactante (3-4 lignes)
  achievements: string[]; // Réalisations clés (5-8 bullet points)
  technologies: {
    core: string[]; // Technologies principales
    tools: string[]; // Outils
    packages: string[]; // Packages/frameworks
  };
  images?: string[]; // 1-2 images (mockups/captures)
  links: {
    github?: string; // Repository principal
    backend?: string; // GitHub backend
    frontend?: string; // GitHub ou déploiement frontend
    docs?: string; // Documentation
    demo?: string; // Démo/live
  };
}

export interface Tutor {
  id: string;
  name: string;
  role: string;
  organization?: string;
  period?: string;
  description?: string;
  photo?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
}

export class PortfolioModel {
  private static instance: PortfolioModel;
  private data: PortfolioData;
  private observers: Observer[] = [];

  private constructor() {
    this.data = this.initializeData();
  }

  public static getInstance(): PortfolioModel {
    if (!PortfolioModel.instance) {
      PortfolioModel.instance = new PortfolioModel();
    }
    return PortfolioModel.instance;
  }

  public subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  private notify(): void {
    this.observers.forEach(observer => observer(this.data));
  }

  public getData(): PortfolioData {
    return { ...this.data };
  }

  public updateData(newData: Partial<PortfolioData>): void {
    this.data = { ...this.data, ...newData };
    this.notify();
  }

  private initializeData(): PortfolioData {
    return {
      personalInfo: {
        name: 'Kalidou GUISSE',
        title: 'Informaticien',
        phone: '+221 78 445 8786',
        email: 'kalidouguisse16@gmail.com',
        location: 'Dakar',
        country: 'Sénégal',
        photo: '/image.png',
        linkedin: 'https://www.linkedin.com/in/kalidou-guiss%C3%A9-a507402b2/',
        whatsapp: '+221784458786'
      },
      bio: "Je suis un candidat motivé avec une solide formation en Informatique, spécialisé en Génie Logiciel. J’ai acquis une expérience pratique dans le développement d’applications web et mobiles à travers des projets académiques et professionnels. J’ai également suivi une formation intensive à la Sonatel Académie (ODC – Orange Digital Center), où j’ai bénéficié des enseignements de formateurs expérimentés et réalisé de nombreux projets concrets avec une large variété d’outils et de langages. Mon objectif est de mettre mes compétences techniques et mon esprit d’innovation au service de projets ambitieux.",
      experiences: [
        {
          id: 'exp1',
          title: 'Formation École du Code SONATEL Aquademie',
          period: '2025',
          description: 'Formation avancée en développement logiciel',
          type: 'training'
        }
      ],
      education: [
        {
          id: 'edu1',
          degree: 'Licence en Informatique, option Génie Logiciel',
          institution: 'Université Iba Der Thiam de Thiès',
          year: '2020 - 2023'
        },
        {
          id: 'edu2',
          degree: 'Baccalauréat Scientifique (Série S2)',
          institution: 'École privée Serigne Sohibou (G3S)',
          year: '2020'
        }
      ],
      skills: [
        {
          id: 'skill1',
          category: 'Développement Backend',
          items: ['PHP (Objet)', 'Laravel', 'Node', 'Java']
        },
        {
          id: 'skill2',
          category: 'Développement Frontend',
          items: ['React', 'Angular']
        },
        {
          id: 'skill3',
          category: 'Développement Mobile',
          items: ['Flutter', 'Dart']
        },
        {
          id: 'skill4',
          category: 'Développement Web',
          items: ['HTML', 'CSS', 'JavaScript']
        },
        {
          id: 'skill5',
          category: 'Langages de programmation',
          items: ['Python', 'Java', 'PHP', 'C']
        },
        {
          id: 'skill6',
          category: 'Bases de données',
          items: ['MySQL', 'MongoDB', 'postgress']
        },
        {
          id: 'skill7',
          category: 'Modélisation',
          items: ['UML', 'Méthodologies agiles']
        },
        {
          id: 'skill8',
          category: 'ai ',
          items: ['V0','boltai','loveble','copalote','kilocode','blackbox','chatGPT']
        },
        {
          id: 'skill9',
          category: 'Autres compétences',
          items: ['Installation et maintenance des systèmes photovoltaïques']
        }
      ],
      languages: [
        {
          id: 'lang1',
          name: 'Poulaar',
          level: 'Langue maternelle'
        },
        {
          id: 'lang2',
          name: 'Wolof',
          level: 'Bilangue'
        },
        {
          id: 'lang3',
          name: 'Français',
          level: 'Courant'
        },
        {
          id: 'lang3',
          name: 'Français',
          level: 'Notions'
        },
      ],
      projects: [
        {
          id: 'proj1',
          "title": "API de Gestion Bancaire Laravel",
          "shortDescription": "API RESTful robuste pour système bancaire complet avec authentification multi-niveaux, gestion sécurisée des comptes et transactions financières, déployée en production.",
          "achievements": [
            "Développé une API complète avec 25+ endpoints RESTful pour gestion de clients, comptes et transactions",
            "Implémenté un système d'authentification multi-utilisateur (Admin/Client) avec Laravel Passport et tokens JWT",
            "Conçu un système de blocage/déblocage automatique des comptes avec jobs programmés et archivage vers base secondaire",
            "Intégré une documentation interactive Swagger/OpenAPI avec génération automatique des spécifications",
            "Mis en place des règles de validation personnalisées pour les formats Sénégalais (téléphone +221, NCI 13 chiffres)",
            "Déployé l'application en production sur Render avec base de données Railway PostgreSQL",
            "Implémenté un système de logging complet des opérations utilisateur pour traçabilité et audit",
            "Développé des tests unitaires et fonctionnels couvrant les fonctionnalités critiques"
          ],
          "technologies": {
            "core": [
              "PHP 8.1+",
              "Laravel 10.x",
              "PostgreSQL"
            ],
            "tools": [
              "Git",
              "Composer",
              "NPM",
              "Vite",
              "Docker",
              "Laravel Sail"
            ],
            "packages": [
              "Laravel Passport",
              "Laravel Sanctum", 
              "Swagger-PHP",
              "Doctrine DBAL",
              "Laravel Debugbar",
              "PHPUnit",
              "Axios"
            ]
          },
          images: [
            "public/assete/projetLaravel/image1.png",
            "public/assete/projetLaravel/image2.png",
            "public/assete/projetLaravel/image3.png",
            "public/assete/projetLaravel/image4.png",
            "public/assete/projetLaravel/image5.png",
            // "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            // "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
            // "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
          ],
          links: {
            github: "https://github.com/KalidouGUISSE/projetlaravel/tree/production",
            docs: "https://kalidou-guisse-projetlaravel.onrender.com/api/documentation",
            demo: "https://kalidou-guisse-projetlaravel.onrender.com"
          }
        },

        // {
        //   id: 'proj2',
        //   title: 'Plateforme RH & Gestion des Salaires',
        //   shortDescription: "Solution complète de gestion RH avec architecture distribuée, authentification avancée et génération automatique de bulletins de salaire. Interface moderne avec tableaux de bord interactifs.",
        //   achievements: [
        //     "Développement d'application full-stack avec séparation backend/frontend",
        //     "Implémentation de système de rôles (Super Admin, Admin, Caissier)",
        //     "Création de tableaux de bord statistiques avec visualisations dynamiques",
        //     "Génération automatique de bulletins PDF avec mise en page professionnelle",
        //     "Authentification JWT sécurisée avec gestion des sessions",
        //     "Validation des données côté serveur avec Zod",
        //     "Documentation API automatisée avec Swagger"
        //   ],
        //   technologies: {
        //     core: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        //     tools: ["Vite", "Prisma", "Git", "VS Code"],
        //     packages: ["Express", "JWT", "Zod", "TailwindCSS", "React Router"]
        //   },
        //   images: [
        //     "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
        //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
        //   ],
        //   links: {
        //     backend: "https://github.com/KalidouGUISSE/backend-Gestion-Salaire",
        //     frontend: "https://github.com/KalidouGUISSE/-frontend-Gestion-Salaire",
        //     docs: "https://backend-gestion-salaire.onrender.com/api-docs"
        //   }
        // },

        {
          "id": "payroll-backend-api",
          "title": "API - Système de Gestion des Salaires Multi-Entreprises",
          "shortDescription": "API REST complète développée avec Node.js et TypeScript pour la gestion automatisée des salaires. Elle offre une authentification sécurisée, gestion des employés avec QR codes, cycles de paie automatisés et génération de documents PDF. L'architecture modulaire assure une scalabilité optimale avec tests automatiques et documentation Swagger intégrée.",
          "achievements": [
            "Développement d'une API REST robuste avec authentification JWT et autorisation basée sur les rôles (SUPER_ADMIN, ADMIN, CASHIER, EMPLOYEE)",
            "Implémentation d'un système multi-entreprises avec isolation complète des données et contrôle d'accès granulaire",
            "Génération automatique de bulletins de salaire et reçus de paiement en PDF avec Puppeteer et PDFKit",
            "Intégration de QR codes pour validation sécurisée des paiements et suivi automatisé des présences",
            "Architecture modulaire avec séparation claire des couches (controllers, services, repositories) utilisant Prisma ORM",
            "Suite de tests complète (unitaires et d'intégration) avec Jest, couvrant plus de 90% du code",
            "Documentation API interactive complète avec Swagger UI et tests automatiques des endpoints",
            "Déploiement automatisé avec Docker Compose et configuration Render pour production"
          ],
          "technologies": {
            "core": ["Node.js", "TypeScript", "Express.js", "Prisma", "PostgreSQL"],
            "tools": ["Docker", "Jest", "Swagger", "ESLint", "Prettier"],
            "packages": ["bcrypt", "jsonwebtoken", "multer", "qrcode", "pdfkit", "puppeteer", "nodemailer", "zod"]
          },
          "images": [
            "public/assete/apiGestionPaie/image.png",
          ],
          links: {
            frontend: "https://github.com/KalidouGUISSE/-frontend-Gestion-Salaire",
            backend: "https://github.com/KalidouGUISSE/backend-Gestion-Salaire",
            demo: "https://backend-gestion-salaire.onrender.com/api-docs",
          }
        },
        {
          "id": "payroll-frontend-app",
          "title": "Interface Frontend - Application de Gestion des Salaires",
          "shortDescription": "Interface utilisateur moderne développée avec React 19 et TypeScript pour la gestion complète des salaires. Elle propose une expérience fluide avec tableaux interactifs, graphiques analytiques, scan QR en temps réel et exports PDF/CSV. L'application est optimisée pour les performances avec lazy loading et cache intelligent. Et consome API Backend - Système de Gestion des Salaires Multi-Entreprises",
          "achievements": [
            "Développement d'une interface utilisateur moderne et accessible avec React 19, TypeScript et Tailwind CSS",
            "Implémentation de tableaux avancés avec TanStack Table offrant tri, filtrage, pagination et recherche en temps réel",
            "Intégration de graphiques interactifs avec Recharts pour l'analyse des KPIs et évolution des paiements",
            "Gestion optimisée des requêtes API avec React Query et cache intelligent réduisant les appels serveur de 60%",
            "Interface accessible respectant les standards WCAG avec navigation clavier et sémantique HTML",
            "Fonctionnalités d'export intégrées (CSV pour données, PDF pour documents) avec génération côté client",
            "Scan QR en temps réel pour le suivi des présences utilisant html5-qrcode",
            "Architecture modulaire respectant SOLID/DRY avec séparation claire des responsabilités (API, composants, stores)"
          ],
          "technologies": {
            "core": ["React", "TypeScript", "Vite", "Tailwind CSS"],
            "tools": ["ESLint", "Vite", "shadcn/ui", "Lucide Icons"],
            "packages": ["React Query", "Zustand", "TanStack Table", "Recharts", "Axios", "Zod", "React Hook Form", "React Router"]
          },
          "images": [
            "public/assete/apiGestionSalaire/image.png",
            "public/assete/apiGestionSalaire/image1.png",
            "public/assete/apiGestionSalaire/image2.png",
            "public/assete/apiGestionSalaire/image3.png",
            "public/assete/apiGestionSalaire/image4.png",
            "public/assete/apiGestionSalaire/image5.png",
          ],
          links: {
            backend: "https://github.com/KalidouGUISSE/backend-Gestion-Salaire",
            frontend: "https://github.com/KalidouGUISSE/-frontend-Gestion-Salaire",
            demo:"https://frontend-gestion-salaire.vercel.app"
          }
        },

        {
          id: 'proj3',
          title: 'Système de Gestion de Cargaisons',
          shortDescription: "Plateforme complète de gestion logistique multi-modale (air, mer, route) avec règles métier complexes et calculs automatiques. Interface moderne avec mises à jour temps réel.",
          achievements: [
            "Développement d'application full-stack avec architecture modulaire",
            "Implémentation de règles métier complexes pour compatibilité produits/cargaisons",
            "Calcul automatique des montants et limitations de produits",
            "Interface utilisateur moderne avec TailwindCSS",
            "API TypeScript robuste avec gestion d'erreurs avancée",
            "Optimisation des performances pour gros volumes de données",
            "Système de notifications temps réel pour mises à jour logistiques"
          ],
          technologies: {
            core: ["Node.js", "TypeScript", "MySQL"],
            tools: ["Git", "VS Code", "Postman"],
            packages: ["Express", "TailwindCSS", "Socket.io", "Joi"]
          },
          // images: [
          //   "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
          //   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
          // ],
          links: {
            github: "https://github.com/KalidouGUISSE/gestionCargaisonV"
          }
        },

        {
          id: 'proj4',
          title: 'Gestion des Apprenants ODC',
          shortDescription: "Plateforme académique complète pour la gestion d'un centre de formation avec automatisation administrative et suivi pédagogique détaillé.",
          achievements: [
            "Développement from-scratch avec architecture SOLID + MVC",
            "Système complet de gestion des apprenants et promotions",
            "Suivi des absences, notes et filières académiques",
            "Automatisation des tâches administratives répétitives",
            "Interface intuitive pour enseignants et administrateurs",
            "Génération automatique de rapports et statistiques",
            "Sécurité avancée avec gestion des rôles et permissions"
          ],
          technologies: {
            core: ["PHP", "MySQL", "HTML/CSS"],
            tools: ["Git", "XAMPP", "VS Code"],
            packages: ["MVC Framework", "PDO", "Bootstrap"]
          },
          // images: [
          //   "public/assete/image1 copy.png",
          //   "public/assete/image1.png",
          //   "public/assete/image2.png"
          // ],
          links: {
            github: "https://github.com/yourusername/odc-student-management"
          }
        },

        {
          id: 'proj5',
          title: 'Gestion de Pharmacie',
          shortDescription: "Solution complète d'automatisation pour pharmacies avec gestion intelligente des stocks et système d'alertes prédictives.",
          achievements: [
            "Développement d'application web full-stack Laravel",
            "Système de gestion automatisée des stocks et inventaires",
            "Implémentation d'alertes pour produits en rupture ou périmés",
            "Plateforme d'échange B2B entre pharmacies",
            "Interface client pour consultation de disponibilité",
            "Génération automatique de rapports de vente",
            "Optimisation des performances pour gros volumes de données"
          ],
          technologies: {
            core: ["PHP", "Laravel", "MySQL"],
            tools: ["Composer", "Git", "VS Code"],
            packages: ["Laravel Framework", "Eloquent ORM", "Blade Templates"]
          },
          links: {
            github: "https://github.com/yourusername/pharmacy-management"
          }
        },

        {
          id: 'proj6',
          title: 'MaxitSA – Application de Transfert d\'Argent',
          shortDescription: "Application de transfert d'argent avec architecture propre et suivi temps réel des transactions financières.",
          achievements: [
            "Architecture Repository-Service-Controller propre",
            "Développement d'API REST complète pour transferts",
            "Gestion sécurisée des comptes utilisateurs et transactions",
            "Suivi temps réel avec notifications push",
            "Intégration de stockage cloud pour données sensibles",
            "Dockerisation complète pour déploiement scalable",
            "Tests automatisés et monitoring de performance"
          ],
          technologies: {
            core: ["PHP", "JavaScript", "MySQL"],
            tools: ["Docker", "Git", "Jenkins"],
            packages: ["Laravel", "Socket.io", "AWS SDK", "PHPUnit"]
          },
          links: {
            github: "https://github.com/yourusername/maxitsa",
            demo: "https://maxitsa-demo.onrender.com"
          }
        },

        {
          id: 'proj7',
          title: 'Clone WhatsApp',
          shortDescription: "Application de messagerie web moderne inspirée de WhatsApp avec interface responsive et fonctionnalités temps réel.",
          achievements: [
            "Développement d'interface utilisateur moderne et responsive",
            "Implémentation de système de messagerie temps réel",
            "Gestion avancée des conversations et contacts",
            "Système de notifications push pour nouveaux messages",
            "Optimisation des performances pour mobile et desktop",
            "Interface intuitive avec animations fluides",
            "Support multi-navigateurs et compatibilité cross-platform"
          ],
          technologies: {
            core: ["JavaScript", "HTML5", "CSS3"],
            tools: ["Git", "VS Code", "Chrome DevTools"],
            packages: ["Socket.io", "LocalStorage API", "Web Notifications API"]
          },
          links: {
            github: "https://github.com/yourusername/whatsapp-clone",
            demo: "https://whatsapp-clone-demo.netlify.app"
          }
        }
      ],
      tutors: [
        {
          id: 'tutor1',
          name: 'Architecte Logiciel Birame Bailla Wane',
          role: 'Formateur Principal Backend',
          organization: 'Sonatel Académie (ODC - Orange Digital Center)',
          // period: '2025',
          description: 'Architecte Logiciel, Consultant Java Micro-service, Co-founder Ecole 221, Développeur FullStack, Formateur en Développement Web Mobile',
          photo: '/Coach Birame Bailla Wane.png',
          // email: 'birame.wane@sonatel.com',
          phone: '+221 77 766 95 95',
          linkedin: 'https://linkedin.com/in/birane-baila-wane'
        },
        {
          id: 'tutor2',
          name: 'Ingénieur en génie logiciel Aly Tall Niang',
          role: 'Formateur Principal Frontend',
          organization: 'Sonatel Académie (ODC - Orange Digital Center)',
          // period: '2025',
          description: 'Ingénieur en génie logiciel | Formateur en développement Web et mobile à Orange Digital Center.',
          photo: '/Aly Tall Niang.png',
          // email: 'aly.niang@sonatel.com',
          phone: '+221 77 182 54 14',
          linkedin: 'https://linkedin.com/in/aly-tall-niang-sonatel-academy'
        }
      ]
    };
  }
}
