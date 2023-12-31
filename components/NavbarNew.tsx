import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavbarNew() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-[rgba(0,0,0,0.9)] md:bg-[rgba(0,0,0,0.9)] fixed top-0 left-0 right-0 z-10 font-manrope">
        <div className="justify-between px-4 mx-auto lg:w-full md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <img src="/images/Final_logo.png" className="w-16 h-auto" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
              onClick={() => setNavbar(!navbar)}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <Link
                  href="#home"
                  onClick={() => setNavbar(!navbar)}
                  className="cursor-pointer"
                >
                  <li className="text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-primary-orange  border-primary-orange  md:hover:text-primary-orange md:hover:bg-transparent flex items-center justify-center h-16">
                    Home
                  </li>
                </Link>
                <Link
                  href="#about"
                  onClick={() => setNavbar(!navbar)}
                  className="cursor-pointer"
                >
                  <li className=" text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-primary-orange  border-primary-orange  md:hover:text-primary-orange md:hover:bg-transparent">
                    About
                  </li>
                </Link>
                <Link
                  href="#services"
                  onClick={() => setNavbar(!navbar)}
                  className="cursor-pointer"
                >
                  <li className="text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-primary-orange  border-primary-orange  md:hover:text-primary-orange md:hover:bg-transparent">
                    Serivces
                  </li>
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setNavbar(!navbar)}
                  className="cursor-pointer"
                >
                  <li className="text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-primary-orange  border-primary-orange  md:hover:text-primary-orange md:hover:bg-transparent">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarNew;
