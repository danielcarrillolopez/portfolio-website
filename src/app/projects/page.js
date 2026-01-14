export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          A collection of my biomedical and robotics engineering projects, 
          from concept to prototype.
        </p>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* We'll populate this with actual projects later */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Project Template</h3>
            <p className="text-gray-600">
              This is where your projects will be displayed. 
              We'll add real content soon!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}