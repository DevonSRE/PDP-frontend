import React from 'react';
import ServiceBox from './services_box';

const OurServicesSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      

        {/* Training Solutions Section */}
        <ServiceBox
          imageSrc='/assets/s1.svg'
          title="Training Solutions"
          titleColor='text-[#009981]'
          items={[
            {
              title: 'Professional Development Programs',
              description:
                'Build capacity in leadership, communication, and strategic planning tailored to the African context.',
            },
            {
              title: 'Government System Strengthening',
              description:
                'Enhance public service delivery through transparency and accountability-based training solutions.',
            },
            {
              title: 'Third-Party Monitoring',
              description:
                'Ensure transparency and impact through independent project assessments and evaluations.',
            },
             {
              title: 'Quality Assurance Training',
              description:
                'Learn best practices in quality control, compliance, and performance standardization.',
            },
          ]}
          buttonText="View Training Solutions"
          buttonColor="bg-[#009981]"
          buttonHoverColor="hover:bg-[#009981]/50"
        />

        {/* Consulting Services Section */}
        <ServiceBox
          imageSrc='/assets/s2.svg'
          title="Consultancy Solutions"
          titleColor='text-[#E4B800]'
          items={[
            {
              title: 'Skills-Gap Analysis',
              description:
                'Identify organizational performance gaps and receive tailored development interventions.',
            },
            {
              title: 'Competency Frameworks',
              description:
                'Design structured models for hiring, training, and performance improvement.',
            },
            {
              title: 'Training of Trainers (ToT)',
              description:
                'Train your internal facilitators with proven methods and quality assurance practices.',
            },
             {
              title: 'Coaching & Mentoring',
              description:
                'Leadership development programs to empower individuals and improve organizational outcomes.',
            },
          ]}
          buttonText="View Our Services"
          buttonColor="bg-[#E4B800]"
          buttonHoverColor="hover:bg-yellow-600"
        />

        {/* Other Programs Section */}
        <ServiceBox
          imageSrc='/assets/s3.svg'
          title="Other Programs"
          titleColor='text-[#005A92]'
          items={[
            {
              title: 'Project Management',
              description:
                'Our project management courses equip you with the skills to lead successful projects from start to finish.',
            },
          ]}
          buttonText="View Other Programs"
          buttonColor="bg-[#005A92]"
          buttonHoverColor="hover:bg-blue-600"
        />
      </div>
    </div>
  );
};

export default OurServicesSection;
