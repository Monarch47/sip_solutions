"use client";

// import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";
import { aboutSectionParas } from "@/content";
import NavbarNew from "@/components/NavbarNew";
import ChooseUsCard from "@/components/ChooseUsCard";
import ServicesCard from "@/components/ServicesCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

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
      <div className="h-full 2-full relative">
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
      <div className="min-h-screen relative flex flex-col justify-between items-center">
        <div className="flex flex-col justify-evenly items-center min-h-screen w-full p-10 gap-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary-teal z-[2] font-semibold text-center flex">
            Robnett Technologies, the Future of Biz
          </h1>
          <div className="lg:w-[90vw] lg:h-3/4 z-[2] grid lg:grid-cols-2 relative ">
            <div className="flex flex-col gap-10 justify-center items-center text-center text-black font-medium text-xl sm:2xl lg:xl xl:text-2xl">
              {aboutParas}
            </div>
            <div className="lg:flex justify-center items-center hidden">
              <img
                src="/images/img11.jpg"
                alt=""
                className="lg:h-[30rem] rounded-xl"
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
      <div className="bg-primary-orange flex flex-col p-10 items-center justify-center gap-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center flex text-shadow-primary shadow-white text-black">
          Why Choose Us
        </h1>
        <div className="w-[90vw] grid grid-cols-2 lg:grid-cols-1 gap-4 items-center justify-evenly">
          <ChooseUsCard />
        </div>
      </div>
      <div className="min-h-screen relative flex flex-col justify-between items-center bg-white p-10 gap-8">
        <h1 className="text-black text-5xl lg:text-6xl font-semibold text-shadow-primary shadow-primary-orange">
          Services
        </h1>
        <div className="w-[90vw] flex flex-col justify-center items-center gap-6">
          <ServicesCard />
        </div>
      </div>
      {/* Testimonials and Contact */}
      <div className="min-h-screen relative flex flex-col items-center">
        <div className="min-h-1/2 bg-primary-orange w-full flex flex-col items-center p-16 gap-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center flex text-shadow-primary shadow-white text-black">
            Testimonials
          </h1>
          <div className="w-[90vw] flex flex-col lg:flex-row gap-8 justify-center items-center">
            <TestimonialCard />
          </div>
        </div>
        <div className="h-1/2 bg-white w-full flex flex-col justify-center items-center p-16 gap-16">
          <h1 className="text-black text-5xl lg:text-6xl font-semibold text-shadow-primary shadow-primary-orange">
            Contact Us
          </h1>
          <ContactForm />
        </div>
      </div>
      {/* Get started and footer */}
      <div className="relative flex flex-col items-center">
        <div className="min-h-1/2 bg-primary-orange w-full flex flex-col items-center p-16 gap-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center flex text-shadow-primary shadow-white text-black">
            Get Started
          </h1>
          <h1 className="2-4/5 lg:w-1/2 text-center text-xl">
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
