import type { DomainProject } from '@/types';

export const breastCancerClassification: DomainProject = {
  slug: 'breast-cancer-classification',
  domain: 'machine-learning',
  title: 'Classification des tumeurs du sein',
  objective:
    'Construire un modèle de classification capable de distinguer les tumeurs malignes et bénignes à partir de caractéristiques mesurées sur les cellules.',
  context:
    'Projet de classification supervisée réalisé à partir du dataset Breast Cancer Wisconsin, avec comparaison de plusieurs algorithmes et optimisation du modèle final.',
  data:
    'Dataset Breast Cancer Wisconsin de scikit-learn : 569 observations, 30 variables explicatives et une variable cible binaire.',
  technologies: [
    'Python',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Scikit-learn',
    'Logistic Regression',
    'GridSearchCV',
    'StandardScaler',
    'Joblib',
    'Streamlit',
    'Jupyter',
    'VS Code',
  ],
  kpis: [
    { value: '569', label: 'observations' },
    { value: '30', label: 'variables explicatives' },
    { value: '98,25 %', label: 'accuracy' },
    { value: '98,61 %', label: 'recall' },
    { value: '99,54 %', label: 'ROC-AUC' },
  ],
  results: [
    'La régression logistique optimisée avec C=1 a été retenue comme modèle final.',
    'Le modèle atteint une accuracy de 98,25 % et un ROC-AUC de 99,54 % sur le jeu de test.',
    '112 observations sur 114 sont correctement classées.',
    'Le modèle final combine une standardisation des variables avec une régression logistique optimisée par validation croisée stratifiée.',
    'Les performances obtenues concernent ce dataset et ce protocole d’évaluation et ne constituent pas une validation clinique.',
  ],
  approach: [
    'Exploration du dataset et analyse des variables',
    'Séparation des données en apprentissage et test',
    'Standardisation avec StandardScaler',
    'Établissement d’un modèle baseline',
    'Comparaison de plusieurs algorithmes de classification',
    'Optimisation des hyperparamètres avec GridSearchCV',
    'Évaluation avec accuracy, precision, recall, F1-score et ROC-AUC',
    'Analyse de la matrice de confusion',
    'Sauvegarde du modèle final',
    'Développement d’une application Streamlit de démonstration',
  ],
  screenshots: [],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/Machine-Learning/I_Apprentissage_supervise/B_Classification/02_breast_cancer',
};
