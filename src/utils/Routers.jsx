import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Authenticate } from "../pages/Authenticate";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Authenticate />} />
      {/* <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};
