"use client";

import Link from "next/link";
import { Flower2, MapPin, Phone, Mail, Clock, Instagram, Music2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="relative bg-sage-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sage-900 via-sage-800 to-primary-900 opacity-40" />
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flower2 className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-serif font-bold">New Bloom Spa</span>
            </div>
            <p className="text-sage-200 text-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              {/* Add Facebook once the official page URL is verified. */}
              <a
                href="https://www.instagram.com/newbloomspa/"
                target="_blank"
                rel="noopener noreferrer"
                data-event-name="social"
                data-event-platform="instagram"
                data-event-location="footer"
                className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@newbloomspa"
                target="_blank"
                rel="noopener noreferrer"
                data-event-name="social"
                data-event-platform="tiktok"
                data-event-location="footer"
                className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="TikTok"
              >
                <Music2 className="w-5 h-5" />
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
                <a
                  href="https://new-bloom-spa.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event-name="book"
                  data-event-location="footer"
                  className="text-sage-200 hover:text-primary-400 transition-colors"
                >
                  {t.nav.booking}
                </a>
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
                  1829 S Cedar Lake Rd<br />
                  Round Lake, IL 60073-5711
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+12248009337"
                  data-event-name="phone"
                  data-event-location="footer"
                  className="text-sage-200 hover:text-primary-400 transition-colors"
                >
                  (224) 800-9337
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:newbloomspa@gmail.com"
                  data-event-name="email"
                  data-event-location="footer"
                  className="text-sage-200 hover:text-primary-400 transition-colors"
                >
                  newbloomspa@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sage-200 text-sm">
                  {language === "en" ? (
                    <>Mon: 10:00 AM - 8:30 PM<br />Tue-Sun: 9:30 AM - 8:30 PM</>
                  ) : (
                    <>周一: 10:00 - 20:30<br />周二至周日: 9:30 - 20:30</>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-800 mt-12 pt-8 text-center text-sage-300 text-sm">
          <p>&copy; {currentYear} New Bloom Spa. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
