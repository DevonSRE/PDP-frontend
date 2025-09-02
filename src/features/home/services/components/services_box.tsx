import React from 'react';

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceBoxProps {
  imageSrc: string;
  title: string;
  items: ServiceItem[];
  buttonText: string;
  buttonColor: string;
  buttonHoverColor: string;
  isImageLeft: boolean;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({
  imageSrc,
  title,
  items,
  buttonText,
  buttonColor,
  buttonHoverColor,
  isImageLeft,
}) => {
  const containerClasses = `flex flex-col md:flex-row rounded-lg bg-white overflow-hidden shadow-lg my-8 p-4 
  ${
    isImageLeft ? '' : 'md:flex-row-reverse'
  }`;

  return (
    <div className={containerClasses}>
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex-shrink-0">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      
      {/* Content Section */}
      <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        {items.map((item, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold text-lg text-gray-700">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
        <button className={`${buttonColor} ${buttonHoverColor} text-white py-3 px-6 rounded-md transition-colors duration-300 font-semibold mt-4`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ServiceBox;