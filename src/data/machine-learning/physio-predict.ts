import type { DomainProject } from '@/types';

export const physioPredict: DomainProject = {
  slug: 'physio-predict',
  domain: 'machine-learning',
  title: 'PhysioPredict | Régression multi-sortie des indicateurs physiques',
  objective:
    'Étudier la possibilité de prédire simultanément le poids, le tour de taille et le pouls à partir de performances physiques mesurées.',
  context:
    'Projet de Machine Learning basé sur le dataset Linnerud de Scikit-learn, utilisé pour explorer une problématique de régression multi-sortie appliquée aux performances physiques.',
  data:
    '20 observations et 6 variables. Les variables explicatives sont Chins, Situps et Jumps, tandis que les variables cibles sont Weight, Waist et Pulse. Aucune valeur manquante ni aucun doublon n’a été détecté.',
  technologies: [
    'Python',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'Matplotlib',
    'Seaborn',
    'Machine Learning',
  ],
  kpis: [
    { value: '20', label: 'observations' },
    { value: '3', label: 'variables explicatives' },
    { value: '3', label: 'variables cibles' },
  ],
  results: [
    'Le problème est formulé comme une tâche de régression multi-sortie : performances physiques vers indicateurs corporels.',
    'L’analyse exploratoire met en évidence plusieurs relations entre les variables explicatives et les variables cibles.',
    'La corrélation entre Situps et Waist est de −0,646, tandis que Chins et Waist présentent une corrélation de −0,552.',
    'Les variables Weight et Waist présentent une corrélation positive de 0,870.',
    'Le jeu de données ne contient aucune valeur manquante ni aucun doublon.',
  ],
  approach: [
    'Chargement du dataset Linnerud',
    'Compréhension de la structure des données',
    'Contrôle des valeurs manquantes et des doublons',
    'Analyse statistique descriptive',
    'Analyse univariée',
    'Analyse bivariée',
    'Analyse des corrélations',
    'Préparation d’une approche de régression multi-sortie',
    'Préparation de la standardisation des variables',
    'Préparation de plusieurs modèles de régression',
    'Préparation des métriques MAE, RMSE et R²',
  ],
  screenshots: [],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/Machine-Learning/I_Apprentissage_supervise/A_Regression/03_PhysioPredict',
};
