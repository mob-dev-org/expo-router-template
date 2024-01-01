import i18n from 'i18next';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Language, languages } from '@src/languages';

import { zustandStorage } from '../stores/persistStorage';

type LanguageName = {
    availableLanguages: Language[];
    language: Language;
    setLanguage: (language: Language) => void;
    toggleLanguage: () => void;
};

export const useLanguage = create<LanguageName, [['zustand/persist', 'language-name']]>(
    persist(
        (set, state) => ({
            availableLanguages: Object.keys(languages) as Language[],
            language: 'bs-BA' as Language,
            setLanguage: (language) => {
                void i18n.changeLanguage(language);
                set({ language });
            },
            toggleLanguage: () => {
                // toggle language between available languages
                const { availableLanguages, language, setLanguage } = state();
                const index = availableLanguages.indexOf(language);
                const nextIndex = (index + 1) % availableLanguages.length;
                const nextLanguage = availableLanguages[nextIndex];
                setLanguage(nextLanguage);
                void i18n.changeLanguage(nextLanguage);
            },
        }),
        //pohrana u persist storage  https://docs.pmnd.rs/zustand/integrations/persisting-store-storeData
        {
            name: 'language',
            // Issue with: https://docs.pmnd.rs/zustand/integrations/persisting-store-data#hydration-and-asynchronous-storages
            storage: createJSONStorage(() => zustandStorage),
        },
    ),
);
