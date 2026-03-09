import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { projects } from '@/data/projects';
import HeroBackground from '@/components/HeroBackground';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured === true);

  return (
    <main className="min-h-screen bg-background dark:bg-background-dark">

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24 md:py-32">

        {/* Inline SVG background — currentColor inherits text color for theme support */}
        <div className="text-slate-800 dark:text-stone-200">
          <HeroBackground />
        </div>

        {/* Hero content on top */}
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-primary/10 dark:bg-primary-dark/10 rounded-full border border-primary/20 dark:border-primary-dark/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-sm font-bold uppercase tracking-widest text-primary dark:text-primary-dark">
              Biomedical & Robotics Engineer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground dark:text-foreground-dark mb-8 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Building Tomorrow's <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark">
              Assistive Technology
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            I combine CAD design, mechatronics, and human-centered principles to create functional prototypes that bridge the gap between concept and reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Link
              href="/projects"
              className="px-8 py-4 bg-primary dark:bg-primary-dark text-white rounded-xl font-bold hover:opacity-90 transition shadow-lg shadow-primary/25"
            >
              View Featured Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white dark:bg-zinc-800 text-foreground dark:text-foreground-dark border border-gray-200 dark:border-zinc-700 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-zinc-700 transition"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark mb-2">Featured Projects</h2>
            <p className="text-gray-500 dark:text-gray-400">Selected works in robotics, haptics, and inclusive design.</p>
          </div>
          <Link href="/projects" className="hidden md:block text-primary dark:text-primary-dark font-bold hover:underline">
            View All Projects →
          </Link>
        </div>

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
                  <span className="text-white text-xs font-bold">View Project Details →</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary dark:group-hover:text-primary-dark transition text-foreground dark:text-foreground-dark line-clamp-2 min-h-[3.5rem]">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3 min-h-[3.75rem]">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags?.slice(0, 3).map((tag, index) => {
                    const getTagColor = (t) => {
                      const tl = t.toLowerCase();
                      if (tl.includes('python'))   return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
                      if (tl.includes('arduino'))  return 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-800';
                      if (tl.includes('cad') || tl.includes('solidworks')) return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
                      if (tl.includes('robot'))    return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800';
                      if (tl.includes('bio'))      return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
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

        <div className="mt-8 text-center md:hidden">
          <Link href="/projects" className="text-primary dark:text-primary-dark font-bold hover:underline">
            View All Projects →
          </Link>
        </div>
      </section>
    </main>
  );
}