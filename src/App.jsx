import React from "react";
import Cta from "./components/Cta";
import Testimonal from "./components/Testimonal";
import Services from "./components/Services";
import HowweWork from "./components/HowweWork";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
  
   <main className="font-poppins text-[#374151] bg-gray-50">
    <Header/>
    <Hero/>
    <About/>
    <WhyUs/>
    <HowweWork/>
    <Services/>
    <Testimonal/>
    <Cta/>
    <Footer/>
    </main>
  );
};

export default App;
