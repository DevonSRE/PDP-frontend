"use client";
import { GraduationIcon } from "@/components/icon/graduation-icon";
import { PivotalCard } from "./pivotal-card";
import { BadgeIcon } from "@/components/icon/badge-icon";
import { FaqIcon } from "@/components/icon/faq-icon";
import { PanIcon } from "@/components/icon/pan-icon";
import { TopTierIcon } from "@/components/icon/top-tier";

export function PivotalSection() {
  return (
    <section className="py-14 md:py-36 px-7 md:px-10 bg-gray-50 flex flex-col w-full gap-7 md:gap-14">
      <div className="text-center flex flex-col gap-1.5 md:gap-2 items-center">
        {/* Main Heading and First Card */}
        <h2 className="text-xl md:text-3xl font-bold">
          Why{" "}
          <span className="text-brand-green-extralight">Choose Pivotal?</span>
        </h2>
        <p className="text-xs md:text-sm max-w-[490px] mx-auto">
          At Pivotal Development Partners, we do more than deliver training — we
          co-create learning experiences that drive results.
        </p>
      </div>

      {/* Grid of smaller cards */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 w-full max-w-full md:max-w-[1230px] mx-auto">
        {cardData.map((card, index) => (
          <PivotalCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

const cardData = [
  {
    id: 1,
    icon: <GraduationIcon />,
    title: "Practical, Context-Specific Learning",
    description:
      "Our courses are built around real-world scenarios and local challenges, not just theory. Participants leave with actionable skills they can use immediately.",
  },
  {
    id: 2,
    icon: <BadgeIcon />,
    title: "Custom-Built for Every Client",
    description:
      "We don’t do one-size-fits-all. Each program is tailored after a clear understanding of your context, training needs, and strategic goals.",
  },
  {
    id: 3,
    icon: <FaqIcon />,
    title: "End-to-End Support",
    description:
      "From curriculum design and skills gap analysis to delivery and post-training follow-up, we support you through the entire learning journey.",
  },
  {
    id: 4,
    icon: <PanIcon />,
    title: "Pan-African & International Reach",
    description:
      "From West to East Africa and beyond, we've supported both public and private sector institutions with high-quality capacity building interventions.",
  },
  {
    id: 5,
    icon: <TopTierIcon />,
    title: "Top-Tier Faculty & Practitioners",
    description:
      "Our facilitators are not just trainers—they are seasoned professionals with deep expertise in governance, leadership, procurement, and organizational development.",
  },
];
