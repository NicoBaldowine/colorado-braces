import { FaCheckCircle, FaCog, FaRegClock, FaSmile, FaTooth, FaRegCalendarAlt } from 'react-icons/fa';

interface BasicItem {
  title: string;
  description: string;
  icon: string;
}

type BasicProps = {
  imageUrl: string;
  title: string;
  description: string | string[];
  reverse?: boolean;
};

const iconMap = {
  invisible: FaSmile,
  comfort: FaTooth,
  hygiene: FaCheckCircle,
  tech: FaCog,
  treatment: FaRegCalendarAlt,
  monitoring: FaRegClock,
  invisalign: FaSmile,
  orthofx: FaTooth,
  payment: FaCheckCircle,
};

export default function Basic({ imageUrl, title, description, reverse }: BasicProps) {
  return (
    <section className="py-12 lg:py-24">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}>
          {/* Image */}
          <div className="w-full lg:flex-1">
            <div className="bg-gray-200 rounded-lg w-full aspect-[4/3]">
              {/* Replace with actual image */}
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">
              {title}
            </h2>
            
            <div className="space-y-4 lg:space-y-6">
              {Array.isArray(description) && description.map((item, index) => {
                if (typeof item === 'string') {
                  return (
                    <p key={index} className="text-sm lg:text-base text-gray-600">
                      {item}
                    </p>
                  );
                }
                
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="flex gap-3 lg:gap-4">
                    {withIcons && Icon && (
                      <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#023A65]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#023A65]" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}