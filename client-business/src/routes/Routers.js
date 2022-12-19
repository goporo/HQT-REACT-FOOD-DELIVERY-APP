import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";



import NotFound from "../components/NotFound/NotFound";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Layout from "../components/Layout/Layout";
import Profile from "../components/Auth/Profile";
import Protected from "../components/Auth/Protected";
import Contract from "../components/Contract/Contract";
import ContractDetails from "../components/Contract/ContractDetails";


const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path="/" element={<Navigate to="/contract" />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/contract/:contractId" element={<ContractDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />




      </Route>

    </Routes>
  );
};

export default Routers;
