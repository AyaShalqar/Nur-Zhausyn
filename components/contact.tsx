"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"
import { useLanguage } from "@/contexts/language-context"

type UserType = "investor" | "partner" | "supplier"

interface FormData {
  name: string
  phone: string
  company: string
  region: string
  message: string
  userType: UserType
}

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    company: "",
    region: "",
    message: "",
    userType: "investor",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success(t("contact", "success"))
      setFormData({
        name: "",
        phone: "",
        company: "",
        region: "",
        message: "",
        userType: "investor",
      })
    } catch (error) {
      toast.error(t("contact", "error"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">{t("contact", "title")}</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>
                {t("contact", "name")} <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-gray-300"
                placeholder={t("contact", "name")}
              />
            </div>

            <div className="space-y-2">
              <Label>
                {t("contact", "phone")} <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-gray-300"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <div className="space-y-2">
              <Label>
                {t("contact", "company")} <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="border-gray-300"
                placeholder={t("contact", "company")}
              />
            </div>

            <div className="space-y-2">
              <Label>
                {t("contact", "region")} <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                className="border-gray-300"
                placeholder={t("contact", "region")}
              />
            </div>

            <div className="space-y-2">
              <Label>{t("contact", "message")}</Label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[100px] border-gray-300"
                placeholder={t("contact", "message")}
              />
            </div>

            <div className="space-y-2">
              <RadioGroup
                value={formData.userType}
                onValueChange={(value: UserType) => setFormData({ ...formData, userType: value })}
                className="flex flex-wrap gap-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="investor" id="investor" />
                  <Label htmlFor="investor">{t("contact", "investor")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="partner" id="partner" />
                  <Label htmlFor="partner">{t("contact", "partner")}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="supplier" id="supplier" />
                  <Label htmlFor="supplier">{t("contact", "supplier")}</Label>
                </div>
              </RadioGroup>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white"
            >
              {isSubmitting ? t("contact", "sending") : t("contact", "send")}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
