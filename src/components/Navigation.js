import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

export default function Navigation() {
  return (
    <nav className="bg-background dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-primary dark:text-primary-dark hover:text-primary-light dark:hover:text-primary-dark-light">
            {siteConfig.author.name}
          </Link>
          
          <div className="flex gap-8">
            <Link 
              href="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark font-medium transition"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark font-medium transition"
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark font-medium transition"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark font-medium transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}