// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col gap-4">
      <div className="container w-[90vw] flex flex-col gap-16 mx-auto lg:flex lg:justify-center text-center items-center h-1/2">
        {/* Column 1: Navigation */}
        <div className="lg:w-1/4 text-center h-1/3">
          <h3 className="text-2xl font-semibold mb-2">Navigation</h3>
          <ul className="lg:flex lg:flex-col lg:gap-4">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 2: Contact us */}
        <div className="lg:w-1/4 text-center h-1/3 align-top">
          <h3 className="text-2xl font-semibold mb-2">Contact us</h3>
          <p>Email: your@email.com</p>
          <p>Phone: +123456789</p>
        </div>

        {/* Column 3: Follow us */}
        <div className="lg:w-1/4 text-center flex flex-col justify-center h-1/3">
          <h3 className="text-2xl font-semibold mb-2">Follow us</h3>
          <div className="flex lg:flex-col justify-center items-center space-x-2 gap-4">
            <a href="#">
              <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src="/twitter.png" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#">
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal white line */}
      <hr className="my-6 border-white border-opacity-25" />

      {/* Copyright */}
      <div className="text-center">
        <p>&copy; 2023 Robnett Technologies. All rights reserved.</p>
        <p>Made by Mayank</p>
      </div>
    </footer>
  );
};

export default Footer;
