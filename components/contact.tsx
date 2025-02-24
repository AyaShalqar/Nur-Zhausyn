"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"

type UserType = "инвестор" | "партнёр" | "поставщик"

interface FormData {
  имя: string
  телефон: string
  компания: string
  регион: string
  сообщение: string
  типПользователя: UserType
}

export default function Контакт() {
  const [formData, setFormData] = useState<FormData>({
    имя: "",
    телефон: "",
    компания: "",
    регион: "",
    сообщение: "",
    типПользователя: "инвестор",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Здесь обычно отправляются данные в API
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Симуляция запроса к API

      toast.success("Спасибо! Ваше сообщение успешно отправлено.")

      // Очистка формы
      setFormData({
        имя: "",
        телефон: "",
        компания: "",
        регион: "",
        сообщение: "",
        типПользователя: "инвестор",
      })
    } catch (error) {
      toast.error("Извините, произошла ошибка. Пожалуйста, попробуйте снова.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="контакт" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Запросить коммерческое предложение</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>
                Ваше имя <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                value={formData.имя}
                onChange={(e) => setFormData({ ...formData, имя: e.target.value })}
                className="border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label>
                Контактный телефон <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                type="tel"
                value={formData.телефон}
                onChange={(e) => setFormData({ ...formData, телефон: e.target.value })}
                className="border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label>
                Название компании <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                value={formData.компания}
                onChange={(e) => setFormData({ ...formData, компания: e.target.value })}
                className="border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label>
                Город, регион <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                value={formData.регион}
                onChange={(e) => setFormData({ ...formData, регион: e.target.value })}
                className="border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label>Сообщение</Label>
              <Textarea
                value={formData.сообщение}
                onChange={(e) => setFormData({ ...formData, сообщение: e.target.value })}
                className="min-h-[100px] border-gray-300"
              />
            </div>

            <RadioGroup
              value={formData.типПользователя}
              onValueChange={(value: UserType) => setFormData({ ...formData, типПользователя: value })}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="инвестор" id="инвестор" />
                <Label htmlFor="инвестор">Инвестор</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="партнёр" id="партнёр" />
                <Label htmlFor="партнёр">Партнёр</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="поставщик" id="поставщик" />
                <Label htmlFor="поставщик">Поставщик</Label>
              </div>
            </RadioGroup>

            <Button type="submit" disabled={isSubmitting} className="w-40 bg-red-500 hover:bg-red-600 text-white">
              {isSubmitting ? "Отправка..." : "Отправить"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
