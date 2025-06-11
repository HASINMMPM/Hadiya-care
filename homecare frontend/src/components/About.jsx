import React from "react";
import { FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
        {/* bg-[#308743] */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl font-bold text-[#00897B] mb-6">
              Our Mission
            </h2>
            <p className="text-lg mb-6">
              Founded in 2010, Hilaas Homecare is built on the belief that
              everyone deserves to age with dignity in the comfort of their
              home. We carefully match caregivers not just based on skills, but
              on personality and shared interests to foster meaningful
              relationships.
            </p>
            <p className="text-lg mb-8">
              Our trained professionals provide compassionate care while
              respecting each individual's unique needs, preferences, and
              routines. We empower seniors to maintain their independence while
              ensuring safety and wellbeing.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[#4DB6AC] italic">
                "We're just one call away."
              </span>
              <button className="bg-[#4DB6AC] text-white px-5 md:px-8 py-3 rounded-full hover:bg-[#00897B] transition mr-6">
                Call Now
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1661416502553-6e40f9440f6a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Caregiver helping senior woman"
              className="rounded-xl shadow-lg w-full"
            />
            <div className="absolute -bottom-6 md:-right-6 bg-white p-2 md:p-4 rounded-xl shadow-md ">
              <div className="flex items-center">
                <div className="bg-[#4DB6AC] text-white p-3 rounded-full mr-3">
                  <FaHeart className="text-sm md:text-xl"/>
                </div>
                <div>
                  <p className="font-semibold">250+</p>
                  <p className="text-sm text-gray-600">Families Helped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
