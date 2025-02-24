"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { translations, type Language } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (section: string, key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("kz")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["kz", "ru", "en"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (section: string, key: string): string => {
    try {
      const path = section.split(".")
      let result = translations[language]

      // Navigate through the nested objects
      for (const part of path) {
        result = result[part]
      }

      return result[key] || `${section}.${key}`
    } catch (error) {
      console.error(`Translation missing for ${section}.${key} in ${language}`)
      return `${section}.${key}`
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

