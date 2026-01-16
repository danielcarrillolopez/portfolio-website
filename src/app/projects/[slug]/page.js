import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export default function ProjectDetail({ params }) {
  // Find the project by slug
  const project = projects.find(p => p.slug === params.slug);
  
  // If project doesn't exist, show 404
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-primary hover:text-primary-light mb-8"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex gap-4 mb-8 text-gray-600">
          <span>📅 {project.date}</span>
          <span>⏱️ {project.duration}</span>
          <span>💰 {project.cost}</span>
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>The Problem</h2>
          <p>{project.problem}</p>

          <h2>The Approach</h2>
          <p>{project.approach}</p>

          <h2>Technical Details</h2>
          <ul>
            {project.technicalDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>

          <h2>Results</h2>
          <p>{project.results}</p>

          <h2>Lessons Learned</h2>
          <ul>
            {project.lessons.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}
          </ul>

          <h2>Future Improvements</h2>
          <p>{project.futureWork}</p>
        </div>

        {project.github && (
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Project Files</h3>
            <a 
              href={project.github} 
              target="_blank"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition inline-block"
            >
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </main>
  );
}