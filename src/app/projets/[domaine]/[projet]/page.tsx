import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { domainProjects } from "@/data/domain-projects";

type PageProps = {
  params: Promise<{ domaine: string; projet: string }>;
};

export function generateStaticParams() {
  return domainProjects.map((p) => ({ domaine: p.domain, projet: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { domaine, projet } = await params;
  const project = domainProjects.find(
    (p) => p.domain === domaine && p.slug === projet
  );
  return { title: project ? project.title : "Projet" };
}

const sectionTitle =
  "text-2xl font-bold text-slate-900 dark:text-white";
const bodyText = "mt-4 leading-8 text-slate-600 dark:text-slate-300";

export default async function ProjectPage({ params }: PageProps) {
  const { domaine, projet } = await params;
  const domain = projects.find((p) => p.slug === domaine);
  const project = domainProjects.find(
    (p) => p.domain === domaine && p.slug === projet
  );

  if (!domain || !project) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href={`/projets/${domain.slug}`}
        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
      >
        Retour aux projets {domain.title}
      </Link>

      <header className="mt-6">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {project.objective}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {(project.context || project.data) && (
        <section className="mt-14">
          <h2 className={sectionTitle}>Contexte et données</h2>
          {project.context && <p className={bodyText}>{project.context}</p>}
          {project.data && <p className={bodyText}>{project.data}</p>}
        </section>
      )}

      {(project.kpis.length > 0 || project.results.length > 0) && (
        <section className="mt-14">
          <h2 className={sectionTitle}>Résultats</h2>

          {project.kpis.length > 0 && (
            <dl className="mt-6 grid grid-cols-2 gap-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 sm:grid-cols-3">
              {project.kpis.map((kpi, index) => (
                <div key={index}>
                  <dd className="text-3xl font-bold text-slate-900 dark:text-white">
                    {kpi.value}
                  </dd>
                  <dt className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {kpi.label}
                  </dt>
                </div>
              ))}
            </dl>
          )}

          {project.results.length > 0 && (
            <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-slate-600 dark:text-slate-300">
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      {project.screenshots.length > 0 && (
        <section className="mt-14">
          <h2 className={sectionTitle}>Captures</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Cliquer sur une capture pour l’ouvrir en taille réelle.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {project.screenshots.map((shot, index) => (
              <a
                key={index}
                href={shot.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-700"
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="h-auto w-full"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </section>
      )}

      {project.approach.length > 0 && (
        <section className="mt-14">
          <h2 className={sectionTitle}>Approche</h2>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-8 text-slate-600 dark:text-slate-300">
            {project.approach.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      )}

      <section className="mt-16 border-t border-slate-200 dark:border-slate-700 pt-8">
        <p className="text-slate-600 dark:text-slate-300">
          Le README complet et les fichiers du projet sont sur GitHub.
        </p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            Voir sur GitHub
          </a>

          <Link
            href={`/projets/${domain.slug}`}
            className="inline-flex items-center rounded-xl border border-blue-600 px-5 py-2.5 font-medium text-blue-600 dark:text-blue-400 transition hover:bg-blue-50 dark:hover:bg-blue-950/40"
          >
            Retour aux projets {domain.title}
          </Link>
        </div>
      </section>
    </main>
  );
}



