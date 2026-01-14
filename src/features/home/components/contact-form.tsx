"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import TextareaAutosize from "react-textarea-autosize";

export function ContactSection() {
  return (
    <section
      className={cn(
        "px-7",
        "relative w-full h-dvh bg-black",
        "flex items-center justify-center",
        "relative overflow-hidden text-white",
      )}
    >
      {/* Background SVG */}
      {/*
        <ContactCardBg className="absolute -bottom-30 w-full -right-30 "/>
        <ContactCardBg className="absolute -top-30 w-full -left-30 rotate-180"/>
      */}
      <div className="flex flex-col items-center gap-8 min-w-full w-full">
        {/* Content sits on top */}
        <div className="relative z-10 max-w-full md:max-w-4xl mx-auto text-center flex flex-col items-center w-full gap-4">
          {/* Heading */}
          <h2 className="text-lg md:text-2xl font-semibold text-brand-yellow-dark">
            Get In Touch
          </h2>
          <p className="text-sm md:text-base w-full max-w-2xl">
            Have questions or need tailored training solutions for your
            institution? Our team is here to help. Reach out and let&apos;s
            explore how we can work together to strengthen public systems and
            build capacity where it matters most.
          </p>
        </div>
        {/* Form */}
        <ContactForm />
      </div>
    </section>
  );
}

export function ContactForm() {
  return (
    <form
      action=""
      className="font-poppins flex flex-col max-w-full md:max-w-3xl w-full mx-auto gap-4"
    >
      <Input
        type="text"
        placeholder="Your full name"
        className="h-12 !py-7 !px-4 placeholder:text-white w-full"
      />
      <Input
        type="email"
        placeholder="Your Email"
        className="h-12 !py-7 !px-4 placeholder:text-white w-full"
      />
      <TextareaAutosize
        className="p-2 text-sm placeholder:text-white w-full rounded-lg border border-input"
        placeholder="Your Message"
        minRows={3}
      />

      <Button type="submit" className="bg-brand-yellow-dark h-14 text-black">
        Send Message
      </Button>
    </form>
  );
}
