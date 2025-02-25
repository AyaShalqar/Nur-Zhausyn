"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Truck, Train, Wheat, Factory } from "lucide-react"

export default function Capabilities() {
  const { t } = useLanguage()

  const capabilities = [
    {
      icon: <Train className="w-12 h-12 text-amber-600" />,
      key: "flour",
      value: "100",
      unit: t("capabilities", "wagonsPerMonth")
    },
    {
      icon: <Train className="w-12 h-12 text-amber-600" />,
      key: "bran",
      value: "300",
      unit: t("capabilities", "wagonsPerMonth")
    },
    {
      icon: <Truck className="w-12 h-12 text-amber-600" />,
      key: "delivery",
    },
    {
      icon: <Wheat className="w-12 h-12 text-amber-600" />,
      key: "directPurchase",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {capabilities.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("capabilities", `${item.key}Title`)}
              </h3>
              {item.value && (
                <p className="text-3xl font-bold text-amber-600 mb-2">
                  {item.value} <span className="text-base">{item.unit}</span>
                </p>
              )}
              <p className="text-gray-600">
                {t("capabilities", `${item.key}Description`)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 