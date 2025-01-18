'use client';
import Image from 'next/image';
import social1 from '@/app/assets/socials/social-1.png';
import social2 from '@/app/assets/socials/social-2.png';
import social3 from '@/app/assets/socials/social-3.png';
import social4 from '@/app/assets/socials/social-4.png';
import social5 from '@/app/assets/socials/social-5.png';
import social6 from '@/app/assets/socials/social-6.png';
import social7 from '@/app/assets/socials/social-7.png';
import social8 from '@/app/assets/socials/social-8.png';

export default function SocialProof() {
  const logos = [
    { src: social1, alt: "Social Proof Logo 1" },
    { src: social2, alt: "Social Proof Logo 2" },
    { src: social3, alt: "Social Proof Logo 3" },
    { src: social4, alt: "Social Proof Logo 4" },
    { src: social5, alt: "Social Proof Logo 5" },
    { src: social6, alt: "Social Proof Logo 6" },
    { src: social7, alt: "Social Proof Logo 7" },
    { src: social8, alt: "Social Proof Logo 8" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 lg:gap-4 justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="w-[150px] h-[75px] relative">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 150px, (max-width: 1024px) 150px, 150px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 