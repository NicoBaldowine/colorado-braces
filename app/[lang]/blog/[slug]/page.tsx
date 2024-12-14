'use client';
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useTranslations } from '@/hooks/useTranslations';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function BlogPost() {
  const { t, lang } = useTranslations();
  const params = useParams();
  const slug = params.slug as string;

  // Find the blog post that matches the current slug
  const post = t('blog.posts').find(post => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Blog Post Hero */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-[1350px] mx-auto px-4">
            <div className="max-w-[800px] mx-auto">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <Link 
                  href={`/${lang}/blog`}
                  className="text-[#023A65] hover:underline"
                >
                  {t('blog.backToBlog')}
                </Link>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600">
                {post.description}
              </p>
            </div>
          </div>
        </section>

        {/* Blog Post Content */}
        <section className="py-24">
          <div className="max-w-[1350px] mx-auto px-4">
            <div className="max-w-[800px] mx-auto">
              <div className="prose prose-lg max-w-none">
                {post.content.map((section, index) => (
                  <div key={index}>
                    {section.type === 'paragraph' && (
                      <p className="mb-6 text-gray-600">{section.content}</p>
                    )}
                    {section.type === 'heading' && (
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">{section.content}</h2>
                    )}
                    {section.type === 'list' && (
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600">{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
} 