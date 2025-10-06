import React from "react";
import { CourseCard } from "./course-card";

export function CourseCategories() {
  return (
    <div className="bg-white py-10 md:py-28 px-7 md:px-10">
      <div className="max-w-full md:max-w-7xl w-full mx-auto flex flex-col gap-10 md:gap-28">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-xl md:text-3xl font-bold">Course Categories</h2>
        </div>

        {/* Course Cards Grid */}
        <div className="max-w-fit mx-auto flex flex-wrap justify-center gap-10 md:gap-16">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              imageSrc={course.imageSrc}
              category={course.category}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const courses = [
  {
    imageSrc: "/assets/cc1.svg",
    category: "Leadership & Management",
    description:
      "Develop essential leadership skills, team-building techniques, and strategic development frameworks for organizational success.",
  },
  {
    imageSrc: "/assets/cc2.svg",
    category: "Strategic Communications",
    description:
      "Master public-sector evaluation, media relations, and policy strategy to advance your professional career.",
  },
  {
    imageSrc: "/assets/cc1.svg",
    category: "Governance & Policy",
    description:
      "Deepen your understanding of public administration's legal frameworks, and justice system operations.",
  },
  {
    imageSrc: "/assets/cc1.svg",
    category: "Procurement & Trade",
    description:
      "Specialised training on public procurement systems, supply chain logistics, and international trade compliance.",
  },
];
