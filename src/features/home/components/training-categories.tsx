import { LeadershipIcon } from "@/components/icon/leadership-icon";
import { CategoryCard } from "./category-card";
import Image from "next/image";
import { CommunicationIcon } from "@/components/icon/communication-icon";
import { GovernanceIcon } from "@/components/icon/governance-icon";
import { TopTierIcon } from "@/components/icon/top-tier";
import { DigitalIcon } from "@/components/icon/digital-icon";
import { InternationalIcon } from "@/components/icon/international-icon";

export function TrainingCategories() {
  return (
    <section className="bg-neutral-100 py-10 md:py-20 px-7 md:px-10">
      <div className="flex flex-col w-full gap-8 md:gap-20 mx-auto max-w-full text-center">
        <div className="w-full flex flex-col justify-center gap-1 md:gap-2">
          {/* Main Heading */}
          <h2 className="text-lg font-bold text-gray-800 md:text-3xl pt-0 md:pt-12">
            Curated Training <span className="text-teal-600">Categories</span>
          </h2>
          <p className="max-w-xl text-sm md:text-base text-center mx-auto">
            We deliver high-impact training across a wide range of categories
            <br className="hidden md:block" />
            tailored to public and private sector needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {categoriesData.map((category, idx) => (
            <CategoryCard key={category.id} index={idx} {...category} />
          ))}
        </div>

        {/* Section with the Image and Gradient Border */}
        <div className="hidden md:block mx-auto w-full max-w-full md:max-w-7xl rounded-[34px] overflow-hidden border-4 border-black">
          <div className="rounded-[calc(1.5rem-1px)]">
            <Image
              src="/assets/curated_image.svg"
              alt="Curated image"
              width={1000} // Example width in pixels
              height={500} // Example height in pixels
              className="w-full rounded-[calc(1.5rem-1px)] object-cover transition-transform scale-105 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const categoriesData = [
  {
    id: 1,
    icon: <LeadershipIcon />,
    title: "Leadership & Management",
    description:
      "Enhancing strategic thinking, decision-making, and institutional effectiveness for executives and senior professionals.",
  },
  {
    id: 2,
    icon: <CommunicationIcon />,
    title: "Communication & Influence",
    description:
      "Building effective communication, negotiation, public speaking and stakeholder engagement skills.",
  },
  {
    id: 3,
    icon: <GovernanceIcon />,
    title: "Governance & Institutional Development",
    description:
      "Training in public sector reform, accountability, transparency, policy development, and organizational transformation.",
  },
  {
    id: 4,
    icon: <TopTierIcon />,
    title: "Public Procurement & BPP Compliance",
    description:
      "Specialized courses on procurement processes, regulatory frameworks, and best practices in compliance with the Bureau of Public Procurement (BPP) Act.",
  },
  {
    id: 5,
    icon: <DigitalIcon />,
    title: "Digital Transformation & Innovation",
    description:
      "Empowering institutions to leverage technology, data, and innovation to improve public service delivery and operational efficiency.",
  },
  {
    id: 6,
    icon: <InternationalIcon />,
    title: "International Exposure & Best Practices",
    description:
      "Programs include study tours, international benchmarking, and insights into global institutional standards.",
  },
];
