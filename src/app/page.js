import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { projects } from '@/data/projects';

export default function Home() {
  const featuredProjects = projects.filter(p => 
    p.featured === true || siteConfig.featuredProjects.includes(p.slug)
  );

  return (
    <main className="min-h-screen bg-background dark:bg-background-dark">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground dark:text-foreground-dark mb-4">
            {siteConfig.author.name}
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
            {siteConfig.author.bioHeadline}
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-400 mb-8">
            Building Tomorrow&apos;s Assistive Technology
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a 
              href={siteConfig.socials.github} 
              target="_blank"
              className="px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-primary-light dark:hover:bg-primary-dark-light transition"
            >
              GitHub
            </a>
            <a 
              href={siteConfig.socials.linkedin} 
              target="_blank"
              className="px-6 py-3 bg-secondary dark:bg-secondary-dark text-white rounded-lg hover:bg-secondary-light dark:hover:bg-secondary-dark-light transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map(project => (
            <Link 
              key={project.id} 
              href={`/projects/${project.slug}`}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-bold">Featured Project Details →</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary dark:group-hover:text-primary-dark transition text-foreground dark:text-foreground-dark line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags?.slice(0, 3).map((tag, index) => {
                    const getTagColor = (t) => {
                      const tl = t.toLowerCase();
                      if (tl.includes('python')) return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
                      if (tl.includes('arduino')) return 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-800';
                      if (tl.includes('cad') || tl.includes('solidworks')) return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
                      if (tl.includes('robot')) return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800';
                      if (tl.includes('bio')) return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
                      if (tl.includes('3d print')) return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800';
                      return 'bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-gray-400 border-gray-200 dark:border-zinc-700';
                    };
                    return (
                      <span 
                        key={index}
                        className={`px-2 py-1 border rounded text-[10px] font-bold uppercase tracking-wider ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
