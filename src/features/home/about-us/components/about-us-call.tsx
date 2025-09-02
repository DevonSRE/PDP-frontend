import React from 'react';

export function CallToAction () {
  return (
       <section className="relative py-32 bg-[#ffffff] overflow-hidden">
      <div className="absolute inset-0 bg-no-repeat bg-contain bg-center opacity-10" style={{
        backgroundImage: `url("/assets/services_section.svg")`, 
      }}></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10 text-center font-poppins">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Interested in Working With Us?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-8 font-poppins">
          Let’s collaborate to build the capacity of your team and transform institutional outcomes.
        </p>
        
        <button className="flex items-center justify-center mx-auto px-8 py-4 text-white bg-green-900 rounded-lg hover:bg-green-800 transition-colors duration-300 font-poppins">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13v-3a2 2 0 002-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2v3a2 2 0 002 2h3z" />
          </svg>
          Get In Touch
        </button>
      </div>
    </section>
  );
};
