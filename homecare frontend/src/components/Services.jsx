import React from "react";
import { FaUserNurse } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { FaFirstAid } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import {
  personalCare,
  medicalSupport,
  dailyHelp,
} from "../assets/service.js";

const Services = () => {
  return (
    <section id="services" className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#4DB6AC] font-medium">WHAT WE OFFER</span>
          <h2 className="text-3xl font-bold text-[#00897B] mt-2 mb-4">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Comprehensive care solutions tailored to individual needs and
            preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="bg-[#4DB6AC] p-6">
              <FaUserNurse className="text-4xl text-white" />
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                Personal Care
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {personalCare.map((service, index) => (
                  <li key={index} className="flex items-start group relative">
                    <FaUserCheck className="text-[#4DB6AC] mt-1 mr-2" />
                    <span>{service.title}</span>

                    {/* Hover Text */}
                    <span className="absolute left-0 top-full mt-1 px-3 py-2 text-sm text-white bg-slate-500 z-10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {service.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="bg-[#4DB6AC] p-6">
              <FaFirstAid className="text-4xl text-white" />
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                Medical Support
              </h3>
            </div>
          <div className="p-6">
              <ul className="space-y-3">
                {medicalSupport.map((service, index) => (
                  <li key={index} className="flex items-start group relative">
                    <FaUserCheck className="text-[#4DB6AC] mt-1 mr-2" />
                    <span>{service.title}</span>

                    {/* Hover Text */}
                    <span className="absolute left-0 top-full mt-1 px-3 py-2 text-sm text-white bg-slate-500 z-10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {service.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="bg-[#4DB6AC] p-6">
              <FaHouseUser className="text-4xl text-white" />
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                Daily Help
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {dailyHelp.map((service, index) => (
                  <li key={index} className="flex items-start group relative">
                    <FaUserCheck className="text-[#4DB6AC] mt-1 mr-2" />
                    <span>{service.title}</span>

                    {/* Hover Text */}
                    <span className="absolute left-0 top-full mt-1 px-3 py-2 text-sm text-white bg-slate-500 z-10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {service.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
