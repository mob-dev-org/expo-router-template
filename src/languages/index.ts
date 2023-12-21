import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import bosnian from './bosnian';
import english from './english';

export const fallback = 'en';
export const resources: Resource = {
    'en-US': english,
    'bs-BA': bosnian,
};
export const defaultNamespace = 'common';
export const namespaces = ['common', 'navigation'];

export const initLanguageDetector = async (lng: string) => {
    await i18n.use(initReactI18next).init({
        compatibilityJSON: 'v3',
        resources,
        lng,
        //language to use if translations in user language are not available
        fallbackLng: ['en-US', 'bs-BA'],
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false,
        },
        defaultNS: defaultNamespace,
    });
};
