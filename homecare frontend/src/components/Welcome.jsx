import React from "react";
import CountUp from "react-countup";
import { MdAccessTime } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { motion } from "motion/react";
// import welcome_rec from "/welcome small.png"
// import welcome_sqr from "/welcome big.png"

const Welcome = () => {
  
  return (
    <section
      id="home"
      className="section flex flex-col-reverse lg:flex-row bg-[#f4f8fb] justify-between gap-6  items-center"
    >
      {/* left */}
      <div className="flex flex-col  gap-0 md:gap-16 w-full lg:w-1/2">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-head text-3xl md:text-5xl lg:text-7xl font-black "
        >
          A Helping <span className="text-green">Hand</span>,<br />A Caring{" "}
          <span className="text-green">Heart</span>,<br />
          That’s <span className="text-green">Hadiya Care</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="paragraph"
        >
          We are more than just a home care provider—we are{" "}
          <b>a support system, a friend, and a trusted partner</b> in your
          family’s healthcare journey.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col items-center justify-center p-6 mt-0 md:mt-12 text-gray-900"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 24/7 Service */}
            <div className="flex flex-col items-center gap-2 text-center">
              <MdAccessTime className="text-4xl text-dblue" />
              <span className="text-lg md:text-xl font-semibold text-gray-800">
                24/7 Service
              </span>
              <span className="text-gray-600 text-sm md:text-lg">
                Always available for your needs
              </span>
            </div>

            {/* Satisfied Clients */}
            <div className="flex flex-col items-center gap-2 text-center">
              <FaUsers className="text-2xl md:text-4xl text-green" />
              <span className="text-lg md:text-xl font-semibold text-gray-800">
                Satisfied Clients
              </span>
              <span className="font-boldtext-gray-600 text-sm md:text-lg">
                <CountUp start={0} end={1000} duration={3} />+
              </span>
            </div>

            {/* No Appointment Needed */}
            <div className="flex flex-col items-center gap-2 text-center">
              <GrNotes className="text-4xl text-red-600" />
              <span className="text-lg md:text-xl font-semibold text-gray-800">
                No Appointment Needed
              </span>
              <span className="text-gray-600 text-sm md:text-lg">
                Walk in anytime for care
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* right */}
      <motion.div          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
           className="w-full object-fit lg:w-1/2">
        {/* Small screen image */}
        <img
          src="/welcome-small.jpg"
          alt="Welcome Small"
          className="block lg:hidden"
        />
        {/* Large screen image */}
        <img
          src="/welcome-big.jpg"
          alt="Welcome Big"
          className="hidden lg:block"
        />
      </motion.div>
    </section>
  );
};

export default Welcome;
