import type { DomainProject } from '@/types';

export const customerChurn: DomainProject = {
  slug: 'customer-churn',
  domain: 'machine-learning',
  title: 'Prédiction du churn client',
  objective:
    'Identifier les clients présentant un risque élevé de résiliation afin de faciliter la détection précoce et la priorisation des actions de rétention.',
  context:
    'Projet de classification supervisée consacré à l’analyse du churn et à la construction d’un modèle de scoring permettant de segmenter les clients selon leur niveau de risque.',
  data:
    'Telco Customer Churn : 7 043 clients avec des informations sur les services, le contrat, la facturation et les caractéristiques du client.',
  technologies: [
    'Python',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Scikit-learn',
    'Random Forest',
    'SHAP',
    'ColumnTransformer',
    'StandardScaler',
    'OneHotEncoder',
    'Joblib',
    'Streamlit',
    'Jupyter',
    'VS Code',
  ],
  kpis: [
    { value: '7 043', label: 'clients analysés' },
    { value: '79,0 %', label: 'accuracy' },
    { value: '77,81 %', label: 'recall' },
    { value: '0,85', label: 'ROC-AUC' },
    { value: '1 409', label: 'clients du test' },
  ],
  results: [
    'Le Random Forest a été retenu comme modèle final avec un recall de 77,81 % et un ROC-AUC de 0,85.',
    'Le modèle permet de détecter une part importante des clients ayant effectivement résilié leur contrat.',
    'Les contrats courts, l’ancienneté et certaines caractéristiques des services figurent parmi les variables les plus importantes dans l’interprétation du modèle.',
    'L’analyse SHAP permet d’identifier les principaux facteurs contribuant aux prédictions individuelles.',
    'Les clients du jeu de test sont segmentés en niveaux de risque élevé, moyen et faible afin de faciliter la priorisation des actions.',
  ],
  approach: [
    'Nettoyage et préparation des données',
    'Analyse exploratoire du churn',
    'Feature engineering',
    'Préparation des variables numériques et catégorielles',
    'Comparaison de modèles de classification',
    'Optimisation et sélection du Random Forest',
    'Évaluation avec accuracy, recall, F1-score et ROC-AUC',
    'Interprétation du modèle avec SHAP',
    'Segmentation des clients selon leur score de risque',
    'Développement d’une application Streamlit',
  ],
  screenshots: [],
  github:
    'https://github.com/fbomisso/fabrice.bomisso-projects/tree/main/Machine-Learning/I_Apprentissage_supervise/B_Classification/01_Customer_Churn',
};
