"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

export function ContactForm() {
  async function submitForm(formdata: FormData) {
    console.log({ formdata });
  }
  return (
    <section className="flex items-center justify-center bg-[#F7F7F7] px-7 md:px-10 h-[90dvh]">
      <div className="w-full max-w-3xl text-center flex flex-col gap-10">
        <div className="w-full max-w-full md:max-w-xl mx-auto flex flex-col gap-4">
          {/* Header */}
          <h2 className="text-lg md:text-2xl font-semibold text-black">
            Get In
            <span className="text-[#E4B800] text-poppins"> Touch</span>
          </h2>
          <p className="text-[15px] text-sm text-black text-poppins font-light">
            Have questions or need tailored training solutions for your
            institution? Our team is here to help. Reach out and let&apos;s
            explore how we can work together to strengthen public systems and
            build capacity where it matters most.
          </p>
        </div>

        {/* Form */}
        <form action={submitForm} className="space-y-6">
          {/* Input Fields */}
          <Input
            type="text"
            placeholder="Your full name"
            className="bg-white w-full border-none focus-visible:ring-1 py-8 px-8"
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="bg-white w-full border-none focus-visible:ring-1 py-8 px-8"
          />
          <TextareaAutosize
            placeholder="Your Message"
            minRows={2}
            maxRows={6}
            className="w-full resize-none bg-white rounded-md border-2 border-white py-3 text-black text-poppins text-[14px] outline-none transition-colors duration-300 focus:border-brand-yellow-dark px-8"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-brand-yellow-dark py-4 font-medium text-white text-[14px] text-poppins transition-transform duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
