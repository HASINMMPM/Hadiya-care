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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-blue rounded-lg focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
        <div className={`${isOpen ? "block" : "hidden"} lg:flex w-full lg:w-auto`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8">
            <li><a href="#" className="text-dblue hover:text-blue">Home</a></li>
            <li><a href="#" className="text-dblue hover:text-blue">About</a></li>
            <li><a href="#" className="text-dblue hover:text-blue">Services</a></li>
            <li><a href="#" className="text-dblue hover:text-blue">Testimonial</a></li>
            <li><a href="#" className="text-dblue hover:text-blue">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
}
