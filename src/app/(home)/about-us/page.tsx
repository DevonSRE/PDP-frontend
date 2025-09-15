import { CallToAction } from "@/features/home/about-us/components/about-us-call";
import { ContactForm } from "@/features/home/about-us/components/about-us-contact-us";
import { AboutUsHero } from "@/features/home/about-us/components/about-us-hero";
import { MeetTheProfessional } from "@/features/home/about-us/components/meet-the-professional";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <AboutUsHero />
      <MeetTheProfessional />
      <CallToAction />
      <ContactForm />
    </div>
  );
}

