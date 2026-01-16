import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/images/profile/profile.jpg"
                alt="Your Name"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Engineering Solutions, Empowering Lives</h2>
            <p className="text-gray-700 mb-4">
              I'm a biomedical and robotics engineering student driven by a single question: 
              How can we use technology to genuinely improve people's lives?
            </p>
            <p className="text-gray-700 mb-4">
              My answer lies at the intersection of mechanical design, electronics, and 
              intelligent control systems—specifically in the field of assistive devices 
              and robotic prosthetics.
            </p>
            <p className="text-gray-700">
              Through hands-on projects and STEAM outreach to 500+ K-12 students, I'm 
              building both technical expertise and the communication skills needed to 
              make advanced medical technology accessible to everyone who needs it.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">CAD & Design</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• SolidWorks</li>
                <li>• Fusion 360</li>
                <li>• Parametric modeling</li>
                <li>• DFM principles</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Programming</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Python</li>
                <li>• C/C++</li>
                <li>• Arduino</li>
                <li>• Raspberry Pi</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Electronics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Circuit design</li>
                <li>• PCB layout</li>
                <li>• Sensor integration</li>
                <li>• Motor control</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Fabrication</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 3D printing (FDM/SLA)</li>
                <li>• CNC machining</li>
                <li>• Laser cutting</li>
                <li>• Woodworking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">My Engineering Philosophy</h2>
          <p className="text-gray-700 mb-4">
            I believe that engineering exists to reduce human suffering and expand human capability.
          </p>
          <p className="text-gray-700 mb-4">
            Every project I undertake must:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>→ Function reliably in imperfect conditions (not just the lab)</li>
            <li>→ Be accessible to users beyond the affluent few</li>
            <li>→ Respect user autonomy and dignity in its design</li>
          </ul>
          <p className="text-gray-700">
            I measure success by whether someone's life genuinely improved, not whether 
            the technology is impressive. The best designs disappear into intuitive use.
          </p>
        </div>
      </div>
    </main>
  );
}