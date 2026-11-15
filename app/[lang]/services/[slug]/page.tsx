import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Contact from '@/components/Contact';
import { localizedMetadata } from '@/lib/seo';
import { serviceDetails } from '@/lib/serviceDetails';
import type { ServiceLanguage } from '@/lib/serviceCatalog';
import { serviceImages, serviceImageClass, serviceImageAlt } from '@/lib/serviceImages';

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { lang: string; slug: string } }): Metadata {
  const service = serviceDetails[params.slug];
  if (!service) return {};
  return localizedMetadata(params.lang, `services/${params.slug}`, {
    en: { title: `${service.en.title} in Denver | Colorado Braces`, description: service.en.summary },
    es: { title: `${service.es.title} en Denver | Colorado Braces`, description: service.es.summary },
  });
}

export default function ServiceDetailPage({ params }: { params: { lang: string; slug: string } }) {
  const service = serviceDetails[params.slug];
  if (!service) notFound();

  const lang: ServiceLanguage = params.lang === 'es' ? 'es' : 'en';
  const copy = service[lang];

  return (
    <main>
      <section className="bg-gradient-to-b from-[#023A65] to-[#034b82] px-4 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-[1350px]">
          <Link href={`/${lang}/services/`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#b8dfe2] hover:text-white">
            <span aria-hidden="true">←</span> {lang === 'es' ? 'Todos los servicios' : 'All services'}
          </Link>
          <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-tight lg:text-5xl">{copy.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 lg:text-xl">{copy.summary}</p>
          <Link href={`/${lang}/appointment/`} className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-[#023A65] transition hover:bg-slate-100">
            {lang === 'es' ? 'Agenda una consulta' : 'Schedule a consultation'}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1350px] px-4 py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f2f2f2] shadow-lg">
            <Image src={serviceImages[params.slug]} alt={serviceImageAlt[params.slug][lang]} fill className={serviceImageClass(params.slug)} sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">{copy.introTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{copy.intro}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {copy.highlights.map((highlight, index) => (
            <div key={highlight.title} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <span className="text-sm font-bold tracking-[0.18em] text-[#4e8f8b]">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{highlight.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{highlight.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-[#e9f3f4] p-8 lg:p-10">
          <h2 className="text-2xl font-bold text-[#023A65]">{copy.nextTitle}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">{copy.next}</p>
          {service.sourceUrl && (
            <a href={service.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-semibold text-[#023A65] underline underline-offset-4">
              {lang === 'es' ? 'Conoce los estándares de la AADSM' : 'Read the AADSM practice standards'}
            </a>
          )}
        </div>

        <div className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Link href={`/${lang}/appointment/`} className="inline-flex rounded-full bg-[#023A65] px-7 py-3 font-semibold text-white transition hover:bg-[#034b82]">
            {lang === 'es' ? 'Agenda una consulta' : 'Schedule a consultation'}
          </Link>
          <Link href={`/${lang}/services/`} className="font-semibold text-[#023A65] underline underline-offset-4">
            {lang === 'es' ? 'Ver todos los servicios' : 'Explore all services'}
          </Link>
        </div>
      </section>
      <Contact />
    </main>
  );
}
