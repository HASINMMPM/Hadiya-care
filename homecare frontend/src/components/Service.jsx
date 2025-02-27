import React, { useEffect, useState } from "react";
import {
  ourServices,
  nursingHomeCareServices,
  otherServices,
} from "../assets/service";
import { motion } from "framer-motion";

const Service = () => {
  const [selectedServices, setSelectedServices] = useState("Our Services");
  const [services, setServices] = useState(ourServices);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (selectedServices === "Our Services") {
      setServices(ourServices);
    } else if (selectedServices === "Nursing Home Care Services") {
      setServices(nursingHomeCareServices);
    } else if (selectedServices === "Other Services") {
      setServices(otherServices);
    }
  }, [selectedServices]);

  return (
    <section className="section" id="services">
      <h2 className="section-title">Services</h2>

      <div className="sticky top-0 bg-white z-50 shadow-md py-2">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="paragraph w-full text-white bg-blue hover:bg-dblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          {selectedServices}{" "}
          <motion.svg
            className="w-2.5 h-2.5 ml-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
            animate={{ rotate: dropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </motion.svg>
        </button>
      </div>

      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        className="z-10 hidden bg-blue divide-y divide-gray-100 rounded-lg shadow-sm w-full  max-w-screen-xl"
      >
        <ul
          className="py-2 text-sm text-white"
          aria-labelledby="dropdownDefaultButton"
        >
          <li
            className="hover:bg-dblue px-3 py-2"
            onClick={() => setSelectedServices("Our Services")}
          >
            <span className=" paragraph font-semibold cursor-pointer  ">
              Our Services
            </span>
          </li>
          <li
            className="hover:bg-dblue px-3 py-2"
            onClick={() => setSelectedServices("Nursing Home Care Services")}
          >
            <span className=" paragraph font-semibold cursor-pointer  ">
              Nursing Home Care Services
            </span>
          </li>
          <li
            className="hover:bg-dblue px-3 py-2"
            onClick={() => setSelectedServices("Other Services")}
          >
            <span className=" paragraph font-semibold cursor-pointer  ">
              Other Services
            </span>
          </li>
        </ul>
      </div>
      {/* SHOW SELECTED START */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-6 px-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 hover:shadow-lg hover:bg-bg duration-300 bg-slate-50/60 shadow-md"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg md:text-xl">{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
      {/* SHOW SELECTED END */}
      {/* SHOW ALL START */}
      {/* <div className="services grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap3 py-6 px-3">
        <div className="flex flex-col gap-2 ">
       <h3 className="text-dblue text-lg font-black md:text-2xl text-center">Our Services</h3>
          {ourServices.map((service, index) => (
            <div key={index} className="p-6 hover:shadow-lg hover:bg-bg duration-300 bg-slate-50/60 shadow-md">
              <h3 className="font-bold text-lg md:text-xl ">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 ">
        <h3 className="text-dblue text-lg font-black md:text-2xl text-center">Other Services</h3>
          {otherServices.map((service, index) => (
            <div key={index} className="p-6 hover:shadow-lg hover:bg-bg duration-300 bg-slate-50/60 shadow-md">
              <h3 className="font-bold text-lg md:text-xl ">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 ">
        <h3 className="text-dblue text-lg font-black md:text-2xl text-center">Nursing Home Care Services</h3>
          {nursingHomeCareServices.map((service, index) => (
            <div key={index} className="p-6 hover:shadow-lg hover:bg-bg duration-300 bg-slate-50/60 shadow-md">
              <h3 className="font-bold text-lg md:text-xl ">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div> */}
      {/* SHOW ALL END */}
    </section>
  );
};

export default Service;
