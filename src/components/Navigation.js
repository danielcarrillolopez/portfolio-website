import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700">
            Your Name
          </Link>
          
          {/* Navigation Links */}
          <div className="flex gap-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-900 font-medium transition"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-700 hover:text-gray-900 font-medium transition"
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-gray-900 font-medium transition"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-gray-900 font-medium transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}