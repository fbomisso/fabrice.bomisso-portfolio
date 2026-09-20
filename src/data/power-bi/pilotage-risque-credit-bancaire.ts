import type { DomainProject } from '@/types';

// Source : README de PowerBI/pilotage-risque-credit-bancaire (dépôt fabrice.bomisso-projects).
// Les valeurs des KPI utilisent des espaces insécables (\u00A0) pour éviter les retours à la ligne.
export const pilotageRisqueCreditBancaire: DomainProject = {
  slug: 'pilotage-risque-credit-bancaire',
  domain: 'power-bi',
  title: 'Pilotage du risque de crédit bancaire',
  objective:
    'Suivre la santé d’un portefeuille de prêts et repérer les segments les plus exposés au défaut grâce à un dashboard Power BI en 4 pages.',
  context:
    'Dashboard Power BI consacré au pilotage du risque de crédit sur un portefeuille de 38 576 prêts répartis dans 50 États américains. Les prêts ont été émis principalement en 2021 ; l’analyse porte sur le volume, le défaut, le remboursement, les intérêts, le profil des emprunteurs et l’évolution dans le temps.',
  data:
    'Dataset Kaggle « Financial Loans Dataset with Facts and Dimensions » : une table de faits (prêts) et des dimensions décrivant les prêts et les emprunteurs. Les dates de suivi s’étendent jusqu’en janvier 2022.',
  technologies: ['Power BI', 'Power Query', 'DAX', 'Modélisation en étoile'],
  kpis: [
    { value: '38\u00A0576', label: 'prêts analysés' },
    { value: '436\u00A0M$', label: 'montant total prêté' },
    { value: '13,82\u00A0%', label: 'taux de défaut' },
    { value: '83,33\u00A0%', label: 'taux de remboursement' },
    { value: '12,05\u00A0%', label: 'taux d’intérêt moyen' },
    { value: '66\u00A0M$', label: 'montant en défaut' },
  ],
  results: [
    'Le taux de défaut augmente avec le grade : 5,70 % pour le grade A contre 31,31 % pour le grade G.',
    'Les prêts de 60 mois affichent 22,34 % de défaut, contre 10,71 % pour ceux de 36 mois.',
    'Le motif « small business » présente le taux de défaut le plus élevé (25,62 %), devant « renewable_energy » (18,09 %).',
    'Le portefeuille est surtout composé d’emprunteurs aux revenus intermédiaires : 47,95 % dans la tranche 50K-100K$ et 36,12 % dans la tranche 0-50K$.',
    'Le montant prêté progresse globalement au cours de 2021, avec un taux de défaut mensuel compris entre environ 11,5 % et 15 %.',
  ],
  approach: [
    'Nettoyage et contrôles qualité avec Power Query : types de données, clés, doublons, valeurs manquantes et cohérence chronologique des dates.',
    'Préparation et transformation des données : noms métier, jointure des informations sur les emprunteurs, création des clés de dates.',
    'Modélisation en étoile autour d’une table de faits de prêts, avec les dimensions Prêt, État et Date.',
    'Gestion de plusieurs dates : la date d’émission comme relation active, les autres dates en relations inactives activées avec USERELATIONSHIP() dans les mesures DAX.',
    'Création de mesures DAX : taux de défaut, taux de remboursement, taux d’intérêt moyen, croissance mensuelle et montant remboursé selon la date du dernier paiement.',
    'Analyse du défaut, du remboursement, des intérêts et de l’évolution temporelle.',
    'Conception d’un dashboard en 4 pages : vue exécutive, analyse du risque, profil emprunteur et évolution temporelle.',
  ],
  screenshots: [
    {
      src: '/projets/power-bi/pilotage-risque-credit-bancaire/01-vue-executive.png',
      alt: 'Page Vue exécutive du dashboard de risque de crédit : KPI, répartition des prêts par statut, taux de défaut par grade et volume mensuel',
    },
    {
      src: '/projets/power-bi/pilotage-risque-credit-bancaire/02-analyse-du-risque.png',
      alt: 'Page Analyse du risque : matrice grade et statut, taux de défaut par motif et par statut de vérification, nuage de points DTI et taux d’intérêt',
    },
    {
      src: '/projets/power-bi/pilotage-risque-credit-bancaire/03-profil-emprunteur.png',
      alt: 'Page Profil emprunteur : revenus, statut de propriété, ancienneté professionnelle et top 10 des métiers',
    },
    {
      src: '/projets/power-bi/pilotage-risque-credit-bancaire/04-profil-empreteur.png',
      alt: 'Page Évolution temporelle : montant prêté et remboursé par mois, croissance mensuelle, taux de défaut et taux d’intérêt mensuels',
    },
  ],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI/pilotage-risque-credit-bancaire',
};