import { cn } from "@/lib/utils";

export function CircularPatterns({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="337"
      height="312"
      viewBox="0 0 337 312"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-32 h-auto", className)}
      {...props}
    >
      <circle cx="132" cy="132" r="132" fill="white" />
      <circle cx="158" cy="153" r="132" fill="currentColor" />
      <circle cx="177" cy="153" r="132" fill="white" />
      <circle cx="205" cy="180" r="132" fill="currentColor" />
    </svg>
  );
}
