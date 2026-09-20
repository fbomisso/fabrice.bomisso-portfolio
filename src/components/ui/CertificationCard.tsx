import type { Certification } from "@/types";

interface CertificationCardProps {
  certification: Certification;
}

const issuerLogos: Record<string, string> = {
  GOMYCODE: "/img/logos/Gomycode.webp",
  Fatala: "/img/logos/fatala.fr.png",
  "Université Jean Lorougnon Guédé":
    "/img/logos/Universite-Jean-Lorougnon-Guede250-1.png",
};

function getInitials(issuer: string): string {
  return issuer
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  const logo = issuerLogos[certification.issuer];

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">

      <div className="flex items-center gap-4 border-b border-slate-100 p-6 dark:border-slate-800">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
          {logo ? (
            <img
              src={logo}
              alt={certification.issuer}
              className="h-9 w-9 object-contain"
            />
          ) : (
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
              {getInitials(certification.issuer)}
            </span>
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
            {certification.issuer}
          </p>
          {certification.year && (
            <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
              {certification.year}
            </p>
          )}
        </div>
      </div>

      {certification.image ? (
        <a
          href={certification.image}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800"
        >
          <img
            src={certification.image}
            alt={`Certificat ${certification.name}`}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-slate-900/0 text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:bg-slate-900/60 group-hover:opacity-100">
            Voir le certificat
          </span>
        </a>
      ) : (
        <div className="flex aspect-[4/3] w-full items-center justify-center border-b border-slate-100 bg-slate-50 px-6 text-center text-sm text-slate-400 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-500">
          Formation en cours
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between p-6">
        <h3 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white">
          {certification.name}
        </h3>

        {certification.image && (
          <div className="mt-6">
            <a
              href={certification.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Ouvrir le certificat
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

