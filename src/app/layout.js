import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Name - Biomedical & Robotics Engineering',
  description: 'Portfolio showcasing biomedical and robotics engineering projects, with focus on prosthetic design and STEAM education.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2">© 2024 Your Name. All rights reserved.</p>
            <p className="text-gray-400 text-sm">
              Built with Next.js • Deployed on Vercel
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}