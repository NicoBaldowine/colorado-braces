import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';

const copy = {
  en: {
    title: 'Clear Aligners vs. Traditional Braces | Colorado Braces',
    description: 'Compare clear aligners and traditional braces to choose an orthodontic treatment that fits your smile goals and lifestyle.',
  },
  es: {
    title: 'Alineadores vs. Brackets Tradicionales | Colorado Braces',
    description: 'Compara los alineadores transparentes y los brackets tradicionales para elegir el tratamiento adecuado para tu sonrisa.',
  },
};

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'blog/clear-aligners-vs-traditional-braces', copy);
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
