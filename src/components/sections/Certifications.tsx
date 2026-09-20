import { certifications } from "@/data/certifications";
import CertificationCard from "@/components/ui/CertificationCard";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Certifications
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Mes certifications
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Des formations et certifications qui complètent mon parcours
            académique et renforcent mes compétences professionnelles.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
