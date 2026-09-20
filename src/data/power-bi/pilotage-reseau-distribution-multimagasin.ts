import type { DomainProject } from '@/types';

// Source : README de PowerBI/pilotage-reseau-distribution-multimagasins (dépôt fabrice.bomisso-projects).
// Attention : le slug de route est SANS « s » (pilotage-reseau-distribution-multimagasin),
// alors que le dossier GitHub réel est AVEC « s » (pilotage-reseau-distribution-multimagasins).
// Le README ne donne pas de valeur absolue de chiffre d’affaires : aucune n’est indiquée ici.
// Les valeurs des KPI utilisent des espaces insécables (\u00A0) pour éviter les retours à la ligne.
export const pilotageReseauDistributionMultimagasin: DomainProject = {
  slug: 'pilotage-reseau-distribution-multimagasin',
  domain: 'power-bi',
  title: 'Pilotage d’un réseau de distribution multimagasins',
  objective:
    'Suivre la performance commerciale, la rentabilité, la clientèle, les achats et les stocks d’un réseau de distribution multi-sites grâce à un dashboard Power BI en 5 pages.',
  context:
    'Dashboard Power BI de pilotage commercial, financier, client et logistique pour un réseau de distribution multi-sites : 12 magasins, 100 références produits et 1 000 clients enregistrés dans 5 pays d’Afrique (Côte d’Ivoire, Burkina Faso, Togo, Sénégal, Cameroun), de janvier 2023 à décembre 2025. Le projet répond à des questions concrètes : quelle performance par magasin et par pays, quels produits génèrent le plus de chiffre d’affaires et de marge, quels magasins risquent la rupture de stock, qui sont les clients les plus importants, et les volumes d’achat sont-ils cohérents avec la demande.',
  data:
    '4 fichiers CSV : ventes (1 000 lignes), achats (1 000 lignes), clients (1 000 lignes) et stock (600 lignes). Préparation dans Power Query : formats de date normalisés, prix et coûts unitaires recalculés lorsqu’ils étaient nuls, fournisseurs manquants remplacés par « Fournisseur Inconnu », colonnes sans valeur analytique (email, téléphone) supprimées. Principe appliqué : ne pas remplacer une valeur manquante par une valeur inventée.',
  technologies: ['Power BI', 'Power Query', 'DAX', 'Modélisation en étoile'],
  kpis: [
    { value: '12', label: 'magasins dans 5 pays' },
    { value: '36\u00A0%', label: 'de marge brute' },
    { value: '24', label: 'produits en rupture de stock' },
    { value: '629\u00A0/\u00A01\u00A0000', label: 'clients ayant au moins un achat' },
    { value: '≈\u00A040\u00A0%', label: 'du chiffre d’affaires réalisé par 4 magasins' },
    { value: '100', label: 'références produits' },
  ],
  results: [
    'Le chiffre d’affaires est concentré : 4 magasins réalisent près de 40 % du total, et le Magasin 7 en représente à lui seul environ 12 %. Ces magasins sont un point d’appui pour reproduire leurs pratiques ailleurs.',
    'La marge brute atteint 36 %. Les produits dont la marge est inférieure à 25 % sont un axe d’analyse pour améliorer la rentabilité.',
    'Sur 1 000 clients enregistrés, 629 ont effectué au moins un achat : une part importante de la base reste inactive et constitue une cible pour des campagnes de réactivation.',
    'Côté stocks, 24 produits sont en rupture et plus de 60 sont considérés comme critiques, ce qui permet de repérer rapidement les besoins de réapprovisionnement.',
    'Le Burkina Faso représente 27,5 % de la base clients, devant le Togo (23,9 %). La Côte d’Ivoire est moins représentée dans la base clients malgré son importance dans le périmètre étudié.',
    'Recommandations issues de l’analyse : réapprovisionner en priorité les produits en rupture, alerter les magasins sur les stocks critiques, lancer une campagne de réactivation des clients inactifs, identifier les pratiques des magasins les plus performants et promouvoir les produits à forte marge.',
  ],
  approach: [
    'Nettoyage et transformation dans Power Query : normalisation des dates avec try…otherwise, recalcul des prix et coûts nuls, gestion des valeurs manquantes, extraction et déduplication, création des dimensions.',
    'Modélisation en étoile avec 3 tables de faits (Ventes, Achats, Stock) et 4 dimensions (Date, Magasins, Produits, Clients).',
    'Gestion des relations : la relation Clients vers Magasins est désactivée pour éviter les chemins ambigus vers les ventes, et réactivable ponctuellement avec USERELATIONSHIP.',
    'Création de 15 mesures DAX regroupées dans une table dédiée : chiffre d’affaires, marge, taux de marge, croissance mensuelle (MoM), clients actifs et produits en rupture, avec DIVIDE pour éviter les divisions par zéro et SUMX pour les calculs ligne par ligne.',
    'Colonnes calculées de segmentation (segment client, tranche de prix, statut de stock) construites avec SWITCH(TRUE()).',
    'Conception d’un dashboard de 5 pages : Vue globale, Ventes et produits, Clients, Achats et fournisseurs, Stock et alertes, avec KPI, filtres, segments, navigation entre les pages et mise en forme conditionnelle.',
    'Storytelling : identification des écarts, des risques et des opportunités, puis formulation de recommandations priorisées à partir des données.',
  ],
  screenshots: [
    {
      src: '/projets/power-bi/pilotage-reseau-distribution-multimagasin/vue-globale.png',
      alt: 'Page Vue globale : vision 360° du réseau avec chiffre d’affaires, marge unitaire, transactions, clients actifs, croissance mensuelle, chiffre d’affaires par magasin et par pays, évolution mensuelle et top produits',
    },
    {
      src: '/projets/power-bi/pilotage-reseau-distribution-multimagasin/vente-produit.png',
      alt: 'Page Ventes et produits : top 10 des produits par chiffre d’affaires, quantités vendues, marge, évolution mensuelle et ventes par tranche de prix',
    },
    {
      src: '/projets/power-bi/pilotage-reseau-distribution-multimagasin/clients.png',
      alt: 'Page Clients : segmentation Premium, Régulier, Nouveaux et Dormants, taux de fidélité, répartition par pays, chiffre d’affaires par client et clients actifs',
    },
    {
      src: '/projets/power-bi/pilotage-reseau-distribution-multimagasin/achat-fournisseur.png',
      alt: 'Page Achats et fournisseurs : coût total par fournisseur, achats par catégorie, nombre de commandes, performance des fournisseurs et évolution des achats',
    },
    {
      src: '/projets/power-bi/pilotage-reseau-distribution-multimagasin/stock-alerte.png',
      alt: 'Page Stock et alertes : stock total, produits en rupture, produits en stock critique, stock par magasin et ancienneté des réapprovisionnements',
    },
  ],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI/pilotage-reseau-distribution-multimagasins',
};