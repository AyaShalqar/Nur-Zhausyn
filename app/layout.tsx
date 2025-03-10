import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { Toaster } from "sonner"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nur Zhausyn - Ведущая агропромышленная компания Казахстана",
  description: "Крупное сельскохозяйственное предприятие в Казахстане",
  generator: "v0.dev",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3360-removebg-preview-hgan665EZcL46lOyxXpVImcBuOyGJa.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3360-removebg-preview-hgan665EZcL46lOyxXpVImcBuOyGJa.png",
        sizes: "16x16",
        type: "image/png"
      }
    ],
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3360-removebg-preview-hgan665EZcL46lOyxXpVImcBuOyGJa.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3360-removebg-preview-hgan665EZcL46lOyxXpVImcBuOyGJa.png"
  }
}

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
    "url": "https://www.nur-zhausyn.kz",
    "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3360-removebg-preview-hgan665EZcL46lOyxXpVImcBuOyGJa.png",
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


