import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Service from "./components/Service";

const App = () => {
  return (
    <main className="max-w-screen-2xl mx-auto bg-bg">
      <Header />
      <Welcome />
      <hr />
      <About />
      <hr />
      <Service />
      
    </main>
  );
};

export default App;
