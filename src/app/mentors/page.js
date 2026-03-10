import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

export default function Mentors() {
  const mentors = [
    {
      name: "Dr. Jenna Gorlewicz",
      title: "Lab Director & Associate Dean of Research",
      organization: "Saint Louis University (SLU) CHROME Lab",
      image: "/images/mentors/jenna_gorlewicz.jpg", // Placeholder
      bio: "Dr. Gorlewicz runs the CHROME Lab with a mission to 'engineer for the benefit of society.' Her guidance shifted my perspective toward human-centered design and interdisciplinary innovation.",
      impact: "Introduced me to high-level technical leadership and the philosophy of engineering for social good.",
      links: [
        { label: "CHROME Lab", url: "https://sites.google.com/slu.edu/gorlewicz-lab/chrome-lab-team/jenna-gorlewicz?authuser=0" }
      ]
    },
    {
      name: "Jake Little",
      title: "Graduate Research Assistant",
      organization: "Saint Louis University (SLU) CHROME Lab",
      image: "/images/mentors/jake_little.jpg", // Placeholder
      bio: "My one-on-one mentor during the Adaptive Blind Hockey Puck project. Jake provided technical guidance on haptic integration and helped me bridge the gap between high school robotics and academic research.",
      impact: "Taught me the importance of rigor in research and that technical failures are essential data points for iteration.",
      links: [
        { label: "CHROME Lab", url: "https://sites.google.com/slu.edu/gorlewicz-lab/chrome-lab-team/jake-little?authuser=0" }
      ]
    },
    {
      name: "Dr. Jen L. Tennison",
      title: "Lab Manager & Research Engineer",
      organization: "Saint Louis University (SLU) CHROME Lab",
      image: "/images/mentors/jen_tennison.png", // Placeholder
      bio: "Guided the experimental testing phases of the hockey puck project, ensuring that our prototypes met the high standards required for real-world inclusive sports technology.",
      impact: "Demonstrated how to translate experimental data into practical hardware improvements.",
      links: [
        { label: "CHROME Lab", url: "https://sites.google.com/slu.edu/gorlewicz-lab/chrome-lab-team/jen-tennison?authuser=0" }
      ]
    },
    {
      name: "Dixie Baker",
      title: "Internship Program Manager",
      organization: "Rockwood School District (Partners in Education)",
      image: "/images/mentors/dixie_baker.jpg", // Placeholder
      bio: "The key facilitator of my professional entry points. Dixie coordinated the PIE program that connected me with SLU and challenged me to define my professional identity as an engineer.",
      impact: "Gave me the guiding principle: 'Focus on the majors in the majors and the minors in the minors.'",
      links: [
        { label: "Rockwood PIE", url: "https://www.rsdmo.org/get-involved/partners-in-education/summer-internships" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background dark:bg-background-dark py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground dark:text-foreground-dark tracking-tight">Mentors & Network</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto italic">
            "Engineering is a team sport. True maturity begins when you learn how to be mentored."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mentors.map((mentor, index) => (
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
                    "{mentor.impact}"
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
