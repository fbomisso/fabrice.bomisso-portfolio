import type { DomainProject } from '@/types';

export const criminaliteDesordonnee: DomainProject = {
  slug: 'criminalite-desordonnee',
  domain: 'python',
  title: 'Criminalité désordonnée',
  objective:
    'Diagnostiquer et préparer un jeu de données criminelles désordonné en identifiant les problèmes de qualité avant toute analyse.',
  context:
    'Projet de data cleaning consacré à un jeu de données synthétique contenant des valeurs manquantes, des doublons, des catégories incohérentes, des formats hétérogènes et des valeurs aberrantes.',
  data:
    'Dataset synthétique de 5 250 incidents criminels et 33 variables couvrant les incidents, les victimes, les suspects, les agents, les armes, les dossiers et les pertes matérielles.',
  technologies: [
    'Python',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Jupyter',
  ],
  kpis: [
    { value: '5 250', label: 'incidents analysés' },
    { value: '33', label: 'variables' },
    { value: '200', label: 'doublons détectés' },
    { value: '23', label: 'colonnes avec valeurs manquantes' },
    { value: '182', label: 'catégories de crime' },
  ],
  results: [
    'L’audit révèle 200 lignes dupliquées sur les 5 250 observations.',
    '23 colonnes présentent des valeurs manquantes, avec des taux particulièrement élevés pour certaines informations concernant les suspects, les victimes et les notes.',
    'Plusieurs variables catégorielles présentent des incohérences de casse, d’orthographe et de format, notamment les types de crimes, les districts, les genres, les armes et les statuts des dossiers.',
    'Des valeurs aberrantes ou incohérentes sont présentes dans plusieurs variables numériques, notamment les âges et le nombre d’arrestations.',
    'L’audit met également en évidence des formats hétérogènes pour les variables binaires et des données numériques stockées sous forme textuelle.',
  ],
  approach: [
    'Importation du dataset avec Pandas',
    'Analyse de la structure et des dimensions',
    'Contrôle des types de données',
    'Identification des valeurs manquantes',
    'Détection des doublons',
    'Analyse des statistiques descriptives',
    'Analyse des fréquences et des catégories',
    'Identification des incohérences de formats et de valeurs',
    'Détection des valeurs aberrantes',
    'Préparation des étapes de nettoyage et de standardisation',
  ],
  screenshots: [],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/Python/Criminalit%C3%A9%20désordonnée',
};
