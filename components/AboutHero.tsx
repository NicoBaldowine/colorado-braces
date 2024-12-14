'use client';
import { useTranslations } from '@/hooks/useTranslations';

export default function AboutHero() {
  const { t } = useTranslations();

  return (
    <section className="bg-[#023A65] text-white py-12 lg:py-24">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-8">
            {t('about.hero.title')}
          </h1>
          <p className="text-base lg:text-xl leading-relaxed text-gray-200">
            {t('about.hero.description')}
          </p>
        </div>
      </div>
    </section>
  );
} 