import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { OfficeInfoBg } from "@/components/icon/office-info-bg";

export function GetContactSection() {
  return (
    <section className="w-full px-6 py-58 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-brand-green-text font-poppins">Get In Touch</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto font-poppins">
          Have questions or need tailored training solutions for your institution?
          Our team is here to help. Reach out and let’s explore how we can work
          together to strengthen public systems and build capacity where it
          matters most.
        </p>
      </div>

      {/* Contact Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Side - Info */}
        <div className="bg-teal-900 text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between">
          {/* <OfficeInfoBg className="absolute inset-0 w-full h-full object-cover z-0" /> */}
          <div className="flex-col justify-start">
            <h3 className="text-lg font-semibold mb-4">Office</h3>
            <p className="text-sm leading-relaxed mb-6">
              Mon–Fri 9am to 5pm, Sat 9am to 1pm <br />
              No 2 Jibrin Biyaminu Lane, Beside Mountain of Fire, Kakuri, Kaduna
              (by Kowa Council)
            </p>

            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="mb-6 text-sm">
              +234 806 076 8660 <br /> +234 812 002 4814
            </p>

            <h3 className="text-lg font-semibold mb-2">E-Mail</h3>
            <p className="mb-6 text-sm">
              We’re here to help: <br /> info@creativeskillsimport.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex gap-4 mt-2">
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
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-lg  font-bold text-brand-green-text mb-6">
            Contact Us
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Your Full Name
              </label>
              <input
                type="text"
                placeholder="Benjamin Benjamin J"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-600 focus:outline-none placeholder-black placeholder: text-black "
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Your Email Address
              </label>
              <input
                type="email"
                placeholder="benjamin@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Your Message
              </label>
              <textarea
                placeholder="Input your message here in details"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-600 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
