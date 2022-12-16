import React from "react";
import District from "../components/Home/DistrictItem";
import district from "../assets/fake-data/districts.js";

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
    <section>
      <div>
        <div>
          <div className="flex flex-row mt-6">
            <h2 className="text-xl font-semibold mt-4 pl-16">District:</h2>
            <div className="choices">
                <div className="mt-3 mb-3 xl:w-96 px-12">
                    <select className="form-select appearance-none block w-72 px-3 py-1.5 text-base
                    font-semibold text-center text-gray-700bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        {district.map((items) => (
                            <District key={items.id} d={items} />
                        ))}
                    </select>
                </div>
            </div>
          </div>
          <div className="p-10 relative w-11/12">
            {orders.length === 0 ? (
              <h5 className="text-center">Your cart is empty</h5>
            ) : (
              <div className="">
                {orders.map((item, index) => (
                  <Tr key={index} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
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
