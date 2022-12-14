import { BiChevronDown } from "react-icons/bi";
import FoodItem from "./FoodItem";
import NearbyResaurant from "./NearbyResaurant";



import { useEffect, useState } from 'react';

import axios from 'axios';



export default function HomePage() {
    const [foods, setFoods] = useState([]);
    const [restaurants, setRestaurants] = useState([]);

    const getFoods = () => {
        axios.put('/food/mostSold', {
            params: {
                // ID: 12345
            }
        })
            .then(function (res) {
                let items = res.data.map((item) => {
                    return {
                        title: item.TENMONAN,
                        supplier: item.MACN,
                        price: item.GIA,
                        image: item.DIACHIHINHANHTD ? item.DIACHIHINHANHTD : "http://yummyverse.net/images/default.png",
                        TINHTRANG: item.TINHTRANG.trim()
                    }
                });
                setFoods(items.filter(item => item.TINHTRANG != "DELETED"));
            })
            .catch(function (e) {
                console.log(e);
            });
    }
    const getRestaurants = () => {
        axios.get('/supplier', {
            params: {
            }
        })
            .then(function (res) {
                console.log(res.data.data);

                let items = res.data.data.map((item) => {
                    return {
                        id: item.MACN[0],
                        name: item.TENCH ? item.TENCH : `Restaurant ${item.MACN[0]}`,
                        title: "logo",
                        logo: item.DIACHIHINHANHND ? item.DIACHIHINHANHND : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png",
                        rating: 5,
                        distance: '< 1',
                        offer: 'FreeShip'
                    }
                });
                setRestaurants(items);
            })
            .catch(function (e) {
                console.log(e);
            });
    }
    useEffect(() => {
        getFoods();
        getRestaurants();
    }, [])

    return (
        <div className="flex w-11/12 mx-auto space-x-5 my-10">
            <div className="bg-white w-full rounded-xl shadow-sm my-10 pb-10">
                <div className="flex justify-between items-center w-11/12 mt-10 mb-8 mx-auto">
                    <h2 className="text-xl font-semibold">Popular Food</h2>
                    <div className="flex items-center space-x-1 text-sm bg-gray-100 rounded-lg px-2.5 py-2">
                        <span>This week</span>
                        <span>
                            <BiChevronDown className="text-xl" />
                        </span>
                    </div>
                </div>

                <div className="w-11/12 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-16">
                        {foods.map((food, index) => (
                            <FoodItem key={index} f={food} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="">
                <NearbyResaurant restaurants={restaurants} />
            </div>
        </div>
    );
}

