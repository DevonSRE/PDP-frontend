import React from "react";
import Image from "next/image";

interface ServiceItem {
  title: string;
  description: string;
  note?: string;      
  subNote?: string;   
  subNote2?: string; 
  subNote3?: string;  
}

interface ServiceBoxProps {
  imageSrc: string;
  title: string;
  titleColor?: string;
    dividerColor?: string;
  items: ServiceItem[];
  buttonText: string;
  buttonColor: string;
  buttonHoverColor: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({
  imageSrc,
  title,
  titleColor = "text-gray-800",
  // dividerColor,
  items,
  buttonText,
  buttonColor,
  buttonHoverColor,
}) => {
  return (
    <div className="flex flex-col md:flex-row rounded-lg bg-white overflow-hidden shadow-sm my-8 p-4">
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex-shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
        <h3 className={`text-2xl font-bold mb-4 ${titleColor}`}>{title}</h3>
        
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className= "flex items-start space-x-4">
            {/* Vertical Divider (stretches to text height) */}
            <div className={`w-[8px] self-stretch ${buttonColor}`}></div>

            {/* Text Column */}
            <div>
              <h4 className="font-bold  italic text-2xl text-black">{item.title}</h4>
              <p className="font-light  italic text-black text-lg">{item.description}</p>

              <p className="font-light  italic text-black text-sm mt-4"> {item.note}</p>
              <ul className="list-disc list-inside space-y-1">
                {item.subNote && (
                  <li className="font-light italic text-black text-sm">{item.subNote}</li>
                )}
                {item.subNote2 && (
                  <li className="font-light italic text-black text-sm">{item.subNote2}</li>
                )}
                {item.subNote3 && (
                  <li className="font-light italic text-black text-sm">{item.subNote3}</li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>


        <button
          className={`${buttonColor} ${buttonHoverColor} text-white py-3 px-6 rounded-md transition-colors duration-300 font-semibold mt-4`}
        >
          {buttonText}
        </button>
      </div>
      </div>
  );
};

export default ServiceBox;
