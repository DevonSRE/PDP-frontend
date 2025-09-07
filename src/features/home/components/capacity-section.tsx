import { CheckCircle } from "lucide-react";
import Image from "next/image";

export function CapacitySection() {
  return (
    <div className="bg-[#E8E8E8] font-poppins py-12">
      <section className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-24 grid md:grid-cols-2 gap-12">
        
        {/* What We Do */}
        <div>
          <h3 className="text-yellow-500 font-bold text-lg mb-3">What We Do</h3>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            We specialize in strengthening institutions and individuals through
            practical, context-specific training programs that deliver measurable
            results.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/assets/why.svg"  
              alt="Training session"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Key Focus Area */}
        <div>
          <h3 className="text-green-700 font-bold text-lg mb-4">Key Focus Area</h3>
          <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
            {[
              {
                title: "Customised Training",
                text: "We deliver training that is designed from the ground up, based on a comprehensive assessment of your team’s needs and institutional challenges.",
              },
              {
                title: "Institutional Strengthening",
                text: "We support the development of sustainable internal systems, tools, and processes that enhance performance and public service delivery.",
              },
              {
                title: "Public Procurement & Compliance",
                text: "Our team delivers specialised BPP-certified training aligned with the Public Procurement Act to ensure robust governance and compliance.",
              },
              {
                title: "International Exposure",
                text: "Our study tours and learning exchanges are structured to promote best-practice sharing and innovation from leading institutions globally.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  <strong>{item.title}:</strong> {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
