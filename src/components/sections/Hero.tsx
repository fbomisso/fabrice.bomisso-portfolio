import AvatarMorph from "@/components/ui/AvatarMorph";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-surface-alt py-24"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">

        {/* Photo de profil animée : Eau et Environnement vers Data */}
        <AvatarMorph src={profile.photo} alt={`Photo de ${profile.name}`} />

        {/* Nom */}
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl">
          {profile.name}
        </h1>

        {/* Titre */}
        <h2 className="mb-6 text-xl font-semibold text-blue-600 dark:text-blue-400 md:text-2xl">
          {profile.title}
        </h2>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
          {profile.description}
        </p>

        {/* Boutons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Voir mes projets
          </a>

          <a
            href={profile.cv}
            className="rounded-lg border border-blue-600 px-8 py-4 font-semibold text-blue-600 dark:text-blue-400 transition hover:bg-blue-50 dark:hover:bg-blue-950/40"
          >
            Télécharger mon CV
          </a>
        </div>

        {/* Technologies principales */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {profile.mainTechs.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-200 dark:border-slate-700 bg-surface px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm"
            >
              {technology}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

