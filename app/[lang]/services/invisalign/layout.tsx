import type { Metadata } from 'next';
import { localizedMetadata, seoCopy } from '@/lib/seo';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'services/invisalign', seoCopy.services.invisalign);
}

export default function InvisalignLayout({ children }: { children: React.ReactNode }) {
  return children;
}
