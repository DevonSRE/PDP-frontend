import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { ContactRightBg } from "@/components/icon/contact-right-bg";
import { Button } from "@/components/ui/button";

export function GetContactSection() {
  return (
    <section className="w-full px-7 md:px-10 py-32 md:py-58 bg-neutral-50">
      {/* Heading */}
      <div className="text-center mb-16 md:mb-32">
        <h2 className="text-lg md:text-2xl font-bold text-brand-green-text">
          Get In Touch
        </h2>
        <p className="mt-0 md:mt-2 w-full max-w-full md:max-w-2xl mx-auto text-xs md:text-sm font-light">
          Have questions or need tailored training solutions for your
          institution? Our team is here to help. Reach out and let’s explore how
          we can work together to strengthen public systems and build capacity
          where it matters most.
        </p>
      </div>

      {/* Contact Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-full md:max-w-6xl w-full mx-auto bg-white p-4 md:p-8 rounded-3xl">
        {/* Left Side - Info */}
        <div className="relative bg-brand-green-light text-white rounded-2xl p-4 md:p-8 shadow-lg flex flex-col justify-between overflow-hidden">
          <ContactRightBg className="absolute -top-30 -left-30 rotate-180 z-0" />
          <ContactRightBg className="absolute bottom-0 right-0 z-0" />
          <div className="flex-col justify-start z-10">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">
              Office
            </h3>
            <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-6">
              Mon–Fri 9am to 5pm, Sat 9am to 1pm <br />
              No 2 Jibrin Biyaminu Lane, Beside Mountain of Fire, Kakuri, Kaduna
              (by Kowa Council)
            </p>

            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
              Phone
            </h3>
            <p className="mb-3 md:mb-6 text-xs md:text-sm">
              +234 806 076 8660 <br /> +234 812 002 4814
            </p>

            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
              E-Mail
            </h3>
            <p className="mb-3 md:mb-6 text-xs md:text-sm">
              We’re here to help: <br /> info@creativeskillsimport.com
            </p>
          </div>

          <div className="z-10">
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
              Connect With Us
            </h3>
            <div className="flex gap-2 md:gap-4 mt-2">
              <a href="#" className="hover:text-teal-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-teal-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-teal-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-teal-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-0 md:p-8">
          <h3 className="text-base md:text-lg font-bold text-brand-green-text">
            Contact Us
          </h3>
          <h1 className="text-xs md:text-sm text-justify md:text-start font-light mb-6 md:mb-12">
            Have questions or need tailored training solutions for your
            institution? Our team is here to help. Reach out and let’s explore
            how we can work together to strengthen public systems and build
            capacity where it matters most.
          </h1>

          <form className="space-y-3 md:space-y-6 border-y border-dashed py-6">
            <div>
              <label className="block text-xs md:text-sm font-light mb-2">
                Your Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border-b-2 border-black/20 px-4 py-2 focus-visible:border-brand-green-extralight focus-visible:outline-none font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-light text-black mb-2">
                Your Email Address
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full border-b-2 border-black/20 px-4 py-2 focus-visible:border-brand-green-extralight focus-visible:outline-none font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-light text-black mb-2">
                Your Message
              </label>
              <input
                placeholder="Enter your message here..."
                type="details"
                className="w-full border-b-2 border-black/20 px-4 py-2 focus-visible:border-brand-green-extralight focus-visible:outline-none font-semibold"
              />
            </div>

            <Button
              type="submit"
              className="w-full md:w-fit bg-brand-green-light text-white py-2 px-10 rounded-lg hover:bg-brand-green transition"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
