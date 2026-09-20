import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Diagnosis of Open Defecation in Yamoussoukro District',
    context:
      'Étude réalisée dans le district de Yamoussoukro afin d\u2019analyser les facteurs associés à la défécation à l\u2019air libre et de mieux comprendre les difficultés d\u2019accès aux installations sanitaires.',
    problem:
      'Identifier les principaux facteurs socio-économiques, culturels et institutionnels associés à la défécation à l\u2019air libre dans les localités étudiées.',
    data:
      'Données collectées auprès de 373 ménages dans le district de Yamoussoukro, puis organisées, préparées et analysées.',
    methodology: [
      'Étude quantitative auprès de 373 ménages',
      'Collecte et organisation des données sur le terrain',
      'Préparation et analyse des données sous Excel',
      'Analyse des facteurs socio-économiques, culturels et institutionnels',
      'Interprétation et synthèse des résultats',
    ],
    results: [
      '62,34 % des ménages de Kpangbassou ne disposaient pas de latrines',
      '82,22 % des ménages d\u2019Aboukro ne disposaient pas de latrines',
      '82,14 % des ménages de Duokro ne disposaient pas de latrines',
      'Mise en évidence de facteurs socio-économiques, culturels et institutionnels associés à la défécation à l\u2019air libre',
    ],
    recommendations: [
      'Renforcement des actions de sensibilisation auprès des communautés',
      'Promotion d\u2019approches d\u2019assainissement adaptées, notamment le CLTS et l\u2019EcoSan',
      'Mise en place d\u2019un suivi régulier des actions d\u2019assainissement',
    ],
    publication:
      'World Journal of Advanced Research and Reviews, 2024',
    url: 'https://wjarr.com/content/diagnosis-open-defecation-yamoussoukro-district-central-cote-divoire',
    slug: 'diagnosis-defecation-yamoussoukro',
  },
];
