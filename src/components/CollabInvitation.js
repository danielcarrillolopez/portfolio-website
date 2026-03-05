'use client';

import Link from 'next/link';

export default function CollabInvitation({ project, collab }) {
  if (!collab || !collab.active) return null;

  return (
    <div className="mt-12 p-8 bg-primary/5 dark:bg-primary-dark/5 rounded-3xl border-2 border-dashed border-primary/20 dark:border-primary-dark/20 relative overflow-hidden group">
      {/* Decorative background element */}
      <div className="absolute -right-8 -bottom-8 text-8xl opacity-5 group-hover:scale-110 transition-transform duration-500">🤝</div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-3 w-3 rounded-full bg-primary dark:bg-primary-dark animate-pulse"></span>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-primary-dark">Collaboration Open</h3>
        </div>
        
        <h4 className="text-2xl font-bold text-foreground dark:text-foreground-dark mb-3">
          Seeking: {collab.role}
        </h4>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
          {collab.description}
        </p>
        
        <Link 
          href={`/contact?subject=Collaboration: ${project.title}&message=Hi! I'm interested in collaborating on the ${project.title} project regarding the ${collab.role} role.`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-primary-dark text-white font-bold rounded-xl hover:bg-primary-light transition-all shadow-lg hover:shadow-primary/25"
        >
          Let&apos;s Build Together <span>→</span>
        </Link>
      </div>
    </div>
  );
}
