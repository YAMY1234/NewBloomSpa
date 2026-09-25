"use client";

import { motion } from "framer-motion";
import { Clock, Heart, MapPin, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const details = [
  {
    icon: Heart,
    title: { en: "Customized Pressure", zh: "力度可调" },
    description: {
      en: "Classic Therapeutic Massage can be booked with light, medium, or deep pressure based on your preference.",
      zh: "经典理疗按摩可根据您的偏好选择轻柔、中等或深层力度。"
    }
  },
  {
    icon: Users,
    title: { en: "Couples Appointments", zh: "双人预约" },
    description: {
      en: "Couples Massage is available for two guests in 60- and 90-minute sessions.",
      zh: "双人按摩支持两位客人，可选择 60 分钟或 90 分钟疗程。"
    }
  },
  {
    icon: Clock,
    title: { en: "Open Seven Days", zh: "每周营业七天" },
    description: {
      en: "Monday 10:00 AM-8:30 PM; Tuesday-Sunday 9:30 AM-8:30 PM.",
      zh: "周一 10:00-20:30；周二至周日 9:30-20:30。"
    }
  }
];

export default function AboutPage() {
  const { language } = useLanguage();
  const lang = language as "en" | "zh";

  return (
    <div>
      <section className="relative h-[55vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-sage-50 to-primary-50">
        <div className="absolute inset-0 bg-[url('/images/head4.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
              {lang === "en" ? "About New Bloom Spa" : "关于 New Bloom Spa"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {lang === "en"
                ? "Massage, couples massage, facial care, and foot care in Round Lake, Illinois."
                : "位于伊利诺伊州 Round Lake，提供按摩、双人按摩、面部护理和足部护理。"}
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-600">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">1829 S Cedar Lake Rd, Round Lake, IL 60073-5711</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-2xl bg-[url('/images/body.jpg')] bg-cover bg-center shadow-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                {lang === "en" ? "A Calm Place to Unwind" : "宁静舒适的放松空间"}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  {lang === "en"
                    ? "New Bloom Spa offers an appointment-based menu with massage, facial care, foot care, and combination services."
                    : "New Bloom Spa 提供预约制服务，包括按摩、面部护理、足部护理和组合疗程。"}
                </p>
                <p>
                  {lang === "en"
                    ? "Service names, durations, prices, and current appointment times are available through our Square booking page."
                    : "服务名称、时长、价格和当前可预约时间均可在 Square 预约页面查看。"}
                </p>
                <p>
                  {lang === "en"
                    ? "For questions before booking, call (224) 800-9337 or email newbloomspa@gmail.com."
                    : "如在预约前有任何问题，请致电 (224) 800-9337 或发送邮件至 newbloomspa@gmail.com。"}
                </p>
              </div>
              <a
                href="https://new-bloom-spa.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                data-event-name="book"
                data-event-location="about-main-cta"
                className="inline-block btn-primary"
              >
                {lang === "en" ? "View Services & Book" : "查看服务并预约"}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-sage-50 to-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-5">
              {lang === "en" ? "Plan Your Visit" : "到店信息"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {lang === "en"
                ? "Choose the service and time that work for you on Square."
                : "请在 Square 上选择适合您的服务和时间。"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {details.map((detail, index) => (
              <motion.div
                key={detail.title.en}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-5">
                  <detail.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-3">
                  {detail.title[lang]}
                </h3>
                <p className="text-gray-600 leading-relaxed">{detail.description[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
