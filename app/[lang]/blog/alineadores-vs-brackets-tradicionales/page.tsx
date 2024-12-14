'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Link from "next/link";
import { useTranslations } from '@/hooks/useTranslations';

export default function BlogPost() {
  const { t, lang } = useTranslations();
  
  const content = t('blog.posts').find(post => post.slug === 'alineadores-vs-brackets-tradicionales');
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Blog Post Hero */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-[800px] mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {content?.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{content?.date}</span>
              <span>•</span>
              <span>{content?.readTime}</span>
            </div>
          </div>
        </section>

        <article className="py-24">
          <div className="max-w-[800px] mx-auto px-4">
            {/* Featured Image Placeholder */}
            <div className="w-full h-[400px] mb-12 rounded-lg bg-gray-200"></div>

            {/* Content */}
            {content?.content.map((section, index) => {
              switch(section.type) {
                case 'paragraph':
                  return (
                    <p key={index} className="text-lg text-gray-600 mb-8">
                      {section.content}
                    </p>
                  );
                case 'heading':
                  return (
                    <h2 key={index} className="text-3xl font-bold text-gray-900 mb-6">
                      {section.content}
                    </h2>
                  );
                case 'list':
                  return (
                    <ul key={index} className="list-disc list-inside text-lg text-gray-600 mb-12 space-y-4">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}

            {/* CTA Section */}
            <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
              <Link 
                href={`/${lang}/contact`}
                className="inline-block bg-[#023A65] text-white px-6 py-3 rounded-full hover:bg-[#034b82] transition-colors"
              >
                {t('home.hero.cta')}
              </Link>

              <Link 
                href={`/${lang}/blog`}
                className="text-[#023A65] hover:text-[#034b82] transition-colors"
              >
                ← {t('blog.posts.readMore')}
              </Link>
            </div>
          </div>
        </article>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}