'use client';
import { useTranslations } from '@/hooks/useTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clearAligners from '../app/assets/clear-aligners.jpg';
import clearBraces from '@/app/assets/clear-braces.jpg';
import conventionalBraces from '@/app/assets/conventional-braces.jpg';
import whitening from '@/app/assets/whitening.jpg';

export default function Services() {
  const { t } = useTranslations();
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'en';

  const services = [
    {
      title: t('home.services.clearAligners.title'),
      description: t('home.services.clearAligners.description'),
      slug: 'clear-aligners',
      image: clearAligners
    },
    {
      title: t('home.services.clearBraces.title'),
      description: t('home.services.clearBraces.description'),
      slug: 'clear-braces',
      image: clearBraces
    },
    {
      title: t('home.services.conventionalBraces.title'),
      description: t('home.services.conventionalBraces.description'),
      slug: 'conventional-braces',
      image: conventionalBraces
    },
    {
      title: t('home.services.whitening.title'),
      description: t('home.services.whitening.description'),
      slug: 'whitening',
      image: whitening
    }
  ];

  return (
    <section id="services" className="py-12 lg:py-24">
      <div className="max-w-[1350px] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-16">
          {t('home.services.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div 
              key={service.slug}
              className="flex flex-col lg:flex-row p-4 lg:p-6 rounded-2xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] transition-all duration-300 h-full"
            >
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-6">
                <div className="w-full h-48 lg:h-[300px] rounded-xl overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">
                  {service.description}
                </p>
                <Link
                  href={`/${lang}/services/${service.slug}`}
                  className="mt-auto text-[#023A65] text-sm lg:text-base font-semibold hover:text-[#034b82] transition-colors"
                >
                  See more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 