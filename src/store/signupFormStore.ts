import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FormState {
  country: string;
  step: number;
  data: Record<string, any>;
  setCountry: (c: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateData: (d: Record<string, any>) => void;
  reset: () => void;
}

export const useSignupFormStore = create<FormState>()(
  persist(
    (set) => ({
      country: "",
      step: 1,
      data: {},

      setCountry: (newCountry) =>
        set((state) => {
          const isNew = state.country !== newCountry;

          return {
            country: newCountry,
            step: isNew ? 2 : state.step,
            data: isNew ? { country: newCountry } : { ...state.data },
          };
        }),

      nextStep: () => set((state) => ({ step: state.step + 1 })),
      prevStep: () => set((state) => ({ step: state.step - 1 })),

      updateData: (newData) =>
        set((state) => ({
          data: { ...state.data, ...newData },
        })),

      reset: () => set({ country: "", step: 1, data: {} }),
    }),
    {
      name: "multi-step-form",
      partialize: (state) => {
        const { profileImage, ...rest } = state.data;
        return {
          country: state.country,
          step: state.step,
          data: rest,
        };
      },
    }
  )
);
