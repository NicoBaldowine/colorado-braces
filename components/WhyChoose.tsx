'use client';
import { useTranslations } from '@/hooks/useTranslations';
import { FaUserMd, FaTooth, FaMapMarkerAlt } from 'react-icons/fa';

export default function WhyChoose() {
  const { t } = useTranslations();

  const cards = [
    {
      icon: <FaUserMd className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: t('home.whyChoose.expert.title'),
      description: t('home.whyChoose.expert.description')
    },
    {
      icon: <FaTooth className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: t('home.whyChoose.invisalign.title'),
      description: t('home.whyChoose.invisalign.description')
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: t('home.whyChoose.location.title'),
      description: t('home.whyChoose.location.description')
    }
  ];

  return (
    <section className="max-w-[1350px] mx-auto px-4 py-12 lg:py-24">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-16">
        {t('home.whyChoose.title')}
      </h2>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center p-6 lg:p-10 rounded-2xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            <div className="text-[#023A65] mb-4 lg:mb-6">
              {card.icon}
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 whitespace-pre-line">
              {card.title}
            </h3>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 