import React, { useState } from "react";
import logo from "/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="max-w-screen-2xl mx-auto px-4 lg:px-6 py-2.5 bg-[#f4f8fb] " >
      <nav className=" border-gray-200  ">
        <div className="flex flex-wrap justify-between items-center">
          <a href="#" className="flex items-center ">
            <img src={logo} className=" h-16" alt="Hadiya care Logo" />
            {/* <div className="flex flex-col"> */}
              <span className="text-2xl font-semibold text-dblue">HADIYA CARE</span>
              {/* <span className="text-xl font-semibold text-blue">
                Khadeeja Beevi Home Care
              </span> */}
            {/* </div> */}
          </a>
          <div className="flex flex-col-reverse lg:flex-row lg:gap-12 items-center justify-center w-full lg:w-auto text-xl ">
            {/* UL part */}
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } lg:flex w-full lg:w-auto`}
            >
              <ul className="flex flex-col gap-3 lg:gap-0 mt-3 lg:mt-0 font-semibold lg:flex-row lg:space-x-8 ">
                <li>
                  <a href="#" className="text-dblue hover:text-blue hover:bg-white px-3 duration-300 py-1 lg:hover:bg-transparent">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-dblue hover:text-blue hover:bg-white px-3 duration-300 py-1 lg:hover:bg-transparent">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-dblue hover:text-blue hover:bg-white px-3 duration-300 py-1 lg:hover:bg-transparent">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#testimonial" className="text-dblue hover:text-blue hover:bg-white px-3 duration-300 py-1 lg:hover:bg-transparent">
                    Testimonial
                  </a>
                </li>
                <li>
                  <a href="#contactUs" className="text-dblue hover:text-blue hover:bg-white px-3 duration-300 py-1 lg:hover:bg-transparent">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* call hamb */}
            <div className="flex justify-between w-full lg:w-auto mt-5 lg:mt-0">
              <a
                href="tel://+918139055749"
                className="text-white hover:bg-dblue bg-blue focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none duration-300"
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
        </div>
      </nav>
    </header>
  );
}
