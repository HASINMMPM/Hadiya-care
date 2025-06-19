import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
const Cta = () => {
  return (
    <section className="py-16 " id='contact'>
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#00897B] mb-6">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto  mb-8">Contact us today for a free consultation to discuss your care needs and how we can help.</p>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white flex items-center gap-3 text-[#4DB6AC] px-8 py-3 rounded-full hover:bg-gray-100 transition font-medium">
                <FaPhone/> Call Now
                </button>
                <button className="bg-transparent flex items-center gap-3 border-2 border-[#2EB937]  px-8 py-3 rounded-full hover:bg-[#2EB937] hover:text-white transition duration-300 font-medium">
                    <FaWhatsapp className='text-xl'/> Send Message
                </button>
            </div>
        </div>
    </section>
  )
}

export default Cta