import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Register from "../pages/Register";
const Routers = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
