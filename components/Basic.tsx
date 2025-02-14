'use client';
import Image from 'next/image';
import placecb from '@/app/assets/placecb.jpg';
import { FaCheckCircle, FaHeart, FaUserMd, FaSmile } from 'react-icons/fa';

interface BasicProps {
  imageUrl: string;
  title: string;
  description: any[];
  reverse?: boolean;
  withIcons?: boolean;
}

export default function Basic({ imageUrl, title, description, reverse = false, withIcons = false }: BasicProps) {
  // Function to get icon based on index
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FaCheckCircle className="w-6 h-6" />;
      case 1:
        return <FaHeart className="w-6 h-6" />;
      case 2:
        return <FaUserMd className="w-6 h-6" />;
      case 3:
        return <FaSmile className="w-6 h-6" />;
      default:
        return <FaCheckCircle className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex md:flex-row-reverse' : ''}`}>
          {/* Image */}
          <div className="rounded-lg overflow-hidden h-[500px] relative">
            <Image
              src={placecb}
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
                      {getIcon(index)}
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