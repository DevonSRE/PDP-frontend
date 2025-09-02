import React from 'react';
import ProfessionalCard from './professional-card';

const MeetTheProfessional = () => {
  // Data for professionals (replace with your actual data)
  const professionals = [
    {
      name: "Olivia Rhye",
      title: "Senior Barrister and Head of Litigation",
      description: "Experienced Senior Barrister and Head of Litigation with 15 years experience in the legal field...",
      image: "/assets/pro1.svg", 
      flagImage: undefined, // No flag in the example
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        globe: "#"
      }
    },
    {
      name: "Dr. Oluwole Adenuga",
      title: "Expert in Commercial Law and Corporate Governance",
      description: "Over 20 years experience in corporate and commercial law, advising top-tier clients...",
      image: "/assets/pro2.svg", 
      flagImage: undefined,
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        globe: "#"
      }
    },
    {
      name: "Hon. Justice Ahmed",
      title: "Retired Supreme Court Justice and Legal Advisor",
      description: "Served 30 years in the judiciary, offering unparalleled insights into Nigerian law...",
      image: "/assets/pro3.svg", 
      flagImage: undefined, 
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        globe: "#"
      }
    },
    // Duplicate for the second row as per image
    {
      name: "Olivia Rhye",
      title: "Senior Barrister and Head of Litigation",
      description: "Experienced Senior Barrister and Head of Litigation with 15 years experience in the legal field...",
      image: "/assets/pro1.svg", 
      flagImage: undefined, 
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        globe: "#"
      }
    },
    {
      name: "Dr. Oluwole Adenuga",
      title: "Expert in Commercial Law and Corporate Governance",
      description: "Over 20 years experience in corporate and commercial law, advising top-tier clients...",
      image: "/assets/pro2.svg", 
      flagImage: undefined,
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        globe: "#"
      }
    },
    {
      name: "Hon. Justice Ahmed",
      title: "Retired Supreme Court Justice and Legal Advisor",
      description: "Served 30 years in the judiciary, offering unparalleled insights into Nigerian law...",
      image: "/assets/pro3.svg", 
      flagImage: undefined, 
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        globe: "#"
      }
    },
  ];

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Background shapes (from your image) */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-custom-green-light transform -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-20 z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-custom-yellow transform translate-x-1/2 translate-y-1/2 rotate-45 opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Meet The Professional</h2>
          <p className="text-md max-w-2xl mx-auto opacity-80 font-poppins">
            Our team comprises of highly experienced and dedicated professionals who are passionate about delivering exceptional results. With diverse backgrounds and expertise, our team brings a wealth of knowledge and insights to every project. We are committed to providing innovative solutions that exceed client expectations, and we proudly stand behind the quality of our work.
          </p>
        </div>

        {/* Professional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((pro, index) => (
            <ProfessionalCard
              key={index} // In a real app, use a unique ID for key
              name={pro.name}
              title={pro.title}
              description={pro.description}
              image={pro.image}
              flagImage={pro.flagImage}
              socialLinks={pro.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheProfessional;