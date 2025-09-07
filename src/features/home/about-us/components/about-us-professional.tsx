import React from "react";
import ProfessionalCard from "./professional-card";
import { AboutMainBG } from "@/components/icon/about-main-bg";

 const professionals = [
    {
      name: "Olivia Rhye",
      title: "Senior Governance Advisor or Lead \nProcurement Facilitator",
      description:
        "Expert in public financial management and institutional reforms across Africa. Over 20 years training senior civil servants and procurement professionals.",
      image: "/assets/pro1.svg",
      flagImage: undefined,
    },
    {
      name: "Dr. Oluwole Adenuga",
      title: "Senior Governance Advisor or Lead  \nProcurement Facilitator",
      description:
        "Expert in public financial management and institutional reforms across Africa. Over 20 years training senior civil servants and procurement professionals.",
      image: "/assets/pro2.svg",
      flagImage: undefined,
    },
    {
      name: "Hon. Justice Ahmed",
      title: "Senior Governance Advisor or Lead  \nProcurement Facilitator",
      description:
        "Expert in public financial management and institutional reforms across Africa. Over 20 years training senior civil servants and procurement professionals.",
      image: "/assets/pro3.svg",
      flagImage: undefined,
    },

    {
      name: "Olivia Rhye",
      title: "Senior Governance Advisor or Lead  \nProcurement Facilitator",
      description:
        "Expert in public financial management and institutional reforms across Africa. Over 20 years training senior civil servants and procurement professionals.",
      image: "/assets/pro1.svg",
      flagImage: undefined,
    },
    {
      name: "Dr. Oluwole Adenuga",
      title: "Senior Governance Advisor or Lead  \nProcurement Facilitator",
      description:
        "Expert in public financial management and institutional reforms across Africa. Over 20 years training senior civil servants and procurement professionals.",
      image: "/assets/pro2.svg",
      flagImage: undefined,
    },
    {
      name: "Hon. Justice Ahmed",
      title: "Senior Governance Advisor or Lead  \nProcurement Facilitator",
      description:
        "Expert in public financial management and institutional reforms across Africa. Over 20 years training senior civil servants and procurement professionals.",
      image: "/assets/pro3.svg",
      flagImage: undefined,
    },
  ];

  const MeetTheProfessional = () => {
    return (
      <section className="relative w-full overflow-hidden pt-12 bg-white">
      {/* Background SVG */}
      <AboutMainBG className="absolute inset-0 w-full h-full object-cover z-0" />

      <div className="container mx-auto  pt-72 relative z-10 justify-center-safe">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            Meet The Professional
          </h2>
          <p className="text-md max-w-2xl mx-auto opacity-80 font-poppins">
            Our team comprises of highly experienced and dedicated professionals
            who are passionate about delivering exceptional results. With
            diverse backgrounds and expertise, our team brings a wealth of
            knowledge and insights to every project. We are committed to
            providing innovative solutions that exceed client expectations, and
            we proudly stand behind the quality of our work.
          </p>
        </div>

        {/* Professional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  pb-52 ">
          {professionals.map((pro, index) => (
            <ProfessionalCard
              key={index}
              name={pro.name}
              title={pro.title}
              description={pro.description}
              image={pro.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheProfessional;
