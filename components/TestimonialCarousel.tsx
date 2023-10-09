import React, { useState, useEffect } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { testmonialCardData } from "@/content";
import TestimonialCard from "./TestimonialCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Props = {};

const renderCarouselItems = testmonialCardData.map((testimonial, index) => {
  return (
    <SwiperSlide
      key={index}
      className="swiper-slide-container md:bg-green-300 lg:bg-red-300 xl:bg-yellow-300 2xl:bg-blue-300 flex justify-center items-center text-center"
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
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth == 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth > 768) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 768) {
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
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      centeredSlides={true}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      // autoplay={{ delay: 5000 }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="bg-pink-300 w-full"
    >
      {renderCarouselItems}
    </Swiper>
  );
};

export default TestimonialCarousel;
