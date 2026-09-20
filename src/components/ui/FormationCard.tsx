import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import type { Formation } from "@/types";

type FormationCardProps = {
  formation: Formation;
};

export default function FormationCard({
  formation,
}: FormationCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      
      <div className="flex items-start justify-between gap-4 mb-6">
        <FaGraduationCap className="text-3xl text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
        
        <div className="relative h-16 w-16 flex-shrink-0 rounded-lg border border-slate-200 bg-white p-2">
          <Image
            src="/img/logos/Universite-Jean-Lorougnon-Guede250-1.png"
            alt="Logo Université Jean Lorougnon Guédé"
            fill
            className="object-contain p-1"
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
        {formation.degree}
      </h3>

      <a href="https://ujlog.edu.ci/" target="_blank" rel="noopener noreferrer" className="inline-block text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline hover:no-underline transition-colors mb-1">
        {formation.school}
      </a>

      {formation.location && (
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-4">
          {formation.location}
        </p>
      )}

      <span className="inline-block rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
        {formation.period}
      </span>

      {formation.description && formation.description.length > 0 && (
        <ul className="space-y-2">
          {formation.description.map((item, index) => (
            <li key={index} className="flex items-start text-slate-700 dark:text-slate-300">
              <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}