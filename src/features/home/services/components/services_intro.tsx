import { GlowEffect } from '@/components/icon/glow-effect';
import { PdpLogoBg } from '@/components/icon/pdp-logo-bg';
import React from 'react';

export function OurServicesIntro() {
  return (
    <div className="relative text-center bg-[#00251F] p-48 overflow-hidden">
      <GlowEffect className="absolute -bottom-80 -left-50 w-150 opacity-50" />
      <PdpLogoBg className="absolute -bottom-80 -left-50 w-150 opacity-50" />
       <GlowEffect className="absolute -bottom-80 -right-70 w-150 opacity-50" />
      <PdpLogoBg className="absolute -bottom-80 -right-70 w-150 opacity-50" />

      <div className="relative z-10 text-center px-4 ">
        <p className="text-white text-sm">
          Empowering organizations and professionals across Africa and beyond
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mt-2">
          Our Services
        </h1>
      </div>
    </div>
  );
}


