export default function About() {
  return (
    <section
      id="about"
      className="bg-surface py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* En-tête */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            À propos
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900 dark:text-white">
            Qui suis-je ?
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Parcours */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-surface p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              Mon parcours
            </h3>

            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              Formé initialement en Génie de l&apos;Eau et de l&apos;Environnement, j&apos;ai progressivement orienté mon parcours vers le domaine de la Data après avoir découvert l&apos;importance cruciale de la donnée pour comprendre une problématique, approfondir une analyse et éclairer la prise de décision.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Cette prise de conscience s&apos;est cristallisée lors de mes travaux de fin d&apos;études, où j&apos;ai réalisé que les données étaient au cœur de toute problématique complexe. Depuis, je poursuis cette transition avec passion, en développant mes compétences à travers des formations spécialisées, des projets pratiques et des expériences professionnelles dans le domaine de l&apos;analyse de données.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Mon objectif est de transformer les données brutes en informations fiables et exploitables, au service de la prise de décision stratégique et de la création de valeur.
            </p>
          </div>

          {/* Domaines de compétence */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-surface p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              Mes domaines de compétence
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Data Analysis",
                "Business Intelligence",
                "Data Visualization",
                "SQL & Bases de données",
                "Python & Data Science",
                "Machine Learning",
              ].map((domain) => (
                <div
                  key={domain}
                  className="rounded-lg border border-slate-200 dark:border-slate-700 bg-surface-alt p-5 transition hover:border-blue-200 dark:hover:border-blue-800"
                >
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {domain}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
