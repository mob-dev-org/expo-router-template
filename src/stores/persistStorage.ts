import { StateStorage } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';

// It is recommended that you re-use this instance throughout your entire app instead of creating a new instance each time, so export the storage object.
// use it for persisting store, instead of async storage
export const storage = new MMKV();

// custom storage for zustand purposes
// https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md#how-can-i-use-a-custom-storage-engine
export const zustandStorage: StateStorage = {
    setItem: (name, value) => {
        return storage.set(name, value);
    },
    getItem: (name) => {
        const value = storage.getString(name);
        return value ?? null;
    },
    removeItem: (name) => {
        return storage.delete(name);
    },
};
