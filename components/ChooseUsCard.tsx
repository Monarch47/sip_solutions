import React from "react";
import { chooseUsData } from "@/content";
type Props = {};

const renderChooseUseData = chooseUsData.map((data, index) => {
  return (
    <div
      className={`border-2 border-white lg:border-none p-2 rounded-2xl flex flex-col-reverse md:flex ${
        index % 2 == 0 ? `md:flex-row` : `md:flex-row-reverse`
      } justify-center items-center gap-6 lg:gap-10 text-black md:h-auto`}
      key={index}
    >
      <div className="flex flex-col lg:w-1/3 gap-10 md:h-auto">
        <h1 className="text-xl lg:text-4xl font-bold text-center line-clamp-3">
          {data.heading}
        </h1>
        <p className="text-center text-base md:h-auto lg:text-xl text-white  line-clamp-4">
          {data.text}
        </p>
      </div>
      <img
        src={data.image}
        alt=""
        className="block md:hidden lg:block w-4/5 lg:w-1/5 aspect-square rounded-xl shadow-2xl shadow-primary-white"
      />
    </div>
  );
});

const ChooseUsCard = (props: Props) => {
  return <>{renderChooseUseData}</>;
};

export default ChooseUsCard;
