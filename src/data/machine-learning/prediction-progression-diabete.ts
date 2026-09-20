import type { DomainProject } from '@/types';

export const predictionProgressionDiabete: DomainProject = {
  slug: 'prediction-progression-diabete',
  domain: 'machine-learning',
  title: 'Prédiction de la progression du diabète',
  objective:
    'Construire un modèle de régression capable d’estimer quantitativement la progression de la maladie à partir de caractéristiques cliniques standardisées.',
  context:
    'Projet de Machine Learning supervisé consacré à l’exploration des relations entre les variables explicatives, la multicolinéarité et la progression de la maladie.',
  data:
    'Dataset Diabetes de scikit-learn : 442 observations, 10 variables explicatives et une variable cible quantitative.',
  technologies: [
    'Python',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Scikit-learn',
    'XGBoost',
    'SHAP',
    'Jupyter Notebook',
  ],
  kpis: [
    { value: '442', label: 'observations' },
    { value: '10', label: 'variables explicatives' },
    { value: '0.480', label: 'R² sur le test' },
    { value: '42.52', label: 'MAE' },
    { value: '52.48', label: 'RMSE' },
  ],
  results: [
    'Le Gradient Boosting optimisé offre le meilleur compromis parmi les modèles évalués.',
    'Le modèle atteint un R² de 0.480 sur l’échantillon de test.',
    'Le BMI, s5, la pression artérielle et s3 figurent parmi les variables les plus importantes pour la prédiction.',
    'L’analyse SHAP confirme l’importance prédictive de plusieurs variables, sans permettre d’en déduire une relation causale.',
    'Les résultats restent limités par la taille du dataset et par la part importante de variance non expliquée.',
  ],
  approach: [
    'Exploration univariée et bivariée des données',
    'Analyse des corrélations et de la multicolinéarité',
    'Préparation et standardisation des données',
    'Comparaison de huit modèles de régression',
    'Optimisation des hyperparamètres avec GridSearchCV',
    'Évaluation sur un jeu de test indépendant',
    'Diagnostic des résidus',
    'Interprétation avec importance des variables et SHAP',
  ],
  screenshots: [
    {
      src: '/projets/machine-learning/prediction-progression-diabete/01_distribution_progression_diabete.png',
      alt: 'Distribution de la progression du diabète',
    },
    {
      src: '/projets/machine-learning/prediction-progression-diabete/01_matrice_correlation_pearson.png',
      alt: 'Matrice de corrélation de Pearson',
    },
    {
      src: '/projets/machine-learning/prediction-progression-diabete/09_gradient_boosting.png',
      alt: 'Performance du Gradient Boosting',
    },
    {
      src: '/projets/machine-learning/prediction-progression-diabete/01_importance_variables_gradient_boosting.png',
      alt: 'Importance des variables du Gradient Boosting',
    },
    {
      src: '/projets/machine-learning/prediction-progression-diabete/02_shap_summary_gradient_boosting.png',
      alt: 'Analyse SHAP du Gradient Boosting',
    },
  ],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/Machine-Learning/I_Apprentissage_supervise/A_Regression/01_Prediction_progression_diabete',
};
