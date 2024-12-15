'use client';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  learnMoreText: string;
  image: StaticImageData;
}

export default function ServiceCard({
  title,
  description,
  slug,
  learnMoreText,
  image
}: ServiceCardProps) {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'en';

  console.log('ServiceCard rendering:', {
    title,
    image
  });

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-6 rounded-2xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] transition-all duration-300 h-full">
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-6">
        <div className="w-full h-48 lg:h-[300px] rounded-xl overflow-hidden relative">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col">
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">
          {description}
        </p>
        <Link
          href={`/${lang}/services/${slug}`}
          className="mt-auto text-[#023A65] text-sm lg:text-base font-semibold hover:text-[#034b82] transition-colors"
        >
          {learnMoreText} →
        </Link>
      </div>
    </div>
  );
} 