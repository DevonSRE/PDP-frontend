"use client";

import React, { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import TextareaAutosize from "react-textarea-autosize";
import httpClient from "@/server/http-client";
import { ApiResponse, ContactFormData } from "@/lib/types";

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
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="font-poppins flex flex-col max-w-full md:max-w-3xl w-full mx-auto gap-4"
    >
      <Input
        ref={nameRef}
        type="text"
        placeholder="Your full name"
        className="h-12 !py-7 !px-4 placeholder:text-white w-full"
        disabled={mutation.isPending}
      />
      <Input
        ref={emailRef}
        type="email"
        placeholder="Your Email"
        className="h-12 !py-7 !px-4 placeholder:text-white w-full"
        disabled={mutation.isPending}
      />
      <TextareaAutosize
        ref={messageRef}
        className="p-2 text-sm placeholder:text-white w-full rounded-lg border border-input disabled:opacity-50"
        placeholder="Your Message"
        minRows={3}
        disabled={mutation.isPending}
      />

      <Button
        type="submit"
        className="bg-brand-yellow-dark h-14 text-black disabled:opacity-50"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
