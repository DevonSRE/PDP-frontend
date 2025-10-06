import React from "react";
import Image from "next/image";

export function AboutUsHero() {
  return (
    <section className="relative h-dvh w-full bg-white px-7 md:px-10 flex justify-center items-center">
      <>
        <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_right,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_30%_at_50%_80%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_right,#f0f0f0_1px,transparent_1px)] bg-[size:7rem] [mask-image:radial-gradient(ellipse_80%_30%_at_50%_80%,#000_70%,transparent_110%)]"></div>
      </>

      <div className="flex flex-col gap-10 z-10 mx-auto px-4 text-center">
        {/* Image Grid */}
        <div className="flex justify-center">
          <div className="flex">
            {collages.map((item, index) => (
              <div
                key={item.id}
                className={`w-28 md:w-80 h-28 md:h-80 rounded-full border-4 border-white shadow-lg overflow-hidden 
                ${index !== 0 ? "-ml-16" : ""}`} // overlap except first
              >
                <Image
                  src={item.image}
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
        <div className="flex flex-col w-full text-center gap-4">
          {/* Heading */}
          <h1 className="text-xl md:text-2xl font-bold text-brand-green-text">
            <span>Empowering Institutions,</span>{" "}
            <span className="text-brand-yellow-dark">Advancing Africa.</span>
          </h1>

          {/* Description */}
          <p className="text-xs md:text-sm text-gray-600 max-w-full md:max-w-5xl mx-auto leading-relaxed">
            We provide transparent bespoke solutions for building strong
            institutions, strengthening society and the economy through advisory
            services, training and capacity building programs. In the
            ever-complex economic and social systems, the ability to understand,
            navigate, and shape the environment is key. Our deep industry
            expertise, extensive experience, and vast network, position us as a
            trusted partner for our clients in delivering sustainable impact and
            value. We are committed to achieving high-impact outcomes for
            clients while creating an environment that sparks curiosity,
            innovation and provides the tools necessary to make a lasting
            impact.
          </p>
        </div>
      </div>
    </section>
  );
}

const collages = [
  { id: 1, image: "/assets/c1.svg" },
  { id: 2, image: "/assets/c2.svg" },
  { id: 3, image: "/assets/c3.svg" },
  { id: 4, image: "/assets/c4.svg" },
  { id: 5, image: "/assets/c5.svg" },
];
