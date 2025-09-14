"use client";

import React from "react";
import Image from "next/image";
import { TService, TServiceTheme } from "../../lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type TColorType = "btn" | "txt" | "bar";
export function ServiceBox(props: TService) {
  const generateTheme = ({
    theme,
    type,
  }: {
    theme: TServiceTheme;
    type: TColorType;
  }) => {
    switch (theme) {
      case "green":
        switch (type) {
          case "txt":
            return "text-brand-green-extralight";
          case "bar":
          case "btn":
            return "!bg-brand-green-extralight";
        }
      case "yellow":
        switch (type) {
          case "txt":
            return "text-brand-yellow-text";
          case "bar":
          case "btn":
            return "bg-brand-yellow-dark";
        }
      case "blue":
        switch (type) {
          case "txt":
            return "text-brand-blue";
          case "bar":
          case "btn":
            return "bg-brand-blue";
        }
      default:
        switch (type) {
          case "txt":
            return "text-brand-green-text";
          case "bar":
          case "btn":
            return "bg-brand-green-extralight";
        }
    }
  };

  return (
    <div className="flex flex-col md:flex-row rounded-3xl bg-white p-5">
      {/* Image Section */}
      <div className="h-full w-full md:w-1/3 rounded-3xl flex-shrink-0">
        <Image
          src={props.img}
          alt={props.title}
          width={100}
          height={400}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 w-full p-8 flex flex-col gap-4 justify-center">
        <h3
          className={cn(
            "text-xl font-semibold",
            generateTheme({ theme: props.themeColor, type: "txt" }),
          )}
        >
          {props.title}
        </h3>

        <div className="space-y-6">
          {props.offers.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Vertical Divider (stretches to text height) */}
              <div
                className={cn(
                  "w-0.75 self-stretch",
                  generateTheme({ theme: props.themeColor, type: "bar" }),
                )}
              ></div>

              {/* Text Column */}
              <div className="italic text-sm font-light flex flex-col w-full gap-1.5">
                <h4 className="font-bold">{item.title}</h4>
                <p>{item.description}</p>

                {item.bulletPoints && (
                  <div className="w-full">
                    <p>{item.bulletPoints.title}</p>
                    <ul className="list-disc list-inside space-y-1">
                      {item.bulletPoints.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <Button
          className={cn(
            generateTheme({ theme: props.themeColor, type: "btn" }),
            "rounded py-6 text-sm font-light",
          )}
          onClick={props.buttonAction}
        >
          {props.actionText}
        </Button>
      </div>
    </div>
  );
}
