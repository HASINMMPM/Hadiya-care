import React from 'react'
import Feature from './Feature'

const Hero = () => {
  return (
    <section className="hero-image  pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl bg-white bg-opacity-90 p-8 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00897B] mb-4">
            Compassionate Care<br/> <span className="text-[#4DB6AC]">At Home</span>
          </h1>
          <p className="text-lg mb-8">
            At Hilaas Homecare, we provide personalized, dignified care that
            helps seniors maintain independence and quality of life in the
            comfort of their own home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-[#4DB6AC] text-white px-8 py-3 rounded-full hover:bg-[#00897B] transition"
            >
              Request Care
            </button>
            <button
              className="border border-[#4DB6AC] text-[#4DB6AC] px-8 py-3 rounded-full hover:bg-[#308743] transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Feature/>
    </section>
  )
}

export default Hero