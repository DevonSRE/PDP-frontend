import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";

interface ProfessionalCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
}

export function ProfessionalCard({
  name,
  title,
  description,
  image,
}: ProfessionalCardProps) {
  return (
    <div
      className="relative overflow-hidden h-112 w-80 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)), url(${image})`,
      }}
    >
      {/* Content */}
      <div className="absolute inset-0 flex flex-col gap-4 justify-end p-6 text-white text-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold">{name}</h3>
          <p className="text-xs md:text-sm text-brand-yellow-dark">{title}</p>
          <p className="text-xs md:text-sm leading-snug">{description}</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <Facebook fill="white" stroke="white" />
          <Twitter fill="white" stroke="white" />
          <Linkedin fill="white" stroke="white" />
        </div>
      </div>
    </div>
  );
}
