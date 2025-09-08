import React from 'react';
import TrainingLocationCard from './training-location-card';


const TrainingLocations = () => {
  const locations = [
    {
      imageSrc: '/assets/location.svg',
      locationName: 'Freetown, GreatBridge',
      date: 'May & September 2025',
      description: 'Our intensive four-month program is structured to equip participants with essential skills and knowledge.',
    },
    {
      imageSrc: '/assets/location2.svg', 
      locationName: 'Kigali, Rwanda',
      date: 'March & October 2025',
      description: 'Our four-month program for Digital Transformation is designed for individuals seeking to lead digital initiatives.',
    },
    { 
            imageSrc: '/assets/location.svg',
      locationName: 'Accra, Ghana',
      date: 'June & November 2025',
      description: 'Our Smart Governance (ICT) program is tailored to enhance skills in leveraging technology for effective public administration.',
    },
    {
      imageSrc: '/assets/location.svg',
      locationName: 'Lagos, Nigeria',
      date: 'June & November 2025',
      description: 'Our intensive four-month program is structured to equip participants with essential skills and knowledge.',
    },
    {
            imageSrc: '/assets/location.svg',
      locationName: 'Owerri, Nigeria',
      date: 'July & December 2025',
      description: 'Our intensive four-month program is structured to equip participants with essential skills and knowledge.',
    },
    {
        imageSrc: '/assets/location2.svg',
      locationName: 'Abuja, Nigeria',
      date: 'March & October 2025',
      description: 'Our intensive four-month program is structured to equip participants with essential skills and knowledge.',
    },
  ];

  return (
    
    <div className="bg-gray-100 p-32 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12">

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-black font-poppins">Where We Train</h3>
            <p className="mt-2 text-md text-black text-sm max-w-2xl mx-auto">
              We conduct in-person training sessions at strategically selected locations to serve professionals across multiple regions. Each venue is carefully chosen for accessibility, facilities, and local relevance to our course content.
            </p>
          </div>
        </div>

        {/* Training Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((location, index) => (
            <TrainingLocationCard
              key={index}
              imageSrc={location.imageSrc}
              locationName={location.locationName}
              date={location.date}
              description={location.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingLocations;