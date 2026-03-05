'use client';

export default function TechSpecs({ specs }) {
  if (!specs || Object.keys(specs).length === 0) return null;

  return (
    <div className="mt-12 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm overflow-hidden">
      <div className="bg-gray-50 dark:bg-zinc-800/50 px-6 py-4 border-b border-gray-100 dark:border-zinc-800">
        <h3 className="font-bold text-foreground dark:text-foreground-dark uppercase tracking-wider text-xs">Technical Specifications</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-50 dark:divide-zinc-800">
        {Object.entries(specs).map(([key, value], idx) => (
          <div key={idx} className="flex justify-between px-6 py-4 hover:bg-gray-50/50 dark:hover:bg-zinc-800/30 transition-colors">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{key}</span>
            <span className="text-sm font-bold text-foreground dark:text-foreground-dark">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
