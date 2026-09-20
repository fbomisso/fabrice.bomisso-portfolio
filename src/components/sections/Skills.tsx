import { skills } from "@/data/skills";
import SkillCategory from "@/components/ui/SkillCategory";

const categoryIcons: Record<string, string> = {
  "Python & Data Analysis": "python",
  "SQL & Bases de données": "database",
  "Power BI": "table",
  "Data Visualization": "chart",
  "Data Science & IA": "robot",
  "Excel & Data Quality": "gear",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-surface py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Compétences
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
            Technologies que j'utilise
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Des outils modernes pour analyser, transformer et valoriser les données.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCategory
              key={skill.title}
              title={skill.title}
              skills={skill.items}
              icon={categoryIcons[skill.title]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
