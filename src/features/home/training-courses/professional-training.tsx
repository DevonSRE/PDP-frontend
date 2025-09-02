import React from 'react';

const ProfessionalTrainingHeader = () => {
  return (
    <div className="relative bg-white py-48 overflow-hidden">
      {/* Background shape */}
      <div className="absolute inset-0 bg-white opacity-20 transform -skew-y-3 -translate-y-1/2"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://via.placeholder.com/1600x900?text=Training+Session"
          alt="Training Session"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-black">
            2025 Professional{" "}
            <span className="text-green-300 font-poppins">Training Programs</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-black font-poppins">
            Advance your career with our cutting-edge courses in leadership, governance,
            procurement, and strategic development.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#064C3C] text-white py-3 px-8 rounded-lg font-poppins hover:bg-teal-700 transition-colors duration-300 font-semibold shadow-lg">
              Book Training Now
            </button>
            <button className="bg-white border-2 font-poppins border-[#064C3C] text-[#064C3C] py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 font-semibold">
              <span className="mr-2">📅</span> View 2025 Course Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTrainingHeader;
