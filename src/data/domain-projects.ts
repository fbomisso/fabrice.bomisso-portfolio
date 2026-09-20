import type { DomainProject } from '@/types';
import { powerBiProjects } from './power-bi';
import { machineLearningProjects } from './machine-learning';
import { pythonProjects } from './python';
import { sqlProjects } from './sql';

// Les projets seront ajoutés ici un par un, à partir des README réels.
// Captures : à placer dans public/projets/<domaine>/<slug-du-projet>/
//
// Modèle d'une entrée :
//
// {
//   slug: 'slug-du-projet',
//   domain: 'power-bi',
//   title: 'Titre du projet',
//   objective: 'Une phrase qui dit ce que le projet cherche à résoudre.',
//   context: 'Contexte et problématique.',
//   data: 'Source et volume des données.',
//   technologies: ['Power BI', 'DAX'],
//   kpis: [{ value: '...', label: '...' }],
//   results: ['Résultat ou insight important.'],
//   approach: ['Power Query', 'Modèle en étoile', 'DAX', 'Dashboard'],
//   screenshots: [
//     { src: '/projets/power-bi/slug-du-projet/01-dashboard.png', alt: 'Description de la capture' },
//   ],
//   github:
//     'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/PowerBI/nom-du-dossier',
// },

export const domainProjects: DomainProject[] = [
  ...powerBiProjects,
  ...machineLearningProjects,
  ...pythonProjects,
  ...sqlProjects,
];
