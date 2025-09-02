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
          items={[
            {
              title: 'Accredited Training Programs',
              description:
                'We offer courses in leadership, governance, procurement, and more, all accredited by the Bureau of Public Procurement (BPP).',
            },
            {
              title: 'Government Service Philosophy',
              description:
                'Courses designed to instill a public service mindset focused on efficiency, transparency, and accountability.',
            },
            {
              title: 'Mentoring & Coaching',
              description:
                'We provide one-on-one and group coaching to help you achieve your professional goals.',
            },
          ]}
          buttonText="View Training Solutions"
          buttonColor="bg-teal-500"
          buttonHoverColor="hover:bg-teal-600"
          isImageLeft={true}
        />

        {/* Consulting Services Section */}
        <ServiceBox
          imageSrc='/assets/s2.svg'
          title="Consultancy Solutions"
          items={[
            {
              title: 'Policy and Research',
              description:
                'We conduct in-depth research to inform policy formulation and implementation.',
            },
            {
              title: 'Governance Frameworks',
              description:
                'Our team designs and implements governance frameworks for institutions to improve performance.',
            },
            {
              title: 'Learning & Mentoring',
              description:
                'Providing tailored support to organizations for continuous professional development.',
            },
          ]}
          buttonText="View Our Services"
          buttonColor="bg-yellow-500"
          buttonHoverColor="hover:bg-yellow-600"
          isImageLeft={false}
        />

        {/* Other Programs Section */}
        <ServiceBox
          imageSrc='/assets/s3.svg'
          title="Other Programs"
          items={[
            {
              title: 'Project Management',
              description:
                'Our project management courses equip you with the skills to lead successful projects from start to finish.',
            },
          ]}
          buttonText="View Other Programs"
          buttonColor="bg-blue-500"
          buttonHoverColor="hover:bg-blue-600"
          isImageLeft={true}
        />
      </div>
    </div>
  );
};

export default OurServicesSection;
