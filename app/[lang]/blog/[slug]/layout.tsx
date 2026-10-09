import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';

const copy = {
  en: {
    title: 'Orthodontic Guide | Colorado Braces',
    description: 'Read orthodontic treatment guidance from Colorado Braces in Denver.',
  },
  es: {
    title: 'Guía de Ortodoncia | Colorado Braces',
    description: 'Lee consejos sobre tratamientos de ortodoncia de Colorado Braces en Denver.',
  },
};

export function generateMetadata({ params }: { params: { lang: string; slug: string } }): Metadata {
  return localizedMetadata(params.lang, `blog/${params.slug}`, copy);
}

export default function DynamicArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
