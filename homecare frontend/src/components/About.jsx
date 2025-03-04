import React from "react";

import { motion } from "motion/react";

const About = () => {
  const data = [
    {
      title: "Personalized Care Plans",
      description:
        "We tailor our services to meet your unique needs, ensuring you receive the specific support required to maintain your independence at home.",
    },
    {
      title: "Professional and Compassionate Team",
      description:
        "Our caregivers are not only highly trained and experienced but also dedicated to delivering care with empathy and respect.",
    },
    {
      title: "Comprehensive Range of Services",
      description:
        "From nursing care and physiotherapy to doctor visits and laboratory services, we offer a wide spectrum of home health services under one roof.",
    },
    {
      title: "Focus on Client Satisfaction",
      description:
        "Your satisfaction is our priority. We regularly seek feedback to continually enhance our services and ensure we meet your expectations.",
    },
    {
      title: "Commitment to Quality and Safety",
      description:
        "We adhere to stringent health and safety protocols, ensuring a secure environment for both our clients and staff.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "Understanding that each client's situation is unique, we offer flexible scheduling options to accommodate your specific needs and preferences.",
    },
  ];
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
              For over <b>three years</b>, we have been dedicated to providing{" "}
              <b>professional and compassionate home care services</b> to those
              in need. Our team consists of highly <b>qualified nurses</b>,
              including <b>ANM, JNM, BSc nurses</b>, and experienced{" "}
              <b>home nurses</b>, along with reliable <b>daily wage staff</b> to
              ensure round-the-clock support.
            </p>
            <p className="">
              We believe in <b>personalized care</b> that brings comfort,
              dignity, and independence to our clients, whether they need{" "}
              <b>
                medical assistance, elderly care, post-hospitalization support,
                or daily living aid
              </b>
              . Our services are designed to cater to <b>individual needs</b>,
              ensuring the highest level of care and attention.
            </p>
            <p className="">
              <b>Because every life matters, and every home deserves care</b>.
            </p>
          </motion.div>

          <span className="paragraph mt-10">
            Looking for reliable home care services?{" "}
            <a
              href="tel://+918139055749"
              className="text-white ml-3 hover:bg-dblue bg-blue focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none duration-300"
            >
              Contact us
            </a>{" "}
          </span>
        </div>
        {/* END */}
        {/* LEFT */}
        <div className="w-full lg:w-full">
          <img src="logo 680.webp" alt="Hadiya home care logo"
            srcSet="
            /logo 339.webp 339w,
            /logo 680.webp 680w,
            /logo 999.webp 999w,
            /logo 1300.webp 1300w" 
            loading="lazy"/>
        </div>
        {/* ?END */}
      </div>

      {/* SECOND SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* WHY US */}
        <div className="w-full flex flex-col gap-6  mb-6 lg:mb-0">
          <h3 className="text-dgreen text-xl lg:text-2xl font-head font-semibold">
            Why Us
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="paragraph"
          >
            <p className="">
              At Hadiya Care, we are committed to providing exceptional home
              care services that prioritize your well-being and comfort. Here
              are some reasons why you should choose us
            </p>
          </motion.div>
          <div className="mx-auto">
            {data.map((data, index) => {
              return (
                <ul key={index}>
                  <motion.li
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="py-2"
                  >
                    <h4 className="font-bold text-lg md:text-xl text-dgreen">
                      {data.title}
                    </h4>
                    <p>{data.description}</p>
                  </motion.li>
                </ul>
              );
            })}
          </div>
        </div>
        {/* HOW WE */}
        <div className="w-full lg:px-6 flex flex-col gap-6 ">
          <h3 className="text-dgreen text-xl lg:text-2xl font-head font-semibold">
            How We Work
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="paragraph"
          >
            <p className="">
              At Hadiya Care, we are dedicated to providing exceptional
              healthcare support for individuals traveling to Kerala for medical
              treatment from countries such as the UAE, Qatar, Oman, Saudi
              Arabia, Kuwait, and Muscat. We offer experienced and trained staff
              to assist patients throughout their treatment journey, ensuring
              comfort, personalized care, and seamless coordination with medical
              professionals.
            </p>
            <p className="mt-2">
              In addition to supporting international patients, we also provide
              skilled caregivers to homes and hospitals across Kerala. Our
              services are designed to offer professional and compassionate
              assistance, whether for post-surgical care, elderly support, or
              long-term patient care.
            </p>
            <p className="mt-2">
              Located in <b>Melmuri</b>, Malappuram, Hadiya Care operates with a
              commitment to quality healthcare services. Our working hours are
              <b>from 9:00 AM to 6:00 PM</b>, ensuring accessibility and prompt
              response to patient needs. With a team of dedicated professionals,
              we strive to make healthcare more comfortable and efficient for
              those in need.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
