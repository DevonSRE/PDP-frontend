import React from 'react';
import FAQItem from './faq-items';

const faqData = [
  {
    question: 'What kind of training programs does Pivotal offer?',
    answer: 'We offer a wide range of high-impact training programs, including leadership & management, communication & influence, governance, procurement, and digital transformation. Our programs are tailored to both public and private sector needs.',
  },
  {
    question: 'Who can participate in your training programs?',
    answer: 'Our programs are designed for executives, professionals, and senior government officials seeking to enhance their skills and institutional effectiveness. We cater to a diverse range of participants from various sectors.',
  },
  {
    question: 'Are your trainings tailored to specific countries or institutions?',
    answer: 'Yes. We believe in co-creating learning experiences that drive results. Our training solutions are custom-built for each client, considering their specific context, strategic goals, and unique challenges. The answer in the provided image is a placeholder and should be replaced with an actual answer.',
  },
  {
    question: 'Do I need to be signed up to be able to Publish?',
    answer: 'Yes, you need to sign up for a user account to be able to publish content on our platform. This helps us ensure the quality and integrity of the content shared. This is a generic question and answer; please replace it with a relevant one.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white py-16 px-16 font-poppins">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-semi-bold text-[22.07px] text-black md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;