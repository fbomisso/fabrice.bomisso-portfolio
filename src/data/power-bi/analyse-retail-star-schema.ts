import type { DomainProject } from '@/types';

// Source : README.md de PowerBI/analyse-retail-star-schema (dépôt fabrice.bomisso-projects),
// recoupé avec README_projet_retail.md. La source des données est marquée « à confirmer » dans les deux README :
// elle n’est donc pas indiquée ici. Les chiffres en dollars et les valeurs non recoupées ne sont pas repris.
// Les valeurs des KPI utilisent des espaces insécables (\u00A0) pour éviter les retours à la ligne.
export const analyseRetailStarSchema: DomainProject = {
  slug: 'analyse-retail-star-schema',
  domain: 'power-bi',
  title: 'Retail Star Schema',
  objective:
    'Vérifier la fiabilité des chiffres d’un dashboard retail avant de les présenter à une direction : audit DAX par recalcul indépendant, hypothèses métier testées, puis dashboard Power BI en 5 pages sur un modèle en étoile.',
  context:
    'Projet Power BI complet sur un an de ventes retail (2024) : 1 000 000 de transactions, 2,75 Md€ de chiffre d’affaires, 100 000 clients, 500 magasins, 2 000 commerciaux et 50 campagnes marketing. Le cœur du projet n’est pas seulement le dashboard final, mais la démarche d’audit qui l’a précédé : six bugs DAX réels ont été diagnostiqués en recoupant les exports du dashboard avec un recalcul indépendant sur les données sources, une hypothèse sur le segment client « Churn Risk » a été testée puis invalidée, et une découverte tardive a permis de nuancer une conclusion établie plus tôt.',
  data:
    'Modèle en étoile : 1 table de faits (fact_sales, 1 000 000 de lignes) et 6 dimensions : clients (100 000, 10 segments), produits (210, 6 catégories), magasins (500, 3 types), commerciaux (2 000, 4 rôles), campagnes (50) et dates (366 jours, année 2024 uniquement : les comparaisons annuelles restent donc inactives). Les fichiers CSV utilisés pour les vérifications hors Power BI ne contiennent qu’un échantillon de 40 % (400 000 lignes) du volume réel du modèle, un écart documenté pour éviter une erreur de comparaison. L’analyse indique que les données semblent synthétiques : le chiffre d’affaires est quasi uniforme entre produits, catégories, marques et segments.',
  technologies: ['Power BI', 'Power Query', 'DAX', 'Modélisation en étoile'],
  kpis: [
    { value: '1\u00A0000\u00A0000', label: 'transactions analysées' },
    { value: '2,75\u00A0Md€', label: 'de chiffre d’affaires en 2024' },
    { value: '100\u00A0000', label: 'clients' },
    { value: '500', label: 'magasins' },
    { value: '6', label: 'bugs DAX diagnostiqués et corrigés' },
    { value: '×9,5', label: 'd’écart entre les ROI de campagnes (54,78 % à 520,28 %)' },
  ],
  results: [
    'Le segment client « Churn Risk » ne se distingue des autres ni par le chiffre d’affaires, ni par la fréquence d’achat (écart de 0,7 %), ni par la récence individuelle : l’étiquette ne correspond à aucune différence mesurable de comportement. Aucune action de rétention ne devrait s’appuyer dessus tant qu’un vrai score RFM ne l’a pas remplacée.',
    'L’écart de chiffre d’affaires entre rôles commerciaux (environ 16 %) suit le même classement et la même amplitude que l’écart d’effectif : c’est un effet de volume, pas une différence de performance individuelle. Aucune conclusion RH ne doit en être tirée.',
    'Le ROI des campagnes varie de 54,78 % à 520,28 %, soit un facteur d’environ 9,5 : c’est la principale source de variance actionnable du dataset. Ce ROI mesure un rapport chiffre d’affaires attribué sur budget, pas un effet marginal réel.',
    'Le chiffre d’affaires par produit, catégorie, marque et segment client est quasi identique (écarts de 1,8 % à 2,5 % sur 6 découpes indépendantes) : il n’y a pas de « champion » à chercher à ces niveaux dans ce dataset, ce qui est cohérent avec des données synthétiques.',
    'Saisonnalité observée : un creux en janvier et en décembre, et un pic entre septembre et novembre.',
    'Trois homonymies structurelles (commerciaux, produits, magasins) ont été détectées et corrigées : sans correction, le « meilleur commercial » désignait un artefact de fusion de plusieurs personnes portant le même nom.',
  ],
  approach: [
    'Audit de la qualité des données : homonymies de commerciaux (21 noms sur 2 000) et de produits, espace parasite sur le type de magasin corrigé avec Text.Trim(), et écart entre l’échantillon CSV (40 %) et le volume réel du modèle.',
    'Power Query : colonnes d’affichage désambiguïsées au format nom (ID) pour les produits, commerciaux et magasins, et colonnes calculées pour la frise chronologique des campagnes (LOOKUPVALUE, DATEDIFF).',
    'Modélisation en étoile autour de fact_sales et de 6 dimensions. Comme dim_campaigns référence deux fois dim_dates, aucune relation active n’a été créée entre elles : la date de début de campagne est récupérée avec LOOKUPVALUE, et ce choix est documenté.',
    'Audit DAX de 6 bugs, chacun diagnostiqué en recoupant le dashboard avec un recalcul indépendant : filtre CALCULATE corrigé avec KEEPFILTERS, regroupement sur la clé technique plutôt que sur un nom non unique, double multiplication par 100 dans le ROI (garde-fou HASONEVALUE), incohérence de granularité de la croissance trimestrielle, croissance mensuelle comparée à un mois incomplet, et formatage dynamique séparé du calcul.',
    'Investigation RFM : fréquence d’achat et récence individuelle comparées par segment pour tester l’hypothèse « Churn Risk », qui a été invalidée par les données.',
    'Vérification de l’écart de CA par rôle commercial avec un donut d’effectif : l’écart s’explique par la taille des équipes, ce qui a corrigé une conclusion établie plus tôt dans le projet.',
    'Conception d’un dashboard de 5 pages : Vue générale, Ventes et produits, Clients et CRM, Campagnes (avec une frise construite comme un faux Gantt) et Équipe commerciale.',
  ],
  screenshots: [
    {
      src: '/projets/power-bi/analyse-retail-star-schema/01-vue-generale.jpg',
      alt: 'Page Vue générale : synthèse globale pilotable avec une métrique dynamique, le chiffre d’affaires cumulé, l’évolution mensuelle et la répartition par type de magasin',
    },
    {
      src: '/projets/power-bi/analyse-retail-star-schema/02-ventes-produits.jpg',
      alt: 'Page Ventes et produits : matrice catégorie par mois avec mise en forme conditionnelle, top 10 des produits et carte géographique des ventes',
    },
    {
      src: '/projets/power-bi/analyse-retail-star-schema/03-clients-crm.jpg',
      alt: 'Page Clients et CRM : chiffre d’affaires par segment client, carte géographique des clients et table de fréquence et récence pour l’analyse RFM',
    },
    {
      src: '/projets/power-bi/analyse-retail-star-schema/04-campagnes.jpg',
      alt: 'Page Campagnes : top 10 des campagnes par multiple de retour et frise chronologique des campagnes 2024',
    },
    {
      src: '/projets/power-bi/analyse-retail-star-schema/05-equipe-commerciale.jpg',
      alt: 'Page Équipe commerciale : top 10 des commerciaux, chiffre d’affaires par rôle et effectif par rôle',
    },
  ],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI/analyse-retail-star-schema',
};