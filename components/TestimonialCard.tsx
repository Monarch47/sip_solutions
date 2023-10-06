import React from "react";
import { testmonialCardData } from "@/content";

type Props = {};

const renderTestimonialCardData = testmonialCardData.map(
  (testimonial, index) => {
    return (
      <div
        key={index}
        className="h-auto w-2/3 lg:w-1/5 bg-white flex flex-col rounded-3xl p-3 gap-10 items-center text-center shadow-lg shadow-black"
      >
        <div className="flex gap-4 justify-center">
          <img
            src={testimonial.logo}
            className="w-12 h-12 aspect-square rounded-full"
          />
          <div>
            <h1 className="text-md lg:text-xl text-black font-semibold">
              {testimonial.name}
            </h1>
            <h1 className="text-md text-black">{testimonial.designation}</h1>
          </div>
        </div>
        <h1 className="text-black">{testimonial.review}</h1>
      </div>
    );
  }
);

const TestimonialCard = (props: Props) => {
  return <>{renderTestimonialCardData}</>;
};

export default TestimonialCard;
