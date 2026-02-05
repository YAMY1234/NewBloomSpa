"use client";

import { motion } from "framer-motion";
import { Clock, Heart, Sparkles, Footprints, Gift, Percent, LucideIcon } from "lucide-react";
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
  hasDiscount: boolean;
  featured?: boolean;
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
          en: "Our Couple Massage is designed for two people to enjoy a deeply relaxing massage experience side by side in a calm and private setting. Whether you're celebrating a special occasion or simply taking time to recharge together, this session allows you to slow down, release tension, and reconnect through shared relaxation.",
          zh: "我们的双人按摩专为两人设计，在宁静私密的环境中并排享受深度放松的按摩体验。无论您是在庆祝特别的日子，还是只是想一起放松身心，这个疗程让您放慢脚步，释放紧张，通过共同的放松重新连接。"
        },
        hasDiscount: true,
        featured: true
      },
      {
        id: "classic-30",
        title: { en: "Classic Therapeutic Massage (30 min)", zh: "经典理疗按摩 (30分钟)" },
        subtitle: { en: "Light / Medium / Deep pressure", zh: "轻柔 / 中等 / 深层力度" },
        duration: { en: "30 mins", zh: "30分钟" },
        price: "$50.00",
        description: {
          en: "A focused relaxation massage designed to quickly release tension and calm the body. Ideal for stress relief, muscle relaxation, or a refreshing break during a busy day. Pressure can be customized to your comfort level.",
          zh: "专注的放松按摩，旨在快速释放紧张并舒缓身体。非常适合缓解压力、放松肌肉或在忙碌的一天中恢复精力。力度可根据您的舒适度进行调整。"
        },
        hasDiscount: false
      },
      {
        id: "classic-60",
        title: { en: "Classic Therapeutic Massage (60 min)", zh: "经典理疗按摩 (60分钟)" },
        subtitle: { en: "Light / Medium / Deep pressure", zh: "轻柔 / 中等 / 深层力度" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$80.00",
        description: {
          en: "A full-body relaxation massage that helps ease muscle tension, improve circulation, and promote overall well-being. Perfect for unwinding both physically and mentally, leaving you feeling balanced and refreshed.",
          zh: "全身放松按摩，有助于缓解肌肉紧张、改善循环并促进整体健康。非常适合身心放松，让您感到平衡和清爽。"
        },
        hasDiscount: true
      },
      {
        id: "classic-90",
        title: { en: "Classic Therapeutic Massage (90 min)", zh: "经典理疗按摩 (90分钟)" },
        subtitle: { en: "Light / Medium / Deep pressure", zh: "轻柔 / 中等 / 深层力度" },
        duration: { en: "1 hr 30 mins", zh: "1小时30分钟" },
        price: "$120.00",
        description: {
          en: "An extended relaxation experience that allows deeper muscle release and longer-lasting stress relief. Ideal for those seeking a thorough, calming treatment that restores comfort and relaxation throughout the entire body.",
          zh: "延长的放松体验，可实现更深层的肌肉释放和更持久的压力缓解。非常适合寻求彻底、舒缓疗程的人，恢复全身的舒适和放松。"
        },
        hasDiscount: true
      },
      {
        id: "signature-60",
        title: { en: "Signature Total Relief Massage (60 min)", zh: "招牌全身舒缓按摩 (60分钟)" },
        subtitle: { en: "Full body total relief massage", zh: "全身深度舒缓按摩" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$100.00",
        description: {
          en: "Our signature full-body massage focuses on relieving accumulated tension and restoring natural balance. Thoughtfully designed techniques target stress-prone areas to promote deep relaxation and total body comfort.",
          zh: "我们的招牌全身按摩专注于缓解累积的紧张并恢复自然平衡。精心设计的技术针对容易紧张的部位，促进深度放松和全身舒适。"
        },
        hasDiscount: true
      },
      {
        id: "signature-90",
        title: { en: "Signature Total Relief Massage (90 min)", zh: "招牌全身舒缓按摩 (90分钟)" },
        subtitle: { en: "Full body total relief massage", zh: "全身深度舒缓按摩" },
        duration: { en: "1 hr 30 mins", zh: "1小时30分钟" },
        price: "$140.00",
        description: {
          en: "A premium, immersive massage experience that delivers complete relaxation from head to toe. This extended signature treatment provides deeper relief, enhanced circulation, and a lasting sense of renewal and calm.",
          zh: "奢华沉浸式按摩体验，从头到脚带来完全的放松。这款延长版招牌疗程提供更深层的舒缓、增强循环，以及持久的焕新和宁静感。"
        },
        hasDiscount: true
      },
      {
        id: "lymphatic-60",
        title: { en: "Full Body Lymphatic Drainage Massage (60 min)", zh: "全身淋巴引流按摩 (60分钟)" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$100.00",
        description: {
          en: "A gentle, rhythmic massage technique that stimulates the lymphatic system to help eliminate toxins and reduce fluid retention. Promotes detoxification and supports immune health.",
          zh: "轻柔有节奏的按摩技术，刺激淋巴系统帮助排除毒素并减少水肿。促进排毒并支持免疫健康。"
        },
        hasDiscount: true
      },
      {
        id: "lymphatic-90",
        title: { en: "Full Body Lymphatic Drainage Massage (90 min)", zh: "全身淋巴引流按摩 (90分钟)" },
        duration: { en: "1 hr 30 mins", zh: "1小时30分钟" },
        price: "$140.00",
        description: {
          en: "An extended lymphatic drainage session for comprehensive detoxification and deep relaxation. Perfect for those seeking thorough body cleansing and rejuvenation.",
          zh: "延长版淋巴引流疗程，提供全面排毒和深度放松。非常适合寻求彻底身体净化和焕新的人。"
        },
        hasDiscount: true
      },
      {
        id: "neck-shoulder",
        title: { en: "Neck & Shoulder Care", zh: "颈肩护理" },
        subtitle: { en: "Gentle lymphatic massage to reduce tension & puffiness", zh: "轻柔淋巴按摩，缓解紧张与浮肿" },
        duration: { en: "30 mins", zh: "30分钟" },
        price: "$50.00",
        description: {
          en: "Focuses on the neck and shoulder area using light, soothing techniques to encourage lymphatic flow. Helps relieve daily stiffness while improving comfort and mobility.",
          zh: "专注于颈部和肩部区域，使用轻柔舒缓的技术促进淋巴流动。有助于缓解日常僵硬，同时改善舒适度和灵活性。"
        },
        hasDiscount: false
      },
      {
        id: "cupping",
        title: { en: "Cupping Therapy", zh: "拔罐疗法" },
        subtitle: { en: "Improve circulation & balance", zh: "改善循环与平衡" },
        duration: { en: "30 mins", zh: "30分钟" },
        price: "$50.00",
        description: {
          en: "A traditional cupping technique designed to stimulate circulation and relieve muscle tension. Supports relaxation and promotes a balanced, refreshed feeling.",
          zh: "传统拔罐技术，旨在刺激循环并缓解肌肉紧张。支持放松并促进平衡、清爽的感觉。"
        },
        hasDiscount: false
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
          en: "A soothing foot care treatment that helps release tension and promote relaxation throughout the body. Ideal for restoring comfort after long days on your feet.",
          zh: "舒缓的足部护理，有助于释放紧张并促进全身放松。非常适合在长时间站立后恢复舒适。"
        },
        hasDiscount: false
      },
      {
        id: "foot-60",
        title: { en: "Premium Foot Care Therapy (60 min)", zh: "尊享足部护理 (60分钟)" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$65.00",
        description: {
          en: "An extended foot therapy session with premium techniques for deeper relaxation and rejuvenation. Includes comprehensive foot massage and care.",
          zh: "延长版足部疗程，采用高级技术实现更深层的放松和焕新。包括全面的足部按摩和护理。"
        },
        hasDiscount: true
      },
      {
        id: "foot-body",
        title: { en: "Foot & Body Combo", zh: "足部+身体组合" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$80.00",
        description: {
          en: "A perfect combination of foot therapy and body massage for complete relaxation from head to toe.",
          zh: "足部疗法与身体按摩的完美结合，从头到脚带来完全的放松。"
        },
        hasDiscount: true
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
        subtitle: { en: "Deep cleansing & skin renewal", zh: "深层清洁与肌肤焕新" },
        duration: { en: "30 mins", zh: "30分钟" },
        price: "$50.00",
        description: {
          en: "A classic facial treatment focused on deep cleansing and gentle exfoliation. Helps refresh the skin, improve clarity, and support natural renewal.",
          zh: "经典面部护理，专注于深层清洁和温和去角质。有助于清新肌肤、改善透明度并支持自然焕新。"
        },
        hasDiscount: false
      },
      {
        id: "facial-60",
        title: { en: "Professional Facial Treatment (60 min)", zh: "专业面部护理 (60分钟)" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$80.00",
        description: {
          en: "A comprehensive professional facial that includes deep cleansing, exfoliation, mask, and massage for radiant, healthy-looking skin.",
          zh: "全面的专业面部护理，包括深层清洁、去角质、面膜和按摩，让肌肤焕发健康光彩。"
        },
        hasDiscount: true
      },
      {
        id: "facial-90",
        title: { en: "Premium Classic Facial (90 min)", zh: "尊享经典面部护理 (90分钟)" },
        duration: { en: "1 hr 30 mins", zh: "1小时30分钟" },
        price: "$120.00",
        description: {
          en: "An indulgent extended facial experience with premium products and techniques. Includes deep treatment, relaxing massage, and specialized care for optimal results.",
          zh: "奢华延长版面部体验，采用高级产品和技术。包括深层护理、放松按摩和专业护理，以获得最佳效果。"
        },
        hasDiscount: true
      },
      {
        id: "facial-body",
        title: { en: "Facial & Body Combo", zh: "面部+身体组合" },
        duration: { en: "1 hr", zh: "1小时" },
        price: "$80.00",
        description: {
          en: "The best of both worlds - combining facial care with body massage for a complete pampering experience.",
          zh: "两全其美 - 将面部护理与身体按摩相结合，带来完整的呵护体验。"
        },
        hasDiscount: true
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
    valentine: {
      badge: { en: "Valentine's Special", zh: "情人节特惠" },
      title: { en: "15% OFF", zh: "享85折优惠" },
      subtitle: { en: "All massage services 60 min or longer", zh: "所有60分钟及以上按摩服务" },
      note: { en: "Limited time offer · Book now!", zh: "限时优惠 · 立即预约！" }
    },
    discount: { en: "15% OFF", zh: "85折" },
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

      {/* Valentine's Day Promotion Banner */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 py-8 md:py-10"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 10px)' }} />
          </div>
          
          <div className="container-custom relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white text-center md:text-left">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2"
              >
                <Heart className="w-8 h-8 md:w-10 md:h-10 fill-white" />
                <Gift className="w-8 h-8 md:w-10 md:h-10" />
                <Heart className="w-8 h-8 md:w-10 md:h-10 fill-white" />
              </motion.div>
              
              <div className="space-y-1">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-2">
                  💕 {texts.valentine.badge[lang]} 💕
                </div>
                <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center md:justify-start gap-3">
                  <Percent className="w-8 h-8" />
                  {texts.valentine.title[lang]}
                </h2>
                <p className="text-lg md:text-xl text-rose-100">
                  {texts.valentine.subtitle[lang]}
                </p>
              </div>
              
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="bg-white text-rose-600 px-6 py-3 rounded-full font-bold text-lg shadow-lg"
              >
                {texts.valentine.note[lang]}
              </motion.div>
            </div>
          </div>
        </motion.div>
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
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group relative ${service.featured ? 'ring-2 ring-rose-400' : ''}`}
                >
                  {/* Discount Badge */}
                  {service.hasDiscount && (
                    <div className="absolute top-4 right-4 z-10">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1"
                      >
                        <Heart className="w-3 h-3 fill-white" />
                        {texts.discount[lang]}
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Featured Badge for Couples */}
                  {service.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        💕 {lang === 'en' ? "Valentine's Pick" : "情人节推荐"}
                      </div>
                    </div>
                  )}
                  
                  <div className={`h-3 bg-gradient-to-r ${category.color}`} />
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 pr-4">
                        <h3 className="text-2xl font-serif font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {service.title[lang]}
                        </h3>
                        {service.subtitle && (
                          <p className="text-sm text-gray-500 mt-1">
                            {service.subtitle[lang]}
                          </p>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-2xl font-bold text-primary-600 whitespace-nowrap">
                          {service.price}
                        </div>
                        {service.priceNote && (
                          <div className="text-xs text-gray-500">
                            {service.priceNote[lang]}
                          </div>
                        )}
                        <div className="text-sm text-gray-500 flex items-center justify-end mt-1">
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
                      className={`block text-center py-3 px-6 rounded-full font-medium transition-colors ${
                        service.hasDiscount 
                          ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600' 
                          : 'bg-sage-600 text-white hover:bg-sage-700'
                      }`}
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
