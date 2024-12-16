'use client';
import Doctor from '@/components/Doctor';
import Basic from '@/components/Basic';
import Contact from '@/components/Contact';
import Basic2 from '@/components/Basic2';
import { useTranslations } from '@/hooks/useTranslations';

export default function About() {
  const { t } = useTranslations();

  return (
    <main>
      <section className="bg-gray-50 py-24">
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('about.hero.description')}
          </p>
        </div>
      </section>

      <Basic 
        imageUrl="clear-braces"
        title={t('about.mission.title')}
        description={t('about.mission.items')}
        withIcons={true}
      />

      <Basic2 
        title={t('about.values.title')}
        description={t('about.values.items')}
      />

      <Doctor />
      <Contact />
    </main>
  );
} 