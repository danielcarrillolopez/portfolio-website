import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import { siteConfig } from '@/config/siteConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.author.name }],
  metadataBase: new URL('https://danielcarrillo.com'), // Replace with your actual domain later
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.title,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `Engineering Portfolio of ${siteConfig.author.name}`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/images/og-image.jpg'],
    creator: '@yourhandle', // Optional: Replace with your X handle
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark transition-colors duration-300`}>
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        
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