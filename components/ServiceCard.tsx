'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  learnMoreText: string;
}

export default function ServiceCard({
  title,
  description,
  slug,
  learnMoreText
}: ServiceCardProps) {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'en';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">
          {description}
        </p>
        <Link
          href={`/${lang}/services/${slug}`}
          className="mt-auto text-[#023A65] text-sm lg:text-base font-semibold hover:text-[#034b82] transition-colors"
        >
          {learnMoreText.replace('{{service}}', title)} →
        </Link>
      </div>
    </div>
  );
} 