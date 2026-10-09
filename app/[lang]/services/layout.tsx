import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';

const copy = {
  en: {
    title: 'Orthodontic Services in Denver | Colorado Braces',
    description: 'Explore clear aligners, clear braces, traditional braces, whitening, Invisalign, and OrthoFX services in Denver.',
  },
  es: {
    title: 'Servicios de Ortodoncia en Denver | Colorado Braces',
    description: 'Conoce nuestros servicios de alineadores, brackets, blanqueamiento, Invisalign y OrthoFX en Denver.',
  },
};

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'services', copy);
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
