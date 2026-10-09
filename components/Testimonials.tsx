'use client';

import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay, FaStar } from 'react-icons/fa';
import { useTranslations } from '@/hooks/useTranslations';

// Short, unedited reviews from the Colorado Braces Google Maps business profile.
// This is a curated snapshot, not a live Google feed.
const reviews = [
  {
    author: 'Nate Andorsky',
    text: "Top notch! Can't recommend enough, Dr. Garcia provided excellent care and has great bedside manner.",
  },
  {
    author: 'Charlyn Moss',
    text: 'I had a great experience correcting my smile with Colorado Braces!',
  },
  {
    author: 'Oceane Andreis',
    text: 'A really sweet and attentive team. I felt in good hands the whole way through!',
  },
  {
    author: 'Kristen Johnson',
    text: 'Dr. Garcia and his staff are amazing! He is very caring and talented. I highly recommend Dr. Garcia for any orthodontic needs!',
  },
];

const googleReviewsUrl =
  'https://www.google.com/maps/place/Colorado+Braces/@39.7049671,-104.9417544,17z/data=!3m1!5s0x876c7e8061db79e7:0xbde18871204a939c!4m8!3m7!1s0xa27f039dea1dd551:0x9f1a56be30a348f0!8m2!3d39.7049671!4d-104.9417544!9m1!1b1!16s%2Fg%2F11tsmh7v69';

export default function Testimonials() {
  const { t, lang } = useTranslations();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const spanish = lang === 'es';

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (paused || interacting || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % reviews.length);
    }, 11000);
    return () => window.clearInterval(timer);
  }, [activeIndex, paused, interacting, reducedMotion]);

  const review = reviews[activeIndex];

  return (
    <section className="bg-gray-50 py-20 lg:py-24" aria-label={t('home.testimonials.title')}>
      <div className="mx-auto max-w-[1350px] px-4">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 lg:mb-12 lg:text-4xl">
          {t('home.testimonials.title')}
        </h2>

        <div
          className="mx-auto max-w-4xl"
          role="region"
          aria-roledescription="carousel"
          aria-label={spanish ? 'Reseñas de Google' : 'Google reviews'}
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
          onFocusCapture={() => setInteracting(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false);
          }}
        >
          <div className="flex min-h-[280px] flex-col justify-between rounded-2xl bg-white p-7 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:min-h-[260px] md:p-10">
            <div
              key={activeIndex}
              className={reducedMotion ? '' : 'review-enter'}
              role="group"
              aria-roledescription="slide"
              aria-label={`${activeIndex + 1} ${spanish ? 'de' : 'of'} ${reviews.length}`}
            >
              <div className="mb-5 flex items-center gap-1 text-amber-500" aria-label={spanish ? '5 de 5 estrellas' : '5 out of 5 stars'}>
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar key={index} aria-hidden="true" />
                ))}
              </div>
              <blockquote lang="en" className="text-xl leading-relaxed text-gray-800 md:text-2xl">
                “{review.text}”
              </blockquote>
              <p className="mt-6 font-semibold text-gray-900">— {review.author}</p>
              <p className="mt-1 text-sm text-gray-500">
                {spanish ? 'Reseña original en inglés en Google Maps' : 'Google Maps review'}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveIndex((index) => (index - 1 + reviews.length) % reviews.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-[#023A65] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#023A65]"
                aria-label={spanish ? 'Reseña anterior' : 'Previous review'}
              >
                <FaChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-[#023A65] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#023A65]"
                aria-label={paused ? (spanish ? 'Reanudar reseñas' : 'Play reviews') : (spanish ? 'Pausar reseñas' : 'Pause reviews')}
                aria-pressed={paused}
              >
                {paused ? <FaPlay aria-hidden="true" /> : <FaPause aria-hidden="true" />}
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((index) => (index + 1) % reviews.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-[#023A65] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#023A65]"
                aria-label={spanish ? 'Siguiente reseña' : 'Next review'}
              >
                <FaChevronRight aria-hidden="true" />
              </button>
              <span className="ml-2 text-sm text-gray-500" aria-live="off">
                {activeIndex + 1} / {reviews.length}
              </span>
            </div>

            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#023A65] underline underline-offset-4 hover:text-[#03528f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#023A65]"
            >
              {spanish ? 'Ver reseñas en Google Maps ↗' : 'Read reviews on Google Maps ↗'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
