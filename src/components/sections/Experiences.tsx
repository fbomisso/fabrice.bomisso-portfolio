import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/ui/ExperienceCard";

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="bg-surface py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* En-tête */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Expériences
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
            Mon parcours professionnel
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Les expériences qui ont développé mes compétences en analyse de données
            et dans la réalisation de projets.
          </p>
        </div>

        {/* Expériences */}
        <div className="mx-auto mt-16 max-w-4xl space-y-10">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
