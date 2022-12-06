import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const {
    id,
    title,
    price,
    rating,
    image,
    supplier,
  } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        rating,
        image,
        supplier,
      })
    );
  };

  return (
    <div className="flex flex-col bg-white p-2 mb-5 rounded-md">
      <div className="flex justify-center">
        <Link to={`/supplier/the-alley`}>
          <img src={image} alt="product-img" className="w-48 h-48 object-cover" />
        </Link>
      </div>

      <div className="product__content">
        <div className="text-center font-semibold my-2">
          <Link to={`/supplier/the-alley`}>{title.toUpperCase()}</Link>
        </div>
        <div className="flex flex-col items-center justify-between">
          <span className="text-red-500 text-lg mb-2">{price}₫</span>
          <button className="bg-red-500 text-white py-2 px-5 text-sm rounded-lg" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
