'use client';

import { FaGoogle, FaStar } from 'react-icons/fa';
import { useTranslations } from '@/hooks/useTranslations';

const googleReviewsUrl =
  'https://www.google.com/maps/place/Colorado+Braces/@39.7049671,-104.9417544,17z/data=!3m1!5s0x876c7e8061db79e7:0xbde18871204a939c!4m8!3m7!1s0xa27f039dea1dd551:0x9f1a56be30a348f0!8m2!3d39.7049671!4d-104.9417544!9m1!1b1!16s%2Fg%2F11tsmh7v69';

export default function Testimonials() {
  const { lang } = useTranslations();
  const spanish = lang === 'es';

  return (
    <section className="bg-gray-50 py-20 lg:py-24" aria-labelledby="google-reviews-title">
      <div className="mx-auto max-w-[1350px] px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white px-6 py-12 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 md:py-16">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#023A65]/10 text-2xl text-[#023A65]">
            <FaGoogle aria-hidden="true" />
          </div>
          <h2 id="google-reviews-title" className="text-3xl font-bold text-gray-900 lg:text-4xl">
            {spanish ? 'Nuestras Reseñas en Google' : 'See Our Google Reviews'}
          </h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <span className="flex gap-1 text-2xl text-amber-500" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => <FaStar key={index} />)}
            </span>
            <span className="text-lg font-bold text-gray-900">
              {spanish ? '5,0 de 5 en Google' : '5.0 out of 5 on Google'}
            </span>
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            {spanish
              ? 'Lee las experiencias que otras personas han compartido en nuestro perfil de Google.'
              : 'Read experiences people have shared on our Google Business Profile.'}
          </p>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#023A65] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#03528f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#023A65]"
          >
            {spanish ? 'Leer reseñas en Google Maps ↗' : 'Read reviews on Google Maps ↗'}
          </a>
        </div>
      </div>
    </section>
  );
}
