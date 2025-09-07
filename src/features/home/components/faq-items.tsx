'use client';
import { useState } from 'react';
import { ArrowDownRight, } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="py-4">
      <button
        onClick={toggleOpen}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-lg font-medium text-gray-600 text-poppins">{question}</h3>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-240' : 'rotate-0'
          }`}
        >
          <ArrowDownRight size={24} className="text-gray-600" />
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-4 text-black font-light text-poppins">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;