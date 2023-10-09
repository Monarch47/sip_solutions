import React from "react";
import { testmonialCardData } from "@/content";

type Props = {
  name: string;
  designation: string;
  logo: string;
  review: string;
  index: number;
};

const TestimonialCard = (props: Props) => {
  return (
    <div
      key={props.index}
      className="h-96 md:h-auto lg:h-96 bg-white flex flex-col rounded-3xl p-3 gap-10 items-center text-center shadow-carousel shadow-black"
    >
      <div className="flex gap-4 justify-center">
        <img
          src={props.logo}
          className="w-12 h-12 aspect-square rounded-full"
        />
        <div>
          <h1 className="text-md lg:text-xl text-black font-semibold">
            {props.name}
          </h1>
          <h1 className="text-md text-black">{props.designation}</h1>
        </div>
      </div>
      <h1 className="text-black">{props.review}</h1>
    </div>
  );
};

export default TestimonialCard;
