import { FaPython, FaDatabase, FaChartBar, FaRobot } from "react-icons/fa";
import { TbTable } from "react-icons/tb";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon?: string;
  color?: string;
}

const icons: Record<string, React.ComponentType<any>> = {
  python: FaPython,
  database: FaDatabase,
  chart: FaChartBar,
  table: TbTable,
  gear: HiOutlineCog6Tooth,
  robot: FaRobot,
};

export default function SkillCategory({ title, skills, icon, color }: SkillCategoryProps) {
  const Icon = icon ? icons[icon as keyof typeof icons] : null;

  return (
    <div className="min-h-[320px] rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {Icon && (
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
            <Icon className="text-4xl" style={{ color: color || '#3b82f6' }} />
          </div>
        </div>
      )}

      <h3 className="text-center text-2xl font-bold text-slate-900 dark:text-white mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}