"use client";

import { motion } from "framer-motion";
import { Heart, Award, Users, Sparkles, Target, Eye, Star } from "lucide-react";
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
      staggerChildren: 0.15
    }
  }
};

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const teamMembers = [
    {
      name: t.about.team.members.li.name,
      role: t.about.team.members.li.role,
      experience: language === "en" ? "15 years" : "15年",
      specialty: t.about.team.members.li.specialty,
      description: t.about.team.members.li.description
    },
    {
      name: t.about.team.members.wang.name,
      role: t.about.team.members.wang.role,
      experience: language === "en" ? "12 years" : "12年",
      specialty: t.about.team.members.wang.specialty,
      description: t.about.team.members.wang.description
    },
    {
      name: t.about.team.members.chen.name,
      role: t.about.team.members.chen.role,
      experience: language === "en" ? "10 years" : "10年",
      specialty: t.about.team.members.chen.specialty,
      description: t.about.team.members.chen.description
    },
    {
      name: t.about.team.members.zhang.name,
      role: t.about.team.members.zhang.role,
      experience: language === "en" ? "8 years" : "8年",
      specialty: t.about.team.members.zhang.specialty,
      description: t.about.team.members.zhang.description
    }
  ];

  const values = [
    {
      icon: Heart,
      title: t.about.values.care.title,
      description: t.about.values.care.description
    },
    {
      icon: Award,
      title: t.about.values.quality.title,
      description: t.about.values.quality.description
    },
    {
      icon: Sparkles,
      title: t.about.values.natural.title,
      description: t.about.values.natural.description
    },
    {
      icon: Users,
      title: t.about.values.personalized.title,
      description: t.about.values.personalized.description
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-sage-50 to-primary-50">
        <div className="absolute inset-0 bg-[url('/images/head4.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
              {t.about.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.about.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-2xl bg-[url('/images/body.jpg')] bg-cover bg-center" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                {t.about.story.title}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>{t.about.story.p1}</p>
                <p>{t.about.story.p2}</p>
                <p>{t.about.story.p3}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-10 shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                {t.about.vision.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t.about.vision.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-10 shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-sage-600 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                {t.about.mission.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t.about.mission.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              {t.about.values.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {t.about.values.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-600 to-sage-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              {t.about.team.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {t.about.team.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square bg-[url('/images/body2.jpg')] bg-cover bg-center" />
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Award className="w-4 h-4 mr-2" />
                    {member.experience} {t.about.team.experience}
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">{t.about.team.specialty}</p>
                    <p className="text-sm text-gray-600">{member.specialty}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-sage-600 to-sage-800 text-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            {[
              { number: "10+", label: t.about.stats.years },
              { number: "10,000+", label: t.about.stats.clients },
              { number: "15+", label: t.about.stats.therapists },
              { number: "4.9/5", label: t.about.stats.rating }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-sage-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              {t.about.testimonials.title}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {t.about.testimonials.subtitle}
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
                name: t.about.testimonials.items.sarah.name,
                rating: 5,
                comment: t.about.testimonials.items.sarah.comment
              },
              {
                name: t.about.testimonials.items.jessica.name,
                rating: 5,
                comment: t.about.testimonials.items.jessica.comment
              },
              {
                name: t.about.testimonials.items.emma.name,
                rating: 5,
                comment: t.about.testimonials.items.emma.comment
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-sage-50 to-primary-50 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
