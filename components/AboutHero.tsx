'use client';
import { useTranslations } from '@/hooks/useTranslations';

export default function AboutHero() {
  const { t } = useTranslations();

  return (
    <section className="relative bg-gradient-to-b from-[#023A65] to-[#034b82] py-20 lg:py-32">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('about.hero.title')}
          </h1>
          <p className="text-lg lg:text-xl text-gray-200">
            {t('about.hero.description')}
          </p>
        </div>
      </div>
    </section>
  );
} 