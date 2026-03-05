'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';

export default function ResourceShowcase({ initialResources }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortBy, setSortBy] = useState('alphabetical');

  // Extract unique types from resources
  const allTypes = useMemo(() => {
    const types = new Set();
    initialResources.forEach(res => types.add(res.type));
    return Array.from(types).sort();
  }, [initialResources]);

  const toggleType = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTypes([]);
  };

  // Filter and Sort Logic
  const filteredResources = useMemo(() => {
    const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);

    let result = initialResources.filter(res => {
      const content = `${res.title} ${res.author} ${res.description} ${res.type}`.toLowerCase();
      const matchesSearch = searchTerms.every(term => content.includes(term));
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(res.type);
      return matchesSearch && matchesType;
    });

    if (sortBy === 'alphabetical') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'type') {
      result.sort((a, b) => a.type.localeCompare(b.type));
    }

    return result;
  }, [initialResources, searchQuery, selectedTypes, sortBy]);

  return (
    <div className="space-y-8">
      {/* Filters Bar */}
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-2 ml-1 tracking-widest">Search Resources</label>
            <input 
              type="text"
              placeholder="Search by title, author, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-2 ml-1 tracking-widest">Sort By</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition"
            >
              <option value="alphabetical">Title (A-Z)</option>
              <option value="type">Category Type</option>
            </select>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3 ml-1">
            <label className="block text-xs font-bold uppercase text-gray-400 tracking-widest">Filter by Category</label>
            {(searchQuery || selectedTypes.length > 0) && (
              <button onClick={clearFilters} className="text-xs font-bold text-red-500 hover:underline">
                ✕ Clear All
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {allTypes.map(type => (
              <button
                key={type}
                onClick={() => toggleType(type)}
                className={`px-3 py-1.5 border rounded-lg text-xs font-bold transition-all duration-200 ${
                  selectedTypes.includes(type) 
                  ? 'bg-primary dark:bg-primary-dark text-white border-primary' 
                  : 'bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-zinc-700 hover:border-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Grid */}
      {filteredResources.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((item, idx) => (
            <a 
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-zinc-900/90 text-[10px] font-bold uppercase rounded-full shadow-sm text-primary dark:text-primary-dark">
                    {item.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-1 text-foreground dark:text-foreground-dark group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                  {item.title}
                </h2>
                <p className="text-xs text-gray-400 font-bold uppercase mb-4">By {item.author}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-gray-50 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary dark:text-primary-dark uppercase tracking-wider">Explore Resource</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center bg-white dark:bg-zinc-900 rounded-xl border border-dashed border-gray-200 dark:border-zinc-800">
          <span className="text-5xl mb-4 block">📚</span>
          <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark">No resources found</h3>
          <button onClick={clearFilters} className="mt-4 px-6 py-2 bg-primary dark:bg-primary-dark text-white font-bold rounded-lg">
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
