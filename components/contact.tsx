"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

const countries = [
  { code: "kz", name: "Казахстан", dial: "+7" },
  { code: "ru", name: "Россия", dial: "+7" },
  { code: "uz", name: "Узбекистан", dial: "+998" },
  { code: "kg", name: "Кыргызстан", dial: "+996" },
]

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    city: "",
    message: "",
    type: "investor"
  })

  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
    const whatsappNumber = "77718739263" // Замените на ваш номер (без "+")
    
    const message = `🚀 Новая заявка с сайта Nur Zhausyn Impex:
    
    👤 Имя: ${formData.name}
    📞 Телефон: ${selectedCountry.dial}${formData.phone}
    🏢 Компания: ${formData.company}
    📍 Город: ${formData.city}
    💬 Сообщение: ${formData.message || "Нет сообщения"}
    🏷 Тип: ${formData.type === "investor" ? "Инвестор" : formData.type === "partner" ? "Серіктес" : "Жеткізуші"}
    `
  
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  
    window.open(whatsappURL, "_blank") // Открывает WhatsApp в новом окне
  
    setFormData({
      name: "",
      phone: "",
      company: "",
      city: "",
      message: "",
      type: "investor"
    })
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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Введите ваше имя"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Байланыс телефоны <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <select
                value={selectedCountry.code}
                onChange={(e) => {
                  const country = countries.find(c => c.code === e.target.value)
                  if (country) setSelectedCountry(country)
                }}
                className="w-1/3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                {countries.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.name} ({country.dial})
                  </option>
                ))}
              </select>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={(e) => {
                  // Разрешаем только цифры
                  const value = e.target.value.replace(/\D/g, '')
                  setFormData({ ...formData, phone: value })
                }}
                className="w-2/3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Номер телефона"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Компания атауы <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Название компании"
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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent h-32"
              placeholder="Ваше сообщение"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="investor"
                checked={formData.type === "investor"}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="text-amber-600 focus:ring-amber-500"
              />
              <span>Инвестор</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="partner"
                checked={formData.type === "partner"}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="text-amber-600 focus:ring-amber-500"
              />
              <span>Серіктес</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="supplier"
                checked={formData.type === "supplier"}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="text-amber-600 focus:ring-amber-500"
              />
              <span>Жеткізуші</span>
            </label>
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