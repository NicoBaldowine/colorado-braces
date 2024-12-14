import Image from 'next/image';
import social1 from '@/app/assets/social1.svg';
import social2 from '@/app/assets/social2.svg';
import social3 from '@/app/assets/social3.svg';

export default function SocialProof() {
  const logos = [
    { src: social1, alt: 'Social Proof Logo 1' },
    { src: social2, alt: 'Social Proof Logo 2' },
    { src: social3, alt: 'Social Proof Logo 3' },
    { src: social2, alt: 'Social Proof Logo 4' },
    { src: social3, alt: 'Social Proof Logo 5' },
  ];

  return (
    <section className="bg-gray-50">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="py-8 lg:py-12">
          <div className="grid grid-cols-3 lg:flex lg:items-center lg:justify-evenly gap-4 lg:gap-12">
            {logos.map((logo, index) => (
              <div key={index} className="w-full lg:w-40 h-16 lg:h-20 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 