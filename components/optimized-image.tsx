"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

// Создаем простой и легкий placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="${w}" height="${h}" fill="#F1F1F1" />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  fill?: boolean
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  quality?: number
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  fill = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  quality = 75,
  objectFit = 'cover',
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  
  // Определяем, находится ли компонент в области видимости
  const [isVisible, setIsVisible] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  
  useEffect(() => {
    // Если изображение приоритетное, считаем его всегда видимым
    if (priority) {
      setIsVisible(true)
      return;
    }
    
    // Создаем наблюдатель за видимостью
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);
      
      // Если элемент появился в видимой области хотя бы раз, помечаем его как "видимый"
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '200px', // Начинаем загрузку, когда до изображения остается 200px
    });
    
    // Элемент для отслеживания
    const element = document.getElementById(`image-${src.slice(-10)}`);
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [src, priority]);

  // Генерируем уникальный ID на основе src
  const imageId = `image-${src.slice(-10)}`;

  return (
    <div 
      id={imageId}
      className={cn("overflow-hidden relative", className)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ 
        cursor: onClick ? 'pointer' : 'default',
        backgroundColor: '#F1F1F1',
      }}
    >
      {/* Показываем изображение только если оно видимо или приоритетно */}
      {(isVisible || priority) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          fill={fill}
          className={cn(
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            fill ? `object-${objectFit}` : ""
          )}
          onLoadingComplete={() => setLoading(false)}
          onError={() => setIsError(true)}
          quality={quality}
          sizes={fill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width || 700, height || 475))}`}
          loading={priority ? "eager" : "lazy"}
        />
      )}
      
      {/* Запасное изображение в случае ошибки */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <span className="text-sm">{alt || 'Изображение недоступно'}</span>
        </div>
      )}
    </div>
  )
} 