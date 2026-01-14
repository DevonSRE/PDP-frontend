import { AboutServicesBG } from "@/components/icon/about-service-bg";
import { cn } from "@/lib/utils";
import { AtSignIcon } from "lucide-react";
import React from "react";

export function CallToAction() {
  return (
    <section className="relative w-full overflow-hidden h-[75dvh] bg-neutral-50 flex justify-center items-center px-7 md:px-10">
      {/* Background SVG */}
      <AboutServicesBG className="z-0 w-144 absolute -top-40 -left-80" />
      <AboutServicesBG className="z-0 w-144 absolute -bottom-24 -left-80 -scale-y-100" />

      <AboutServicesBG className="z-0 w-144 absolute -top-40 -right-72" />
      <AboutServicesBG className="z-0 w-144 absolute -bottom-24 -right-72 -scale-y-100" />

      {/* Content */}
      <div className="z-10 text-center flex flex-col w-full gap-4">
        <h2 className="text-lg md:text-2xl font-bold text-gray-900">
          Interested in Working With Us?
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto">
          Let’s collaborate to build the capacity of your team and transform
          institutional outcomes.
        </p>

        <button
          className={cn(
            "text-white text-sm",
            "mx-auto px-8 py-4 rounded-2xl",
            "flex gap-2 items-center justify-center",
            "bg-green-900 hover:bg-green-800 transition-colors duration-300",
          )}
        >
          <AtSignIcon className="h-4 w-4" />
          <span>Get In Touch</span>
        </button>
      </div>
    </section>
  );
}
