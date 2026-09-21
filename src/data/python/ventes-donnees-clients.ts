import type { DomainProject } from '@/types';

export const ventesDonneesClients: DomainProject = {
  slug: 'ventes-donnees-clients',
  domain: 'python',
  title: 'Ventes & données clients | Analyse exploratoire',
  objective:
    'Explorer les caractéristiques des clients, des achats et des produits afin d’identifier les principaux profils et indicateurs commerciaux du jeu de données.',
  context:
    'Projet d’analyse de données basé sur un jeu de données de 500 observations couvrant des informations clients, des dates d’adhésion, des montants d’achat, des catégories de produits et des évaluations.',
  data:
    '500 observations et 9 variables : ID, nom, âge, genre, pays, date d’adhésion, montant d’achat, catégorie produit et note. Les données couvrent six pays et six catégories de produits sur la période du 20 mai 2022 au 18 mai 2025.',
  technologies: [
    'Python',
    'Pandas',
    'NumPy',
    'Data Analysis',
    'Data Visualization',
  ],
  kpis: [
    { value: '500', label: 'observations' },
    { value: '4,96 M', label: 'montant total des achats' },
    { value: '6', label: 'pays représentés' },
    { value: '6', label: 'catégories produits' },
  ],
  results: [
    'Le jeu de données contient 500 observations réparties sur six pays et six catégories de produits.',
    'Le montant total des achats s’élève à 4 957 478, pour une moyenne de 9 914,96 par observation.',
    'Les catégories Clothing et Toys représentent respectivement 96 et 92 observations, tandis que Grocery en représente 67.',
    'Les données couvrent des clients âgés de 18 à 59 ans, avec un âge moyen de 39,33 ans.',
    'La note moyenne est de 2,98 sur 5, avec des valeurs comprises entre 1 et 5.',
    'Aucune valeur manquante et aucun doublon d’identifiant n’ont été détectés dans le jeu de données.',
  ],
  approach: [
    'Importation du jeu de données',
    'Exploration de la structure des données',
    'Contrôle des types et des valeurs',
    'Analyse des variables clients',
    'Analyse des montants d’achat',
    'Analyse des catégories de produits',
    'Analyse de la répartition géographique',
    'Analyse des évaluations clients',
    'Contrôle des valeurs manquantes',
    'Contrôle des doublons',
    'Analyse descriptive et visualisation des données',
  ],
  screenshots: [],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/Python/ventes%20et%20donn%C3%A9es%20clients',
};