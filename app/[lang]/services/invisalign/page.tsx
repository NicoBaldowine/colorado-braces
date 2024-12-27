'use client';
import Contact from "@/components/Contact";
import { useTranslations } from '@/hooks/useTranslations';
import { FaSmile, FaCheck, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import invisalign from '@/app/assets/invisalign.jpg';

export default function Invisalign() {
  const { t, lang } = useTranslations();

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#023A65] text-white py-24">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8">
              {t('services.invisalign.hero.title')}
            </h1>
            <p className="text-xl leading-relaxed text-gray-200">
              {t('services.invisalign.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the component structure is the same as ClearAligners */}
      {/* Just update the t() references to use services.invisalign.* */}
    </main>
  );
} 