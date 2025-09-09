import { CallToAction } from "@/features/home/about-us/components/about-us-call";
import { ContactForm } from "@/features/home/about-us/components/about-us-contact-us";
import AboutUsHeroSection from "@/features/home/about-us/components/about-us-hero";
import MeetTheProfessional from "@/features/home/about-us/components/about-us-professional";

export default function AboutUs(){
 return <div className="AboutUs">
    <AboutUsHeroSection/>
    <MeetTheProfessional/>
    <CallToAction/>
    <ContactForm/>
 </div>
}