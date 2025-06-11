import React from "react";
import {
  FaCalendarAlt,
  FaClipboardList,
  FaHandHoldingUsd,
  FaHandsHelping,
  FaStopwatch,
  FaUserShield,
} from "react-icons/fa";

const WhyUs = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#4DB6AC] font-medium">WHY CHOOSE US</span>
          <h2 className="text-3xl font-bold text-[#00897B] mt-2 mb-4">
            What Makes Us Different
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            We combine the warmth of human connection with the efficiency of
            smart technology to deliver care that truly makes a difference in
            our clients' lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="why-us-card bg-white border border-gray-100 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <div className="text-[#4DB6AC] mb-4">
              <FaUserShield className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted Caregivers</h3>
            <p className="text-gray-600">
              All caregivers undergo rigorous background checks, reference
              verification, and specialized training.
            </p>
          </div>
          <div className="why-us-card bg-white border border-gray-100 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <div className="text-[#4DB6AC] mb-4">
              <FaStopwatch className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Response Time</h3>
            <p className="text-gray-600">
              95% of new client requests receive a caregiver match within 24
              hours.
            </p>
          </div>
          <div className="why-us-card bg-white border border-gray-100 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <div className="text-[#4DB6AC] mb-4">
              <FaHandsHelping className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Human Touch + Technology</h3>
            <p className="text-gray-600">
              Pilot AI support enhances caregiver coordination while preserving
              personal engagement.
            </p>
          </div>
          <div className="why-us-card bg-white border border-gray-100 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <div className="text-[#4DB6AC] mb-4">
              <FaHandHoldingUsd className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Affordable Packages</h3>
            <p className="text-gray-600">
              Customizable plans that fit different budgets without compromising
              quality.
            </p>
          </div>
          <div className="why-us-card bg-white border border-gray-100 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <div className="text-[#4DB6AC] mb-4">
              <FaClipboardList className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Family Progress Updates</h3>
            <p className="text-gray-600">
              Regular detailed reports and direct access to care plans through
              our secure portal.
            </p>
          </div>
          <div className="why-us-card bg-white border border-gray-100 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <div className="text-[#4DB6AC] mb-4">
              <FaCalendarAlt className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">
              From 2-hour visits to live-in care, we adapt to your changing
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
