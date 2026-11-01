export type Language = 'es' | 'en';

export interface Project {
  id: number;
  title: string;
  icon?: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  translationKey?: string;
}

export interface ProjectDetail {
  id: number;
  translationKey: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  team?: string;
  status: 'completed' | 'in-progress';
  context: string;
  responsibilities: string[];
  results: string[];
  architecture?: string;
  techGroups: { label: string; items: string[] }[];
  skills: string[];
  links?: { github?: string; article?: string; demo?: string };
}


export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Technology {
  name: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resume_spanish: string;
  resume_english: string;
}

