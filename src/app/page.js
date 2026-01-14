export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Your Name
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Biomedical & Robotics Engineering Student
          </p>
          <p className="text-xl text-gray-700 mb-8">
            Building Tomorrow's Assistive Technology
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a 
              href="https://github.com/yourusername" 
              target="_blank"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Project Image</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project Name 1</h3>
              <p className="text-gray-600 mb-4">
                Brief description of the project and what it accomplishes.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  CAD
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Arduino
                </span>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Project Image</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project Name 2</h3>
              <p className="text-gray-600 mb-4">
                Brief description of the project and what it accomplishes.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  3D Print
                </span>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Project Image</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project Name 3</h3>
              <p className="text-gray-600 mb-4">
                Brief description of the project and what it accomplishes.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  Robotics
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  EMG
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}