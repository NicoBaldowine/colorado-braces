import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';

const copy = {
  en: {
    title: 'How Do Braces Work? | Colorado Braces',
    description: 'Understand how braces move teeth, correct alignment, and support a healthier smile with orthodontic care in Denver.',
  },
  es: {
    title: '¿Cómo Funcionan los Brackets? | Colorado Braces',
    description: 'Entiende cómo los brackets mueven los dientes y corrigen la alineación con atención ortodóntica en Denver.',
  },
};

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'blog/how-do-braces-work', copy);
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
