"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
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

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-sage-50 to-primary-50">
        <div className="absolute inset-0 bg-[url('/images/head4.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
              {t.contact.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                  {t.contact.info.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t.contact.info.subtitle}
                  {t.contact.info.subtitle2}
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-sage-50 to-primary-50 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t.contact.info.address.title}
                    </h3>
                    <p className="text-gray-600">
                      {t.contact.info.address.line1}<br />
                      {t.contact.info.address.line2}<br />
                      {t.contact.info.address.line3}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-sage-50 to-primary-50 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t.contact.info.phone.title}
                    </h3>
                    <a 
                      href="tel:+12248009337"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      (224) 800-9337
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      {t.contact.info.phone.hours}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-sage-50 to-primary-50 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t.contact.info.email.title}
                    </h3>
                    <a 
                      href="mailto:newbloomspa@gmail.com"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      newbloomspa@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      {t.contact.info.email.response}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-sage-50 to-primary-50 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t.contact.info.hours.title}
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>{t.contact.info.hours.weekday}</p>
                      <p>{t.contact.info.hours.sunday}</p>
                      <p className="text-sm text-primary-600 mt-2">
                        {t.contact.info.hours.note}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-sage-50 to-primary-50 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-8 h-8 text-primary-600" />
                <h3 className="text-2xl font-serif font-semibold text-gray-900">
                  {t.contact.form.title}
                </h3>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.name} {t.contact.form.required}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.email} {t.contact.form.required}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder={t.contact.form.phonePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.subject} {t.contact.form.required}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                  >
                    <option value="">{t.contact.form.subjectPlaceholder}</option>
                    <option value="booking">{t.contact.form.subjectOptions.booking}</option>
                    <option value="services">{t.contact.form.subjectOptions.services}</option>
                    <option value="pricing">{t.contact.form.subjectOptions.pricing}</option>
                    <option value="gift">{t.contact.form.subjectOptions.gift}</option>
                    <option value="other">{t.contact.form.subjectOptions.other}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.message} {t.contact.form.required}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{t.contact.form.send}</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  {t.contact.form.note}
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              {t.contact.map.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.contact.map.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Google Maps Embed */}
            <div className="w-full h-96 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.8893846961396!2d-88.11096768454797!3d42.35694974918647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f9c2e6f8e5b7d%3A0x1234567890abcdef!2s1829%20S%20Cedar%20Lake%20Rd%2C%20Round%20Lake%2C%20IL%2060073!5e0!3m2!1sen!2sus!4v1699564800000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NewBloom Spa Location"
              />
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t.contact.map.address.title}</h4>
                  <p className="text-sm text-gray-600">
                    {t.contact.map.address.line1}<br />
                    {t.contact.map.address.line2}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t.contact.map.parking.title}</h4>
                  <p className="text-sm text-gray-600">
                    {t.contact.map.parking.line1}<br />
                    {t.contact.map.parking.line2}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t.contact.map.transit.title}</h4>
                  <p className="text-sm text-gray-600">
                    {t.contact.map.transit.line1}<br />
                    {t.contact.map.transit.line2}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              {t.contact.faq.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.contact.faq.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            {[
              {
                question: t.contact.faq.items.booking.q,
                answer: t.contact.faq.items.booking.a
              },
              {
                question: t.contact.faq.items.parking.q,
                answer: t.contact.faq.items.parking.a
              },
              {
                question: t.contact.faq.items.cancel.q,
                answer: t.contact.faq.items.cancel.a
              },
              {
                question: t.contact.faq.items.gift.q,
                answer: t.contact.faq.items.gift.a
              },
              {
                question: t.contact.faq.items.prenatal.q,
                answer: t.contact.faq.items.prenatal.a
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-sage-50 to-primary-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
