'use client';
import PivotalCard from './pivotal-card';
import {
  Gavel,
  BriefcaseBusiness,
  CheckCircle,
  Users,
  GraduationCap,
  MapPin,
} from 'lucide-react';

const cardData = [
  {
    icon: <Gavel size={32} />,
    title: 'Practical, Context-Specific Learning',
    description:
      'Our courses are built around real-world scenarios and local challenges, not just theory. Participants leave with actionable skills they can use immediately.',
  },
  {
    icon: <BriefcaseBusiness size={32} />,
    title: 'Custom-Built for Every Client',
    description:
      'We don’t do one-size-fits-all. Each program is tailored after a clear understanding of your context, training needs, and strategic goals.',
  },
  {
    icon: <CheckCircle size={32} />,
    title: 'End-to-End Support',
    description:
      'From curriculum design and skills gap analysis to delivery and post-training follow-up, we support you through the entire learning journey.',
  },
  {
    icon: <MapPin size={32} />,
    title: 'Pan-African & International Reach',
    description:
      "From West to East Africa and beyond, we've supported both public and private sector institutions with high-quality capacity building interventions.",
  },
  {
    icon: <GraduationCap size={32} />,
    title: 'Top-Tier Faculty & Practitioners',
    description:
      'Our facilitators are not just trainers—they are seasoned professionals with deep expertise in governance, leadership, procurement, and organizational development.',
  },
];

const PivotalSection = () => {
  return (
    <div className="bg-[#F5F5F5] py-36 px-4 text-center font-poppins">
      {/* Main Heading and First Card */}
      <h2 className="text-3xl font-bold text-black">
        Why <span className="text-teal-400">Choose Pivotal?</span>
      </h2>
      <p className="mt-2 text-black max-w-2xl mx-auto">
        At Pivotal Development Partners, we do more than deliver training — we co-create learning experiences that drive results.
      </p>

      {/* Grid of smaller cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <PivotalCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default PivotalSection;
