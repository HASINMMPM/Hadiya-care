import React from "react";
import { motion } from "framer-motion";
import review from "../assets/comment.json";

const Review = () => {
  const colors = [
    "bg-red-500",
    "bg-green",
    "bg-blue",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-dblue",
    "bg-dgreen",
  ];
  return (
    <section className="section overflow-hidden" id="testimonial">
      <h2 className="section-title">Testimonial</h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {review.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] lg:min-w-[600px]  p-6 bg-white shadow-lg rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-lg font-semibold ${
                    colors[index % colors.length]
                  }`}
                >
                  {item.auther.charAt(0).toUpperCase()}
                </span>
                <p className="text-gray-600">{item.auther}</p>
              </div>
              <h3 className="text-lg font-medium mt-3">{item.review}</h3>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-12">
        <a
          target="_blank"
          rel="noopener noreferrer"
         
          href="https://www.justdial.com/Malappuram/High-Tech-Garments-Melmuri/9999PX483-X483-221202155127-N5W2_BZDET?via=scode"
          className="text-white bg-blue hover:bg-dblue px-8 py-2 rounded-md duration-150" 
        >
          Share Your Feedback & View More
        </a>
      </div>
    </section>
  );
};

export default Review;
