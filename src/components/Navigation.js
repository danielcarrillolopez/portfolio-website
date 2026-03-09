'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import DarkModeToggle from './DarkModeToggle';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Mentors', href: '/mentors' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-[100]">
        Skip to content
      </a>
      
      <nav className="bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300" aria-label="Main Navigation">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-extrabold text-primary dark:text-primary-dark hover:opacity-80 transition-opacity flex items-center gap-2">
              <span className="hidden sm:inline">{siteConfig.author.name}</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark font-bold text-sm uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="h-6 w-px bg-gray-200 dark:border-gray-800 ml-2"></div>
              
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

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-4">
              <DarkModeToggle />
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                aria-expanded={isMenuOpen}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-bold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-dark transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              {siteConfig.availability.showBadge && (
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">{siteConfig.availability.message}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}