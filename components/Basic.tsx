'use client';
import Image from 'next/image';
import clearBraces from '@/app/assets/clear-braces.jpg';
import clearAligners from '@/app/assets/clear-aligners.jpg';
// Import other images if needed

interface BasicProps {
  imageUrl: string;
  title: string;
  description: any[];
  reverse?: boolean;
  withIcons?: boolean;
}

export default function Basic({ imageUrl, title, description, reverse = false, withIcons = false }: BasicProps) {
  // Function to get the correct image based on the URL
  const getImage = (url: string) => {
    if (url.includes('clear-braces')) return clearBraces;
    if (url.includes('clear-aligners')) return clearAligners;
    // Add other image conditions if needed
    return clearBraces; // default fallback
  };

  return (
    <section className="py-24">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'direction-rtl' : ''}`}>
          {/* Image */}
          <div className="rounded-lg overflow-hidden h-[500px] relative">
            <Image
              src={getImage(imageUrl)}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">{title}</h2>
            <div className="space-y-8">
              {description.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  {withIcons && (
                    <div className="w-12 h-12 rounded-full bg-[#023A65] text-white flex items-center justify-center flex-shrink-0">
                      {/* Add your icon component here if needed */}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}