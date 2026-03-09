import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import SkillsGrid from '@/components/SkillsGrid';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-background dark:bg-background-dark py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground dark:text-foreground-dark">My Journey</h1>
        
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square mb-6">
                <Image
                  src="/images/profile/profile.jpg"
                  alt={siteConfig.author.name}
                  fill
                  className="object-cover rounded-2xl shadow-xl border-4 border-white dark:border-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-widest text-primary dark:text-primary-dark">Location</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">St. Louis, MO</p>
                <div className="pt-4">
                  <p className="text-sm font-bold uppercase tracking-widest text-secondary dark:text-secondary-dark">The Mission</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic">"{siteConfig.author.mission}"</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-foreground-dark">First-Born, First-Generation</h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              <p>
                My life has been a journey of "firsts." As a first-born male in a Mexican family, I was the first to carry the weight of certain expectations. As a first-generation immigrant to Canada, and then to the United States, I was the first to navigate the complexities of a new culture, a new language, and a new identity. 
              </p>
              
              <p>
                What makes me "me" is the blend of this heritage and an engineering mindset. My family taught me the value of resourcefulness—to always find a way to fix things, not just discard them. I learned that nothing is ever truly broken beyond repair in my grandfather's workshop in Mexico. Surrounded by the smell of oil and sawdust, I watched him fix everything with a bit of ingenuity and a handful of tools.
              </p>

              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl border-l-4 border-primary shadow-sm my-8">
                <p className="italic text-xl font-medium text-gray-800 dark:text-gray-200">
                  "I see failure not as a conclusion, but as a conversation. My upbringing taught me that every failure contains information."
                </p>
              </div>

              <p>
                This journey has instilled in me a deep sense of resilience and an unwavering commitment to giving back. I am not just a builder; I am a problem-solver who is deeply motivated by a desire to help others. Whether it's helping my grandpa around the house, volunteering in my community, or designing a new piece of technology like the <strong>Synapse Haptic Band</strong>, I am always looking for ways to use my skills to make a positive impact.
              </p>
            </div>
          </div>
        </div>

        {/* Ambition & Vision Section */}
        <div className="bg-primary/5 dark:bg-primary-dark/5 rounded-3xl p-10 border border-primary/10 dark:border-primary-dark/10 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark mb-6 text-center">Ambition & Vision</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              My goal is to create technology that solves problems people didn't think could be solved. Specifically, I want to design <strong>robotic prosthetics</strong> that don't just replace what was lost but restore confidence and possibility. 
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-3">
                <h3 className="font-bold text-primary dark:text-primary-dark flex items-center gap-2">
                  <span>🛠️</span> Technical Ambition
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Building devices that give independence and sense of self back to those who have lost mobility. Engineering at its best should expand what's possible.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-secondary dark:text-secondary-dark flex items-center gap-2">
                  <span>🌱</span> Mentorship Ambition
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Building better engineers. Guiding the next generation to develop their own intuition and understand that technology must serve human needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground dark:text-foreground-dark border-b border-gray-200 dark:border-zinc-800 pb-2">The Toolkit</h2>
          <SkillsGrid />
        </div>

        {/* Final CTA */}
        <div className="text-center pb-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Interested in discussing a project or potential collaboration?</p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-foreground dark:bg-white text-background dark:text-black rounded-xl font-bold hover:opacity-90 transition shadow-lg"
            >
              Get in Touch
            </Link>
            <Link 
              href="/blog" 
              className="px-8 py-3 bg-white dark:bg-zinc-800 text-foreground dark:text-foreground-dark border border-gray-200 dark:border-zinc-700 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-zinc-700 transition"
            >
              Read my Thoughts
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
