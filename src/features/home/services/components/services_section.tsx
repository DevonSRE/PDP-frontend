"use client";

import React from "react";
import { ServiceBox } from "./services_box";
import { TService } from "../../lib/types";

export function OurServicesSection() {
  return (
    <section className="bg-gray-100 py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full md:max-w-6xl mx-auto flex flex-col gap-16">
        {services.map((service) => (
          <ServiceBox key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
const services: TService[] = [
  {
    id: 1,
    img: "/assets/s1.svg",
    title: "Core Training Solutions",
    offers: [
      {
        id: 1,
        title: "Professional Development Programs",
        description:
          "Build capacity in leadership, communication, and strategic planning tailored to the African context.",
      },
      {
        id: 2,
        title: "Government System Strengthening",
        description:
          "Enhance public service delivery through transparency and accountability-based training solutions.",
      },
      {
        id: 3,
        title: "Third-Party Monitoring",
        description:
          "Ensure transparency and impact through independent project assessments and evaluations.",
      },
      {
        id: 4,
        title: "Quality Assurance Training",
        description:
          "Learn best practices in quality control, compliance, and performance standardization.",
      },
    ],
    actionText: "Get informed on new/upcoming courses",
    buttonAction: () => {},
    themeColor: "green",
  },
  {
    id: 2,
    img: "/assets/s2.svg",
    title: "Consultancy Services",
    offers: [
      {
        id: 1,
        title: "Skills-Gap Analysis",
        description:
          "Identify organizational performance gaps and receive tailored development interventions.",
      },
      {
        id: 2,
        title: "Competency Frameworks",
        description:
          "Design structured models for hiring, training, and performance improvement.",
      },
      {
        id: 3,
        title: "Training of Trainers (ToT)",
        description:
          "Train your internal facilitators with proven methods and quality assurance practices.",
      },
      {
        id: 4,
        title: "Coaching & Mentoring",
        description:
          "Leadership development programs to empower individuals and improve organizational outcomes.",
      },
    ],
    actionText: "Request Consultancy",
    buttonAction: () => {},
    themeColor: "yellow",
  },
  {
    id: 3,
    img: "/assets/s3.svg",
    title: "BPP Training Programs",
    offers: [
      {
        id: 1,
        title: "Align with Nigeria's Public Procurement Framework",
        bulletPoints: {
          title:
            "Specialized programs covering Framwork Agreements, Health Commodities, Works Procurement, and more.",
          points: [
            "Procurement Audits & Monitoring",
            "e-Government Procurement Systems",
            "Information Management for Procurement",
          ],
        },
      },
    ],
    actionText: "Download Guide Document",
    buttonAction: () => {},
    themeColor: "blue",
  },
];
