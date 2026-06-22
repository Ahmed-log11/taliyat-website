import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Carousel from '../ui/Carousel.jsx';

function Slide() {
  const { t } = useTranslation();
  return (
    <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-bl from-primary via-primary-dark to-primary md:min-h-[560px]">
      {/* decorative ring (gold) */}
      <div className="pointer-events-none absolute -start-20 -top-20 h-72 w-72 rounded-full border-[16px] border-gold/10" />
      <div className="pointer-events-none absolute -end-16 bottom-0 h-64 w-64 rounded-full border-[14px] border-gold/10" />

      <div className="relative z-10 px-6 text-center">
        {/* Colored logo, plain swap on the existing background as requested. */}
        <img
          src="/assets/logo.png"
          alt={t('org.name')}
          className="mx-auto mb-8 h-28 w-auto md:h-36"
        />
        <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-snug text-white md:text-5xl">
          {t('hero.line1')}
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-2xl font-bold text-gold md:text-4xl">
          {t('hero.line2')}
        </p>
        <Link to="/about" className="btn-gold mt-8">
          {t('hero.cta')}
        </Link>
      </div>
    </div>
  );
}

export default function Hero() {
  // Start with one slide; add more <Slide/> variants later for the carousel.
  return (
    <section className="container py-6">
      <Carousel slides={[<Slide key="1" />]} perView={1} auto />
    </section>
  );
}
