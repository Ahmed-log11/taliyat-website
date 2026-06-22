import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { news } from '../../data/news.js';
import NewsCard from '../ui/NewsCard.jsx';

export default function LatestNews() {
  const { t } = useTranslation();

  return (
    <section className="bg-sand/20 py-16">
      <div className="container">
        <h2 className="section-title">{t('news.title')}</h2>
        <p className="section-subtitle">{t('news.subtitle')}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* News list */}
          <div className="order-2 space-y-4 lg:order-1">
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
            <Link to="/media" className="btn-primary mt-2">
              {t('news.viewAll')}
            </Link>
          </div>

          {/* Featured banner */}
          <div className="order-1 flex items-center justify-center rounded-lg bg-primary/5 p-6 lg:order-2">
            <img
              src="/assets/logo.png"
              alt={t('org.name')}
              className="max-h-72 w-auto opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
