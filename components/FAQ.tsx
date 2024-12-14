"use client";
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslations } from '@/hooks/useTranslations';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useTranslations();
  const faqs = t('home.faq.items');

  return (
    <section className="max-w-[1350px] mx-auto px-4 py-12 lg:py-24">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-16">
        {t('home.faq.title')}
      </h2>

      <div className="space-y-3 lg:space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
          >
            <button
              className="w-full flex items-center justify-between p-4 lg:p-6 text-left hover:bg-gray-100 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="text-base lg:text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <FaChevronDown 
                className={`flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5 text-gray-500 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-[500px]' : 'max-h-0'
              }`}
            >
              <p className="p-4 lg:p-6 text-sm lg:text-base text-gray-700 font-medium border-t border-gray-200 bg-white">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 