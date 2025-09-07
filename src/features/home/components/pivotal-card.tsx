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
    ? 'bg-gray-800 rounded-3xl p-8 text-white justify-start items-start' // Main card: dark background, white text
    : 'bg-white rounded-2xl p-6 transition duration-300 ease-in-out hover:bg-teal-800 hover:shadow-xl text-black'; // Non-main card: white background, black text

  return (
    <div className={cardClasses}>
      {/* Conditionally render the icon for the smaller cards with a circular teal avatar */}
      {icon && (
        <div className="mb-4 w-14 h-14 rounded-full bg-[#064C3C] flex items-center justify-center text-white">
          {icon}
        </div>
      )}
      <div className="mb-4 items-start justify-start">
      <h3 className="text-xl font-bold font-poppins mt-2 items-start">{title}</h3>
      <p className="mt-4 font-poppins font-light items-start">{description}</p>
      </div>
    </div>
  );
};

export default PivotalCard;