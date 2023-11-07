import { create } from "zustand";

import { persist } from 'zustand/middleware'

let appStore = (set) => ({
    userData: [],
    setUserData: (userData) => set({ userData }),

    dopen: true,
    updateOpen: (dopen) => set(() => ({ dopen })),

    calc: { sign: "", num: 0, res: 0 },
    setCalc: (newCalc) => set({ calc: newCalc }),
    
    fromCurrency: '',
    toCurrency: '',

    setFromCurrency: (currency) => set({ fromCurrency: currency }),
    setToCurrency: (currency) => set({ toCurrency: currency }),

    firstAmount: 0,
    setFirstAmount: (firstAmount) => set({ firstAmount: firstAmount === '' ? 0 : Number(firstAmount) })
  });
  
  appStore = persist(appStore, { name: 'my_app_store' });
  export const useAppStore = create(appStore);