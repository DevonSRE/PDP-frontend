import React from "react";
import Image from "next/image";


const AboutUsHeroSection = () => {
  return (
    <section className="bg-white py-32 px-4">
      <div className="container mx-auto mb-8 px-4 text-center">
        {/* Image Grid */}
        <div className="flex justify-center mb-10">
          <div className="flex">
            {["/assets/c1.svg", "/assets/c2.svg", "/assets/c3.svg", "/assets/c4.svg", "/assets/c5.svg"].map((images, index) => (
              <div
                key={index}
                className={`w-120 h-120 rounded-full border-4 border-white shadow-lg overflow-hidden 
                ${index !== 0 ? "-ml-16" : ""}`} // overlap except first
              >
                <Image
                  src={images}
                  alt={`collage-${index}`}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* End Image Grid */}

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#005144] mb-6 font-poppins">
          Empowering Institutions,{" "}
          <span className="text-[#E4B800]">Advancing Africa.</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-poppins pt-4">
          We provide transparent bespoke solutions for building strong
          institutions, strengthening society and the economy through advisory
          services, training and capacity building programs. In the ever-complex
          economic and social systems, the ability to understand, navigate, and
          shape the environment is key. Our deep industry expertise, extensive
          experience, and vast network, position us as a trusted partner for our
          clients in delivering sustainable impact and value. We are committed
          to achieving high-impact outcomes for clients while creating an
          environment that sparks curiosity, innovation and provides the tools
          necessary to make a lasting impact.
        </p>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
