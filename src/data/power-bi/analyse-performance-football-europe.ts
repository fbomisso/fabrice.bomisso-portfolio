import type { DomainProject } from '@/types';

export const analysePerformanceFootballEurope: DomainProject = {
  slug: 'analyse-performance-football-europe',
  domain: 'power-bi',
  title: 'Analyse de Performance, Scouting et Valorisation Financière | Football Européen',
  objective:
    'Construire une vue 360° du football européen en combinant performance sportive, scouting et analyse financière.',
  context:
    'Analyse des cinq grands championnats européens avec une approche combinant performance des joueurs, identification de profils sous-cotés et valorisation financière.',
  data:
    '12 fichiers sources couvrant la Premier League, Ligue 1, La Liga, Bundesliga et Serie A sur 2018-2024. Environ 19 270 lignes de statistiques de joueurs de champ, 1 305 lignes de gardiens et 2 047 lignes de valorisation financière. La couverture financière porte sur 18 clubs sur 144.',
  technologies: ['Power BI', 'Power Query', 'DAX', 'Modélisation en étoile'],
  kpis: [
    { value: '0,42', label: 'corrélation performance / valeur' },
    { value: '−0,047', label: 'corrélation âge / performance' },
    { value: '18 / 144', label: 'clubs avec données financières' },
  ],
  results: [
    'La performance et la valeur marchande présentent une corrélation modérée de 0,42.',
    'Le pic de valorisation se situe autour de 22 à 24 ans, alors que la performance varie beaucoup moins avec l’âge.',
    'La différence Buts − xG présente une forte volatilité saisonnière et ne doit pas être considérée comme une caractéristique stable sur une seule saison.',
    'Une segmentation scouting permet d’identifier les profils présentant un rapport performance / valeur intéressant.',
  ],
  approach: [
    'Audit et préparation des données',
    'Déduplication et gestion des homonymes',
    'Modélisation en étoile à faits multiples',
    'Création des mesures et colonnes calculées DAX',
    'Analyse de performance et de valorisation',
    'Segmentation des profils de scouting',
    'Conception du dashboard et storytelling',
  ],
  screenshots: [
    { src: '/projets/power-bi/analyse-performance-football-europe/01-accueil.png', alt: 'Vue d’ensemble du projet Football Européen' },
    { src: '/projets/power-bi/analyse-performance-football-europe/02-performance.png', alt: 'Analyse de performance des joueurs' },
    { src: '/projets/power-bi/analyse-performance-football-europe/03-scouting.png', alt: 'Analyse scouting et profils sous-cotés' },
    { src: '/projets/power-bi/analyse-performance-football-europe/04-finance.png', alt: 'Analyse financière des joueurs et clubs' },
    { src: '/projets/power-bi/analyse-performance-football-europe/05-effectif-rh.png', alt: 'Analyse de l’utilisation des effectifs' },
  ],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI/analyse-performance-football-europe',
};
