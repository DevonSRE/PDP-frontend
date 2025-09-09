import { cn } from "@/lib/utils"

export function ServiceBannerBg({ className, ...props}: React.ComponentProps<"svg">){
    return (
<svg width="1680" height="118" viewBox="0 0 1680 118" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)} {...props}>
<g clipPath="url(#clip0_390_3260)">
<rect width="1680" height="118" fill="#009981"/>
<circle opacity="0.1" cx="379" cy="379" r="379" transform="matrix(-1 0 0 1 546.439 -174.5)" fill="white"/>
<circle opacity="0.1" cx="379" cy="379" r="379" transform="matrix(-1 0 0 1 410.439 -174.5)" fill="white"/>
<circle opacity="0.1" cx="379" cy="379" r="379" transform="matrix(-1 0 0 1 285.439 -174.5)" fill="white"/>
<circle opacity="0.1" cx="1389.44" cy="177" r="379" fill="white"/>
<circle opacity="0.1" cx="1526.44" cy="177" r="379" fill="white"/>
<circle opacity="0.1" cx="1697.56" cy="232" r="379" fill="white"/>
</g>
<defs>
<clipPath id="clip0_390_3260">
<rect width="1680" height="118" fill="white"/>
</clipPath>
</defs>
</svg>

)
}
