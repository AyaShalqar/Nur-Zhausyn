"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const facilities = [
  {
    title: "Современное хранение",
    description: "Передовые зернохранилища",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4468.JPG-8JIOu2DN0yCODTiG10qmdmg58ojjFa.jpeg",
  },
  {
    title: "Железнодорожный транспорт",
    description: "Эффективная сеть железнодорожной логистики",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4465.JPG-BZqg8g9JyRhZxJWXi3oQzSM9mv5wsp.jpeg",
  },
  {
    title: "Контроль качества",
    description: "Строгие процессы контроля качества",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4462.JPG-Gf94R4Y6Zr4nqwrQLVQ22jM4yQ3rBE.jpeg",
  },
]

export default function Infrastructure() {
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
          <h2 className="text-4xl font-bold mb-4">Наша инфраструктура</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Передовые объекты и логистическая сеть, поддерживающие нашу деятельность
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
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:opacity-75" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-200">{facility.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
