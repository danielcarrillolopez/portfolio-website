import { posts } from '@/data/posts';
import BlogShowcase from '@/components/BlogShowcase';

export default function Blog() {
  const visiblePosts = posts.filter(p => p.visible !== false);

  return (
    <main className="min-h-screen bg-background dark:bg-background-dark py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-foreground dark:text-foreground-dark">Engineering Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Build logs, technical tutorials, and reflections on my engineering journey.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <BlogShowcase initialPosts={visiblePosts} />
        </div>
      </div>
    </main>
  );
}
