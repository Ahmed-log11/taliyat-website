import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../ui/LanguageSwitcher.jsx';

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="bg-primary text-white">
      <div className="container flex items-center justify-between gap-4 py-3">
        {/* Brand + contact, grouped on the RTL start (right) side */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/logo-white.png" alt={t('org.name')} className="h-14 w-auto" />
            <div className="hidden leading-tight sm:block">
              <div className="font-bold">{t('org.shortName')}</div>
              <div className="mt-0.5 inline-block rounded bg-sand/20 px-2 py-0.5 text-xs text-sand">
                {t('org.license')}
              </div>
            </div>
          </Link>

          {/* Contact — now sits to the right, beside the brand */}
          <div className="hidden border-s border-white/20 ps-6 text-center md:block">
            <div className="text-sm text-sand">{t('header.contactUs')}</div>
            <a href={`tel:${t('org.phone')}`} className="font-semibold tracking-wide" dir="ltr">
              {t('org.phone')}
            </a>
          </div>
        </div>

        {/* Account + cart + language (RTL end / left) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded border border-white/30 px-3 py-1.5 text-sm hover:bg-white/10"
          >
            <span>👤</span>
            <span className="hidden sm:inline">{t('header.myAccount')}</span>
            <span aria-hidden>▾</span>
          </button>

          <Link
            to="/donate"
            className="relative flex items-center rounded border border-white/30 px-3 py-1.5 hover:bg-white/10"
            aria-label={t('header.cart')}
          >
            <span>🛒</span>
            <span className="absolute -top-2 -end-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-white">
              0
            </span>
          </Link>

          <LanguageSwitcher className="px-2 py-1.5 text-sand" />
        </div>
      </div>
    </div>
  );
}
