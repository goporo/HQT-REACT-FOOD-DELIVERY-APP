import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../components/Home/HomePage";
import SupplierPage from "../components/Supplier/SupplierPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/supplier/:id" element={<SupplierPage />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
};

export default Routers;
