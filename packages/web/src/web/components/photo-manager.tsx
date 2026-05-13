import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const [index, setIndex] = useState(0);
  const total = photos.length;
  const current = photos[index];

  const prev = () => setIndex((v) => (v - 1 + total) % total);
  const next = () => setIndex((v) => (v + 1) % total);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex justify-between items-center border-b border-white/5 pb-4">
        <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground text-left">Photography</h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-sm bg-neutral-900 aspect-[4/5] max-h-[70vh]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.id}
            src={current.src}
            alt={current.alt}
            initial={{ opacity: 0, scale: 1.02, x: 12 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.98, x: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <span>Swipe or click</span>
      </div>

      <div className="flex gap-2">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-1.5 flex-1 rounded-full transition-colors ${i === index ? 'bg-white/70' : 'bg-white/15 hover:bg-white/30'}`}
          />
        ))}
      </div>

      <div className="pt-2 flex items-center gap-3">
        <div className="h-px flex-1 bg-white/5" />
        <div className="h-px w-4 bg-white/5" />
      </div>
    </div>
  );
}
