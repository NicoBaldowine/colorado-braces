import { useTranslations } from '@/hooks/useTranslations';
import Contact from "@/components/Contact";
import BlogClient from './BlogClient'; // We'll create this component

// This is now a Server Component
export function generateStaticParams() {
  return [
    { lang: 'en', slug: 'clear-aligners-vs-traditional-braces' },
    { lang: 'en', slug: 'benefits-early-orthodontic-treatment' },
    { lang: 'en', slug: 'tips-maintaining-braces-oral-hygiene' },
    { lang: 'es', slug: 'clear-aligners-vs-traditional-braces' },
    { lang: 'es', slug: 'benefits-early-orthodontic-treatment' },
    { lang: 'es', slug: 'tips-maintaining-braces-oral-hygiene' }
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