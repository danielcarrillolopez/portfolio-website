import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import RelatedContent from '@/components/RelatedContent';
import { getRelatedPosts } from '@/utils/relatedContent';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post || post.visible === false) {
    notFound();
  }

  // Read content from individual file
  let content = post.content || ''; // Fallback to inline if exists
  try {
    const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.md`);
    if (fs.existsSync(filePath)) {
      content = fs.readFileSync(filePath, 'utf8');
    }
  } catch (error) {
    console.error(`Error reading blog content for ${slug}:`, error);
  }

  const relatedPosts = getRelatedPosts(post, posts);

  return (
    <main className="min-h-screen bg-background dark:bg-background-dark py-12 transition-colors duration-300">
      <ReadingProgressBar />
      <article className="container mx-auto px-4 max-w-3xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-primary dark:text-primary-dark hover:text-primary-light mb-8 transition"
        >
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex gap-4 items-center mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary dark:text-primary-dark text-xs font-bold rounded-full uppercase">
              {post.category}
            </span>
            <span className="text-sm text-gray-400 font-medium">{post.date}</span>
            <span className="text-sm text-gray-400 font-medium">• {post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground dark:text-foreground-dark leading-tight mb-8">
            {post.title}
          </h1>
          
          {post.image && (
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-zinc-800">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground dark:text-foreground-dark">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-zinc-800">
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-4 text-foreground dark:text-foreground-dark">Discussion & Feedback</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Have thoughts on this article or technical questions about the implementation? 
              I&apos;d love to hear from you.
            </p>
            <Link 
              href={`/contact?subject=Blog: ${post.title}`}
              className="inline-block px-8 py-3 bg-primary dark:bg-primary-dark text-white font-bold rounded-lg hover:bg-primary-light transition-all shadow-md"
            >
              Start a Discussion
            </Link>
          </div>
        </div>

        <RelatedContent 
          items={relatedPosts} 
          type="blog" 
          title="Continue Reading" 
        />
      </article>
    </main>
  );
}
