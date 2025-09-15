import { Button } from "@/components/ui/button";
import { CircleCheckIcon } from "lucide-react";

export function TrainingPrograms() {
  return (
    <section className="py-14 md:py-32 px-7 md:px-10 bg-brand-green-light flex flex-col gap-7 md:gap-28 text-white">
      <div className="w-full h-fit flex flex-col gap-2 max-w-full md:max-w-4xl text-center mx-auto">
        <p className="text-xl md:text-3xl font-bold">
          BPP Training <span className="text-brand-yellow-dark">Programs</span>
        </p>
        <p className="text-sm md:text-lg font-light italic">
          Our Bureau of Public Procurement (BPP) accredited programs are
          designed for public servants and procurement professionals across
          Africa and beyond.
        </p>
      </div>

      <div className="w-full h-fit flex flex-col items-center gap-5 md:gap-10 max-w-full md:max-w-6xl p-0 md:p-4 mx-auto">
        <p className="font-bold italic">Public Procurement Specialization</p>
        <div className="w-full flex flex-wrap justify-between gap-5 md:gap-7">
          {specialisations.map((specialty) => (
            <SpecialisationCard
              key={specialty.id}
              title={specialty.title}
              description={specialty.description}
            />
          ))}
        </div>
        <Button className="bg-brand-green-extralight hover:bg-brand-green-extralight/80 w-full py-7 text-sm">
          Download Guide Document
        </Button>
      </div>
    </section>
  );
}

const specialisations = [
  {
    id: 1,
    title: "Framework Agreements",
    description:
      "Master the development and management of effective framework contracts",
  },
  {
    id: 2,
    title: "Health Commodities",
    description: "Specialized procurement techniques for healthcare systems",
  },
  {
    id: 3,
    title: "Works Procurement",
    description:
      "Best practices for infrastructure and construction procurement",
  },
  {
    id: 4,
    title: "e-Procurement Systems",
    description: "Implementing and managing digital procurement platforms",
  },
];

function SpecialisationCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white w-full lg:w-135 min-h-fit md:min-h-48 rounded-xl flex flex-col items-start justify-center gap-2 p-5 md:p-7 text-black">
      <div className="w-fit h-fit text-brand-green-extralight">
        <CircleCheckIcon />
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-semibold text-sm md:text-base">{title}</p>
        <p className="font-light text-xs md:text-sm">{description}</p>
      </div>
    </div>
  );
}
