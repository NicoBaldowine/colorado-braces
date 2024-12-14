'use client';
import Contact from "@/components/Contact";
import { useTranslations } from '@/hooks/useTranslations';
import { FaStar, FaShieldAlt, FaClock } from 'react-icons/fa';
import Link from 'next/link';

export default function Whitening() {
  const { t, lang } = useTranslations();

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#023A65] text-white py-24">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8">
              {t('services.whitening.hero.title')}
            </h1>
            <p className="text-xl leading-relaxed text-gray-200">
              {t('services.whitening.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section with Image */}
      <section className="py-24">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden h-[500px]">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/whitening-benefits.jpg')" }} />
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                {t('services.whitening.benefits.title')}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#023A65] text-white flex items-center justify-center flex-shrink-0">
                    <FaStar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t('services.whitening.benefits.mainPoints.professional.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('services.whitening.benefits.mainPoints.professional.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#023A65] text-white flex items-center justify-center flex-shrink-0">
                    <FaShieldAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t('services.whitening.benefits.mainPoints.safety.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('services.whitening.benefits.mainPoints.safety.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#023A65] text-white flex items-center justify-center flex-shrink-0">
                    <FaClock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t('services.whitening.benefits.mainPoints.lasting.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('services.whitening.benefits.mainPoints.lasting.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('services.whitening.process.title')}
            </h2>
            <div className="space-y-6 mb-16">
              {t('services.whitening.process.steps').map((step, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-[#023A65] text-white rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                {t('services.whitening.cta.title')}
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                {t('services.whitening.cta.description')}
              </p>
              <Link 
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#023A65] font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                {t('services.whitening.cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
} 