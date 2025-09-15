import { cn } from "@/lib/utils";
import React, { type ReactNode } from "react";

interface CategoryCardProps {
  id?: number;
  index: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export function CategoryCard({
  icon,
  index,
  title,
  description,
}: CategoryCardProps) {
  return (
    <div
      className={cn(
        "rounded p-5 md:p-8",
        "transition-all duration-300",
        "flex items-start gap-4 w-full",
        [
          index % 2 === 0
            ? "justify-end hover:bg-linear-to-r from-transparent to-white transition-all"
            : "justify-start hover:bg-linear-to-l from-transparent to-white transition-all",
        ],
      )}
    >
      <div className="w-fit max-w-full md:max-w-2xl gap-4 md:gap-8 flex flex-col md:flex-row items-start md:items-center">
        <div className="rounded-md bg-brand-green/5 text-brand-green p-2 h-14 md:h-16 min-w-12 md:min-w-14 w-12 md:w-14 flex items-center justify-center">
          {icon}
        </div>

        <div className="flex flex-col gap-1 items-start justify-start text-start w-full md:w-fit">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm font-light text-justify md:text-start">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
