import React from "react";
import { chooseUsData } from "@/content";
import Image from "next/image";

type Props = {};

const renderChooseUseData = chooseUsData.map((data, index) => {
  return (
    <div
      className={`lg:border-none p-2 lg:w-full xl:w-3/4 2xl:w-2/3 rounded-2xl flex flex-col-reverse md:flex ${
        index % 2 == 0
          ? `md:flex-row lg:gap-0 lg:px-20`
          : `md:flex-row-reverse lg:gap-28 lg:px-16`
      } justify-evenly items-center gap-6  text-black md:h-auto font-jua`}
      key={index}
    >
      <div className="flex flex-col gap-6 lg:gap-10 md:h-auto">
        <h1 className="text-3xl text-center lg:text-left md:text-4xl font-medium line-clamp-3 lg:w-4/5">
          {data.heading}
        </h1>
        <p className="md:h-auto text-center lg:text-left text-lg md:text-xl font-manrope text-white line-clamp-4 font-medium lg:w-4/5">
          {data.text}
        </p>
      </div>
      <Image
        height={420}
        width={420}
        src={data.image}
        alt=""
        className="block md:hidden lg:block aspect-square rounded-4xl shadow-2xl shadow-primary-white"
      />
    </div>
  );
});

const ChooseUsCard = (props: Props) => {
  return <>{renderChooseUseData}</>;
};

export default ChooseUsCard;
