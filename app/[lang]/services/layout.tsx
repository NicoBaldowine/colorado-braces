import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';

const copy = {
  en: {
    title: 'Orthodontic Services in Denver | Colorado Braces',
    description: 'Explore braces, clear aligners, early and adult orthodontics, retainers, guards, whitening, and sleep-appliance care in Denver.',
  },
  es: {
    title: 'Servicios de Ortodoncia en Denver | Colorado Braces',
    description: 'Conoce nuestros servicios en Denver: brackets, alineadores, ortodoncia temprana y para adultos, retenedores, protectores, blanqueamiento y dispositivos para el sueño.',
  },
};

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'services', copy);
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
