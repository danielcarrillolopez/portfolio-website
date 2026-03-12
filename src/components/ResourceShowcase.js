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

  // Tag Color Mapping Helper
  const getTagColor = (type) => {
    const typeLower = type.toLowerCase();
    if (typeLower.includes('book')) return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
    if (typeLower.includes('website') || typeLower.includes('platform')) return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
    if (typeLower.includes('tool') || typeLower.includes('software')) return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
    if (typeLower.includes('concept') || typeLower.includes('theory')) return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800';
    if (typeLower.includes('tutorial') || typeLower.includes('guide')) return 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-800';
    if (typeLower.includes('documentation')) return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800';
    return 'bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-gray-400 border-gray-200 dark:border-zinc-700';
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
            <label htmlFor="resource-search" className="block text-xs font-bold uppercase text-gray-400 mb-2 ml-1 tracking-widest">Search Resources</label>
            <input 
              id="resource-search"
              type="text"
              placeholder="Search by title, author, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition"
              aria-label="Search curated resources"
            />
          </div>
          <div>
            <label htmlFor="resource-sort" className="block text-xs font-bold uppercase text-gray-400 mb-2 ml-1 tracking-widest">Sort By</label>
            <select 
              id="resource-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition"
              aria-label="Sort curated resources"
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
              <button 
                onClick={clearFilters} 
                className="text-xs font-bold text-red-500 hover:underline"
                aria-label="Clear all resource filters"
              >
                ✕ Clear All
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter resource categories">
            {allTypes.map(type => (
              <button
                key={type}
                onClick={() => toggleType(type)}
                aria-pressed={selectedTypes.includes(type)}
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

      {/* Results Header */}
      <div className="flex justify-between items-center px-1">
        <div className="sr-only" aria-live="polite" role="status">
          Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
        </div>
        
        <p className="text-sm font-medium text-gray-500">
          Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
        </p>
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
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full shadow-sm border ${getTagColor(item.type)}`}>
                    {item.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-lg font-bold mb-1 text-foreground dark:text-foreground-dark group-hover:text-primary dark:group-hover:text-primary-dark transition-colors line-clamp-2 min-h-[3.5rem] leading-tight">
                  {item.title}
                </h2>
                <p className="text-xs text-gray-400 font-bold uppercase mb-4">By {item.author}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 min-h-[3.75rem]">
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
