'use client';
import Contact from "@/components/Contact";
import { useTranslations } from '@/hooks/useTranslations';
import { FaGem, FaShieldAlt, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import clearBraces from '@/app/assets/clear-braces.jpg';

export default function ClearBraces() {
  const { t, lang } = useTranslations();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#023A65] to-[#034b82] py-20 lg:py-32">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8 text-white">
              {t('services.clearBraces.hero.title')}
            </h1>
            <p className="text-xl leading-relaxed text-gray-200">
              {t('services.clearBraces.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section with Image */}
      <section className="py-24">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="rounded-[24px] overflow-hidden h-[500px] relative">
              <Image
                src={clearBraces}
                alt="Clear Braces Benefits"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                {t('services.clearBraces.benefits.title')}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#023A65] text-white flex items-center justify-center flex-shrink-0">
                    <FaGem className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t('services.clearBraces.benefits.mainPoints.aesthetic.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('services.clearBraces.benefits.mainPoints.aesthetic.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#023A65] text-white flex items-center justify-center flex-shrink-0">
                    <FaShieldAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t('services.clearBraces.benefits.mainPoints.durability.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('services.clearBraces.benefits.mainPoints.durability.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#023A65] text-white flex items-center justify-center flex-shrink-0">
                    <FaClock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t('services.clearBraces.benefits.mainPoints.efficiency.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('services.clearBraces.benefits.mainPoints.efficiency.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('services.clearBraces.process.title')}
            </h2>
            <div className="space-y-6 mb-16">
              {t('services.clearBraces.process.steps').map((step, index) => (
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
                {t('services.clearBraces.cta.title')}
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                {t('services.clearBraces.cta.description')}
              </p>
              <Link 
                href={`/${lang}/appointment`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#023A65] font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                {t('services.clearBraces.cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
} 