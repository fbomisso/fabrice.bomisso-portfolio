import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Machine Learning',
    slug: 'machine-learning',
    category: 'Data Science',
    date: '2026',
    description:
      'Projets de Machine Learning consacrés à la préparation des données, à la modélisation prédictive, à l’évaluation des modèles et à l’interprétation des résultats.',
    technologies: ['Python', 'Scikit-learn', 'Machine Learning', 'SHAP'],
    github:
      'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/Machine-Learning',
  },
  {
    id: 2,
    title: 'Power BI',
    slug: 'power-bi',
    category: 'Business Intelligence',
    date: '2026',
    description:
      'Projets de Business Intelligence réalisés avec Power BI pour transformer les données en tableaux de bord interactifs, indicateurs et analyses utiles à la prise de décision.',
    technologies: ['Power BI', 'DAX', 'Power Query', 'Data Modeling'],
    github:
      'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI',
  },
  {
    id: 3,
    title: 'Python',
    slug: 'python',
    category: 'Data Analysis',
    date: '2026',
    description:
      'Projets d’analyse de données réalisés avec Python, couvrant le nettoyage, la préparation, l’exploration, l’analyse et la visualisation des données.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
    github:
      'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/Python',
  },
  {
    id: 4,
    title: 'SQL',
    slug: 'sql',
    category: 'Data & Bases de données',
    date: '2026',
    description:
      'Projets SQL consacrés à l’exploration, la transformation et l’analyse des données à travers des requêtes adaptées aux problématiques métier.',
    technologies: ['SQL Server', 'T-SQL', 'SQL', 'Data Analysis'],
    github:
      'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/SQL',
  },
];