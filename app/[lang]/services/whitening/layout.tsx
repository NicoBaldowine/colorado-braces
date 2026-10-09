import type { Metadata } from 'next';
import { localizedMetadata, seoCopy } from '@/lib/seo';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'services/whitening', seoCopy.services.whitening);
}

export default function WhiteningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
