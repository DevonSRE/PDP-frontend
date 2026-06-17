"use client";

import { useRef } from "react";
import { OurServicesIntro } from "./services_intro";
import { OurServicesSection } from "./services_section";
import { PivotalSection } from "@/features/home/components/pivotal-section";
import { ContactForm } from "@/features/home/about-us/components/about-us-contact-us";

export function ServicesPageWrapper() {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const handleGetInformedClick = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRequestConsultancyClick = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadGuideClick = () => {
    window.open(
      "https://drive.google.com/file/d/1lmAIxySrKY9siYfOgORM-58Z9xDTHYtd/view",
      "_blank"
    );
  };

  return (
    <div>
      <OurServicesIntro />
      <OurServicesSection
        onGetInformed={handleGetInformedClick}
        onRequestConsultancy={handleRequestConsultancyClick}
        onDownloadGuide={handleDownloadGuideClick}
      />
      <PivotalSection />
      <ContactForm ref={contactFormRef} />
    </div>
  );
}
