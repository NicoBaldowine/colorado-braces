import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';

const copy = {
  en: {
    title: 'Why Crowded Teeth Matter Beyond Appearance | Colorado Braces',
    description: 'Learn how crowded teeth can complicate cleaning, how gum disease can cause bone loss, and when to ask about orthodontic care in Denver.',
  },
  es: {
    title: 'Apiñamiento dental más allá de la estética | Colorado Braces',
    description: 'Conoce cómo el apiñamiento dificulta la limpieza, por qué la enfermedad periodontal puede causar pérdida de hueso y cuándo consultar.',
  },
};

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'blog/why-crowded-teeth-matter', copy);
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
