import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';

const copy = {
  en: {
    title: 'Why Retainers Matter After Braces or Aligners | Colorado Braces',
    description: 'Learn why teeth can shift after orthodontic treatment, how clear retainers help, and what to do if your retainer is lost or no longer fits.',
  },
  es: {
    title: 'Por qué importan los retenedores después de la ortodoncia | Colorado Braces',
    description: 'Conoce por qué los dientes pueden moverse después de la ortodoncia, cómo ayudan los retenedores y qué hacer si el tuyo se pierde o deja de ajustar.',
  },
};

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'blog/why-retainers-matter', copy);
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
