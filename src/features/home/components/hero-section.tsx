import React from "react";
import Image from "next/image";



export function HeroSection () {
  return (
    <section
  className="relative w-full overflow-hidden pt-12 bg-white 
             bg-[url('/assets/hero_background_left.svg'),url('/assets/hero_background_right.svg')] 
             bg-no-repeat bg-[left_center,right_center] bg-[auto_100%]"
      >

    
      <div className="max-w-5xl mx-auto text-center px-4 md:px-8 pt-20 md:pt-20">
        {/* Badge */}
       <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 text-sm font-medium mb-6">
          <span className="text-yellow-800">🆕</span>
          <span>2025 Course Schedule now available.</span>
          <a href="#" className="underline font-semibold">
            View Schedule →
          </a>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 font-poppins pt-12">
          Delivering{" "}
          <span className="text-yellow-500">Cost-Effective</span> and Flexible{" "}
        <span className="relative text-teal-600 bg-white shadow-sm px-2 py-1 rounded pt-2">
        Training Solutions
        {/* Gradient border line */}
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-b from-white-500 via-green-500 to-yellow-500 rounded-b"></span>
        </span>
        </h1>



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
            className="px-6 py-3 bg-teal-700 font-poppins text-white font-poppins rounded-full font-medium shadow-md hover:bg-teal-800 transition-colors"
          >
            Book Training Now
          </a>
          <a
            href="#"
            className="px-6 py-3 border-2 border-teal-700 text-teal-700 font-poppins rounded-full font-medium hover:bg-teal-50 transition-colors"
          >
            View 2025 Course Schedule
          </a>
        </div>
      </div>

      <div className="relative flex justify-start">
        <Image src="/assets/hero_image.svg"
          alt="Training session"
          className="max-w-6xl w-full object-contain"
          width={800}
          height={400}
        />

        {/* Yellow overlay inside image container */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-yellow-500 rounded-t-xl opacity-80"></div>
      </div>
    </section>
  );
};

