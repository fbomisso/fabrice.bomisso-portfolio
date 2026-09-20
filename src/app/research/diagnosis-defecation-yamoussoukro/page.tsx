import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";

const research = caseStudies[0];

export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 lg:px-8">

      {/* Retour au portfolio */}
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 transition hover:text-blue-800"
      >
        ← Retour au portfolio
      </Link>

      {/* En-tête */}
      <section className="mt-14">
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Recherche
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
          {research.title}
        </h1>

        <p className="mt-6 max-w-4xl text-xl leading-8 text-slate-600">
          {research.context}
        </p>
      </section>

      {/* Informations générales */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">
            Localisation
          </h2>

          <p className="mt-3 text-slate-600">
            District de Yamoussoukro
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">
            Données
          </h2>

          <p className="mt-3 text-slate-600">
            373 ménages
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">
            Analyse
          </h2>

          <p className="mt-3 text-slate-600">
            Analyse des données sous Excel
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">
            Publication
          </h2>

          <p className="mt-3 text-slate-600">
            {research.publication}
          </p>
        </div>

      </section>

      {/* Contexte */}
      <section className="mt-20">
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Contexte
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Une recherche sur l’assainissement
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
          {research.context}
        </p>
      </section>

      {/* Problématique */}
      <section className="mt-20">
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Problématique
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Question de recherche
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
          {research.problem}
        </p>
      </section>

      {/* Données */}
      <section className="mt-20">
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Données
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Données collectées
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
          {research.data}
        </p>
      </section>

      {/* Méthodologie */}
      <section className="mt-20">
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Méthodologie
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          De la collecte à l’analyse
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {research.methodology.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-3xl font-bold text-blue-600">
                {String(index + 1).padStart(2, "0")}
              </div>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                {step}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Résultats */}
      <section className="mt-20">
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Résultats
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Résultats clés
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-4xl font-bold text-blue-600">
              62,34 %
            </p>

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              Kpangbassou
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Ménages ne disposant pas de latrines.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-4xl font-bold text-blue-600">
              82,22 %
            </p>

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              Abakro
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Ménages ne disposant pas de latrines.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-4xl font-bold text-blue-600">
              82,14 %
            </p>

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              Duokro
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Ménages ne disposant pas de latrines.
            </p>
          </div>

        </div>

        {/* Facteurs identifiés */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900">
            Facteurs identifiés
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Facteurs socio-économiques",
              "Facteurs culturels",
              "Facteurs institutionnels",
            ].map((factor) => (
              <div
                key={factor}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="font-semibold text-slate-900">
                  {factor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommandations */}
      <section className="mt-24">
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Perspectives
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Recommandations
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {research.recommendations.map((recommendation, index) => (
            <div
              key={recommendation}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                {String(index + 1).padStart(2, "0")}
              </div>

              <p className="mt-5 leading-7 text-slate-700">
                {recommendation}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Publication */}
      <section className="mt-24">
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Publication
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Valorisation de la recherche
        </h2>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-8">
          <p className="text-lg font-semibold text-slate-900">
            {research.publication}
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mt-24 pb-20">
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Conclusion
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Des données au service de la compréhension de l’assainissement
        </h2>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
          Cette recherche a permis d’analyser la situation de l’assainissement
          dans les localités étudiées et de mettre en évidence plusieurs
          facteurs associés à la défécation à l’air libre.
        </p>
      </section>

    </main>
  );
}
