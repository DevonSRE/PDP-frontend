import React from "react";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceBoxProps {
  imageSrc: string;
  title: string;
  titleColor?: string;
  items: ServiceItem[];
  buttonText: string;
  buttonColor: string;
  buttonHoverColor: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({
  imageSrc,
  title,
  titleColor = "text-gray-800",
  items,
  buttonText,
  buttonColor,
  buttonHoverColor,
}) => {
  return (
    <div className="flex flex-col md:flex-row rounded-lg bg-white overflow-hidden shadow-lg my-8 p-4">
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex-shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
        <h3 className={`text-2xl font-bold mb-4 ${titleColor}`}>{title}</h3>
        

        {/* {items.map((item, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold text-lg text-black">{item.title}</h4>
            <p className="text-sm text-black">{item.description}</p>
          </div>
        ))} */}
      <div className="mb-4">
          <div className="flex mt-1">
            <div className="w-px bg-gray-300 mr-6" />
              <div className="flex flex-col space-y-4">
                {items.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-lg text-black text-2xl">{item.title}</h4>
                    <p className="font-light text-black text-1xl">{item.description}</p>
                  </div>
                ))}
              </div>
          </div>
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
