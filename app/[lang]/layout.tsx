import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
    redirect('/en');
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
