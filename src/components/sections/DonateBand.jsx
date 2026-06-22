import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Full-width green band. Buttons route to /donate (ComingSoon) for now —
// wire to real payment flow (Moyasar/PayTabs) once donations go live.
export default function DonateBand() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-primary py-16 text-center text-white">
      {/* soft texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-primary-dark/40 to-transparent" />

      <div className="container relative z-10">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{t('donate.title')}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">{t('donate.subtitle')}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/donate" className="btn-gold">
            {t('donate.projects')}
          </Link>
          <Link to="/donate" className="btn-outline-light">
            {t('donate.cases')}
          </Link>
        </div>
      </div>
    </section>
  );
}
