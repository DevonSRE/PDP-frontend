import { AboutUsHero } from "@/features/home/about-us/components/about-us-hero";
import { MeetTheProfessional } from "@/features/home/about-us/components/meet-the-professional";
import { AboutUsContactSection } from "@/features/home/about-us/components/about-us-contact-section";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <AboutUsHero />
      <MeetTheProfessional />
      <AboutUsContactSection />
    </div>
  );
}
