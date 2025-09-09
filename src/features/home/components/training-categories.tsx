import CategoryCard from './category-card';
import Image from 'next/image';


const categoriesData = [
  {
    icon:  <Image src="/assets/leadershipIcon.svg" alt="Leadership" width={12} height={12} />,
    title: 'Leadership & Management',
    description: 'Enhancing strategic thinking, decision-making, and institutional effectiveness for executives and senior professionals.',
  },
  {
    icon:  <Image src="/assets/communicationIcon.svg" alt="Communication"  width={12} height={12} />,
    title: 'Communication & Influence',
    description: 'Building effective communication, negotiation, public speaking and stakeholder engagement skills.',
  },
  {
    icon:  <Image src="/assets/goveranceIcon.svg" alt="Goverance" width={12} height={12} />,
    title: 'Governance & Institutional Development',
    description: 'Training in public sector reform, accountability, transparency, policy development, and organizational transformation.',
  },
  {
    icon:  <Image src="/assets/publicIcon.svg" alt="Public" width={12} height={12} />,
    title: 'Public Procurement & BPP Compliance',
    description: 'Specialized courses on procurement processes, regulatory frameworks, and best practices in compliance with the Bureau of Public Procurement (BPP) Act.',
  },
  {
    icon:  <Image src="/assets/digitalIcon.svg" alt="Digital" width={12} height={12}  />,
    title: 'Digital Transformation & Innovation',
    description: 'Empowering institutions to leverage technology, data, and innovation to improve public service delivery and operational efficiency.',
  },
  {
    icon:  <Image src="/assets/internationIcon.svg" alt="International" width={12} height={12} />,
    title: 'International Exposure & Best Practices',
    description: 'Programs include study tours, international benchmarking, and insights into global institutional standards.',
  },
];

const TrainingCategories: React.FC = () => {
  return (
    <div className="bg-white py-16 px-8 font-poppins">
      <div className="mx-auto max-w-6xl text-center">
        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl pt-12">
          Curated Training <span className="text-teal-600">Categories</span>
        </h2>
        <p className="mt-2 text-black">
          We deliver high-impact training across a wide range of categories
          tailored to public and private sector needs.
        </p>

        {/* Categories Grid */}
        <div className="mt-16 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2">
          {categoriesData.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>

        {/* Section with the Image and Gradient Border */}
        <div className="mt-16 mx-auto w-full max-w-4xl rounded-3xl border-4 border-black">
          <div className="rounded-[calc(1.5rem-1px)]">
            <Image
              src="/assets/curated_image.svg" alt="Curated image"
              className="w-full rounded-[calc(1.5rem-1px)] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCategories;