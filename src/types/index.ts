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

export type FormationDomain = {
  title: string;
  icon: string;
  courses: string[];
};

export type Formation = {
  id: number;
  school: string;
  degree: string;
  period: string;
  location?: string;
  domains?: FormationDomain[];
};

export type Certification = {
  id: number;
  name: string;
  issuer: string;
  year?: string;
  image?: string;
};

export type DomainSlug = "power-bi" | "python" | "sql" | "machine-learning";

// Carte de domaine (Power BI, Python, SQL, Machine Learning)
export type Project = {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  technologies: string[];
  image?: string;
  github: string;
  slug?: DomainSlug; // NOUVEAU : sert à construire /projets/<slug>/
};

// NOUVEAU : un projet individuel à l'intérieur d'un domaine
export type ProjectKpi = {
  value: string; // ex. "38 578"
  label: string; // ex. "prêts analysés"
};

export type ProjectScreenshot = {
  src: string; // ex. "/projets/power-bi/mon-projet/01-dashboard.png"
  alt: string;
};

export type DomainProject = {
  slug: string; // ex. "risque-credit-bancaire"
  domain: DomainSlug;
  title: string;
  objective: string; // une phrase, affichée sur la vue d'ensemble du domaine
  context: string; // contexte / problématique
  data: string; // données utilisées
  technologies: string[];
  kpis: ProjectKpi[];
  results: string[]; // résultats et insights importants
  approach: string[]; // étapes du travail, dans l'ordre
  screenshots: ProjectScreenshot[];
  github: string; // lien vers le sous-dossier du projet
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
