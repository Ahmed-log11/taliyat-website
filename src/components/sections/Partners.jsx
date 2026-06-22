import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { partners } from '../../data/partners.js';
import Carousel from '../ui/Carousel.jsx';

function PartnerLogo({ partner }) {
  return (
    <div className="flex flex-col items-center gap-3 py-4">
      <div className="flex h-28 w-full items-center justify-center rounded-lg border border-ink/10 bg-white p-4">
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-20 w-auto object-contain"
        />
      </div>
      <span className="font-semibold text-primary">{partner.name}</span>
    </div>
  );
}

export default function Partners() {
  const { t } = useTranslation();
  const slides = partners.map((p) => <PartnerLogo key={p.id} partner={p} />);

  return (
    <section className="bg-sand/20 py-16">
      <div className="container">
        <h2 className="section-title">{t('partners.title')}</h2>
        <p className="section-subtitle">{t('partners.subtitle')}</p>

        <div className="mt-10">
          {/* perView responsive: shows 4 on wide screens via CSS-less fallback of 4 */}
          <Carousel slides={slides} perView={Math.min(4, slides.length)} />
        </div>

        <div className="mt-10 text-center">
          <Link to="/partners" className="btn-primary">
            {t('partners.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
