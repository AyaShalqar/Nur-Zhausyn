import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { Toaster } from "sonner"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Нур Жаусын",
    "alternateName": "Nur Jauzyn",
    "url": "https://ваш-домен.kz",
    "logo": "https://ваш-домен.kz/logo.png",
    "description": "Крупное сельскохозяйственное предприятие в Казахстане",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KZ",
      "addressRegion": "Северо-Казахстанская область",
      "addressLocality": "Петропавловск"
    }
  }

  return (
    <html lang="kk" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <LanguageProvider>
          {children}
          <Toaster position="top-center" />
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'
export const metadata = {
      generator: 'v0.dev'
    };

