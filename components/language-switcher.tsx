"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { ChevronDown } from "lucide-react"

function LanguageSwitcherClient() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = {
    kz: "KZ",
    ru: "RU",
    en: "EN",
  }

  return (
    <div className="relative">
      <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={() => setIsOpen(!isOpen)}>
        {languages[language]}
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white rounded-md shadow-lg py-1 z-50">
          {Object.entries(languages).map(([code, label]) => (
            <button
              key={code}
              className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                language === code ? "text-amber-600" : "text-gray-700"
              }`}
              onClick={() => {
                setLanguage(code as "kz" | "ru" | "en")
                setIsOpen(false)
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function LanguageSwitcher() {
  // Только показываем плейсхолдер на сервере
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  // Показываем простой плейсхолдер на сервере, чтобы избежать гидратации
  if (!isClient) {
    return (
      <div className="relative">
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          KZ
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    )
  }
  
  // Показываем полный компонент на клиенте
  return <LanguageSwitcherClient />
}

