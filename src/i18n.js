import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import es from './locales/es.json';
import de from './locales/de.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      de: { translation: de },
    },
    lng: 'en', // Set English as the default language
    fallbackLng: 'en', // Fallback to English if detection fails
    detection: {
      order: ['navigator'], // Use browser language detection
      caches: [], // Disable caching to always start with 'en' unless overridden
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;