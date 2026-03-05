import { siteConfig } from '@/config/siteConfig';
import ResourceShowcase from '@/components/ResourceShowcase';

export default function Resources() {
  return (
    <main className="min-h-screen bg-background dark:bg-background-dark py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-foreground dark:text-foreground-dark">Inspirations & Resources</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A curated list of books, tools, and platforms that have shaped my engineering journey.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <ResourceShowcase initialResources={siteConfig.resources} />
        </div>
      </div>
    </main>
  );
}
