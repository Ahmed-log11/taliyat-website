import { useState, useCallback, useEffect } from 'react';

// Minimal, dependency-free carousel. Pass an array of slides (nodes).
// `perView` controls how many show at once (Hero = 1, Partners = 4).
export default function Carousel({ slides, perView = 1, auto = false, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const pages = Math.max(1, slides.length - perView + 1);

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + pages) % pages),
    [pages]
  );

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => go(1), interval);
    return () => clearInterval(id);
  }, [auto, interval, go]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${index * (100 / perView)}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="shrink-0 px-2"
              style={{ width: `${100 / perView}%` }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* arrows — note: in RTL, prev/next visually flip automatically via order */}
      <button
        type="button"
        onClick={() => go(-1)}
        className="absolute top-1/2 -translate-y-1/2 start-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-primary shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute top-1/2 -translate-y-1/2 end-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-primary shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        aria-label="Next"
      >
        ›
      </button>

      {/* dots */}
      {pages > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? 'bg-gold' : 'bg-ink/20 hover:bg-ink/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
