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
        "rounded p-8",
        "transition-all duration-300",
        "flex items-start gap-4 w-full",
        [
          index % 2 === 0
            ? "justify-end hover:bg-linear-to-r from-transparent to-white transition-all"
            : "justify-start hover:bg-linear-to-l from-transparent to-white transition-all",
        ],
      )}
    >
      <div className="w-fit max-w-full md:max-w-2xl gap-8 flex items-center">
        <div className="rounded-md bg-brand-green/5 text-brand-green p-2 h-16 min-w-14 w-14 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col gap-1 items-start justify-start text-start">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}

