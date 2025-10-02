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
          items: ['PHP (Objet)', 'Laravel']
        },
        {
          id: 'skill2',
          category: 'Développement Mobile',
          items: ['Flutter', 'Dart']
        },
        {
          id: 'skill3',
          category: 'Développement Web',
          items: ['HTML', 'CSS', 'JavaScript']
        },
        {
          id: 'skill4',
          category: 'Langages de programmation',
          items: ['Python', 'Java', 'PHP', 'C']
        },
        {
          id: 'skill5',
          category: 'Bases de données',
          items: ['MySQL', 'PHPMyAdmin']
        },
        {
          id: 'skill6',
          category: 'Modélisation',
          items: ['UML', 'Méthodologies agiles']
        },
        {
          id: 'skill7',
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
        }
      ]
    };
  }
}
