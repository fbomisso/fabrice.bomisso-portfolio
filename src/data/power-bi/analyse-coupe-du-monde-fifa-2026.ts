import type { DomainProject } from '@/types';

// Source : README de PowerBI/analyse-coupe-du-monde-fifa-2026 (dépôt fabrice.bomisso-projects).
// Le README ne fournit pas de valeurs de résultats sportifs : les KPI ci-dessous décrivent le périmètre
// du projet et la corrélation possession / classement Elo (r = 0,73), tous issus du README.
// Les valeurs des KPI utilisent des espaces insécables (\u00A0) pour éviter les retours à la ligne.
export const analyseCoupeDuMondeFifa2026: DomainProject = {
  slug: 'analyse-coupe-du-monde-fifa-2026',
  domain: 'power-bi',
  title: 'Analyse de la Coupe du Monde FIFA 2026',
  objective:
    'Construire un dashboard de Football Analytics sur la Coupe du Monde FIFA 2026 pour comparer les équipes, les joueurs, les effectifs et les arbitres à travers 5 pages dédiées.',
  context:
    'Dashboard Power BI sur la Coupe du Monde FIFA 2026 : 48 équipes, 104 matchs, 12 groupes de 4. Il couvre les performances des équipes (attaque, défense, possession), les performances individuelles des joueurs, les résultats, les xG, les tirs et le parcours dans la compétition. Chaque page répond aux besoins d’un profil précis : analyste sportif, recruteur, journaliste sportif ou direction sportive.',
  data:
    '14 fichiers CSV sources (équipes, matchs, statistiques d’équipe par match, effectifs et joueurs, statistiques des joueurs, compositions, événements de match, arbitres, stades, phases du tournoi), dont 3 fichiers orientés Machine Learning hors périmètre BI. Volumes principaux : 48 équipes, 104 matchs, 1 248 joueurs convoqués, 5 408 lignes de composition, 601 événements de match, 28 arbitres et 16 stades. Limites : pas de statistiques défensives avancées (tacles, interceptions), et la table des événements de match est incomplète sur 4 matchs, donc elle n’est jamais utilisée pour produire un total agrégé.',
  technologies: [
    'Power BI',
    'Power Query',
    'DAX',
    'Modélisation en étoile',
    'Thème personnalisé',
  ],
  kpis: [
    { value: '48', label: 'équipes analysées' },
    { value: '104', label: 'matchs' },
    { value: '1\u00A0248', label: 'joueurs convoqués' },
    { value: '14', label: 'fichiers CSV sources audités' },
    { value: 'r\u00A0=\u00A00,73', label: 'corrélation possession / classement Elo' },
    { value: '5', label: 'pages de dashboard' },
  ],
  results: [
    'La possession moyenne est fortement corrélée au classement Elo d’avant tournoi (r = 0,73) : elle reflète surtout le niveau global d’une équipe et ne prouve pas à elle seule une causalité sur la victoire.',
    'Trois explications alternatives à une causalité directe entre possession et résultat ont été formulées : la qualité intrinsèque de l’équipe, le niveau de l’adversaire et la causalité inverse liée au score.',
    'Un écart entre buts et xG, observé sur 3 à 7 matchs par équipe, reste une observation descriptive : l’échantillon est trop restreint pour conclure à une capacité durable de finition.',
    'Une table complète n’est pas forcément exacte : une erreur de score sur la finale, détectée après la clôture du projet, l’a montré. Elle a été vérifiée avec 3 sources externes concordantes puis corrigée, et un audit complémentaire des demi-finales et du match pour la 3e place a confirmé que l’anomalie était isolée.',
  ],
  approach: [
    'Audit des 14 fichiers CSV sources avant toute modélisation : structure, granularité, unicité des clés, valeurs manquantes, doublons et cohérence entre les tables. Chaque anomalie est documentée avec son mécanisme, sa vérification et la décision retenue.',
    'Corrections de qualité des données : somme de possession incohérente sur 24 matchs corrigée par un rescale proportionnel, colonnes structurellement vides supprimées, doublon fonctionnel entre deux tables traité, relation 1-à-1 entre deux tables fusionnée en une table Joueurs unique.',
    'Power Query : conversion décimale indépendante de la culture régionale (en-US forcé), conversion du texte 0/1 vers le type logique en deux étapes, référence circulaire entre requêtes résolue avec une requête intermédiaire.',
    'Modélisation en étoile : tables de faits (Matchs, Statistiques d’équipes par match, Compositions, Événements, Joueurs) reliées aux dimensions Équipes, Arbitres, Stades et Phases du tournoi, avec des relations actives et inactives pour les rôles domicile et extérieur.',
    'Mesures DAX : rôles domicile et extérieur avec USERELATIONSHIP, ALL et FILTER, propagation du blanc gérée avec COALESCE, et prévention du produit cartésien dans les visuels combinant plusieurs identifiants.',
    'Correction post-clôture : erreur de score sur la finale corrigée en Power Query avec une colonne conditionnelle ciblée sur la clé du match.',
    'Conception d’un dashboard de 5 pages (Bilan global, Performance équipes, Scouting joueurs, Effectifs, Stats arbitre) avec une analyse critique de la relation entre possession et résultat.',
  ],
  screenshots: [
    {
      src: '/projets/power-bi/analyse-coupe-du-monde-fifa-2026/01-bilan-global.png',
      alt: 'Page Bilan global du dashboard Coupe du Monde FIFA 2026, qui répond à la question : quel est le bilan global du tournoi ?',
    },
    {
      src: '/projets/power-bi/analyse-coupe-du-monde-fifa-2026/02-performance-equipes.png',
      alt: 'Page Performance équipes : quelles équipes ont le mieux performé et pourquoi ?',
    },
    {
      src: '/projets/power-bi/analyse-coupe-du-monde-fifa-2026/03-scouting-joueurs.png',
      alt: 'Page Scouting joueurs : quels sont les joueurs les plus performants ?',
    },
    {
      src: '/projets/power-bi/analyse-coupe-du-monde-fifa-2026/04-effectifs.png',
      alt: 'Page Effectifs : profil démographique et économique des effectifs',
    },
    {
      src: '/projets/power-bi/analyse-coupe-du-monde-fifa-2026/05-stats-arbitre.png',
      alt: 'Page Stats arbitre : le profil d’un arbitre influence-t-il le déroulement des matchs ?',
    },
  ],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI/analyse-coupe-du-monde-fifa-2026',
};