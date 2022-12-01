import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="flex flex-col bg-white p-5 mb-5 rounded-md">
      <div className="flex justify-center">
        <img src={image01} alt="product-img" className="w-32" />
      </div>

      <div className="product__content">
        <h5 className="text-center font-semibold mt-2">
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="flex items-center justify-between">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
