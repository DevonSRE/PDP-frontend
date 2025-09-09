import { cn } from "@/lib/utils"

export function GlowEffect({ className, ...props}: React.ComponentProps<"svg">){
    return (
<svg width="405" height="255" viewBox="0 0 405 255" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)} {...props}>
<g filter="url(#filter0_gn_390_2551)">
<path d="M164.779 394.187C126.656 379.235 94.8976 351.526 74.9142 315.784C54.9307 280.041 47.9588 238.475 55.1865 198.168C62.4141 157.861 83.394 121.307 114.552 94.734C145.709 68.1614 185.116 53.2144 226.059 52.4396C267.001 51.6649 306.946 65.1103 339.087 90.4851C371.227 115.86 393.575 151.594 402.322 191.599C411.07 231.603 405.675 273.404 387.058 309.877C368.442 346.35 337.754 375.24 300.224 391.624L277.327 339.174C302.722 328.088 323.488 308.539 336.085 283.859C348.683 259.178 352.333 230.894 346.414 203.824C340.495 176.754 325.372 152.574 303.624 135.403C281.875 118.233 254.846 109.135 227.142 109.659C199.437 110.183 172.771 120.297 151.688 138.278C130.605 156.259 116.408 180.994 111.518 208.269C106.627 235.543 111.345 263.67 124.867 287.856C138.389 312.042 159.879 330.791 185.675 340.909L164.779 394.187Z" fill="url(#paint0_radial_390_2551)"/>
</g>
<g filter="url(#filter1_gn_390_2551)">
<path d="M234.6 421.572C196.478 406.62 164.719 378.912 144.736 343.169C124.752 307.426 117.781 265.86 125.008 225.553C132.236 185.246 153.216 148.692 184.373 122.119C215.531 95.5466 254.938 80.5996 295.881 79.8248C336.823 79.0501 376.768 92.4955 408.908 117.87C441.049 143.245 463.397 178.979 472.144 218.984C480.891 258.989 475.497 300.789 456.88 337.262C438.263 373.735 407.576 402.625 370.046 419.009L347.83 368.119C373.586 356.875 394.646 337.049 407.422 312.018C420.199 286.987 423.901 258.3 417.898 230.845C411.895 203.391 396.558 178.867 374.5 161.453C352.443 144.039 325.029 134.811 296.931 135.343C268.833 135.875 241.789 146.132 220.406 164.369C199.023 182.605 184.625 207.691 179.665 235.353C174.704 263.015 179.489 291.541 193.203 316.071C206.918 340.601 228.713 359.617 254.876 369.878L234.6 421.572Z" fill="url(#paint1_radial_390_2551)"/>
</g>
<g filter="url(#filter2_gn_390_2551)">
<path d="M304.422 448.957C266.299 434.005 234.541 406.297 214.557 370.554C194.574 334.811 187.602 293.245 194.83 252.938C202.057 212.631 223.037 176.077 254.195 149.504C285.352 122.932 324.759 107.985 365.702 107.21C406.645 106.435 446.589 119.881 478.73 145.255C510.87 170.63 533.218 206.364 541.965 246.369C550.713 286.374 545.318 328.174 526.701 364.647C508.085 401.121 477.397 430.01 439.868 446.394L416.509 392.889C441.66 381.909 462.226 362.549 474.702 338.106C487.179 313.662 490.794 285.65 484.932 258.84C479.069 232.03 464.093 208.083 442.553 191.077C421.014 174.072 394.245 165.062 366.807 165.581C339.368 166.1 312.959 176.117 292.079 193.925C271.198 211.733 257.138 236.23 252.294 263.242C247.451 290.254 252.123 318.11 265.515 342.064C278.907 366.018 300.191 384.586 325.739 394.607L304.422 448.957Z" fill="url(#paint2_radial_390_2551)"/>
</g>
<g filter="url(#filter3_gn_390_2551)">
<path d="M374.244 476.342C336.121 461.39 304.362 433.682 284.379 397.939C264.396 362.196 257.424 320.63 264.651 280.323C271.879 240.016 292.859 203.462 324.016 176.89C355.174 150.317 394.581 135.37 435.524 134.595C476.466 133.82 516.411 147.266 548.551 172.641C580.692 198.015 603.04 233.75 611.787 273.754C620.535 313.759 615.14 355.559 596.523 392.032C577.906 428.506 547.219 457.396 509.689 473.779L486.331 420.274C511.482 409.295 532.048 389.934 544.524 365.491C557 341.048 560.616 313.035 554.753 286.225C548.891 259.416 533.915 235.468 512.375 218.463C490.836 201.457 464.066 192.447 436.628 192.966C409.19 193.485 382.781 203.502 361.9 221.31C341.02 239.118 326.96 263.615 322.116 290.627C317.272 317.64 321.945 345.496 335.337 369.449C348.729 393.403 370.012 411.972 395.561 421.992L374.244 476.342Z" fill="url(#paint3_radial_390_2551)"/>
</g>
<defs>
<filter id="filter0_gn_390_2551" x="0.084301" y="0.0849724" width="458.646" height="446.425" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="0.77212798595428467 0.77212798595428467" numOctaves="3" seed="8343" />
<feDisplacementMap in="shape" scale="104.64585113525391" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
<feMerge result="effect1_texture_390_2551">
<feMergeNode in="displacedImage"/>
</feMerge>
<feTurbulence type="fractalNoise" baseFrequency="2.3163840770721436 2.3163840770721436" stitchTiles="stitch" numOctaves="3" result="noise" seed="4046" />
<feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
<feComponentTransfer in="alphaNoise" result="coloredNoise1">
<feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
</feComponentTransfer>
<feComposite operator="in" in2="effect1_texture_390_2551" in="coloredNoise1" result="noise1Clipped" />
<feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
<feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
<feMerge result="effect2_noise_390_2551">
<feMergeNode in="effect1_texture_390_2551" />
<feMergeNode in="color1" />
</feMerge>
</filter>
<filter id="filter1_gn_390_2551" x="69.9061" y="27.4702" width="458.646" height="446.425" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="0.77212798595428467 0.77212798595428467" numOctaves="3" seed="8343" />
<feDisplacementMap in="shape" scale="104.64585113525391" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
<feMerge result="effect1_texture_390_2551">
<feMergeNode in="displacedImage"/>
</feMerge>
<feTurbulence type="fractalNoise" baseFrequency="2.3163840770721436 2.3163840770721436" stitchTiles="stitch" numOctaves="3" result="noise" seed="4046" />
<feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
<feComponentTransfer in="alphaNoise" result="coloredNoise1">
<feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
</feComponentTransfer>
<feComposite operator="in" in2="effect1_texture_390_2551" in="coloredNoise1" result="noise1Clipped" />
<feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
<feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
<feMerge result="effect2_noise_390_2551">
<feMergeNode in="effect1_texture_390_2551" />
<feMergeNode in="color1" />
</feMerge>
</filter>
<filter id="filter2_gn_390_2551" x="139.727" y="54.8553" width="458.646" height="446.425" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="0.77212798595428467 0.77212798595428467" numOctaves="3" seed="8343" />
<feDisplacementMap in="shape" scale="104.64585113525391" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
<feMerge result="effect1_texture_390_2551">
<feMergeNode in="displacedImage"/>
</feMerge>
<feTurbulence type="fractalNoise" baseFrequency="2.3163840770721436 2.3163840770721436" stitchTiles="stitch" numOctaves="3" result="noise" seed="4046" />
<feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
<feComponentTransfer in="alphaNoise" result="coloredNoise1">
<feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
</feComponentTransfer>
<feComposite operator="in" in2="effect1_texture_390_2551" in="coloredNoise1" result="noise1Clipped" />
<feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
<feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
<feMerge result="effect2_noise_390_2551">
<feMergeNode in="effect1_texture_390_2551" />
<feMergeNode in="color1" />
</feMerge>
</filter>
<filter id="filter3_gn_390_2551" x="209.549" y="82.2405" width="458.647" height="446.425" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="0.77212798595428467 0.77212798595428467" numOctaves="3" seed="8343" />
<feDisplacementMap in="shape" scale="104.64585113525391" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
<feMerge result="effect1_texture_390_2551">
<feMergeNode in="displacedImage"/>
</feMerge>
<feTurbulence type="fractalNoise" baseFrequency="2.3163840770721436 2.3163840770721436" stitchTiles="stitch" numOctaves="3" result="noise" seed="4046" />
<feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
<feComponentTransfer in="alphaNoise" result="coloredNoise1">
<feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
</feComponentTransfer>
<feComposite operator="in" in2="effect1_texture_390_2551" in="coloredNoise1" result="noise1Clipped" />
<feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
<feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
<feMerge result="effect2_noise_390_2551">
<feMergeNode in="effect1_texture_390_2551" />
<feMergeNode in="color1" />
</feMerge>
</filter>
<radialGradient id="paint0_radial_390_2551" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(229.408 229.408) rotate(-68.5841) scale(177 698.841)">
<stop stopColor="white"/>
<stop offset="1" stopColor="#009A77" stopOpacity="0.5"/>
</radialGradient>
<radialGradient id="paint1_radial_390_2551" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(299.229 256.793) rotate(-68.5841) scale(177 698.841)">
<stop stopColor="white"/>
<stop offset="1" stopColor="#009A77" stopOpacity="0.5"/>
</radialGradient>
<radialGradient id="paint2_radial_390_2551" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(369.051 284.178) rotate(-68.5841) scale(177 698.841)">
<stop stopColor="white"/>
<stop offset="1" stopColor="#009A77" stopOpacity="0.5"/>
</radialGradient>
<radialGradient id="paint3_radial_390_2551" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(438.873 311.563) rotate(-68.5841) scale(177 698.841)">
<stop stopColor="white"/>
<stop offset="1" stopColor="#009A77" stopOpacity="0.5"/>
</radialGradient>
</defs>
</svg>
)
}
