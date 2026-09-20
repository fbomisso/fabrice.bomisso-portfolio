import type { DomainProject } from '@/types';

export const suiviImpact: DomainProject = {
  slug: 'suivi-impact',
  domain: 'python',
  title: 'Suivi & Impact',
  objective:
    'Nettoyer, contrôler et structurer des données d’organisations à but non lucratif et de subventions afin de produire des tables fiables pour l’analyse.',
  context:
    'Projet de préparation et d’analyse de données portant sur les organisations à but non lucratif, leur qualité, leurs informations financières et les opportunités de financement.',
  data:
    'Plus de 240 000 organisations et 75 000 opportunités de financement provenant de plusieurs fichiers CSV nécessitant nettoyage, contrôle de qualité, transformation et rapprochement.',
  technologies: [
    'Python',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Power BI',
    'VS Code',
    'Git',
    'GitHub',
  ],
  kpis: [
    { value: '240 585', label: 'organisations' },
    { value: '75 337', label: 'subventions' },
    { value: '41', label: 'colonnes après fusion' },
    { value: '17', label: 'colonnes finales organisations' },
    { value: '22', label: 'colonnes finales subventions' },
  ],
  results: [
    'Les données de 240 585 organisations ont été nettoyées et structurées dans une table finale de 17 colonnes.',
    'La fusion avec les données de qualité a produit 240 585 lignes, dont 240 577 avec des informations de qualité et 8 sans correspondance.',
    'Les anomalies identifiées sur les identifiants EIN ont été conservées et documentées plutôt que corrigées arbitrairement.',
    'Les contrôles financiers ont permis d’identifier des valeurs négatives et des valeurs extrêmes sans suppression automatique des données.',
    'Une analyse de complétude montre une couverture de 100 % pour les informations de mission et d’impact, contre 63,22 % pour les informations générales et 47,74 % pour les données financières.',
    'Les données de 75 337 subventions ont été nettoyées, les dates contrôlées et une variable signalant les incohérences de montants a été créée.',
    'Les tables finales ont été exportées en CSV et préparées pour une analyse et une visualisation ultérieures dans Power BI.',
  ],
  approach: [
    'Importation des fichiers CSV avec Pandas',
    'Audit des valeurs manquantes et des doublons',
    'Contrôle des types et des colonnes inutiles',
    'Normalisation des identifiants EIN',
    'Analyse des anomalies sur les organisations',
    'Fusion des données organisations et qualité',
    'Contrôle des valeurs financières',
    'Analyse de la complétude des données',
    'Conversion et contrôle des dates de subventions',
    'Création d’indicateurs d’anomalies',
    'Renommage et structuration des colonnes',
    'Export des tables finales pour Power BI',
  ],
  screenshots: [],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/Python/Suivi%20%26%20Impact',
};
