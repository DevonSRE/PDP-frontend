"use client";
import { ContactForm } from "@/features/home/about-us/components/about-us-contact-us";
import Testimonials from "@/features/home/components/testimonial-section";
import { GetContactSection } from "@/features/home/get-in-touch/components/get-in-touch-hero-section";
import GoogleMap from "@/features/home/get-in-touch/components/google-map";



export default function GetInTouch(){
 return <div>
    <GetContactSection/>
     <GoogleMap />
    <Testimonials/>
    <ContactForm/>
 </div>
}