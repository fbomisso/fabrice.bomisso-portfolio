import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { domainProjects } from "@/data/domain-projects";
import DomainProjectCard from "@/components/ui/DomainProjectCard";

type PageProps = {
  params: Promise<{ domaine: string }>;
};

export function generateStaticParams() {
  return projects.filter((p) => p.slug).map((p) => ({ domaine: p.slug as string }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { domaine } = await params;
  const domain = projects.find((p) => p.slug === domaine);
  return { title: domain ? `Projets ${domain.title}` : "Projets" };
}

export default async function DomainPage({ params }: PageProps) {
  const { domaine } = await params;
  const domain = projects.find((p) => p.slug === domaine);

  if (!domain) notFound();

  const list = domainProjects.filter((p) => p.domain === domaine);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/"
        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
      >
        Retour au portfolio
      </Link>

      <header className="mt-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Projets {domain.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {domain.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {domain.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {list.length > 0 ? (
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map((project) => (
            <DomainProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-12 rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 p-8 text-slate-600 dark:text-slate-300">
          Les projets de ce domaine sont en cours d’ajout. Le code et les README
          complets sont déjà disponibles sur GitHub.
        </p>
      )}

      <div className="mt-12">
        <a
          href={domain.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-xl border border-slate-300 dark:border-slate-600 px-5 py-2.5 font-medium text-slate-700 dark:text-slate-200 transition hover:bg-slate-50 dark:hover:bg-slate-700"
        >
          Voir sur GitHub
        </a>
      </div>
    </main>
  );
}
