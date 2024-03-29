import { create } from 'zustand';

type AppState = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    multiply: (value: number) => void;
    divide: (value: number) => void;
};

export const useAppStore = create<AppState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
    multiply: (value) => set((state) => ({ count: state.count * value })),
    divide: (value) => set((state) => ({ count: state.count / value })),
}));
