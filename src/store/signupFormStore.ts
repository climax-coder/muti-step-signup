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
    (set, get) => ({
      country: "",
      step: 1,
      data: {},

      setCountry: (newCountry) => {
        const prevCountry = get().country;
        const isNew = newCountry !== prevCountry;

        if (isNew) {
          set({
            country: newCountry,
            step: 1,
            data: { country: newCountry },
          });
        }
      },

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
