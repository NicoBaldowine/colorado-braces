import type { Metadata } from 'next';
import { localizedMetadata, seoCopy } from '@/lib/seo';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return localizedMetadata(params.lang, 'blog', seoCopy.blog);
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
