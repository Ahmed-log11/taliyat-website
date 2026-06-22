import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Animated counter that counts up when scrolled into view.
export default function StatCard({ value, labelKey, unitKey }) {
  const { t } = useTranslation();
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            if (reduce || value === 0) {
              setDisplay(value);
              return;
            }
            const duration = 1200;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              setDisplay(Math.round(p * value));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/40">
        {/* simple ring icon placeholder; swap for real icons later */}
        <span className="h-8 w-8 rounded-full bg-gold/20" />
      </div>
      <div className="text-3xl font-bold text-gold">{display.toLocaleString()}</div>
      <div className="mt-1 font-semibold text-primary">{t(labelKey)}</div>
      <div className="text-sm text-ink/60">{t(unitKey)}</div>
    </div>
  );
}
