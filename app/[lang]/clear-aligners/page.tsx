'use client';
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import Basic from "@/components/Basic";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from 'next/image';
import social1 from '@/app/assets/socials/social-1.png';
import social2 from '@/app/assets/socials/social-2.png';
import social3 from '@/app/assets/socials/social-3.png';

export default function ClearAligners() {
  const benefitsContent = [
    // ... your existing content arrays
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero 
          title="Transform Your Smile with Clear Aligners in Denver"
          description="Transform your smile discreetly with our advanced clear aligner treatments. We offer both Invisalign® and OrthoFX solutions, providing you with flexible, comfortable, and effective options for achieving the straight, confident smile you deserve. Our experienced team will guide you through every step of your orthodontic journey."
        />

        {/* Add Social Proof Section here */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-[1350px] mx-auto px-4">
            <div className="flex justify-center items-center gap-12">
              {[social1, social2, social3].map((logo, index) => (
                <div key={index} className="w-[150px] h-[75px] relative">
                  <Image
                    src={logo}
                    alt={`Clear Aligners Provider ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="150px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Basic 
          imageUrl="/images/clear-aligners-benefits.jpg"
          title="Benefits of Clear Aligners"
          description={benefitsContent}
          reverse
          withIcons
        />
        {/* ... rest of your existing components ... */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
} 