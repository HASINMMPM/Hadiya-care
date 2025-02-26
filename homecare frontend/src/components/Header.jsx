import React from "react";
import logo from "/logo.webp";

export default function Header() {
  return (
    <header>
    <nav className="bg-bg border-gray-200 px-4 lg:px-6 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="#" className="flex items-center">
          <img src={logo} className="mr-3 h-16" alt="Hilaas Logo" />
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-dblue">HILAAS</span>
            <span className="text-xl font-semibold text-blue">
              Khadeeja Beevi Home Care
            </span>
          </div>
        </a>
        <div className="flex justify-between w-full lg:w-auto items-center lg:order-2 mt-3 lg:mt-0">
          <a
            href="tel://+918139055749"
            className="text-bg hover:bg-dblue bg-blue focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none duration-300"
          >
            Make a Call
          </a>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-blue rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-dblue hover:text-blue duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-dblue hover:text-blue duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-dblue hover:text-blue duration-200">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-dblue hover:text-blue duration-200">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-dblue hover:text-blue duration-200">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
}
