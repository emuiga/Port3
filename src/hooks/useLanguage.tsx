"use client"
import { create } from "zustand"

interface LanguageStore {
  language: string
  setLanguage: (lang: string) => void
}

// Fix  type
const useLanguage = create<LanguageStore>((set) => ({
  language: "en",
  setLanguage: (lang: string) => set({ language: lang })
}))

export default useLanguage 