"use client";

import { Input } from "@/components/ui/input";
import React, { useRef, forwardRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import httpClient from "@/server/http-client";
import { ApiResponse, ContactFormData } from "@/lib/types";

export const ContactForm = forwardRef<HTMLDivElement>((_, ref) => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const mutation = useMutation<ApiResponse, AxiosError<ApiResponse>, ContactFormData>({
    mutationFn: async (data: ContactFormData): Promise<ApiResponse> => {
      const response = await httpClient.post<ApiResponse>("/send-mail", data);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.status >= 200 && data.status < 300) {
        toast.success(data.message || "Message sent successfully!");
        formRef.current?.reset();
      } else {
        toast.error(data.message || "Failed to send message");
      }
    },
    onError: (error: AxiosError<ApiResponse>) => {
      toast.error(
        error.response?.data?.message || "Failed to send message"
      );
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value?.trim();
    const email = emailRef.current?.value?.trim();
    const message = messageRef.current?.value?.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    mutation.mutate({ name, email, message });
  };

  return (
    <section ref={ref} className="flex items-center justify-center bg-[#F7F7F7] px-7 md:px-10 h-[90dvh]">
      <div className="w-full max-w-3xl text-center flex flex-col gap-10">
        <div className="w-full max-w-full md:max-w-xl mx-auto flex flex-col gap-4">
          {/* Header */}
          <h2 className="text-xl md:text-2xl font-semibold text-black">
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
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields */}
          <Input
            ref={nameRef}
            type="text"
            placeholder="Your full name"
            className="bg-white w-full border-none focus-visible:ring-1 py-8 px-8 disabled:opacity-50"
            disabled={mutation.isPending}
          />
          <Input
            ref={emailRef}
            type="email"
            placeholder="Your Email"
            className="bg-white w-full border-none focus-visible:ring-1 py-8 px-8 disabled:opacity-50"
            disabled={mutation.isPending}
          />
          <TextareaAutosize
            ref={messageRef}
            placeholder="Your Message"
            minRows={2}
            maxRows={6}
            className="w-full resize-none bg-white rounded-md border-2 border-white py-3 text-black text-poppins text-[14px] outline-none transition-colors duration-300 focus:border-brand-yellow-dark px-8 disabled:opacity-50"
            disabled={mutation.isPending}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-brand-yellow-dark py-4 font-medium text-white text-[14px] text-poppins transition-transform duration-300 hover:scale-105 disabled:opacity-50"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
});

ContactForm.displayName = "ContactForm";
