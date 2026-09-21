import type { DomainProject } from '@/types';

export const analysePerformanceOlist: DomainProject = {
  slug: 'analyse-performance-olist',
  domain: 'power-bi',
  title: 'Marketplace e-commerce Olist | Modèle en constellation et pilotage décisionnel',
  objective:
    'Construire un modèle décisionnel fiable pour analyser les ventes, la logistique, la satisfaction client et la performance des vendeurs sur la marketplace Olist.',
  context:
    'Analyse d’une marketplace e-commerce brésilienne en s’appuyant sur un modèle en constellation afin d’éviter les doubles comptages liés aux différentes granularités des commandes, produits, paiements et avis.',
  data:
    '99 441 commandes, 13,6 M R$ de GMV, 96 096 clients et 3 095 vendeurs sur la période septembre 2016 à octobre 2018.',
  technologies: ['Power BI', 'Power Query', 'DAX', 'Modélisation en constellation'],
  kpis: [
    { value: '99 441', label: 'commandes analysées' },
    { value: '13,6 M R$', label: 'GMV analysé' },
    { value: '96 096', label: 'clients' },
  ],
  results: [
    'Le modèle en constellation permet d’éviter les doubles comptages provoqués par les différentes granularités des tables sources.',
    'Un audit des sources a permis d’identifier et de corriger des problèmes de filtrage et de comptage des clients.',
    'La qualité financière des données présente une concordance de 99,69 % sur les contrôles réalisés.',
    'La ponctualité des livraisons apparaît comme un levier important dans l’analyse de la satisfaction client.',
  ],
  approach: [
    'Audit des 9 tables sources',
    'Contrôle de la qualité et des anomalies',
    'Agrégation des données géographiques',
    'Déduplication déterministe des avis',
    'Construction du modèle en constellation',
    'Création des mesures DAX',
    'Analyse commerciale, logistique et satisfaction',
    'Conception du dashboard décisionnel',
  ],
  screenshots: [
    {
      src: '/projets/power-bi/analyse-performance-olist/01_Vue_ensemble.jpg',
      alt: 'Vue d’ensemble du projet Olist',
    },
    {
      src: '/projets/power-bi/analyse-performance-olist/02_Performance_commerciale.jpg',
      alt: 'Analyse de la performance commerciale Olist',
    },
    {
      src: '/projets/power-bi/analyse-performance-olist/03_Logistique.jpg',
      alt: 'Analyse logistique Olist',
    },
    {
      src: '/projets/power-bi/analyse-performance-olist/04_Satisfaction_client.jpg',
      alt: 'Analyse de la satisfaction client Olist',
    },
    {
      src: '/projets/power-bi/analyse-performance-olist/05_Vendeurs_Geographie.jpg',
      alt: 'Analyse des vendeurs et de la géographie Olist',
    },
  ],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI/analyse-performance-olist',
};
