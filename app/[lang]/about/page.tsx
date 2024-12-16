'use client';

import Doctor from '@/components/Doctor';
import Basic from '@/components/Basic';
import Contact from '@/components/Contact';
import Basic2 from '@/components/Basic2';
import AboutHero from '@/components/AboutHero';
import { useTranslations } from '@/hooks/useTranslations';

export default function About() {
  const { t } = useTranslations();

  return (
    <main>
      <AboutHero />

      <Basic 
        imageUrl="mision"
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