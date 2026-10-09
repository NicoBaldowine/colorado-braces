import type { Metadata } from 'next';
import { localizedMetadata, seoCopy } from '@/lib/seo';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'about', seoCopy.about);
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
