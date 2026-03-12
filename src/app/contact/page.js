import { siteConfig } from '@/config/siteConfig';
import ContactForm from '@/components/ContactForm';
import { Suspense } from 'react';
import FadeIn from '@/components/FadeIn';

export default function Contact() {
  return (
    <main className="min-h-screen bg-background dark:bg-background-dark py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <h1 className="text-4xl font-bold text-center mb-4 text-foreground dark:text-foreground-dark">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
            {siteConfig.contact.tagline}
          </p>
        </FadeIn>

        <div className="space-y-12">
          {/* 1. Connect With Me Section */}
          <section>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-foreground-dark border-b border-gray-200 dark:border-zinc-800 pb-2">
                Connect With Me
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FadeIn delay={0.1}>
                <a 
                  href={`mailto:${siteConfig.author.email}`}
                  className="flex items-center justify-center gap-3 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-primary dark:hover:border-primary-dark transition-all group h-full"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">📧</span>
                  <span className="font-bold text-gray-700 dark:text-gray-200">Email</span>
                </a>
              </FadeIn>

              <FadeIn delay={0.2}>
                <a 
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-blue-500 transition-all group h-full"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">💼</span>
                  <span className="font-bold text-gray-700 dark:text-gray-200">LinkedIn</span>
                </a>
              </FadeIn>

              <FadeIn delay={0.3}>
                <a 
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-gray-900 dark:hover:border-white transition-all group h-full"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">💻</span>
                  <span className="font-bold text-gray-700 dark:text-gray-200">GitHub</span>
                </a>
              </FadeIn>
            </div>
          </section>

          {/* 2. Let's Discuss Section */}
          <section>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-foreground-dark border-b border-gray-200 dark:border-zinc-800 pb-2">
                Let&apos;s Discuss
              </h2>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-gray-100 dark:border-zinc-800 shadow-sm">
                <ul className="grid md:grid-cols-2 gap-4">
                  {siteConfig.contact.discussionTopics.map((topic, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-blue-500">✓</span> {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </section>

          {/* 3. The Contact Form */}
          <section>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-foreground-dark border-b border-gray-200 dark:border-zinc-800 pb-2">
                Send a Message
              </h2>
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg border border-gray-100 dark:border-zinc-800 shadow-lg">
                <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </FadeIn>
          </section>
        </div>
      </div>
    </main>
  );
}