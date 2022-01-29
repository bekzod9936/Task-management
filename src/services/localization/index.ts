import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import localeEN from './locales/en.json';
import localeUZ from './locales/uz.json';
import localeRu from './locales/ru.json';

i18n.use(initReactI18next).init({
  lng: 'ru',
  debug: false,
  fallbackLng: 'ru',
  resources: {
    ru: {
      translation: localeRu,
    },
    en: {
      translation: localeEN,
    },
    uz: {
      translation: localeUZ,
    },
  },
  compatibilityJSON: 'v3',
  ns: ['translation'],
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false,
  },

  react: {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    useSuspense: true,
  },
});

export default i18n;
