'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Link from "next/link";
import { useTranslations } from '@/hooks/useTranslations';

export default function BlogPost() {
  const { t, lang } = useTranslations();
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Blog Post Hero */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-[800px] mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Clear Aligners vs Traditional Braces: Making the Right Choice
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>March 10, 2024</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </div>
        </section>

        <article className="py-24">
          <div className="max-w-[800px] mx-auto px-4">
            {/* Featured Image Placeholder */}
            <div className="w-full h-[400px] mb-12 rounded-lg bg-gray-200"></div>

            {/* Introduction */}
            <p className="text-lg text-gray-600 mb-8">
              Clear aligners are a popular orthodontic treatment option for adults and teenagers. 
              They are removable, transparent, and made of smooth plastic. Clear aligners are 
              designed to gradually move teeth into their correct positions, correcting bite 
              issues caused by malocclusion.
            </p>

            {/* How Clear Aligners Work */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Clear Aligners Work
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Clear aligners are worn over the teeth and are replaced every two weeks. 
              They are removed for eating, drinking, and cleaning. Clear aligners are 
              designed to gradually move teeth into their correct positions, correcting 
              bite issues caused by malocclusion.
            </p>

            {/* Additional Image Placeholder */}
            <div className="w-full h-[300px] my-12 rounded-lg bg-gray-200"></div>
            <p className="text-sm text-gray-500 mt-2 italic">
              Clear aligners are custom-made for each patient's unique treatment plan
            </p>

            {/* Benefits of Clear Aligners */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Benefits of Clear Aligners
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-12 space-y-4">
              <li>Clear aligners are removable, allowing for easier cleaning and maintenance</li>
              <li>Clear aligners are transparent, making them less noticeable than traditional metal braces</li>
              <li>Clear aligners are comfortable and can be removed for eating and drinking</li>
              <li>Clear aligners are effective in correcting bite issues caused by malocclusion</li>
            </ul>

            {/* CTA Section */}
            <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
              <Link 
                href={`/${lang}/contact`}
                className="inline-block bg-[#023A65] text-white px-6 py-3 rounded-full hover:bg-[#034b82] transition-colors"
              >
                Schedule a Consultation
              </Link>

              <Link 
                href={`/${lang}/blog`}
                className="text-[#023A65] hover:text-[#034b82] transition-colors"
              >
                ← Back to Blog
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