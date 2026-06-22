import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ar from './locales/ar/translation.json';
import en from './locales/en/translation.json';

export const LANGS = {
  ar: { label: 'العربية', dir: 'rtl' },
  en: { label: 'English', dir: 'ltr' },
};

// Apply <html lang/dir> whenever language changes
export function applyDirection(lng) {
  const dir = LANGS[lng]?.dir || 'rtl';
  document.documentElement.setAttribute('lang', lng);
  document.documentElement.setAttribute('dir', dir);
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: ar },
      en: { translation: en },
    },
    fallbackLng: 'ar',
    supportedLngs: ['ar', 'en'],
    detection: {
      // remember choice; default to Arabic on first visit
      order: ['localStorage', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  });

// set initial direction + keep it in sync
applyDirection(i18n.language || 'ar');
i18n.on('languageChanged', applyDirection);

export default i18n;
