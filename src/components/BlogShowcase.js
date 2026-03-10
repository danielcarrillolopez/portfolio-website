'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogShowcase({ initialPosts }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('newest');

  // Extract unique tags from posts
  const allTags = useMemo(() => {
    const tags = new Set();
    initialPosts.forEach(post => {
      post.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [initialPosts]);

  // Tag Color Mapping Helper
  const getTagColor = (tag) => {
    const tagLower = tag.toLowerCase();
    if (tagLower.includes('robot')) return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800';
    if (tagLower.includes('design')) return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
    if (tagLower.includes('arduino')) return 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-800';
    if (tagLower.includes('sensor')) return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800';
    if (tagLower.includes('bio')) return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
    if (tagLower.includes('tutorial') || tagLower.includes('guide')) return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
    if (tagLower.includes('career') || tagLower.includes('insight')) return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800';
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
  const filteredPosts = useMemo(() => {
    const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);

    let result = initialPosts.filter(post => {
      const content = `${post.title} ${post.excerpt} ${post.tags?.join(' ')} ${post.category}`.toLowerCase();
      const matchesSearch = searchTerms.every(term => content.includes(term));
      const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => post.tags?.includes(tag));
      return matchesSearch && matchesTags;
    });

    if (sortBy === 'newest') result.sort((a, b) => b.id - a.id);
    else if (sortBy === 'oldest') result.sort((a, b) => a.id - b.id);
    else if (sortBy === 'alphabetical') result.sort((a, b) => a.title.localeCompare(b.title));

    return result;
  }, [initialPosts, searchQuery, selectedTags, sortBy]);

  const hasActiveFilters = searchQuery !== '' || selectedTags.length > 0;

  return (
    <div className="space-y-8">
      {/* Filters Bar */}
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="blog-search" className="block text-xs font-bold uppercase text-gray-400 mb-2 ml-1 tracking-widest">Search Articles</label>
            <input 
              id="blog-search"
              type="text"
              placeholder="Search by title, topic, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition"
              aria-label="Search blog articles"
            />
          </div>
          <div>
            <label htmlFor="blog-sort" className="block text-xs font-bold uppercase text-gray-400 mb-2 ml-1 tracking-widest">Sort By</label>
            <select 
              id="blog-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition"
              aria-label="Sort blog articles"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="alphabetical">A - Z</option>
            </select>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3 ml-1">
            <label className="block text-xs font-bold uppercase text-gray-400 tracking-widest">Filter by Topic</label>
            {hasActiveFilters && (
              <button 
                onClick={clearFilters} 
                className="text-xs font-bold text-red-500 hover:underline flex items-center gap-1"
                aria-label="Clear all filters"
              >
                ✕ Clear All
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter topics">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                aria-pressed={selectedTags.includes(tag)}
                className={`px-3 py-1.5 border rounded-lg text-xs font-bold transition-all duration-200 ${
                  selectedTags.includes(tag) 
                  ? 'bg-primary dark:bg-primary-dark text-white border-primary dark:border-primary-dark shadow-md scale-105' 
                  : 'bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-zinc-700 hover:border-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sr-only" aria-live="polite" role="status">
        Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
      </div>

      <p className="text-sm font-medium text-gray-500 ml-1">
        Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
      </p>

      {/* Blog Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.id}
              className="flex flex-col bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full shadow-sm border ${getTagColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] text-gray-400 font-bold uppercase mb-2">{post.date}</span>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition text-foreground dark:text-foreground-dark line-clamp-2 min-h-[3.5rem] leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm line-clamp-3 min-h-[3.75rem]">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50 dark:border-zinc-800">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">⏱️ {post.readTime}</span>
                  <span className="text-primary dark:text-primary-dark font-bold text-xs">Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center bg-white dark:bg-zinc-900 rounded-xl border border-dashed border-gray-200 dark:border-zinc-800">
          <span className="text-5xl mb-4 block">📝</span>
          <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark mb-2">No articles found</h3>
          <button onClick={clearFilters} className="mt-4 px-6 py-2 bg-primary dark:bg-primary-dark text-white font-bold rounded-lg shadow-md">
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
