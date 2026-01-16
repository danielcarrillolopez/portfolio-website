import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          A collection of my biomedical and robotics engineering projects, 
          from concept to prototype.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Link 
              href={`/projects/${project.slug}`} 
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}