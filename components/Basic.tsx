import { FaCheckCircle, FaCog, FaRegClock, FaSmile, FaTooth, FaRegCalendarAlt } from 'react-icons/fa';

interface BasicProps {
  imageUrl: string;
  title: string;
  description: string | string[];
  reverse?: boolean;
}

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
    <div className={`py-24 ${reverse ? 'bg-gray-50' : ''}`}>
      <div className="max-w-[1350px] mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'flex-row-reverse' : ''}`}>
          <div className="bg-gray-100 rounded-lg overflow-hidden h-[500px]">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: `url('${imageUrl}')` }} 
            />
          </div>
          {/* Rest of your component */}
        </div>
      </div>
    </div>
  );
}