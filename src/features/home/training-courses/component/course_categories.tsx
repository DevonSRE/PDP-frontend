import React from 'react';
import CourseCard from './course-card';


const CourseCategories = () => {
  const courses = [
    {
      imageSrc: '/assets/cc1.svg',
      category: 'Leadership & Management',
      description: 'Develop essential leadership skills, team-building techniques, and strategic development frameworks for organizational success.',
    },
    {
      imageSrc:'/assets/cc2.svg',
      category: 'Strategic Communications',
      description: 'Master public-sector evaluation, media relations, and policy strategy to advance your professional career.',
    },
    {
      imageSrc: '/assets/cc1.svg',
      category: 'Governance & Policy',
      description: 'Deepen your understanding of public administration\'s legal frameworks, and justice system operations.',
    },
    {
      imageSrc: '/assets/cc1.svg', 
      category: 'Procurement & Trade',
      description: 'Specialised training on public procurement systems, supply chain logistics, and international trade compliance.',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-poppins ext-gray-900">Course Categories</h2>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
};

export default CourseCategories;