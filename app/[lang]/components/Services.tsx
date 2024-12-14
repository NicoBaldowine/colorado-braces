import { Locale } from '@/i18n-config';

interface ServicesProps {
  lang: Locale;
  translations: {
    title: string;
    services: {
      title: string;
      description: string;
      slug: string;
    }[];
    learnMore: string;
  };
}

export default function Services({ lang, translations }: ServicesProps) {
  return (
    <section id="services" className="py-12 lg:py-24">
      <div className="max-w-[1350px] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-16">
          {translations.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {translations.services.map((service) => (
            <div 
              key={service.slug}
              className="flex flex-col lg:flex-row p-4 lg:p-6 rounded-2xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] transition-all duration-300 h-full"
            >
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-6">
                <div className="bg-gray-200 w-full h-48 lg:h-full rounded-xl" />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">
                  {service.description}
                </p>
                <a
                  href={`/${lang}/services/${service.slug}`}
                  className="mt-auto text-[#023A65] text-sm lg:text-base font-semibold hover:text-[#034b82] transition-colors"
                >
                  {translations.learnMore.replace('{{service}}', service.title)} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 