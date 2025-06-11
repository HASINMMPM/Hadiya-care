import React from 'react'
import { motion } from "framer-motion";
import review from "../assets/comment.json";
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
const Testimonal = () => {
  return (
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <span className="text-[#4DB6AC] font-medium">HEAR FROM FAMILIES</span>
                <h2 className="text-3xl font-bold text-[#00897B] mt-2 mb-4 ">What Families Say</h2>
                <p className="max-w-2xl mx-auto ">Don't just take our word for it - hear from families who've experienced our care firsthand.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
            
            <div className="text-center mt-12">
                <button className="bg-[#00897B] text-white px-8 py-3 rounded-full hover:bg-gray-200 hover:text-[#00897B] transition inline-flex items-center">
                    <i className="fas fa-pen-fancy mr-2"></i> Share Your Experience
                </button>
            </div>
        </div>
    </section>
  )
}

export default Testimonal