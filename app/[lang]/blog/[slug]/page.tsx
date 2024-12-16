import { useTranslations } from '@/hooks/useTranslations';
import Contact from "@/components/Contact";
import BlogClient from './BlogClient';

// This is now a Server Component
export function generateStaticParams() {
  return [
    { lang: 'en', slug: 'can-clear-aligners-fix-bite' },
    { lang: 'en', slug: 'clear-aligners-vs-traditional-braces' },
    { lang: 'en', slug: 'how-do-braces-work' }
  ];
}

export default function BlogPost({ params }: { params: { lang: string; slug: string } }) {
  return (
    <main>
      <BlogClient params={params} />
      <Contact />
    </main>
  );
} 