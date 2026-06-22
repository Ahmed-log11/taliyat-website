import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Shared placeholder for every route not built yet. Renders inside <Layout>,
// so header/nav/footer stay consistent. Swap a route's element in App.jsx for
// the real page when it's ready.
export default function ComingSoon() {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-[50vh] items-center justify-center py-20">
      <div className="container text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sand/40">
          <span className="text-3xl">🛠️</span>
        </div>
        <h1 className="text-2xl font-bold text-primary md:text-3xl">{t('comingSoon.title')}</h1>
        <p className="mx-auto mt-3 max-w-md text-ink/70">{t('comingSoon.body')}</p>
        <Link to="/" className="btn-primary mt-8">
          {t('comingSoon.back')}
        </Link>
      </div>
    </section>
  );
}
