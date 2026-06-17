"use client";

import { useRef } from "react";
import { CallToAction } from "./about-us-call";
import { ContactForm } from "./about-us-contact-us";

export function AboutUsContactSection() {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const handleGetInTouchClick = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CallToAction onGetInTouchClick={handleGetInTouchClick} />
      <ContactForm ref={contactFormRef} />
    </>
  );
}
