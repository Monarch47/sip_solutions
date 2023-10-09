"use client";

// import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";
import { aboutSectionParas } from "@/content";
import NavbarNew from "@/components/NavbarNew";
import ChooseUsCard from "@/components/ChooseUsCard";
import ServicesCard from "@/components/ServicesCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  const aboutParas = aboutSectionParas.map((para, index) => {
    return (
      <h1 key={index} className="">
        {para}
      </h1>
    );
  });

  return (
    <main className="min-h-screen">
      <NavbarNew />
      <div className="min-h-screen w-full relative bg-cover" id="home">
        <VideoPlayer source={"video/video2.mp4"} />
        <div className="bg-[rgba(0,0,0,0.7)] absolute top-1/2 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center rounded-md md:rounded-xl text-2xl md:text-3xl font-bold">
          <h1 className="flex gap-2 items-center justify-center">
            <span className="font-bold md:text-6xl">Be</span>
            <span>the</span>
          </h1>
          <h1 className="text-primary-orange font-bold md:text-7xl">
            catalyst
          </h1>
          <h1 className="flex gap-2 items-center justify-center">
            for <span className="md:text-6xl">growth</span> <span>with</span>{" "}
            <span>our</span>
          </h1>
          <h1 className="flex gap-2">
            <span className="md:text-7xl">cloud</span>{" "}
            <span className="md:text-7xl">solutions</span>
          </h1>
        </div>
      </div>
      {/* ABOUT SECTION */}
      <div
        className="min-h-screen relative flex flex-col justify-between items-center"
        id="about"
      >
        <div className="flex flex-col justify-evenly items-center min-h-screen w-full p-8 gap-4 font-manrope font-bold">
          <h1 className="text-4xl md:text-6xl text-primary-teal z-[2] font-bold text-center flex">
            Robnett Technologies, the Future of Biz
          </h1>
          <div className="lg:w-[90vw] lg:h-3/4 z-[2] flex flex-col md:flex-row relative md:gap-6">
            <div className="flex flex-col gap-10 justify-start items-center text-center md:text-left text-black md:w-2/3 xl:w-[60%] lg:text-xl font-manrope font-bold">
              {aboutParas}
            </div>
            <div className="md:flex justify-center items-center hidden xl:px-16">
              <Image
                src="/images/img11.jpg"
                alt=""
                width={450}
                height={450}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>

        <img
          src="/images/about-bg.png"
          alt=""
          className="min-h-screen w-full absolute"
        />
      </div>

      {/* Why Choose Us */}
      <div className="bg-primary-orange flex flex-col p-16 items-center justify-center gap-16">
        <h1 className="text-4xl md:text-6xl font-semibold text-center flex text-shadow-primary shadow-white text-black">
          Why Choose Us
        </h1>
        <div className="w-[90vw] flex flex-col gap-16 items-center ">
          <ChooseUsCard />
        </div>
      </div>

      {/* Services */}
      <div
        className="min-h-screen relative flex flex-col justify-center items-center bg-white py-16 2xl:py-24 gap-10 lg:gap-12 2xl:gap-24"
        id="services"
      >
        <h1 className="text-black text-5xl lg:text-6xl font-semibold text-shadow-primary shadow-primary-orange">
          Services
        </h1>
        <div className="w-[90vw] flex flex-col justify-center items-center gap-6 ">
          <ServicesCard />
        </div>
      </div>
      {/* Testimonials and Contact */}
      <div className="min-h-screen relative flex flex-col items-center">
        <div className="min-h-1/2 bg-primary-orange w-full flex flex-col items-center py-20 gap-6">
          <h1 className="text-4xl lg:text-6xl font-semibold text-center flex text-shadow-primary shadow-white text-black">
            Testimonials
          </h1>
          <div className="w-[90vw] flex flex-col justify-center items-center ">
            <TestimonialCarousel />
          </div>
        </div>
        <div
          className="h-1/2 bg-white w-full flex flex-col justify-center items-center py-44 gap-16 "
          id="contact"
        >
          <h1 className="text-black text-5xl lg:text-6xl font-semibold text-shadow-primary shadow-primary-orange flex flex-col items-center justify-center">
            Contact Us
          </h1>
          <ContactForm />
        </div>
      </div>
      {/* Get started and footer */}
      <div className="relative flex flex-col items-center">
        <div className="min-h-1/2 bg-primary-orange w-full flex flex-col items-center px-10 py-36 lg:py-48 gap-20">
          <h1 className="text-4xl md:text-6xl font-semibold text-center flex text-shadow-primary shadow-white text-black font-manrope">
            Get Started
          </h1>
          <h1 className="2-4/5 lg:w-1/2 text-center text-xl ">
            Eager to Transform Your Business with Robnett Technologies? Sign up
            now and take the first step into the future of cloud technology and
            cutting-edge solutions.
          </h1>
          <button className="px-4 py-2 bg-black text-white rounded-lg text-lg">
            Contact Us
          </button>
        </div>
        <div className="h-1/2 bg-black text-white w-full flex flex-col justify-center items-center p-16 gap-16">
          <Footer />
        </div>
      </div>
    </main>
  );
}
