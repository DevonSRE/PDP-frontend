import React from "react";
import Image from "next/image";
import { HeroBg } from "@/components/icon/hero-bg";
import { CalendarRange, ChevronRight } from "lucide-react";
import { GraduationIcon } from "@/components/icon/graduation-icon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className={cn(
        "relative h-dvh w-full overflow-hidden pt-12 bg-white",
        "flex items-center justify-center",
      )}
    >
      {/* Background SVG */}
      <HeroBg className="h-full absolute inset-0 min-h-dvh object-cover z-0 top-0 left-0 right-0 bottom-0" />

      {/* Content sits on top */}
      <div className="relative z-10 -translate-y-14 max-w-5xl mx-auto text-center px-4 md:px-8">
        {/* Badge */}
        <div
          className={cn(
            "text-sm font-medium",
            "inline-flex items-center gap-2 ",
            "px-2 py-2 rounded-[20px] bg-gray-100 mb-6 border-2 border-stone-300/30",
          )}
        >
          <p className="text-xs text-yellow-800 bg-white py-1.5 px-4 rounded-full space-x-2 border border-input">
            <span>New</span>
            <span>🥳</span>
          </p>
          <span className="font-light">
            2025 Course Schedule now available,
          </span>
          <Link
            href="#"
            className="underline font-medium flex items-center gap-1"
          >
            View Schedule
            <ChevronRight size={14} />
          </Link>
        </div>

        {/* Main Heading  */}
        <div className="flex flex-col items-center justify-center space-y-1 lg:space-y-2 p-4">
          {/* First line of text */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            Delivering <span className="text-[#E4B800]">Cost-Effective</span>{" "}
            and
          </h1>

          {/* Second line of text in a bordered box */}
          <div className="rounded-3xl p-px bg-linear-[to_right,white_10%,green_25%,white_50%,green_85%,var(--brand-yellow-extradark)_100%)] overflow-hidden">
            <div className="bg-white px-6 py-2.5 backdrop-blur-sm rounded-3xl">
              <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
                Flexible{" "}
                <span className="text-[#026757]">Training Solutions</span>
              </h2>
            </div>
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
          <Link
            href="#"
            className={cn(
              buttonVariants(),
              "!px-8 py-7 bg-brand-green-light rounded-2xl shadow-md hover:bg-teal-800",
            )}
          >
            <GraduationIcon />
            Book Training Now
          </Link>
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "!px-8 py-7 ring-2 border-none text-brand-green-light rounded-2xl font-medium hover:bg-teal-50 transition-colors  flex items-center gap-2",
            )}
          >
            <CalendarRange />
            View 2025 Course Schedule
          </Link>
        </div>
      </div>

      {/* Foreground image + overlay */}
      <div
        className={cn(
          "absolute left-0 -bottom-40 flex justify-start z-10 w-full",
          "after:absolute after:bottom-40 after:rounded-t-2xl after:border-t-8 after:border-x-8 after:border-brand-yellow-extradark",
          "after:w-full after:h-24 after:bg-brand-yellow-dark after:z-0",
        )}
      >
        <Image
          src="/assets/hero_image.svg"
          alt="Training session"
          className="w-fit object-contain z-10"
          width={800}
          height={400}
        />
      </div>
    </section>
  );
}
