import { PortfolioData } from '../types/portfolio';

export const getInitialPortfolioData = (): PortfolioData => {
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
    bio: "Je suis un candidat motivé avec une solide formation en Informatique, spécialisé en Génie Logiciel. J'ai acquis une expérience pratique dans le développement d'applications web et mobiles à travers des projets académiques et professionnels. J'ai également suivi une formation intensive à la Sonatel Académie (ODC – Orange Digital Center), où j'ai bénéficié des enseignements de formateurs expérimentés et réalisé de nombreux projets concrets avec une large variété d'outils et de langages. Mon objectif est de mettre mes compétences techniques et mon esprit d'innovation au service de projets ambitieux.",
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
        items: ['MySQL', 'MongoDB', 'PostgreSQL']
      },
      {
        id: 'skill7',
        category: 'Modélisation',
        items: ['UML', 'Méthodologies agiles']
      },
      {
        id: 'skill8',
        category: 'IA',
        items: ['V0', 'BoltAI', 'Lovely', 'Copilot', 'KiloCode', 'BlackBox', 'ChatGPT']
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
        id: 'lang4',
        name: 'Anglais',
        level: 'Notions'
      }
    ],
    projects: [
      {
        id: 'proj1',
        title: "API de Gestion Bancaire Laravel",
        shortDescription: "API RESTful robuste et conforme au niveau 3 de Richardson, gérant comptes, clients et transactions avec authentification multi-rôles et archivage avancé.",
        achievements: [
          "Développé une API complète avec plus de 25 endpoints RESTful structurés en ressources cohérentes.",
          "Implémenté une authentification multi-rôles (Admin / Client) basée sur OAuth2 avec Laravel Passport.",
          "Conçu un système avancé de tri, filtrage et recherche (solde, type, statut, dates, nom, prénom, NCI).",
          "Génération automatique de mots de passe sécurisés avec obligation de changement à la première connexion.",
          "Mise en place d’un système de soft delete avec archivage automatique vers une base PostgreSQL secondaire (Neon).",
          "Déploiement de l'application en production sur Render avec PostgreSQL Railway.",
          "Développement d’un système de blocage/déblocage automatique des comptes via des Jobs et Scheduler Laravel.",
          "Intégration d’une documentation interactive complète Swagger/OpenAPI.",
          "Création de règles de validation personnalisées pour les formats Sénégalais (+221, NCI 13 chiffres).",
          "Mise en place d’un système de logging complet pour traçabilité et audit utilisateur.",
          "Écriture de tests unitaires et fonctionnels pour les fonctionnalités critiques.",
          "Support des requêtes complexes : pagination, tri, filtrage, recherche plein texte.",
          "Optimisation SQL et utilisation de Doctrine DBAL pour introspection avancée."
        ],
        technologies: {
          core: [
            "PHP 8.1+",
            "Laravel 10.x",
            "PostgreSQL"
          ],
          tools: [
            "Git",
            "Composer",
            "NPM",
            "Vite",
            "Docker",
            "Laravel Sail"
          ],
          packages: [
            "Laravel Passport",
            "Laravel Sanctum",
            "Swagger-PHP",
            "Doctrine DBAL",
            "Laravel Debugbar",
            "PHPUnit",
            "Axios"
          ]
        },
        videos:[
          "public/assete/projetLaravel/laravel.mp4"
        ],
        links: {
          github: "https://github.com/KalidouGUISSE/projetlaravel/tree/production",
          // docs: "https://kalidou-guisse-projetlaravel.onrender.com/api/documentation",
        }
      },
      {
        id: "p2",
        title: "API - Système de Gestion des Salaires Multi-Entreprises",
        shortDescription: "API REST complète développée avec Node.js et TypeScript pour la gestion automatisée des salaires. Elle offre une authentification sécurisée, gestion des employés avec QR codes, cycles de paie automatisés et génération de documents PDF. L'architecture modulaire assure une scalabilité optimale avec tests automatiques et documentation Swagger intégrée.",
        achievements: [
          "Développement d'une API REST robuste avec authentification JWT et autorisation basée sur les rôles (SUPER_ADMIN, ADMIN, CASHIER, EMPLOYEE)",
          "Intégration de QR codes pour validation sécurisée des paiements et suivi automatisé des présences",
          "Implémentation d'un système multi-entreprises avec isolation complète des données et contrôle d'accès granulaire",
          "Génération automatique de bulletins de salaire et reçus de paiement en PDF avec Puppeteer et PDFKit",
          "Architecture modulaire avec séparation claire des couches (controllers, services, repositories) utilisant Prisma ORM",
          "Documentation API interactive complète avec Swagger UI et tests automatiques des endpoints",
          // "Déploiement automatisé avec Docker Compose et configuration Render pour production"
        ],
        technologies: {
          core: ["Node.js", "TypeScript", "Express.js", "Prisma", "PostgreSQL"],
          tools: ["Docker", "Jest", "Swagger", "ESLint", "Prettier"],
          packages: ["bcrypt", "jsonwebtoken", "multer", "qrcode", "pdfkit", "puppeteer", "nodemailer", "zod"]
        },
        videos: [
          "public/assete/api salaire/video.mp4"
        ],
        links: {
          frontend: "https://github.com/KalidouGUISSE/-frontend-Gestion-Salaire",
          backend: "https://github.com/KalidouGUISSE/backend-Gestion-Salaire",
          // demo: "https://backend-gestion-salaire.onrender.com/api-docs",
        }
      },
      {
        id: "p3",
        title: "Interface Frontend - Application de Gestion des Salaires",
        shortDescription: "Interface utilisateur moderne développée avec React 19 et TypeScript pour la gestion complète des salaires. Elle propose une expérience fluide avec tableaux interactifs, graphiques analytiques, scan QR en temps réel et exports PDF/CSV. L'application est optimisée pour les performances avec lazy loading et cache intelligent. Et consome API Backend - Système de Gestion des Salaires Multi-Entreprises",
        achievements: [
          "Développement d'une interface utilisateur moderne et accessible avec React 19, TypeScript et Tailwind CSS",
          "Implémentation de tableaux avancés avec TanStack Table offrant tri, filtrage, pagination et recherche en temps réel",
          "Scan QR en temps réel pour le suivi des présences utilisant html5-qrcode",
          "Intégration de graphiques interactifs avec Recharts pour l'analyse des KPIs et évolution des paiements",
          "Gestion optimisée des requêtes API avec React Query et cache intelligent réduisant les appels serveur de 60%",
          "Interface accessible respectant les standards WCAG avec navigation clavier et sémantique HTML",
          "Fonctionnalités d'export intégrées (CSV pour données, PDF pour documents) avec génération côté client",
          "Architecture modulaire respectant SOLID/DRY avec séparation claire des responsabilités (API, composants, stores)"
        ],
        technologies: {
          core: ["React", "TypeScript", "Vite", "Tailwind CSS"],
          tools: ["ESLint", "Vite", "shadcn/ui", "Lucide Icons"],
          packages: ["React Query", "Zustand", "TanStack Table", "Recharts", "Axios", "Zod", "React Hook Form", "React Router"]
        },
        links: {
          backend: "https://github.com/KalidouGUISSE/backend-Gestion-Salaire",
          frontend: "https://github.com/KalidouGUISSE/-frontend-Gestion-Salaire",
          demo: "https://frontend-gestion-salaire.vercel.app"
        }
      },
      {
        id: 'proj3',
        title: 'Système de Gestion de Cargaisons',
        shortDescription: "Application web responsive développée avec PHP pour le backend de présentation et JavaScript/TypeScript pour l'interactivité. Interface moderne avec dashboard, gestion des cargaisons et suivi en temps réel des colis. Gestion logistique multi-modale (air, mer, route) avec règles métier complexes et calculs automatiques. Interface moderne avec mises à jour temps réel.",
        achievements: [
          "Architecture modulaire TypeScript pour la logique métier",
          "Routing PHP personnalisé sans framework",
          "Intégration carte interactive avec Leaflet",
          "Système de suivi colis avec codes de tracking",
          "Implémentation de règles métier complexes pour compatibilité produits/cargaisons",
          "Calcul automatique des montants et limitations de produits",
          "Interface utilisateur moderne avec TailwindCSS",
          "API TypeScript robuste avec gestion d'erreurs avancée",
        ],
        technologies: {
          core: ["PHP", "JavaScript", "TypeScript", "HTML5"],
          tools: ["Tailwind CSS", "Lucide Icons", "Chart.js", "Leaflet Maps"],
          packages: ["Dotenv", "Composer", "TypeScript compiler", "ESLint"]
        },
        videos: [
          "public/assete/cargaison/video.mp4"
        ],
        links: {
          github: "https://github.com/KalidouGUISSE/gestionCargaisonV-"
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
        description: 'Architecte Logiciel, Consultant Java Micro-service, Co-founder Ecole 221, Développeur FullStack, Formateur en Développement Web Mobile',
        photo: '/Coach Birame Bailla Wane.png',
        phone: '+221 77 766 95 95',
        linkedin: 'https://linkedin.com/in/birane-baila-wane'
      },
      {
        id: 'tutor2',
        name: 'Ingénieur en génie logiciel Aly Tall Niang',
        role: 'Formateur Principal Frontend',
        organization: 'Sonatel Académie (ODC - Orange Digital Center)',
        description: 'Ingénieur en génie logiciel | Formateur en développement Web et mobile à Orange Digital Center.',
        photo: '/Aly Tall Niang.png',
        phone: '+221 77 182 54 14',
        linkedin: 'https://linkedin.com/in/aly-tall-niang-sonatel-academy'
      }
    ],
    blogs: [
      {
        id: 'blog1',
        title: 'Mon Parcours en Développement Web',
        excerpt: 'Découvrez comment j\'ai commencé ma carrière dans le développement web et les leçons apprises.',
        content: 'Mon parcours en développement web a commencé il y a quelques années...',
        date: '2024-12-01',
        tags: ['Développement', 'Carrière', 'Apprentissage'],
        image: '/image.png'
      },
      {
        id: 'blog2',
        title: 'Les Meilleures Pratiques en React',
        excerpt: 'Un guide complet des meilleures pratiques pour développer avec React.',
        content: 'React est une bibliothèque puissante...',
        date: '2024-11-15',
        tags: ['React', 'JavaScript', 'Frontend'],
        image: '/image.png'
      },
      {
        id: 'blog3',
        title: 'L\'Importance de TypeScript',
        excerpt: 'Pourquoi TypeScript améliore la qualité et la maintenabilité du code.',
        content: 'TypeScript apporte de nombreux avantages...',
        date: '2024-10-30',
        tags: ['TypeScript', 'JavaScript', 'Qualité du code']
      }
    ]
  };
};