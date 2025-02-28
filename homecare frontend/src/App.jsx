import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Service from "./components/Service";
import Review from "./components/Review";

import { IoLogoWhatsapp } from "react-icons/io";

const App = () => {
  return (
    <main className="max-w-screen-2xl mx-auto bg-bg">
      <a
        target="_blank"
        className="fixed bottom-0  right-6 text-2xl md:text-4xl p-4"
        href="https://wa.me/918139055749?text=Hello Hadiya care"
      >
        <IoLogoWhatsapp className="bg-green p-1 rounded-full text-bg" />
      </a>
      <Header />
      <Welcome />
      <hr className="h-2 text-white" />
      <About />
      <hr className="h-2 text-white" />
      <Service />
      <hr className="h-2 text-white" />
      <Review />
    </main>
  );
};

export default App;
