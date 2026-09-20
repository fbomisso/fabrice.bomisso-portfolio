import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-surface py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Projets
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
            Mes réalisations
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Sélection de mes projets en Data Analysis, Business Intelligence et Machine Learning.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
