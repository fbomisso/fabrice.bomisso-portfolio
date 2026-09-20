import type { DomainProject } from '@/types';

// Source : README de PowerBI/assurance-automobile-dashboard (dépôt fabrice.bomisso-projects).
// Les montants (primes, profit) ne sont pas datés dans le README : aucune période n’est donc indiquée.
// Le Combined Ratio repose sur une hypothèse de frais fixée à 25 % (indiquée dans les résultats).
// Les valeurs des KPI utilisent des espaces insécables (\u00A0) pour éviter les retours à la ligne.
export const assuranceAutomobileDashboard: DomainProject = {
  slug: 'assurance-automobile-dashboard',
  domain: 'power-bi',
  title: 'Analyse des performances d’une assurance automobile',
  objective:
    'Piloter la performance d’une agence d’assurance automobile avec un dashboard Power BI de 5 pages (rentabilité, clients, sinistralité, qualité des données et fidélisation), construit à partir de sources hétérogènes et imparfaites.',
  context:
    'Projet Data Analytics et Business Intelligence réalisé dans le cadre d’une formation professionnelle. La question de départ : comment transformer plusieurs jeux de données hétérogènes et imparfaits en un tableau de bord décisionnel fiable pour piloter une activité d’assurance automobile ? Le modèle suit la rentabilité technique (profit technique, Loss Ratio, marge technique, Combined Ratio), la sinistralité, la qualité des données, la structure et la valeur du portefeuille clients, la fidélisation et les anomalies à investiguer.',
  data:
    '3 fichiers CSV, soit 116 503 lignes : insurance_dataset (13 000 lignes : profils d’assurés et sinistres), car_sales_data (50 000 lignes : véhicules et prix de vente) et data_synthetic (53 503 lignes : clients, contrats et comportements). Les sources contiennent volontairement plusieurs anomalies pour démontrer la démarche de qualité des données : les données réellement corrigées sont distinguées des anomalies simplement identifiées et conservées pour analyse.',
  technologies: ['Power BI', 'Power Query', 'DAX', 'Modélisation en étoile', 'Data Quality'],
  kpis: [
    { value: '162\u00A0M€', label: 'de primes' },
    { value: '42\u00A0M€', label: 'de profit technique' },
    { value: '98,81\u00A0%', label: 'de Combined Ratio' },
    { value: '116\u00A0503', label: 'lignes de données issues de 3 sources' },
    { value: '938', label: 'sinistres exceptionnels identifiés' },
    { value: '4,95\u00A0/\u00A05', label: 'de score qualité moyen' },
  ],
  results: [
    'Rentabilité : 162 M€ de primes pour 42 M€ de profit technique, soit une marge avant frais de 26,2 %. Le Combined Ratio atteint 98,81 %, sous le seuil de 100 %, avec une hypothèse de frais fixée à 25 % : c’est un indicateur de rentabilité technique avant prise en compte des autres éléments financiers.',
    'Portefeuille clients : 23 K clients actifs sur 12 mois, un taux de mono-équipement de 89,2 %, 1,23 produit par client en moyenne, une prime moyenne d’environ 3 K€, une durée moyenne de contrat d’environ 1 200 jours et une valeur client d’environ 4 K€.',
    'Sinistralité : 938 sinistres exceptionnels ont été identifiés. Le coût moyen d’un sinistre est d’environ 9 K€ et le coût médian d’environ 6 K€ : cette distinction permet de séparer les sinistres courants de ceux à coût inhabituel.',
    'Qualité des données : score qualité moyen de 4,95 sur 5 dans le dashboard (4,7 sur 5 lors de l’audit initial), 95 % d’âges valides, 95 % de complétude des sinistres et 96 % de complétude des contrats.',
    'Anomalies suivies : 2 247 dates incohérentes (niveau critique), 650 âges inconnus et 721 prix suspects (niveau vigilance), et 23 dates identiques (niveau normal).',
    'Limite documentée : la table des sinistres n’est pas reliée à la dimension de dates, donc la page Risque et sinistralité ne propose pas d’évolution temporelle des sinistres. Cette limite est assumée et documentée plutôt que masquée.',
  ],
  approach: [
    'Audit initial des 3 sources : âge sentinelle 102,42 répété 650 fois (flag et valeur nulle), 938 montants de sinistres atypiques (colonne de flag), 14 doublons exacts supprimés dans les ventes de véhicules, prix extrême conservé après diagnostic et classé selon 3 niveaux, 2 formats de dates corrigés.',
    'Nettoyage avec Power Query : standardisation des formats, 2 247 dates incohérentes et 23 dates identiques signalées par un flag, et détection d’emojis dans les colonnes de qualité avec CONTAINSSTRING.',
    'Modélisation en étoile avec plusieurs tables de faits (Contrats, Sinistres, Ventes) et des dimensions (Assuré, Client, Segmentation, Date), pour séparer les domaines d’analyse tout en gardant une structure adaptée au DAX.',
    'Création de plus de 45 mesures DAX : rentabilité (profit technique, Loss Ratio, marge technique, Combined Ratio), sinistralité, segmentation, qualité des données, fidélisation, alertes métier et analyse temporelle.',
    'Conception d’un dashboard de 5 pages : Direction, Clients et segmentation, Risque et sinistralité, Qualité des données, Fidélisation et CRM.',
    'Documentation des limites du modèle plutôt que leur dissimulation : sinistres non reliés à la dimension de dates, hypothèse de frais de 25 % pour le Combined Ratio, prix extrêmes conservés après diagnostic.',
  ],
  screenshots: [
    {
      src: '/projets/power-bi/assurance-automobile-dashboard/01-direction.jpg',
      alt: 'Page Direction : vision exécutive avec profit technique, primes, marge avant frais, sinistres exceptionnels, Combined Ratio, évolution annuelle des primes et alertes métier',
    },
    {
      src: '/projets/power-bi/assurance-automobile-dashboard/02-clients-segmentation.jpg',
      alt: 'Page Clients et segmentation : clients actifs, taux de mono-équipement, prime moyenne, segmentation en 5 groupes et répartition par tranche d’âge',
    },
    {
      src: '/projets/power-bi/assurance-automobile-dashboard/03-risque-sinistralite.jpg',
      alt: 'Page Risque et sinistralité : coût moyen et médian des sinistres, répartition par catégorie, sinistres exceptionnels et diagnostic des anomalies',
    },
    {
      src: '/projets/power-bi/assurance-automobile-dashboard/04-qualite-donnees.jpg',
      alt: 'Page Qualité des données : score qualité moyen, taux d’âges valides, complétude des sinistres et des contrats, et anomalies suivies par niveau',
    },
    {
      src: '/projets/power-bi/assurance-automobile-dashboard/05-fidelisation-crm.jpg',
      alt: 'Page Fidélisation et CRM : durée moyenne de contrat, valeur client, composition du portefeuille par type de police, top 10 et bottom 10 des clients par valeur nette',
    },
  ],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI/assurance-automobile-dashboard',
};