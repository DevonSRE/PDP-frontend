import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export function ApproachSection (){
  return (
    <section className="relative overflow-hidden bg-brand-green text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="absolute -left-10 w-full max-w-4xl mx-auto">
          {/* Main Image */}
                    <div className="rounded-full h-fit w-fit p-14 bg-white/5 ">

          <div className="rounded-full h-fit w-fit p-14 bg-white/5 ">
              <div className="rounded-full h-fit w-fit p-14 bg-white/5 ">
             <Image
            src="/assets/circular_image.png"
            alt="Training session"
            width={800}
            height={600}
            className="w-full h-auto object-cover z-10 rounded-lg"
          /></div>
          </div>
          </div>
      
        </div>


        {/* Right Content */}
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="bg-green-800 p-6 rounded-xl shadow-md fonts-poppins">
            <h3 className="text-yellow-400 font-semibold text-lg flex items-center gap-2 mb-2 fonts-poppins">
              <CheckCircle className="text-yellow-400 w-5 h-5" />
              Our Approach
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed fonts-poppins">
              Pivotal Development Partners is a trusted training and
              institutional development partner supporting public and private
              sector organizations across Africa and beyond. We take a
              collaborative and problem-solving approach to co-design training
              programs and reform initiatives that are context-specific,
              practical, and impactful.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-green-800 p-6 rounded-xl shadow-md">
            <h3 className="text-yellow-400 font-semibold text-lg flex items-center gap-2 mb-2 fonts-poppins">
              <CheckCircle className="text-yellow-400 w-5 h-5" />
              Why it Matters
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed fonts-poppins">
              At Pivotal, we believe that institutions thrive when people are
              empowered with the right tools, knowledge, and systems. We are
              committed to supporting leadership, accountability, and innovation
              across Africa’s development space through targeted learning and
              reform strategies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-green-800 p-6 rounded-xl shadow-md">
            <h3 className="text-yellow-400 font-semibold text-lg flex items-center gap-2 mb-2">
              <CheckCircle className="text-yellow-400 w-5 h-5 fonts-poppins" />
              How We Work
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed fonts-poppins">
              Our process begins with a strategic needs assessment to understand
              client priorities. We then co-develop tailored training and support
              initiatives that address these gaps. Post-training follow-ups and
              institutional guidance are built into our delivery to ensure
              long-term impact.
            </p>
          </div>
        </div>
         </div>
    </section>
  );
  };