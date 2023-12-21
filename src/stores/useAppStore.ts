import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type AppState = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};

export const useAppStore = create<AppState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}));
type LanguageName = {
    language: string;
    setlanguage: (currentLanguage) => void;
};

export const useLanguageName = create<LanguageName, [['zustand/persist', unknown]]>(
    persist(
        (set) => ({
            language: 'en- US',
            setlanguage: (currentLanguage) => {
                set((state) => ({
                    ...state,
                    language: currentLanguage,
                }));
            },
        }),
        //pohrana u asyncstorage  https://docs.pmnd.rs/zustand/integrations/persisting-store-storeData
        {
            name: 'language-name',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);
