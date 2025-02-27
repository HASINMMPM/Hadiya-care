import React from "react";
import logo from "/logo.jpeg";

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Us</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* RIGHT */}
        <div className="w-full lg:w-1/2"></div>
        {/* END */}
        {/* LEFT */}
        <div className="w-1/2 lg:w-full">
          <img src={logo} alt="" />
        </div>
        {/* ?END */}
      </div>
    </section>
  );
};

export default About;
