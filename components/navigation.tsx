"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"

export default function Navigation() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3360-removebg-preview-hgan665EZcL46lOyxXpVImcBuOyGJa.png"
              alt="Nur Zhausyn Impex Logo"
              width={300}
              height={50}
              className="h-12 w-auto cursor-pointer"
              onClick={() => scrollToSection("hero")}
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-800 hover:text-amber-600 transition-colors"
            >
              {t("nav", "about")}
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-800 hover:text-amber-600 transition-colors"
            >
              {t("nav", "products")}
            </button>
            <button
              onClick={() => scrollToSection("infrastructure")}
              className="text-gray-800 hover:text-amber-600 transition-colors"
            >
              {t("nav", "infrastructure")}
            </button>
            <Button
              variant="default"
              className="bg-amber-600 hover:bg-amber-700"
              onClick={() => scrollToSection("contact")}
            >
              {t("nav", "contact")}
            </Button>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-20 left-0 w-full shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-gray-800 hover:text-amber-600"
              >
                {t("nav", "about")}
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left text-gray-800 hover:text-amber-600"
              >
                {t("nav", "products")}
              </button>
              <button
                onClick={() => scrollToSection("infrastructure")}
                className="block w-full text-left text-gray-800 hover:text-amber-600"
              >
                {t("nav", "infrastructure")}
              </button>
              <Button
                variant="default"
                className="w-full bg-amber-600 hover:bg-amber-700"
                onClick={() => scrollToSection("contact")}
              >
                {t("nav", "contact")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

