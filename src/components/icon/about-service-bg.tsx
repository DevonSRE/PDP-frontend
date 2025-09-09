import { cn } from "@/lib/utils";
import React from "react";

export function AboutServicesBG({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg width="663" height="663" viewBox="0 0 663 663" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
    <circle cx="331.5" cy="331.5" r="331.5" transform="matrix(1 0 0 -1 0 663)" fill="white"/>
    <circle cx="259.689" cy="259.689" r="259.689" transform="matrix(1 0 0 -1 102.707 526.893)" fill="url(#paint0_linear_381_1368)"/>
    <circle cx="222.5" cy="222.5" r="222.5" transform="matrix(1 0 0 -1 109 554)" fill="white"/>
    <circle cx="174.301" cy="174.301" r="174.301" transform="matrix(1 0 0 -1 177.936 462.646)" fill="url(#paint1_linear_381_1368)"/>
    <circle cx="121.5" cy="121.5" r="121.5" transform="matrix(1 0 0 -1 210 453)" fill="white"/>
    <circle cx="95.1801" cy="95.1801" r="95.1801" transform="matrix(1 0 0 -1 247.644 403.115)" fill="url(#paint2_linear_381_1368)"/>
    <defs>
    <linearGradient id="paint0_linear_381_1368" x1="259.689" y1="0" x2="259.689" y2="519.378" gradientUnits="userSpaceOnUse">
    <stop stop-color="#F5F5F5"/>
    <stop offset="1" stop-color="#F5F5F5" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint1_linear_381_1368" x1="174.301" y1="0" x2="174.301" y2="348.602" gradientUnits="userSpaceOnUse">
    <stop stop-color="#F5F5F5"/>
    <stop offset="1" stop-color="#F5F5F5" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint2_linear_381_1368" x1="95.1801" y1="0" x2="95.1801" y2="190.36" gradientUnits="userSpaceOnUse">
    <stop stop-color="#F5F5F5"/>
    <stop offset="1" stop-color="#F5F5F5" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>
  );
}

export default AboutServicesBG;