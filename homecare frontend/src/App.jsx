import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Service from "./components/Service";
import Review from "./components/Review";

import { FaWhatsapp  } from "react-icons/fa";
import ChatInfo from "./components/ChatInfo";

const App = () => {
  return (
    <main className="max-w-screen-2xl mx-auto bg-bg">
      <Header />
      <Welcome />
      <hr className="h-2 text-white" />
      <About />
      <hr className="h-2 text-white" />
      <Service />
      <hr className="h-2 text-white" />
      <Review />
      <ChatInfo />
      <a
        target="_blank"
        className="z-60 fixed bottom-5 bg-green right-5 text-4xl p-2 rounded-full"
        href="https://wa.me/918139055749?text=Hello Hadiya care"
      >
        <FaWhatsapp  className=" rounded-full text-bg" />
      </a>
    </main>
  );
};

export default App;
