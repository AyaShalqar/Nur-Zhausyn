import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { Toaster } from "sonner"
import { LanguageProvider } from "@/contexts/language-context"
import Script from "next/script"

// Оптимизация загрузки шрифтов - уменьшаем subsets до необходимого минимума
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"], // Загружаем только нужные веса
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
})

// URL для сайта, используется в разных мета-тегах
const siteUrl = "https://www.nur-zhausyn.kz"
const siteImageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4463.JPG-4e4WklWhJcxVNqZh23Iy1AteBGcrxd.jpeg"
const logoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3360-removebg-preview-hgan665EZcL46lOyxXpVImcBuOyGJa.png"

// Отдельный экспорт для viewport согласно рекомендации Next.js
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
  colorScheme: "light",
}

export const metadata = {
  // Основные метаданные
  title: "Nur Zhausyn - Ведущая агропромышленная компания Казахстана",
  description: "Крупное сельскохозяйственное предприятие в Казахстане, специализирующееся на производстве и экспорте муки, зерна и других сельскохозяйственных продуктов. Высокое качество продукции и надежность поставок.",
  generator: "v0.dev",
  applicationName: "Nur Zhausyn Impex",
  keywords: ["агрокомпания", "Казахстан", "мука", "зерно", "экспорт", "сельское хозяйство", "мукомольное производство"],
  authors: [{ name: "Nur Zhausyn Impex", url: siteUrl }],
  category: "Agriculture",
  
  // Canonical URL для избежания дублирования контента
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'kk': '/',
      'ru': '/ru',
      'en': '/en',
    },
  },
  
  // Open Graph мета-теги для социальных сетей
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Nur Zhausyn - Ведущая агропромышленная компания Казахстана",
    description: "Крупное сельскохозяйственное предприятие в Казахстане. Производство и экспорт муки, зерна и других сельскохозяйственных продуктов. Высокое качество и надежность.",
    siteName: "Nur Zhausyn Impex",
    images: [
      {
        url: siteImageUrl,
        width: 1200,
        height: 630,
        alt: "Мукомольный комплекс Nur Zhausyn",
      },
    ],
    locale: "kk_KZ",
    countryName: "Kazakhstan",
  },
  
  // Twitter Card мета-теги для Twitter
  twitter: {
    card: "summary_large_image",
    title: "Nur Zhausyn - Ведущая агропромышленная компания Казахстана",
    description: "Крупное сельскохозяйственное предприятие в Казахстане. Производство и экспорт муки, зерна и других сельскохозяйственных продуктов.",
    images: [siteImageUrl],
    creator: "@nurzhausyn",
    site: "@nurzhausyn",
  },
  
  // Иконки для различных платформ
  icons: {
    icon: [
      {
        url: logoUrl,
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: logoUrl,
        sizes: "16x16",
        type: "image/png"
      }
    ],
    shortcut: logoUrl,
    apple: [
      { url: logoUrl },
      { url: logoUrl, sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: logoUrl
      }
    ]
  },
  
  // Добавляем метаданные для Core Web Vitals
  verification: {
    google: "google-site-verification-code", // Замените на ваш код
    yandex: "yandex-verification-code", // Замените на ваш код
  },
  
  manifest: "/manifest.json",
  
  other: {
    "next-size-adjust": "",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": logoUrl,
    "theme-color": "#ffffff",
    "google-site-verification": "", // Добавьте код верификации Google Search Console
    "yandex-verification": "", // Добавьте код верификации Яндекс.Вебмастер
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "msapplication-tap-highlight": "no",
  },
  
  // Robots для управления индексацией
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
    "url": siteUrl,
    "logo": logoUrl,
    "description": "Крупное сельскохозяйственное предприятие в Казахстане",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KZ",
      "addressRegion": "Северо-Казахстанская область",
      "addressLocality": "Петропавловск"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+77055248017",
      "contactType": "customer service",
      "availableLanguage": ["Russian", "Kazakh", "English"]
    },
    "sameAs": [
      "https://www.instagram.com/abylai_omirserikuly/",
      "https://wa.me/77055248017"
    ]
  }

  return (
    <html lang="kk" suppressHydrationWarning>
      <head>
        {/* Приоритизация критических соединений */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        
        {/* Предзагрузка самых важных изображений для первого экрана */}
        <link 
          rel="preload" 
          as="image" 
          href={logoUrl}
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          as="image" 
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4464.JPG-ELQt7LVZasZWk7vbT1IIozxXSt3fKU.jpeg"
          fetchPriority="high"
        />
        
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
        
        {/* Скрипт для оптимизации LCP и CLS */}
        <Script id="performance-optimization" strategy="afterInteractive">
          {`
            // Функция для оптимизации приоритетов загрузки
            function optimizeLoadingPriorities() {
              // Приоритизация ресурсов для LCP
              const lcpElement = document.querySelector('h1');
              if (lcpElement) {
                // Marking the LCP element for browser prioritization
                lcpElement.setAttribute('fetchpriority', 'high');
              }
              
              // Отложенная загрузка не важных изображений
              const allImages = document.querySelectorAll('img:not([priority="true"])');
              allImages.forEach(img => {
                if (!img.hasAttribute('loading')) {
                  img.setAttribute('loading', 'lazy');
                }
              });
              
              // Отложенная загрузка не важных скриптов
              document.addEventListener('scroll', () => {
                if (!window.nonCriticalScriptsLoaded) {
                  window.nonCriticalScriptsLoaded = true;
                  // Здесь можно загрузить дополнительные скрипты
                }
              }, { once: true });
            }
            
            // Запуск после загрузки и после гидратации React
            if (document.readyState === 'complete') {
              optimizeLoadingPriorities();
            } else {
              window.addEventListener('load', optimizeLoadingPriorities);
            }
          `}
        </Script>
      </body>
    </html>
  )
}


