import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

interface Photo {
  id: string;
  src: string;
  alt: string;
}

export function PhotoManager() {
  const photos: Photo[] = useMemo(() => [
    { id: '2', src: '/gallery/photo-2.jpg', alt: 'Photography 1' },
    { id: '5', src: '/gallery/photo-5.jpg', alt: 'Photography 2' },
    { id: '4', src: '/gallery/photo-4.jpg', alt: 'Photography 3' },
    { id: '3', src: '/gallery/photo-3.jpg', alt: 'Photography 4' },
    { id: '6', src: '/gallery/photo-6.jpg', alt: 'Photography 5' },
    { id: '1', src: '/gallery/photo-1.jpg', alt: 'Photography 6' },
  ], []);

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex justify-between items-center border-b border-white/5 pb-4">
        <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground text-left">Photography</h3>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
      </div>

      <div className="max-h-[78vh] overflow-y-auto pr-2 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            className="relative overflow-hidden rounded-sm bg-neutral-900 aspect-[4/5] min-h-[220px] sm:min-h-[240px]"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className={`w-full h-full object-cover object-center transition-all duration-700 ${hoverIndex === i ? 'scale-100 grayscale-0' : 'scale-105 grayscale'} opacity-90`}
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>{photos.length} photos</span>
        <span>Vertical scroll</span>
      </div>

      <div className="pt-2 flex items-center gap-3">
        <div className="h-px flex-1 bg-white/5" />
        <div className="h-px w-4 bg-white/5" />
      </div>
    </div>
  );
}
