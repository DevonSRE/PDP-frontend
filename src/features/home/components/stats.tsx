import { cn } from "@/lib/utils";
import { CapacitySection } from "./capacity-section";
import { HomePageStat } from "./homepage-status";

export function Stats() {
  return (
    <section
      className={cn(
        "px-7 md:px-20 py-20 bg-gradient-to-b from-gray-50 to-[#E8E8E8]",
        "flex flex-col gap-20",
      )}
    >
      <HomePageStat />
      <CapacitySection />
    </section>
  );
}
