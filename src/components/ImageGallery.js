'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8 text-foreground dark:text-foreground-dark border-b border-gray-200 dark:border-zinc-800 pb-2">
        Project Gallery
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative h-48 md:h-64 rounded-xl overflow-hidden cursor-zoom-in group border border-gray-100 dark:border-zinc-800 shadow-sm"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <div className="relative w-full h-full max-w-6xl">
            <Image
              src={selectedImage}
              alt="Expanded project image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
