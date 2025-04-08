import { create } from "zustand";

interface ButtonClick {
  count: number;
  increment: () => void;
}

export const useButtonClick = create<ButtonClick>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
