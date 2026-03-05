import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import DarkModeToggle from './DarkModeToggle';

export default function Navigation() {
  return (
    <nav className="bg-background dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-primary dark:text-primary-dark hover:text-primary-light dark:hover:text-primary-dark-light">
            {siteConfig.author.name}
          </Link>
          
          <div className="flex items-center gap-8">
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
              href="/blog" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark font-medium transition"
            >
              Blog
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
            
            {siteConfig.availability.showBadge && (
              <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-green-800 dark:text-green-300 whitespace-nowrap">
                  {siteConfig.availability.message}
                </span>
              </div>
            )}
            
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}