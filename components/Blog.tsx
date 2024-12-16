'use client';
import { useTranslations } from '@/hooks/useTranslations';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import blogpost1 from '@/app/assets/blogpost1.jpg';
import blogpost2 from '@/app/assets/blogpost2.jpg';
import blogpost3 from '@/app/assets/blogpost3.jpg';

export default function Blog() {
  const { t, lang } = useTranslations();

  const blogPosts = {
    en: [
      {
        title: "Invisible Braces vs. Traditional Braces: Which is Better for Your Lifestyle?",
        description: "Compare the advantages of invisible braces with conventional braces. Learn about aesthetics, comfort, maintenance, and how each option fits into your lifestyle.",
        slug: "clear-aligners-vs-traditional-braces",
        image: blogpost1
      },
      {
        title: "Can Clear Aligners Fix My Bite? Understanding Malocclusion Treatment Options",
        description: "Discover whether clear aligners can fix bite issues caused by malocclusion. Learn about the effectiveness of clear aligners in treating various bite problems.",
        slug: "can-clear-aligners-fix-bite",
        image: blogpost2
      },
      {
        title: "How Do Braces Work? A Simple Guide to Fixing Crooked Teeth and Misaligned Bites",
        description: "Learn how braces straighten crooked teeth and fix misaligned bites in this simple guide. Understand the orthodontic process and how we can help you achieve a healthy smile.",
        slug: "how-do-braces-work",
        image: blogpost3
      }
    ],
    es: [
      {
        title: "Brackets Invisibles vs. Brackets Tradicionales: ¿Cuál es Mejor para tu Estilo de Vida?",
        description: "Compara las ventajas de los brackets invisibles con los convencionales. Aprende sobre estética, comodidad, mantenimiento y cómo cada opción se adapta a tu estilo de vida.",
        slug: "clear-aligners-vs-traditional-braces",
        image: blogpost1
      },
      {
        title: "¿Pueden los Alineadores Transparentes Corregir mi Mordida? Entendiendo las Opciones de Tratamiento",
        description: "Descubre si los alineadores transparentes pueden corregir problemas de mordida causados por la maloclusión. Aprende sobre su efectividad en diversos problemas de mordida.",
        slug: "can-clear-aligners-fix-bite",
        image: blogpost2
      },
      {
        title: "¿Cómo Funcionan los Brackets? Una Guía Simple para Corregir Dientes Torcidos",
        description: "Aprende cómo los brackets enderezan los dientes torcidos y corrigen problemas de mordida en esta guía simple. Entiende el proceso ortodóntico y cómo podemos ayudarte.",
        slug: "how-do-braces-work",
        image: blogpost3
      }
    ]
  };

  const currentPosts = blogPosts[lang];

  return (
    <section className="bg-[#023A65] py-12 lg:py-24">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 lg:mb-16 gap-4 lg:gap-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            {t('home.blog.title')}
          </h2>
          <Link
            href={`/${lang}/blog`}
            className="inline-flex items-center justify-center px-4 lg:px-6 py-2 lg:py-3 bg-[#034b82] text-white text-sm lg:text-base font-semibold rounded-full hover:bg-[#045694] transition-colors"
          >
            {t('home.blog.seeAll')}
            <FaArrowRight className="ml-2 w-3 h-3 lg:w-4 lg:h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {currentPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-[#034b82] rounded-2xl overflow-hidden hover:bg-[#045694] transition-all duration-300 flex flex-col"
            >
              <div className="w-full h-[150px] lg:h-[200px] relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-200 mb-4 lg:mb-6 line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/${lang}/blog/${post.slug}`}
                    className="inline-flex items-center justify-center px-4 lg:px-6 py-2 lg:py-3 bg-[#045694] text-white text-sm lg:text-base font-semibold rounded-full hover:bg-[#056ab4] transition-colors"
                  >
                    {t('home.blog.readMore')}
                    <FaArrowRight className="ml-2 w-3 h-3 lg:w-4 lg:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 