import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        {/* Image side — colored logo on a soft sand card */}
        <div className="flex justify-center">
          <div className="flex h-64 w-72 items-center justify-center rounded-2xl bg-sand/30 p-6 md:h-80 md:w-96">
            <img
              src="/assets/logo.png"
              alt={t('about.title')}
              className="max-h-60 w-auto"
            />
          </div>
        </div>

        {/* Text side */}
        <div className="text-center md:text-start">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">{t('about.title')}</h2>
          <p className="mt-5 leading-loose text-ink/80">{t('about.body')}</p>
          <Link to="/about" className="btn-primary mt-6">
            {t('about.more')}
          </Link>
        </div>
      </div>
    </section>
  );
}
