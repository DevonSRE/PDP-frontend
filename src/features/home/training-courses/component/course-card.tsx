import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface CourseCardProps {
  imageSrc: string;
  category: string;
  description: string;
}

export function CourseCard({
  imageSrc,
  category,
  description,
}: CourseCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3.5 items-start",
        "rounded-sm overflow-hidden min-w-full md:min-w-96 max-w-full md:max-w-lg",
        "bg-white p-0 md:p-3",
      )}
    >
      <div className="w-full rounded-3xl overflow-hidden min-h-48 h-52">
        <Image
          src={imageSrc}
          alt={category}
          width={200}
          height={200}
          className="size-full object-cover"
        />
      </div>

      <div className="flex-grow flex flex-col items-start gap-2.5">
        <h3 className="text-sm md:text-base font-semibold">{category}</h3>
        <p className="text-gray-600 text-xs md:text-sm items-start text-justify md:text-start">
          {description}
        </p>
        <button className="bg-brand-green-extralight py-2 w-full rounded-md hover:bg-brand-green-light text-white text-xs transition-colors duration-300">
          View Course
        </button>
      </div>
    </div>
  );
}
