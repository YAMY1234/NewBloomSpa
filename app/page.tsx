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
  CheckCircle2
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

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      title: t.services.massage.swedish.title,
      duration: t.services.massage.swedish.duration,
      price: t.services.massage.swedish.price,
      description: t.services.massage.swedish.description,
      features: [t.home.featuredServices.features.fullRelax, t.home.featuredServices.features.stressRelief, t.home.featuredServices.features.improveSleep]
    },
    {
      title: t.services.massage.deepTissue.title,
      duration: t.services.massage.deepTissue.duration,
      price: t.services.massage.deepTissue.price,
      description: t.services.massage.deepTissue.description,
      features: [t.home.featuredServices.features.deepRelax, t.home.featuredServices.features.painRelief, t.home.featuredServices.features.flexibility]
    },
    {
      title: t.services.facial.classic.title,
      duration: t.services.facial.classic.duration,
      price: t.services.facial.classic.price,
      description: t.services.facial.classic.description,
      features: [t.home.featuredServices.features.deepCleanse, t.home.featuredServices.features.hydration, t.home.featuredServices.features.antiAging]
    },
    {
      title: t.services.body.scrub.title,
      duration: t.services.body.scrub.duration,
      price: t.services.body.scrub.price,
      description: t.services.body.scrub.description,
      features: [t.home.featuredServices.features.exfoliate, t.home.featuredServices.features.smoothSkin, t.home.featuredServices.features.metabolism]
    },
    {
      title: t.services.massage.aromatherapy.title,
      duration: t.services.massage.aromatherapy.duration,
      price: t.services.massage.aromatherapy.price,
      description: t.services.massage.aromatherapy.description,
      features: [t.home.featuredServices.features.balance, t.home.featuredServices.features.emotional, t.home.featuredServices.features.immunity]
    },
    {
      title: t.services.massage.hotStone.title,
      duration: t.services.massage.hotStone.duration,
      price: t.services.massage.hotStone.price,
      description: t.services.massage.hotStone.description,
      features: [t.home.featuredServices.features.deepRelax, t.home.featuredServices.features.circulation, t.home.featuredServices.features.energy]
    }
  ];

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
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-[url('/images/body.jpg')] bg-cover bg-center" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <span className="text-2xl font-bold text-primary-600">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.duration}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://new-bloom-spa.square.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 px-6 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
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
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
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
            <p className="text-xl text-primary-100 leading-relaxed">
              {t.home.cta.subtitle}
              <br />
              {t.home.cta.subtitle2}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://new-bloom-spa.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-primary-50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                {t.home.cta.bookNow}
              </a>
              <Link
                href="/contact"
                className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
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
