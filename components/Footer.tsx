// components/Footer.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col gap-4 ">
      <div className="container w-[90vw] flex flex-col gap-16 lg:gap-20 mx-auto lg:flex-row lg:justify-center lg:items-baseline items-center h-1/2">
        {/* Column 1: Navigation */}
        <div className="lg:w-1/4 text-center flex flex-col gap-8">
          <h3 className="text-3xl lg:text-4xl font-semibold">Navigation</h3>
          <ul className="footer-nav flex lg:flex-col gap-4 lg:gap-2 font-manrope text-lg">
            <Link href={"#home"}>Home</Link>
            <Link href={"#services"}>Services</Link>
            <Link href={"#about"}>About</Link>
            <Link href={"#contact"}>Contact</Link>
          </ul>
        </div>

        {/* Column 2: Contact us */}
        <div className="lg:w-1/4 text-center flex flex-col gap-6 lg:gap-8">
          <h3 className="text-3xl lg:text-4xl font-semibold">Contact us</h3>
          <div className="flex flex-col gap-1 font-manrope footer-contact text-lg">
            <p>Email: your@email.com</p>
            <p>Phone: +123456789</p>
          </div>
        </div>

        {/* Column 3: Follow us */}
        <div className="lg:w-1/4 text-center justify-center flex flex-col gap-6 lg:gap-8">
          <h3 className="text-3xl lg:text-4xl font-semibold">Follow us</h3>
          <div className="flex lg:flex-col justify-center items-center text-center gap-2 font-manrope footer-follow text-lg">
            <Link href="#">
              <Image
                src={"/images/logos/facebook.svg"}
                alt="Facebook"
                height={10}
                width={10}
                className="w-6 h-6"
              />
            </Link>
            <Link href="#">
              <Image
                src={"/images/logos/twitter.svg"}
                alt="Twitter"
                height={10}
                width={10}
                className="w-6 h-6"
              />
            </Link>
            <Link href="#">
              <Image
                src={"/images/logos/linkedin.svg"}
                alt="Instagram"
                height={10}
                width={10}
                className="w-6 h-6"
              />
            </Link>
            <Link href="#">
              <Image
                src={"/images/logos/instagram.svg"}
                alt="LinkedIn"
                height={10}
                width={10}
                className="w-6 h-6"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal white line */}
      <hr className="my-6 border-white border-opacity-25" />

      {/* Copyright */}
      <div className="text-center">
        <p>&copy; 2023 Robnett Technologies. All rights reserved.</p>
        <p>Made by Mayank Kumar</p>
      </div>
    </footer>
  );
};

export default Footer;
