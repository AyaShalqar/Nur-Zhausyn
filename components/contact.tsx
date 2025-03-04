"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const countries = [
  { code: "kz", name: "Казахстан", dial: "+7" },
  { code: "ru", name: "Россия", dial: "+7" },
  { code: "uz", name: "Узбекистан", dial: "+998" },
  { code: "kg", name: "Кыргызстан", dial: "+996" },
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    city: "",
    message: "",
    type: "investor"
  })

  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "") 
    if (numbers.length <= 1) return selectedCountry.dial
    if (numbers.length <= 4) return `${selectedCountry.dial}(${numbers.slice(1)}`
    if (numbers.length <= 7) return `${selectedCountry.dial}(${numbers.slice(1, 4)})${numbers.slice(4)}`
    if (numbers.length <= 9) return `${selectedCountry.dial}(${numbers.slice(1, 4)})${numbers.slice(4, 7)}-${numbers.slice(7)}`
    return `${selectedCountry.dial}(${numbers.slice(1, 4)})${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = "77718739263"

    const message = `🚀 Новая заявка с сайта Nur Zhausyn Impex:
    
    👤 Имя: ${formData.name}
    📞 Телефон: ${formData.phone}
    🏢 Компания: ${formData.company}
    📍 Город: ${formData.city}
    💬 Сообщение: ${formData.message || "Нет сообщения"}
    🏷 Тип: ${formData.type === "investor" ? "Инвестор" : formData.type === "partner" ? "Серіктес" : "Жеткізуші"}
    `

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")

    setFormData({
      name: "",
      phone: "",
      company: "",
      city: "",
      message: "",
      type: "investor"
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === "phone") {
      setFormData({ ...formData, phone: formatPhoneNumber(value) })
    }
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Коммерциялық ұсыныс</h2>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div>
            <label className="block text-sm font-medium mb-2">
              Сіздің атыңыз <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
              placeholder="Введите ваше имя"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              📞 Контактный телефон <span className="text-red-500">*</span>
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Введите номер телефона"
              className="w-full px-4 py-3 text-lg rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Қала, аймақ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
              placeholder="Ваш город"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Хабарлама
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 h-32"
              placeholder="Ваше сообщение"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg transition-colors"
          >
            Жіберу
          </Button>
        </form>
      </div>
    </div>
  )
}
