'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectShowcase({ initialProjects }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('newest');

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    initialProjects.forEach(project => {
      project.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [initialProjects]);

  // Tag Color Mapping Helper
  const getTagColor = (tag) => {
    const tagLower = tag.toLowerCase();
    if (tagLower.includes('python')) return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
    if (tagLower.includes('arduino')) return 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-800';
    if (tagLower.includes('cad') || tagLower.includes('solidworks')) return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
    if (tagLower.includes('robot')) return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800';
    if (tagLower.includes('bio')) return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
    if (tagLower.includes('3d print')) return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800';
    return 'bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-gray-400 border-gray-200 dark:border-zinc-700';
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
  };

  // Filter and Sort Logic
  const filteredProjects = useMemo(() => {
    const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);

    let result = initialProjects.filter(project => {
      const content = `${project.title} ${project.description} ${project.tags?.join(' ')}`.toLowerCase();
      
      const matchesSearch = searchTerms.every(term => content.includes(term));
      const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => project.tags?.includes(tag));
      
      return matchesSearch && matchesTags;
    });

    if (sortBy === 'newest') {
      result.sort((a, b) => b.id - a.id);
    } else if (sortBy === 'oldest') {
      result.sort((a, b) => a.id - b.id);
    } else if (sortBy === 'alphabetical') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [initialProjects, searchQuery, selectedTags, sortBy]);

  const hasActiveFilters = searchQuery !== '' || selectedTags.length > 0;

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Search */}
          <div>
            <label htmlFor="project-search" className="block text-xs font-bold uppercase text-gray-400 mb-2 ml-1 tracking-widest">Search</label>
            <input 
              id="project-search"
              type="text"
              placeholder="Search by title, tech, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition"
              aria-label="Search projects"
            />
          </div>

          {/* Sort */}
          <div>
            <label htmlFor="project-sort" className="block text-xs font-bold uppercase text-gray-400 mb-2 ml-1 tracking-widest">Sort By</label>
            <select 
              id="project-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition"
              aria-label="Sort projects"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="alphabetical">A - Z</option>
            </select>
          </div>
        </div>

        {/* Multi-select Tags */}
        <div>
          <div className="flex justify-between items-center mb-3 ml-1">
            <label className="block text-xs font-bold uppercase text-gray-400 tracking-widest">Filter by Tech (Select Multiple)</label>
            {hasActiveFilters && (
              <button 
                onClick={clearFilters}
                className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors flex items-center gap-1"
                aria-label="Clear all project filters"
              >
                <span>✕</span> Clear All Filters
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter tech stack">
            {allTags.map(tag => {
              const isActive = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  aria-pressed={isActive}
                  className={`px-3 py-1.5 border rounded-lg text-xs font-bold transition-all duration-200 ${
                    isActive 
                    ? 'bg-primary dark:bg-primary-dark text-white border-primary dark:border-primary-dark shadow-md scale-105' 
                    : 'bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex justify-between items-center px-1">
        <div className="sr-only" aria-live="polite" role="status">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </div>
        <p className="text-sm font-medium text-gray-500">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </p>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link 
              href={`/projects/${project.slug}`} 
              key={project.id}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-bold">View Project Details →</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary dark:group-hover:text-primary-dark transition text-foreground dark:text-foreground-dark line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags?.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className={`px-2 py-1 border rounded text-[10px] font-bold uppercase tracking-wider ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags?.length > 3 && (
                    <span className="text-[10px] text-gray-400 self-center">+{project.tags.length - 3} more</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center bg-white dark:bg-zinc-900 rounded-xl border border-dashed border-gray-200 dark:border-zinc-800">
          <span className="text-5xl mb-4 block">🔦</span>
          <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark mb-2">No projects found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your search or filters to find what you&apos;re looking for.</p>
          <button 
            onClick={clearFilters}
            className="px-6 py-2 bg-primary dark:bg-primary-dark text-white font-bold rounded-lg hover:bg-primary-light transition-all shadow-md"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
