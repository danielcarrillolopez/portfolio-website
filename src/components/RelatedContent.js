import Link from 'next/link';
import Image from 'next/image';

export default function RelatedContent({ items, type = 'projects', title = 'Related Content' }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mt-20 pt-12 border-t border-gray-100 dark:border-zinc-800">
      <h2 className="text-2xl font-bold mb-8 text-foreground dark:text-foreground-dark">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link 
            key={item.id} 
            href={`/${type}/${item.slug}`}
            className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-all group"
          >
            <div className="relative h-40">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-foreground dark:text-foreground-dark line-clamp-1 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                {item.excerpt || item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
