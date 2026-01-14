export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Interested in collaboration, have questions about my projects, 
          or want to discuss prosthetic design? I'd love to hear from you!
        </p>

        {/* Contact Options */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
                  your.email@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <div>
                <p className="font-semibold">LinkedIn</p>
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <div>
                <p className="font-semibold">GitHub</p>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  github.com/yourusername
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* What to Reach Out About */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Let's Discuss</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✓ Prosthetic technology and assistive device design</li>
            <li>✓ Project collaborations and open-source contributions</li>
            <li>✓ STEAM education and outreach opportunities</li>
            <li>✓ Internship and research possibilities</li>
            <li>✓ Engineering challenges you're working on</li>
          </ul>
        </div>
      </div>
    </main>
  );
}