import React from "react";
import { servicesData } from "@/content";
import Image from "next/image";

type Props = {};

const renderServicesData = servicesData.map((service, index) => {
  return (
    <div
      key={index}
      className="h-auto w-4/5 sm:w-3/4 lg:w-[60%] bg-primary-orange flex rounded-2xl px-2 py-2 gap-10 items-center shadow-lg shadow-black font-manrope text-left"
    >
      <Image
        alt=""
        height={100}
        width={100}
        src={service.image}
        className="aspect-square rounded-2xl"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-black font-bold text-lg lg:text-xl">
          {service.heading}
        </h1>
        <h1 className="font-medium text-sm">{service.text}</h1>
      </div>
    </div>
  );
});

const ServicesCard = (props: Props) => {
  return <>{renderServicesData}</>;
};

export default ServicesCard;
