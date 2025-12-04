"use client";

import Link from "next/link";
import { Flower2, MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="relative bg-[#845235] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/foot.jpg')] bg-cover bg-center opacity-10" />
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flower2 className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-serif font-bold">NewBloom Spa</span>
            </div>
            <p className="text-sage-200 text-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sage-200 hover:text-primary-400 transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sage-200 hover:text-primary-400 transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-sage-200 hover:text-primary-400 transition-colors">
                  {t.nav.booking}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sage-200 hover:text-primary-400 transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">{t.footer.popularServices}</h3>
            <ul className="space-y-3">
              <li className="text-sage-200">{t.footer.services.swedish}</li>
              <li className="text-sage-200">{t.footer.services.deepTissue}</li>
              <li className="text-sage-200">{t.footer.services.facial}</li>
              <li className="text-sage-200">{t.footer.services.bodyScrub}</li>
              <li className="text-sage-200">{t.footer.services.aromatherapy}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sage-200 text-sm">
                  123 Wellness Street<br />
                  San Francisco, CA 94102
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+14155551234" className="text-sage-200 hover:text-primary-400 transition-colors">
                  (415) 555-1234
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@newbloomspa.com" className="text-sage-200 hover:text-primary-400 transition-colors">
                  info@newbloomspa.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sage-200 text-sm">
                  {language === "en" ? (
                    <>Mon-Sat: 9:00 AM - 8:00 PM<br />Sun: 10:00 AM - 6:00 PM</>
                  ) : (
                    <>周一至周六: 9:00 - 20:00<br />周日: 10:00 - 18:00</>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-8 text-center text-primary-100 text-sm">
          <p>&copy; {currentYear} NewBloom Spa. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
