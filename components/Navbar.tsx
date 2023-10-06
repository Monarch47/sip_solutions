"use client";

import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar h-20 bg-[rgba(0,0,0,0.3)] fixed z-[4] font-manrope flex">
      <div className="dropdown bg-green-300">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-5 z-[1] h-54 bg-[rgba(0,0,0,0.3)] rounded-box w-28 flex flex-col items-center justify-center gap-10 text-white font-bold"
        >
          <li className="hover:text-white">
            <a>Home</a>
          </li>
          <li className="hover:text-white">
            <a>About</a>
          </li>
          <li className="hover:text-white">
            <a>Services</a>
          </li>
          <li className="hover:text-white">
            <a>Contact</a>
          </li>
        </ul>
        <a className="cursor-pointer md:hover:scale-110 ease-in-out">
          <img src="/images/Final_logo.png" alt="" className="w-24" />
        </a>
      </div>
      <div className="w-full hidden lg:flex justify-end items-end ">
        <ul className="menu menu-horizontal px-1 text-lg md:text-x">
          <li className="hover:text-white">
            <a>Home</a>
          </li>
          <li className="hover:text-white">
            <a>About</a>
          </li>
          <li className="hover:text-white">
            <a>Services</a>
          </li>
          <li className="hover:text-white">
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
