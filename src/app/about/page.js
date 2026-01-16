import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';

export default function About() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground dark:text-foreground-dark">About Me</h1>
        
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/images/profile/profile.jpg"
                alt={siteConfig.author.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-foreground dark:text-foreground-dark">{siteConfig.author.bioHeadline}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              [YOUR PERSONAL BIOGRAPHY - PARAGRAPH 1]
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              [YOUR PERSONAL BIOGRAPHY - PARAGRAPH 2]
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              [YOUR PERSONAL BIOGRAPHY - PARAGRAPH 3]
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-foreground-dark">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground dark:text-foreground-dark">CAD & Design</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• SolidWorks</li>
                <li>• Fusion 360</li>
                <li>• Parametric modeling</li>
                <li>• DFM principles</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground dark:text-foreground-dark">Programming</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Python</li>
                <li>• C/C++</li>
                <li>• Arduino</li>
                <li>• Raspberry Pi</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground dark:text-foreground-dark">Electronics</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Circuit design</li>
                <li>• PCB layout</li>
                <li>• Sensor integration</li>
                <li>• Motor control</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground dark:text-foreground-dark">Fabrication</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 3D printing (FDM/SLA)</li>
                <li>• CNC machining</li>
                <li>• Laser cutting</li>
                <li>• Woodworking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gray-50 dark:bg-background-dark rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground dark:text-foreground-dark">My Engineering Philosophy</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I believe that engineering exists to reduce human suffering and expand human capability.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Every project I undertake must:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
            <li>→ Function reliably in imperfect conditions (not just the lab)</li>
            <li>→ Be accessible to users beyond the affluent few</li>
            <li>→ Respect user autonomy and dignity in its design</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            I measure success by whether someone's life genuinely improved, not whether 
            the technology is impressive. The best designs disappear into intuitive use.
          </p>
        </div>
      </div>
    </main>
  );
}