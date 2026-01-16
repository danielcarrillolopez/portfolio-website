import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import { siteConfig } from '@/config/siteConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={siteConfig.darkMode ? 'dark' : ''}>
      <body className={`${inter.className} bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark`}>
        <Navigation />
        {children}
        
        {/* Footer */}
        <footer className="bg-primary dark:bg-primary-dark text-white py-8 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2">© {new Date().getFullYear()} {siteConfig.author.name}. All rights reserved.</p>
            <p className="text-gray-400 dark:text-gray-300 text-sm">
              Built with Next.js • Deployed on Vercel
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}