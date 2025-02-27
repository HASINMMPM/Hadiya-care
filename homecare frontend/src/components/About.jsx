import React from "react";
import logo from "/logo.png";
import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center justify-center">
        {/* RIGHT */}
        <div className="w-full flex flex-col gap-6">
          <h2 className="section-title">About Us</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="paragraph"
          >
            <p className="">
            For over <b>three years</b>, we have been dedicated to providing <b>professional and compassionate home care services</b> to those in need. Our team consists of highly <b>qualified nurses</b>, including <b>ANM, JNM, BSc nurses</b>, and experienced <b>home nurses</b>, along with reliable <b>daily wage staff</b> to ensure round-the-clock support.  
            </p>
            <p className="">
            We believe in <b>personalized care</b> that brings comfort, dignity, and independence to our clients, whether they need <b>medical assistance, elderly care, post-hospitalization support, or daily living aid</b>. Our services are designed to cater to <b>individual needs</b>, ensuring the highest level of care and attention.  
            </p>
            <p className="">
              <b>Because every life matters, and every home deserves care</b>.
            </p>
          </motion.div>

          <span className="paragraph mt-10">
            Looking for reliable home care services?{" "}
            <a
              href="tel://+918139055749"
              className="text-white hover:bg-dblue bg-blue focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none duration-300"
            >
              Contact us
            </a>{" "}
          </span>
        </div>
        {/* END */}
        {/* LEFT */}
        <div className="w-full lg:w-full">
          <img src={logo} alt="" />
        </div>
        {/* ?END */}
      </div>
    </section>
  );
};

export default About;
