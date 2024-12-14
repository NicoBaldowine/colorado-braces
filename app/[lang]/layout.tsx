import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export const metadata: Metadata = {
  title: 'Colorado Braces',
  description: 'Expert orthodontic care in Denver',
};

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