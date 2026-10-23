import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';

const copy = {
  en: {
    title: 'Why Age 7 Is Right for an Orthodontic Visit | Colorado Braces',
    description: 'Learn why the AAO recommends an orthodontic checkup by age 7, how it fits with ADA dental guidance, and what research says about early treatment.',
  },
  es: {
    title: 'Primera visita al ortodoncista a los 7 años | Colorado Braces',
    description: 'Conoce por qué la AAO recomienda una evaluación de ortodoncia a más tardar a los 7 años y qué dicen la ADA y los estudios sobre el tratamiento temprano.',
  },
};

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'blog/first-orthodontic-visit-age-7', copy);
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
