"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const countryFlags = [
  { code: "🇰🇿", key: "kazakhstan" },
  { code: "🇷🇺", key: "russia" },
  { code: "🇨🇳", key: "china" },
  { code: "🇺🇿", key: "uzbekistan" },
  { code: "🇹🇯", key: "tajikistan" },
  { code: "🇦🇫", key: "afghanistan" },
  { code: "🇦🇿", key: "azerbaijan" },
]

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">{t("about", "title")}</h2>
            <p className="text-lg text-gray-600 mb-6">{t("about", "description")}</p>
            <Card className="bg-amber-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{t("about", "regions")}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {countryFlags.map((country) => (
                    <div key={country.key} className="flex items-center space-x-2">
                      <span>{country.code}</span>
                      <span>{t("about.countries", country.key)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4463.JPG-4e4WklWhJcxVNqZh23Iy1AteBGcrxd.jpeg"
              alt={t("about", "imageAlt")}
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

