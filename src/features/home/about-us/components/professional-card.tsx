import { Facebook, Linkedin, Twitter, } from "lucide-react";
import React from "react";


interface ProfessionalCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  name,
  title,
  description,
  image,
}) => {
  return (
    <div
      className="relative rounded-lg shadow-lg overflow-hidden h-120 bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)), url(${image})` }}
    >
  

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-md font-medium mb-2 opacity-80 text-[#E4B800]">{title}</p>
        <p className="text-sm leading-snug mb-4 opacity-70">
          {description}
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <Facebook />
          <Twitter />
          <Linkedin />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
