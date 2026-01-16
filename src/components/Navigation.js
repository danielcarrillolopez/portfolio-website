import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-primary hover:text-primary-light">
            Your Name
          </Link>
          
          <div className="flex gap-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary font-medium transition"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-700 hover:text-primary font-medium transition"
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary font-medium transition"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-primary font-medium transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}