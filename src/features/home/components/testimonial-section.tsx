'use client';
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import TestimonialCard from './testimonial-card';

const testimonialsData = [
  {
    name: 'Matthew Johnson',
    content: "Pivotal's training gave our procurement officers the tools they needed to conduct transparent, efficient processes. The facilitators were deeply knowledgeable and understood our unique institutional context.",
  },
  {
    name: 'Sophia Leo',
    content: 'The workshop enabled our team to align our communication strategies, enhancing collaboration across departments. The interactive sessions were particularly beneficial for fostering engagement.',
  },
  {
    name: 'James Rodriguez',
    content: "Thanks to Pivotal's insights, we revamped our project management approach, resulting in a 20% increase in efficiency. The case studies provided were highly relevant to our industry.",
  },
  {
    name: 'Liam Smith',
    content: "Pivotal's methodologies transformed our approach to risk management. The emphasis on practical application allowed us to immediately implement new strategies.",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(max-width: 768px)': {
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
    <div className="h-full bg-[#F5F5F5] py-16 px-4 font-poppins">
      <div className="mx-auto max-w-6xl pb-8 ">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-[26px] font-bold text-black">
              What People Are Saying <br /> About Pivotal
            </h2>
            <p className="mt-4 text-[14px] text-gray-500 max-w-lg">
              Discover what government agencies, professionals, and international partners are saying about our programs, delivery quality, and long-term institutional results.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-6 bg-black' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="keen-slider__slide px-2">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;