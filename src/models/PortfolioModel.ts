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
  description: string;
  technologies?: string[];
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
      bio: "Je suis un candidat motivé avec une solide formation en Informatique, spécialisé en Génie Logiciel. J’ai acquis une expérience pratique dans le développement d’applications web et mobiles à travers des projets académiques et professionnels. J’ai également suivi une formation intensive à la Sonatel Académie (ODC – Orange Digital Center), sous la tutelle de Coach Birame Bailla Wane et Aly Tall Niang, où j’ai réalisé de nombreux projets concrets et travaillé avec une large variété d’outils et de langages. Mon objectif est de mettre mes compétences techniques et mon esprit d’innovation au service de projets ambitieux .",
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
          name: 'Français',
          level: 'Courant'
        },
        {
          id: 'lang3',
          name: 'Wolof',
          level: 'Notions'
        }
      ],
      projects: [
        {
          id: 'proj1',
          title: 'Gestion de Pharmacie',
          description: "Conception et développement d'une application web pour automatiser la gestion des stocks, des ventes et des produits d'une pharmacie. L'application offre une plateforme d'échange entre pharmacies et particuliers, tout en permettant de signaler les produits en voie de péremption ou de rupture.",
          technologies: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript']
        },
        {
          id: 'proj1',
          title: 'Gestion de Cargaison',
          description: "Système de gestion de cargaisons pour transport aérien, maritime et routier avec règles métiers complexes et suivi logistique.",
          technologies: ['Node',"typescript",'tailwindcss', 'MySQL', 'JavaScript']
        },
        {
          id: 'proj1',
          title: 'Application de Gestion des Salaires',
          description: "Plateforme multi-entreprises de gestion RH avec génération automatique de bulletins de paie, suivi des employés et historiques détaillés.",
          technologies: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"]
        },
        {
          id: 'proj1',
          title: 'API backend Node.js avancée',
          description: "API REST sécurisée avec architecture en couches, validations Zod, authentification JWT et documentation Swagger.",
          technologies: ["Node.js", "TypeScript", "Prisma", "Zod"]
        },
        {
          id: 'proj1',
          title: 'Clone WhatsApp',
          description: "Application de messagerie en temps réel avec envoi/réception de messages, interface utilisateur responsive et notifications.",
          technologies: ["JavaScript", "HTML/CSS"]
        },
        {
          id: 'proj1',
          title: 'MaxitSA',
          description: "Maxitsa est une application web de transfert d’argent développée en PHP orienté objet, suivant une architecture propre et modulaire basée sur les couches Repository – Service – Controller. Elle permet aux utilisateurs d’effectuer des transactions financières sécurisées, de gérer leurs comptes principaux et secondaires, et de consulter l’historique de leurs opérations en temps réel.",
          technologies: ["Php", "JavaScript","Docker","Render"]
        },
        {
          id: 'proj1',
          title: 'Gestion des apprenants ODC',
          description: "Ce projet vise à digitaliser la gestion des étudiants d’un centre de formation. L’application permet d’enregistrer les apprenants, de suivre leur évolution (promotions, filières, notes, absences) et d’automatiser les tâches administratives liées à la formation. Elle a été conçue avec une architecture propre respectant les principes SOLID et MVC, garantissant une bonne maintenabilité et évolutivité du code.",
          technologies: ["Php", "Json server"]
        },
      ]
    };
  }
}




























// "projects": [
//     {
//       "id": 8,
//       "title": "Gestion de cargaisons",
//       "description": "Système de gestion de cargaisons pour transport aérien, maritime et routier avec règles métiers complexes et suivi logistique.",
//       "stack": ["TypeScript", "MySQL"],
//       "year": "2024",
//       "github": "https://github.com/abdoulayely-7/Gestion-Cargaison",
//       "tags": ["frontend", "typescript", "logistics"]
//     },
//     {
//       "id": 9,
//       "title": "Application de gestion des salaires",
//       "description": "Plateforme multi-entreprises de gestion RH avec génération automatique de bulletins de paie, suivi des employés et historiques détaillés.",
//       "stack": ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
//       "year": "2024",
//       "github": "#",
//       "tags": ["fullstack", "typescript", "react"]
//     },
//     {
//       "id": 10,
//       "title": "API backend Node.js avancée",
//       "description": "API REST sécurisée avec architecture en couches, validations Zod, authentification JWT et documentation Swagger.",
//       "stack": ["Node.js", "TypeScript", "Prisma", "Zod"],
//       "year": "2024",
//       "github": "#",
//       "tags": ["backend", "typescript", "api"]
//     },
//     {
//       "id": 11,
//       "title": "Clone WhatsApp",
//       "description": "Application de messagerie en temps réel avec envoi/réception de messages, interface utilisateur responsive et notifications.",
//       "stack": ["JavaScript", "HTML/CSS"],
//       "year": "2023",
//       "github": "https://github.com/abdoulayely-7/projet_whatsapp_frontend",
//       "tags": ["frontend", "javascript"]
//     },
//     {
//       "id": 12,
//       "title": "MaxitSA",
//       "description": "Maxitsa est une application web de transfert d’argent développée en PHP orienté objet, suivant une architecture propre et modulaire basée sur les couches Repository – Service – Controller. Elle permet aux utilisateurs d’effectuer des transactions financières sécurisées, de gérer leurs comptes principaux et secondaires, et de consulter l’historique de leurs opérations en temps réel.",
//       "stack": ["Php", "JavaScript","Docker","Render"],
//       "year": "2025",
//       "github": "https://github.com/abdoulayely-7/pointage_odc",
//       "tags": ["backend", "finance"]
//     }
//     ,
//     {
//       "id": 12,
//       "title": "Gestion des apprenants ODC",
//       "description": "Ce projet vise à digitaliser la gestion des étudiants d’un centre de formation. L’application permet d’enregistrer les apprenants, de suivre leur évolution (promotions, filières, notes, absences) et d’automatiser les tâches administratives liées à la formation. Elle a été conçue avec une architecture propre respectant les principes SOLID et MVC, garantissant une bonne maintenabilité et évolutivité du code.",
//       "stack": ["Php", "Json server"],
//       "year": "2025",
//       "github": "https://github.com/abdoulayely-7/pointage_odc",
//       "tags": ["backend", "education"]
//     }
//   ],
