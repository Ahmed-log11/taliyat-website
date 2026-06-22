import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FloatingButtons() {
  const { t } = useTranslation();
  const [showTop, setShowTop] = useState(false);
  const phone = '966573584991'; // wa.me format, no +

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 start-6 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
        aria-label="WhatsApp"
      >
        <span className="text-xl">✆</span>
      </a>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white shadow-lg transition-transform hover:scale-105"
          aria-label={t('comingSoon.back')}
        >
          ↑
        </button>
      )}
    </div>
  );
}
