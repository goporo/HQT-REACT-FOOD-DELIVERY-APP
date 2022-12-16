import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


import AllFoods from "../components/Foods/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Checkout from "../pages/Checkout";

import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../components/Home/HomePage";
import SupplierPage from "../components/Supplier/SupplierPage";
import Cart from "../components/Cart/Cart";
import Order from "../components/Order/Order";
import NotFound from "../components/NotFound/NotFound";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/foods" element={<AllFoods />} />
      {/* <Route path="/foods/:id" element={<FoodDetails />} /> */}
      <Route path="/supplier/:supplierId" element={<SupplierPage />} />

      {/* <Route path="/cart" element={
        <ProtectedRoute>

          <Cart />
        </ProtectedRoute>
      } /> */}
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/order" element={<Order />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
