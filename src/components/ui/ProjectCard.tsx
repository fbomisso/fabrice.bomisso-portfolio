import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const domainIcons: Record<string, string> = {
  "Machine Learning": "/icons/machine-learning.jpg",
  "Power BI": "/icons/powerbi.svg",
  Python: "/icons/python.svg",
  SQL: "/icons/sql-server.png",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const icon = domainIcons[project.title];

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-64 w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
        <div className="flex h-full flex-col items-center justify-center text-center">
          {icon ? (
            <img
              src={icon}
              alt={project.title}
              className="h-20 w-20 object-contain"
            />
          ) : (
            <span className="text-5xl">📊</span>
          )}
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300">{project.category}</span>
          <span className="text-sm font-medium text-slate-400 dark:text-slate-500">{project.date}</span>
        </div>

        <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>

        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">{tech}</span>
          ))}
        </div>

        <div className="mt-8">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700">
            Voir sur GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
