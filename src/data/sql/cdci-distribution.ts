import type { DomainProject } from '@/types';

export const cdciDistribution: DomainProject = {
  slug: 'cdci-distribution',
  domain: 'sql',
  title: 'CDCI Distribution | Data Quality & SQL Analytics',
  objective:
    'Construire et auditer une base relationnelle de distribution afin de détecter, corriger et valider les anomalies de données avec SQL Server.',
  context:
    'Projet SQL de bout en bout couvrant la création des tables, le chargement des données, l’intégrité relationnelle, l’audit qualité, le nettoyage et la validation finale.',
  data:
    'Base de données de distribution composée de 16 tables et 502 644 lignes, avec 5 tables de faits et 11 tables de dimensions couvrant les ventes, stocks, approvisionnements, livraisons, retours, clients, produits et magasins.',
  technologies: [
    'SQL Server',
    'T-SQL',
    'SSMS',
    'Primary Key',
    'Foreign Key',
    'Indexes',
    'CTE',
    'JOIN',
    'Data Quality',
    'Data Cleaning',
  ],
  kpis: [
    { value: '502 644', label: 'lignes analysées' },
    { value: '16', label: 'tables' },
    { value: '34', label: 'contraintes FK' },
    { value: '15', label: 'index supplémentaires' },
    { value: '2 638', label: 'quantités de vente négatives' },
  ],
  results: [
    'L’audit initial a permis d’identifier plusieurs anomalies, notamment 2 638 quantités de vente négatives, 3 043 montants de vente NULL et 1 501 références clients orphelines.',
    'D’autres contrôles ont révélé des quantités de stock négatives, des délais d’approvisionnement incohérents et des dates de livraison incompatibles avec les dates prévues.',
    'Le nettoyage ciblé a ramené à zéro les anomalies contrôlées sur les quantités négatives, montants de vente NULL, clients orphelins, délais négatifs, dates incohérentes, retours négatifs, prix NULL et coûts négatifs.',
    'Les contraintes de clés étrangères et les contrôles d’intégrité permettent de sécuriser les relations entre les différentes dimensions et tables de faits.',
    'Des index supplémentaires ont été créés afin d’améliorer les performances sur les colonnes utilisées dans les relations et les requêtes d’analyse.',
    'Le projet met en place un workflow complet allant de la création de la base jusqu’à la validation finale après nettoyage.',
  ],
  approach: [
    'Création de la base SQL Server',
    'Création des tables de dimensions et de faits',
    'Chargement des données',
    'Mise en place des clés primaires et étrangères',
    'Création des index',
    'Audit des valeurs NULL',
    'Détection des valeurs négatives et incohérentes',
    'Détection des références orphelines',
    'Contrôle des doublons',
    'Nettoyage ciblé des anomalies',
    'Validation des données après nettoyage',
    'Contrôle final de la qualité et de l’intégrité',
  ],
  screenshots: [],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/SQL/02_Distribution',
};
