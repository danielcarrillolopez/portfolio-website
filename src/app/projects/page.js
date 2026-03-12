import { projects } from '@/data/projects';
import ProjectShowcase from '@/components/ProjectShowcase';
import FadeIn from '@/components/FadeIn';

export default function Projects() {
  const visibleProjects = projects.filter(p => p.visible !== false);

  return (
    <main className="min-h-screen bg-background dark:bg-background-dark py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground dark:text-foreground-dark">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A collection of my biomedical and robotics engineering projects, 
              from concept to prototype.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.2}>
            <ProjectShowcase initialProjects={visibleProjects} />
          </FadeIn>
        </div>
      </div>
    </main>
  );
}