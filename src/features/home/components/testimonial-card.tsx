import React from 'react';
import Image from 'next/image';


interface TestimonialCardProps {
  name: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, content }) => {
  return (
    <div className="relative flex-shrink-0 p-6 bg-white rounded-3xl shadow-lg">
    {/* <TestimonialCardBg className='absolute top-0 right-0 bg-transparent'/> */}
      <div className="relative z-10">
        <div className="mb-4 text-gray-500">
          <Image src="/assets/message_icons.svg" alt="Message icon" width={32} height={32} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="mt-2 text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
