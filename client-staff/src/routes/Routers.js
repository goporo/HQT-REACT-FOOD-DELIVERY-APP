import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../components/Home/HomePage";
import Contract from "../components/Contract/Contract";
import Business from "../components/Business/Business";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/contract" element={<Contract />} />
      <Route path="/business/:businessId" element={<Business />} />

    </Routes>
  );
};

export default Routers;
