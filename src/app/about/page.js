import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import SkillsGrid from '@/components/SkillsGrid';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function About() {
  return (
    <main className="min-h-screen bg-background dark:bg-background-dark py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-8 text-foreground dark:text-foreground-dark">About Me</h1>
        </FadeIn>
        
        {/* Elevator Pitch Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-center md:items-start">
          <div className="md:w-1/3">
            <FadeIn direction="right">
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/profile/daniel_carrillo.jpg"
                  alt={siteConfig.author.name}
                  fill
                  className="object-cover rounded-2xl shadow-xl border-4 border-white dark:border-zinc-800"
                />
              </div>
            </FadeIn>
          </div>
          
          <div className="md:w-2/3">
            <FadeIn direction="left" delay={0.2}>
              <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-dark">Engineer. Problem-Solver. Innovator.</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                <p>
                  I am a biomedical and robotics engineering student dedicated to designing the next generation of assistive devices. My work combines CAD design, programming, and mechatronics to create functional prototypes that bridge the gap between concept and reality.
                </p>
                <p>
                  What defines my approach is a blend of Mexican heritage and a rigorous engineering mindset. I learned in my grandfather&apos;s workshop that nothing is ever truly broken—it just requires a more creative solution. This philosophy drives my ambition to build robotic prosthetics that restore confidence and possibility.
                </p>
                <p className="font-medium text-foreground dark:text-foreground-dark">
                  Through hands-on research at SLU&apos;s CHROME Lab and leading Force Green Robotics, I am building the technical expertise and human-centered perspective needed to make advanced technology accessible to everyone.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Ambition & Vision */}
        <FadeIn>
          <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl p-10 border border-gray-100 dark:border-zinc-800 mb-16">
            <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-6">Ambition & Vision</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              My mission is to advance the accessibility and functionality of assistive technology through innovative design and open collaboration—while inspiring the next generation of engineers to build technology that genuinely empowers lives.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
                <h3 className="font-bold text-primary dark:text-primary-dark mb-2 italic">Technical Focus</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Designing robotic prosthetics that restore independence and sense of self.</p>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
                <h3 className="font-bold text-secondary dark:text-secondary-dark mb-2 italic">Mentorship Focus</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Empowering rookie engineers through technical clarity and creative expression.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Technical Skills */}
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-foreground dark:text-foreground-dark border-b border-gray-200 dark:border-zinc-800 pb-2 text-center uppercase tracking-widest">The Technical Stack</h2>
            <SkillsGrid />
          </div>
        </FadeIn>

      </div>
    </main>
  );
}
