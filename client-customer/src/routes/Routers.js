import React from "react";
import { Routes, Route } from "react-router-dom";


import AllFoods from "../components/Foods/AllFoods";

import HomePage from "../components/Home/HomePage";
import SupplierPage from "../components/Supplier/SupplierPage";
import Cart from "../components/Cart/Cart";
import Order from "../components/Order/Order";
import NotFound from "../components/NotFound/NotFound";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Layout from "../components/Layout/Layout";
import Profile from "../components/Auth/Profile";
import Protected from "../components/Auth/Protected";


const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/foods" element={<AllFoods />} />
        <Route path="/supplier/:supplierId" element={<SupplierPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />

        <Route element={<Protected />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

      </Route>

    </Routes>

  );
};

export default Routers;
