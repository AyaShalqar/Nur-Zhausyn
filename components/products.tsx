"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    title: "Премиальная пшеница",
    description: "Высококачественные сорта мягкой и твердой пшеницы, соответствующие международным стандартам",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4461.JPG-xfpuQcohBY6ObQSps6qWrUYFlTQCDA.jpeg",
  },
  {
    title: "Рафинированная мука",
    description: "Мука высшего сорта, идеально подходящая для коммерческого и промышленного использования",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4469.JPG-knCk3Gkkfu4Gs4JcmqqZCULqphplpo.jpeg",
  },
  {
    title: "Пшеничные отруби",
    description: "Питательные пшеничные отруби для кормов и промышленных нужд",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4470.JPG-S2YlgYzS9LNzzogg5cUOqY3dVB9znU.jpeg",
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Наши продукты</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Продукция премиального качества, соответствующая международным стандартам
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}