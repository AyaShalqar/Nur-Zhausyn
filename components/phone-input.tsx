"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function PhoneInput() {
  const [phone, setPhone] = useState("")
  
  const formatPhoneNumber = (value: string) => {
    // Убираем все нецифровые символы
    const numbers = value.replace(/[^\d]/g, "")
    
    // Форматируем номер как +7(XXX)XXX-XX-XX
    if (numbers.length <= 1) return "+7"
    if (numbers.length <= 4) return `+7(${numbers.slice(1)}`
    if (numbers.length <= 7) return `+7(${numbers.slice(1, 4)})${numbers.slice(4)}`
    if (numbers.length <= 9) return `+7(${numbers.slice(1, 4)})${numbers.slice(4, 7)}-${numbers.slice(7)}`
    return `+7(${numbers.slice(1, 4)})${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    if (formatted.length <= 17) { // +7(XXX)XXX-XX-XX = 17 символов
      setPhone(formatted)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg"
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Свяжитесь с нами
        </h3>
        
        <div className="relative">
          <Input
            type="tel"
            value={phone}
            onChange={handleChange}
            className="w-full px-4 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+7(XXX)XXX-XX-XX"
          />
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <span className="text-gray-500">
              {!phone && "+7"}
            </span>
          </div>
        </div>

        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
          disabled={phone.length < 17}
        >
          Отправить
        </Button>

        <p className="text-sm text-gray-500 text-center">
          Нажимая кнопку «Отправить», вы соглашаетесь с условиями обработки персональных данных
        </p>
      </div>
    </motion.div>
  )
} 