import type { DomainProject } from '@/types';

export const predictionBruitAerodynamique: DomainProject = {
  slug: 'prediction-bruit-aerodynamique',
  domain: 'machine-learning',
  title: 'Prédiction du bruit aérodynamique',
  objective:
    'Prédire le niveau de pression acoustique généré par un profil aérodynamique à partir de ses conditions géométriques et aérodynamiques.',
  context:
    'Projet de régression supervisée basé sur des mesures expérimentales de bruit d’un profil aérodynamique, avec comparaison de modèles linéaires et non linéaires.',
  data:
    'NASA Airfoil Self-Noise Dataset : 1 503 observations, 5 variables explicatives et une variable cible SSPL exprimée en décibels.',
  technologies: [
    'Python',
    'Pandas',
    'NumPy',
    'SciPy',
    'Statsmodels',
    'Scikit-learn',
    'XGBoost',
    'SHAP',
    'Matplotlib',
    'Seaborn',
  ],
  kpis: [
    { value: '1 503', label: 'observations' },
    { value: '5', label: 'variables explicatives' },
    { value: '0.962', label: 'R² sur le test' },
    { value: '0.874 dB', label: 'MAE' },
    { value: '1.380 dB', label: 'RMSE' },
  ],
  results: [
    'XGBoost optimisé obtient les meilleures performances parmi les modèles comparés.',
    'Le modèle atteint un R² de 0.962 sur le jeu de test.',
    'L’erreur absolue moyenne est de 0.874 dB.',
    'La transformation logarithmique de la fréquence améliore la représentation d’une variable fortement asymétrique.',
    'log_f est la variable la plus influente selon l’analyse SHAP, suivie notamment de delta et de la corde.',
    'Les performances sont principalement valables dans le domaine d’interpolation couvert par les mesures expérimentales.',
  ],
  approach: [
    'Contrôle de la qualité des données',
    'Analyse exploratoire et étude des distributions',
    'Analyse des corrélations et tests statistiques',
    'Feature engineering avec transformation logarithmique de la fréquence',
    'Étude de la multicolinéarité',
    'Comparaison de modèles de régression',
    'Optimisation avec RandomizedSearchCV',
    'Validation croisée à 5 folds',
    'Analyse des résidus et interprétation SHAP',
  ],
  screenshots: [
    {
      src: '/projets/machine-learning/prediction-bruit-aerodynamique/03_matrice_correlation.png',
      alt: 'Matrice de corrélation des variables aérodynamiques',
    },
    {
      src: '/projets/machine-learning/prediction-bruit-aerodynamique/05_scatterplot_f_SSPL.png',
      alt: 'Relation entre la fréquence et le niveau sonore',
    },
    {
      src: '/projets/machine-learning/prediction-bruit-aerodynamique/07_distribution_log_f.png',
      alt: 'Distribution de la fréquence après transformation logarithmique',
    },
    {
      src: '/projets/machine-learning/prediction-bruit-aerodynamique/10_residus_xgboost_optimise.png',
      alt: 'Résidus du modèle XGBoost optimisé',
    },
    {
      src: '/projets/machine-learning/prediction-bruit-aerodynamique/11_shap_values.png',
      alt: 'Interprétation SHAP du modèle XGBoost',
    },
  ],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/Machine-Learning/I_Apprentissage_supervise/A_Regression/02_Prediction_bruit_aerodynamique',
};
