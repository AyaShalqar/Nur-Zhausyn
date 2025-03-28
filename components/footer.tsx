"use client"

import { useLanguage } from "@/contexts/language-context"
import { Instagram, Phone } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3360-removebg-preview-hgan665EZcL46lOyxXpVImcBuOyGJa.png" 
              alt="Logo" 
              className="h-16 mb-4"
            />
            <p className="text-gray-400">
              {t("footer", "description")}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("footer", "contactTitle")}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-600" />
                <a 
                  href="tel:+77055248017" 
                  className="hover:text-amber-600 transition-colors"
                >
                  +7 705 524 8017
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("footer", "socialTitle")}</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/abylai_omirserikuly/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-600 transition-colors flex items-center space-x-2"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://wa.me/77055248017" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-600 transition-colors flex items-center space-x-2"
              >
                <svg 
                  className="h-5 w-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Nur Zhausyn Impex. {t("footer", "rights")}</p>
        </div>
      </div>
    </footer>
  )
}
