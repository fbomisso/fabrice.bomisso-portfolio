import type { Experience } from "@/types";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <article className="relative border-l-2 border-blue-100 pl-8 dark:border-blue-900">

      {/* Point de la timeline */}
      <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-blue-600 dark:border-slate-900 dark:bg-blue-400" />

      {/* En-tête */}
      <div className="mb-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {experience.position}
          </h3>

          <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
            {experience.period}
          </span>
        </div>

        <p className="mt-2 text-lg font-semibold text-blue-600 dark:text-blue-400">
          {experience.company}
        </p>
      </div>

      {/* Missions */}
      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Missions
        </h4>

        <ul className="space-y-3">
          {experience.tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-start leading-7 text-slate-700 dark:text-slate-300"
            >
              <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      {experience.technologies &&
        experience.technologies.length > 0 && (
          <div className="mt-6">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}

    </article>
  );
}
