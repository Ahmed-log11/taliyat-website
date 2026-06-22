import { useTranslation } from 'react-i18next';
import { LANGS } from '../../i18n/index.js';

export default function LanguageSwitcher({ className = '' }) {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith('en') ? 'en' : 'ar';
  const next = current === 'ar' ? 'en' : 'ar';

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(next)}
      className={`text-sm font-semibold transition-opacity hover:opacity-80 ${className}`}
      aria-label={`Switch to ${LANGS[next].label}`}
    >
      {LANGS[next].label}
    </button>
  );
}
