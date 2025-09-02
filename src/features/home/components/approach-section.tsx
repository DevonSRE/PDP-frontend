import React from "react";
import { CheckCircle } from "lucide-react";

export function ApproachSection (){
  return (
    <section className="bg-green-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-80 h-80 bg-green-700 rounded-full opacity-30 blur-2xl"></div>
          <img
            src="/assets/approach_section.svg"
            alt="Training session"
        
          />
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="bg-green-800 p-6 rounded-xl shadow-md">
            <h3 className="text-yellow-400 font-semibold text-lg flex items-center gap-2 mb-2">
              <CheckCircle className="text-yellow-400 w-5 h-5" />
              Our Approach
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
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
            <h3 className="text-yellow-400 font-semibold text-lg flex items-center gap-2 mb-2">
              <CheckCircle className="text-yellow-400 w-5 h-5" />
              Why it Matters
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
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
              <CheckCircle className="text-yellow-400 w-5 h-5" />
              How We Work
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
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

