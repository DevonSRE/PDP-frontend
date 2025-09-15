import React from "react";
import { FAQItem } from "./faq-items";

const faqData = [
  {
    id: 1,
    question: "What kind of training programs does Pivotal offer?",
    answer:
      "We offer a wide range of high-impact training programs, including leadership & management, communication & influence, governance, procurement, and digital transformation. Our programs are tailored to both public and private sector needs.",
  },
  {
    id: 2,
    question: "Who can participate in your training programs?",
    answer:
      "Our programs are designed for executives, professionals, and senior government officials seeking to enhance their skills and institutional effectiveness. We cater to a diverse range of participants from various sectors.",
  },
  {
    id: 3,
    question:
      "Are your trainings tailored to specific countries or institutions?",
    answer:
      "Yes. We believe in co-creating learning experiences that drive results. Our training solutions are custom-built for each client, considering their specific context, strategic goals, and unique challenges. The answer in the provided image is a placeholder and should be replaced with an actual answer.",
  },
  {
    id: 4,
    question: "Do I need to be signed up to be able to Publish?",
    answer:
      "Yes, you need to sign up for a user account to be able to publish content on our platform. This helps us ensure the quality and integrity of the content shared. This is a generic question and answer; please replace it with a relevant one.",
  },
];

export function FAQSection() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-white py-16 md:py-32 px-8 md:px-10">
      <div className="mx-auto max-w-full md:max-w-6xl flex flex-col gap-8 w-full">
        <h2 className="text-center font-semibold text-base md:text-xl">
          Frequently Asked Questions
        </h2>

        <div className="rounded-lg bg-white">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

