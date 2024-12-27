'use client';
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { useTranslations } from '@/hooks/useTranslations';
import Logo from '@/app/assets/colorado-braces.svg'

export default function Footer() {
  const { t, lang } = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1350px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo Column */}
          <div>
            <Image
              src={Logo.src}
              alt="Colorado Braces Logo"
              width={145}
              height={38}
              style={{ maxWidth: '100%', height: 'auto' }}
              priority
              className="mb-6"
            />
            <p className="text-gray-600">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Our Site Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t('footer.columns.ourSite.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}`} className="text-gray-600 hover:text-[#023A65] transition-colors">
                  {t('footer.columns.ourSite.links.home')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="text-gray-600 hover:text-[#023A65] transition-colors">
                  {t('footer.columns.ourSite.links.about')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/testimonials`} className="text-gray-600 hover:text-[#023A65] transition-colors">
                  {t('footer.columns.ourSite.links.testimonials')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/blog`} className="text-gray-600 hover:text-[#023A65] transition-colors">
                  {t('footer.columns.ourSite.links.blog')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-gray-600 hover:text-[#023A65] transition-colors">
                  {t('footer.columns.ourSite.links.contact')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/privacy`} className="text-gray-600 hover:text-[#023A65] transition-colors">
                  {t('footer.columns.ourSite.links.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t('footer.columns.services.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/services/clear-aligners`} className="text-gray-600 hover:text-[#023A65] transition-colors">
                  {t('footer.columns.services.links.clearAligners')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services/clear-braces`} className="text-gray-600 hover:text-[#023A65] transition-colors">
                  {t('footer.columns.services.links.clearBraces')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services/conventional-braces`} className="text-gray-600 hover:text-[#023A65] transition-colors">
                  {t('footer.columns.services.links.conventionalBraces')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services/whitening`} className="text-gray-600 hover:text-[#023A65] transition-colors">
                  {t('footer.columns.services.links.whitening')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">{t('footer.columns.resources.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/blog`} className="text-gray-600 hover:text-[#023A65] transition-colors">
                  {t('footer.columns.resources.links.blog')}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram className="w-5 h-5 text-[#023A65]" />
                <a 
                  href="https://www.instagram.com/coloradobraces/" 
                  className="text-gray-600 hover:text-[#023A65] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.columns.resources.links.instagram')}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaFacebook className="w-5 h-5 text-[#023A65]" />
                <a 
                  href="https://www.facebook.com/coloradobraces/" 
                  className="text-gray-600 hover:text-[#023A65] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('footer.columns.resources.links.facebook')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>{t('footer.copyright').replace('{{year}}', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
} 