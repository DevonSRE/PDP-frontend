import React, { type ReactNode } from 'react';

interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  isMainCard?: boolean;
}

const PivotalCard: React.FC<CardProps> = ({ icon, title, description, isMainCard }) => {
  // Conditional classes based on the 'isMainCard' prop
  const cardClasses = isMainCard
    ? 'bg-[#D9D9D9] rounded-3xl p-8 text-white flex flex-col justify-start items-start h-full' 
    : 'bg-[#D9D9D9] rounded-2xl p-6 transition duration-300 ease-in-out hover:bg-teal-800 hover:shadow-xl text-black flex flex-col h-full justify-start items-start';

  return (
    <div className={cardClasses}>
      {/* Icon */}
      {icon && (
        <div className="mb-4 w-14 h-14 rounded-full bg-[#064C3C] flex items-center justify-center text-white">
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="">
        <h3 className="text-xl font-bold font-poppins mt-2 flex  justify-start items-start">{title}</h3>
        <p className="mt-4 font-poppins font-light flex justify-start items-start">{description}</p>
      </div>
    </div>
  );
};

export default PivotalCard;