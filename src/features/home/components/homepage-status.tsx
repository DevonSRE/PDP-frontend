import { cn } from "@/lib/utils";
import { Fragment } from "react";

export function HomePageStat() {
  return (
    <div className="">
      {/* Top Stats Section */}
      <div
        className={cn(
          "max-w-full md:max-w-7xl mx-auto",
          "bg-brand-green-light text-white rounded-2xl p-2 md:p-4 shadow-md md:shadow-lg",
          "flex items-center flex-col md:flex-row",
        )}
      >
        {/* Left Content */}
        <div
          className={cn(
            "bg-linear-to-b from-brand-green-light/5 to-white",
            "w-80 p-[1.5px] rounded-lg overflow-hidden",
          )}
        >
          <div className="w-full h-full bg-brand-green-light rounded-lg">
            <div
              className={cn(
                "w-full h-full flex flex-col items-start gap-3 rounded-lg p-5 bg-white/10",
              )}
            >
              <h2 className="text-xl md:text-2xl font-semibold">#1</h2>
              <h3 className="flex flex-col gap-2">
                <p className="text-sm md:text-base font-bold mt-2 leading-snug">
                  Leading Capacity <br /> Development Partner in Africa
                </p>
                <p className="text-gray-200 text-sm md:text-base">
                  We don’t just talk capacity — we deliver results.
                </p>
              </h3>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="p-4 md:p-0 flex-1 flex flex-wrap md:flex-nowrap items-center justify-center md;justify-evenly gap-10 md:gap-0">
          {stats.map((stat, idx) => {
            return (
              <Fragment key={stat.id}>
                <div className="max-w-full md:max-w-28 w-fit flex flex-col items-start text-start">
                  <p className="text-4xl md:text-5xl font-semibold">
                    {stat.value}+
                  </p>
                  <p className="text-xs md:text-sm text-white max-w-28 md:max-w-full">
                    {stat.description}
                  </p>
                </div>
                {idx < stats.length - 1 && (
                  <div className="hidden md:block h-5 w-px bg-white/20" />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const stats = [
  { id: 1, value: "15", description: "Government Partners" },
  { id: 2, value: "8.0", description: "Countries Reached" },
  { id: 3, value: "100", description: "Professional Courses" },
  { id: 4, value: "5K", description: "Trained Professionals" },
];
