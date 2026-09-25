"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from "lucide-react";
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
                      data-event-name="phone"
                      data-event-location="contact-info"
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
                      data-event-name="email"
                      data-event-location="contact-info"
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

            {/* Direct Contact Actions */}
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
                  {language === "en" ? "Choose How to Reach Us" : "选择联系方式"}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                {language === "en"
                  ? "Call or email us with questions, or use Square to view current services, prices, and appointment times."
                  : "如有问题，请致电或发送邮件；也可以通过 Square 查看当前服务、价格和可预约时间。"}
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+12248009337"
                  data-event-name="phone"
                  data-event-location="contact-actions"
                  className="w-full flex items-center gap-4 rounded-xl bg-white px-5 py-4 text-gray-900 shadow-sm hover:shadow-md hover:text-primary-700 transition-all"
                >
                  <span className="w-11 h-11 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-700" />
                  </span>
                  <span className="text-left">
                    <span className="block font-semibold">{language === "en" ? "Call New Bloom Spa" : "致电 New Bloom Spa"}</span>
                    <span className="block text-sm text-gray-600">(224) 800-9337</span>
                  </span>
                </a>

                <a
                  href="mailto:newbloomspa@gmail.com?subject=New%20Bloom%20Spa%20Inquiry"
                  data-event-name="email"
                  data-event-location="contact-actions"
                  className="w-full flex items-center gap-4 rounded-xl bg-white px-5 py-4 text-gray-900 shadow-sm hover:shadow-md hover:text-primary-700 transition-all"
                >
                  <span className="w-11 h-11 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-700" />
                  </span>
                  <span className="text-left min-w-0">
                    <span className="block font-semibold">{language === "en" ? "Email Us" : "发送邮件"}</span>
                    <span className="block text-sm text-gray-600 break-all">newbloomspa@gmail.com</span>
                  </span>
                </a>

                <a
                  href="https://new-bloom-spa.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event-name="book"
                  data-event-location="contact-actions"
                  className="w-full flex items-center gap-4 rounded-xl bg-sage-700 px-5 py-4 text-white shadow-sm hover:bg-sage-800 hover:shadow-md transition-all"
                >
                  <span className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </span>
                  <span className="text-left">
                    <span className="block font-semibold">{language === "en" ? "Book on Square" : "通过 Square 预约"}</span>
                    <span className="block text-sm text-sage-100">{language === "en" ? "View services, prices, and times" : "查看服务、价格和时间"}</span>
                  </span>
                </a>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1829%20S%20Cedar%20Lake%20Rd%2C%20Round%20Lake%2C%20IL%2060073-5711"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event-name="directions"
                  data-event-location="contact-actions"
                  className="w-full flex items-center gap-4 rounded-xl bg-white px-5 py-4 text-gray-900 shadow-sm hover:shadow-md hover:text-primary-700 transition-all"
                >
                  <span className="w-11 h-11 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-700" />
                  </span>
                  <span className="text-left">
                    <span className="block font-semibold">{language === "en" ? "Get Directions" : "获取路线"}</span>
                    <span className="block text-sm text-gray-600">1829 S Cedar Lake Rd, Round Lake</span>
                  </span>
                </a>
              </div>
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
                src="https://www.google.com/maps?q=1829%20S%20Cedar%20Lake%20Rd%2C%20Round%20Lake%2C%20IL%2060073-5711&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="New Bloom Spa Location"
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
