export type Profile = {
  name: string;
  title: string;
  description: string;
  photo: string;
  cv: string;
  mainTechs: string[];
};

export type Skill = {
  title: string;
  items: string[];
};

export type Skills = Record<string, string[]>;

export type Experience = {
  id: number;
  company: string;
  position: string;
  period: string;
  tasks: string[];
  technologies?: string[];
};

export type Formation = {
  id: number;
  school: string;
  degree: string;
  period: string;
  location?: string;
  description?: string[];
};

export type Certification = {
  id: number;
  name: string;
  issuer: string;
  year?: string;
  image?: string;
};

export type Project = {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  technologies: string[];
  image?: string;
  github: string;
};

export type CaseStudy = {
  id: number;
  title: string;
  context: string;
  problem: string;
  data: string;
  methodology: string[];
  results: string[];
  recommendations: string[];
  publication: string;
  url?: string;
  slug?: string;
};

export type ContactInfo = {
  email: string;
  linkedin: string;
  github: string;
};
