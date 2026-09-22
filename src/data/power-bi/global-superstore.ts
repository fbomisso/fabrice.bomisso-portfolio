import type { DomainProject } from '@/types';

export const globalSuperstore: DomainProject = {
  slug: 'global-superstore',
  domain: 'power-bi',
  title: 'Global Superstore | Analyse de la performance commerciale',
  objective:
    'Analyser la performance commerciale, la rentabilité, les marchés, la logistique et les tendances temporelles d’un réseau de distribution international avec Power BI.',
  context:
    'Projet d’analyse décisionnelle réalisé à partir des données Global Superstore, avec une modélisation en étoile conçue pour faciliter l’analyse des ventes, des bénéfices, des remises, des coûts logistiques et des performances géographiques.',
  data:
    '51 291 transactions couvrant la période 2011 à 2014, avec des informations sur les ventes, bénéfices, quantités, remises, coûts d’expédition, clients, produits, géographie et modes de livraison.',
  technologies: [
    'Power BI',
    'Power Query',
    'DAX',
    'Modélisation en étoile',
    'Time Intelligence',
  ],
  kpis: [
    { value: '12,64 M$', label: 'chiffre d’affaires' },
    { value: '1,47 M$', label: 'bénéfice net' },
    { value: '11,61 %', label: 'taux de marge' },
  ],
  results: [
    'Le chiffre d’affaires atteint 12,64 M$ pour un bénéfice net de 1,47 M$, soit un taux de marge de 11,61 %.',
    '24,47 % des commandes sont déficitaires, représentant un enjeu important pour l’analyse de la rentabilité.',
    'Les remises élevées sont associées à une forte dégradation de la marge, avec une marge relative de -111,02 % sur la tranche de remise de 40 à 50 %.',
    'La catégorie Tables présente une marge négative de -8,47 %, tandis que plusieurs sous-catégories comme Paper, Labels et Envelopes affichent des marges plus élevées.',
    'Les performances diffèrent selon les marchés, avec des écarts importants de marge et de proportion de commandes déficitaires.',
    'Le poids du mode Standard Class est nettement supérieur aux autres modes d’expédition, ce qui permet d’analyser les coûts logistiques selon le volume des commandes.',
    'La croissance du chiffre d’affaires atteint 51,54 % sur la période analysée, tandis que la croissance de la marge YTD atteint 23,89 %.',
  ],
  approach: [
    'Audit et préparation des données',
    'Correction des incohérences géographiques',
    'Construction du modèle en étoile',
    'Création des dimensions clients, produits, géographie, dates et expédition',
    'Transformations et contrôles avec Power Query',
    'Création des mesures DAX',
    'Analyse de la rentabilité',
    'Analyse des marchés',
    'Analyse logistique',
    'Analyse temporelle',
    'Conception du dashboard Power BI',
  ],
  screenshots: [
    {
      src: '/projets/power-bi/global-superstore/Analyse de la rentabilité.png',
      alt: 'Dashboard Global Superstore - Analyse de la rentabilité',
    },
    {
      src: '/projets/power-bi/global-superstore/Analyse des marchés.png',
      alt: 'Dashboard Global Superstore - Analyse des marchés',
    },
    {
      src: '/projets/power-bi/global-superstore/Analyse logistique.png',
      alt: 'Dashboard Global Superstore - Analyse logistique',
    },
    {
      src: '/projets/power-bi/global-superstore/Analyse temporelle.png',
      alt: 'Dashboard Global Superstore - Analyse temporelle',
    },
  ],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI/Global%20Superstore',
};

