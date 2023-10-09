import React, { useState, useEffect } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { testmonialCardData } from "@/content";
import TestimonialCard from "./TestimonialCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type Props = {};

const renderCarouselItems = testmonialCardData.map((testimonial, index) => {
  return (
    <SwiperSlide
      key={index}
      className="w-4/5 flex items-center text-center box-border"
    >
      <TestimonialCard
        name={testimonial.name}
        designation={testimonial.designation}
        logo={testimonial.logo}
        review={testimonial.review}
        index={index}
      />
    </SwiperSlide>
  );
});

const TestimonialCarousel = (props: Props) => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };

    // Initial calculation on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Scrollbar, Autoplay]}
      spaceBetween={30}
      slidesPerView={slidesPerView}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      className="w-2/3 h-auto flex items-center text-center box-border justify-center py-4"
    >
      {renderCarouselItems}
    </Swiper>
  );
};

export default TestimonialCarousel;
