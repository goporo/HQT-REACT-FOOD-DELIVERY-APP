import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LazyLoad from "react-lazy-load";

const orders = [
  {
    orderID: "O001",
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
    orderID: "O002",
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
  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    const getData = () => {

      axios.put(`/order/customer`, {

        "MAKH": "1",

      })
        .then(function (res) {
          let temp = res.data.data.supplier;

          temp = temp.map(item => {
            return {
              name: item.TENCH,
              location: "Burger King - Fast Food",
              logo: "/images/restaurant-logo/burger-king.png",
            }
          });
          setSupplier(temp[0]);
        })
        .catch(function (e) {
          console.log(e);
        });
    };
    getData();
  }, [])


  return (
    <section>
      <div>
        <div>
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
    // { id,
    //   title,
    //   price,
    //   rating,
    //   image,
    //   supplier },
    shipper,
    status
  } = props.item;
  return (
    <div className="mb-10 bg-white p-5 shadow-sm rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold bg-orange-400 text-white text-sm w-fit rounded-md py-2 px-3">ORDER: {orderID}</div>
        <div className={`flex flex-row justify-center text-white text-sm py-1 px-2 rounded-md ${status === "Delivered" ? "bg-green-500" : "bg-orange-400"}`}>
          {status}
        </div>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex flex-row space-y-2">
          <div className="w-3/12 text-lg capitalize">{item.id}</div>
          <div className="w-4/12 text-lg capitalize">{item.title}</div>
          <p className="w-2/12 text-orange-500 text-lg">${item.price}</p>
        </div >
      ))}
      <hr className="my-2" />
      <div className="flex items-end flex-col space-y-2">
        <div className="text-lg">Người giao hàng: <span className="text-orange-400">{shipper}</span></div>
        {
          status === "Validating" ?
            <button
              className="w-[150px] py-3 bg-red-500 text-white cursor-pointer hover:opacity-80 rounded-md">
              Cancel
            </button>
            :
            <button
              className="w-[150px] py-3 bg-red-500 text-white cursor-pointer hover:opacity-80 rounded-md">
              Received
            </button>
        }
      </div>
    </div>
  );
};

export default Order;
