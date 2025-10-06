import { cn } from "@/lib/utils";
import React, { type ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

export function PivotalCard({ icon, title, description }: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden group ring-2 md:ring-4 ring-white",
        "bg-white flex flex-col gap-2 transition-all",
        "w-full min-h-44 md:min-h-60 max-w-full md:max-w-sm rounded-2xl p-2.5 md:p-5",
        "hover:ring-transparent hover:bg-brand-green-light hover:text-white",
      )}
    >
      {/* patterns start */}
      <div
        className={cn(
          "absolute h-105 w-105 -top-85 -right-55 bg-gray-300/5 rounded-full",
          "transition-all group-hover:bg-white/5",
        )}
      />
      <div
        className={cn(
          "absolute h-105 w-105 -top-79 -right-67 bg-gray-300/5 rounded-full",
          "transition-all group-hover:bg-white/5",
        )}
      />
      <div
        className={cn(
          "absolute h-105 w-105 -top-67 -right-79 bg-gray-300/5 rounded-full",
          "transition-all group-hover:bg-white/5",
        )}
      />
      <div
        className={cn(
          "absolute h-105 w-105 -top-55 -right-85 bg-gray-300/5 rounded-full",
          "transition-all group-hover:bg-white/5",
        )}
      />
      {/* patterns end */}

      {/* Icon */}
      {icon && (
        <div
          className={cn(
            "mb-1.5 md:mb-4 w-10 md:w-12 h-10 md:h-12 transition-all",
            "flex items-center justify-center",
            "rounded-full bg-brand-green-light text-gray-50",
            "group-hover:bg-white group-hover:text-brand-green-light",
          )}
        >
          {icon}
        </div>
      )}

      {/* Content */}
      <h3 className="leading-tight w-full max-w-full md:max-w-xs text-base md:text-lg font-semibold flex justify-start items-start">
        {title}
      </h3>
      <p className="text-xs font-light text-justify md:text-start">
        {description}
      </p>
    </div>
  );
}
