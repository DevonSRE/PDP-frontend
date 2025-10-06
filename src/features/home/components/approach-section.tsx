import React from "react";
import Image from "next/image";
import { ApproachIcon } from "@/components/icon/approach-icon";

export function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-brand-green text-white px-7 md:px-10 py-10 md:py-36">
      <div className="mx-auto flex flex-col md:flex-row justify-end items-center w-full md:p-10">
        {/* Left Image */}
        <div className="hidden md:block absolute -left-105 -top-52 w-full max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="rounded-full h-fit w-fit p-14 bg-white/5 ">
            <div className="rounded-full h-fit w-fit p-14 bg-white/5 ">
              <div className="rounded-full h-fit w-fit p-14 bg-white/5 ">
                <div className="w-222 h-222 object-cover z-10 rounded-full">
                  <Image
                    src="/assets/circular_image.png"
                    alt="Training session"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 md:space-y-8 max-w-full md:max-w-2xl w-full">
          {approachItems.map((item, index) => (
            <div key={index} className="flex flex-col w-full gap-1.5 md:gap-4">
              <div className="bg-brand-green/20 pb-2 md:pb-4 w-full flex items-center gap-2 md:gap-4">
                <div className="p-2 md:p-3.5 rounded-md bg-brand-yellow-dark/10">
                  <ApproachIcon className="bg-brand-yellow-dark/10 w-4 md:w-6 h-4 md:h-6 rounded-sm" />
                </div>
                <h3 className="text-yellow-400 font-medium text-base md:text-lg">
                  {item.title}
                </h3>
              </div>

              <p className="text-white text-xs md:text-sm leading-relaxed text-justify md:text-start">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const approachItems = [
  {
    title: "Our Approach",
    description:
      "Pivotal Development Partners is a trusted training and institutional development partner supporting public and private sector organizations across Africa and beyond. We take a collaborative and problem-solving approach to co-design training programs and reform initiatives that are context-specific, practical, and impactful.",
  },
  {
    title: "Why it Matters",
    description:
      "At Pivotal, we believe that institutions thrive when people are empowered with the right tools, knowledge, and systems. We are committed to supporting leadership, accountability, and innovation across Africa’s development space through targeted learning and reform strategies.",
  },
  {
    title: "How We Work",
    description:
      "Our process begins with a strategic needs assessment to understand client priorities. We then co-develop tailored training and support initiatives that address these gaps. Post-training follow-ups and institutional guidance are built into our delivery to ensure long-term impact.",
  },
];
