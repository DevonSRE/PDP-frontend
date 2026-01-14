import { ApproachSection } from "@/features/home/components/approach-section";
import { ContactSection } from "@/features/home/components/contact-form";
import { FAQSection } from "@/features/home/components/faq-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { PivotalSection } from "@/features/home/components/pivotal-section";
import { Stats } from "@/features/home/components/stats";
import { Testimonials } from "@/features/home/components/testimonials";
import { TrainingCategories } from "@/features/home/components/training-categories";

export default function Home() {
  return (
    <div className="HomePage w-full ">
      <HeroSection />
      <Stats />
      <ApproachSection />
      <PivotalSection />
      <TrainingCategories />
      <Testimonials />
      <ContactSection />
      <FAQSection />
    </div>
  );
}
