import type { Metadata } from 'next';
import { localizedMetadata, seoCopy } from '@/lib/seo';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'services/clear-aligners', seoCopy.services.clearAligners);
}

export default function ClearAlignersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
