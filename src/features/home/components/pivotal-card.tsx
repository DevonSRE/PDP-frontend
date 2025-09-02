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
    ? 'bg-gray-800 rounded-3xl p-8 text-white' // Main card: dark background, white text
    : 'bg-white rounded-2xl p-6 transition duration-300 ease-in-out hover:bg-teal-800 hover:shadow-xl text-black'; // Non-main card: white background, black text

  return (
    <div className={cardClasses}>
      {/* Conditionally render the icon for the smaller cards with a circular teal avatar */}
      {icon && (
        <div className="mb-4 w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold font-poppins">{title}</h3>
      <p className="mt-2 font-poppins">{description}</p>
    </div>
  );
};

export default PivotalCard;