import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteChrome from '@/components/SiteChrome';
import { localizedMetadata, seoCopy } from '@/lib/seo';

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' }
  ];
}

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  return localizedMetadata(params.lang, '/', seoCopy.home);
}

const validLocales = ['en', 'es'];

export default function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!validLocales.includes(lang)) {
    notFound();
  }

  return (
    <SiteChrome>{children}</SiteChrome>
  );
}
