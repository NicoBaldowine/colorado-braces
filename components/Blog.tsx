'use client';
import { useTranslations } from '@/hooks/useTranslations';
import { FaArrowRight } from 'react-icons/fa';

export default function Blog() {
  const { t } = useTranslations();
  const posts = t('home.blog.posts');

  return (
    <section className="bg-[#023A65] py-12 lg:py-24">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 lg:mb-16 gap-4 lg:gap-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            {t('home.blog.title')}
          </h2>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 lg:px-6 py-2 lg:py-3 bg-[#034b82] text-white text-sm lg:text-base font-semibold rounded-full hover:bg-[#045694] transition-colors"
          >
            {t('home.blog.seeAll')}
            <FaArrowRight className="ml-2 w-3 h-3 lg:w-4 lg:h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <div 
              key={index} 
              className="bg-[#034b82] rounded-2xl overflow-hidden hover:bg-[#045694] transition-all duration-300 flex flex-col"
            >
              <div className="w-full h-[150px] lg:h-[200px] bg-[#012845]" />
              
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-200 mb-4 lg:mb-6 line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-4 lg:px-6 py-2 lg:py-3 bg-[#045694] text-white text-sm lg:text-base font-semibold rounded-full hover:bg-[#056ab4] transition-colors"
                  >
                    {t('home.blog.readMore')}
                    <FaArrowRight className="ml-2 w-3 h-3 lg:w-4 lg:h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 