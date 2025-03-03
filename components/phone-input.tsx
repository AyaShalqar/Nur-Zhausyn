"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function PhoneInput() {
  const [phone, setPhone] = useState("")
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Оставляем только цифры
    const value = e.target.value.replace(/[^\d]/g, "")
    setPhone(value)
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
            className="w-full px-4 py-3 text-lg font-medium tracking-wide"
            placeholder="Введите номер телефона"
          />
        </div>

        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
          disabled={phone.length < 10}
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