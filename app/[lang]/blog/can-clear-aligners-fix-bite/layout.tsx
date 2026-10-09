import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';

const copy = {
  en: {
    title: 'Can Clear Aligners Fix Your Bite? | Colorado Braces',
    description: 'Learn how clear aligners may help with common bite concerns and when an orthodontic evaluation is needed.',
  },
  es: {
    title: '¿Los Alineadores Corrigen la Mordida? | Colorado Braces',
    description: 'Descubre cómo los alineadores pueden ayudar con problemas comunes de mordida y cuándo necesitas una evaluación.',
  },
};

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'blog/can-clear-aligners-fix-bite', copy);
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
