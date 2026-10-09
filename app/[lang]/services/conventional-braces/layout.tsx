import type { Metadata } from 'next';
import { localizedMetadata, seoCopy } from '@/lib/seo';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'services/conventional-braces', seoCopy.services.conventionalBraces);
}

export default function ConventionalBracesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
