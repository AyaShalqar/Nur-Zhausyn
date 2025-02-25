"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Wheat, Tractor, Beef, MapPin } from "lucide-react"

export default function About() {
  const { t } = useLanguage()

  const activities = [
    {
      icon: <Wheat className="w-6 h-6 text-amber-600" />,
      key: "trading",
    },
    {
      icon: <Tractor className="w-6 h-6 text-amber-600" />,
      key: "agriculture",
    },
    {
      icon: <Beef className="w-6 h-6 text-amber-600" />,
      key: "livestock",
    },
  ]

  const regions = [
    { key: "northKazakhstan" },
    { key: "akmola" },
    { key: "kostanay" },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-6">{t("about", "title")}</h2>
            
            <div className="space-y-8">
              <p className="text-lg text-gray-600">{t("about", "description")}</p>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">{t("about", "director")}</h3>
                <p className="text-gray-600">{t("about", "directorName")}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">{t("about", "activitiesTitle")}</h3>
                <div className="grid grid-cols-1 gap-6">
                  {activities.map((activity, index) => (
                    <div 
                      key={index} 
                      className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start space-x-4">
                        {activity.icon}
                        <p className="text-gray-600">{t("about", activity.key)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">{t("about", "regionsTitle")}</h3>
                <div className="space-y-4">
                  {regions.map((region, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span>{t("about", region.key)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-24"
            >
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/sunflower-seeds.jpg"
                  alt={t("about", "imageAlt")}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

