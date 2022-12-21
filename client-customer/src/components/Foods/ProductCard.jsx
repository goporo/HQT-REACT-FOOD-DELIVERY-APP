import React from "react";


import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import LazyLoad from 'react-lazy-load';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
        alert("Add successful!")
    };

    return (
        <div className="flex flex-col bg-white py-4 mb-4 rounded-md">
            <div className="flex justify-center">
                <Link to={`/supplier/${id}`}>
                    <LazyLoad height={208}>
                        <img src={image} alt="product-img" className="w-52 h-52 object-cover rounded-md" />
                    </LazyLoad>
                </Link>
            </div>

            <div className="product__content">
                <div className="text-center font-semibold my-2 capitalize">
                    <Link to={`/supplier/the-alley`}>{title}</Link>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <span className="text-red-500 text-lg mb-2">{price}đ</span>
                    <button className="bg-red-500 text-white py-2 px-5 text-sm rounded-lg" onClick={addToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
