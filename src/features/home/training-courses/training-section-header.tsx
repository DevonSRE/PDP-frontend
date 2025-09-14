import { SpikyCicle } from "@/components/icon/spiky-circle";
import { Button } from "@/components/ui/button";
import { GraduationCapIcon } from "lucide-react";
import React from "react";

export function TrainingSectionHeader() {
  return (
    <section className="relative overflow-hidden h-dvh w-full bg-white px-7 md:px-10 flex justify-center items-center">
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_right,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_20%_at_50%_10%,#000_70%,transparent_110%)]"></div>
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_right,#f0f0f0_1px,transparent_1px)] bg-[size:7rem] [mask-image:radial-gradient(ellipse_80%_20%_at_50%_10%,#300_70%,transparent_110%)]"></div>

      <SpikyCicle className="absolute -bottom-60 -right-60 w-220 text-brand-blue/50" />
      <SpikyCicle className="absolute -bottom-60 -right-60 w-200 text-brand-blue" />

      <SpikyCicle className="absolute -bottom-64 right-106 w-165 text-brand-blue/50" />
      <SpikyCicle className="absolute -bottom-64 right-114 w-150 text-brand-blue" />

      <div className="-translate-y-14 relative overflow-hidden">
        {/* Content */}
        <div className="relative max-w-full md:max-w-7xl w-full mx-auto z-10 flex flex-col gap-12">
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-xl sm:text-4xl font-extrabold flex items-center">
              2025 Professional&nbsp;
              <span className="text-brand-green-extralight">
                Training Programs
              </span>
            </h1>
            <p className="text-sm md:text-base max-w-xl mx-auto font-light">
              Advance your career with our cutting-edge courses in leadership,
              governance, procurement, and strategic development.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Button className="bg-brand-green-light rounded-3xl !px-9 py-7 flex items-center gap-2.5 hover:bg-brand-green-extralight">
                <GraduationCapIcon className="w-16 h-16" />
                <span>Book Training Now</span>
              </Button>

              <Button
                variant="outline"
                className="border-2 border-brand-green-light text-brand-green-light py-6.5 px-9 rounded-3xl"
              >
                <span className="mr-2">📅</span> View 2025 Course Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-0 h-6 w-full bg-linear-to-r from-brand-blue to-brand-green-extralight" />
    </section>
  );
}
