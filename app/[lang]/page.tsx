'use client';
import { getTranslations } from '@/lib/translations';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import WhyChoose from '@/components/WhyChoose';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';
import { use } from 'react';

type PageProps = {
  params: Promise<{ lang: string }> | { lang: string }
}

export default function HomePage({ params }: PageProps) {
  const resolvedParams = 'then' in params ? use(params) : params;
  const t = getTranslations(resolvedParams.lang);
  
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
    <>
      <Hero />
      
      <SocialProof />

      <WhyChoose 
        title={t('home.whyChoose.title')}
        description={t('home.whyChoose.description')}
      />
      
      <Services 
        lang={resolvedParams.lang} 
        translations={servicesTranslations} 
      />

      <Testimonials />

      <Blog />

      <FAQ />

      <Contact />
    </>
  );
}