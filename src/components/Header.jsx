import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.webp";

const Header = () => {
  const navMenuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" &&
        target.getAttribute("href").startsWith("#")
      ) {
        e.preventDefault();

        const targetId = target.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });

          // Close mobile menu after navigation
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-14 h-14 flex items-center justify-center mr-2">
            <img src={logo} alt="" />
          </div>
          <span className="text-2xl font-bold text-[#00897B]">Hadiya Care</span>
        </div>

        <nav
          className={`md:block ${
            isMenuOpen
              ? "block absolute top-16 left-0 right-0 bg-white py-4 px-8 shadow-lg"
              : "hidden"
          } md:static`}
        >
          <ul
            className="flex flex-col md:flex-row md:space-x-8"
            ref={navMenuRef}
          >
            <li>
              <a
                href="#"
                className="font-medium hover:text-[#4DB6AC] transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="font-medium hover:text-[#4DB6AC] transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="font-medium hover:text-[#4DB6AC] transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-medium hover:text-[#4DB6AC] transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center">
          <button className="bg-[#4DB6AC] text-white px-6 py-2 rounded-full hover:bg-[#00897B] transition hidden md:block">
            Call Now
          </button>
          <button
            className="md:hidden text-[#00897B] focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
