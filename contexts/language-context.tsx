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
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["kz", "ru", "en"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem("language", lang)
    }
  }

  const t = (section: string, key: string): string => {
    try {
      // Безопасно получаем перевод по пути
      let currentTranslations = translations[language];
      
      // Если секция содержит точки, это путь к вложенному объекту
      const path = section.split(".");
      
      // Безопасно проходим по вложенным объектам
      let result: any = currentTranslations;
      for (const part of path) {
        // Проверяем, существует ли свойство
        if (result && typeof result === 'object' && part in result) {
          result = result[part as keyof typeof result];
        } else {
          return `${section}.${key}`; // Возвращаем путь в качестве fallback
        }
      }
      
      // Проверяем, существует ли ключ
      if (result && typeof result === 'object' && key in result) {
        return result[key as keyof typeof result];
      }
      
      return `${section}.${key}`; // Fallback
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

