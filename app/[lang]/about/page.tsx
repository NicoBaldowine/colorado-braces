'use client';

import AboutHero from "@/components/AboutHero";
import Basic from "@/components/Basic";
import Doctor from "@/components/Doctor";
import Contact from "@/components/Contact";
import { useTranslations } from '@/hooks/useTranslations';

export default function About() {
  const { t } = useTranslations();
  
  return (
    <main>
      <AboutHero />
      <Basic 
        imageUrl="/images/commitment.jpg"
        title={t('about.commitment.title')}
        description={t('about.commitment.content')}
      />
      <Basic 
        imageUrl="/images/why-choose.jpg"
        title={t('about.whyChoose.title')}
        description={t('about.whyChoose.content')}
        reverse
      />
      <Doctor />
      <Contact />
    </main>
  );
} 