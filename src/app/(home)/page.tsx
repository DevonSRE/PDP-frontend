import { ApproachSection } from "@/features/home/components/approach-section";
import { CapacitySection } from "@/features/home/components/capacity-section";
import ContactForm from "@/features/home/components/contact-form";
import FAQSection from "@/features/home/components/faq-section";
import {HeroSection} from "@/features/home/components/hero-section";
import { HomePageStat } from "@/features/home/components/homepage-status";
import PivotalSection from "@/features/home/components/pivotal-section";
import Testimonials from "@/features/home/components/testimonial-section";
import TrainingCategories from "@/features/home/components/training-categories";
import Image from "next/image";

export default function Home() {
    return (
    <div className="HomePage">
    <HeroSection/>
    <HomePageStat/>
    <CapacitySection/>
    <ApproachSection/>
    <PivotalSection/>
    <TrainingCategories/>
    <Testimonials/>
    <ContactForm/>
    <FAQSection/>
    </div>
  );
}
