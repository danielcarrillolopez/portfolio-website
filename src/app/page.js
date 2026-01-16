import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { projects } from '@/data/projects';

export default function Home() {
  const featuredProjects = projects.filter(p => siteConfig.featuredProjects.includes(p.slug));

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
            Building Tomorrow's Assistive Technology
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
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map(project => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <div className="bg-white dark:bg-background-dark rounded-lg shadow-lg overflow-hidden hover:shadow-xl dark:hover:shadow-blue-500/50 transition">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground dark:text-foreground-dark">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}