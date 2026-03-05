import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background dark:bg-background-dark flex items-center justify-center p-4 transition-colors duration-300">
      <div className="max-w-xl w-full text-center">
        {/* Engineering Themed Visual */}
        <div className="relative mb-8 flex justify-center">
          <div className="text-9xl font-black text-gray-100 dark:text-zinc-900 absolute inset-0 flex items-center justify-center select-none -z-10">
            404
          </div>
          <div className="text-6xl animate-bounce">⚙️</div>
        </div>

        <h1 className="text-3xl font-bold text-foreground dark:text-foreground-dark mb-4">
          Error 404: Mechanism Jammed
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          The technical documentation or project path you are looking for does not exist 
          in this repository. It may have been moved, renamed, or lost during a prototype iteration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-8 py-3 bg-primary dark:bg-primary-dark text-white font-bold rounded-lg hover:bg-primary-light transition-all shadow-lg"
          >
            Return to Home
          </Link>
          <Link 
            href="/projects"
            className="px-8 py-3 bg-white dark:bg-zinc-900 text-foreground dark:text-foreground-dark border border-gray-200 dark:border-zinc-800 font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all shadow-sm"
          >
            View Project Repository
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-zinc-800">
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">
            Status: Connection Interrupted • System Normal
          </p>
        </div>
      </div>
    </main>
  );
}
