import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaCommentMedical } from "react-icons/fa";
const HowweWork = () => {
  return (
    <section className="py-16 bg-white">
      {/* bg-[#308743 */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#4DB6AC] font-medium">OUR PROCESS</span>
          <h2 className="text-3xl font-bold text-[#00897B] mt-2 mb-4">
            How We Work
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Our streamlined process ensures you get the right care quickly and
            efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className=" p-6 rounded-xl text-center relative">
            <div className="bg-[#4DB6AC] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCommentMedical className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Request</h3>
            <p className="text-gray-600">
              Fill our online form or give us a call. We’re here to help with
              all your medical travel and caregiving needs.
            </p>
            {/* Arrow (mobile only) */}
            <div className="block md:hidden mt-4">
              <FaArrowDown className="text-[#4DB6AC] text-2xl mx-auto" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl text-center relative">
            <div className="bg-[#4DB6AC] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPeopleArrows className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Match</h3>
            <p className="text-gray-600">
              We match you with a caregiver based on your needs, preferences,
              and medical requirements.
            </p>
            <div className="block md:hidden mt-4">
              <FaArrowDown className="text-[#4DB6AC] text-2xl mx-auto" />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl text-center relative">
            <div className="bg-[#4DB6AC] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <IoHome className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Care Begins</h3>
            <p className="text-gray-600">
              Your caregiver starts with a thorough orientation to ensure
              comfort and a smooth transition.
            </p>
            <div className="block md:hidden mt-4">
              <FaArrowDown className="text-[#4DB6AC] text-2xl mx-auto" />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl text-center relative">
            <div className="bg-[#4DB6AC] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHandsHelping className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">4. Ongoing Support</h3>
            <p className="text-gray-600">
              We provide ongoing support to monitor and adjust care, ensuring
              everything runs smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowweWork;
