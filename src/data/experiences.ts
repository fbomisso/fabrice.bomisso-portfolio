import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Groupe Inova | Inova Solutions',
    position: 'Data Analyst',
    period: 'Avril – Juillet 2025 (4 mois)',
    tasks: [
      'Préparation et fiabilisation des données : collecte, nettoyage, transformation et structuration de plus de 60 000 lignes de données issues de secteurs variés.',
      'Analyse et qualité des données : consolidation des sources, détection des anomalies, contrôle de cohérence et préparation des données pour les besoins d’analyse et de reporting.',
      'Projet d’application web : contribution à l’analyse des besoins, à la préparation et à l’intégration des données, ainsi qu’aux tests et à la vérification des résultats.',
      'Reporting et suivi : production d’indicateurs et de reportings pour suivre les activités et les résultats en collaboration avec l’équipe projet.',
      'Intelligence artificielle : contribution à l’intégration d’un chatbot développé avec Rasa dans la solution web.',
    ],
    technologies: ['Python', 'Pandas', 'Data Analysis', 'Data Quality', 'Data Visualization', 'Reporting'],
  },
  {
    id: 2,
    company: 'Direction Régionale de l’Assainissement et de la Salubrité',
    position: 'Chargé de collecte et d’analyse de données',
    period: 'Avril – Août 2023 (5 mois)',
    tasks: [
      'Collecte de données : réalisation d’une étude auprès de 373 ménages sur la défécation à l’air libre dans le District Autonome de Yamoussoukro.',
      'Préparation et analyse : organisation, nettoyage et analyse des données collectées sur le terrain à l’aide d’Excel et de tableaux croisés dynamiques.',
      'Analyse des résultats : identification des principaux facteurs associés à la défécation à l’air libre et interprétation des résultats de l’étude.',
      'Valorisation scientifique : synthèse des résultats et contribution à la publication de l’étude dans le World Journal of Advanced Research and Reviews en 2024.',
    ],
    technologies: ['Excel', 'Tableaux croisés dynamiques', 'Data Analysis', 'Data Collection', 'Data Quality'],
  },
];