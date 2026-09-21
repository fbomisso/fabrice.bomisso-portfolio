import type { DomainProject } from '@/types';

export const soinsDeSante: DomainProject = {
  slug: 'soins-de-sante',
  domain: 'power-bi',
  title: 'Healthcare Revenue Cycle Analytics | Power BI',
  objective:
    'Construire un tableau de bord professionnel de Revenue Cycle Management permettant d’analyser les charges, paiements, créances, rejets et performances des acteurs du système de santé.',
  context:
    'Analyse d’un réseau de santé américain à travers une approche orientée Revenue Cycle Management, avec un modèle en étoile et des indicateurs permettant de suivre la performance financière et les rejets.',
  data:
    '84 219 transactions, 5 117 patients, 932 médecins, 36 spécialités, 4 assureurs, 11 sites, 1 256 codes CPT et 4 801 diagnostics sur la période décembre 2019 à juillet 2020.',
  technologies: [
    'Power BI',
    'Power Query',
    'DAX',
    'Modélisation en étoile',
    'Time Intelligence',
  ],
  kpis: [
    { value: '$1,47 M', label: 'charges brutes' },
    { value: '$703 K', label: 'paiements' },
    { value: '93,2 %', label: 'taux de recouvrement net' },
  ],
  results: [
    'Le taux de recouvrement net atteint 93,2 % tandis que le taux de rejet s’élève à 21,06 %.',
    'Les rejets ne sont pas concentrés sur une seule spécialité ou un seul acteur, ce qui nécessite une analyse croisée des assureurs, sites et profils médicaux.',
    'Medicare présente simultanément un niveau élevé de recouvrement et de rejets.',
    'Les contrôles de qualité ont permis de traiter les doublons de codes diagnostics et les doublons de NPI avant l’analyse.',
    'La distribution temporelle des charges limite l’interprétation de certaines analyses de Time Intelligence.',
  ],
  approach: [
    'Audit de 84 219 transactions',
    'Contrôle des clés et relations entre les tables',
    'Traitement des doublons et incohérences',
    'Construction du modèle en étoile',
    'Création des transformations Power Query',
    'Création de 19 mesures DAX',
    'Analyse des rejets et paiements',
    'Analyse de la performance des médecins',
    'Analyse des assureurs',
    'Conception du dashboard Revenue Cycle Management',
  ],
  screenshots: [
    {
      src: '/projets/power-bi/soins-de-sante/01-vue-ensemble.png',
      alt: 'Vue d’ensemble du dashboard Healthcare Revenue Cycle Analytics',
    },
    {
      src: '/projets/power-bi/soins-de-sante/02-analyse-rejets.png',
      alt: 'Analyse des rejets médicaux',
    },
    {
      src: '/projets/power-bi/soins-de-sante/03-performance-medecins.png',
      alt: 'Analyse de la performance des médecins',
    },
    {
      src: '/projets/power-bi/soins-de-sante/04-repartition-assureurs.png',
      alt: 'Répartition des assureurs',
    },
  ],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI/Soins%20de%20sant%C3%A9',
};
