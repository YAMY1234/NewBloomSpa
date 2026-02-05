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
  Gift,
  Percent
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
      en: "Enjoy a deeply relaxing massage experience side by side in a calm and private setting. Perfect for celebrating special occasions.",
      zh: "在宁静私密的环境中并排享受深度放松的按摩体验。非常适合庆祝特别的日子。"
    },
    image: "/images/body.jpg",
    hasDiscount: true,
    featured: true
  },
  {
    id: "classic-60",
    title: { en: "Classic Therapeutic Massage (60 min)", zh: "经典理疗按摩 (60分钟)" },
    duration: { en: "1 hr", zh: "1小时" },
    price: "$80",
    description: {
      en: "A full-body relaxation massage that helps ease muscle tension, improve circulation, and promote overall well-being.",
      zh: "全身放松按摩，有助于缓解肌肉紧张、改善循环并促进整体健康。"
    },
    image: "/images/body2.jpg",
    hasDiscount: true
  },
  {
    id: "signature-60",
    title: { en: "Signature Total Relief Massage (60 min)", zh: "招牌全身舒缓按摩 (60分钟)" },
    duration: { en: "1 hr", zh: "1小时" },
    price: "$100",
    description: {
      en: "Our signature full-body massage focuses on relieving accumulated tension and restoring natural balance.",
      zh: "我们的招牌全身按摩专注于缓解累积的紧张并恢复自然平衡。"
    },
    image: "/images/head.jpg",
    hasDiscount: true
  },
  {
    id: "foot-40",
    title: { en: "Foot Care Therapy (40 min)", zh: "足部护理 (40分钟)" },
    duration: { en: "40 mins", zh: "40分钟" },
    price: "$50",
    description: {
      en: "A soothing foot care treatment that helps release tension and promote relaxation throughout the body.",
      zh: "舒缓的足部护理，有助于释放紧张并促进全身放松。"
    },
    image: "/images/foot.jpg",
    hasDiscount: false
  },
  {
    id: "facial-30",
    title: { en: "Essential Facial Care (30 min)", zh: "基础面部护理 (30分钟)" },
    duration: { en: "30 mins", zh: "30分钟" },
    price: "$50",
    description: {
      en: "A classic facial treatment focused on deep cleansing and gentle exfoliation. Helps refresh the skin.",
      zh: "经典面部护理，专注于深层清洁和温和去角质。有助于清新肌肤。"
    },
    image: "/images/head2.jpg",
    hasDiscount: false
  },
  {
    id: "facial-60",
    title: { en: "Professional Facial Treatment (60 min)", zh: "专业面部护理 (60分钟)" },
    duration: { en: "1 hr", zh: "1小时" },
    price: "$80",
    description: {
      en: "A comprehensive professional facial that includes deep cleansing, exfoliation, mask, and massage.",
      zh: "全面的专业面部护理，包括深层清洁、去角质、面膜和按摩。"
    },
    image: "/images/head4.jpg",
    hasDiscount: true
  }
];

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const lang = language as 'en' | 'zh';

  const texts = {
    valentine: {
      badge: { en: "Valentine's Special", zh: "情人节特惠" },
      title: { en: "15% OFF", zh: "享85折优惠" },
      subtitle: { en: "All massage services 60 min or longer", zh: "所有60分钟及以上按摩服务" },
      note: { en: "Limited time offer!", zh: "限时优惠！" }
    },
    discount: { en: "15% OFF", zh: "85折" },
    valentinePick: { en: "Valentine's Pick", zh: "情人节推荐" }
  };

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

      {/* Valentine's Day Promotion Banner */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 py-6 md:py-8"
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
                <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center md:justify-start gap-3">
                  <Percent className="w-6 h-6" />
                  {texts.valentine.title[lang]} - {texts.valentine.subtitle[lang]}
                </h2>
              </div>
              
              <motion.a
                href="https://new-bloom-spa.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="bg-white text-rose-600 px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-rose-50 transition-colors"
              >
                {texts.valentine.note[lang]}
              </motion.a>
            </div>
          </div>
        </motion.div>
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
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative ${service.featured ? 'ring-2 ring-rose-400' : ''}`}
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
                
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      💕 {texts.valentinePick[lang]}
                    </div>
                  </div>
                )}
                
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-semibold text-gray-900 flex-1 pr-2">
                      {service.title[lang]}
                    </h3>
                    <span className="text-xl font-bold text-primary-600 whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  {service.subtitle && (
                    <p className="text-sm text-rose-500 font-medium mb-2">
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
                    className={`block text-center py-3 px-6 rounded-full font-medium transition-colors ${
                      service.hasDiscount 
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600' 
                        : 'bg-sage-600 text-white hover:bg-sage-700'
                    }`}
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
