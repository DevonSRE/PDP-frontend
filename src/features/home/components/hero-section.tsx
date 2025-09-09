import React from "react";
import Image from "next/image";
import { HeroBg } from "@/components/icon/hero-icon";
import { CalendarRange } from "lucide-react";
import { GraduationIcon } from "@/components/icon/graduation-icon";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-12 bg-white">
      {/* Background SVG */}
      <HeroBg className="absolute inset-0 w-full h-full object-cover z-0" />

      {/* Content sits on top */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 md:px-8 pt-20 md:pt-20">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 text-sm font-medium mb-6 border-2 border-black/30">
          <span className="text-yellow-800 bg-white py-2 px-4 rounded-full"> New </span>
          <span className="text-black font-light font-sm">2025 Course Schedule now available.</span>
          <a href="#" className="underline font-semibold">
            View Schedule →
          </a>
        </div>

        {/* Main Heading  */}
        <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-8 p-4">
          {/* First line of text */}
          <h1 className="text-black text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
            Delivering <span className="text-[#E4B800]">Cost-Effective</span>{" "}
            and
          </h1>

          {/* Second line of text in a bordered box */}
          <div className="flex items-center justify-center border border-gray-300 rounded-full px-8 py-4 bg-white/50 backdrop-blur-sm shadow-md">
            <h2 className="text-black text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
              Flexible{" "}
              <span className="text-[#026757]">Training Solutions</span>
            </h2>
          </div>
        </div>

        {/* Subtext */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-10 font-poppins">
          Explore Our 2025 Training Calendar Featuring New BPP Courses, Global
          Venues, and Customizable Learning Tracks for Public and Private Sector
          Professionals
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#"
            className=" px-6 py-3 bg-teal-700 font-poppins text-white rounded-full font-medium shadow-md hover:bg-teal-800 transition-colors  flex items-center gap-2"
          >
            <GraduationIcon/>
            Book Training Now
          </a>
          <a
            href="#"
            className="px-6 py-3 border-2 border-teal-700 text-teal-700 bg-white font-poppins rounded-full font-medium hover:bg-teal-50 transition-colors  flex items-center gap-2"
          >
            <CalendarRange/>
            View 2025 Course Schedule
          </a>
        </div>
      </div>

      {/* Foreground image + overlay */}
      <div className="relative flex justify-start z-10">
        <Image
          src="/assets/hero_image.svg"
          alt="Training session"
          className="max-w-6xl w-full object-contain"
          width={800}
          height={400}
        />

        {/* Yellow overlay */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-yellow-500 rounded-t-xl opacity-80"></div>
      </div>
    </section>
  );
}
