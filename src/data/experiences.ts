import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Groupe Inova',
    position: 'Stagiaire Data Analyst | Projet de développement d\'application web',
    period: 'Avril – Juillet 2025 (4 mois)',
    tasks: [
      'Traitement des données : collecte, préparation, nettoyage et structuration de plus de 60 000 lignes de données issues de secteurs variés.',
      'Développement de la solution : contribution à l\'analyse et à la structuration des besoins, à la préparation et à l\'intégration des données, ainsi qu\'aux tests et à la vérification des résultats de l\'application web.',
      'Intégration de chatbot : contribution à l\'intégration d\'un chatbot développé avec Rasa dans la solution web.',
      'Suivi et reporting : production de reportings pour suivre les activités et les résultats, en collaboration avec l\'équipe projet.',
    ],
    technologies: ['Python', 'Pandas', 'Data Analysis', 'Data Visualization'],
  },
  {
    id: 2,
    company: 'Direction Régionale de l\'Assainissement et de la Salubrité',
    position: 'Stagiaire en Assainissement et Analyse de Données',
    period: 'Avril – Août 2023 (5 mois)',
    tasks: [
      'Collecte et gestion des données : réalisation d\'une étude auprès de 373 ménages, avec organisation et préparation des données collectées sur le terrain.',
      'Analyse et interprétation : analyse des données sous Excel, identification des principaux facteurs associés à la défécation à l\'air libre et formulation de recommandations.',
      'Valorisation scientifique : synthèse des résultats et publication de l\'étude dans le World Journal of Advanced Research and Reviews en 2024.',
    ],
    technologies: ['Excel', 'Data Analysis', 'Data Collection'],
  },
];




