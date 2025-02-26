import React, { useState } from "react";
import logo from "/logo.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
          
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex w-full lg:w-auto`}
          >
            <ul className="flex flex-col gap-3 lg:gap-0 mt-3 lg:mt-0 font-semibold lg:flex-row lg:space-x-8">
              <li>
                <a href="#" className="text-dblue hover:text-blue">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-dblue hover:text-blue">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-dblue hover:text-blue">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-dblue hover:text-blue">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#" className="text-dblue hover:text-blue">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between w-full lg:w-auto mt-5 lg:mt-0">
            <a
              href="tel://+918139055749"
              className="text-bg hover:bg-dblue bg-blue focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none duration-300"
            >
              Make a Call
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-blue rounded-lg focus:outline-none text-end"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>

        
        </div>
      </nav>
    </header>
  );
}
