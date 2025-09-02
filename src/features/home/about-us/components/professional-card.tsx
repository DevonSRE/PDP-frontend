import React from "react";

interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  globe?: string;
}

interface ProfessionalCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
  flagImage?: string;
  socialLinks?: SocialLinks;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  name,
  title,
  description,
  image,
  flagImage,
  socialLinks,
}) => {
  return (
    <div
      className="relative rounded-lg shadow-lg overflow-hidden h-120 bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)), url(${image})` }}
    >
      {/* Flag Image (Overlay) */}
      {flagImage && (
        <img
          src={flagImage}
          alt="Flag"
          className="absolute top-4 right-4 h-10 w-10 object-cover rounded-full border-2 border-white shadow-md"
        />
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-md font-medium mb-2 opacity-80 text-[#E4B800]">{title}</p>
        <p className="text-sm leading-snug mb-4 opacity-70">
          {description}
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          {socialLinks?.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          )}
          {socialLinks?.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {socialLinks?.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {socialLinks?.globe && (
            <a
              href={socialLinks.globe}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <i className="fas fa-globe"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
