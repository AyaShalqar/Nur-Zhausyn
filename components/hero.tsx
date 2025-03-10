"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import dynamic from "next/dynamic"

// Статический каркас для начального рендеринга
function HeroSkeleton({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Заглушка цветом вместо изображения */}
      <div className="absolute inset-0 bg-amber-50">
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

// Клиентский компонент, который загружается динамически
function ClientHero() {
  const { t } = useLanguage()
  const [scrollY, setScrollY] = useState(0)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  // Обработчик прокрутки
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    handleScroll(); // Устанавливаем начальное значение
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Предзагружаем изображение
  useEffect(() => {
    const img = new Image();
    img.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4464.JPG-ELQt7LVZasZWk7vbT1IIozxXSt3fKU.jpeg";
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => console.error("Failed to load hero image");
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Заглушка отображается, когда изображение не загружено */}
      <div 
        className="absolute inset-0 bg-amber-50 transition-opacity duration-500"
        style={{
          opacity: isImageLoaded ? 0 : 1,
        }}
      />
      
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4464.JPG-ELQt7LVZasZWk7vbT1IIozxXSt3fKU.jpeg)`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center">
        <div 
          className="container mx-auto px-4"
          style={{ 
            opacity: 1,
            transform: 'translateY(0px)',
            transition: 'opacity 1s, transform 1s'
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t("hero", "title")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
            {t("hero", "subtitle")}
          </p>
          
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            style={{
              animation: 'bounce 2s infinite'
            }}
          >
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(10px) translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

// Динамически импортируем клиентский компонент
const DynamicClientHero = dynamic(() => Promise.resolve(ClientHero), {
  ssr: false, // Отключаем SSR для клиентского компонента
  loading: () => {
    // Используем хук useLanguage только на клиенте
    const { t } = useLanguage()
    return <HeroSkeleton title={t("hero", "title")} subtitle={t("hero", "subtitle")} />
  }
})

export default function Hero() {
  return <DynamicClientHero />
}
