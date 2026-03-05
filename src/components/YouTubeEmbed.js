'use client';

export default function YouTubeEmbed({ id }) {
  if (!id) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8 text-foreground dark:text-foreground-dark border-b border-gray-200 dark:border-zinc-800 pb-2">
        Project Demonstration
      </h2>
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-zinc-800">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
