import FoodItem from "./FoodItem";
import { useEffect, useState } from "react";
import Modal from 'react-modal';

import LazyLoad from 'react-lazy-load';
import 'react-loading-skeleton/dist/skeleton.css'
import { formatVND } from "../../utils/currencyFormatter";
import { Link } from "react-router-dom";
import AddFoodModal from "./AddFoodModal";

const MenuPage = () => {
  const [foods, setFoods] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addFood = async () => {
    const response = await fetch("http://localhost:5000/supplier/food/1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        TENMONAN: "com tam " + Math.random(),
        MOTA: "com tam ngon lam ban oi",
        GIA: 20000,
        HINHANHTD: 0,
        DIACHIHINHANHTD: "227 Nguyen Van Cu",
        MALAT: "1"
      }),
    });

    if (response.ok) {
      console.log("success");

      getFoods();
    } else {
      console.log("fail");
    }
  }

  async function getFoods() {
    const response = await fetch("http://localhost:5000/supplier/1");
    const data = await response.json();
    setFoods(data.data.foods);
  }

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className="flex w-12/12 space-x-5">
      <div className="bg-white w-full rounded-xl shadow-sm my-10 pb-10">
        <div className="flex justify-between items-center w-11/12 mt-10 mb-8 mx-auto">
          <h2 className="text-3xl font-semibold">Today Menu</h2>

          <button className="bg-yellow-500 text-white px-10 py-3 rounded-xl font-semibold" onClick={() => setIsModalOpen(true)}>
            Add
          </button>
        </div>

        <div className="w-11/12 mx-auto">
          <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-16">
            {foods.map((food, index) => (
              <FoodItem key={index} f={food} />
            ))}
          </div>
        </div>
      </div>

      <AddFoodModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default MenuPage;
