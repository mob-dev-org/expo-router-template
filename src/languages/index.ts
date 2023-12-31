import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import bosnian from './bosnian';
import english from './english';

export type Language = 'en-US' | 'bs-BA';

export const fallback = 'bs-BA';
export const languages: Resource = {
    'bs-BA': bosnian,
    'en-US': english,
};
export const defaultNamespace = 'common';
// namespaces are different files inside the languages folder
export const namespaces = ['common', 'navigation'];

void i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: languages,
    lng: fallback,
    //language to use if translations in user language are not available
    fallbackLng: ['bs-BA', 'en-US'],
    react: {
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false,
    },
    defaultNS: defaultNamespace,
});
