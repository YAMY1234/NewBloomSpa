"use client";

import { motion } from "framer-motion";
import { Clock, Heart, Sparkles, Footprints, LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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

// Type definitions
interface BilingualText {
  en: string;
  zh: string;
}

interface ServiceItem {
  id: string;
  title: BilingualText;
  subtitle?: BilingualText;
  duration: BilingualText;
  price: string;
  priceNote?: BilingualText;
  description: BilingualText;
}

interface ServiceCategory {
  title: BilingualText;
  icon: LucideIcon;
  color: string;
  items: ServiceItem[];
}

// Service data with bilingual support
const servicesData: Record<string, ServiceCategory> = {
  massage: {
    title: { en: "Massage Services", zh: "按摩服务" },
    icon: Heart,
    color: "from-primary-500 to-primary-700",
    items: [
      {
        id: "couples-60",
        title: { en: "Couples Massage (60 min)", zh: "双人按摩 (60分钟)" },
        subtitle: { en: "$80 Each", zh: "每人 $80" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$160.00",
        priceNote: { en: "for two", zh: "双人价" },
        description: {
          en: "A side-by-side massage session for two in a calm, private setting. Pressure can be customized for each guest.",
          zh: "两人在宁静私密的环境中并排享受按摩，每位客人的力度均可按需求调整。"
        },
      },
      {
        id: "couples-90",
        title: { en: "Couples Massage (90 min)", zh: "双人按摩 (90分钟)" },
        subtitle: { en: "$120 Each", zh: "每人 $120" },
        duration: { en: "1 hr 30 mins", zh: "1小时30分钟" },
        price: "$240.00",
        priceNote: { en: "for two", zh: "双人价" },
        description: {
          en: "A longer side-by-side massage session for two in a calm, private setting. Pressure can be customized for each guest.",
          zh: "两人在宁静私密的环境中并排享受延长版按摩，每位客人的力度均可按需求调整。"
        },
      },
      {
        id: "classic-30",
        title: { en: "Classic Therapeutic Massage (30 min)", zh: "经典理疗按摩 (30分钟)" },
        subtitle: { en: "Light / Medium / Deep pressure", zh: "轻柔 / 中等 / 深层力度" },
        duration: { en: "30 mins", zh: "30分钟" },
        price: "$50.00",
        description: {
          en: "A focused massage session for selected areas. Pressure can be customized to your comfort level.",
          zh: "针对所选部位的按摩疗程，力度可根据您的舒适度进行调整。"
        },
      },
      {
        id: "classic-60",
        title: { en: "Classic Therapeutic Massage (60 min)", zh: "经典理疗按摩 (60分钟)" },
        subtitle: { en: "Light / Medium / Deep pressure", zh: "轻柔 / 中等 / 深层力度" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$80.00",
        description: {
          en: "A full-body massage session with light, medium, or deep pressure based on your preference.",
          zh: "全身按摩疗程，可根据您的偏好选择轻柔、中等或深层力度。"
        },
      },
      {
        id: "classic-90",
        title: { en: "Classic Therapeutic Massage (90 min)", zh: "经典理疗按摩 (90分钟)" },
        subtitle: { en: "Light / Medium / Deep pressure", zh: "轻柔 / 中等 / 深层力度" },
        duration: { en: "1 hr 30 mins", zh: "1小时30分钟" },
        price: "$120.00",
        description: {
          en: "A longer full-body massage session with additional time and customizable pressure.",
          zh: "延长版全身按摩，提供更多时间，力度可按需求调整。"
        },
      },
      {
        id: "signature-60",
        title: { en: "Signature Total Relief Massage (60 min)", zh: "招牌全身舒缓按摩 (60分钟)" },
        subtitle: { en: "Signature full-body session", zh: "招牌全身按摩" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$100.00",
        description: {
          en: "A signature full-body massage session with focused attention to the areas you identify at check-in.",
          zh: "招牌全身按摩，可在到店沟通时说明希望重点关注的部位。"
        },
      },
      {
        id: "signature-90",
        title: { en: "Signature Total Relief Massage (90 min)", zh: "招牌全身舒缓按摩 (90分钟)" },
        subtitle: { en: "Signature full-body session", zh: "招牌全身按摩" },
        duration: { en: "1 hr 30 mins", zh: "1小时30分钟" },
        price: "$140.00",
        description: {
          en: "A longer signature full-body massage session with additional time for the areas you identify at check-in.",
          zh: "延长版招牌全身按摩，为到店沟通时指定的重点部位提供更多时间。"
        },
      },
      {
        id: "lymphatic-60",
        title: { en: "Full Body Lymphatic Drainage Massage (60 min)", zh: "全身淋巴引流按摩 (60分钟)" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$100.00",
        description: {
          en: "A full-body session using gentle, rhythmic lymphatic-drainage massage techniques in a calm setting.",
          zh: "在宁静环境中使用轻柔、有节奏的淋巴引流按摩手法进行全身护理。"
        },
      },
      {
        id: "lymphatic-90",
        title: { en: "Full Body Lymphatic Drainage Massage (90 min)", zh: "全身淋巴引流按摩 (90分钟)" },
        duration: { en: "1 hr 30 mins", zh: "1小时30分钟" },
        price: "$140.00",
        description: {
          en: "A longer full-body session using gentle, rhythmic lymphatic-drainage massage techniques.",
          zh: "延长版全身护理，使用轻柔、有节奏的淋巴引流按摩手法。"
        },
      },
      {
        id: "neck-shoulder",
        title: { en: "Neck & Shoulder Care", zh: "颈肩护理" },
        subtitle: { en: "Gentle neck and shoulder session", zh: "轻柔颈肩护理" },
        duration: { en: "30 mins", zh: "30分钟" },
        price: "$50.00",
        description: {
          en: "A focused neck and shoulder session using light, soothing massage techniques.",
          zh: "专注于颈部和肩部，采用轻柔舒缓的按摩手法。"
        },
      },
      {
        id: "cupping",
        title: { en: "Cupping Therapy", zh: "拔罐疗法" },
        subtitle: { en: "Traditional cupping session", zh: "传统拔罐护理" },
        duration: { en: "30 mins", zh: "30分钟" },
        price: "$50.00",
        description: {
          en: "A 30-minute session using traditional cupping techniques.",
          zh: "使用传统拔罐手法的 30 分钟护理。"
        },
      }
    ]
  },
  foot: {
    title: { en: "Foot Care", zh: "足部护理" },
    icon: Footprints,
    color: "from-sage-500 to-sage-700",
    items: [
      {
        id: "foot-40",
        title: { en: "Foot Care Therapy (40 min)", zh: "足部护理 (40分钟)" },
        duration: { en: "40 mins", zh: "40分钟" },
        price: "$50.00",
        description: {
          en: "A 40-minute foot care session in a calm setting.",
          zh: "在宁静环境中进行的 40 分钟足部护理。"
        },
      },
      {
        id: "foot-60",
        title: { en: "Premium Foot Care Therapy (60 min)", zh: "尊享足部护理 (60分钟)" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$65.00",
        description: {
          en: "A longer foot care session with additional time for massage and care.",
          zh: "延长版足部护理，为足部按摩和护理提供更多时间。"
        },
      },
      {
        id: "foot-body-60",
        title: { en: "Foot & Body Combo (60 min)", zh: "足部+身体组合 (60分钟)" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$80.00",
        description: {
          en: "A combined foot care and body massage session.",
          zh: "足部护理与身体按摩的组合疗程。"
        },
      },
      {
        id: "foot-body-90",
        title: { en: "Foot & Body Combo (90 min)", zh: "足部+身体组合 (90分钟)" },
        duration: { en: "1 hr 30 mins", zh: "1小时30分钟" },
        price: "$120.00",
        description: {
          en: "A longer combined foot care and body massage session.",
          zh: "延长版足部护理与身体按摩组合疗程。"
        },
      }
    ]
  },
  facial: {
    title: { en: "Facial Care", zh: "面部护理" },
    icon: Sparkles,
    color: "from-primary-400 to-sage-600",
    items: [
      {
        id: "facial-30",
        title: { en: "Essential Facial Care (30 min)", zh: "基础面部护理 (30分钟)" },
        subtitle: { en: "Essential facial care", zh: "基础面部护理" },
        duration: { en: "30 mins", zh: "30分钟" },
        price: "$50.00",
        description: {
          en: "A 30-minute essential facial care session.",
          zh: "30 分钟基础面部护理。"
        },
      },
      {
        id: "facial-60",
        title: { en: "Professional Facial Treatment (60 min)", zh: "专业面部护理 (60分钟)" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$80.00",
        description: {
          en: "A 60-minute professional facial care session with time for multiple care steps.",
          zh: "60 分钟专业面部护理，为多项护理步骤预留时间。"
        },
      },
      {
        id: "facial-90",
        title: { en: "Premium Classic Facial (90 min)", zh: "尊享经典面部护理 (90分钟)" },
        duration: { en: "1 hr 30 mins", zh: "1小时30分钟" },
        price: "$120.00",
        description: {
          en: "A 90-minute facial care session with additional time for a more unhurried experience.",
          zh: "90 分钟面部护理，提供更充裕的护理时间。"
        },
      },
      {
        id: "facial-body-60",
        title: { en: "Facial & Body Combo (60 min)", zh: "面部+身体组合 (60分钟)" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$80.00",
        description: {
          en: "A combined facial care and body massage session.",
          zh: "面部护理与身体按摩的组合疗程。"
        },
      },
      {
        id: "facial-body-90",
        title: { en: "Facial & Body Combo (90 min)", zh: "面部+身体组合 (90分钟)" },
        duration: { en: "1 hr 30 mins", zh: "1小时30分钟" },
        price: "$120.00",
        description: {
          en: "A longer combined facial care and body massage session.",
          zh: "延长版面部护理与身体按摩组合疗程。"
        },
      }
    ]
  }
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const lang = language as 'en' | 'zh';

  const texts = {
    hero: {
      title: { en: "Our Services", zh: "服务项目" },
      subtitle: { en: "Professional care services for your perfect relaxation experience", zh: "专业的护理服务，为您打造完美的放松体验" }
    },
    bookNow: { en: "Book Now", zh: "立即预约" },
    cta: {
      title: { en: "Ready to Begin Your Relaxation Journey?", zh: "准备好开始您的放松之旅了吗？" },
      subtitle: { en: "Book now and experience our professional, attentive service", zh: "立即预约，体验专业贴心的服务" }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-sage-50 to-primary-50">
        <div className="absolute inset-0 bg-[url('/images/head2.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
              {texts.hero.title[lang]}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {texts.hero.subtitle[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {Object.entries(servicesData).map(([key, category], categoryIndex) => (
        <section 
          key={key}
          className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-sage-50 to-primary-50'}`}
        >
          <div className="container-custom">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-12"
            >
              <motion.div 
                variants={fadeInUp}
                className="flex items-center justify-center mb-6"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-serif font-bold text-gray-900 text-center mb-4"
              >
                {category.title[lang]}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {category.items.map((service) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-3 bg-gradient-to-r ${category.color}`} />
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div className="min-w-0 sm:flex-1 sm:pr-4">
                        <h3 className="text-2xl font-serif font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {service.title[lang]}
                        </h3>
                        {service.subtitle && (
                          <p className="text-sm text-gray-500 mt-1">
                            {service.subtitle[lang]}
                          </p>
                        )}
                      </div>
                      <div className="text-left sm:text-right flex-shrink-0">
                        <div className="text-2xl font-bold text-primary-600 whitespace-nowrap">
                          {service.price}
                        </div>
                        {service.priceNote && (
                          <div className="text-xs text-gray-500">
                            {service.priceNote[lang]}
                          </div>
                        )}
                        <div className="text-sm text-gray-500 flex items-center justify-start sm:justify-end mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration[lang]}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description[lang]}
                    </p>

                    <a
                      href="https://new-bloom-spa.square.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-event-name="book"
                      data-event-location="services-card"
                      data-service-id={service.id}
                      className="block text-center py-3 px-6 rounded-full font-medium bg-sage-600 text-white hover:bg-sage-700 transition-colors"
                    >
                      {texts.bookNow[lang]}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

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
              {texts.cta.title[lang]}
            </h2>
            <p className="text-xl text-sage-100">
              {texts.cta.subtitle[lang]}
            </p>
            <a
              href="https://new-bloom-spa.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              data-event-name="book"
              data-event-location="services-footer-cta"
              className="inline-block px-10 py-4 bg-white text-sage-600 rounded-full font-bold text-lg hover:bg-sage-50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              {texts.bookNow[lang]}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
