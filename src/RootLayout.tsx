import React from "react";
import Header from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu";
import Footer from "./layout/Footer";

const Cs = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />  
        <Menu />   
        <Footer />   
      </main>
    </>
  );
};

export default Cs;
