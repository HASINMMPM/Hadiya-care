import React from "react";
import { FaCalendarCheck, FaClock, FaSmile } from "react-icons/fa";

const Feature = () => {
  return (
    <section className="pb-16 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card bg-[#4DB6AC] p-6 rounded-xl transition duration-300 flex items-start text-white">
            <div className="bg-white p-3 rounded-full mr-4">
              <FaClock className="text-[#4DB6AC] text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-100">
                Round-the-clock care available whenever you need us.
              </p>
            </div>
          </div>
          <div className="feature-card bg-[#4DB6AC] p-6 rounded-xl transition duration-300 flex items-start text-white">
            <div className="bg-white p-3 rounded-full mr-4">
              <FaSmile className="text-[#4DB6AC] text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Satisfied Clients</h3>
              <p className="text-gray-100">
                95% of families report improved quality of life.
              </p>
            </div>
          </div>
          <div className="feature-card bg-[#4DB6AC] p-6 rounded-xl transition duration-300 flex items-start text-white">
            <div className="bg-white p-3 rounded-full mr-4">
              <FaCalendarCheck className="text-[#4DB6AC] text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">No Appointment Needed</h3>
              <p className="text-gray-100">
                Same-day service available for urgent needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
