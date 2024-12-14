'use client';
import { getTranslations } from '@/lib/translations';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import WhyChoose from '@/components/WhyChoose';
import Services from './components/Services.server';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';
import { use } from 'react';

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const t = getTranslations(lang);
  
  const servicesTranslations = {
    title: t('home.services.title'),
    services: [
      {
        title: t('home.services.clearAligners.title'),
        description: t('home.services.clearAligners.description'),
        slug: 'clear-aligners'
      },
      {
        title: t('home.services.clearBraces.title'),
        description: t('home.services.clearBraces.description'),
        slug: 'clear-braces'
      },
      {
        title: t('home.services.conventionalBraces.title'),
        description: t('home.services.conventionalBraces.description'),
        slug: 'conventional-braces'
      },
      {
        title: t('home.services.whitening.title'),
        description: t('home.services.whitening.description'),
        slug: 'whitening'
      }
    ],
    learnMore: t('home.services.learnMore')
  };

  return (
    <main>
      <Hero 
        title={t('home.hero.title')}
        description={t('home.hero.description')}
        ctaText={t('home.hero.cta')}
      />
      
      <SocialProof />

      <WhyChoose 
        title={t('home.whyChoose.title')}
        description={t('home.whyChoose.description')}
      />
      
      <Services 
        lang={lang} 
        translations={servicesTranslations} 
      />

      <Testimonials />

      <Blog />

      <FAQ />

      <Contact />
    </main>
  );
}