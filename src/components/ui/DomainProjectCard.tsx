import Link from "next/link";
import type { DomainProject } from "@/types";

interface DomainProjectCardProps {
  project: DomainProject;
}

export default function DomainProjectCard({ project }: DomainProjectCardProps) {
  const cover = project.screenshots[0];
  const kpis = project.kpis.slice(0, 3);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition duration-300 hover:shadow-lg">
      {cover && (
        <Link
          href={`/projets/${project.domain}/${project.slug}`}
          className="block h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-700"
          aria-label={`Voir le projet ${project.title}`}
        >
          <img
            src={cover.src}
            alt={cover.alt}
            className="h-full w-full object-cover object-top"
          />
        </Link>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h2>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          {project.objective}
        </p>

        {kpis.length > 0 && (
          <dl className="mt-5 grid grid-cols-3 gap-3">
            {kpis.map((kpi, index) => (
              <div key={index}>
                <dt className="text-sm text-slate-500 dark:text-slate-400">
                  {kpi.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                  {kpi.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-auto pt-6">
          <Link
            href={`/projets/${project.domain}/${project.slug}`}
            className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            Voir le projet
          </Link>
        </div>
      </div>
    </article>
  );
}