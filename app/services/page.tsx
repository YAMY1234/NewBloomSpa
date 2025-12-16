"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, CheckCircle2, Heart, Sparkles, Wind, Flower2 } from "lucide-react";
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

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      category: t.services.massage.title,
      icon: Heart,
      color: "from-primary-500 to-primary-700",
      items: [
        {
          title: t.services.massage.swedish.title,
          duration: t.services.massage.swedish.duration,
          price: t.services.massage.swedish.price,
          description: t.services.massage.swedish.description,
          benefits: [
            t.home.featuredServices.features.fullRelax,
            t.home.featuredServices.features.stressRelief,
            t.home.featuredServices.features.improveSleep,
            t.home.featuredServices.features.circulation
          ]
        },
        {
          title: t.services.massage.deepTissue.title,
          duration: t.services.massage.deepTissue.duration,
          price: t.services.massage.deepTissue.price,
          description: t.services.massage.deepTissue.description,
          benefits: [
            t.home.featuredServices.features.painRelief,
            t.home.featuredServices.features.deepRelax,
            t.home.featuredServices.features.flexibility,
            t.home.featuredServices.features.circulation
          ]
        },
        {
          title: t.services.massage.hotStone.title,
          duration: t.services.massage.hotStone.duration,
          price: t.services.massage.hotStone.price,
          description: t.services.massage.hotStone.description,
          benefits: [
            t.home.featuredServices.features.deepRelax,
            t.home.featuredServices.features.circulation,
            t.home.featuredServices.features.energy,
            t.home.featuredServices.features.painRelief
          ]
        },
        {
          title: t.services.massage.aromatherapy.title,
          duration: t.services.massage.aromatherapy.duration,
          price: t.services.massage.aromatherapy.price,
          description: t.services.massage.aromatherapy.description,
          benefits: [
            t.home.featuredServices.features.balance,
            t.home.featuredServices.features.emotional,
            t.home.featuredServices.features.immunity,
            t.home.featuredServices.features.circulation
          ]
        },
        {
          title: t.services.massage.thai.title,
          duration: t.services.massage.thai.duration,
          price: t.services.massage.thai.price,
          description: t.services.massage.thai.description,
          benefits: [
            t.home.featuredServices.features.flexibility,
            t.home.featuredServices.features.stressRelief,
            t.home.featuredServices.features.energy,
            t.home.featuredServices.features.circulation
          ]
        }
      ]
    },
    {
      category: t.services.facial.title,
      icon: Sparkles,
      color: "from-sage-500 to-sage-700",
      items: [
        {
          title: t.services.facial.classic.title,
          duration: t.services.facial.classic.duration,
          price: t.services.facial.classic.price,
          description: t.services.facial.classic.description,
          benefits: [
            t.home.featuredServices.features.deepCleanse,
            t.home.featuredServices.features.exfoliate,
            t.home.featuredServices.features.hydration,
            t.home.featuredServices.features.antiAging
          ]
        },
        {
          title: t.services.facial.antiAging.title,
          duration: t.services.facial.antiAging.duration,
          price: t.services.facial.antiAging.price,
          description: t.services.facial.antiAging.description,
          benefits: [
            t.home.featuredServices.features.antiAging,
            t.home.featuredServices.features.deepCleanse,
            t.home.featuredServices.features.hydration,
            t.home.featuredServices.features.smoothSkin
          ]
        },
        {
          title: t.services.facial.hydrating.title,
          duration: t.services.facial.hydrating.duration,
          price: t.services.facial.hydrating.price,
          description: t.services.facial.hydrating.description,
          benefits: [
            t.home.featuredServices.features.hydration,
            t.home.featuredServices.features.deepCleanse,
            t.home.featuredServices.features.smoothSkin,
            t.home.featuredServices.features.antiAging
          ]
        },
        {
          title: t.services.facial.brightening.title,
          duration: t.services.facial.brightening.duration,
          price: t.services.facial.brightening.price,
          description: t.services.facial.brightening.description,
          benefits: [
            t.home.featuredServices.features.deepCleanse,
            t.home.featuredServices.features.hydration,
            t.home.featuredServices.features.smoothSkin,
            t.home.featuredServices.features.antiAging
          ]
        }
      ]
    },
    {
      category: t.services.body.title,
      icon: Wind,
      color: "from-primary-400 to-sage-600",
      items: [
        {
          title: t.services.body.scrub.title,
          duration: t.services.body.scrub.duration,
          price: t.services.body.scrub.price,
          description: t.services.body.scrub.description,
          benefits: [
            t.home.featuredServices.features.exfoliate,
            t.home.featuredServices.features.smoothSkin,
            t.home.featuredServices.features.metabolism,
            t.home.featuredServices.features.hydration
          ]
        },
        {
          title: t.services.body.wrap.title,
          duration: t.services.body.wrap.duration,
          price: t.services.body.wrap.price,
          description: t.services.body.wrap.description,
          benefits: [
            t.home.featuredServices.features.hydration,
            t.home.featuredServices.features.smoothSkin,
            t.home.featuredServices.features.metabolism,
            t.home.featuredServices.features.circulation
          ]
        },
        {
          title: t.services.body.complete.title,
          duration: t.services.body.complete.duration,
          price: t.services.body.complete.price,
          description: t.services.body.complete.description,
          benefits: [
            t.home.featuredServices.features.fullRelax,
            t.home.featuredServices.features.smoothSkin,
            t.home.featuredServices.features.hydration,
            t.home.featuredServices.features.stressRelief
          ]
        }
      ]
    },
    {
      category: t.services.specialty.title,
      icon: Flower2,
      color: "from-primary-600 to-primary-800",
      items: [
        {
          title: t.services.specialty.bridal.title,
          duration: t.services.specialty.bridal.duration,
          price: t.services.specialty.bridal.price,
          description: t.services.specialty.bridal.description,
          benefits: [
            t.home.featuredServices.features.fullRelax,
            t.home.featuredServices.features.hydration,
            t.home.featuredServices.features.smoothSkin,
            t.home.featuredServices.features.antiAging
          ]
        },
        {
          title: t.services.specialty.couples.title,
          duration: t.services.specialty.couples.duration,
          price: t.services.specialty.couples.price,
          description: t.services.specialty.couples.description,
          benefits: [
            t.home.featuredServices.features.fullRelax,
            t.home.featuredServices.features.stressRelief,
            t.home.featuredServices.features.balance,
            t.home.featuredServices.features.emotional
          ]
        },
        {
          title: t.services.specialty.prenatal.title,
          duration: t.services.specialty.prenatal.duration,
          price: t.services.specialty.prenatal.price,
          description: t.services.specialty.prenatal.description,
          benefits: [
            t.home.featuredServices.features.stressRelief,
            t.home.featuredServices.features.painRelief,
            t.home.featuredServices.features.fullRelax,
            t.home.featuredServices.features.improveSleep
          ]
        }
      ]
    }
  ];

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
              {t.services.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {t.services.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((category, categoryIndex) => (
        <section 
          key={categoryIndex}
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
                {category.category}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {category.items.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-3 bg-gradient-to-r ${category.color}`} />
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600 whitespace-nowrap">
                          {service.price}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center justify-end mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">{t.services.benefits.title}</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href="https://new-bloom-spa.square.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center py-3 px-6 bg-sage-600 text-white rounded-full font-medium hover:bg-sage-700 transition-colors"
                    >
                      {t.services.cta.bookNow}
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
              {t.services.cta.title}
            </h2>
            <p className="text-xl text-sage-100">
              {t.services.cta.subtitle}
            </p>
            <a
              href="https://new-bloom-spa.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-sage-600 rounded-full font-bold text-lg hover:bg-sage-50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              {t.services.cta.bookNow}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
