import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { mentors } from '@/data/mentors';

export default function Mentors() {
  const visibleMentors = mentors.filter(m => m.visible !== false);

  return (
    <main className="min-h-screen bg-background dark:bg-background-dark py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground dark:text-foreground-dark tracking-tight">Mentors & Network</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto italic">
            &quot;Engineering is a team sport. True maturity begins when you learn how to be mentored.&quot;
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {visibleMentors.map((mentor, index) => (
            <div key={index} className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground dark:text-foreground-dark">{mentor.name}</h2>
                  <p className="text-primary dark:text-primary-dark font-medium text-sm">{mentor.title}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs font-bold uppercase tracking-wider">{mentor.organization}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {mentor.bio}
                </p>
                <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
                  <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Key Impact</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    &quot;{mentor.impact}&quot;
                  </p>
                </div>
                
                {mentor.links.length > 0 && (
                  <div className="flex gap-3">
                    {mentor.links.map((link, lIdx) => (
                      <a 
                        key={lIdx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-primary dark:text-primary-dark hover:underline"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 dark:bg-primary-dark/5 rounded-2xl p-10 border border-primary/10 dark:border-primary-dark/10 text-center">
          <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-4">Building the Future Together</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            My journey through robotics, research, and design has been shaped by the generosity and expertise of my mentors. I am always looking for new perspectives and opportunities to collaborate on projects that use technology to empower communities.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-primary dark:bg-primary-dark text-white rounded-xl font-bold hover:opacity-90 transition shadow-lg shadow-primary/20"
            >
              Get in Touch
            </Link>
            <Link 
              href="/blog/the-architecture-of-mentorship" 
              className="px-8 py-3 bg-white dark:bg-zinc-800 text-foreground dark:text-foreground-dark border border-gray-200 dark:border-zinc-700 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-zinc-700 transition"
            >
              Read the Essay
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
