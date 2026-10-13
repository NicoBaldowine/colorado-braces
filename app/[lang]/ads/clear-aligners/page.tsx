import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCheck, FaMapMarkerAlt, FaPhoneAlt, FaStar } from 'react-icons/fa';
import AdsClearAlignersForm from '@/components/AdsClearAlignersForm';
import logo from '@/app/assets/colorado-braces.svg';
import alignersImage from '@/app/assets/clear-aligners.jpg';
import doctorImage from '@/app/assets/eduardo-garcia.jpg';
import invisalignLogo from '@/app/assets/socials/social-1.png';
import orthoFxLogo from '@/app/assets/socials/social-2.png';
import angelAlignersLogo from '@/app/assets/socials/social-3.png';

type Language = 'en' | 'es';

const googleReviewsUrl = 'https://www.google.com/maps/place/Colorado+Braces/@39.7049671,-104.9417544,17z/data=!3m1!5s0x876c7e8061db79e7:0xbde18871204a939c!4m8!3m7!1s0xa27f039dea1dd551:0x9f1a56be30a348f0!8m2!3d39.7049671!4d-104.9417544!9m1!1b1!16s%2Fg%2F11tsmh7v69';
const mapsDirectionsUrl = 'https://www.google.com/maps/search/?api=1&query=3955+E+Exposition+Ave+%23310+Denver+CO+80209';
const alignerLogos = [
  { name: 'Invisalign', image: invisalignLogo },
  { name: 'OrthoFX', image: orthoFxLogo },
  { name: 'Angel Aligners', image: angelAlignersLogo },
];

const copy = {
  en: {
    eyebrow: 'CLEAR ALIGNERS IN DENVER',
    headline: 'A straighter smile, on your terms.',
    subhead: 'Explore discreet clear aligner treatment with Dr. Eduardo Garcia at Colorado Braces. We offer Invisalign, OrthoFX, and Angel Aligners, with a plan tailored to your smile.',
    primaryCta: 'Request a free consultation',
    callCta: 'Call our office',
    heroNote: 'Located in central Denver',
    trust: ['Personalized treatment plan', 'Multiple aligner options', 'Convenient Denver office'],
    sectionEyebrow: 'MADE FOR REAL LIFE',
    sectionTitle: 'A clear path to your best smile',
    sectionIntro: 'Clear aligners can be a comfortable, discreet way to improve alignment. We will evaluate your smile and explain whether they are a good fit for you.',
    benefits: [
      { title: 'Subtle by design', body: 'Transparent trays are less noticeable than traditional braces for many patients.' },
      { title: 'Easy to remove', body: 'Take aligners out for meals and your regular brushing and flossing routine.' },
      { title: 'A plan for you', body: 'Your treatment recommendation starts with an evaluation of your teeth, bite, and goals.' },
    ],
    providerLabel: 'ALIGNER OPTIONS AT COLORADO BRACES',
    providerIntro: 'One size does not fit every smile. We will discuss the right treatment option after your consultation.',
    doctorEyebrow: 'YOUR ORTHODONTIST',
    doctorTitle: 'Meet Dr. Eduardo Garcia',
    doctorText: 'Get clear answers and a treatment plan grounded in your needs. Dr. Garcia and the Colorado Braces team will help you understand your options before you decide.',
    doctorLink: 'Learn about Dr. Garcia',
    reviewText: 'See what people say about Colorado Braces',
    reviewLink: 'Read Google reviews',
    locationTitle: 'Visit us in Denver',
    locationText: '3955 E Exposition Ave. #310, Denver, CO 80209',
    directions: 'Get directions',
    faqTitle: 'Questions about clear aligners?',
    faqs: [
      { question: 'Are clear aligners right for me?', answer: 'That depends on your teeth, bite, and treatment goals. A consultation helps us recommend the option that fits your needs.' },
      { question: 'How long does treatment take?', answer: 'Treatment length varies. After evaluating your smile, we can explain your recommended plan and expected timeline.' },
      { question: 'How do I get started?', answer: 'Request a free consultation using the form above, or call our office. We will help you find a time to visit.' },
    ],
    finalTitle: 'Ready to explore clear aligners?',
    finalText: 'Start with a free consultation at Colorado Braces in Denver.',
    footerPrivacy: 'Privacy Policy',
    footerHome: 'Main website',
  },
  es: {
    eyebrow: 'ALINEADORES TRANSPARENTES EN DENVER',
    headline: 'Una sonrisa más alineada, a tu manera.',
    subhead: 'Conoce el tratamiento con alineadores transparentes del Dr. Eduardo Garcia en Colorado Braces. Ofrecemos Invisalign, OrthoFX y Angel Aligners, con un plan pensado para tu sonrisa.',
    primaryCta: 'Solicita una consulta gratuita',
    callCta: 'Llama al consultorio',
    heroNote: 'En el centro de Denver',
    trust: ['Plan de tratamiento personalizado', 'Varias opciones de alineadores', 'Consultorio accesible en Denver'],
    sectionEyebrow: 'PENSADOS PARA TU DÍA A DÍA',
    sectionTitle: 'Un camino claro hacia tu mejor sonrisa',
    sectionIntro: 'Los alineadores transparentes pueden ser una forma cómoda y discreta de mejorar la alineación. Evaluaremos tu sonrisa y te explicaremos si son adecuados para ti.',
    benefits: [
      { title: 'Discretos', body: 'Los alineadores transparentes se notan menos que los brackets tradicionales en muchos casos.' },
      { title: 'Removibles', body: 'Puedes quitártelos para comer, cepillarte los dientes y usar hilo dental.' },
      { title: 'Un plan para ti', body: 'La recomendación comienza con una evaluación de tus dientes, tu mordida y tus objetivos.' },
    ],
    providerLabel: 'OPCIONES DE ALINEADORES EN COLORADO BRACES',
    providerIntro: 'Cada sonrisa es diferente. Conversaremos sobre la mejor opción después de tu consulta.',
    doctorEyebrow: 'TU ORTODONCISTA',
    doctorTitle: 'Conoce al Dr. Eduardo Garcia',
    doctorText: 'Recibe respuestas claras y un plan adaptado a tus necesidades. El Dr. Garcia y el equipo de Colorado Braces te ayudarán a comprender tus opciones antes de decidir.',
    doctorLink: 'Conoce al Dr. Garcia',
    reviewText: 'Conoce lo que opinan sobre Colorado Braces',
    reviewLink: 'Leer reseñas en Google',
    locationTitle: 'Visítanos en Denver',
    locationText: '3955 E Exposition Ave. #310, Denver, CO 80209',
    directions: 'Cómo llegar',
    faqTitle: '¿Preguntas sobre los alineadores?',
    faqs: [
      { question: '¿Los alineadores son adecuados para mí?', answer: 'Depende de tus dientes, tu mordida y tus objetivos. En la consulta podremos recomendarte la opción más apropiada.' },
      { question: '¿Cuánto dura el tratamiento?', answer: 'La duración varía en cada caso. Después de evaluar tu sonrisa, podremos explicarte el plan y el tiempo estimado.' },
      { question: '¿Cómo puedo empezar?', answer: 'Solicita una consulta gratuita con el formulario de arriba o llama al consultorio. Te ayudaremos a encontrar un horario.' },
    ],
    finalTitle: '¿Listo para conocer tus opciones?',
    finalText: 'Comienza con una consulta gratuita en Colorado Braces en Denver.',
    footerPrivacy: 'Política de privacidad',
    footerHome: 'Sitio principal',
  },
};

export default function ClearAlignersAdsPage({ params }: { params: { lang: string } }) {
  const lang: Language = params.lang === 'es' ? 'es' : 'en';
  const t = copy[lang];
  const otherLanguage: Language = lang === 'en' ? 'es' : 'en';

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href={`/${lang}/`} aria-label="Colorado Braces home" className="shrink-0">
            <Image src={logo.src} alt="Colorado Braces" width={164} height={50} priority className="h-auto w-[130px] sm:w-[164px]" />
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
            <Link href={`/${otherLanguage}/ads/clear-aligners/`} lang={otherLanguage} className="text-sm font-semibold text-[#023A65] underline-offset-4 hover:underline">
              {otherLanguage === 'es' ? 'Español' : 'English'}
            </Link>
            <a href="tel:3039914455" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#023A65] px-3 text-sm font-bold text-[#023A65] transition hover:bg-[#023A65] hover:text-white sm:px-5">
              <FaPhoneAlt aria-hidden="true" className="text-xs" />
              <span className="hidden sm:inline">(303) 991-4455</span>
              <span className="sm:hidden">{lang === 'es' ? 'Llamar' : 'Call'}</span>
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#f2f7f6]">
        <div className="pointer-events-none absolute -left-40 -top-52 h-[480px] w-[480px] rounded-full bg-[#d5e8e2]/70 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 lg:py-20">
          <div>
            <span className="inline-flex rounded-full border border-[#accbc3] bg-white/80 px-4 py-2 text-xs font-extrabold tracking-[0.14em] text-[#023A65]">{t.eyebrow}</span>
            <h1 className="mt-6 max-w-[670px] text-[42px] font-extrabold leading-[1.08] tracking-tight text-[#023A65] sm:text-[56px] lg:text-[64px]">{t.headline}</h1>
            <p className="mt-6 max-w-[610px] text-lg leading-relaxed text-slate-700 sm:text-xl">{t.subhead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#consultation" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#023A65] px-6 py-3 text-center font-bold text-white transition hover:bg-[#03528f]">
                {t.primaryCta} <FaArrowRight aria-hidden="true" className="text-sm" />
              </a>
              <a href="tel:3039914455" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#023A65] px-6 py-3 text-center font-bold text-[#023A65] transition hover:bg-white">
                <FaPhoneAlt aria-hidden="true" className="text-sm" /> {t.callCta}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#386b63]">
              <FaMapMarkerAlt aria-hidden="true" /> {t.heroNote}
            </div>
          </div>
          <AdsClearAlignersForm lang={lang} />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white" aria-label={lang === 'es' ? 'Ventajas del consultorio' : 'Practice highlights'}>
        <div className="mx-auto grid max-w-[1200px] gap-5 px-5 py-7 sm:px-8 md:grid-cols-3 md:gap-8">
          {t.trust.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#023A65] sm:text-base">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e5f1ed] text-[#3b8173]"><FaCheck aria-hidden="true" className="text-xs" /></span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <div className="relative overflow-hidden rounded-[28px] bg-[#e6f0ed] shadow-[0_20px_55px_-35px_rgba(2,58,101,0.4)]">
          <Image src={alignersImage} alt={lang === 'es' ? 'Alineador transparente sobre los dientes' : 'Clear aligner over the teeth'} className="h-[340px] w-full object-cover sm:h-[450px]" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div>
          <p className="text-xs font-extrabold tracking-[0.16em] text-[#3b8173]">{t.sectionEyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#023A65] sm:text-4xl">{t.sectionTitle}</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{t.sectionIntro}</p>
          <div className="mt-8 space-y-6">
            {t.benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e5f1ed] text-[#3b8173]"><FaCheck aria-hidden="true" className="text-xs" /></span>
                <div>
                  <h3 className="text-lg font-bold text-[#023A65]">{benefit.title}</h3>
                  <p className="mt-1 leading-relaxed text-slate-600">{benefit.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#023A65] px-5 py-14 text-center text-white sm:px-8">
        <div className="mx-auto max-w-[1050px]">
          <p className="text-xs font-extrabold tracking-[0.16em] text-[#b9dbd2]">{t.providerLabel}</p>
          <div className="mt-7 grid items-center justify-center gap-4 sm:grid-cols-3">
            {alignerLogos.map(({ name, image }) => (
              <div key={name} className="relative mx-auto aspect-[3.2/1] w-full max-w-[330px] overflow-hidden rounded-xl bg-[#f7f8f8] shadow-sm">
                <Image src={image} alt={`${name} logo`} fill className="object-cover object-center" sizes="(max-width: 640px) 330px, (max-width: 1200px) 30vw, 330px" />
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-100">{t.providerIntro}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20 lg:py-24">
        <div className="mx-auto w-full max-w-[330px] overflow-hidden rounded-[28px] bg-slate-100">
          <Image src={doctorImage} alt="Dr. Eduardo Garcia" className="aspect-square w-full object-cover" sizes="(max-width: 1024px) 330px, 33vw" />
        </div>
        <div>
          <p className="text-xs font-extrabold tracking-[0.16em] text-[#3b8173]">{t.doctorEyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#023A65] sm:text-4xl">{t.doctorTitle}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{t.doctorText}</p>
          <Link href={`/${lang}/about/#doctor`} className="mt-6 inline-flex items-center gap-2 font-bold text-[#023A65] underline underline-offset-4 hover:text-[#03528f]">{t.doctorLink} <FaArrowRight aria-hidden="true" className="text-sm" /></Link>
        </div>
      </section>

      <section className="bg-[#f2f7f6] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-2 md:gap-12">
          <div className="rounded-[24px] bg-white p-8">
            <div className="flex gap-1 text-amber-500" aria-hidden="true">{Array.from({ length: 5 }, (_, index) => <FaStar key={index} />)}</div>
            <h2 className="mt-4 text-2xl font-bold text-[#023A65]">{t.reviewText}</h2>
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-[#023A65] underline underline-offset-4">{t.reviewLink} <FaArrowRight aria-hidden="true" className="text-sm" /></a>
          </div>
          <div className="rounded-[24px] bg-white p-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e5f1ed] text-[#3b8173]"><FaMapMarkerAlt aria-hidden="true" /></div>
            <h2 className="mt-4 text-2xl font-bold text-[#023A65]">{t.locationTitle}</h2>
            <p className="mt-2 text-slate-600">{t.locationText}</p>
            <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-[#023A65] underline underline-offset-4">{t.directions} <FaArrowRight aria-hidden="true" className="text-sm" /></a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="text-center text-3xl font-extrabold text-[#023A65] sm:text-4xl">{t.faqTitle}</h2>
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {t.faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-[#023A65] marker:hidden">
                {faq.question}<span className="text-2xl font-light text-[#3b8173] group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 max-w-[720px] leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#023A65] px-5 py-16 text-center text-white sm:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{t.finalTitle}</h2>
        <p className="mt-3 text-lg text-blue-100">{t.finalText}</p>
        <a href="#consultation" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 font-bold text-[#023A65] transition hover:bg-[#e5f1ed]">{t.primaryCta} <FaArrowRight aria-hidden="true" className="text-sm" /></a>
      </section>

      <footer className="bg-white px-5 py-7 text-sm text-slate-600 sm:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Colorado Braces · Denver, Colorado</span>
          <div className="flex gap-5">
            <Link href={`/${lang}/privacy/`} className="hover:text-[#023A65] hover:underline">{t.footerPrivacy}</Link>
            <Link href={`/${lang}/`} className="hover:text-[#023A65] hover:underline">{t.footerHome}</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
