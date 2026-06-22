import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { navLinks } from '../../data/navLinks.js';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/90">
      <div className="container grid gap-8 py-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <img src="/assets/logo-white.png" alt={t('org.name')} className="h-20 w-auto" />
          <p className="mt-4 text-sm text-white/70">{t('footer.tagline')}</p>
          <p className="mt-2 inline-block rounded bg-sand/15 px-2 py-1 text-xs text-sand">
            {t('org.license')}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 font-bold text-white">{t('footer.quickLinks')}</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.slice(1).map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-white/70 transition-colors hover:text-gold">
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-bold text-white">{t('footer.contact')}</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li dir="ltr" className="text-start">{t('org.phone')}</li>
            <li>{t('org.email')}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {year} — {t('footer.rights')}
      </div>
    </footer>
  );
}
