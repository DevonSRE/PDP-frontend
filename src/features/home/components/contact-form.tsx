import React from "react"
import { ContactCardBg } from "@/components/icon/contact-card-bg"

export function ContactSection() {
  return (
    <section className="relative w-full h-full  overflow-hidden bg-black">

      {/* Background SVG */}
     {/* <ContactCardBg className="absolute -bottom-30 w-full -right-30 "/>
     <ContactCardBg className="absolute -top-30 w-full -left-30 rotate-180"/> */}
      <div>

          {/* Content sits on top */}
      <div className="relative z-10 max-w-2xl mx-auto text-center p-20 px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 font-poppins">
          Get In Touch
        </h2>
        <p className="text-[15px] text-gray-400 font-poppins pt-4">
          Have questions or need tailored training solutions for your institution? 
          Our team is here to help. Reach out and let&apos;s explore how we can work together 
          to strengthen public systems and build capacity where it matters most.
        </p>

        {/* Form */}
        <form className="mt-8 space-y-6">
          <input
            type="text"
            placeholder="Your full name"
            className="w-full rounded-md border-2 border-gray-700 bg-transparent py-3 px-4 text-gray-200 text-[14px] font-poppins outline-none transition-colors duration-300 focus:border-yellow-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-md border-2 border-gray-700 bg-transparent py-3 px-4 text-gray-200 text-[14px] font-poppins outline-none transition-colors duration-300 focus:border-yellow-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full resize-none rounded-md border-2 border-gray-700 bg-transparent py-3 px-4 text-gray-200 text-[14px] font-poppins outline-none transition-colors duration-300 focus:border-yellow-500"
          ></textarea>

          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 py-3 font-semibold text-black font-poppins transition-transform duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    
    </section>
  )
}

export default ContactSection
