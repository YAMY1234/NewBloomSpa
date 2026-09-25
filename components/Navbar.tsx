"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Flower2, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/lucky-draw", label: t.luckyDraw.nav },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/70">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Flower2 className="w-8 h-8 text-primary-600 transition-colors group-hover:text-primary-500" />
            <span className="text-2xl font-serif font-bold text-gray-900 transition-colors">
              New Bloom Spa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Switch language"
            >
              <Languages className="w-5 h-5" />
              <span className="text-sm font-medium">
                {language === "en" ? "中文" : "EN"}
              </span>
            </button>

            <a 
              href="https://new-bloom-spa.square.site/" 
              target="_blank"
              rel="noopener noreferrer"
              data-event-name="book"
              data-event-location="navbar-desktop"
              className="btn-primary"
            >
              {t.nav.booking}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <button
                onClick={() => setLanguage(language === "en" ? "zh" : "en")}
                className="flex items-center justify-center space-x-2 w-full py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                <Languages className="w-5 h-5" />
                <span>{language === "en" ? "切换至中文" : "Switch to English"}</span>
              </button>

              <a
                href="https://new-bloom-spa.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                data-event-name="book"
                data-event-location="navbar-mobile"
                className="block text-center btn-primary w-full"
              >
                {t.nav.booking}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
