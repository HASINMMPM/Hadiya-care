import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Service from "./components/Service";

const App = () => {
  return (
    <main className="">
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
