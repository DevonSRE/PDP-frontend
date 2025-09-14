"use client";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { TestimonialCard } from "./testimonial-card";
import { cn } from "@/lib/utils";

const testimonialsData = [
  {
    id: 1,
    name: "Matthew Johnson",
    content:
      "Pivotal's training gave our procurement officers the tools they needed to conduct transparent, efficient processes. The facilitators were deeply knowledgeable and understood our unique institutional context.",
  },
  {
    id: 2,
    name: "Sophia Leo",
    content:
      "The workshop enabled our team to align our communication strategies, enhancing collaboration across departments. The interactive sessions were particularly beneficial for fostering engagement.",
  },
  {
    id: 3,
    name: "James Rodriguez",
    content:
      "Thanks to Pivotal's insights, we revamped our project management approach, resulting in a 20% increase in efficiency. The case studies provided were highly relevant to our industry.",
  },
  {
    id: 4,
    name: "Liam Smith",
    content:
      "Pivotal's methodologies transformed our approach to risk management. The emphasis on practical application allowed us to immediately implement new strategies.",
  },
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 8 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const goToSlide = (index: number) => {
    instanceRef.current?.moveToIdx(index);
  };

  return (
    <section className="h-full bg-[#F5F5F5] py-20 md:py-40 px-7 md:px-10 font-poppins">
      <div className="mx-auto max-w-6xl pb-8 flex flex-col gap-1">
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-2xl font-semibold">
            What People Are Saying <br /> About Pivotal
          </h2>
          <p className="text-sm font-light max-w-3xl">
            Discover what government agencies, professionals, and international
            partners are saying about our programs, delivery quality, and
            long-term institutional results.
          </p>
        </div>

        <div className="flex flex-col gap-12 w-full items-end">
          <div className="flex w-fit gap-1">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300 hover:cursor-pointer",
                  index === currentSlide ? "w-6 bg-black" : "bg-neutral-400",
                )}
              />
            ))}
          </div>

          <div ref={sliderRef} className="keen-slider">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="keen-slider__slide px-2">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
