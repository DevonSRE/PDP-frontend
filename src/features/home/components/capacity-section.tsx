import { ApproachIcon } from "@/components/icon/approach-icon";
import { KeyFocusAreaIcon } from "@/components/icon/key-focus-icon";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import Image from "next/image";

export function CapacitySection() {
  return (
    <div
      className={cn(
        "w-full mx-auto bg-white rounded-2xl",
        "p-0.5 md:p-[3px] bg-linear-to-b from-tranparent from-0% via-neutral-400/30 via-50% to-transparent to-100%",
      )}
    >
      <div
        className={cn(
          "flex flex-col md:flex-row gap-7 md:gap-14",
          "w-full bg-white",
          "px-7 md:px-24 py-10 md:py-40 rounded-lg",
        )}
      >
        {/* What We Do */}
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex gap-4 md:gap-7">
            <div className="w-1.5 min-h-full bg-linear-to-b from-10% from-transparent to-brand-yellow-dark" />

            <div className="flex flex-col gap-2 md:gap-4">
              <div
                className={cn(
                  "rounded-md bg-brand-yellow-dark/5",
                  "w-14 h-14",
                  "grid place-content-center",
                )}
              >
                <ApproachIcon />
              </div>
              <h3 className="text-brand-yellow-dark font-bold text-base md:text-lg">
                What We Do
              </h3>
              <p className="text-gray-600 text-justify md:text-start text-xs md:text-sm leading-relaxed">
                We specialize in strengthening institutions and individuals
                through practical, context-specific training programs that
                deliver measurable results.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md hidden md:block">
            <Image
              src="/assets/why.svg"
              alt="Training session"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Key Focus Area */}
        <div className="flex gap-4 md:gap-7 min-h-full max-w-full md:max-w-xl">
          <div className="w-1.5 min-h-full bg-linear-to-b from-10% from-transparent to-brand-green-extralight" />

          <div className="flex flex-col gap-2 md:gap-4 text-brand-green-extralight">
            <div
              className={cn(
                "rounded-md bg-green-600/5",
                "w-14 h-14",
                "grid place-content-center",
              )}
            >
              <KeyFocusAreaIcon />
            </div>
            <h3 className="text-brand-green-extralight font-bold text-base md:text-lg mb-2 md:mb-4">
              Key Focus Area
            </h3>
            <ul className="space-y-4 text-gray-700 text-xs md:text-sm leading-relaxed">
              {focusAreas.map((item) => (
                <li key={item.id} className="flex items-start gap-1.5 md:gap-2">
                  <Dot className="text-black w-5 h-5 mt-0.5 md:mt-1 flex-shrink-0" />
                  <span className="text-justify md:text-start">
                    <strong>{item.title}:</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
const focusAreas = [
  {
    id: 1,
    title: "Customised Training",
    text: "We deliver training that is designed from the ground up, based on a comprehensive assessment of your team’s needs and institutional challenges.",
  },
  {
    id: 2,
    title: "Institutional Strengthening",
    text: "We support the development of sustainable internal systems, tools, and processes that enhance performance and public service delivery.",
  },
  {
    id: 3,
    title: "Public Procurement & Compliance",
    text: "Our team delivers specialised BPP-certified training aligned with the Public Procurement Act to ensure robust governance and compliance.",
  },
  {
    id: 4,
    title: "International Exposure",
    text: "Our study tours and learning exchanges are structured to promote best-practice sharing and innovation from leading institutions globally.",
  },
];
