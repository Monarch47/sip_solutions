import React from "react";
import { servicesData } from "@/content";

type Props = {};

const renderServicesData = servicesData.map((service, index) => {
  return (
    <div
      key={index}
      className="h-auto w-2/3 bg-primary-orange flex flex-col lg:flex-row rounded-3xl p-3 gap-10 items-center text-center lg:hover:scale-50 ease-in-out shadow-lg shadow-black"
    >
      <img src={service.image} className="lg:h-28 aspect-square rounded-3xl" />
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl lg:text-3xl text-black font-medium">
          {service.heading}
        </h1>
        <h1 className="text-lg lg:text-xl">{service.text}</h1>
      </div>
    </div>
  );
});

const ServicesCard = (props: Props) => {
  return <>{renderServicesData}</>;
};

export default ServicesCard;
