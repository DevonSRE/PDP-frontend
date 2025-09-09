import { ContactForm } from "@/features/home/about-us/components/about-us-contact-us";
import PivotalSection from "@/features/home/components/pivotal-section";
import { OurServicesIntro } from "@/features/home/services/components/services_intro";
import OurServicesSection from "@/features/home/services/components/services_section";

export default function Services(){
    return <div>
        <OurServicesIntro/>
        <OurServicesSection/>
        <PivotalSection/>
        <ContactForm/>
    </div>
}