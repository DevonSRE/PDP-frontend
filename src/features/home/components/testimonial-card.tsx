import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageIcon } from "@/components/icon/message-icon";
import { cn } from "@/lib/utils";
import { CircularPatterns } from "@/components/icon/circular-patterns";

interface TestimonialCardProps {
  name: string;
  content: string;
}

export function TestimonialCard({ name, content }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "group transition-all",
        "w-full max-w-sm h-full p-[1.5px] rounded-2xl",
        "hover:cursor-grab active:cursor-grabbing",
        "hover:bg-linear-to-b hover:from-brand-yellow-extradark hover:via-brand-yellow-light hover:to-white",
      )}
    >
      <Card
        className={cn(
          "transition-all group-hover:bg-brand-yellow-light border-none shadow-none gap-2.5",
          "relative overflow-hidden",
        )}
      >
        <CardHeader className="gap-4">
          <CardDescription className="p-px rounded-full w-fit h-fit bg-white">
            <MessageIcon className="h-10 w-10" />
          </CardDescription>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs md:text-sm font-light">{content}</p>
        </CardContent>
        <CircularPatterns className="absolute -top-28 -right-48 w-72 text-brand-yellow-light" />
      </Card>
    </div>
  );
}
