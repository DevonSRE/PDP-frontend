"use client";
import { ContactForm } from "@/features/home/about-us/components/about-us-contact-us";
import Testimonials from "@/features/home/components/testimonial-section";
import { GetContactSection } from "@/features/home/get-in-touch/components/get-in-touch-hero-section";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(
  () => import("@/features/home/get-in-touch/get-in-map"),
  { ssr: false } // 👈 disables SSR, only renders on client
);



export default function GetInTouch(){
 return <div>
    <GetContactSection/>
    < LeafletMap/>
    <Testimonials/>
    <ContactForm/>
 </div>
}