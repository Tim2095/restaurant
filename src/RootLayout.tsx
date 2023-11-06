import React from "react";
import Header from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";

const Cs = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />        
      </main>
    </>
  );
};

export default Cs;
