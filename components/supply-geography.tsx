"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function SupplyGeography() {
  const { t } = useLanguage()

  const countries = [
    { key: "kazakhstan", flag: "🇰🇿" },
    { key: "russia", flag: "🇷🇺" },
    { key: "china", flag: "🇨🇳" },
    { key: "uzbekistan", flag: "🇺🇿" },
    { key: "tajikistan", flag: "🇹🇯" },
    { key: "afghanistan", flag: "🇦🇫" },
    { key: "azerbaijan", flag: "🇦🇿" },
    { key: "turkey", flag: "🇹🇷" },
    { key: "iran", flag: "🇮🇷" },
    { key: "georgia", flag: "🇬🇪" },
    { key: "turkmenistan", flag: "🇹🇲" },
    { key: "kyrgyzstan", flag: "🇰🇬" },
    { key: "uae", flag: "🇦🇪" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">
              {t("supplyGeography", "title")}
            </h2>
            <p className="text-lg max-w-4xl mx-auto text-gray-600">
              {t("supplyGeography", "description")}
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto w-full h-[200px] rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide1.jpg-uJ8vNU8Doktk9TouuYzpjDk0Xnm8rI.jpeg"
              alt="Supply Geography Map"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="text-xl">{country.flag}</span>
                <span className="text-sm text-gray-700">
                  {t("supplyGeography.countries", country.key)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

