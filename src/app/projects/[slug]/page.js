import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export default async function ProjectDetail({ params }) {
  // Await params in Next.js 15+
  const { slug } = await params;
  
  // Find the project by slug
  const project = projects.find(p => p.slug === slug);
  
  // If project doesn't exist, show 404
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background dark:bg-background-dark py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-primary dark:text-primary-dark hover:text-primary-light dark:hover:text-primary-dark-light mb-8 transition"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-4 text-foreground dark:text-foreground-dark">{project.title}</h1>
        
        <div className="flex gap-4 mb-8 text-gray-600 dark:text-gray-300">
          <span>📅 {project.date || 'N/A'}</span>
          <span>⏱️ {project.duration || 'N/A'}</span>
          <span>💰 {project.cost || 'N/A'}</span>
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {(project.tags || []).map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.image && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none dark:prose-invert text-foreground dark:text-foreground-dark">
          {project.problem && (
            <>
              <h2 className="text-foreground dark:text-foreground-dark">The Problem</h2>
              <p>{project.problem}</p>
            </>
          )}

          {project.approach && (
            <>
              <h2>The Approach</h2>
              <p>{project.approach}</p>
            </>
          )}

          {project.technicalDetails && project.technicalDetails.length > 0 && (
            <>
              <h2>Technical Details</h2>
              <ul>
                {project.technicalDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </>
          )}

          {project.results && (
            <>
              <h2>Results</h2>
              <p>{project.results}</p>
            </>
          )}

          {project.lessons && project.lessons.length > 0 && (
            <>
              <h2>Lessons Learned</h2>
              <ul>
                {project.lessons.map((lesson, index) => (
                  <li key={index}>{lesson}</li>
                ))}
              </ul>
            </>
          )}

          {project.futureWork && (
            <>
              <h2>Future Improvements</h2>
              <p>{project.futureWork}</p>
            </>
          )}
        </div>

        {project.github && (
          <div className="mt-12 p-6 bg-gray-50 dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-foreground dark:text-foreground-dark">Project Files</h3>
            <a 
              href={project.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-primary-light dark:hover:bg-primary-dark-light transition inline-block"
            >
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </main>
  );
}