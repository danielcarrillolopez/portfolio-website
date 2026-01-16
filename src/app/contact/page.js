import { siteConfig } from '@/config/siteConfig';

export default function Contact() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-4 text-foreground dark:text-foreground-dark">Get In Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
          {siteConfig.contact.tagline}
        </p>

        {/* Contact Options */}
        <div className="bg-white dark:bg-background-dark rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-foreground-dark">Connect With Me</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <p className="font-semibold text-foreground dark:text-foreground-dark">Email</p>
                <a href={`mailto:${siteConfig.author.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {siteConfig.author.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <div>
                <p className="font-semibold text-foreground dark:text-foreground-dark">LinkedIn</p>
                <a 
                  href={siteConfig.socials.linkedin} 
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {siteConfig.socials.linkedin.replace('https://', '')}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 dark:bg-background-dark rounded-full flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <div>
                <p className="font-semibold text-foreground dark:text-foreground-dark">GitHub</p>
                <a 
                  href={siteConfig.socials.github} 
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {siteConfig.socials.github.replace('https://', '')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* What to Reach Out About */}
        <div className="bg-white dark:bg-background-dark rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground dark:text-foreground-dark">Let's Discuss</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {siteConfig.contact.discussionTopics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}