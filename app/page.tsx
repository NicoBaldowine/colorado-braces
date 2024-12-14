'use client'
import { useTranslations } from '@/hooks/useTranslations';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const { t } = useTranslations();

  const benefits = t('home.benefits.items');
  const services = [
    {
      title: t('common.services.clearAligners'),
      description: t('home.services.clearAligners')
    },
    {
      title: t('common.services.clearBraces'),
      description: t('home.services.clearBraces')
    },
    {
      title: t('common.services.conventionalBraces'),
      description: t('home.services.conventionalBraces')
    },
    {
      title: t('common.services.whitening'),
      description: t('home.services.whitening')
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero 
          title={t('home.hero.title')}
          description={t('home.hero.description')}
          ctaText={t('home.hero.cta')}
        />
        <Benefits 
          title={t('home.benefits.title')}
          benefits={benefits}
        />
        <Services 
          title={t('home.services.title')}
          description={t('home.services.description')}
          services={services}
        />
        <Blog 
          title={t('home.blog.title')}
          readMoreText={t('home.blog.readMore')}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
