"use client";
import { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { AnimatePresence, motion as m, Variants } from "motion/react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const containerVariants: Variants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: "easeOut" },
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: "easeIn" },
        opacity: { duration: 0.2 },
      },
    },
  };

  const contentVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 0.1 },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  const iconVariants: Variants = {
    open: {
      rotate: 270,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    closed: {
      rotate: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <m.div
      className="hover:cursor-pointer py-6 border-b border-input flex flex-col gap-4 w-full"
      onClick={toggleOpen}
    >
      <m.button className="flex w-full items-center hover:cursor-pointer justify-between text-start text-gray-500">
        <h3 className="text-sm md:text-base font-medium pr-4">{question}</h3>
        <m.span
          variants={iconVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="flex-shrink-0"
        >
          <ArrowDownRight size={20} />
        </m.span>
      </m.button>

      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <m.div
            variants={containerVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            className="overflow-hidden"
          >
            <m.div
              variants={contentVariants}
              className="py-6 px-5 rounded bg-neutral-50"
            >
              <p className="font-light text-xs md:text-sm text-neutral-500 leading-relaxed">
                {answer}
              </p>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}

