"use client";
import { useTranslations } from '@/hooks/useTranslations';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  const { t } = useTranslations();

  return (
    <section id="contact" className="bg-gray-50 py-12 lg:py-24">
      <div className="max-w-[1350px] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-16">
          {t('home.contact.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Map - Takes up 2/3 of the space on desktop, full width on mobile */}
          <div className="md:col-span-2 h-[300px] lg:h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.4261030046897!2d-104.94073!3d39.703456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e785c19861f%3A0x9f891d001ae1d082!2s3955%20E%20Exposition%20Ave%20%23310%2C%20Denver%2C%20CO%2080209!5e0!3m2!1sen!2sus!4v1709群組1!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Information Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
            <div className="space-y-6 lg:space-y-8">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8">
                {t('home.contact.info.title')}
              </h3>
              
              {/* Address */}
              <div className="flex items-start gap-3 lg:gap-4 text-gray-600">
                <FaMapMarkerAlt className="w-5 h-5 lg:w-6 lg:h-6 text-[#023A65] flex-shrink-0 mt-1" />
                <p className="text-base lg:text-lg">
                  {t('home.contact.info.address.line1')}<br />
                  {t('home.contact.info.address.line2')}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 lg:gap-4 text-gray-600">
                <FaPhone className="w-5 h-5 lg:w-6 lg:h-6 text-[#023A65]" />
                <a 
                  href="tel:3039914455" 
                  className="text-base lg:text-lg hover:text-[#023A65] transition-colors"
                >
                  {t('home.contact.info.phone')}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 lg:gap-4 text-gray-600">
                <FaEnvelope className="w-5 h-5 lg:w-6 lg:h-6 text-[#023A65]" />
                <a 
                  href="mailto:Office@colorado-braces.com" 
                  className="text-base lg:text-lg hover:text-[#023A65] transition-colors break-all"
                >
                  {t('home.contact.info.email')}
                </a>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-3 lg:gap-4 pt-4 lg:pt-6">
                <a 
                  href="#" 
                  className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-[#023A65] text-white hover:bg-[#034b82] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-[#023A65] text-white hover:bg-[#034b82] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>
              </div>

              {/* Office Hours */}
              <div className="pt-6 lg:pt-8 border-t border-gray-200">
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                  {t('home.contact.hours.title')}
                </h4>
                <div className="space-y-2 text-gray-600 text-sm lg:text-base">
                  <p className="flex justify-between">
                    <span>{t('home.contact.hours.weekdays.days')}</span>
                    <span>{t('home.contact.hours.weekdays.hours')}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>{t('home.contact.hours.friday.days')}</span>
                    <span>{t('home.contact.hours.friday.hours')}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>{t('home.contact.hours.weekend.days')}</span>
                    <span>{t('home.contact.hours.weekend.hours')}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 