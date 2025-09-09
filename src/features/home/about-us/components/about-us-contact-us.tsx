import React from 'react';

export function ContactForm () {
  return (
    <div className="flex items-center justify-center bg-[#F7F7F7] p-4 font-sans py-48 px-16">
      <div className="w-full max-w-2xl p-16 text-center ">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-black md:text-4xl text-poppins">
          Get In 
          <span className='text-[#E4B800] text-poppins'> Touch</span>
        </h2>
        <p className="text-[15px] text-sm text-black text-poppins font-light">
          Have questions or need tailored training solutions for your institution? Our team is here to help. Reach out and let&apos;s explore how we can work together to strengthen public systems and build capacity where it matters most.
        </p>

        {/* Form */}
        <form className="mt-12 space-y-6">
          {/* Input Fields */}
          <input
            type="text"
            placeholder="Your full name"
            className="w-full rounded-md border-2 bg-white  border-white   py-3 px-4 text-black text-poppins text-[14px] outline-none transition-colors duration-300 focus:border-brand-yellow-dark"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-md border-2  bg-white  border-white  py-3 px-4 text-black text-poppins text-[14px] outline-none transition-colors duration-300 focus:border-brand-yellow-dark"
          />
          <textarea
            placeholder="Your Message"
            rows={1}
            className="w-full resize-none bg-white rounded-md border-2 border-white py-3 px-4 text-black text-poppins text-[14px] outline-none transition-colors duration-300 focus:border-brand-yellow-dark"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-brand-yellow-dark py-3 font-light text-white text-[14px] text-poppins transition-transform duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
