'use client';
import { useTranslations } from '@/hooks/useTranslations';
import Image from 'next/image';
import testimonial1 from '@/app/assets/testimonial1.jpg';
import testimonial2 from '@/app/assets/testimonial2.jpg';
import testimonial3 from '@/app/assets/testimonial3.jpg';

export default function Testimonials() {
  const { t } = useTranslations();
  const testimonials = t('home.testimonials.items');
  
  const testimonialImages = [testimonial1, testimonial2, testimonial3];

  return (
    <section className="py-24 bg-gray-50">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-16">
        {t('home.testimonials.title')}
      </h2>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="flex flex-col items-start p-6 lg:p-8 bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            <div className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full bg-[#023A65] overflow-hidden relative mb-4 lg:mb-6">
              <Image
                src={testimonialImages[index]}
                alt={`${testimonial.author} profile`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 50px, 60px"
              />
            </div>

            <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
              {testimonial.title}
            </h3>

            <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 italic">
              "{testimonial.description}"
            </p>

            <div className="mt-auto text-xs lg:text-sm">
              <span className="font-medium text-gray-900">— {testimonial.author}</span>
              <span className="text-gray-500">, {testimonial.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 