export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  country: string;
  photo: string;
  linkedin?: string;
  whatsapp?: string;
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
  shortDescription: string;
  achievements: string[];
  technologies: {
    core: string[];
    tools: string[];
    packages: string[];
  };
  videos?: string[];
  links: {
    github?: string;
    backend?: string;
    frontend?: string;
    docs?: string;
    demo?: string;
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

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  image?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  bio: string;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
  tutors: Tutor[];
  blogs: BlogPost[];
}