"use client";

import { FaPhone, FaChevronDown } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import Logo from '@/app/assets/colorado-braces.svg'
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const { t, lang } = useTranslations();
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setSelectedLanguage(lang === 'es' ? t('common.languages.spanish') : t('common.languages.english'));
  }, [lang, t]);

  const languages = [
    { name: t('common.languages.english'), code: "en" },
    { name: t('common.languages.spanish'), code: "es" },
  ];

  const services = [
    { name: t('common.services.clearAligners'), path: "/services/clear-aligners" },
    { name: t('common.services.clearBraces'), path: "/services/clear-braces" },
    { name: t('common.services.conventionalBraces'), path: "/services/conventional-braces" },
    { name: t('common.services.whitening'), path: "/services/whitening" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${lang}`}>
              <Image 
                src={Logo.src}
                alt="Colorado Braces"
                width={145}
                height={38}
                className="lg:w-[145px] lg:h-[38px] w-[116px] h-[30px]"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <nav className="flex items-center gap-6">
              <Link 
                href={`/${lang}`}
                className={`text-gray-700 font-medium hover:text-[#023A65] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors ${
                  pathname === `/${lang}` ? "text-[#023A65] bg-gray-50" : ""
                }`}
              >
                {t('common.navigation.home')}
              </Link>

              <Link 
                href={`/${lang}/about`}
                className={`text-gray-700 font-medium hover:text-[#023A65] hover:bg-gray-50 px-2 py-2 rounded-md transition-colors ${
                  pathname === `/${lang}/about` ? "text-[#023A65] bg-gray-50" : ""
                }`}
              >
                {t('common.navigation.about')}
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className={`flex items-center gap-2 text-gray-700 font-medium hover:text-[#023A65] hover:bg-gray-50 px-2 py-2 rounded-md transition-colors ${
                    pathname.includes("/services") ? "text-[#023A65] bg-gray-50" : ""
                  }`}
                >
                  {t('common.navigation.services')}
                  <FaChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md py-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      href={`/${lang}${service.path}`}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#023A65] transition-colors ${
                        pathname.includes(service.path) ? "text-[#023A65] bg-gray-50" : ""
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href={`/${lang}/blog`}
                className={`text-gray-700 font-medium hover:text-[#023A65] hover:bg-gray-50 px-2 py-2 rounded-md transition-colors ${
                  pathname.includes("/blog") ? "text-[#023A65] bg-gray-50" : ""
                }`}
              >
                {t('common.navigation.blog')}
              </Link>

              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-700 font-medium hover:text-[#023A65] hover:bg-gray-50 px-2 py-2 rounded-md transition-colors cursor-pointer"
              >
                {t('common.navigation.contact')}
              </button>
            </nav>

            {/* Desktop Right Section */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-2 text-gray-700 hover:text-[#023A65] hover:bg-gray-50 px-2 py-2 rounded-md transition-colors">
                  {selectedLanguage}
                  <FaChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        const currentPath = pathname || '/';
                        const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '');
                        const newPath = `/${lang.code}${pathWithoutLang}`;
                        window.location.href = newPath;
                      }}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#023A65] transition-colors text-left"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <a 
                href="tel:+13039914455" 
                className="flex items-center gap-2 text-gray-700 hover:text-[#023A65] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
              >
                <FaPhone className="w-4 h-4" />
                <span>(303) 991-4455</span>
              </a>

              {/* Appointment Button */}
              <Link 
                href={`/${lang}/appointment`}
                className="bg-[#023A65] text-white px-5 py-2 rounded-full hover:bg-[#034b82] transition-colors"
              >
                {t('common.navigation.appointment')}
              </Link>
            </div>
          </div>

          {/* Mobile Right Section */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Phone Icon */}
            <a 
              href="tel:+13039914455" 
              className="text-gray-700 hover:text-[#023A65] p-2 rounded-md transition-colors"
            >
              <FaPhone className="w-5 h-5" />
            </a>

            {/* Mobile Appointment Button */}
            <Link 
              href={`/${lang}/appointment`}
              className="bg-[#023A65] text-white px-4 py-2 text-sm rounded-full hover:bg-[#034b82] transition-colors whitespace-nowrap"
            >
              {t('common.navigation.appointment')}
            </Link>

            {/* Burger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#023A65] transition-colors"
            >
              {isMenuOpen ? (
                <RiCloseLine className="w-6 h-6" />
              ) : (
                <RiMenu3Line className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col py-4">
              <Link 
                href={`/${lang}`}
                className={`px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#023A65] ${
                  pathname === `/${lang}` ? "text-[#023A65] bg-gray-50" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common.navigation.home')}
              </Link>
              <Link 
                href={`/${lang}/about`}
                className={`px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#023A65] ${
                  pathname === `/${lang}/about` ? "text-[#023A65] bg-gray-50" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common.navigation.about')}
              </Link>
              
              {/* Services Links */}
              {services.map((service) => (
                <Link
                  key={service.path}
                  href={`/${lang}${service.path}`}
                  className={`px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#023A65] ${
                    pathname === `/${lang}${service.path}` ? "text-[#023A65] bg-gray-50" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}

              <Link 
                href={`/${lang}/blog`}
                className={`px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#023A65] ${
                  pathname.includes("/blog") ? "text-[#023A65] bg-gray-50" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common.navigation.blog')}
              </Link>

              {/* Language Selector in Mobile Menu */}
              <div className="px-4 py-3 border-t border-gray-200 mt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      const currentPath = pathname || '/';
                      const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '');
                      const newPath = `/${lang.code}${pathWithoutLang}`;
                      window.location.href = newPath;
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#023A65]"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 