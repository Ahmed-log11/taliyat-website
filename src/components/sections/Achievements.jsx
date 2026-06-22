import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { stats } from '../../data/stats.js';
import StatCard from '../ui/StatCard.jsx';

export default function Achievements() {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="section-title">{t('achievements.title')}</h2>
        <p className="section-subtitle">{t('achievements.subtitle')}</p>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.id} value={s.value} labelKey={s.labelKey} unitKey={s.unitKey} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-primary">
            {t('achievements.ctaContact')}
          </Link>
          <Link to="/about" className="btn-gold">
            {t('achievements.ctaAbout')}
          </Link>
        </div>
      </div>
    </section>
  );
}
