import Image from 'next/image';
import Link from 'next/link';
import Contact from '@/components/Contact';
import { serviceCards, type ServiceLanguage } from '@/lib/serviceCatalog';
import { serviceImages, serviceImageClass } from '@/lib/serviceImages';

const pageCopy = {
  en: {
    eyebrow: 'Explore our care',
    title: 'Services for every stage of your smile',
    intro: 'From braces and aligners to retainers, protective guards, and sleep-appliance care, explore your options and find out what fits your needs.',
    orthodontics: 'Orthodontic care & whitening',
    learn: 'Explore',
    ctaTitle: 'Not sure where to start?',
    ctaText: 'We will listen to your goals, evaluate your needs, and explain the options at a consultation.',
    ctaButton: 'Schedule a consultation',
  },
  es: {
    eyebrow: 'Explora nuestra atención',
    title: 'Servicios para cada etapa de tu sonrisa',
    intro: 'Desde brackets y alineadores hasta retenedores, protectores y terapia con dispositivos para el sueño: conoce tus opciones y descubre cuál se adapta a ti.',
    orthodontics: 'Ortodoncia y blanqueamiento',
    learn: 'Conocer más',
    ctaTitle: '¿No sabes por dónde empezar?',
    ctaText: 'Escucharemos tus objetivos, evaluaremos tus necesidades y te explicaremos las opciones durante una consulta.',
    ctaButton: 'Agenda una consulta',
  },
};

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const lang: ServiceLanguage = params.lang === 'es' ? 'es' : 'en';
  const copy = pageCopy[lang];

  const renderCard = (service: typeof serviceCards[number]) => {
    const image = serviceImages[service.slug];
    const content = service[lang];
    return (
      <Link
        key={service.slug}
        href={`/${lang}/services/${service.slug}/`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#023A65] lg:flex-row"
        aria-label={`${copy.learn}: ${content.title}`}
      >
        <div className="relative h-48 w-full shrink-0 overflow-hidden bg-gradient-to-br from-[#d8ecf4] to-[#a8cfcb] lg:h-auto lg:w-[42%]">
          <Image src={image} alt="" fill className={`${serviceImageClass(service.slug)} transition-transform duration-300 group-hover:scale-[1.03] ${service.slug === 'adult-orthodontics' ? 'group-hover:scale-[1.45]' : ''}`} sizes="(max-width: 1024px) 100vw, 35vw" />
        </div>
        <div className="flex flex-1 flex-col p-6 lg:p-7">
          <h3 className="mb-3 text-xl font-bold text-slate-900 lg:text-2xl">{content.title}</h3>
          <p className="mb-5 leading-relaxed text-slate-600">{content.summary}</p>
          <span className="mt-auto inline-flex items-center gap-2 font-semibold text-[#023A65]">
            {copy.learn} <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    );
  };

  return (
    <main>
      <section className="bg-gradient-to-b from-[#023A65] to-[#034b82] px-4 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-[1350px]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#a8cfcb]">{copy.eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight lg:text-5xl">{copy.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 lg:text-xl">{copy.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1350px] px-4 py-16 lg:py-20">
        <h2 className="mb-8 text-3xl font-bold text-slate-900">{copy.orthodontics}</h2>
        <div className="grid gap-7 lg:grid-cols-2">
          {serviceCards.filter((service) => service.featured).map(renderCard)}
        </div>

        <div className="mt-7 grid gap-7 lg:grid-cols-2">
          {serviceCards.filter((service) => !service.featured).map(renderCard)}
        </div>

        <div className="mt-20 rounded-2xl bg-[#023A65] p-8 text-center text-white lg:p-12">
          <h2 className="text-3xl font-bold">{copy.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">{copy.ctaText}</p>
          <Link href={`/${lang}/appointment/`} className="mt-7 inline-flex rounded-full bg-white px-8 py-3 font-semibold text-[#023A65] transition hover:bg-slate-100">
            {copy.ctaButton}
          </Link>
        </div>
      </section>
      <Contact />
    </main>
  );
}
