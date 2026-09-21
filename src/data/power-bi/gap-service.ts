import type { DomainProject } from '@/types';

export const gapService: DomainProject = {
  slug: 'gap-service',
  domain: 'power-bi',
  title: 'GAP_SERVICE | Analyse et pilotage d’un réseau retail',
  objective:
    'Construire un dispositif de pilotage permettant d’analyser la performance commerciale, les stocks, les ressources humaines et les fournisseurs d’un réseau de magasins.',
  context:
    'Projet d’analyse d’un réseau de 500 magasins répartis dans huit villes de Côte d’Ivoire, avec une démarche structurée autour de l’observation, la formulation d’hypothèses, leur vérification et la prise de décision.',
  data:
    'Données issues de cinq tables principales : magasins, ventes, stocks, employés et fournisseurs. Le jeu de données contient volontairement des anomalies afin de mettre en œuvre une démarche complète de contrôle et de fiabilisation.',
  technologies: [
    'Power BI',
    'Power Query',
    'DAX',
    'Data Quality',
    'Modélisation des données',
  ],
  kpis: [
    { value: '342 M FCFA', label: 'chiffre d’affaires net' },
    { value: '500', label: 'magasins analysés' },
    { value: '44', label: 'situations de rupture identifiées' },
  ],
  results: [
    'Les données ont été auditées et les anomalies ont été identifiées avant la construction des indicateurs.',
    'Les valeurs physiquement impossibles ont été corrigées et les valeurs suspectes ont été conservées lorsqu’elles pouvaient représenter un événement métier.',
    'Les magasins sans vente ont été isolés afin de distinguer les problèmes commerciaux des problèmes de qualité de données.',
    'Le pilotage couvre simultanément la performance commerciale, les stocks, les ressources humaines et les fournisseurs.',
  ],
  approach: [
    'Audit initial des cinq tables',
    'Identification et traitement des anomalies',
    'Contrôle de la cohérence des valeurs',
    'Transformation et nettoyage avec Power Query',
    'Modélisation des données',
    'Création des mesures DAX',
    'Analyse commerciale et stocks',
    'Analyse RH et fournisseurs',
    'Restitution et aide à la décision',
  ],
  screenshots: [
    {
      src: '/projets/power-bi/gap-service/01_Vue_ensemble.jpg',
      alt: 'Vue d’ensemble du projet GAP_SERVICE',
    },
    {
      src: '/projets/power-bi/gap-service/02_Performance_commerciale.jpg',
      alt: 'Analyse de la performance commerciale',
    },
    {
      src: '/projets/power-bi/gap-service/03_Pilotage_stocks.jpg',
      alt: 'Pilotage des stocks',
    },
    {
      src: '/projets/power-bi/gap-service/04_Pilotage_RH.jpg',
      alt: 'Pilotage des ressources humaines',
    },
    {
      src: '/projets/power-bi/gap-service/05_Fiabilite_fournisseurs.jpg',
      alt: 'Analyse de la fiabilité des fournisseurs',
    },
  ],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI/gap-service',
};
