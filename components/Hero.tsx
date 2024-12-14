'use client';
import { useTranslations } from '@/hooks/useTranslations';

export default function Hero() {
  const { t, lang } = useTranslations();

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-b from-[#023A65] to-[#034b82] py-20 lg:py-32">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 mb-8">
            {t('home.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`/${lang}/appointment`}
              className="inline-block bg-white text-[#023A65] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              {t('home.hero.cta')}
            </a>
            <a
              href="#services"
              onClick={scrollToServices}
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
            >
              {t('common.navigation.services')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 