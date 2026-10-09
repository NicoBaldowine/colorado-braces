import type { Metadata } from 'next';
import { localizedMetadata, seoCopy } from '@/lib/seo';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'services/orthofx', seoCopy.services.orthofx);
}

export default function OrthoFXLayout({ children }: { children: React.ReactNode }) {
  return children;
}
