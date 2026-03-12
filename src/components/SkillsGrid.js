import { siteConfig } from '@/config/siteConfig';
import Link from 'next/link';

export default function SkillsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {siteConfig.skills.map((skillGroup, idx) => (
        <div 
          key={idx} 
          className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-bold text-foreground dark:text-foreground-dark mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary dark:bg-primary-dark rounded-full"></span>
            {skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill, i) => (
              <Link
                key={i}
                href={`/projects?tech=${encodeURIComponent(skill)}`}
                className="px-3 py-1.5 bg-gray-50 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-zinc-700 rounded-lg hover:border-primary dark:hover:border-primary-dark hover:text-primary dark:hover:text-primary-dark transition-all"
                title={`View projects using ${skill}`}
              >
                {skill}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
