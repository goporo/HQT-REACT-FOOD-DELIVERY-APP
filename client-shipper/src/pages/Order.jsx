import React from "react";
import District from "../components/Home/DistrictItem";
import district from "../assets/fake-data/districts.js";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";

const orders = [
    {
        orderID: "001",
        items: [
            {
                id: "food_1",
                title: "chicken deluxe fry",
                price: 150.0,
                rating: 4.3,
                image: "/images/chicken_deluxe_fry.jpg",
                supplier: "the-alley",

            },
            {
                id: "food_2",
                title: "Pasta",
                price: 70.0,
                rating: 4.3,
                image: "/images/pasta.jpg",
                supplier: "the-alley",
                status: "Delivered",
            }
        ],
        shipper: "Nguyen Hoai An",
        status: "Validating",
    },
    {
        orderID: "002",
        items: [
            {
                id: "food_1",
                title: "chicken deluxe fry",
                price: 150.0,
                rating: 4.3,
                image: "/images/chicken_deluxe_fry.jpg",
                supplier: "the-alley",

            },
            {
                id: "food_2",
                title: "Pasta",
                price: 70.0,
                rating: 4.3,
                image: "/images/pasta.jpg",
                supplier: "the-alley",
                status: "Delivered",
            }
        ],
        shipper: "Nguyen Hoai An",
        status: "Delivered",
    },
]

const Order = () => {
    return (
        <>

        </>
    );
};

const Tr = (props) => {

    const {
        orderID,
        items,
    } = props.item;
    return (
        <div className="mb-10 bg-white p-5 shadow-sm rounded-lg">
            <div className="flex items-center justify-between mb-2">
                <div className="font-semibold bg-orange-400 text-white text-sm w-fit rounded-md py-2 px-3">ORDER: {orderID}</div>
            </div>
            {items.map((item, index) => (
                <div key={index} className="flex flex-row space-y-2">
                    <div className="w-3/12 text-lg capitalize mt-2">{item.id}</div>
                    <div className="w-4/12 text-lg capitalize">{item.title}</div>
                    <p className="w-2/12 text-orange-500 text-lg">${item.price}</p>
                </div >
            ))}
            <hr className="my-2" />
            <div className="text-end">
                <button className="w-[150px] py-3 bg-red-500 text-white cursor-pointer hover:opacity-80 rounded-md">
                    Received
                </button>
            </div>
        </div>
    );
};

export default Order;