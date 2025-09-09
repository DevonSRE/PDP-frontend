import { cn } from "@/lib/utils";

export function PdpLogoBg({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="624"
      height="520"
      viewBox="0 0 624 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
        className={cn("h-auto w-16", className)}
        {...props}
    >
      <path
        d="M268.435 475.743L60.3774 23.8107C54.1551 10.2949 62.3094 4.27152 67.1643 2.94934L166.329 16.3861C177.007 19.4171 185.104 28.8306 187.817 33.1585L350.189 383.856C353.802 392.266 347.818 401.356 347.818 401.356L285.934 478.114C278.869 483.493 271.324 478.775 268.435 475.743Z"
        fill="url(#paint0_linear_373_5065)"
      />
      <path
        d="M618.162 101.371L399.921 352.973C384.656 360.409 374.643 349.548 371.545 343.188L344.977 276.225C339.096 261.171 342.393 251.454 344.776 248.476L508.812 60.8129L609.921 74.5132C626.189 83.0538 622.193 95.9771 618.162 101.371Z"
        fill="url(#paint1_linear_373_5065)"
      />
      <path
        d="M324.453 175.603C361.595 180.636 395.785 154.606 400.818 117.464C405.85 80.3222 379.82 46.1336 342.679 41.1007C330.109 39.3975 317.878 41.2521 307 45.8906L241.882 38.3383L267.545 92.6136C267.032 94.7782 266.619 96.988 266.314 99.2388C261.282 136.381 287.311 170.57 324.453 175.603Z"
        fill="url(#paint2_linear_373_5065)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_373_5065"
          x1="169.3"
          y1="465.809"
          x2="229.045"
          y2="24.8842"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#009981" />
          <stop offset="1" stopColor="#026757" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_373_5065"
          x1="456.025"
          y1="364.608"
          x2="497.399"
          y2="59.2664"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E4B800" />
          <stop offset="1" stopColor="#7E6600" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_373_5065"
          x1="308.406"
          y1="173.429"
          x2="326.631"
          y2="38.9262"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#005A92" />
          <stop offset="1" stopColor="#004F81" />
        </linearGradient>
      </defs>
    </svg>
  );
}
