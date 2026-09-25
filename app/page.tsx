"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Heart, 
  Leaf, 
  Clock,
  Award,
  Users,
  ArrowRight,
  Footprints,
  Calendar,
  MapPin,
  Phone
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Featured services data
const featuredServicesData = [
  {
    id: "couples-60",
    title: { en: "Couples Massage (60 min)", zh: "双人按摩 (60分钟)" },
    subtitle: { en: "$80 Each", zh: "每人 $80" },
    duration: { en: "1 hr", zh: "1小时" },
    price: "$160",
    description: {
      en: "A side-by-side massage session for two in a calm, private setting. Pressure can be customized for each guest.",
      zh: "两人在宁静私密的环境中并排享受按摩，每位客人的力度均可按需求调整。"
    },
    image: "/images/body.jpg"
  },
  {
    id: "classic-60",
    title: { en: "Classic Therapeutic Massage (60 min)", zh: "经典理疗按摩 (60分钟)" },
    duration: { en: "1 hr", zh: "1小时" },
    price: "$80",
    description: {
      en: "A full-body massage session with light, medium, or deep pressure based on your preference.",
      zh: "全身按摩疗程，可根据您的偏好选择轻柔、中等或深层力度。"
    },
    image: "/images/body2.jpg"
  },
  {
    id: "signature-60",
    title: { en: "Signature Total Relief Massage (60 min)", zh: "招牌全身舒缓按摩 (60分钟)" },
    duration: { en: "1 hr", zh: "1小时" },
    price: "$100",
    description: {
      en: "A signature full-body massage session with focused attention to the areas you identify at check-in.",
      zh: "招牌全身按摩，可在到店沟通时说明希望重点关注的部位。"
    },
    image: "/images/head.jpg"
  },
  {
    id: "foot-40",
    title: { en: "Foot Care Therapy (40 min)", zh: "足部护理 (40分钟)" },
    duration: { en: "40 mins", zh: "40分钟" },
    price: "$50",
    description: {
      en: "A 40-minute foot care session in a calm setting.",
      zh: "在宁静环境中进行的 40 分钟足部护理。"
    },
    image: null
  },
  {
    id: "facial-30",
    title: { en: "Essential Facial Care (30 min)", zh: "基础面部护理 (30分钟)" },
    duration: { en: "30 mins", zh: "30分钟" },
    price: "$50",
    description: {
      en: "A 30-minute essential facial care session.",
      zh: "30 分钟基础面部护理。"
    },
    image: "/images/head2.jpg"
  },
  {
    id: "facial-60",
    title: { en: "Professional Facial Treatment (60 min)", zh: "专业面部护理 (60分钟)" },
    duration: { en: "1 hr", zh: "1小时" },
    price: "$80",
    description: {
      en: "A 60-minute professional facial care session with time for multiple care steps.",
      zh: "60 分钟专业面部护理，为多项护理步骤预留时间。"
    },
    image: "/images/head4.jpg"
  }
];

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const lang = language as 'en' | 'zh';

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-100 via-sage-50 to-primary-50">
        <div className="absolute inset-0 bg-[url('/images/head.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary-600/10 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary-600" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight">
              {t.home.hero.title1}
              <br />
              <span className="text-primary-600">{t.home.hero.title2}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.home.hero.subtitle}
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a 
                href="https://new-bloom-spa.square.site/" 
                target="_blank"
                rel="noopener noreferrer"
                data-event-name="book"
                data-event-location="home-hero"
                className="btn-primary text-lg"
              >
                {t.home.hero.bookNow}
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </a>
              <Link href="/services" className="btn-secondary text-lg">
                {t.home.hero.viewServices}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-8 pt-8"
            >
              <div className="flex items-center space-x-2 text-gray-700">
                <Award className="w-5 h-5 text-primary-600" />
                <span className="font-medium">{t.home.hero.certifiedTherapists}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Users className="w-5 h-5 text-primary-600" />
                <span className="font-medium">{t.home.hero.happyClients}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Clock className="w-5 h-5 text-primary-600" />
                <span className="font-medium">{t.home.hero.flexibleHours}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-600 flex justify-center">
            <div className="w-1.5 h-3 bg-primary-600 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Visit Actions */}
      <section className="border-y border-sage-100 bg-white py-8" aria-labelledby="visit-actions-title">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 id="visit-actions-title" className="text-2xl font-serif font-bold text-gray-900">
              {lang === "en" ? "Plan Your Visit" : "安排到店"}
            </h2>
            <p className="mt-2 text-gray-600">
              {lang === "en"
                ? "Monday 10:00 AM-8:30 PM · Tuesday-Sunday 9:30 AM-8:30 PM"
                : "周一 10:00-20:30 · 周二至周日 9:30-20:30"}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <a
              href="https://new-bloom-spa.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              data-event-name="book"
              data-event-location="home-visit-actions"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-sage-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-sage-800"
            >
              <Calendar className="h-5 w-5" />
              {lang === "en" ? "Book on Square" : "通过 Square 预约"}
            </a>
            <a
              href="tel:+12248009337"
              data-event-name="phone"
              data-event-location="home-visit-actions"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-sage-700 px-5 py-3 font-semibold text-sage-800 transition-colors hover:bg-sage-50"
            >
              <Phone className="h-5 w-5" />
              {lang === "en" ? "Call (224) 800-9337" : "致电 (224) 800-9337"}
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=1829%20S%20Cedar%20Lake%20Rd%2C%20Round%20Lake%2C%20IL%2060073-5711"
              target="_blank"
              rel="noopener noreferrer"
              data-event-name="directions"
              data-event-location="home-visit-actions"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-sage-700 px-5 py-3 font-semibold text-sage-800 transition-colors hover:bg-sage-50"
            >
              <MapPin className="h-5 w-5" />
              {lang === "en" ? "Get Directions" : "获取路线"}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
            >
              {t.home.whyChoose.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {t.home.whyChoose.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Heart,
                title: t.home.whyChoose.care.title,
                description: t.home.whyChoose.care.description
              },
              {
                icon: Leaf,
                title: t.home.whyChoose.natural.title,
                description: t.home.whyChoose.natural.description
              },
              {
                icon: Sparkles,
                title: t.home.whyChoose.professional.title,
                description: t.home.whyChoose.professional.description
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-gradient-to-br from-sage-50 to-primary-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-primary-50">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
            >
              {t.home.featuredServices.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {t.home.featuredServices.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredServicesData.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {service.image ? (
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                ) : (
                  <div className="h-48 bg-gradient-to-br from-sage-100 to-primary-100 flex items-center justify-center" aria-hidden="true">
                    <Footprints className="w-16 h-16 text-sage-600" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-serif font-semibold text-gray-900 min-w-0 sm:flex-1 sm:pr-2">
                      {service.title[lang]}
                    </h3>
                    <span className="text-xl font-bold text-primary-600 whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  {service.subtitle && (
                    <p className="text-sm text-primary-600 font-medium mb-2">
                      {service.subtitle[lang]}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mb-3 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.duration[lang]}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description[lang]}
                  </p>
                  <a
                    href="https://new-bloom-spa.square.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-event-name="book"
                    data-event-location="home-featured-service"
                    data-service-id={service.id}
                    className="block text-center py-3 px-6 rounded-full font-medium bg-sage-600 text-white hover:bg-sage-700 transition-colors"
                  >
                    {t.home.hero.bookNow}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/services" className="btn-secondary text-lg">
              {t.home.featuredServices.viewAll}
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-sage-600 to-sage-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              {t.home.cta.title}
            </h2>
            <p className="text-xl text-sage-100 leading-relaxed">
              {t.home.cta.subtitle}
              <br />
              {t.home.cta.subtitle2}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://new-bloom-spa.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                data-event-name="book"
                data-event-location="home-footer-cta"
                className="px-10 py-4 bg-white text-sage-600 rounded-full font-bold text-lg hover:bg-sage-50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                {t.home.cta.bookNow}
              </a>
              <Link
                href="/contact"
                className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-sage-600 transition-all duration-300"
              >
                {t.home.cta.contactUs}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
