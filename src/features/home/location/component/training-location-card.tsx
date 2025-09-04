import { CalendarRange, MapPin } from 'lucide-react';
import React from 'react';

interface TrainingLocationCardProps {
  imageSrc: string;
  locationName: string;
  date: string;
  description: string;
}

const TrainingLocationCard: React.FC<TrainingLocationCardProps> = ({
  imageSrc,
  locationName,
  date,
  description,
}) => {
  return (
    <div className=" bg-white overflow-hidden">
      <img src={imageSrc} alt={locationName} className="w-full h-48 object-cover " />
      <div className="flex p-8 flex-col h-full">
      <div className='flex flex-row justify-items-center gap-2'>
          <MapPin className="w-5 h-5 text-black " />
          <h3 className="text-xl font-semibold text-black font-poppins mb-2">{locationName}</h3>
      </div>
      <div className='flex flex-row justify-items-center gap-2'>
          <CalendarRange className="w-5 h-5 text-black" />
          <p className="text-sm text-black mb-4 font-poppins">{date}</p>
      </div>
       
        <p className="text-black font-light text-sm mb-6 font-poppins">{description}</p>
        <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TrainingLocationCard;