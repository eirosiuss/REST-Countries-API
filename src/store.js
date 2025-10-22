import { create } from "zustand";

export const useStore = create((set) => ({
  countries: [],
  fetchCountries: async () => {
    set({ error: null });
    const url = "https://restcountries.com/v3.1/independent?status=true";
    try {
      const response = await fetch(url, { method: "GET" });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      set({ countries: result });
    } catch (error) {
      set({ error: error });
    }
  },
}));
