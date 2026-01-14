import { cn } from "@/lib/utils";
import React from "react";

export function AboutServicesBG({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="663"
      height="663"
      viewBox="0 0 663 663"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-36 h-auto", className)}
      {...props}
    >
      <circle cx="331.5" cy="331.5" r="331.5" fill="white" />
      <circle
        cx="362.395"
        cy="395.796"
        r="259.689"
        fill="url(#paint0_linear_381_1337)"
      />
      <circle cx="331.5" cy="331.5" r="222.5" fill="white" />
      <circle
        cx="352.237"
        cy="374.655"
        r="174.301"
        fill="url(#paint1_linear_381_1337)"
      />
      <circle cx="331.5" cy="331.5" r="121.5" fill="white" />
      <circle
        cx="342.824"
        cy="355.065"
        r="95.1801"
        fill="url(#paint2_linear_381_1337)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_381_1337"
          x1="362.395"
          y1="136.107"
          x2="362.395"
          y2="655.485"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5F5F5" />
          <stop offset="1" stopColor="#F5F5F5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_381_1337"
          x1="352.237"
          y1="200.354"
          x2="352.237"
          y2="548.956"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5F5F5" />
          <stop offset="1" stopColor="#F5F5F5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_381_1337"
          x1="342.824"
          y1="259.885"
          x2="342.824"
          y2="450.245"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5F5F5" />
          <stop offset="1" stopColor="#F5F5F5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
