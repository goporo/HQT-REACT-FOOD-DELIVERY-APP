import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Statistics from "../pages/Statistics";
import Settings from "../pages/Settings";
import Order from "../components/Order/Order";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/order" element={<Order />} />
      <Route path="/setting" element={<Settings />} />

    </Routes>
  );
};

export default Routers;
