import React, { type ReactNode } from 'react';

interface CategoryCardProps {
  icon: ReactNode; 
  title: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="mr-4 rounded-8 bg-gray-100 p-2 text-gray-500 h-24 w-24 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-col items-start justify-start">
        <h3 className="text-lg font-bold text-black text-poppins">{title}</h3>
        <p className="mt-2 text-sm text-black text-poppins">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;