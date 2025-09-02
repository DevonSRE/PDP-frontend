import { ContactForm } from "@/features/home/about-us/components/about-us-contact-us";
import Testimonials from "@/features/home/components/testimonial-section";
import { GetContactSection } from "@/features/home/get-in-touch/components/get-in-touch-hero-section";

export default function GetInTouch(){
 return <div>
    <GetContactSection/>
    
    <Testimonials/>
    <ContactForm/>
 </div>
}