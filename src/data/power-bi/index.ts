import type { DomainProject } from '@/types';
import { pilotageRisqueCreditBancaire } from './pilotage-risque-credit-bancaire';
import { analyseCoupeDuMondeFifa2026 } from './analyse-coupe-du-monde-fifa-2026';
import { pilotageReseauDistributionMultimagasin } from './pilotage-reseau-distribution-multimagasin';
import { analyseRetailStarSchema } from './analyse-retail-star-schema';
import { assuranceAutomobileDashboard } from './assurance-automobile-dashboard';

// Les 5 projets Power BI, dans l'ordre d'affichage sur /projets/power-bi.
export const powerBiProjects: DomainProject[] = [
  pilotageRisqueCreditBancaire,
  analyseCoupeDuMondeFifa2026,
  pilotageReseauDistributionMultimagasin,
  analyseRetailStarSchema,
  assuranceAutomobileDashboard,
];