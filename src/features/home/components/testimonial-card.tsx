import React from 'react';
// Import the SVG file. The bundler will treat this as a URL.
import Image from 'next/image';


interface TestimonialCardProps {
  name: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, content }) => {
  return (
    <div className="relative flex-shrink-0 p-6 bg-white rounded-3xl shadow-lg
                    before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-1/3 
                    before:bg-gray-100 before:rounded-l-[50%] before:rounded-r-3xl before:z-0">
      <div className="relative z-10">
        <div className="mb-4 text-gray-500">
          <Image src="/assets/message_icons.svg" alt="Message icon" width={16} height={16} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="mt-2 text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;