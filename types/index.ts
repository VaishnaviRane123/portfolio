export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
  technologies: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  score?: string;
  description: string;
}

export interface Certification {
  title: string;
  organization: string;
  year: string;
  file: string;
}
