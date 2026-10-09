import type { Metadata } from 'next';
import { localizedMetadata, seoCopy } from '@/lib/seo';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'services/clear-braces', seoCopy.services.clearBraces);
}

export default function ClearBracesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
