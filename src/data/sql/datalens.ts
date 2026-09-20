import type { DomainProject } from '@/types';

export const dataLens: DomainProject = {
  slug: 'datalens',
  domain: 'sql',
  title: 'DataLens | SaaS Analytics',
  objective:
    'Analyser l’activité et la performance d’une plateforme SaaS B2B à travers des KPI financiers, d’engagement, de fidélisation et de support.',
  context:
    'Projet SQL Server consacré à la modélisation d’une base relationnelle, à l’analyse de KPI SaaS et à l’identification de signaux associés au churn.',
  data:
    'Base relationnelle couvrant 4 entreprises, 9 utilisateurs, 5 périodes d’abonnement, 18 enregistrements d’activité, 20 factures et 10 tickets de support sur la période janvier à décembre 2024.',
  technologies: [
    'SQL Server',
    'T-SQL',
    'SSMS',
    'CTE',
    'Fonctions de fenêtrage',
    'JOIN',
    'Agrégations',
  ],
  kpis: [
    { value: '1 097 €', label: 'MRR' },
    { value: '25 %', label: 'churn historique' },
    { value: '3/4', label: 'clients actifs' },
    { value: '77', label: 'requêtes analysées' },
    { value: '5', label: 'tickets ouverts' },
  ],
  results: [
    'Le MRR des abonnements actifs s’élève à 1 097 € par mois, réparti entre trois entreprises clientes.',
    'Le churn historique est de 25 %, soit une entreprise churnée sur les quatre présentes dans le dataset.',
    'L’engagement ne suffit pas à expliquer le churn : Analytics Pro comptait 8,50 requêtes par utilisateur avant sa résiliation.',
    'Analytics Pro cumulait deux tickets ouverts non résolus avant son churn, constituant un signal potentiel à surveiller.',
    'Les temps moyens de résolution des tickets varient selon les entreprises, de 2 heures à 18,5 heures pour les tickets résolus.',
    'L’analyse montre l’intérêt de combiner usage, support, évolution de l’abonnement et historique client pour construire une analyse du risque de churn.',
  ],
  approach: [
    'Modélisation d’une base relationnelle SaaS',
    'Création et analyse des tables relationnelles',
    'Calcul du MRR',
    'Analyse du churn historique',
    'Analyse de l’engagement utilisateur',
    'Analyse des tickets de support',
    'Calcul des temps de résolution',
    'Utilisation de JOIN et agrégations',
    'Utilisation de CTE et fonctions de fenêtrage',
    'Identification de signaux de risque',
    'Contrôle de la qualité et de l’intégrité des données',
  ],
  screenshots: [],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/SQL/01_DataLens',
};
