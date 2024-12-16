'use client';
import Image from 'next/image';
import { FaTrophy, FaHeart, FaLightbulb, FaUsers } from 'react-icons/fa';
import mision from '@/app/assets/mision.jpg';

interface Basic2Props {
  title: string;
  description: any[];
}

export default function Basic2({ title, description }: Basic2Props) {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FaTrophy className="w-8 h-8" />;
      case 1:
        return <FaHeart className="w-8 h-8" />;
      case 2:
        return <FaLightbulb className="w-8 h-8" />;
      case 3:
        return <FaUsers className="w-8 h-8" />;
      default:
        return <FaTrophy className="w-8 h-8" />;
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">{title}</h2>
            <div className="space-y-8">
              {description.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#023A65] text-white flex items-center justify-center flex-shrink-0">
                    {getIcon(index)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden h-[500px] relative">
              <Image
                src={mision}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 