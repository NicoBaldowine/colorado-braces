'use client';
import { useTranslations } from '@/hooks/useTranslations';

export default function Doctor() {
  const { t } = useTranslations();

  return (
    <section className="py-12 lg:py-24 bg-gray-50">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="max-w-[800px] mx-auto text-center">
          {/* Image */}
          <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-auto mb-6 lg:mb-8 rounded-full overflow-hidden bg-gray-200">
            {/* Replace with actual image */}
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {t('about.doctor.title')}
          </h2>
          
          <h3 className="text-lg lg:text-xl text-[#023A65] font-medium mb-4 lg:mb-6">
            {t('about.doctor.subtitle')}
          </h3>

          <div className="text-left space-y-4 lg:space-y-6">
            <p className="text-base lg:text-lg text-gray-600">
              {t('about.doctor.introduction')}
            </p>

            <div>
              <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
                {t('about.doctor.education.title')}
              </h4>
              <ul className="list-disc pl-4 lg:pl-5 text-sm lg:text-base text-gray-600 space-y-1">
                {t('about.doctor.education.items').map((item, index) => (
                  <li key={index} className="pl-1">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
                {t('about.doctor.experience.title')}
              </h4>
              <ul className="list-disc pl-4 lg:pl-5 text-sm lg:text-base text-gray-600 space-y-1">
                {t('about.doctor.experience.items').map((item, index) => (
                  <li key={index} className="pl-1">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
                {t('about.doctor.personal.title')}
              </h4>
              <ul className="list-disc pl-4 lg:pl-5 text-sm lg:text-base text-gray-600 space-y-1">
                {t('about.doctor.personal.items').map((item, index) => (
                  <li key={index} className="pl-1">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 