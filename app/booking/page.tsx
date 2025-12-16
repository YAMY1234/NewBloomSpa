"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle2, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function BookingPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Square Appointments 预约链接
  const SQUARE_APPOINTMENTS_URL = "https://new-bloom-spa.square.site/";

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary-100 via-sage-50 to-primary-50">
        <div className="absolute inset-0 bg-[url('/images/head2.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
              {t.booking.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {t.booking.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Instructions */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              {t.booking.process.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.booking.process.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                step: "1",
                title: t.booking.process.step1.title,
                description: t.booking.process.step1.description
              },
              {
                step: "2",
                title: t.booking.process.step2.title,
                description: t.booking.process.step2.description
              },
              {
                step: "3",
                title: t.booking.process.step3.title,
                description: t.booking.process.step3.description
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-sage-50 to-primary-50 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6 text-center">
              {t.booking.benefits.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Calendar, text: t.booking.benefits.realtime },
                { icon: Clock, text: t.booking.benefits.convenient },
                { icon: CheckCircle2, text: t.booking.benefits.instant },
                { icon: Phone, text: t.booking.benefits.flexible }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Square Appointments Embed */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-primary-50">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 bg-gradient-to-r from-primary-600 to-primary-800 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
                {t.booking.square.title}
              </h2>
              <p className="text-xl text-primary-100">
                {t.booking.square.subtitle}
              </p>
            </div>

            {/* Square Appointments iFrame */}
            <div className="p-8">
              <div className="bg-gray-100 rounded-xl p-12 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                  <Calendar className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-serif font-semibold text-gray-900">
                    {t.booking.square.heading}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.booking.square.description}
                    <br />
                    {t.booking.square.description2}
                  </p>
                  
                  <a
                    href={SQUARE_APPOINTMENTS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-sage-600 text-white rounded-full font-bold text-lg hover:bg-sage-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  >
                    {t.booking.square.button}
                  </a>

                  <div className="pt-6 border-t border-gray-300">
                    <p className="text-sm text-gray-500">
                      {t.booking.square.tip}
                      <br />
                      {t.booking.square.tip2} <code className="bg-gray-200 px-2 py-1 rounded">app/booking/page.tsx</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              {t.booking.help.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t.booking.help.subtitle}
              <br />
              {t.booking.help.subtitle2}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+14155551234"
                className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500">{t.booking.help.phone}</div>
                  <div className="font-semibold">(415) 555-1234</div>
                </div>
              </a>
              <a
                href="mailto:info@newbloomspa.com"
                className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-500">{t.booking.help.email}</div>
                  <div className="font-semibold">info@newbloomspa.com</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-primary-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
              {t.booking.policy.title}
            </h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>{t.booking.policy.early.title}</strong> {t.booking.policy.early.description}
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>{t.booking.policy.cancel.title}</strong> {t.booking.policy.cancel.description}
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>{t.booking.policy.health.title}</strong> {t.booking.policy.health.description}
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>{t.booking.policy.firstTime.title}</strong> {t.booking.policy.firstTime.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
