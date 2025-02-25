"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function Infrastructure() {
  const { t } = useLanguage()

  const facilities = [
    {
      key: "storage",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4468.JPG-8JIOu2DN0yCODTiG10qmdmg58ojjFa.jpeg",
    },
    {
      key: "railway",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4465.JPG-BZqg8g9JyRhZxJWXi3oQzSM9mv5wsp.jpeg",
    },
    {
      key: "quality",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4462.JPG-Gf94R4Y6Zr4nqwrQLVQ22jM4yQ3rBE.jpeg",
    },
  ]

  return (
    <section id="infrastructure" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t("infrastructure", "title")}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t("infrastructure", "subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-80 overflow-hidden rounded-lg">
                <Image
                  src={facility.image}
                  alt={t(`infrastructure.${facility.key}`, "title")}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:opacity-75" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`infrastructure.${facility.key}`, "title")}
                  </h3>
                  <p className="text-gray-200">
                    {t(`infrastructure.${facility.key}`, "description")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
