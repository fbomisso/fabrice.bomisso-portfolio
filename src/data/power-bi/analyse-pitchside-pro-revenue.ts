import type { DomainProject } from '@/types';

export const analysePitchSideProRevenue: DomainProject = {
  slug: 'analyse-pitchside-pro-revenue',
  domain: 'power-bi',
  title: 'PitchSide Pro | Diagnostic de la Performance des Revenus',
  objective:
    'Décomposer la croissance du chiffre d’affaires afin d’identifier les véritables moteurs de performance commerciale et d’éviter les interprétations non vérifiées.',
  context:
    'Projet de visualisation réalisé autour d’une plateforme fictive mondiale de e-commerce spécialisée dans les produits de football sur la période 2021-2025.',
  data:
    'Données fictives couvrant les revenus, le trafic, les conversions, le panier moyen, les régions et les canaux de vente sur cinq années.',
  technologies: [
    'Power BI',
    'Power Query',
    'DAX',
    'Modélisation en étoile',
    'Time Intelligence',
  ],
  kpis: [
    { value: '+43 %', label: 'croissance du chiffre d’affaires' },
    { value: '2021-2025', label: 'période analysée' },
    { value: '5', label: 'années analysées' },
  ],
  results: [
    'La croissance globale du chiffre d’affaires est décomposée à partir du trafic, du taux de conversion et du panier moyen.',
    'L’analyse évite d’attribuer automatiquement la croissance à un effet tournoi sans validation par les données.',
    'La progression du panier moyen en Allemagne, aux États-Unis et au Brésil est identifiée comme un signal nécessitant une analyse commerciale complémentaire.',
    'L’érosion du panier moyen au Royaume-Uni est mise en évidence comme un point d’attention.',
  ],
  approach: [
    'Préparation et contrôle de la qualité des données',
    'Transformation avec Power Query',
    'Construction d’un modèle en étoile',
    'Création des mesures DAX',
    'Analyse de la croissance du chiffre d’affaires',
    'Analyse du trafic et de la conversion',
    'Analyse du panier moyen',
    'Storytelling et restitution décisionnelle',
  ],
  screenshots: [
    {
      src: '/projets/power-bi/analyse-pitchside-pro-revenue/01-tribune-executive.jpg',
      alt: 'Vue exécutive du projet PitchSide Pro',
    },
    {
      src: '/projets/power-bi/analyse-pitchside-pro-revenue/02-sous-le-capot.jpg',
      alt: 'Analyse détaillée des données PitchSide Pro',
    },
    {
      src: '/projets/power-bi/analyse-pitchside-pro-revenue/03-cartographie-du-signal.jpg',
      alt: 'Cartographie des signaux de performance',
    },
    {
      src: '/projets/power-bi/analyse-pitchside-pro-revenue/04-le-faux-coupable.jpg',
      alt: 'Analyse du faux facteur explicatif',
    },
    {
      src: '/projets/power-bi/analyse-pitchside-pro-revenue/05-le-plan-de-match.jpg',
      alt: 'Plan d’action et synthèse du projet',
    },
  ],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI/analyse-pitchside-pro-revenue',
};
