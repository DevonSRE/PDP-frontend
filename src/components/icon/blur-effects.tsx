import { cn } from "@/lib/utils";

export function BlurEffects({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="1248"
      height="363"
      viewBox="0 0 1248 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-128", className)}
      {...props}
    >
      <g filter="url(#filter0_g_373_5028)">
        <ellipse
          opacity="0.05"
          cx="4.5"
          cy="528.5"
          rx="636.5"
          ry="479.5"
          transform="rotate(-180 4.5 528.5)"
          fill="white"
        />
        <ellipse
          opacity="0.05"
          cx="-136.5"
          cy="518.5"
          rx="636.5"
          ry="479.5"
          transform="rotate(-180 -136.5 518.5)"
          fill="white"
        />
        <ellipse
          opacity="0.05"
          cx="-280.5"
          cy="479.5"
          rx="636.5"
          ry="479.5"
          transform="rotate(-180 -280.5 479.5)"
          fill="white"
        />
        <ellipse
          opacity="0.05"
          cx="611.5"
          cy="634.5"
          rx="636.5"
          ry="373.5"
          transform="rotate(-180 611.5 634.5)"
          fill="white"
        />
        <ellipse
          opacity="0.05"
          cx="327.5"
          cy="613.5"
          rx="636.5"
          ry="373.5"
          transform="rotate(-180 327.5 613.5)"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_g_373_5028"
          x="-957"
          y="-40"
          width="2245"
          height="1088"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2 2"
            numOctaves="3"
            seed="5816"
          />
          <feDisplacementMap
            in="shape"
            scale="80"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displacedImage"
            width="100%"
            height="100%"
          />
          <feMerge result="effect1_texture_373_5028">
            <feMergeNode in="displacedImage" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
