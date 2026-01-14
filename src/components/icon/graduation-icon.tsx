import { cn } from "@/lib/utils";

export function GraduationIcon({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="26"
      height="22"
      viewBox="0 0 26 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
      {...props}
    >
      <path
        d="M13.1022 21.794L4.98162 17.3857V10.4252L0.341309 7.87306L13.1022 0.912598L25.863 7.87306V17.1537H23.5428V9.14914L21.2227 10.4252V17.3857L13.1022 21.794ZM13.1022 12.1653L21.0487 7.87306L13.1022 3.58077L5.15563 7.87306L13.1022 12.1653ZM13.1022 19.1548L18.9025 16.0226V11.6433L13.1022 14.8335L7.30177 11.6433V16.0226L13.1022 19.1548Z"
        fill="currentColor"
      />
    </svg>
  );
}
