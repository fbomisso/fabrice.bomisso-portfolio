import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Machine Learning",
    slug: "machine-learning",
    category: "Data Science",
    date: "2026",
    description:
      "Projets de Machine Learning couvrant la préparation des données, la régression, la classification, l’évaluation des modèles et l’interprétation des résultats pour répondre à des problématiques d’analyse et de prédiction.",
    technologies: ["Python", "Scikit-learn", "Machine Learning", "SHAP"],
    github:
      "https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/Machine-Learning",
  },
  {
    id: 2,
    title: "Power BI",
    slug: "power-bi",
    category: "Business Intelligence",
    date: "2026",
    description:
      "Projets de Business Intelligence orientés pilotage de la performance, modélisation des données, contrôle de la qualité, transformation avec Power Query, mesures DAX et conception de tableaux de bord décisionnels.",
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    github:
      "https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI",
  },
  {
    id: 3,
    title: "Python",
    slug: "python",
    category: "Data Analysis",
    date: "2026",
    description:
      "Projets d’analyse de données réalisés avec Python, de la préparation et du nettoyage des données à l’exploration, l’analyse statistique et la visualisation des résultats.",
    technologies: ["Python", "Pandas", "NumPy", "Data Analysis"],
    github:
      "https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/Python",
  },
  {
    id: 4,
    title: "SQL",
    slug: "sql",
    category: "Data & Bases de données",
    date: "2026",
    description:
      "Projets SQL consacrés à l’extraction, la transformation et l’analyse des données à travers les jointures, agrégations, fonctions analytiques et requêtes répondant à des problématiques métier.",
    technologies: ["SQL Server", "T-SQL", "SQL", "Data Analysis"],
    github:
      "https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/SQL",
  },
];