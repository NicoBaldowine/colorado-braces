'use client';
import { useTranslations } from '@/hooks/useTranslations';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  const { t } = useTranslations();

  const services = [
    {
      title: t('home.services.clearAligners.title'),
      description: t('home.services.clearAligners.description'),
      image: '/images/clear-aligners.jpg'
    },
    {
      title: t('home.services.clearBraces.title'),
      description: t('home.services.clearBraces.description'),
      image: '/images/clear-braces.jpg'
    },
    {
      title: t('home.services.conventionalBraces.title'),
      description: t('home.services.conventionalBraces.description'),
      image: '/images/conventional-braces.jpg'
    },
    {
      title: t('home.services.whitening.title'),
      description: t('home.services.whitening.description'),
      image: '/images/whitening.jpg'
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
          servicesText={t('common.navigation.services')}
        />
        <SocialProof />
        <WhyChoose />
        <Services 
          title={t('home.services.title')}
          description={t('home.services.description')}
          services={services}
          learnMoreText={t('home.services.learnMore')}
        />
        <Testimonials />
        <Blog 
          title={t('home.blog.title')}
          readMoreText={t('home.blog.readMore')}
        />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
} 