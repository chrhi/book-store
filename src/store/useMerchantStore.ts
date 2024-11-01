import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface MerchantState {
  merchantId: number | null;
  domain: string | null;
  merchantName: string | null;
  theme: {
    primary: string;
    secondary: string;
    // Add more theme properties as needed
  };
  // State actions
  setMerchant: (merchantId: number, domain: string) => void;
  setMerchantDetails: (details: Partial<MerchantState>) => void;
  resetMerchant: () => void;
}

const initialState = {
  merchantId: null,
  domain: null,
  merchantName: null,
  theme: {
    primary: "#000000",
    secondary: "#ffffff",
  },
};

export const useMerchantStore = create<MerchantState>()(
  persist(
    (set) => ({
      ...initialState,

      setMerchant: (merchantId: number, domain: string) =>
        set({ merchantId, domain }),

      setMerchantDetails: (details: Partial<MerchantState>) =>
        set((state) => ({
          ...state,
          ...details,
        })),

      resetMerchant: () => set(initialState),
    }),
    {
      name: "merchant-storage",
      storage: createJSONStorage(() => sessionStorage), // Using sessionStorage instead of localStorage
      partialize: (state) => ({
        merchantId: state.merchantId,
        domain: state.domain,
        theme: state.theme,
      }),
    }
  )
);
