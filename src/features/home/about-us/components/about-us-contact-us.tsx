import React from 'react';

export function ContactForm () {
  return (
    <div className="flex items-center justify-center bg-[#F7F7F7] p-4 font-sans py-48 px-16">
      <div className="w-full max-w-2xl rounded-lg bg-[#ffffff] p-8 text-center shadow-2xl">
        {/* Header */}
        <h2 className="text-[26px] font-bold text-yellow-500 md:text-4xl text-poppins">
          Get In Touch
        </h2>
        <p className="text-[15px] text-sm text-black text-poppins pt-4">
          Have questions or need tailored training solutions for your institution? Our team is here to help. Reach out and let's explore how we can work together to strengthen public systems and build capacity where it matters most.
        </p>

        {/* Form */}
        <form className="mt-8 space-y-6">
          {/* Input Fields */}
          <input
            type="text"
            placeholder="Your full name"
            className="w-full rounded-md border-2 border-gray-700 bg-transparent py-3 px-4 text-black text-poppins text-[14px] outline-none transition-colors duration-300 focus:border-yellow-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-md border-2 border-gray-700 bg-transparent py-3 px-4 text-black text-poppins text-[14px] outline-none transition-colors duration-300 focus:border-yellow-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full resize-none rounded-md border-2 border-gray-700 bg-transparent py-3 px-4 text-black text-poppins text-[14px] outline-none transition-colors duration-300 focus:border-yellow-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 py-3 font-semibold text-white  text-poppins transition-transform duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
