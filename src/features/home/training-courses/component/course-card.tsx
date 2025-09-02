import React from 'react';

interface CourseCardProps {
  imageSrc: string;
  category: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ imageSrc, category, description }) => {
  return (
    <div className="bg-white rounded-sm shadow-sm overflow-hidden flex flex-col  items-start  hover:shadow-xl transition-shadow duration-300">
      <img src={imageSrc} alt={category} className="w-full h-52 object-cover" />
      <div className="p-6 flex-grow flex flex-col items-start ">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{category}</h3>
        <p className="text-gray-600 text-sm mb-4 items-start ">{description}</p>
        <button className="self-start mt-auto bg-[#009981] text-white font-poppins py-2 w-full rounded-md hover:bg-teal-50 hover:text-teal-600 transition-colors duration-300">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;