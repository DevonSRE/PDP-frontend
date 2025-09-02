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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={imageSrc} alt={locationName} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{locationName}</h3>
        <p className="text-sm text-gray-600 mb-4">{date}</p>
        <p className="text-gray-700 text-sm mb-6">{description}</p>
        <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TrainingLocationCard;