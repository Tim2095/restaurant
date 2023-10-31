import React from "react";
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";
const Cs = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Cs;
