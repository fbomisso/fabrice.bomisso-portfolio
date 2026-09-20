import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-surface-alt py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Études de cas
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
            Analyses approfondies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Travaux réalisés à partir de données réelles pour analyser une
            problématique et produire des résultats utiles à la compréhension
            et à la prise de décision.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl space-y-10">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="rounded-2xl border border-slate-200 bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700"
            >
              <div className="border-b border-slate-200 pb-6 dark:border-slate-700">
                <h3 className="text-2xl font-bold leading-tight text-slate-900 dark:text-white">
                  {study.title}
                </h3>
              </div>

              <div className="mt-8">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Contexte
                </h4>
                <p className="leading-7 text-slate-700 dark:text-slate-300">
                  {study.context}
                </p>
              </div>

              <div className="mt-8">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Problématique
                </h4>
                <p className="leading-7 text-slate-700 dark:text-slate-300">
                  {study.problem}
                </p>
              </div>

              <div className="mt-8">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Données
                </h4>
                <p className="leading-7 text-slate-700 dark:text-slate-300">
                  {study.data}
                </p>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Résultats
                </h4>
                <ul className="space-y-2">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-start leading-7 text-slate-700 dark:text-slate-300">
                      <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Recommandations
                </h4>
                <ul className="space-y-2">
                  {study.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start leading-7 text-slate-700 dark:text-slate-300">
                      <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Publication :{" "}
                  {study.url ? (
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {study.publication}
                    </a>
                  ) : (
                    study.publication
                  )}
                </p>

                {study.slug && (
                  <Link
                    href={`/research/${study.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
                  >
                    Voir l'étude complète
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
