import type { Metadata } from 'next';
import { localizedMetadata, seoCopy } from '@/lib/seo';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'privacy', seoCopy.privacy);
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
