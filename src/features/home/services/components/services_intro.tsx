import { GlowEffect } from "@/components/icon/glow-effect";
import { PdpLogoBg } from "@/components/icon/pdp-logo-bg";
import React from "react";

export function OurServicesIntro() {
  return (
    <section className="relative text-center bg-[#00251F] h-96">
      <div className="hidden md:block w-full h-full bg-transparent relative overflow-hidden">
        <GlowEffect className="absolute -bottom-80 -left-50 w-150 opacity-50" />
        <PdpLogoBg className="absolute -bottom-80 -left-50 w-150 opacity-50" />
        <GlowEffect className="absolute -bottom-80 -right-70 w-150 opacity-50" />
        <PdpLogoBg className="absolute -bottom-80 -right-70 w-150 opacity-50" />
      </div>

      <div className="z-10 text-center px-4 flex flex-col w-full gap-2 absolute bottom-1/2 translate-y-1/2 md:translate-y-0 md:-bottom-8">
        <p className="text-white text-xs">
          Empowering organizations and professionals across Africa and beyond
        </p>
        <h1 className="text-white text-4xl md:text-7xl font-bold mix-blend-difference">
          Our Services
        </h1>
      </div>
    </section>
  );
}
