import React from "react";
import { ProfessionalCard } from "./professional-card";
import { PdpLogoBg } from "@/components/icon/pdp-logo-bg";

const professionals = [
  {
    id: 1,
    name: "Olivia Rhye",
    title: "Senior Governance Advisor or Lead \nProcurement Facilitator",
    description:
      "Expert in public financial management and institutional reforms across Africa. Over 20 years training senior civil servants and procurement professionals.",
    image: "/assets/pro1.svg",
    flagImage: undefined,
  },
  {
    id: 2,
    name: "Dr. Oluwole Adenuga",
    title: "Senior Governance Advisor or Lead  \nProcurement Facilitator",
    description:
      "Expert in public financial management and institutional reforms across Africa. Over 20 years training senior civil servants and procurement professionals.",
    image: "/assets/pro2.svg",
    flagImage: undefined,
  },
  {
    id: 3,
    name: "Hon. Justice Ahmed",
    title: "Senior Governance Advisor or Lead  \nProcurement Facilitator",
    description:
      "Expert in public financial management and institutional reforms across Africa. Over 20 years training senior civil servants and procurement professionals.",
    image: "/assets/pro3.svg",
    flagImage: undefined,
  },
  {
    id: 4,
    name: "Olivia Rhye",
    title: "Senior Governance Advisor or Lead  \nProcurement Facilitator",
    description:
      "Expert in public financial management and institutional reforms across Africa. Over 20 years training senior civil servants and procurement professionals.",
    image: "/assets/pro1.svg",
    flagImage: undefined,
  },
  {
    id: 5,
    name: "Dr. Oluwole Adenuga",
    title: "Senior Governance Advisor or Lead  \nProcurement Facilitator",
    description:
      "Expert in public financial management and institutional reforms across Africa. Over 20 years training senior civil servants and procurement professionals.",
    image: "/assets/pro2.svg",
    flagImage: undefined,
  },
  {
    id: 6,
    name: "Hon. Justice Ahmed",
    title: "Senior Governance Advisor or Lead  \nProcurement Facilitator",
    description:
      "Expert in public financial management and institutional reforms across Africa. Over 20 years training senior civil servants and procurement professionals.",
    image: "/assets/pro3.svg",
    flagImage: undefined,
  },
];

export function MeetTheProfessional() {
  return (
    <section className="relative w-full overflow-hidden py-62 bg-black">
      <PdpLogoBg className="absolute -top-40 -left-76 w-150" />
      <PdpLogoBg className="absolute -bottom-36 -left-78 w-150 rotate-184 -scale-x-100" />

      <PdpLogoBg className="absolute -bottom-20 -right-110 w-150 rotate-180" />
      <PdpLogoBg className="absolute -top-96 -right-42 w-150 rotate-98" />

      <div className="container mx-auto  relative z-10 justify-center-safe space-y-16">
        <div className="text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4 font-poppins">
            Meet The Professional
          </h2>
          <p className="text-xs md:text-sm max-w-full md:max-w-5xl mx-auto">
            Our team comprises of highly experienced and dedicated professionals
            who are passionate about delivering exceptional results. With
            diverse backgrounds and expertise, our team brings a wealth of
            knowledge and insights to every project. We are committed to
            providing innovative solutions that exceed client expectations, and
            we proudly stand behind the quality of our work.
          </p>
        </div>

        {/* Professional Cards Grid */}
        <div className="flex flex-wrap max-w-full md:max-w-5xl mx-auto gap-8">
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
}
