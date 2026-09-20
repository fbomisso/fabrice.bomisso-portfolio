import { formation } from "@/data/formation";
import FormationCard from "@/components/ui/FormationCard";

export default function Formation() {
  return (
    <section
      id="formation"
      className="bg-surface-alt py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Formation
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
            Mon parcours académique
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Mon parcours universitaire en Génie de l'Eau et de l'Environnement.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-8">
          {formation.map((item) => (
            <FormationCard key={item.id} formation={item} />
          ))}
        </div>
      </div>
    </section>
  );
}